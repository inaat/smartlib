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
        if ($section && $section->gender && $section->gender !== 'mixed') {
            if (!$user->gender || $user->gender !== $section->gender) {
                return response()->json([
                    'message' => "This section is restricted to {$section->gender} students only. Please ensure your profile gender is set correctly."
                ], 400);
            }
        }

        // Check academic level restriction if section has one
        if ($section && $section->academic_level && $section->academic_level !== 'all') {
            if ($user->ca_level !== $section->academic_level) {
                // Check if they have an approved override request for this seat
                $hasApprovedOverride = \App\Models\OverrideRequest::where('user_id', $user->id)
                    ->where('seat_id', $seat->id)
                    ->where('status', 'approved')
                    ->exists();

                if (!$hasApprovedOverride) {
                    $userLevel = $user->ca_level;
                    $availableSeatsOfUserLevel = Seat::whereHas('seatSection', function ($q) use ($libraryId, $userLevel) {
                        $q->where('library_id', $libraryId)
                          ->where('academic_level', $userLevel);
                    })
                    ->where('status', 'available')
                    ->count();

                    $allOccupied = ($availableSeatsOfUserLevel === 0);

                    return response()->json([
                        'message' => "This seat is restricted to {$section->academic_level} students.",
                        'restricted' => true,
                        'can_request_override' => $allOccupied,
                        'user_level' => $userLevel,
                        'seat_level' => $section->academic_level
                    ], 403);
                }
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
        $dayOfWeek = $bookingTime->format('l'); // e.g., 'Monday', 'Tuesday'
        
        $operatingHour = \App\Models\LibraryOperatingHour::where('library_id', $seat->floor->library_id)
            ->where('day_of_week', $dayOfWeek)
            ->first();

        if (!$operatingHour || !$operatingHour->is_open) {
            return response()->json(['message' => "The library is closed on {$dayOfWeek}s."], 400);
        }

        $openAt = Carbon::createFromFormat('H:i:s', $operatingHour->open_time, $bookingTime->timezone);
        $closeAt = Carbon::createFromFormat('H:i:s', $operatingHour->close_time, $bookingTime->timezone);
        
        // We set the date to match the booking date for comparison
        $openAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);
        $closeAt->setDate($bookingTime->year, $bookingTime->month, $bookingTime->day);

        if ($bookingTime->lt($openAt) || $endTime->gt($closeAt)) {
            $formattedOpen = $openAt->format('H:i');
            $formattedClose = $closeAt->format('H:i');
            return response()->json([
                'message' => "Requested time is outside library operating hours on {$dayOfWeek}s ({$formattedOpen} - {$formattedClose})."
            ], 400);
        }

        $booking = SeatBooking::create([
            'user_id' => $user->id,
            'seat_id' => $seat->id,
            'library_id' => $seat->floor->library_id,
            'booking_time' => $request->booking_time,
            'scheduled_end_time' => $request->scheduled_end_time,
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
             // If library coordinates are not set, allow check-in (or handle as error depending on policy)
             // For now, we'll allow it but log a warning or just proceed.
             // Ideally, all libraries should have coordinates.
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

        $now = now();
        $durationMinutes = Carbon::parse($booking->booking_time)->diffInMinutes(Carbon::parse($booking->scheduled_end_time), true);

        $booking->update([
            'status' => 'checked_in',
            'check_in_time' => $now,
            'booking_time' => $now,
            'scheduled_end_time' => $now->copy()->addMinutes($durationMinutes),
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
            
            Notification::send(
                $nextInQueue->user_id,
                'queue',
                'Seat Available!',
                "Seat {$booking->seat->seat_number} is now free. You have 10 minutes to check in.",
                $booking->seat
            );
        }

        return response()->json(['success' => true, 'booking' => $booking, 'streak' => $user->current_streak]);
    }
    public function extend(Request $request, $id)
    {
        $request->validate([
            'minutes' => 'required|integer|min:10',
        ]);

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
        $dayOfWeek = $booking->scheduled_end_time->format('l');
        $operatingHour = \App\Models\LibraryOperatingHour::where('library_id', $booking->library_id)
            ->where('day_of_week', $dayOfWeek)
            ->first();

        if ($operatingHour && $operatingHour->is_open) {
            $closeAt = Carbon::parse($booking->scheduled_end_time->format('Y-m-d') . ' ' . $operatingHour->close_time);
            
            $maxMinutes = $booking->scheduled_end_time->diffInMinutes($closeAt, false);
            
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
        if ($section && $section->gender && $section->gender !== 'mixed') {
            if (!$user->gender || $user->gender !== $section->gender) {
                return response()->json([
                    'message' => "This section is restricted to {$section->gender} students only."
                ], 400);
            }
        }

        // Check academic level restriction if section has one
        if ($section && $section->academic_level && $section->academic_level !== 'all') {
            if ($user->ca_level !== $section->academic_level) {
                $hasApprovedOverride = \App\Models\OverrideRequest::where('user_id', $user->id)
                    ->where('seat_id', $seat->id)
                    ->where('status', 'approved')
                    ->exists();

                if (!$hasApprovedOverride) {
                    $availableSeatsOfUserLevel = Seat::whereHas('seatSection', function ($q) use ($seat, $user) {
                        $q->where('library_id', $seat->floor->library_id ?? $seat->library_id)
                          ->where('academic_level', $user->ca_level);
                    })
                    ->where('status', 'available')
                    ->count();

                    $allOccupied = ($availableSeatsOfUserLevel === 0);

                    return response()->json([
                        'message' => "This seat is restricted to {$section->academic_level} students.",
                        'restricted' => true,
                        'can_request_override' => $allOccupied,
                        'user_level' => $user->ca_level,
                        'seat_level' => $section->academic_level
                    ], 403);
                }
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
        $seat = Seat::with(['floor.library', 'seatSection'])->findOrFail($request->seat_id);
        $libraryId = $seat->floor->library_id ?? $seat->library_id;

        // Check if there is already a pending or approved override request for this seat and user
        $existing = \App\Models\OverrideRequest::where('user_id', $user->id)
            ->where('seat_id', $seat->id)
            ->whereIn('status', ['pending', 'approved'])
            ->first();

        if ($existing) {
            return response()->json([
                'message' => "You already have a {$existing->status} override request for this seat."
            ], 400);
        }

        // Validate that all seats of their own level are indeed occupied/reserved
        $userLevel = $user->ca_level;
        $availableSeatsOfUserLevel = Seat::whereHas('seatSection', function ($q) use ($libraryId, $userLevel) {
            $q->where('library_id', $libraryId)
              ->where('academic_level', $userLevel);
        })
        ->where('status', 'available')
        ->count();

        if ($availableSeatsOfUserLevel > 0) {
            return response()->json([
                'message' => "You cannot request an override. There are still available seats assigned to your level ({$userLevel})."
            ], 400);
        }

        // Create the override request
        $overrideRequest = \App\Models\OverrideRequest::create([
            'user_id' => $user->id,
            'seat_id' => $seat->id,
            'library_id' => $libraryId,
            'status' => 'pending',
        ]);

        // Notify librarians
        $librarians = \App\Models\User::role('librarian')->where('library_id', $libraryId)->get();
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
}
