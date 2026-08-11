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

        $timeRange = $request->input('timeRange', $request->input('range', 'today'));
        
        $startDate = $this->getStartDate($timeRange, $request);
        $endDate = $this->getEndDate($timeRange, $request);
        $previousStartDate = $this->getPreviousStartDate($timeRange, $startDate, $endDate);
        $previousEndDate = $startDate->copy()->subSecond();

        $daysCount = max(1, $startDate->diffInDays($endDate));

        // Get bookings for the current time range with relations
        $bookings = $library->seatBookings()
            ->whereBetween('seat_bookings.booking_time', [$startDate, $endDate])
            ->where('seat_bookings.status', '!=', 'cancelled')
            ->with(['user', 'seat.seatSubsection', 'seat.seatSection', 'seat.floor'])
            ->get();

        // Get bookings for the previous time range
        $previousBookings = $library->seatBookings()
            ->whereBetween('seat_bookings.booking_time', [$previousStartDate, $previousEndDate])
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

        if (in_array($timeRange, ['today', 'yesterday'])) {
            $targetDay = $timeRange === 'yesterday' ? Carbon::yesterday() : Carbon::today();
            // 2-hour intervals (00:00 to 22:00)
            for ($h = 0; $h <= 22; $h += 2) {
                $slotStart = $targetDay->copy()->setTime($h, 0, 0);
                $slotEnd = $targetDay->copy()->setTime($h + 1, 59, 59);

                $slotBookings = $bookings->filter(function ($booking) use ($slotStart, $slotEnd) {
                    $bt = Carbon::parse($booking->booking_time);
                    return $bt->between($slotStart, $slotEnd);
                });

                $dailyTrends[] = [
                    'date' => $slotStart->format('Y-m-d H:i'),
                    'day' => $slotStart->format('g A'),
                    'bookings' => $slotBookings->count(),
                    'completed' => $slotBookings->where('status', 'checked_out')->count(),
                ];
            }
        } elseif (in_array($timeRange, ['this_month', 'last_month', 'month'])) {
            $startOfMonth = $timeRange === 'last_month' 
                ? Carbon::now()->subMonth()->startOfMonth() 
                : Carbon::now()->startOfMonth();
            $endOfMonth = $timeRange === 'last_month' 
                ? Carbon::now()->subMonth()->endOfMonth() 
                : Carbon::now()->endOfDay();

            $current = $startOfMonth->copy();
            while ($current->lte($endOfMonth)) {
                $dayStart = $current->copy()->startOfDay();
                $dayEnd = $current->copy()->endOfDay();

                $dayBookings = $bookings->filter(function ($booking) use ($dayStart, $dayEnd) {
                    $bt = Carbon::parse($booking->booking_time);
                    return $bt->between($dayStart, $dayEnd);
                });

                $dailyTrends[] = [
                    'date' => $current->format('Y-m-d'),
                    'day' => $current->format('j M'),
                    'bookings' => $dayBookings->count(),
                    'completed' => $dayBookings->where('status', 'checked_out')->count(),
                ];
                $current->addDay();
            }
        } elseif (in_array($timeRange, ['this_year', 'year'])) {
            $startOfYear = Carbon::now()->startOfYear();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $monthBookings = $bookings->filter(function ($booking) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($booking->booking_time);
                    return $bt->between($monthStart, $monthEnd);
                });

                $dailyTrends[] = [
                    'date' => $monthDate->format('Y-m'),
                    'day' => $monthDate->format('M'),
                    'bookings' => $monthBookings->count(),
                    'completed' => $monthBookings->where('status', 'checked_out')->count(),
                ];
            }
        } elseif ($timeRange === 'custom') {
            $daysDiff = $startDate->diffInDays($endDate);
            if ($daysDiff <= 2) {
                $curr = $startDate->copy();
                while ($curr->lte($endDate)) {
                    $slotStart = $curr->copy();
                    $slotEnd = $curr->copy()->addHours(2)->subSecond();

                    $slotBookings = $bookings->filter(function ($booking) use ($slotStart, $slotEnd) {
                        $bt = Carbon::parse($booking->booking_time);
                        return $bt->between($slotStart, $slotEnd);
                    });

                    $dailyTrends[] = [
                        'date' => $slotStart->format('Y-m-d H:i'),
                        'day' => $daysDiff <= 1 ? $slotStart->format('g A') : $slotStart->format('M j g A'),
                        'bookings' => $slotBookings->count(),
                        'completed' => $slotBookings->where('status', 'checked_out')->count(),
                    ];
                    $curr->addHours(2);
                }
            } elseif ($daysDiff <= 60) {
                $curr = $startDate->copy();
                while ($curr->lte($endDate)) {
                    $dayStart = $curr->copy()->startOfDay();
                    $dayEnd = $curr->copy()->endOfDay();

                    $dayBookings = $bookings->filter(function ($booking) use ($dayStart, $dayEnd) {
                        $bt = Carbon::parse($booking->booking_time);
                        return $bt->between($dayStart, $dayEnd);
                    });

                    $dailyTrends[] = [
                        'date' => $curr->format('Y-m-d'),
                        'day' => $curr->format('j M'),
                        'bookings' => $dayBookings->count(),
                        'completed' => $dayBookings->where('status', 'checked_out')->count(),
                    ];
                    $curr->addDay();
                }
            } else {
                $curr = $startDate->copy()->startOfMonth();
                while ($curr->lte($endDate)) {
                    $mStart = $curr->copy()->startOfMonth();
                    $mEnd = $curr->copy()->endOfMonth();

                    $mBookings = $bookings->filter(function ($booking) use ($mStart, $mEnd) {
                        $bt = Carbon::parse($booking->booking_time);
                        return $bt->between($mStart, $mEnd);
                    });

                    $dailyTrends[] = [
                        'date' => $curr->format('Y-m'),
                        'day' => $curr->format('M Y'),
                        'bookings' => $mBookings->count(),
                        'completed' => $mBookings->where('status', 'checked_out')->count(),
                    ];
                    $curr->addMonth();
                }
            }
        } else {
            // All Time or Default (Last 12 Months)
            $startOfYear = Carbon::now()->subMonths(11)->startOfMonth();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $monthBookings = $bookings->filter(function ($booking) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($booking->booking_time);
                    return $bt->between($monthStart, $monthEnd);
                });

                $dailyTrends[] = [
                    'date' => $monthDate->format('Y-m'),
                    'day' => $monthDate->format('M Y'),
                    'bookings' => $monthBookings->count(),
                    'completed' => $monthBookings->where('status', 'checked_out')->count(),
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

        // Hourly traffic distribution based ONLY on confirmed checked-in bookings (exact start hour)
        $checkedInBookings = $bookings->filter(function ($b) {
            return in_array($b->status, ['checked_in', 'checked_out', 'completed', 'pending_return']) 
                || !is_null($b->check_in_time) 
                || $b->qr_scanned;
        });

        $hourlyDistribution = [];
        $appTimezone = config('app.timezone', 'Asia/Karachi');

        // Group confirmed checked-in bookings by their exact booking start hour
        $hourlyGroup = $checkedInBookings->groupBy(function ($booking) use ($appTimezone) {
            return (int) Carbon::parse($booking->booking_time)->setTimezone($appTimezone)->format('H');
        });

        // Dynamically compute min/max hour span to capture all checked-in bookings
        $minHour = 8;
        $maxHour = 20;

        foreach ($hourlyGroup->keys() as $hourKey) {
            if ($hourKey < $minHour) $minHour = max(0, (int)$hourKey);
            if ($hourKey > $maxHour) $maxHour = min(23, (int)$hourKey);
        }

        for ($h = $minHour; $h <= $maxHour; $h++) {
            $label = $h < 12 ? ($h == 0 ? "12a" : "{$h}a") : ($h == 12 ? "12p" : ($h - 12) . "p");
            $fullLabel = Carbon::today()->setTime($h, 0)->format('g:i A');

            // Count exact confirmed checked-in bookings starting at hour $h
            $cnt = isset($hourlyGroup[$h]) ? $hourlyGroup[$h]->count() : 0;

            $hourlyDistribution[] = [
                'hour' => $h,
                'label' => $label,
                'fullTime' => $fullLabel,
                'bookings' => $cnt,
            ];
        }

        // Library occupancy & occupancy rate based on confirmed checked-in seat bookings
        $totalSeats = $library->seats()->count();

        if ($totalSeats > 0) {
            // Group checked-in bookings by date and count unique seats booked each day
            $dailyUniqueSeats = $checkedInBookings->groupBy(function ($booking) {
                return Carbon::parse($booking->booking_time ?? $booking->created_at)->toDateString();
            })->map(function ($group) {
                return $group->pluck('seat_id')->unique()->count();
            });

            // Active days where there were bookings in this range
            $activeDaysCount = in_array($timeRange, ['today', 'yesterday']) ? 1 : max(1, $dailyUniqueSeats->count());

            // Average daily occupied seats
            $avgOccupiedSeats = $dailyUniqueSeats->count() > 0 
                ? ($dailyUniqueSeats->sum() / $activeDaysCount) 
                : 0;

            $occupancyRate = round(($avgOccupiedSeats / $totalSeats) * 100, 1);
            if ($occupancyRate > 100) {
                $occupancyRate = 100.0;
            }

            $availableSeats = max(0, (int) round($totalSeats - $avgOccupiedSeats));

            // Previous period average daily occupied seats for checked-in bookings
            $prevCheckedInBookings = $previousBookings->filter(function ($b) {
                return in_array($b->status, ['checked_in', 'checked_out', 'completed', 'pending_return']) 
                    || !is_null($b->check_in_time) 
                    || $b->qr_scanned;
            });

            $prevDailyUniqueSeats = $prevCheckedInBookings->groupBy(function ($booking) {
                return Carbon::parse($booking->booking_time ?? $booking->created_at)->toDateString();
            })->map(function ($group) {
                return $group->pluck('seat_id')->unique()->count();
            });

            $prevActiveDaysCount = in_array($timeRange, ['today', 'yesterday']) ? 1 : max(1, $prevDailyUniqueSeats->count());

            $prevAvgOccupiedSeats = $prevDailyUniqueSeats->count() > 0 
                ? ($prevDailyUniqueSeats->sum() / $prevActiveDaysCount) 
                : 0;

            $prevOccupancyRate = round(($prevAvgOccupiedSeats / $totalSeats) * 100, 1);
            if ($prevOccupancyRate > 100) {
                $prevOccupancyRate = 100.0;
            }

            $occupancyRateChange = $this->calculatePercentageChange($occupancyRate, $prevOccupancyRate);
        } else {
            $availableSeats = 0;
            $occupancyRate = 0.0;
            $occupancyRateChange = 0;
        }

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
            // Gender: Priority to User Profile Gender
            $uGender = strtolower(trim($booking->user->gender ?? ''));
            $subGender = strtolower(trim($booking->seat->seatSubsection->gender ?? ''));
            $secGender = strtolower(trim($booking->seat->seatSection->gender ?? ''));
            $floorGender = strtolower(trim($booking->seat->floor->type ?? ''));

            $isFemale = in_array($uGender, ['female', 'girls', 'girl', 'women', 'f']);
            $isMale = in_array($uGender, ['male', 'boys', 'boy', 'men', 'm']);

            if (!$isFemale && !$isMale) {
                // Fallback to area gender if user profile gender is unspecified
                $isFemale = in_array($subGender, ['female', 'girls', 'girl', 'women', 'f', 'female_only', 'female_section', 'girls_only']) ||
                            in_array($secGender, ['female', 'girls', 'girl', 'women', 'f', 'female_only', 'female_section', 'girls_only']) ||
                            in_array($floorGender, ['girls_only', 'female_only', 'girls']);
            }

            if ($isFemale) {
                $genderStats['female']++;
            } else {
                $genderStats['male']++;
            }
            $genderStats['total']++;

            // Academic Level: Priority to User ca_level > Subsection level > Section level
            $userLevel = $booking->user->ca_level ?? $booking->user->academic_level ?? '';
            $subLevel = $booking->seat->seatSubsection->academic_level ?? '';
            $secLevel = $booking->seat->seatSection->academic_level ?? '';

            $lvl = !empty($userLevel) && strtolower($userLevel) !== 'all' 
                ? $userLevel 
                : (!empty($subLevel) && strtolower($subLevel) !== 'all' 
                    ? $subLevel 
                    : (!empty($secLevel) && strtolower($secLevel) !== 'all' 
                        ? $secLevel 
                        : 'PRC'));

            if (strcasecmp($lvl, 'PRC') === 0) {
                $levelStats['PRC']++;
            } elseif (strcasecmp($lvl, 'CAF') === 0) {
                $levelStats['CAF']++;
            } elseif (strcasecmp($lvl, 'Final') === 0 || strcasecmp($lvl, 'Final Year') === 0) {
                $levelStats['Final']++;
            } else {
                $levelStats['PRC']++;
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
            'hourlyDistribution' => $hourlyDistribution,
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

    private function getStartDate($timeRange, Request $request)
    {
        return match ($timeRange) {
            'today' => Carbon::today()->startOfDay(),
            'yesterday' => Carbon::yesterday()->startOfDay(),
            'this_month', 'month' => Carbon::now()->startOfMonth(),
            'last_month' => Carbon::now()->subMonth()->startOfMonth(),
            'this_year', 'year' => Carbon::now()->startOfYear(),
            'custom' => ($request->filled('from_date') ? Carbon::parse($request->from_date)->startOfDay() : Carbon::today()->startOfDay()),
            'all' => Carbon::create(2000, 1, 1)->startOfDay(),
            'week' => Carbon::now()->subDays(7)->startOfDay(),
            default => Carbon::today()->startOfDay(),
        };
    }

    private function getEndDate($timeRange, Request $request)
    {
        return match ($timeRange) {
            'yesterday' => Carbon::yesterday()->endOfDay(),
            'last_month' => Carbon::now()->subMonth()->endOfMonth(),
            'this_month', 'month' => Carbon::now()->endOfMonth(),
            'this_year', 'year' => Carbon::now()->endOfYear(),
            'custom' => ($request->filled('to_date') ? Carbon::parse($request->to_date)->endOfDay() : Carbon::now()->endOfDay()),
            default => Carbon::now()->endOfDay(),
        };
    }

    private function getPreviousStartDate($timeRange, $startDate, $endDate)
    {
        $diffSeconds = $startDate->diffInSeconds($endDate);
        return $startDate->copy()->subSeconds($diffSeconds + 1);
    }
}
