<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Seat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $library = $user->library;

        $query = SeatBooking::with(['user', 'seat.floor']);

        if ($user->role === 'super_admin') {
            if ($request->has('library_id')) {
                $query->where('library_id', $request->library_id);
            }
        } else {
            if (!$library) {
                return response()->json(['message' => 'No library assigned to this librarian'], 404);
            }
            $query->where('library_id', $library->id);
        }

        // Filter by status if provided
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Search by student name or ID
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('crn', 'like', "%{$search}%");
            });
        }

        $bookings = $query->latest()->paginate(15);

        $bookings->getCollection()->transform(function ($booking) {
            return [
                'id' => $booking->id,
                'user' => $booking->user ? [
                    'id' => $booking->user->id,
                    'name' => $booking->user->name,
                    'email' => $booking->user->email,
                    'crn' => $booking->user->crn,
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
                'check_in_time' => $booking->check_in_time,
                'check_out_time' => $booking->check_out_time,
                'scheduled_end_time' => $booking->scheduled_end_time,
                'status' => $booking->status,
            ];
        });

        return response()->json($bookings);
    }

    public function stats(Request $request)
    {
        $user = Auth::user();
        $library = $user->library;

        $libraryId = $request->library_id ?? ($library ? $library->id : null);

        if (!$libraryId && $user->role !== 'super_admin') {
            return response()->json(['message' => 'No library assigned to this librarian'], 404);
        }

        $baseQuery = SeatBooking::query();
        if ($libraryId) {
            $baseQuery->where('library_id', $libraryId);
        }

        $stats = [
            'all' => (clone $baseQuery)->count(),
            'active' => (clone $baseQuery)->where('status', 'checked_in')->count(),
            'pending' => (clone $baseQuery)->where('status', 'booked')->count(),
            'completed' => (clone $baseQuery)->where('status', 'checked_out')->count(),
            'cancelled' => (clone $baseQuery)->where('status', 'cancelled')->count(),
        ];

        return response()->json($stats);
    }

    public function checkIn($id)
    {
        $booking = SeatBooking::findOrFail($id);
        
        if ($booking->status !== 'booked') {
            return response()->json(['message' => 'Booking is not in a state that can be checked in'], 400);
        }

        $booking->update([
            'status' => 'checked_in',
            'check_in_time' => now(),
        ]);

        // Update seat status
        $booking->seat->update(['status' => 'occupied']);

        return response()->json([
            'message' => 'Checked in successfully',
            'booking' => [
                'id' => $booking->id,
                'status' => $booking->status,
                'check_in_time' => $booking->check_in_time,
            ]
        ]);
    }

    public function checkOut($id)
    {
        $booking = SeatBooking::findOrFail($id);
        
        if ($booking->status !== 'checked_in') {
            return response()->json(['message' => 'Booking is not checked in'], 400);
        }

        $booking->update([
            'status' => 'checked_out',
            'check_out_time' => now(),
        ]);

        // Update seat status
        $booking->seat->update(['status' => 'available']);

        // Calculate total minutes
        if ($booking->check_in_time) {
            $booking->total_minutes = now()->diffInMinutes($booking->check_in_time);
            $booking->save();
        }

        return response()->json([
            'message' => 'Checked out successfully',
            'booking' => [
                'id' => $booking->id,
                'status' => $booking->status,
                'check_out_time' => $booking->check_out_time,
                'total_minutes' => $booking->total_minutes,
            ]
        ]);
    }

    public function cancel($id)
    {
        $booking = SeatBooking::findOrFail($id);
        
        if (!in_array($booking->status, ['booked', 'active'])) {
            return response()->json(['message' => 'Booking cannot be cancelled'], 400);
        }

        $booking->update(['status' => 'cancelled']);
        $booking->seat->update(['status' => 'available']);

        return response()->json(['message' => 'Booking cancelled successfully']);
    }
}
