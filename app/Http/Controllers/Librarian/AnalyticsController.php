<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function index(Request $request)
    {
        $library = Auth::user()->library;

        if (!$library) {
            return response()->json(['error' => 'No library assigned to you'], 403);
        }

        $timeRange = $request->input('timeRange', 'week');
        $startDate = $this->getStartDate($timeRange);

        // Get bookings for the time range
        $bookings = $library->seatBookings()
            ->where('seat_bookings.created_at', '>=', $startDate)
            ->get();

        // Calculate stats
        $totalBookings = $bookings->count();
        $completedBookings = $bookings->where('status', 'completed')->count();
        $noShowBookings = $bookings->where('status', 'no_show')->count();
        $activeBookings = $bookings->whereIn('status', ['pending', 'active'])->count();

        $completionRate = $totalBookings > 0 ? round(($completedBookings / $totalBookings) * 100, 1) : 0;
        $noShowRate = $totalBookings > 0 ? round(($noShowBookings / $totalBookings) * 100, 1) : 0;

        // Calculate average session duration
        $completedWithTimes = $bookings->filter(function ($booking) {
            return $booking->status === 'completed' && $booking->checked_in_at && $booking->checked_out_at;
        });

        $avgDuration = 0;
        if ($completedWithTimes->count() > 0) {
            $totalMinutes = $completedWithTimes->sum(function ($booking) {
                $checkIn = Carbon::parse($booking->checked_in_at);
                $checkOut = Carbon::parse($booking->checked_out_at);
                return $checkOut->diffInMinutes($checkIn);
            });
            $avgDuration = round($totalMinutes / $completedWithTimes->count() / 60, 1); // Convert to hours
        }

        // Daily trends for the last 7 days
        $dailyTrends = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $dayBookings = $bookings->filter(function ($booking) use ($date) {
                return Carbon::parse($booking->created_at)->isSameDay($date);
            });

            $dailyTrends[] = [
                'date' => $date->format('Y-m-d'),
                'day' => $date->format('D'),
                'bookings' => $dayBookings->count(),
                'completed' => $dayBookings->where('status', 'completed')->count(),
            ];
        }

        // Popular time slots
        $timeSlotData = $bookings->groupBy(function ($booking) {
            return Carbon::parse($booking->start_time)->format('H:00');
        })->map(function ($group) {
            return $group->count();
        })->sortDesc()->take(5);

        $popularTimeSlots = $timeSlotData->map(function ($count, $time) {
            return [
                'time' => $time,
                'bookings' => $count,
            ];
        })->values();

        // Current library occupancy
        $totalSeats = $library->seats()->count();
        $availableSeats = $library->seats()->where('status', 'available')->count();
        $occupiedSeats = $totalSeats - $availableSeats;
        $occupancyRate = $totalSeats > 0 ? round(($occupiedSeats / $totalSeats) * 100, 1) : 0;

        // Book stats
        $totalBooks = $library->books()->count();
        $digitalBooks = $library->books()->where('type', 'digital')->count();
        $physicalBooks = $library->books()->where('type', 'physical')->count();

        // Event stats
        $totalEvents = $library->events()->count();
        $upcomingEvents = $library->events()->where('date', '>=', now())->count();
        $pastEvents = $library->events()->where('date', '<', now())->count();

        return response()->json([
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
            ],
            'stats' => [
                'total_bookings' => $totalBookings,
                'active_bookings' => $activeBookings,
                'completed_bookings' => $completedBookings,
                'completion_rate' => $completionRate,
                'no_show_rate' => $noShowRate,
                'avg_session_duration' => $avgDuration,
                'total_seats' => $totalSeats,
                'available_seats' => $availableSeats,
                'occupancy_rate' => $occupancyRate,
                'total_books' => $totalBooks,
                'digital_books' => $digitalBooks,
                'physical_books' => $physicalBooks,
                'total_events' => $totalEvents,
                'upcoming_events' => $upcomingEvents,
                'past_events' => $pastEvents,
            ],
            'dailyTrends' => $dailyTrends,
            'popularTimeSlots' => $popularTimeSlots,
            'timeRange' => $timeRange,
        ]);
    }

    private function getStartDate($timeRange)
    {
        return match ($timeRange) {
            'today' => Carbon::today(),
            'week' => Carbon::now()->subWeek(),
            'month' => Carbon::now()->subMonth(),
            'year' => Carbon::now()->subYear(),
            default => Carbon::now()->subWeek(),
        };
    }
}
