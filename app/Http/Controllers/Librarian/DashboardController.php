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
        \App\Models\SeatBooking::cancelExpiredBookings();
        $library = Auth::user()->library;

        if (!$library) {
            if (request()->expectsJson() || request()->is('api/*')) {
                return response()->json(['error' => 'No library assigned to you'], 403);
            }
            return redirect()->back()->with('error', 'No library assigned to you');
        }

        $todayStr = \Carbon\Carbon::today()->toDateString();
        $pendingOverrides = \App\Models\OverrideRequest::whereDate('created_at', $todayStr)
            ->where('status', 'pending')
            ->whereHas('seat.floor', function($q) use ($library) {
                $q->where('library_id', $library->id);
            })->count();

        $overstayCount = $library->seats()->whereIn('status', ['overstay', 'serious_overstay'])->count();

        $stats = [
            'total_seats' => $library->seats()->count(),
            'available_seats' => $library->seats()->where('status', 'available')->count(),
            'active_bookings' => $library->seatBookings()->where('status', 'checked_in')->count(),
            'pending_bookings' => $library->seatBookings()->where('status', 'booked')->count(),
            'today_bookings' => $library->seatBookings()->whereDate('booking_time', today())->where('status', '!=', 'cancelled')->count(),
            'overdue_bookings' => $library->seatBookings()
                ->where('status', 'booked')
                ->where('booking_time', '<', now()->subMinutes(30))
                ->count(),
            'overstay_count' => $overstayCount,
            'pending_overrides' => $pendingOverrides,
            'total_books' => $library->books()->count(),
            'digital_books' => $library->books()->where('type', 'digital')->count(),
            'total_events' => $library->events()->count(),
            'upcoming_events' => $library->events()
                ->where(function ($q) {
                    $q->where('date', '>', now()->toDateString())
                      ->orWhere(function ($q2) {
                          $q2->where('date', '=', now()->toDateString())
                             ->where('start_time', '>', now()->toTimeString());
                      });
                })->count(),
            'maintenance_seats' => $library->seats()->where('is_maintenance', true)->count(),
            'pending_tickets' => \App\Models\SupportTicket::where('library_id', $library->id)
                ->where('ticket_type', 'library')
                ->whereIn('status', ['open', 'in_progress'])
                ->count(),
        ];

        $recentBookings = $library->seatBookings()
            ->with(['user', 'seat.floor'])
            ->latest()
            ->take(6)
            ->get();

        $upcomingEvents = $library->events()
            ->withCount('registrations')
            ->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>', now()->toTimeString());
                  });
            })
            ->orderBy('date')
            ->orderBy('start_time')
            ->take(5)
            ->get();

        // Return JSON for API requests
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'library' => [
                    'id' => $library->id,
                    'name' => $library->name,
                    'address' => $library->address,
                    'capacity' => $library->capacity,
                ],
                'stats' => $stats,
                'recentBookings' => $recentBookings->map(function($booking) {
                    return [
                        'id' => $booking->id,
                        'user' => $booking->user ? [
                            'id' => $booking->user->id,
                            'name' => $booking->user->name,
                            'email' => $booking->user->email,
                            'profile_picture' => $booking->user->profile_picture,
                        ] : null,
                        'seat' => $booking->seat ? [
                            'id' => $booking->seat->id,
                            'seat_number' => $booking->seat->seat_number,
                            'floor' => $booking->seat->floor ? [
                                'id' => $booking->seat->floor->id,
                                'name' => $booking->seat->floor->name,
                            ] : null,
                        ] : null,
                        'booking_time' => $booking->booking_time,
                        'status' => $booking->status,
                        'scheduled_end_time' => $booking->scheduled_end_time,
                    ];
                }),
                'upcomingEvents' => $upcomingEvents->map(function($event) {
                    return [
                        'id' => $event->id,
                        'title' => $event->title,
                        'description' => $event->description,
                        'start_time' => $event->date->format('Y-m-d') . ' ' . $event->start_time, // ISO-like format for JS
                        'location' => $event->venue,
                        'date' => $event->date,
                        'joined_count' => $event->registrations_count,
                    ];
                }),
            ]);
        }

        return view('librarian.dashboard', compact('stats', 'recentBookings', 'upcomingEvents', 'library'));
    }
}
