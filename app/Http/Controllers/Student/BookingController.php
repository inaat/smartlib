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
    public function index(Request $request)
    {
        $bookings = SeatBooking::with(['seat.library', 'user'])
            ->where('user_id', $request->user()->id)
            ->orderBy('booking_time', 'desc')
            ->get();

        return response()->json($bookings);
    }

    public function store(Request $request)
    {
        $request->validate([
            'seat_id' => 'required|exists:seats,id',
            'booking_time' => 'required|date',
            'scheduled_end_time' => 'required|date|after:booking_time',
        ]);

        $user = $request->user();
        $seat = Seat::with(['floor.library', 'seatSection'])->findOrFail($request->seat_id);
        $libraryId = $seat->floor->library_id;

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
        $daysInAdvance = $today->diffInDays($bookingDate->startOfDay(), false);
        
        if ($plan->advance_booking_days !== -1) {
            if ($daysInAdvance > $plan->advance_booking_days) {
                return response()->json([
                    'message' => "Your plan only allows booking {$plan->advance_booking_days} days in advance",
                    'limit' => $plan->advance_booking_days,
                    'requested' => $daysInAdvance
                ], 400);
            }
        }

        // Check daily seat booking limit
        if ($plan->daily_seat_bookings_limit !== -1) {
            $todayBookings = SeatBooking::where('user_id', $user->id)
                ->whereDate('booking_time', $bookingDate->toDateString())
                ->whereIn('status', ['booked', 'checked_in'])
                ->count();

            if ($todayBookings >= $plan->daily_seat_bookings_limit) {
                return response()->json([
                    'message' => "You have reached your daily seat booking limit ({$plan->daily_seat_bookings_limit})",
                    'limit' => $plan->daily_seat_bookings_limit,
                    'current' => $todayBookings
                ], 400);
            }
        }

        // Check library access limit
        if ($plan->libraries_access_limit !== -1) {
            $libraryId = $seat->floor->library_id;
            
            // Get distinct libraries user has booked in the current subscription period
            $usedLibraries = SeatBooking::where('user_id', $user->id)
                ->where('booking_time', '>=', $activeSubscription->started_at)
                ->whereIn('status', ['booked', 'checked_in', 'checked_out'])
                ->distinct()
                ->pluck('library_id')
                ->toArray();

            // If booking a new library that exceeds limit
            if (!in_array($libraryId, $usedLibraries) && count($usedLibraries) >= $plan->libraries_access_limit) {
                return response()->json([
                    'message' => "Your plan allows access to only {$plan->libraries_access_limit} libraries. You have already used: " . count($usedLibraries),
                    'limit' => $plan->libraries_access_limit,
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

        // Update seat status to reserved (will become occupied on check-in)
        $seat->update(['status' => 'reserved']);

        return response()->json($booking->load('seat.library'), 201);
    }

    public function checkIn(Request $request, $id)
    {
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
                        'total_minutes' => $activeBooking->check_in_time ? now()->diffInMinutes($activeBooking->check_in_time) : 0
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

            if ($distance > 10) { // 10 meters
                return response()->json([
                    'message' => 'You must be within 10 meters of the library to check in.',
                    'distance' => round($distance, 2) . ' meters'
                ], 400);
            }
        }

        $booking->update([
            'status' => 'checked_in',
            'check_in_time' => now(),
        ]);

        $booking->seat->update(['status' => 'occupied']);

        // Track arrival for today and update streak
        $user->last_checkin_date = now()->toDateString();
        
        // Increment streak for every check-in as requested
        $user->current_streak = ($user->current_streak ?? 0) + 1;
        if ($user->current_streak > $user->max_streak) {
            $user->max_streak = $user->current_streak;
        }
        $user->last_streak_date = now()->toDateString();
        
        $user->save();
 
        // Auto mark attendance
        \App\Models\Attendance::create([
            'user_id' => $user->id,
            'library_id' => $booking->seat->floor->library_id,
            'seat_booking_id' => $booking->id,
            'date' => now()->toDateString(),
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

        $booking->update([
            'status' => 'checked_out',
            'check_out_time' => now(),
            'total_minutes' => $booking->check_in_time ? now()->diffInMinutes($booking->check_in_time) : 0
        ]);
 
        // Update attendance record
        $attendance = \App\Models\Attendance::where('seat_booking_id', $booking->id)->first();
        if ($attendance) {
            $attendance->update([
                'check_out_time' => now(),
                'total_minutes' => $attendance->check_in_time ? now()->diffInMinutes($attendance->check_in_time) : 0
            ]);
        }

        $booking->seat->update(['status' => 'available']);

        // Calculate total minutes
        if ($booking->check_in_time) {
            $booking->total_minutes = now()->diffInMinutes($booking->check_in_time);
            $booking->save();
        }

        // Streak Logic: Check if they hit the library's target today
        $library = $booking->seat->library;
        $minMinutes = $library->special_features['settings']['minStudyMinutesForStreak'] ?? 0;
        $today = now()->toDateString();

        if ($user->last_streak_date !== $today) {
            $totalMinutesToday = SeatBooking::where('user_id', $user->id)
                ->whereDate('check_out_time', $today)
                ->sum('total_minutes');

            if ($totalMinutesToday >= $minMinutes) {
                $yesterday = now()->subDay()->toDateString();
                if ($user->last_streak_date === $yesterday) {
                    $user->current_streak += 1;
                } else {
                    $user->current_streak = 1;
                }

                if ($user->current_streak > $user->max_streak) {
                    $user->max_streak = $user->current_streak;
                }

                $user->last_streak_date = $today;
                $user->save();
            }
        }

        // Notify next person in queue
        $nextInQueue = SmartQueue::where('seat_id', $booking->seat_id)
            ->where('status', 'waiting')
            ->orderBy('queue_position', 'asc')
            ->first();

        if ($nextInQueue) {
            $nextInQueue->update(['status' => 'notified']);
            
            Notification::create([
                'user_id' => $nextInQueue->user_id,
                'type' => 'seat_available',
                'title' => 'Seat Available!',
                'message' => "Seat {$booking->seat->seat_number} is now free. You have 10 minutes to check in.",
                'related_type' => 'App\Models\Seat',
                'related_id' => $booking->seat_id,
            ]);
        }

        return response()->json(['success' => true, 'booking' => $booking, 'streak' => $user->current_streak]);
    }
    public function extend(Request $request, $id)
    {
        $request->validate([
            'minutes' => 'required|integer|min:15|max:240',
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

        $newEndTime = $booking->scheduled_end_time->addMinutes($request->minutes);

        // Check for overlapping bookings
        $overlapping = SeatBooking::where('seat_id', $booking->seat_id)
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

        return response()->json(['success' => true, 'booking' => $booking]);
    }
    public function cancel(Request $request, $id)
    {
        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($booking->status !== 'booked') {
            return response()->json(['message' => 'Only pending bookings can be cancelled'], 400);
        }

        $booking->update(['status' => 'cancelled']);
        $booking->seat->update(['status' => 'available']);

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

        $section = $seat->seatSection;
        // Check gender restriction
        if ($section && $section->gender && $section->gender !== 'mixed') {
            if (!$user->gender || $user->gender !== $section->gender) {
                return response()->json([
                    'message' => "This section is restricted to {$section->gender} students only."
                ], 400);
            }
        }

        // Rule: Can only join queue if less than 10 minutes remaining for the current session
        $activeBooking = SeatBooking::where('seat_id', $seat->id)
            ->whereIn('status', ['booked', 'checked_in'])
            ->orderBy('scheduled_end_time', 'desc')
            ->first();

        if ($activeBooking) {
            $remainingMinutes = now()->diffInMinutes($activeBooking->scheduled_end_time, false);
            if ($remainingMinutes > 10) {
                return response()->json([
                    'message' => "You can only join the queue when less than 10 minutes are remaining for the current session. Session ends in {$remainingMinutes} minutes."
                ], 400);
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

        return response()->json([
            'success' => true, 
            'message' => 'Successfully joined the queue.',
            'position' => $queue->queue_position
        ]);
    }
}
