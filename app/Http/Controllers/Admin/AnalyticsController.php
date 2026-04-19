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
        if ($isSuperAdmin) {
            $usersQuery->where(function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $librariesQuery = Library::query();
        if ($isSuperAdmin) {
            $librariesQuery->where('created_by', $myId);
        }

        $bookingQuery = SeatBooking::query();
        if ($isSuperAdmin) {
            $bookingQuery->whereIn('library_id', $myLibraryIds);
        }

        $subscriptionQuery = UserSubscription::query();
        if ($isSuperAdmin) {
            $subscriptionQuery->whereHas('user', function($q) use ($myId, $myLibraryIds) {
                $q->where('created_by', $myId)->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $analytics = [
            'total_users' => (clone $usersQuery)->count(),
            'total_students' => (clone $usersQuery)->where('role', 'student')->count(),
            'total_librarians' => (clone $usersQuery)->where('role', 'librarian')->count(),
            'total_libraries' => (clone $librariesQuery)->count(),
            'total_bookings' => (clone $bookingQuery)->count(),
            'active_bookings' => (clone $bookingQuery)->whereIn('status', ['booked', 'active', 'checked_in'])->count(),
            'completed_bookings' => (clone $bookingQuery)->where('status', 'checked_out')->count(),
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

        // Monthly booking stats
        $monthlyBookings = (clone $bookingQuery)->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->where('created_at', '>=', now()->subDays(30))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

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
