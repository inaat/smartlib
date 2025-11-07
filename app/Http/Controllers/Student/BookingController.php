<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Seat;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $bookings = SeatBooking::with(['seat.library', 'user'])
            ->where('user_id', $request->user()->id)
            ->orderBy('date', 'desc')
            ->get();

        return response()->json($bookings);
    }

    public function store(Request $request)
    {
        $request->validate([
            'seat_id' => 'required|exists:seats,id',
            'date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);

        $seat = Seat::findOrFail($request->seat_id);

        // Check if seat is available
        if ($seat->status !== 'available') {
            return response()->json(['message' => 'Seat is not available'], 400);
        }

        // Check for overlapping bookings
        $existingBooking = SeatBooking::where('seat_id', $seat->id)
            ->where('date', $request->date)
            ->where('status', '!=', 'cancelled')
            ->where(function($query) use ($request) {
                $query->whereBetween('start_time', [$request->start_time, $request->end_time])
                      ->orWhereBetween('end_time', [$request->start_time, $request->end_time]);
            })
            ->first();

        if ($existingBooking) {
            return response()->json(['message' => 'Seat is already booked for this time'], 400);
        }

        $booking = SeatBooking::create([
            'user_id' => $request->user()->id,
            'seat_id' => $seat->id,
            'library_id' => $seat->library_id,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'status' => 'upcoming',
        ]);

        // Update seat status
        $seat->update(['status' => 'booked']);

        return response()->json($booking->load('seat.library'), 201);
    }

    public function checkIn(Request $request, $id)
    {
        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $booking->update([
            'status' => 'active',
            'checked_in_at' => now(),
        ]);

        $booking->seat->update(['status' => 'occupied']);

        return response()->json(['success' => true, 'booking' => $booking]);
    }

    public function checkOut(Request $request, $id)
    {
        $booking = SeatBooking::findOrFail($id);

        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $booking->update([
            'status' => 'completed',
            'checked_out_at' => now(),
        ]);

        $booking->seat->update(['status' => 'available']);

        // Award loyalty points
        $request->user()->addLoyaltyPoints(10, 'booking_completed', 'Completed seat booking', $booking);

        return response()->json(['success' => true, 'booking' => $booking]);
    }
}
