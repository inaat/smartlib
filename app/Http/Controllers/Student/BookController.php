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
        $book = Book::findOrFail($id);

        if ($book->availability !== 'available') {
            return response()->json(['message' => 'Book is not available'], 400);
        }

        // Load active subscription with plan details
        $activeSubscription = $user->activeSubscription()->with('subscriptionPlan')->first();

        if (!$activeSubscription) {
            return response()->json(['message' => 'You need an active subscription to reserve books'], 400);
        }

        $plan = $activeSubscription->subscriptionPlan;

        // Check book reservation limit
        if ($plan->book_reservations_limit !== -1) {
            // Count active book reservations for this user
            $activeReservations = BookReservation::where('user_id', $user->id)
                ->whereIn('status', ['pending', 'approved', 'borrowed'])
                ->count();

            if ($activeReservations >= $plan->book_reservations_limit) {
                return response()->json([
                    'message' => "You have reached your book reservation limit ({$plan->book_reservations_limit}). Please return or cancel existing reservations first.",
                    'limit' => $plan->book_reservations_limit,
                    'current' => $activeReservations
                ], 400);
            }
        }

        $reservation = BookReservation::create([
            'user_id' => $user->id,
            'book_id' => $book->id,
            'reservation_date' => now(),
            'pickup_deadline' => now()->addDays(7),
            'status' => 'pending',
        ]);

        $book->update(['availability' => 'reserved']);

        return response()->json($reservation, 201);
    }
}
