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
        $analytics = [
            'total_users' => User::count(),
            'total_students' => User::where('role', 'student')->count(),
            'total_librarians' => User::where('role', 'librarian')->count(),
            'total_libraries' => Library::count(),
            'total_bookings' => SeatBooking::count(),
            'active_bookings' => SeatBooking::whereIn('status', ['pending', 'active'])->count(),
            'completed_bookings' => SeatBooking::where('status', 'completed')->count(),
            'total_revenue' => (float) UserSubscription::sum('amount_paid'),
            'monthly_revenue' => (float) UserSubscription::whereMonth('created_at', now()->month)->sum('amount_paid'),
            'total_events' => Event::count(),
            'upcoming_events' => Event::where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })->count(),
            'total_books' => Book::count(),
            'digital_books' => Book::where('type', 'digital')->count(),
        ];

        // Monthly booking stats
        $monthlyBookings = SeatBooking::selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->where('created_at', '>=', now()->subDays(30))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Top libraries by bookings
        $topLibraries = Library::withCount('seatBookings')
            ->orderBy('seat_bookings_count', 'desc')
            ->take(5)
            ->get();

        // Recent activity
        $recentBookings = SeatBooking::with(['user', 'library', 'seat'])
            ->latest()
            ->take(10)
            ->get();

        if (request()->expectsJson()) {
            return response()->json([
                'analytics' => $analytics,
                'monthlyBookings' => $monthlyBookings,
                'topLibraries' => $topLibraries,
                'recentBookings' => $recentBookings
            ]);
        }

        return view('admin.analytics', compact('analytics', 'monthlyBookings', 'topLibraries', 'recentBookings'));
    }

    public function reports()
    {
        return view('admin.reports');
    }
}
