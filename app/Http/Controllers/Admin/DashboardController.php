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
        $stats = [
            'total_students' => User::where('user_type', 'student')->count(),
            'active_students' => User::where('user_type', 'student')
                ->where('status', 'approved')->count(),
            'total_libraries' => Library::count(),
            'total_seats' => Seat::count(),
            'active_bookings' => SeatBooking::whereIn('status', ['pending', 'active'])->count(),
            'today_bookings' => SeatBooking::whereDate('created_at', today())->count(),
            'total_revenue' => (float) UserSubscription::sum('amount_paid'),
            'revenue_growth' => $this->calculateRevenueGrowth(),
        ];

        $pendingUsers = User::where('status', 'pending')
            ->where('user_type', 'student')
            ->latest()
            ->take(5)
            ->get();

        $pendingCount = User::where('status', 'pending')->count();

        $recentActivity = collect([]);

        return view('admin.dashboard', compact('stats', 'pendingUsers', 'recentActivity', 'pendingCount'));
    }

    public function stats()
    {
        $stats = [
            'total_students' => User::where('user_type', 'student')->count(),
            'active_students' => User::where('user_type', 'student')
                ->where('status', 'approved')->count(),
            'total_libraries' => Library::count(),
            'total_seats' => Seat::count(),
            'active_bookings' => SeatBooking::whereIn('status', ['pending', 'active'])->count(),
            'today_bookings' => SeatBooking::whereDate('created_at', today())->count(),
            'total_revenue' => (float) UserSubscription::sum('amount_paid'),
            'revenue_growth' => $this->calculateRevenueGrowth(),
        ];

        return response()->json($stats);
    }

    private function calculateRevenueGrowth()
    {
        $currentMonth = UserSubscription::whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('amount_paid');

        $lastMonth = UserSubscription::whereMonth('created_at', now()->subMonth()->month)
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
