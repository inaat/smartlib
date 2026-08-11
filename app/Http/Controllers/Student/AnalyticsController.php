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
    public function index(Request $request)
    {
        $user = Auth::user();

        $timeRange = $request->input('timeRange', $request->input('range', 'today'));

        $startDate = match ($timeRange) {
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

        $endDate = match ($timeRange) {
            'yesterday' => Carbon::yesterday()->endOfDay(),
            'last_month' => Carbon::now()->subMonth()->endOfMonth(),
            'this_month', 'month' => Carbon::now()->endOfMonth(),
            'this_year', 'year' => Carbon::now()->endOfYear(),
            'custom' => ($request->filled('to_date') ? Carbon::parse($request->to_date)->endOfDay() : Carbon::now()->endOfDay()),
            default => Carbon::now()->endOfDay(),
        };

        // Bookings in this time range
        $bookingsQuery = SeatBooking::where('seat_bookings.user_id', $user->id)
            ->where(function ($q) use ($startDate, $endDate) {
                $q->whereBetween('seat_bookings.booking_time', [$startDate, $endDate])
                  ->orWhereBetween('seat_bookings.created_at', [$startDate, $endDate]);
            })
            ->where('seat_bookings.status', '!=', 'cancelled');

        $bookings = $bookingsQuery->get();

        // Stats
        $stats = [
            'total_bookings' => $bookings->count(),
            'total_study_hours' => $this->calculateTotalStudyHours($user->id, $startDate, $endDate),
            'active_reservations' => BookReservation::where('user_id', $user->id)
                ->whereBetween('created_at', [$startDate, $endDate])
                ->active()
                ->count(),
            'study_streak' => $user->calculateStudyStreak()['current_streak'],
            'loyalty_points' => $user->loyalty_points ?? 0,
        ];

        // Study trends for the selected range
        $monthlyTrends = [];

        if (in_array($timeRange, ['today', 'this_month', 'month'])) {
            $startOfMonth = Carbon::now()->startOfMonth();
            $endOfMonth = Carbon::now()->endOfMonth();

            $monthBookings = SeatBooking::where('seat_bookings.user_id', $user->id)
                ->where(function ($q) use ($startOfMonth, $endOfMonth) {
                    $q->whereBetween('seat_bookings.booking_time', [$startOfMonth, $endOfMonth])
                      ->orWhereBetween('seat_bookings.created_at', [$startOfMonth, $endOfMonth]);
                })
                ->where('seat_bookings.status', '!=', 'cancelled')
                ->get();

            $current = $startOfMonth->copy();
            while ($current->lte($endOfMonth)) {
                $dayStart = $current->copy()->startOfDay();
                $dayEnd = $current->copy()->endOfDay();

                $cnt = $monthBookings->filter(function ($b) use ($dayStart, $dayEnd) {
                    $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                    return $bt->between($dayStart, $dayEnd);
                })->count();

                $monthlyTrends[] = [
                    'date' => $current->format('Y-m-d'),
                    'label' => $current->format('j M'),
                    'count' => $cnt,
                ];
                $current->addDay();
            }
        } elseif ($timeRange === 'yesterday') {
            $targetDay = Carbon::yesterday();
            for ($h = 0; $h <= 22; $h += 2) {
                $slotStart = $targetDay->copy()->setTime($h, 0, 0);
                $slotEnd = $targetDay->copy()->setTime($h + 1, 59, 59);

                $cnt = $bookings->filter(function ($b) use ($slotStart, $slotEnd) {
                    $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                    return $bt->between($slotStart, $slotEnd);
                })->count();

                $monthlyTrends[] = [
                    'date' => $slotStart->format('Y-m-d H:i:s'),
                    'label' => $slotStart->format('g A'),
                    'count' => $cnt,
                ];
            }
        } elseif ($timeRange === 'last_month') {
            $startOfMonth = Carbon::now()->subMonth()->startOfMonth();
            $endOfMonth = Carbon::now()->subMonth()->endOfMonth();

            $current = $startOfMonth->copy();
            while ($current->lte($endOfMonth)) {
                $dayStart = $current->copy()->startOfDay();
                $dayEnd = $current->copy()->endOfDay();

                $cnt = $bookings->filter(function ($b) use ($dayStart, $dayEnd) {
                    $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                    return $bt->between($dayStart, $dayEnd);
                })->count();

                $monthlyTrends[] = [
                    'date' => $current->format('Y-m-d'),
                    'label' => $current->format('j M'),
                    'count' => $cnt,
                ];
                $current->addDay();
            }
        } elseif (in_array($timeRange, ['this_year', 'year'])) {
            $startOfYear = Carbon::now()->startOfYear();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $cnt = $bookings->filter(function ($b) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                    return $bt->between($monthStart, $monthEnd);
                })->count();

                $monthlyTrends[] = [
                    'date' => $monthDate->format('Y-m-01'),
                    'label' => $monthDate->format('M'),
                    'count' => $cnt,
                ];
            }
        } elseif ($timeRange === 'custom') {
            $daysDiff = $startDate->diffInDays($endDate);
            if ($daysDiff <= 60) {
                $curr = $startDate->copy();
                while ($curr->lte($endDate)) {
                    $dayStart = $curr->copy()->startOfDay();
                    $dayEnd = $curr->copy()->endOfDay();

                    $cnt = $bookings->filter(function ($b) use ($dayStart, $dayEnd) {
                        $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                        return $bt->between($dayStart, $dayEnd);
                    })->count();

                    $monthlyTrends[] = [
                        'date' => $curr->format('Y-m-d'),
                        'label' => $curr->format('j M'),
                        'count' => $cnt,
                    ];
                    $curr->addDay();
                }
            } else {
                $curr = $startDate->copy()->startOfMonth();
                while ($curr->lte($endDate)) {
                    $mStart = $curr->copy()->startOfMonth();
                    $mEnd = $curr->copy()->endOfMonth();

                    $cnt = $bookings->filter(function ($b) use ($mStart, $mEnd) {
                        $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                        return $bt->between($mStart, $mEnd);
                    })->count();

                    $monthlyTrends[] = [
                        'date' => $curr->format('Y-m-01'),
                        'label' => $curr->format('M Y'),
                        'count' => $cnt,
                    ];
                    $curr->addMonth();
                }
            }
        } else {
            // All Time or Default (Last 12 Months)
            $allBookings = SeatBooking::where('seat_bookings.user_id', $user->id)
                ->where('seat_bookings.status', '!=', 'cancelled')
                ->get();

            $startOfYear = Carbon::now()->subMonths(11)->startOfMonth();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $cnt = $allBookings->filter(function ($b) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($b->booking_time ?? $b->created_at);
                    return $bt->between($monthStart, $monthEnd);
                })->count();

                $monthlyTrends[] = [
                    'date' => $monthDate->format('Y-m-01'),
                    'label' => $monthDate->format('M Y'),
                    'count' => $cnt,
                ];
            }
        }

        // Favorite libraries in selected time range
        $topLibraries = SeatBooking::where('seat_bookings.user_id', $user->id)
            ->where(function ($q) use ($startDate, $endDate) {
                $q->whereBetween('seat_bookings.booking_time', [$startDate, $endDate])
                  ->orWhereBetween('seat_bookings.created_at', [$startDate, $endDate]);
            })
            ->join('libraries', 'seat_bookings.library_id', '=', 'libraries.id')
            ->selectRaw('libraries.id, libraries.name, COUNT(*) as bookings_count')
            ->groupBy('libraries.id', 'libraries.name')
            ->orderBy('bookings_count', 'desc')
            ->take(5)
            ->get();

        // Recent Bookings in selected time range
        $recentBookings = SeatBooking::with(['library', 'seat'])
            ->where('seat_bookings.user_id', $user->id)
            ->where(function ($q) use ($startDate, $endDate) {
                $q->whereBetween('seat_bookings.booking_time', [$startDate, $endDate])
                  ->orWhereBetween('seat_bookings.created_at', [$startDate, $endDate]);
            })
            ->latest('seat_bookings.created_at')
            ->take(50)
            ->get();

        return response()->json([
            'stats' => $stats,
            'monthlyTrends' => $monthlyTrends,
            'topLibraries' => $topLibraries,
            'recentBookings' => $recentBookings,
            'timeRange' => $timeRange,
        ]);
    }

    private function calculateTotalStudyHours($userId, $startDate = null, $endDate = null)
    {
        $query = SeatBooking::where('seat_bookings.user_id', $userId)
            ->where('seat_bookings.status', 'checked_out')
            ->whereNotNull('seat_bookings.check_in_time')
            ->whereNotNull('seat_bookings.check_out_time');

        if ($startDate && $endDate) {
            $query->where(function ($q) use ($startDate, $endDate) {
                $q->whereBetween('seat_bookings.booking_time', [$startDate, $endDate])
                  ->orWhereBetween('seat_bookings.created_at', [$startDate, $endDate]);
            });
        }

        $bookings = $query->get();

        $totalMinutes = 0;
        foreach ($bookings as $booking) {
            $start = Carbon::parse($booking->check_in_time);
            $end = Carbon::parse($booking->check_out_time);
            $totalMinutes += $start->diffInMinutes($end, true);
        }

        return round($totalMinutes / 60, 1);
    }
}
