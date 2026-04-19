<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Library;
use App\Models\SeatBooking;
use App\Models\UserSubscription;
use App\Models\Seat;

class DashboardController extends Controller
{
    public function index()
    {
        $range = request('range', 'today');
        $dateRange = $this->getDateRange($range);

        $isSuperAdmin = auth()->user()->role === 'super_admin';
        $myId = auth()->id();
        $myLibraryIds = Library::where('created_by', $myId)->pluck('id');

        $studentsQuery = User::where('role', 'student');
        if ($isSuperAdmin) {
            $studentsQuery->where(function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $librariesQuery = Library::query();
        if ($isSuperAdmin) {
            $librariesQuery->where('created_by', $myId);
        }

        $subscriptionQuery = UserSubscription::query();
        if ($isSuperAdmin) {
            $subscriptionQuery->whereHas('user', function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $bookingQuery = SeatBooking::query();
        if ($isSuperAdmin) {
            $bookingQuery->whereIn('library_id', $myLibraryIds);
        }

        $stats = [
            'total_students' => (clone $studentsQuery)->count(),
            'active_students' => (clone $studentsQuery)->where('is_active', true)->count(),
            'total_libraries' => (clone $librariesQuery)->count(),
            'active_libraries' => (clone $librariesQuery)->where('is_active', true)->count(),
            'total_seats' => Seat::whereHas('floor', function($q) use ($myLibraryIds) { $q->whereIn('library_id', $myLibraryIds); })->count(),
            'active_bookings' => (clone $bookingQuery)->whereIn('status', ['booked', 'active', 'checked_in'])
                ->whereBetween('created_at', $dateRange)
                ->count(),
            'today_bookings' => (clone $bookingQuery)->whereDate('created_at', today())->count(),
            'total_revenue' => (float) (clone $subscriptionQuery)->whereBetween('created_at', $dateRange)->sum('amount_paid'),
            'revenue_growth' => $this->calculateRevenueGrowth($subscriptionQuery),
        ];

        $pendingUsers = User::where('is_active', false)
            ->where('role', 'student');
        if ($isSuperAdmin) {
            $pendingUsers->where(function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }
        $pendingUsers = $pendingUsers->latest()->take(5)->get();

        $pendingCount = User::where('is_active', false);
        if ($isSuperAdmin) {
            $pendingCount->where(function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }
        $pendingCount = $pendingCount->count();

        $recentActivity = collect();

        // Recent Bookings
        $recentBookings = (clone $bookingQuery)->with(['user', 'seat.seatSection.library'])
            ->whereBetween('created_at', $dateRange)
            ->latest()
            ->take(5)
            ->get()
            ->map(function($booking) {
                $libraryName = $booking->seat?->seatSection?->library?->name ?? 'Library';
                return [
                    'id' => 'booking_' . $booking->id,
                    'title' => ($booking->user->name ?? 'User') . ' booked a seat in ' . $libraryName,
                    'time' => $booking->created_at->diffForHumans(),
                    'icon' => 'BookOpen',
                    'bg' => 'bg-blue-50',
                    'iconColor' => 'text-blue-600',
                    'status' => ucfirst(str_replace('_', ' ', $booking->status)),
                    'statusClass' => in_array($booking->status, ['active', 'checked_in', 'booked']) ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                ];
            });

        // Recent Registrations
        $recentUsers = (clone $studentsQuery)
            ->whereBetween('created_at', $dateRange)
            ->latest()
            ->take(5)
            ->get()
            ->map(function($user) {
                return [
                    'id' => 'user_' . $user->id,
                    'title' => 'New student registered: ' . $user->name,
                    'time' => $user->created_at->diffForHumans(),
                    'icon' => 'UserPlus',
                    'bg' => 'bg-indigo-50',
                    'iconColor' => 'text-indigo-600',
                    'status' => ucfirst($user->status ?? ($user->is_active ? 'active' : 'pending')),
                    'statusClass' => ($user->status === 'approved' || $user->is_active) ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                ];
            });

        $recentActivity = $recentBookings->concat($recentUsers)->sortByDesc('time')->take(10)->values();

        if (request()->expectsJson()) {
            return response()->json([
                'stats' => $stats,
                'pendingUsers' => $pendingUsers,
                'pendingCount' => $pendingCount,
                'recentActivity' => $recentActivity
            ]);
        }

        return view('admin.dashboard', compact('stats', 'pendingUsers', 'recentActivity', 'pendingCount'));
    }

    private function getDateRange($range)
    {
        $now = now();
        switch ($range) {
            case 'today':
                return [$now->copy()->startOfDay(), $now->copy()->endOfDay()];
            case 'this_week':
                return [$now->copy()->startOfWeek(), $now->copy()->endOfWeek()];
            case 'this_month':
                return [$now->copy()->startOfMonth(), $now->copy()->endOfMonth()];
            case 'last_month':
                $lastMonth = now()->subMonth();
                return [$lastMonth->copy()->startOfMonth(), $lastMonth->copy()->endOfMonth()];
            case 'last_30_days':
                return [now()->subDays(30), now()];
            case 'this_year':
                return [$now->copy()->startOfYear(), $now->copy()->endOfYear()];
            default:
                return [$now->copy()->startOfDay(), $now->copy()->endOfDay()];
        }
    }

    public function stats()
    {
        $range = request('range', 'today');
        $dateRange = $this->getDateRange($range);

        $isSuperAdmin = auth()->user()->role === 'super_admin';
        $myId = auth()->id();
        $myLibraryIds = Library::where('created_by', $myId)->pluck('id');

        $studentsQuery = User::where('role', 'student');
        if ($isSuperAdmin) {
            $studentsQuery->where(function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $librariesQuery = Library::query();
        if ($isSuperAdmin) {
            $librariesQuery->where('created_by', $myId);
        }

        $subscriptionQuery = UserSubscription::query();
        if ($isSuperAdmin) {
            $subscriptionQuery->whereHas('user', function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $bookingQuery = SeatBooking::query();
        if ($isSuperAdmin) {
            $bookingQuery->whereIn('library_id', $myLibraryIds);
        }

        $stats = [
            'total_students' => (clone $studentsQuery)->count(),
            'active_students' => (clone $studentsQuery)->where('is_active', true)->count(),
            'total_libraries' => (clone $librariesQuery)->count(),
            'active_libraries' => (clone $librariesQuery)->where('is_active', true)->count(),
            'total_seats' => Seat::whereHas('floor', function($q) use ($myLibraryIds) { $q->whereIn('library_id', $myLibraryIds); })->count(),
            'active_bookings' => (clone $bookingQuery)->whereIn('status', ['booked', 'active', 'checked_in'])
                ->whereBetween('created_at', $dateRange)
                ->count(),
            'today_bookings' => (clone $bookingQuery)->whereDate('created_at', today())->count(),
            'total_revenue' => (float) (clone $subscriptionQuery)->whereBetween('created_at', $dateRange)->sum('amount_paid'),
            'revenue_growth' => $this->calculateRevenueGrowth($subscriptionQuery),
        ];

        return response()->json($stats);
    }

    private function calculateRevenueGrowth($query = null)
    {
        $baseQuery = $query ? clone $query : UserSubscription::query();

        $currentMonth = (clone $baseQuery)->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('amount_paid');

        $lastMonth = (clone $baseQuery)->whereMonth('created_at', now()->subMonth()->month)
            ->whereYear('created_at', now()->subMonth()->year)
            ->sum('amount_paid');

        // If both months are 0, no growth
        if ($lastMonth == 0 && $currentMonth == 0) {
            return 0;
        }

        // If last month was 0 but current month has revenue, show 100% growth
        if ($lastMonth == 0 && $currentMonth > 0) {
            return 100;
        }

        // Normal calculation
        return round((($currentMonth - $lastMonth) / $lastMonth) * 100, 1);
    }
}
