<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    public function index()
    {
        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            // For API, return all books (admins see all, librarians see their library's books)
            $user = Auth::user();
            if ($user->user_type === 'super_admin') {
                $books = Book::latest()->get();
            } elseif ($user->library_id) {
                $books = Book::where('library_id', $user->library_id)->latest()->get();
            } else {
                $books = Book::latest()->get();
            }
            return response()->json($books);
        }

        $library = Auth::user()->library;
        $books = $library->books()->latest()->paginate(20);

        return view('librarian.books.index', compact('books', 'library'));
    }

    public function create()
    {
        $library = Auth::user()->library;
        return view('librarian.books.create', compact('library'));
    }

    public function store(Request $request)
    {
        $library = Auth::user()->library;

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|unique:books',
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|max:5120',
            'type' => 'required|in:physical,digital',
            'file_path' => 'required_if:type,digital|file|mimes:pdf|max:51200',
            'is_free' => 'required|boolean',
            'price' => 'required_if:is_free,0|nullable|numeric|min:0',
            'total_copies' => 'required_if:type,physical|nullable|integer|min:1',
            'category' => 'nullable|string',
        ]);

        $validated['library_id'] = $library->id;
        $validated['available_copies'] = $validated['total_copies'] ?? 0;

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')->store('books/covers', 'public');
        }

        if ($request->hasFile('file_path') && $validated['type'] === 'digital') {
            $validated['file_path'] = $request->file('file_path')->store('books/digital', 'public');
        }

        Book::create($validated);

        return redirect()->route('librarian.books.index')
            ->with('success', 'Book added successfully');
    }

    public function show(Book $book)
    {
        if ($book->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $book->load('reservations.user');
        return view('librarian.books.show', compact('book'));
    }

    public function edit(Book $book)
    {
        if ($book->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        return view('librarian.books.edit', compact('book'));
    }

    public function update(Request $request, Book $book)
    {
        if ($book->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|unique:books,isbn,' . $book->id,
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|max:5120',
            'is_free' => 'required|boolean',
            'price' => 'required_if:is_free,0|nullable|numeric|min:0',
            'total_copies' => 'required_if:type,physical|nullable|integer|min:1',
            'available_copies' => 'required_if:type,physical|nullable|integer|min:0',
            'category' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')->store('books/covers', 'public');
        }

        $book->update($validated);

        return redirect()->route('librarian.books.index')
            ->with('success', 'Book updated successfully');
    }

    public function destroy(Book $book)
    {
        if ($book->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $book->delete();

        return redirect()->route('librarian.books.index')
            ->with('success', 'Book deleted successfully');
    }
}
