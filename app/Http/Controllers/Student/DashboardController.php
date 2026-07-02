<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\BookReservation;
use App\Models\Event;
use App\Models\SmartQueue;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        SeatBooking::cancelExpiredBookings();

        $stats = [
            'active_bookings' => SeatBooking::where('user_id', $user->id)
                ->whereIn('status', ['booked', 'checked_in'])
                ->count(),
            'total_bookings' => SeatBooking::where('user_id', $user->id)->whereNotNull('check_in_time')->count(),
            'active_reservations' => BookReservation::where('user_id', $user->id)
                ->active()
                ->count(),
            'upcoming_events' => Event::whereHas('registrations', function($query) use ($user) {
                $query->where('user_id', $user->id);
            })->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })->count(),
            'loyalty_points' => $user->loyalty_points,
        ];

        $activeBooking = SeatBooking::with(['seat.library.operatingHours'])
            ->where('user_id', $user->id)
            ->whereIn('status', ['booked', 'checked_in'])
            ->latest()
            ->first();

        $recentActivity = collect();

        // Get recent bookings
        $recentBookings = SeatBooking::with('seat.library')
            ->where('user_id', $user->id)
            ->where('status', '!=', 'cancelled')
            ->latest()
            ->take(5)
            ->get()
            ->toBase()
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
            ->toBase()
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
            ->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })
            ->orderBy('date')
            ->orderBy('start_time')
            ->take(3)
            ->get();

        // Calculate study analytics
        $completedBookings = SeatBooking::where('user_id', $user->id)
            ->where('status', 'checked_out')
            ->where('check_out_time', '>=', now()->subDays(7))
            ->get();

        $totalMinutes = $completedBookings->sum('total_minutes');
        $totalHoursToday = SeatBooking::where('user_id', $user->id)
            ->where('status', 'checked_out')
            ->whereDate('check_out_time', today())
            ->sum('total_minutes') / 60;

        // Weekly study data
        $weeklyStudyData = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = now()->subDays($i);
            $hours = SeatBooking::where('user_id', $user->id)
                ->where('status', 'checked_out')
                ->whereDate('check_out_time', $date)
                ->sum('total_minutes') / 60;
            
            $weeklyStudyData[] = [
                'day' => $date->format('D'),
                'hours' => round($hours, 1)
            ];
        }

        // Monthly study data (last 6 months)
        $monthlyStudyData = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $startOfMonth = $date->copy()->startOfMonth();
            $endOfMonth = $date->copy()->endOfMonth();
            
            $hours = SeatBooking::where('user_id', $user->id)
                ->where('status', 'checked_out')
                ->whereBetween('check_out_time', [$startOfMonth, $endOfMonth])
                ->sum('total_minutes') / 60;
                
            $monthlyStudyData[] = [
                'month' => $date->format('M'),
                'hours' => round($hours, 1)
            ];
        }

        // Update and get stored streak
        if ($user->last_streak_date && $user->last_streak_date < now()->subDay()->toDateString()) {
            $user->current_streak = 0;
            $user->save();
        }
        $studyStreak = $user->current_streak;

        // Session statistics
        $totalSessions = $completedBookings->count();
        $avgSessionDuration = $totalSessions > 0 ? round($totalMinutes / $totalSessions / 60, 1) : 0;
        $focusScore = min(100, round(($totalSessions * 5) + ($studyStreak * 10)));

        return response()->json([
            'stats' => $stats,
            'active_booking' => $activeBooking,
            'active_queue' => SmartQueue::with('seat.library')
                ->where('user_id', $user->id)
                ->whereIn('status', ['waiting', 'notified'])
                ->get(),
            'recent_activity' => $recentActivity,
            'upcoming_events' => $upcomingEvents,
            'analytics' => [
                'study_streak' => $studyStreak,
                'hours_today' => round($totalHoursToday, 1),
                'weekly_hours' => round($totalMinutes / 60, 1),
                'weekly_study_data' => $weeklyStudyData,
                'monthly_study_data' => $monthlyStudyData,
                'avg_session_duration' => $avgSessionDuration,
                'total_sessions' => $totalSessions,
                'focus_score' => $focusScore,
                'weekly_progress' => min(100, round(($totalMinutes / 60) / 20 * 100)), // 20 hours weekly goal
            ]
        ]);
    }
}
