<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Seat;
use App\Models\SmartQueue;
use App\Models\Notification;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function myQueue(Request $request)
    {
        SeatBooking::cancelExpiredBookings();
        $queueEntries = SmartQueue::with(['seat.library', 'seat.floor'])
            ->where('user_id', $request->user()->id)
            ->whereIn('status', ['waiting', 'notified'])
            ->orderBy('joined_at', 'desc')
            ->get();

        // Calculate estimated wait time for each entry
        foreach ($queueEntries as $entry) {
            $activeBooking = SeatBooking::where('seat_id', $entry->seat_id)
                ->whereIn('status', ['booked', 'checked_in'])
                ->orderBy('scheduled_end_time', 'desc')
                ->first();

            if ($activeBooking) {
                $minutesRemaining = now()->diffInMinutes($activeBooking->scheduled_end_time, false);
                $entry->estimated_wait_time = max(0, $minutesRemaining > 0 ? $minutesRemaining : 0);
                
                // Add factor for people ahead in queue
                $aheadInQueue = SmartQueue::where('seat_id', $entry->seat_id)
                    ->where('status', 'waiting')
                    ->where('queue_position', '<', $entry->queue_position)
                    ->count();
                
                // Assuming 2 hours (120 mins) per person if seat is just starting, but here we just look at current booking.
                // If there are people ahead, we add their expected duration (default 2h)
                $entry->estimated_wait_time += ($aheadInQueue * 120);
            } else {
                $entry->estimated_wait_time = 0; // Should be notified soon
            }
        }

        return response()->json($queueEntries);
    }

    public function leaveQueue(Request $request, $id)
    {
        $queue = SmartQueue::where('user_id', $request->user()->id)->findOrFail($id);
        $queue->delete();

        // Optional: Re-position others in queue for this seat
        $others = SmartQueue::where('seat_id', $queue->seat_id)
            ->where('status', 'waiting')
            ->orderBy('queue_position', 'asc')
            ->get();
        
        foreach ($others as $index => $other) {
            $other->update(['queue_position' => $index + 1]);
        }

        return response()->json(['success' => true]);
    }

    public function index(Request $request)
    {
        SeatBooking::cancelExpiredBookings();
        $bookings = SeatBooking::with(['seat.library.operatingHours', 'user'])
            ->where('user_id', $request->user()->id)
            ->orderBy('booking_time', 'desc')
            ->get();

        return response()->json($bookings);
    }

    public function show(Request $request, $id)
    {
        SeatBooking::cancelExpiredBookings();
        $booking = SeatBooking::with([
            'seat.floor.library',
            'seat.seatSection',
            'seat.seatSubsection',
            'user'
        ])
        ->where('user_id', $request->user()->id)
        ->findOrFail($id);

        return response()->json($booking);
    }

    public function store(Request $request)
    {
        SeatBooking::cancelExpiredBookings();
        $request->validate([
            'seat_id' => 'required|exists:seats,id',
            'booking_time' => 'required|date',
            'scheduled_end_time' => 'required|date|after:booking_time',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
        ]);

        $user = $request->user();
        $seat = Seat::with(['floor.library', 'seatSection'])->findOrFail($request->seat_id);
        $libraryId = $seat->floor->library_id;

        // Enforce system max booking duration setting
        $sysMaxDuration = (int)\App\Models\SystemSetting::get('max_booking_duration', 240);
        $bStart = \Carbon\Carbon::parse($request->booking_time);
        $bEnd = \Carbon\Carbon::parse($request->scheduled_end_time);
        if ($sysMaxDuration > 0 && $bStart->diffInMinutes($bEnd) > $sysMaxDuration) {
            return response()->json([
                'message' => "Maximum allowed single booking duration is {$sysMaxDuration} minutes."
            ], 400);
        }

        // Location-based booking restriction
        $library = $seat->floor->library;
        if ($request->latitude && $request->longitude && $library->latitude && $library->longitude) {
            $distance = $this->calculateDistance(
                $request->latitude, $request->longitude,
                $library->latitude, $library->longitude
            );
            if ($distance > 50000) { // 50 km in meters
                return response()->json([
                    'message' => 'You can only book seats at libraries near your current location. This library is too far away.'
                ], 403);
            }
        }

        // Check for active ban
        if ($user->isBannedFrom($libraryId)) {
            $ban = $user->bans()
                ->where(function ($q) use ($libraryId) {
                    $q->where('library_id', $libraryId)->orWhereNotNull('super_admin_id');
                })
                ->where(function ($q) {
                    $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
                })
                ->first();

            $expiry = $ban->expires_at ? " until " . $ban->expires_at->format('M d, Y') : " for lifetime";
            return response()->json([
                'message' => "You are restricted from booking in this library{$expiry}. Reason: " . ($ban->reason ?? 'No reason provided.')
            ], 403);
        }

        $section = $seat->seatSection;

        // Check gender restriction if section has one
        if ($section) {
            $secGender = $section->gender ? strtolower(trim($section->gender)) : 'mixed';
            $secName = strtolower($section->name ?? '');
            if (str_contains($secName, 'girls') || str_contains($secName, 'girl') || str_contains($secName, 'female') || str_contains($secName, 'women')) {
                $secGender = 'female';
            } elseif (str_contains($secName, 'boys') || str_contains($secName, 'boy') || str_contains($secName, 'male') || str_contains($secName, 'men')) {
                $secGender = 'male';
            }

            if ($secGender !== 'mixed' && $secGender !== 'all') {
                $userGender = $user->gender ? strtolower(trim($user->gender)) : 'male';
                $isMaleSec = in_array($secGender, ['male', 'boys', 'boy', 'men']);
                $isFemaleSec = in_array($secGender, ['female', 'girls', 'girl', 'women']);

                $isMaleUser = in_array($userGender, ['male', 'boys', 'boy', 'men']);
                $isFemaleUser = in_array($userGender, ['female', 'girls', 'girl', 'women']);

                if (($isMaleSec && !$isMaleUser) || ($isFemaleSec && !$isFemaleUser)) {
                    return response()->json([
                        'message' => "This section is restricted to {$secGender} students only. Please ensure your profile gender is set correctly."
                    ], 400);
                }
            }
        }

        // Check academic level restriction if subsection or section has one
        $seat->loadMissing(['seatSubsection', 'seatSection']);
        $requiredLevel = null;
        if ($seat->seatSubsection && $seat->seatSubsection->academic_level && $seat->seatSubsection->academic_level !== 'all') {
            $requiredLevel = $seat->seatSubsection->academic_level;
        } elseif ($section && $section->academic_level && $section->academic_level !== 'all') {
            $requiredLevel = $section->academic_level;
        }

        if ($requiredLevel && $user->ca_level !== $requiredLevel) {
            // Check if they have an approved override request for this seat THAT IS VALID TODAY ONLY
            $todayStr = \Carbon\Carbon::today()->toDateString();
            $hasApprovedOverride = \App\Models\OverrideRequest::where('user_id', $user->id)
                ->where('seat_id', $seat->id)
                ->where('status', 'approved')
                ->whereDate('updated_at', $todayStr)
                ->exists();

            if (!$hasApprovedOverride) {
                $userLevel = $user->ca_level;
                $availableSeatsOfUserLevel = Seat::whereHas('floor', function ($fQ) use ($libraryId) {
                        $fQ->where('library_id', $libraryId);
                    })
                    ->where('status', 'available')
                    ->where(function ($q) use ($userLevel) {
                        $q->whereHas('seatSubsection', function ($subQ) use ($userLevel) {
                            $subQ->where('academic_level', $userLevel);
                        })->orWhere(function ($secQ) use ($userLevel) {
                            $secQ->whereDoesntHave('seatSubsection')
                                ->whereHas('seatSection', function ($sQ) use ($userLevel) {
                                    $sQ->where('academic_level', $userLevel);
                                });
                        });
                    })->count();

                return response()->json([
                    'message' => "This seat is restricted to {$requiredLevel} level students.",
                    'restricted' => true,
                    'can_request_override' => true,
                    'user_level' => $userLevel,
                    'seat_level' => $requiredLevel
                ], 403);
            }
        }

        // Check if user already has an active or pending booking
        $activeBookingForUser = SeatBooking::where('user_id', $user->id)
            ->whereIn('status', ['booked', 'checked_in'])
            ->exists();
 
        if ($activeBookingForUser) {
            return response()->json([
                'message' => 'You already have an active or pending booking. You cannot book multiple seats at once.'
            ], 400);
        }

        // Load active subscription with plan details
        $activeSubscription = $user->activeSubscription()->with('subscriptionPlan')->first();

        if (!$activeSubscription) {
            return response()->json(['message' => 'You need an active subscription to book seats'], 400);
        }

        $plan = $activeSubscription->subscriptionPlan;
        $bookingDate = \Carbon\Carbon::parse($request->booking_time);
        $today = \Carbon\Carbon::today();

        // Check advance booking days limit
        $advanceLimit = $plan->advance_booking_days ?? -1;
        $daysInAdvance = $today->diffInDays($bookingDate->startOfDay(), false);
        
        if ($advanceLimit !== -1) {
            if ($daysInAdvance > $advanceLimit) {
                return response()->json([
                    'message' => "Your plan only allows booking {$advanceLimit} days in advance",
                    'limit' => $advanceLimit,
                    'requested' => $daysInAdvance
                ], 400);
            }
        }

        // Check daily seat booking limit
        $dailyLimit = $plan->daily_seat_bookings_limit ?? -1;
        if ($dailyLimit === 0) {
            $dailyLimit = -1;
        }

        if ($dailyLimit !== -1) {
            $todayBookings = SeatBooking::where('user_id', $user->id)
                ->whereDate('booking_time', $bookingDate->toDateString())
                ->whereIn('status', ['booked', 'checked_in', 'checked_out'])
                ->count();

            if ($todayBookings >= $dailyLimit) {
                return response()->json([
                    'message' => "You have reached your daily seat booking limit ({$dailyLimit})",
                    'limit' => $dailyLimit,
                    'current' => $todayBookings
                ], 400);
            }
        }

        // Check monthly seat booking limit
        $monthlyLimit = $plan->monthly_seat_bookings_limit ?? -1;
        if ($monthlyLimit === 0) {
            $monthlyLimit = -1;
        }

        if ($monthlyLimit !== -1) {
            $currentMonthBookings = SeatBooking::where('user_id', $user->id)
                ->whereYear('booking_time', $bookingDate->year)
                ->whereMonth('booking_time', $bookingDate->month)
                ->whereIn('status', ['booked', 'checked_in', 'checked_out'])
                ->count();

            if ($currentMonthBookings >= $monthlyLimit) {
                return response()->json([
                    'message' => "You have reached your monthly seat booking limit ({$monthlyLimit})",
                    'limit' => $monthlyLimit,
                    'current' => $currentMonthBookings
                ], 400);
            }
        }

        // Check library access limit
        $libraryLimit = $plan->libraries_access_limit ?? -1;
        if ($libraryLimit === 0) {
            $libraryLimit = -1;
        }

        if ($libraryLimit !== -1) {
            $libraryId = $seat->floor->library_id;
            
            // Get distinct libraries user has booked in the current subscription period
            $usedLibraries = SeatBooking::where('user_id', $user->id)
                ->where('booking_time', '>=', $activeSubscription->started_at)
                ->whereIn('status', ['booked', 'checked_in', 'checked_out'])
                ->distinct()
                ->pluck('library_id')
                ->toArray();

            // If booking a new library that exceeds limit
            if (!in_array($libraryId, $usedLibraries) && count($usedLibraries) >= $libraryLimit) {
                return response()->json([
                    'message' => "Your plan allows access to only {$libraryLimit} libraries. You have already used: " . count($usedLibraries),
                    'limit' => $libraryLimit,
                    'current' => count($usedLibraries)
                ], 400);
            }
        }

        // Check if seat is available
        if ($seat->status !== 'available') {
            return response()->json(['message' => 'Seat is not available'], 400);
        }

        // Check for overlapping bookings
        $existingBooking = SeatBooking::where('seat_id', $seat->id)
            ->where('status', '!=', 'cancelled')
            ->where(function($query) use ($request) {
                $query->whereBetween('booking_time', [$request->booking_time, $request->scheduled_end_time])
                      ->orWhereBetween('scheduled_end_time', [$request->booking_time, $request->scheduled_end_time]);
            })
            ->first();

        if ($existingBooking) {
            return response()->json(['message' => 'Seat is already booked for this time'], 400);
        }

        // Check if library is open on that day and within opening hours
        $bookingTime = Carbon::parse($request->booking_time);
        $endTime = Carbon::parse($request->scheduled_end_time);

        // Safeguard: If booking is for today and start time is in the past (e.g., immediate booking submitted with page delay or latency)
        if ($bookingTime->isToday() && $bookingTime->isPast()) {
            $durationSeconds = max(1800, $bookingTime->diffInSeconds($endTime));
            // Reset booking_time to exact current server moment
            $bookingTime = Carbon::now();
            $endTime = (clone $bookingTime)->addSeconds($durationSeconds);

            $request->merge([
                'booking_time' => $bookingTime->toDateTimeString(),
                'scheduled_end_time' => $endTime->toDateTimeString(),
            ]);
        }

        $dayOfWeek = $bookingTime->format('l'); // e.g., 'Monday', 'Tuesday'
        
        $operatingHour = \App\Models\LibraryOperatingHour::where('library_id', $seat->floor->library_id)
            ->where('day_of_week', $dayOfWeek)
            ->first();

        if (!$operatingHour || !$operatingHour->is_open) {
            return response()->json(['message' => "The library is closed on {$dayOfWeek}s."], 400);
        }

        $openTimeStr = strlen($operatingHour->open_time) === 5 ? $operatingHour->open_time . ':00' : $operatingHour->open_time;
        $closeTimeStr = strlen($operatingHour->close_time) === 5 ? $operatingHour->close_time . ':00' : $operatingHour->close_time;

        $openAt = Carbon::createFromFormat('H:i:s', $openTimeStr, $bookingTime->timezone);
        $closeAt = Carbon::createFromFormat('H:i:s', $closeTimeStr, $bookingTime->timezone);
        
        // We set the date to match the booking date for comparison
        $openAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);
        $closeAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);

        // If closing time is less than or equal to opening time, it crosses midnight into the next day
        if ($closeAt->lte($openAt)) {
            $closeAt->addDay();
        }

        // Handle case where booking is early morning for an overnight shift that started yesterday
        if ($bookingTime->lt($openAt)) {
            $yesterday = (clone $bookingTime)->subDay()->format('l');
            $yesterdayOperating = \App\Models\LibraryOperatingHour::where('library_id', $seat->floor->library_id)
                ->where('day_of_week', $yesterday)
                ->first();

            if ($yesterdayOperating && $yesterdayOperating->is_open) {
                $yOpenStr = strlen($yesterdayOperating->open_time) === 5 ? $yesterdayOperating->open_time . ':00' : $yesterdayOperating->open_time;
                $yCloseStr = strlen($yesterdayOperating->close_time) === 5 ? $yesterdayOperating->close_time . ':00' : $yesterdayOperating->close_time;

                $yOpenAt = Carbon::createFromFormat('H:i:s', $yOpenStr, $bookingTime->timezone);
                $yCloseAt = Carbon::createFromFormat('H:i:s', $yCloseStr, $bookingTime->timezone);

                $yOpenAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day)->subDay();
                $yCloseAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);
                if ($yCloseAt->lte($yOpenAt)) {
                    $yCloseAt->addDay();
                }

                if ($bookingTime->gte($yOpenAt) && $bookingTime->lt($yCloseAt)) {
                    $openAt = $yOpenAt;
                    $closeAt = $yCloseAt;
                }
            }
        }

        // Verify booking start time is within library operating hours
        if ($bookingTime->lt($openAt) || $bookingTime->gte($closeAt)) {
            $formattedOpen = $openAt->format('H:i');
            $formattedClose = $closeAt->format('H:i');
            return response()->json([
                'message' => "Requested time is outside library operating hours on {$dayOfWeek}s ({$formattedOpen} - {$formattedClose})."
            ], 400);
        }

        // If scheduled end time exceeds library closing time, cap end time to closing time
        if ($endTime->gt($closeAt)) {
            $endTime = clone $closeAt;
        }

        $booking = SeatBooking::create([
            'user_id' => $user->id,
            'seat_id' => $seat->id,
            'library_id' => $seat->floor->library_id,
            'booking_time' => $bookingTime->toDateTimeString(),
            'scheduled_end_time' => $endTime->toDateTimeString(),
            'status' => 'booked',
        ]);

        $seat->update(['status' => 'reserved']);

        Notification::send(
            $user->id,
            'booking',
            'Seat Booked!',
            "Your seat {$seat->seat_number} has been reserved. Don't forget to check in on time!",
            $booking
        );

        return response()->json($booking->load('seat.library'), 201);
    }

    public function checkIn(Request $request, $id)
    {
        SeatBooking::cancelExpiredBookings();
        $request->validate([
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $user = $request->user();

        // Check for active ban before check-in
        $libraryId = null;
        if ($id !== 'auto') {
            $checkBooking = SeatBooking::find($id);
            if ($checkBooking) $libraryId = $checkBooking->library_id;
        }

        if ($libraryId && $user->isBannedFrom($libraryId)) {
            $ban = $user->bans()
                ->where(function ($q) use ($libraryId) {
                    $q->where('library_id', $libraryId)->orWhereNotNull('super_admin_id');
                })
                ->where(function ($q) {
                    $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
                })
                ->first();

            $expiry = $ban->expires_at ? " until " . $ban->expires_at->format('M d, Y') : " for lifetime";
            return response()->json([
                'message' => "Your access is restricted in this library{$expiry}."
            ], 403);
        }
        
        if ($id === 'auto') {
            $queueEntry = SmartQueue::where('user_id', $user->id)
                ->whereIn('status', ['notified', 'waiting'])
                ->orderBy('queue_position', 'asc')
                ->first();

            if (!$queueEntry) {
                return response()->json(['message' => 'No active seat notification found or you are not in queue.'], 404);
            }

            // If still waiting, check if they are first and the 10min window is open
            if ($queueEntry->status === 'waiting') {
                $firstInQueue = SmartQueue::where('seat_id', $queueEntry->seat_id)
                    ->whereIn('status', ['waiting', 'notified'])
                    ->orderBy('queue_position', 'asc')
                    ->first();

                if ($firstInQueue->id !== $queueEntry->id) {
                    return response()->json(['message' => 'You are not first in the queue. Please wait for your turn.'], 400);
                }

                $activeBooking = SeatBooking::where('seat_id', $queueEntry->seat_id)
                    ->whereIn('status', ['booked', 'checked_in'])
                    ->orderBy('scheduled_end_time', 'desc')
                    ->first();

                if ($activeBooking) {
                    $remainingMinutes = now()->diffInMinutes($activeBooking->scheduled_end_time, false);
                    if ($remainingMinutes > 10) {
                        return response()->json(['message' => 'Cannot check in yet. More than 10 minutes remaining for current occupant.'], 400);
                    }
                    
                    // Force checkout previous user as their time is almost up and next student is checking in
                    $activeBooking->update([
                        'status' => 'checked_out',
                        'check_out_time' => now(),
                        'total_minutes' => $activeBooking->check_in_time ? now()->diffInMinutes($activeBooking->check_in_time, true) : 0
                    ]);

                    // Verify seat becomes available (logic update below will set it occupied)
                    $activeBooking->seat->update(['status' => 'available']);
                }
            }

            // Create a booking for this user
            $booking = SeatBooking::create([
                'user_id' => $user->id,
                'seat_id' => $queueEntry->seat_id,
                'library_id' => $queueEntry->library_id,
                'booking_time' => now(),
                'scheduled_end_time' => now()->addHours(2), // Default 2h for queue assigned seats
                'status' => 'booked',
            ]);

            $queueEntry->update(['status' => 'assigned']);
            $booking = $booking->load('seat.library');
        } else {
            $booking = SeatBooking::with('seat.library.floors')->findOrFail($id);

            if ($booking->user_id !== $user->id) {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
        }

        if ($booking->status === 'checked_in') {
            return response()->json(['message' => 'You are already checked in for this booking.'], 400);
        }

        if ($booking->status !== 'booked') {
            return response()->json(['message' => 'Booking is not in a state that can be checked in.'], 400);
        }

        // Enforce 15-minute check-in window expiration
        if ($booking->status === 'booked' && $booking->booking_time->copy()->addMinutes(15)->isPast()) {
            $booking->update(['status' => 'cancelled']);
            $booking->seat->update(['status' => 'available']);
            return response()->json(['message' => 'Check-in window has expired. This booking has been cancelled.'], 400);
        }

        $library = $booking->seat->library;
        
        if (!$library->latitude || !$library->longitude) {
             // If library coordinates are not set, allow check-in
        } else {
            $distance = $this->calculateDistance(
                $request->latitude, 
                $request->longitude, 
                $library->latitude, 
                $library->longitude
            );

            if ($distance > 100) { // 100 meters
                return response()->json([
                    'message' => 'You must be within 100 meters of the library to check in.',
                    'distance' => round($distance, 2) . ' meters'
                ], 400);
            }
        }

        // ─── QR Code Seat Validation ────────────────────────────────────
        $scannedQr = $request->input('qrCode') ?? $request->input('qr_code') ?? '';
        $seatQr = $booking->seat->qr_code ?? '';

        if (!empty($seatQr) && !empty($scannedQr)) {
            // Decode both to compare seat_number + library_id for robust matching
            $scannedData = json_decode(base64_decode($scannedQr), true);
            $seatData = json_decode(base64_decode($seatQr), true);

            $qrMatch = false;

            if ($scannedData && $seatData) {
                // Compare by seat identifiers (seat_number + library_id)
                $qrMatch = (
                    isset($scannedData['seat_number'], $seatData['seat_number']) &&
                    $scannedData['seat_number'] === $seatData['seat_number'] &&
                    (
                        (!isset($scannedData['library_id']) && !isset($seatData['library_id'])) ||
                        (isset($scannedData['library_id'], $seatData['library_id']) && (int)$scannedData['library_id'] === (int)$seatData['library_id'])
                    )
                );
            }

            // Fallback: exact string comparison
            if (!$qrMatch) {
                $qrMatch = (trim($scannedQr) === trim($seatQr));
            }

            if (!$qrMatch) {
                return response()->json([
                    'message' => 'QR code does not match your reserved seat. Please scan the correct seat QR code.',
                    'error_type' => 'qr_mismatch',
                    'expected_seat' => $booking->seat->seat_number ?? 'Unknown',
                ], 400);
            }
        } elseif (empty($scannedQr) && !empty($seatQr) && ($library->require_qr_scan ?? true)) {
            // Library requires QR scan but no QR was provided
            return response()->json([
                'message' => 'Please scan the QR code on your reserved seat to check in.',
                'error_type' => 'qr_required',
            ], 400);
        }

        $now = now();
        $durationMinutes = Carbon::parse($booking->booking_time)->diffInMinutes(Carbon::parse($booking->scheduled_end_time), true);

        $booking->update([
            'status' => 'checked_in',
            'check_in_time' => $now,
            'booking_time' => $now,
            'scheduled_end_time' => $now->copy()->addMinutes($durationMinutes),
            'qr_scanned' => !empty($scannedQr),
            'qr_scanned_at' => !empty($scannedQr) ? $now : null,
        ]);

        $booking->seat->update(['status' => 'occupied']);

        // Track arrival for today and update streak
        $today = now()->toDateString();
        $user->last_checkin_date = $today;
        $user->save();
        $user->calculateStudyStreak();
 
        // Auto mark attendance for this booking
        \App\Models\Attendance::firstOrCreate([
            'seat_booking_id' => $booking->id,
        ], [
            'user_id' => $user->id,
            'library_id' => $booking->seat->floor->library_id,
            'date' => $today,
            'check_in_time' => now(),
            'marked_manually' => false,
        ]);

        return response()->json([
            'success' => true, 
            'message' => 'Scanned successfully! You are now checked in.',
            'booking' => $booking
        ]);
    }

    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $earthRadius = 6371000; // meters

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($dLon / 2) * sin($dLon / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    public function checkOut(Request $request, $id)
    {
        $user = $request->user();
        $booking = SeatBooking::with('seat.library')->findOrFail($id);

        if ($booking->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $now = now();
        $totalMinutes = $booking->check_in_time ? $now->diffInMinutes($booking->check_in_time, true) : 0;

        $booking->update([
            'status' => 'checked_out',
            'check_out_time' => $now,
            'total_minutes' => $totalMinutes,
        ]);
 
        $booking->seat->update(['status' => 'available']);

        // Update attendance record
        $attendance = \App\Models\Attendance::where('seat_booking_id', $booking->id)->first();
        if ($attendance) {
            $attendance->update([
                'check_out_time' => $now->toTimeString(),
                'total_minutes' => $totalMinutes,
            ]);
        }

        // Notify next person in queue
        $nextInQueue = SmartQueue::where('seat_id', $booking->seat_id)
            ->where('status', 'waiting')
            ->orderBy('queue_position', 'asc')
            ->first();

        if ($nextInQueue) {
            $nextInQueue->update(['status' => 'notified']);
            $holdMins = (int)\App\Models\SystemSetting::get('queue_hold_minutes', 10);
            
            Notification::send(
                $nextInQueue->user_id,
                'queue',
                'Seat Available!',
                "Seat {$booking->seat->seat_number} is now free. You have {$holdMins} minutes to check in.",
                $booking->seat
            );
        }

        return response()->json(['success' => true, 'booking' => $booking, 'streak' => $user->current_streak]);
    }
    public function extend(Request $request, $id)
    {
        if (!\App\Models\SystemSetting::get('allow_seat_extensions', true)) {
            return response()->json(['message' => 'Active seat extensions are currently disabled in system settings.'], 403);
        }

        $request->validate([
            'minutes' => 'required|integer|min:10',
        ]);

        $sysMaxExtension = (int)\App\Models\SystemSetting::get('max_extension_minutes', 60);
        if ($sysMaxExtension > 0 && $request->minutes > $sysMaxExtension) {
            return response()->json(['message' => "Maximum single extension duration allowed is {$sysMaxExtension} minutes."], 400);
        }

        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($booking->status !== 'checked_in') {
            return response()->json(['message' => 'Only active bookings can be extended'], 400);
        }

        // Rule: Cannot extend if less than 10 minutes remaining
        $remainingMinutes = now()->diffInMinutes($booking->scheduled_end_time, false);
        if ($remainingMinutes < 10) {
            return response()->json([
                'message' => 'Cannot extend booking with less than 10 minutes remaining. Priority is given to the queue.'
            ], 400);
        }

        $newEndTime = $booking->scheduled_end_time->copy()->addMinutes($request->minutes);

        // Rule: Cannot extend beyond library closing time
        $bookingTime = Carbon::parse($booking->booking_time);
        $dayOfWeek = $bookingTime->format('l');
        $operatingHour = \App\Models\LibraryOperatingHour::where('library_id', $booking->library_id)
            ->where('day_of_week', $dayOfWeek)
            ->first();

        if ($operatingHour && $operatingHour->is_open) {
            $openTimeStr = strlen($operatingHour->open_time) === 5 ? $operatingHour->open_time . ':00' : $operatingHour->open_time;
            $closeTimeStr = strlen($operatingHour->close_time) === 5 ? $operatingHour->close_time . ':00' : $operatingHour->close_time;

            $openAt = Carbon::createFromFormat('H:i:s', $openTimeStr, $bookingTime->timezone);
            $closeAt = Carbon::createFromFormat('H:i:s', $closeTimeStr, $bookingTime->timezone);

            $openAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);
            $closeAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);

            if ($closeAt->lte($openAt)) {
                $closeAt->addDay();
            }

            // Handle case where booking start time was early morning in an overnight shift starting yesterday
            if ($bookingTime->lt($openAt)) {
                $yesterday = (clone $bookingTime)->subDay()->format('l');
                $yesterdayOperating = \App\Models\LibraryOperatingHour::where('library_id', $booking->library_id)
                    ->where('day_of_week', $yesterday)
                    ->first();

                if ($yesterdayOperating && $yesterdayOperating->is_open) {
                    $yOpenStr = strlen($yesterdayOperating->open_time) === 5 ? $yesterdayOperating->open_time . ':00' : $yesterdayOperating->open_time;
                    $yCloseStr = strlen($yesterdayOperating->close_time) === 5 ? $yesterdayOperating->close_time . ':00' : $yesterdayOperating->close_time;

                    $yOpenAt = Carbon::createFromFormat('H:i:s', $yOpenStr, $bookingTime->timezone);
                    $yCloseAt = Carbon::createFromFormat('H:i:s', $yCloseStr, $bookingTime->timezone);

                    $yOpenAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day)->subDay();
                    $yCloseAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);
                    if ($yCloseAt->lte($yOpenAt)) {
                        $yCloseAt->addDay();
                    }

                    if ($bookingTime->gte($yOpenAt) && $bookingTime->lt($yCloseAt)) {
                        $openAt = $yOpenAt;
                        $closeAt = $yCloseAt;
                    }
                }
            }

            $maxMinutes = (int) $booking->scheduled_end_time->diffInMinutes($closeAt, false);
            
            if ($newEndTime->gt($closeAt) || $request->minutes > $maxMinutes) {
                $formattedClose = $closeAt->format('h:i A');
                return response()->json([
                    'message' => "Cannot extend beyond library closing time ($formattedClose). Maximum available extension is " . max(0, $maxMinutes) . " minutes."
                ], 400);
            }
        }

        // Check for overlapping bookings
        $overlapping = \App\Models\SeatBooking::where('seat_id', $booking->seat_id)
            ->where('id', '!=', $booking->id)
            ->where('status', '!=', 'cancelled')
            ->where(function($query) use ($booking, $newEndTime) {
                $query->whereBetween('booking_time', [$booking->scheduled_end_time, $newEndTime])
                      ->orWhereBetween('scheduled_end_time', [$booking->scheduled_end_time, $newEndTime]);
            })
            ->exists();

        if ($overlapping) {
            return response()->json(['message' => 'Cannot extend: Seat is booked by someone else after your session'], 400);
        }

        $booking->update([
            'scheduled_end_time' => $newEndTime,
            'extension_count' => $booking->extension_count + 1,
        ]);

        return response()->json([
            'success' => true, 
            'booking' => $booking->load('seat.library.operatingHours')
        ]);
    }
    public function cancel(Request $request, $id)
    {
        if (!\App\Models\SystemSetting::get('allow_cancellations', true)) {
            return response()->json(['message' => 'Student booking cancellations are currently disabled in system settings.'], 403);
        }

        SeatBooking::cancelExpiredBookings();
        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($booking->status !== 'booked') {
            return response()->json(['message' => 'Only pending bookings can be cancelled'], 400);
        }

        $booking->update(['status' => 'cancelled']);
        $booking->seat->update(['status' => 'available']);

        Notification::send(
            $request->user()->id,
            'booking',
            'Booking Cancelled',
            "Your booking for seat {$booking->seat->seat_number} has been cancelled.",
            $booking
        );

        return response()->json(['success' => true, 'message' => 'Booking cancelled successfully']);
    }

    public function joinQueue(Request $request)
    {
        $request->validate([
            'seat_id' => 'required|exists:seats,id',
        ]);

        $user = $request->user();
        
        // Check if user already has an active or pending booking
        $activeBookingForUser = SeatBooking::where('user_id', $user->id)
            ->whereIn('status', ['booked', 'checked_in'])
            ->exists();

        if ($activeBookingForUser) {
            return response()->json([
                'message' => 'You already have an active or pending booking. You cannot join the queue while having an active seat.'
            ], 400);
        }

        $seat = Seat::with('floor.library')->findOrFail($request->seat_id);

        if ($seat->status === 'available') {
            return response()->json(['message' => 'Seat is currently available. You can book it directly.'], 400);
        }

        // Only allow joining waitlist on free_soon seats
        // A seat is free_soon if it is checked_in and has <= 10 minutes remaining.
        $activeBooking = SeatBooking::where('seat_id', $seat->id)
            ->whereIn('status', ['booked', 'checked_in'])
            ->orderBy('scheduled_end_time', 'desc')
            ->first();

        if (!$activeBooking) {
            return response()->json(['message' => 'Seat is not currently occupied. You cannot join the queue.'], 400);
        }

        $endTime = $activeBooking->extended_until ?? $activeBooking->scheduled_end_time;
        $remainingMinutes = now()->diffInMinutes($endTime, false);

        if ($remainingMinutes <= 0 || $remainingMinutes > 10 || $activeBooking->status !== 'checked_in') {
            return response()->json([
                'message' => 'You can only join the waitlist when the seat status is Free Soon (10 minutes or less remaining).'
            ], 400);
        }

        $section = $seat->seatSection;
        // Check gender restriction
        if ($section) {
            $secGender = $section->gender ? strtolower(trim($section->gender)) : 'mixed';
            $secName = strtolower($section->name ?? '');
            if (str_contains($secName, 'girls') || str_contains($secName, 'girl') || str_contains($secName, 'female') || str_contains($secName, 'women')) {
                $secGender = 'female';
            } elseif (str_contains($secName, 'boys') || str_contains($secName, 'boy') || str_contains($secName, 'male') || str_contains($secName, 'men')) {
                $secGender = 'male';
            }

            if ($secGender !== 'mixed' && $secGender !== 'all') {
                $userGender = $user->gender ? strtolower(trim($user->gender)) : 'male';
                $isMaleSec = in_array($secGender, ['male', 'boys', 'boy', 'men']);
                $isFemaleSec = in_array($secGender, ['female', 'girls', 'girl', 'women']);

                $isMaleUser = in_array($userGender, ['male', 'boys', 'boy', 'men']);
                $isFemaleUser = in_array($userGender, ['female', 'girls', 'girl', 'women']);

                if (($isMaleSec && !$isMaleUser) || ($isFemaleSec && !$isFemaleUser)) {
                    return response()->json([
                        'message' => "This section is restricted to {$secGender} students only."
                    ], 400);
                }
            }
        }

        // Check academic level restriction if subsection or section has one
        $seat->loadMissing(['seatSubsection', 'seatSection']);
        $requiredLevel = null;
        if ($seat->seatSubsection && $seat->seatSubsection->academic_level && $seat->seatSubsection->academic_level !== 'all') {
            $requiredLevel = $seat->seatSubsection->academic_level;
        } elseif ($section && $section->academic_level && $section->academic_level !== 'all') {
            $requiredLevel = $section->academic_level;
        }

        if ($requiredLevel && $user->ca_level !== $requiredLevel) {
            $todayStr = \Carbon\Carbon::today()->toDateString();
            $hasApprovedOverride = \App\Models\OverrideRequest::where('user_id', $user->id)
                ->where('seat_id', $seat->id)
                ->where('status', 'approved')
                ->whereDate('updated_at', $todayStr)
                ->exists();

            if (!$hasApprovedOverride) {
                return response()->json([
                    'message' => "This seat is restricted to {$requiredLevel} level students.",
                    'restricted' => true,
                    'can_request_override' => true,
                    'user_level' => $user->ca_level,
                    'seat_level' => $requiredLevel
                ], 403);
            }
        }


        // Check if already in queue for this seat
        $existingQueue = SmartQueue::where('user_id', $user->id)
            ->where('seat_id', $seat->id)
            ->where('status', 'waiting')
            ->first();

        if ($existingQueue) {
            return response()->json(['message' => 'You are already in the queue for this seat.'], 400);
        }

        // Get last position
        $lastPosition = SmartQueue::where('seat_id', $seat->id)
            ->where('status', 'waiting')
            ->max('queue_position') ?? 0;

        $queue = SmartQueue::create([
            'user_id' => $user->id,
            'library_id' => $seat->library_id ?? $seat->floor->library_id,
            'seat_id' => $seat->id,
            'queue_position' => $lastPosition + 1,
            'status' => 'waiting',
            'joined_at' => now(),
        ]);

        Notification::send(
            $user->id,
            'queue',
            'Joined Queue',
            "You are now at position #{$queue->queue_position} for seat {$seat->seat_number}.",
            $queue
        );

        return response()->json([
            'success' => true, 
            'message' => 'Successfully joined the queue.',
            'position' => $queue->queue_position
        ]);
    }

    public function requestOverride(Request $request)
    {
        $request->validate([
            'seat_id' => 'required|exists:seats,id',
        ]);

        $user = $request->user();
        $seat = Seat::with(['floor.library', 'seatSection', 'seatSubsection'])->findOrFail($request->seat_id);
        $libraryId = $seat->floor ? $seat->floor->library_id : ($seat->seatSection ? $seat->seatSection->library_id : ($seat->library_id ?? $request->library_id));
        $todayStr = \Carbon\Carbon::today()->toDateString();

        // Enforce strict gender restriction: Override requests cannot bypass gender rules!
        $section = $seat->seatSection;
        $sub = $seat->seatSubsection;
        $secGender = null;
        if ($sub && $sub->gender && $sub->gender !== 'mixed') {
            $secGender = strtolower(trim($sub->gender));
        } elseif ($section && $section->gender && $section->gender !== 'mixed') {
            $secGender = strtolower(trim($section->gender));
        }

        $secName = strtolower(($section->name ?? '') . ' ' . ($sub->name ?? ''));
        if (str_contains($secName, 'girls') || str_contains($secName, 'girl') || str_contains($secName, 'female') || str_contains($secName, 'women')) {
            $secGender = 'female';
        } elseif (str_contains($secName, 'boys') || str_contains($secName, 'boy') || str_contains($secName, 'male') || str_contains($secName, 'men')) {
            $secGender = 'male';
        }

        if ($secGender && !in_array($secGender, ['mixed', 'all'])) {
            $userGender = strtolower(trim($user->gender ?? 'male'));
            $isMaleSec = in_array($secGender, ['male', 'boys', 'boy', 'men']);
            $isFemaleSec = in_array($secGender, ['female', 'girls', 'girl', 'women']);

            $isMaleUser = in_array($userGender, ['male', 'boys', 'boy', 'men']);
            $isFemaleUser = in_array($userGender, ['female', 'girls', 'girl', 'women']);

            if (($isMaleSec && !$isMaleUser) || ($isFemaleSec && !$isFemaleUser)) {
                return response()->json([
                    'message' => "Gender restriction cannot be overridden. You can only request overrides within your allowed gender section."
                ], 400);
            }
        }

        // Check if user has ALREADY submitted ANY override request TODAY (Only 1 request allowed per student per day across ALL seats!)
        $existingAny = \App\Models\OverrideRequest::where('user_id', $user->id)
            ->whereDate('created_at', $todayStr)
            ->with('seat')
            ->first();

        if ($existingAny) {
            $seatNum = $existingAny->seat ? "Seat #{$existingAny->seat->seat_number}" : "another seat";
            if ($existingAny->seat_id === $seat->id) {
                if ($existingAny->status === 'rejected') {
                    return response()->json([
                        'message' => "Your override request for this seat was rejected by the librarian today. You cannot send another request today."
                    ], 400);
                }
                return response()->json([
                    'message' => "You already have a {$existingAny->status} override request for this seat today."
                ], 400);
            } else {
                return response()->json([
                    'message' => "You have already submitted an override request today for {$seatNum}. You can only submit 1 override request per day."
                ], 400);
            }
        }

        // Create the override request
        $overrideRequest = \App\Models\OverrideRequest::create([
            'user_id' => $user->id,
            'seat_id' => $seat->id,
            'library_id' => $libraryId,
            'status' => 'pending',
        ]);

        // Notify librarians
        $librarians = \App\Models\User::role('librarian')
            ->where(function($q) use ($libraryId) {
                $q->where('library_id', $libraryId)
                  ->orWhereHas('libraries', function($lq) use ($libraryId) {
                      $lq->where('libraries.id', $libraryId);
                  })
                  ->orWhereNull('library_id');
            })->get();

        foreach ($librarians as $lib) {
            \App\Models\Notification::send(
                $lib->id,
                'system',
                'New Override Request',
                "Student {$user->name} has requested an override for seat {$seat->seat_number}.",
                $overrideRequest
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'Override request submitted successfully. Please wait for librarian approval.',
            'request' => $overrideRequest
        ], 201);
    }

    public function getStudentOverrideRequests(Request $request)
    {
        $user = $request->user();
        $todayStr = \Carbon\Carbon::today()->toDateString();

        $requests = \App\Models\OverrideRequest::where('user_id', $user->id)
            ->whereDate('updated_at', $todayStr)
            ->with(['seat.floor', 'seat.seatSection', 'seat.seatSubsection'])
            ->get();

        return response()->json($requests);
    }
}
