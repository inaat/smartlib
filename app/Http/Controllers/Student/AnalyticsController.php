<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\BookReservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Stats
        $stats = [
            'total_bookings' => SeatBooking::where('user_id', $user->id)->whereNotNull('check_in_time')->count(),
            'total_study_hours' => $this->calculateTotalStudyHours($user->id),
            'active_reservations' => BookReservation::where('user_id', $user->id)
                ->active()
                ->count(),
            'study_streak' => $user->calculateStudyStreak()['current_streak'],
            'loyalty_points' => $user->loyalty_points ?? 0,
        ];

        // Monthly study trends (bookings count over 30 days)
        $monthlyTrends = SeatBooking::where('user_id', $user->id)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->where('created_at', '>=', now()->subDays(30))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Favorite libraries
        $topLibraries = SeatBooking::where('user_id', $user->id)
            ->join('libraries', 'seat_bookings.library_id', '=', 'libraries.id')
            ->selectRaw('libraries.id, libraries.name, COUNT(*) as bookings_count')
            ->groupBy('libraries.id', 'libraries.name')
            ->orderBy('bookings_count', 'desc')
            ->take(5)
            ->get();

        // Recent Bookings
        $recentBookings = SeatBooking::with(['library', 'seat'])
            ->where('user_id', $user->id)
            ->latest()
            ->take(5)
            ->get();

        return response()->json([
            'stats' => $stats,
            'monthlyTrends' => $monthlyTrends,
            'topLibraries' => $topLibraries,
            'recentBookings' => $recentBookings,
        ]);
    }

    private function calculateTotalStudyHours($userId)
    {
        $bookings = SeatBooking::where('user_id', $userId)
            ->where('status', 'checked_out')
            ->whereNotNull('check_in_time')
            ->whereNotNull('check_out_time')
            ->get();

        $totalMinutes = 0;
        foreach ($bookings as $booking) {
            $start = Carbon::parse($booking->check_in_time);
            $end = Carbon::parse($booking->check_out_time);
            $totalMinutes += $start->diffInMinutes($end, true);
        }

        return round($totalMinutes / 60, 1);
    }
}
