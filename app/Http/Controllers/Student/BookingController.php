<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Seat;
use Illuminate\Http\Request;

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
        $seat = Seat::with('floor.library')->findOrFail($request->seat_id);

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

        $booking = SeatBooking::with('seat.library.floors')->findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
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

        return response()->json(['success' => true, 'booking' => $booking]);
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
        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $booking->update([
            'status' => 'checked_out',
            'check_out_time' => now(),
        ]);

        $booking->seat->update(['status' => 'available']);

        // Calculate total minutes
        if ($booking->check_in_time) {
            $booking->total_minutes = now()->diffInMinutes($booking->check_in_time);
            $booking->save();
        }

        return response()->json(['success' => true, 'booking' => $booking]);
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
}
