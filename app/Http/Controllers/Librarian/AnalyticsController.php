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
            'year' => 365,
            default => 7,
        };

        $startDate = $this->getStartDate($timeRange);
        $previousStartDate = $this->getPreviousStartDate($timeRange);

        // Get bookings for the current time range with relations
        $bookings = $library->seatBookings()
            ->where('seat_bookings.booking_time', '>=', $startDate)
            ->where('seat_bookings.status', '!=', 'cancelled')
            ->with(['user', 'seat.seatSubsection', 'seat.seatSection'])
            ->get();

        // Get bookings for the previous time range
        $previousBookings = $library->seatBookings()
            ->where('seat_bookings.booking_time', '>=', $previousStartDate)
            ->where('seat_bookings.booking_time', '<', $startDate)
            ->where('seat_bookings.status', '!=', 'cancelled')
            ->get();

        // Calculate stats
        $totalBookings = $bookings->count();
        $completedBookings = $bookings->where('status', 'checked_out')->count();
        $noShowBookings = $bookings->where('status', 'no_show')->count();
        $activeBookings = $bookings->whereIn('status', ['booked', 'checked_in'])->count();

        $prevTotalBookings = $previousBookings->count();
        $prevCompletedBookings = $previousBookings->where('status', 'checked_out')->count();

        // Calculate changes
        $totalBookingsChange = $this->calculatePercentageChange($totalBookings, $prevTotalBookings);
        $completedBookingsChange = $this->calculatePercentageChange($completedBookings, $prevCompletedBookings);

        $completionRate = $totalBookings > 0 ? round(($completedBookings / $totalBookings) * 100, 1) : 0;
        $noShowRate = $totalBookings > 0 ? round(($noShowBookings / $totalBookings) * 100, 1) : 0;

        // Calculate average session duration
        $completedWithTimes = $bookings->filter(function ($booking) {
            return $booking->status === 'checked_out' && $booking->check_in_time && $booking->check_out_time;
        });

        $avgDuration = 0;
        if ($completedWithTimes->count() > 0) {
            $totalMinutes = $completedWithTimes->sum(function ($booking) {
                $checkIn = Carbon::parse($booking->check_in_time);
                $checkOut = Carbon::parse($booking->check_out_time);
                return $checkOut->diffInMinutes($checkIn, true);
            });
            $avgDuration = round($totalMinutes / $completedWithTimes->count() / 60, 1); // Convert to hours
        }

        $prevCompletedWithTimes = $previousBookings->filter(function ($booking) {
            return $booking->status === 'checked_out' && $booking->check_in_time && $booking->check_out_time;
        });

        $prevAvgDuration = 0;
        if ($prevCompletedWithTimes->count() > 0) {
            $prevTotalMinutes = $prevCompletedWithTimes->sum(function ($booking) {
                $checkIn = Carbon::parse($booking->check_in_time);
                $checkOut = Carbon::parse($booking->check_out_time);
                return $checkOut->diffInMinutes($checkIn, true);
            });
            $prevAvgDuration = round($prevTotalMinutes / $prevCompletedWithTimes->count() / 60, 1);
        }

        $avgDurationChange = $this->calculatePercentageChange($avgDuration, $prevAvgDuration);

        // Trends grouping for the requested range
        $dailyTrends = [];
        if ($timeRange === 'year') {
            // Group month-wise for the last 12 months
            for ($i = 11; $i >= 0; $i--) {
                $monthDate = Carbon::now()->subMonths($i);
                $monthBookings = $bookings->filter(function ($booking) use ($monthDate) {
                    return Carbon::parse($booking->booking_time)->isSameMonth($monthDate);
                });

                $dailyTrends[] = [
                    'date' => $monthDate->format('Y-m'),
                    'day' => $monthDate->format('M'),
                    'bookings' => $monthBookings->count(),
                    'completed' => $monthBookings->where('status', 'checked_out')->count(),
                ];
            }
        } elseif ($timeRange === 'month') {
            // Group week-wise (4 weeks of the last 30 days)
            for ($i = 3; $i >= 0; $i--) {
                $endDays = $i * 7;
                $startDays = ($i + 1) * 7 - 1;
                if ($i === 3) $startDays = 29; // cover full 30 days
                
                $start = Carbon::now()->subDays($startDays)->startOfDay();
                $end = Carbon::now()->subDays($endDays)->endOfDay();
                
                $weekBookings = $bookings->filter(function ($booking) use ($start, $end) {
                    $bt = Carbon::parse($booking->booking_time);
                    return $bt->between($start, $end);
                });

                $dailyTrends[] = [
                    'date' => $start->format('Y-m-d'),
                    'day' => 'Week ' . (4 - $i),
                    'bookings' => $weekBookings->count(),
                    'completed' => $weekBookings->where('status', 'checked_out')->count(),
                ];
            }
        } else {
            // Default to day-wise (for week or today)
            for ($i = $daysCount - 1; $i >= 0; $i--) {
                $date = Carbon::now()->subDays($i);
                $dayBookings = $bookings->filter(function ($booking) use ($date) {
                    return Carbon::parse($booking->booking_time)->isSameDay($date);
                });

                $dailyTrends[] = [
                    'date' => $date->format('Y-m-d'),
                    'day' => $date->format('D'),
                    'bookings' => $dayBookings->count(),
                    'completed' => $dayBookings->where('status', 'checked_out')->count(),
                ];
            }
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

        // Compare daily booking averages for occupancy proxy trends
        $currAvgBookingsPerDay = $totalBookings / max($daysCount, 1);
        $prevAvgBookingsPerDay = $prevTotalBookings / max($daysCount, 1);
        $occupancyRateChange = $this->calculatePercentageChange($currAvgBookingsPerDay, $prevAvgBookingsPerDay);

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

        // Top Students
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

        // Popular Seats
        $popularSeats = DB::table('seat_bookings')
            ->join('seats', 'seat_bookings.seat_id', '=', 'seats.id')
            ->where('seat_bookings.library_id', $library->id)
            ->where('seat_bookings.booking_time', '>=', $startDate)
            ->where('seat_bookings.status', '!=', 'cancelled')
            ->select('seats.seat_number as number', DB::raw('COUNT(*) as bookings'))
            ->groupBy('seats.id', 'seats.seat_number')
            ->orderByDesc('bookings')
            ->take(5)
            ->get()
            ->map(function ($seat) use ($totalBookings) {
                $seat->utilization = $totalBookings > 0 ? round(($seat->bookings / $totalBookings) * 100, 1) : 0;
                return (array)$seat;
            });

        // Book Reservation Status Counts
        $bookReservationStats = DB::table('book_reservations')
            ->join('books', 'book_reservations.book_id', '=', 'books.id')
            ->where('books.library_id', $library->id)
            ->where('book_reservations.created_at', '>=', $startDate)
            ->select('book_reservations.status', DB::raw('COUNT(*) as count'))
            ->groupBy('book_reservations.status')
            ->get();

        $issuedCount = 0;
        $returnedCount = 0;
        $pendingCount = 0;

        foreach ($bookReservationStats as $stat) {
            if (in_array($stat->status, ['collected', 'overdue'])) {
                $issuedCount += $stat->count;
            } elseif ($stat->status === 'returned') {
                $returnedCount += $stat->count;
            } elseif (in_array($stat->status, ['pending', 'approved', 'pending_return'])) {
                $pendingCount += $stat->count;
            }
        }

        // Most Issued Books
        $mostIssuedBooks = DB::table('book_reservations')
            ->join('books', 'book_reservations.book_id', '=', 'books.id')
            ->where('books.library_id', $library->id)
            ->where('book_reservations.created_at', '>=', $startDate)
            ->whereNotIn('book_reservations.status', ['rejected', 'cancelled'])
            ->select('books.title', DB::raw('COUNT(*) as count'))
            ->groupBy('books.id', 'books.title')
            ->orderByDesc('count')
            ->take(6)
            ->get()
            ->map(function ($item) {
                return [
                    'title' => $item->title,
                    'count' => (int) $item->count,
                ];
            });

        // Gender and Level wise booking analytics
        $genderStats = [
            'male' => 0,
            'female' => 0,
            'mixed' => 0,
            'total' => 0,
        ];

        $levelStats = [
            'PRC' => 0,
            'CAF' => 0,
            'Final' => 0,
            'all' => 0,
            'total' => 0,
        ];

        foreach ($bookings as $booking) {
            // Gender
            $uGender = strtolower($booking->user->gender ?? '');
            if (in_array($uGender, ['male', 'boys', 'boy', 'men'])) {
                $genderStats['male']++;
            } elseif (in_array($uGender, ['female', 'girls', 'girl', 'women'])) {
                $genderStats['female']++;
            } else {
                $subGender = strtolower($booking->seat->seatSubsection->gender ?? '');
                $secGender = strtolower($booking->seat->seatSection->gender ?? '');
                if (in_array($subGender, ['male', 'boys']) || in_array($secGender, ['male', 'boys'])) {
                    $genderStats['male']++;
                } elseif (in_array($subGender, ['female', 'girls']) || in_array($secGender, ['female', 'girls'])) {
                    $genderStats['female']++;
                } else {
                    $genderStats['mixed']++;
                }
            }
            $genderStats['total']++;

            // Academic Level
            $subLevel = $booking->seat->seatSubsection->academic_level ?? '';
            $secLevel = $booking->seat->seatSection->academic_level ?? '';
            $userLevel = $booking->user->academic_level ?? '';

            $lvl = !empty($subLevel) && $subLevel !== 'all' ? $subLevel : (!empty($secLevel) && $secLevel !== 'all' ? $secLevel : (!empty($userLevel) && $userLevel !== 'all' ? $userLevel : 'all'));

            if (strcasecmp($lvl, 'PRC') === 0) {
                $levelStats['PRC']++;
            } elseif (strcasecmp($lvl, 'CAF') === 0) {
                $levelStats['CAF']++;
            } elseif (strcasecmp($lvl, 'Final') === 0) {
                $levelStats['Final']++;
            } else {
                $levelStats['all']++;
            }
            $levelStats['total']++;
        }

        return response()->json([
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
            ],
            'stats' => [
                'total_bookings' => $totalBookings,
                'total_bookings_change' => $totalBookingsChange,
                'active_bookings' => $activeBookings,
                'completed_bookings' => $completedBookings,
                'completed_bookings_change' => $completedBookingsChange,
                'completion_rate' => $completionRate,
                'no_show_rate' => $noShowRate,
                'avg_session_duration' => $avgDuration,
                'avg_session_duration_change' => $avgDurationChange,
                'total_seats' => $totalSeats,
                'available_seats' => $availableSeats,
                'occupancy_rate' => $occupancyRate,
                'occupancy_rate_change' => $occupancyRateChange,
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
            'genderStats' => $genderStats,
            'levelStats' => $levelStats,
            'bookStats' => [
                'issued' => $issuedCount,
                'returned' => $returnedCount,
                'pending' => $pendingCount,
                'total' => $issuedCount + $returnedCount + $pendingCount,
            ],
            'mostIssuedBooks' => $mostIssuedBooks,
            'timeRange' => $timeRange,
        ]);
    }

    private function calculatePercentageChange($current, $previous)
    {
        if ($previous == 0) {
            return $current > 0 ? 100 : 0;
        }
        return round((($current - $previous) / $previous) * 100, 1);
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

    private function getPreviousStartDate($timeRange)
    {
        return match ($timeRange) {
            'today' => Carbon::yesterday(),
            'week' => Carbon::now()->subWeeks(2),
            'month' => Carbon::now()->subMonths(2),
            'year' => Carbon::now()->subYears(2),
            default => Carbon::now()->subWeeks(2),
        };
    }
}
