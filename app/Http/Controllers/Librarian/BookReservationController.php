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
        $query = BookReservation::with(['user', 'book', 'book.library.users'])
            ->whereHas('book', function($q) use ($user, $request) {
                // If librarian has a specific library, filter by it
                if ($user->library_id) {
                    $q->where('library_id', $user->library_id);
                } elseif ($request->has('library_id') && $request->library_id !== 'all') {
                    $q->where('library_id', $request->library_id);
                }
            });

        if ($request->has('search') && !empty($request->search)) {
            $search = strtolower(trim($request->search));
            $query->where(function($q) use ($search) {
                $q->whereHas('book', function($qb) use ($search) {
                    $qb->whereRaw('LOWER(title) LIKE ?', ["%{$search}%"])
                       ->orWhereRaw('LOWER(isbn) LIKE ?', ["%{$search}%"]);
                })->orWhereHas('user', function($qu) use ($search) {
                    $qu->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"])
                       ->orWhereRaw('LOWER(crn) LIKE ?', ["%{$search}%"]);
                });
            });
        }

        // Filter by date range if provided
        if ($request->has('from_date') && $request->from_date) {
            $query->whereDate('created_at', '>=', $request->from_date);
        }
        if ($request->has('to_date') && $request->to_date) {
            $query->whereDate('created_at', '<=', $request->to_date);
        }

        // Filter by status if provided
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $perPage = (int) $request->get('per_page', 20);
        $paginated = $query->orderBy('created_at', 'desc')->paginate($perPage);

        // Update overdue status for current page items
        foreach ($paginated->getCollection() as $reservation) {
            if ($reservation->isOverdue() && $reservation->status === 'collected') {
                $reservation->update(['status' => 'overdue']);
            }
        }

        return response()->json($paginated);
    }

    /**
     * Approve a book reservation request
     */
    public function approveReservation(Request $request, $id)
    {
        $reservation = BookReservation::with(['book', 'user'])->findOrFail($id);

        if ($reservation->status !== 'pending') {
            return response()->json([
                'message' => 'This reservation is not pending approval'
            ], 400);
        }

        // Update reservation status
        $reservation->update([
            'status' => 'approved'
        ]);

        // Send notification to student
        \App\Models\Notification::send(
            $reservation->user_id,
            'reservation',
            'Book Reservation Approved!',
            "Your reservation request for \"{$reservation->book->title}\" has been approved. You can now visit the library to pick it up.",
            $reservation
        );

        return response()->json([
            'message' => 'Book reservation request approved successfully',
            'reservation' => $reservation
        ]);
    }

    /**
     * Reject a book reservation request
     */
    public function rejectReservation(Request $request, $id)
    {
        $reservation = BookReservation::with(['book', 'user'])->findOrFail($id);

        if ($reservation->status !== 'pending') {
            return response()->json([
                'message' => 'This reservation is not pending approval'
            ], 400);
        }

        // Update reservation status
        $reservation->update([
            'status' => 'rejected'
        ]);

        // Revert book availability
        $reservation->book->update([
            'availability' => 'available'
        ]);

        // Send notification to student
        \App\Models\Notification::send(
            $reservation->user_id,
            'reservation',
            'Book Reservation Rejected',
            "Your reservation request for \"{$reservation->book->title}\" was rejected.",
            $reservation
        );

        return response()->json([
            'message' => 'Book reservation request rejected successfully',
            'reservation' => $reservation
        ]);
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

    /**
     * Send return notification reminder to student
     */
    public function notifyStudent(Request $request, $id)
    {
        $reservation = BookReservation::with(['book', 'user'])->findOrFail($id);

        $dueDateStr = $reservation->due_date ? \Carbon\Carbon::parse($reservation->due_date)->format('M d, Y') : 'N/A';
        
        $isOverdue = $reservation->isOverdue() || $reservation->status === 'overdue' || ($reservation->due_date && \Carbon\Carbon::parse($reservation->due_date)->isPast() && $reservation->status !== 'returned');
        $title = $isOverdue ? "URGENT: Overdue Book Return Notification" : "Book Return Reminder Notification";
        $message = $isOverdue 
            ? "OVERDUE ALERT: Your borrowed book \"{$reservation->book->title}\" was due on {$dueDateStr}. Please return it to the library immediately!"
            : "Reminder: Please return your borrowed book \"{$reservation->book->title}\" to the library by {$dueDateStr}.";

        \App\Models\Notification::send(
            $reservation->user_id,
            'book_reminder',
            $title,
            $message,
            $reservation
        );

        return response()->json([
            'message' => "Notification sent to {$reservation->user->name} successfully",
            'reservation' => $reservation
        ]);
    }
}
