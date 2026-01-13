<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\BookReservation;
use Illuminate\Http\Request;

class BookReservationController extends Controller
{
    /**
     * Get all book reservations for the librarian's library
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        // Get all reservations with user and book details
        $query = BookReservation::with(['user', 'book', 'book.library'])
            ->whereHas('book', function($q) use ($user) {
                // If librarian has a specific library, filter by it
                if ($user->library_id) {
                    $q->where('library_id', $user->library_id);
                }
            });

        // Filter by status if provided
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $reservations = $query->orderBy('created_at', 'desc')->get();

        // Update overdue status
        foreach ($reservations as $reservation) {
            if ($reservation->isOverdue() && $reservation->status === 'reserved') {
                $reservation->update(['status' => 'overdue']);
            }
        }

        return response()->json($reservations);
    }

    /**
     * Approve a book return request
     */
    public function approveReturn(Request $request, $id)
    {
        $reservation = BookReservation::with('book')->findOrFail($id);

        if ($reservation->status !== 'pending_return') {
            return response()->json([
                'message' => 'This reservation is not pending return approval'
            ], 400);
        }

        // Update reservation status
        $reservation->update([
            'status' => 'returned',
            'returned_at' => now()
        ]);

        // Update book availability
        $reservation->book->update([
            'availability' => 'available'
        ]);

        return response()->json([
            'message' => 'Book return approved successfully',
            'reservation' => $reservation
        ]);
    }
}
