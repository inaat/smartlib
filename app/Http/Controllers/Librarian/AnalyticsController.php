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
        $daysCount = match ($timeRange) {
            'today' => 1,
            'week' => 7,
            'month' => 30,
            default => 7,
        };

        $startDate = $this->getStartDate($timeRange);

        // Get bookings for the time range (based on booking_time, not created_at)
        $bookings = $library->seatBookings()
            ->where('seat_bookings.booking_time', '>=', $startDate)
            ->get();

        // Calculate stats
        $totalBookings = $bookings->count();
        $completedBookings = $bookings->where('status', 'completed')->count();
        $noShowBookings = $bookings->where('status', 'no_show')->count();
        $activeBookings = $bookings->whereIn('status', ['booked', 'checked_in'])->count();

        $completionRate = $totalBookings > 0 ? round(($completedBookings / $totalBookings) * 100, 1) : 0;
        $noShowRate = $totalBookings > 0 ? round(($noShowBookings / $totalBookings) * 100, 1) : 0;

        // Calculate average session duration
        $completedWithTimes = $bookings->filter(function ($booking) {
            return $booking->status === 'completed' && $booking->check_in_time && $booking->check_out_time;
        });

        $avgDuration = 0;
        if ($completedWithTimes->count() > 0) {
            $totalMinutes = $completedWithTimes->sum(function ($booking) {
                $checkIn = Carbon::parse($booking->check_in_time);
                $checkOut = Carbon::parse($booking->check_out_time);
                return $checkOut->diffInMinutes($checkIn);
            });
            $avgDuration = round($totalMinutes / $completedWithTimes->count() / 60, 1); // Convert to hours
        }

        // Daily trends for the requested range
        $dailyTrends = [];
        for ($i = $daysCount - 1; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $dayBookings = $bookings->filter(function ($booking) use ($date) {
                return Carbon::parse($booking->booking_time)->isSameDay($date);
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
            return Carbon::parse($booking->booking_time)->format('H:00');
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
        $availableSeats = $library->seats()->where('seats.status', 'available')->count();
        $occupiedSeats = $totalSeats - $availableSeats;
        $occupancyRate = $totalSeats > 0 ? round(($occupiedSeats / $totalSeats) * 100, 1) : 0;

        // Book stats
        $totalBooks = $library->books()->count();
        $digitalBooks = $library->books()->where('type', 'digital')->count();
        $physicalBooks = $library->books()->where('type', 'physical')->count();

        // Event stats
        $totalEvents = $library->events()->count();
        $upcomingEvents = $library->events()
            ->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })->count();
        $pastEvents = $library->events()
            ->where(function ($q) {
                $q->where('date', '<', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '<', now()->toTimeString());
                  });
            })->count();

        // Top Students (by Attendance minutes instead of just seatBookings, as it's more accurate)
        $topStudents = DB::table('attendance')
            ->join('users', 'attendance.user_id', '=', 'users.id')
            ->where('attendance.library_id', $library->id)
            ->where('attendance.date', '>=', $startDate->toDateString())
            ->select('users.id', 'users.name', 'users.loyalty_points as points', DB::raw('SUM(attendance.total_minutes) / 60 as hours'))
            ->groupBy('users.id', 'users.name', 'users.loyalty_points')
            ->orderByDesc('hours')
            ->take(5)
            ->get()
            ->map(function ($student) {
                $student->hours = round($student->hours ?? 0, 1);
                $student->points = $student->points ?? 0;
                return (array)$student;
            });

        // Popular Seats (from seatBookings)
        $popularSeats = DB::table('seat_bookings')
            ->join('seats', 'seat_bookings.seat_id', '=', 'seats.id')
            ->where('seat_bookings.library_id', $library->id)
            ->where('seat_bookings.booking_time', '>=', $startDate)
            ->select('seats.seat_number as number', DB::raw('COUNT(*) as bookings'))
            ->groupBy('seats.id', 'seats.seat_number')
            ->orderByDesc('bookings')
            ->take(5)
            ->get()
            ->map(function ($seat) use ($totalBookings) {
                $seat->utilization = $totalBookings > 0 ? round(($seat->bookings / $totalBookings) * 100, 1) : 0;
                return (array)$seat;
            });

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
            'topStudents' => $topStudents,
            'popularSeats' => $popularSeats,
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
