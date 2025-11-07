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
        $query = Book::query();

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

        return response()->json($books);
    }

    public function show($id)
    {
        $book = Book::with('library')->findOrFail($id);
        return response()->json($book);
    }

    public function reserve(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        if ($book->availability !== 'available') {
            return response()->json(['message' => 'Book is not available'], 400);
        }

        $reservation = BookReservation::create([
            'user_id' => $request->user()->id,
            'book_id' => $book->id,
            'reservation_date' => now(),
            'pickup_deadline' => now()->addDays(7),
            'status' => 'pending',
        ]);

        $book->update(['availability' => 'reserved']);

        return response()->json($reservation, 201);
    }
}
