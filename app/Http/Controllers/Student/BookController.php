<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\BookReservation;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $query = Book::with('library');

        // Filter by type
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        // Filter by category
        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        // Search
        if ($request->has('search')) {
            $query->where(function($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('author', 'like', '%' . $request->search . '%')
                  ->orWhere('isbn', 'like', '%' . $request->search . '%');
            });
        }

        $books = $query->orderBy('title')->get();

        $data = $books->map(function ($book) {
            return [
                'id' => $book->id,
                'title' => $book->title,
                'author' => $book->author,
                'isbn' => $book->isbn,
                'description' => $book->description,
                'cover' => $book->cover,
                'cover_url' => $book->cover_url,
                'type' => $book->type,
                'category' => $book->category,
                'availability' => $book->availability,
                'borrowing_period' => $book->borrowing_period,
                'digital_access' => $book->digital_access,
                'library' => $book->library ? [
                    'id' => $book->library->id,
                    'name' => $book->library->name,
                ] : null,
            ];
        });

        return response()->json($data);
    }

    public function show($id)
    {
        $book = Book::with('library')->findOrFail($id);
        
        $data = [
            'id' => $book->id,
            'title' => $book->title,
            'author' => $book->author,
            'isbn' => $book->isbn,
            'description' => $book->description,
            'cover' => $book->cover,
            'cover_url' => $book->cover_url,
            'type' => $book->type,
            'category' => $book->category,
            'availability' => $book->availability,
            'borrowing_period' => $book->borrowing_period,
            'digital_access' => $book->digital_access,
            'library' => $book->library ? [
                'id' => $book->library->id,
                'name' => $book->library->name,
            ] : null,
        ];

        return response()->json($data);
    }

    public function reserve(Request $request, $id)
    {
        $user = $request->user();
        $book = Book::with('library')->findOrFail($id);

        // Location-based reservation restriction
        $library = $book->library;
        if ($request->latitude && $request->longitude && $library && $library->latitude && $library->longitude) {
            $distance = $this->calculateDistance(
                $request->latitude, $request->longitude,
                $library->latitude, $library->longitude
            );
            if ($distance > 50000) { // 50 km in meters
                return response()->json([
                    'message' => 'You can only reserve books at libraries near your current location. This library is too far away.'
                ], 403);
            }
        }

        if ($book->availability !== 'available') {
            return response()->json(['message' => 'Book is not available'], 400);
        }

        // Load active subscription with plan details
        $activeSubscription = $user->activeSubscription()->with('subscriptionPlan')->first();

        if (!$activeSubscription) {
            return response()->json(['message' => 'You need an active subscription to reserve books'], 400);
        }

        $plan = $activeSubscription->subscriptionPlan;

        if (!$plan) {
            return response()->json(['message' => 'Invalid subscription plan'], 400);
        }

        // Get the book reservation limit (default to unlimited if null or 0)
        $bookLimit = $plan->book_reservations_limit ?? -1;
        
        // If limit is 0, treat as no limit allowed (shouldn't happen, but handle it)
        if ($bookLimit === 0) {
            $bookLimit = -1;
        }

        // Check book reservation limit (skip if -1 which means unlimited)
        if ($bookLimit !== -1) {
            // Count active book reservations for this user
            $activeReservations = BookReservation::where('user_id', $user->id)
                ->whereIn('status', ['pending', 'approved', 'collected', 'pending_return', 'overdue'])
                ->count();

            if ($activeReservations >= $bookLimit) {
                return response()->json([
                    'message' => "You have reached your book reservation limit ({$bookLimit}). Please return existing reservations first.",
                    'limit' => $bookLimit,
                    'current' => $activeReservations
                ], 400);
            }
        }

        // Check books access limit (total reservations in the current subscription period)
        $booksAccessLimit = $plan->books_access_limit ?? -1;
        if ($booksAccessLimit === 0) {
            $booksAccessLimit = -1;
        }

        if ($booksAccessLimit !== -1) {
            $totalPeriodReservations = BookReservation::where('user_id', $user->id)
                ->where('created_at', '>=', $activeSubscription->started_at)
                ->whereIn('status', ['pending', 'approved', 'collected', 'pending_return', 'returned', 'overdue'])
                ->count();

            if ($totalPeriodReservations >= $booksAccessLimit) {
                return response()->json([
                    'message' => "You have reached your total books access limit for this subscription period ({$booksAccessLimit}).",
                    'limit' => $booksAccessLimit,
                    'current' => $totalPeriodReservations
                ], 400);
            }
        }

        $maxDays = $book->borrowing_period ?: 14;
        $request->validate([
            'days' => 'nullable|integer|min:1|max:' . $maxDays,
        ]);
        $days = $request->input('days', $maxDays);

        $reservation = BookReservation::create([
            'user_id' => $user->id,
            'book_id' => $book->id,
            'due_date' => now()->addDays($days),
            'status' => 'pending',
        ]);

        $book->update(['availability' => 'reserved']);

        return response()->json([
            'message' => 'Book reservation request submitted successfully. Awaiting librarian approval.',
            'reservation' => $reservation,
            'due_date' => $reservation->due_date->format('Y-m-d H:i:s')
        ], 201);
    }

    /**
     * Get current user's book reservations
     */
    public function getMyReservations(Request $request)
    {
        $user = $request->user();

        $reservations = BookReservation::with(['book', 'book.library'])
            ->where('user_id', $user->id)
            ->whereIn('status', ['pending', 'approved', 'rejected', 'collected', 'pending_return', 'returned', 'overdue'])
            ->orderBy('created_at', 'desc')
            ->get();

        // Update overdue status
        foreach ($reservations as $reservation) {
            if ($reservation->isOverdue()) {
                $reservation->update(['status' => 'overdue']);
            }
        }

        return response()->json($reservations);
    }

    /**
     * Confirm book pickup
     */
    public function pickUpBook(Request $request, $id)
    {
        $user = $request->user();
        
        $reservation = BookReservation::where('id', $id)
            ->where('user_id', $user->id)
            ->where('status', 'approved')
            ->firstOrFail();

        // Update status to collected
        $reservation->update([
            'status' => 'collected'
        ]);

        return response()->json([
            'message' => 'Book picked up successfully. Happy reading!',
            'reservation' => $reservation
        ]);
    }

    /**
     * Request to return a book
     */
    public function returnBook(Request $request, $id)
    {
        $user = $request->user();
        
        $reservation = BookReservation::where('id', $id)
            ->where('user_id', $user->id)
            ->whereIn('status', ['collected', 'overdue'])
            ->firstOrFail();

        // Update status to pending_return
        $reservation->update([
            'status' => 'pending_return'
        ]);

        return response()->json([
            'message' => 'Return request submitted successfully. Please wait for librarian approval.',
            'reservation' => $reservation
        ]);
    }

    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $earthRadius = 6371000; // meters

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($dLon / 2) * sin($dLon / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }
}
