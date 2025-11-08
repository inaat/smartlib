<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Book;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $library = Auth::user()->library;

        if (!$library) {
            if (request()->expectsJson() || request()->is('api/*')) {
                return response()->json(['error' => 'No library assigned to you'], 403);
            }
            return redirect()->back()->with('error', 'No library assigned to you');
        }

        $stats = [
            'total_seats' => $library->seats()->count(),
            'available_seats' => $library->seats()->where('status', 'available')->count(),
            'active_bookings' => $library->seatBookings()->whereIn('status', ['pending', 'active'])->count(),
            'today_bookings' => $library->seatBookings()->whereDate('created_at', today())->count(),
            'total_books' => $library->books()->count(),
            'digital_books' => $library->books()->where('type', 'digital')->count(),
            'total_events' => $library->events()->count(),
            'upcoming_events' => $library->events()->where('start_time', '>', now())->count(),
        ];

        $recentBookings = $library->seatBookings()
            ->with(['user', 'seat'])
            ->latest()
            ->take(10)
            ->get();

        $upcomingEvents = $library->events()
            ->where('start_time', '>', now())
            ->orderBy('start_time')
            ->take(5)
            ->get();

        // Return JSON for API requests
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'library' => $library,
                'stats' => $stats,
                'recentBookings' => $recentBookings,
                'upcomingEvents' => $upcomingEvents,
            ]);
        }

        return view('librarian.dashboard', compact('stats', 'recentBookings', 'upcomingEvents', 'library'));
    }
}
