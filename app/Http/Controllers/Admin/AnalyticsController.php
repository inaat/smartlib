<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Library;
use App\Models\SeatBooking;
use App\Models\UserSubscription;
use App\Models\Event;
use App\Models\Book;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function index()
    {
        $isSuperAdmin = auth()->user()->role === 'super_admin';
        $myId = auth()->id();
        $myLibraryIds = Library::where('created_by', $myId)->pluck('id');

        $usersQuery = User::query();

        $librariesQuery = Library::query();
        if ($isSuperAdmin) {
            $librariesQuery->where('created_by', $myId);
        }

        $bookingQuery = SeatBooking::query()->where('status', '!=', 'cancelled');
        if ($isSuperAdmin) {
            $bookingQuery->whereIn('library_id', $myLibraryIds);
        }

        $subscriptionQuery = UserSubscription::query();
        if ($isSuperAdmin) {
            $subscriptionQuery->whereHas('user', function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $range = request()->query('range', request()->query('timeRange', 'today'));

        $startDate = match($range) {
            'today' => now()->startOfDay(),
            'yesterday' => now()->subDay()->startOfDay(),
            'this_month', 'monthly', 'month' => now()->startOfMonth(),
            'last_month' => now()->subMonth()->startOfMonth(),
            'this_year', 'yearly', 'year' => now()->startOfYear(),
            'custom' => request()->filled('from_date') ? Carbon::parse(request()->from_date)->startOfDay() : now()->startOfDay(),
            'all' => Carbon::create(2000, 1, 1)->startOfDay(),
            'weekly', 'week' => now()->subDays(7)->startOfDay(),
            default => now()->startOfDay(),
        };

        $endDate = match($range) {
            'yesterday' => now()->subDay()->endOfDay(),
            'last_month' => now()->subMonth()->endOfMonth(),
            'custom' => request()->filled('to_date') ? Carbon::parse(request()->to_date)->endOfDay() : now()->endOfDay(),
            default => now()->endOfDay(),
        };

        $dateFilter = $startDate;

        $analytics = [
            'total_users' => (clone $usersQuery)->count(),
            'total_students' => (clone $usersQuery)->where('role', 'student')->count(),
            'total_librarians' => (clone $usersQuery)->where('role', 'librarian')->count(),
            'total_libraries' => (clone $librariesQuery)->count(),
            'total_bookings' => (clone $bookingQuery)->where('created_at', '>=', $dateFilter)->count(),
            'active_bookings' => (clone $bookingQuery)->whereIn('status', ['booked', 'active', 'checked_in'])->count(),
            'completed_bookings' => (clone $bookingQuery)->where('created_at', '>=', $dateFilter)->where('status', 'checked_out')->count(),
            'total_revenue' => (float) (clone $subscriptionQuery)->sum('amount_paid'),
            'monthly_revenue' => (float) (clone $subscriptionQuery)->whereMonth('created_at', now()->month)->sum('amount_paid'),
            'total_events' => Event::whereIn('library_id', $myLibraryIds)->count(),
            'upcoming_events' => Event::whereIn('library_id', $myLibraryIds)->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })->count(),
            'total_books' => Book::whereIn('library_id', $myLibraryIds)->count(),
            'digital_books' => Book::whereIn('library_id', $myLibraryIds)->where('type', 'digital')->count(),
        ];

        $monthlyBookingsList = [];
        $allBookingsInRange = (clone $bookingQuery)->whereBetween('created_at', [$startDate, $endDate])->get();

        if (in_array($range, ['today', 'yesterday'])) {
            $targetDay = $range === 'yesterday' ? Carbon::yesterday() : Carbon::today();
            for ($h = 0; $h <= 22; $h += 2) {
                $slotStart = $targetDay->copy()->setTime($h, 0, 0);
                $slotEnd = $targetDay->copy()->setTime($h + 1, 59, 59);

                $cnt = $allBookingsInRange->filter(function ($b) use ($slotStart, $slotEnd) {
                    $bt = Carbon::parse($b->created_at);
                    return $bt->between($slotStart, $slotEnd);
                })->count();

                $monthlyBookingsList[] = [
                    'date' => $slotStart->format('g A'),
                    'count' => $cnt
                ];
            }
        } elseif (in_array($range, ['this_month', 'last_month', 'monthly', 'month'])) {
            $current = $startDate->copy();
            while ($current->lte($endDate)) {
                $dayStart = $current->copy()->startOfDay();
                $dayEnd = $current->copy()->endOfDay();

                $cnt = $allBookingsInRange->filter(function ($b) use ($dayStart, $dayEnd) {
                    $bt = Carbon::parse($b->created_at);
                    return $bt->between($dayStart, $dayEnd);
                })->count();

                $monthlyBookingsList[] = [
                    'date' => $current->format('j M'),
                    'count' => $cnt
                ];
                $current->addDay();
            }
        } elseif (in_array($range, ['this_year', 'yearly', 'year'])) {
            $startOfYear = Carbon::now()->startOfYear();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $cnt = $allBookingsInRange->filter(function ($b) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($b->created_at);
                    return $bt->between($monthStart, $monthEnd);
                })->count();

                $monthlyBookingsList[] = [
                    'date' => $monthDate->format('M'),
                    'count' => $cnt
                ];
            }
        } elseif ($range === 'custom') {
            $daysDiff = $startDate->diffInDays($endDate);
            if ($daysDiff <= 2) {
                $curr = $startDate->copy();
                while ($curr->lte($endDate)) {
                    $slotStart = $curr->copy();
                    $slotEnd = $curr->copy()->addHours(2)->subSecond();

                    $cnt = $allBookingsInRange->filter(function ($b) use ($slotStart, $slotEnd) {
                        $bt = Carbon::parse($b->created_at);
                        return $bt->between($slotStart, $slotEnd);
                    })->count();

                    $monthlyBookingsList[] = [
                        'date' => $daysDiff <= 1 ? $slotStart->format('g A') : $slotStart->format('M j g A'),
                        'count' => $cnt
                    ];
                    $curr->addHours(2);
                }
            } elseif ($daysDiff <= 60) {
                $curr = $startDate->copy();
                while ($curr->lte($endDate)) {
                    $dayStart = $curr->copy()->startOfDay();
                    $dayEnd = $curr->copy()->endOfDay();

                    $cnt = $allBookingsInRange->filter(function ($b) use ($dayStart, $dayEnd) {
                        $bt = Carbon::parse($b->created_at);
                        return $bt->between($dayStart, $dayEnd);
                    })->count();

                    $monthlyBookingsList[] = [
                        'date' => $curr->format('j M'),
                        'count' => $cnt
                    ];
                    $curr->addDay();
                }
            } else {
                $curr = $startDate->copy()->startOfMonth();
                while ($curr->lte($endDate)) {
                    $mStart = $curr->copy()->startOfMonth();
                    $mEnd = $curr->copy()->endOfMonth();

                    $cnt = $allBookingsInRange->filter(function ($b) use ($mStart, $mEnd) {
                        $bt = Carbon::parse($b->created_at);
                        return $bt->between($mStart, $mEnd);
                    })->count();

                    $monthlyBookingsList[] = [
                        'date' => $curr->format('M Y'),
                        'count' => $cnt
                    ];
                    $curr->addMonth();
                }
            }
        } else {
            // All time / default (Last 12 Months)
            $startOfYear = Carbon::now()->subMonths(11)->startOfMonth();
            for ($m = 0; $m < 12; $m++) {
                $monthDate = $startOfYear->copy()->addMonths($m);
                $monthStart = $monthDate->copy()->startOfMonth();
                $monthEnd = $monthDate->copy()->endOfMonth();

                $cnt = $allBookingsInRange->filter(function ($b) use ($monthStart, $monthEnd) {
                    $bt = Carbon::parse($b->created_at);
                    return $bt->between($monthStart, $monthEnd);
                })->count();

                $monthlyBookingsList[] = [
                    'date' => $monthDate->format('M Y'),
                    'count' => $cnt
                ];
            }
        }

        $monthlyBookings = $monthlyBookingsList;

        // Top libraries by bookings
        $topLibraries = (clone $librariesQuery)->withCount('seatBookings')
            ->orderBy('seat_bookings_count', 'desc')
            ->take(5)
            ->get();

        // Recent activity
        $recentBookings = (clone $bookingQuery)->with(['user', 'library', 'seat'])
            ->latest()
            ->take(10)
            ->get();

        // Gender & Level wise analytics for SuperAdmin
        $bookingsForStats = (clone $bookingQuery)->where('created_at', '>=', $dateFilter)->with(['user', 'seat.seatSubsection', 'seat.seatSection', 'seat.floor'])->get();

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

        foreach ($bookingsForStats as $booking) {
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

        if (request()->expectsJson()) {
            return response()->json([
                'analytics' => $analytics,
                'monthlyBookings' => $monthlyBookings,
                'topLibraries' => $topLibraries,
                'recentBookings' => $recentBookings,
                'genderStats' => $genderStats,
                'levelStats' => $levelStats
            ]);
        }

        return view('admin.analytics', compact('analytics', 'monthlyBookings', 'topLibraries', 'recentBookings'));
    }

    public function reports()
    {
        return view('admin.reports');
    }
}
