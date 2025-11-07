<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\BookReservation;
use App\Models\Event;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $stats = [
            'active_bookings' => SeatBooking::where('user_id', $user->id)
                ->whereIn('status', ['pending', 'active'])
                ->count(),
            'total_bookings' => SeatBooking::where('user_id', $user->id)->count(),
            'active_reservations' => BookReservation::where('user_id', $user->id)
                ->whereIn('status', ['pending', 'active'])
                ->count(),
            'upcoming_events' => Event::whereHas('registrations', function($query) use ($user) {
                $query->where('user_id', $user->id);
            })->where('start_time', '>', now())->count(),
            'loyalty_points' => $user->loyalty_points,
        ];

        $activeBooking = SeatBooking::with(['seat.library'])
            ->where('user_id', $user->id)
            ->whereIn('status', ['pending', 'active'])
            ->latest()
            ->first();

        $recentActivity = collect();

        // Get recent bookings
        $recentBookings = SeatBooking::with('seat.library')
            ->where('user_id', $user->id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function($booking) {
                return [
                    'type' => 'booking',
                    'data' => $booking,
                    'created_at' => $booking->created_at,
                ];
            });

        // Get recent book reservations
        $recentReservations = BookReservation::with('book')
            ->where('user_id', $user->id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function($reservation) {
                return [
                    'type' => 'reservation',
                    'data' => $reservation,
                    'created_at' => $reservation->created_at,
                ];
            });

        $recentActivity = $recentBookings->merge($recentReservations)
            ->sortByDesc('created_at')
            ->take(5)
            ->values();

        $upcomingEvents = Event::with('library')
            ->whereHas('registrations', function($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->where('start_time', '>', now())
            ->orderBy('start_time')
            ->take(3)
            ->get();

        return response()->json([
            'stats' => $stats,
            'active_booking' => $activeBooking,
            'recent_activity' => $recentActivity,
            'upcoming_events' => $upcomingEvents,
        ]);
    }
}
