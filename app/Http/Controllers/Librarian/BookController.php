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
        $user = Auth::user();
        $library = $user->library;

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'isbn' => 'required|string|unique:books',
            'description' => 'required|string',
            'cover_image' => 'nullable|image|max:5120',
            'cover_url' => 'nullable|string',
            'type' => 'required|in:physical,digital',
            'category' => 'required|string',
            'library_id' => 'required_if:type,physical|nullable|integer',
            'location' => 'nullable|string',
            'pdf_file' => 'required_if:type,digital|nullable|file|mimes:pdf|max:51200',
            'access_level' => 'nullable|in:free,premium,premium_plus',
            'subscription_required' => 'nullable|boolean',
            'passphrase' => 'nullable|string',
            'status' => 'nullable|in:available,unavailable',
        ]);

        // Prepare data for Book model (map field names)
        $bookData = [
            'title' => $validated['title'],
            'author' => $validated['author'],
            'isbn' => $validated['isbn'],
            'description' => $validated['description'],
            'type' => $validated['type'],
            'category' => $validated['category'],
            'availability' => $validated['status'] ?? 'available',
        ];

        // Handle cover image upload
        if ($request->hasFile('cover_image')) {
            $bookData['cover'] = $request->file('cover_image')->store('books/covers', 'public');
        } elseif (isset($validated['cover_url'])) {
            $bookData['cover'] = $validated['cover_url'];
        }

        // Handle type-specific fields
        if ($validated['type'] === 'physical') {
            $bookData['library_id'] = $validated['library_id'] ?? ($library ? $library->id : null);
            $bookData['location'] = $validated['location'] ?? null;
            $bookData['copies_total'] = 1;
            $bookData['copies_available'] = 1;
        } else {
            // Digital book
            $bookData['library_id'] = null;
            $bookData['copies_total'] = 0;
            $bookData['copies_available'] = 0;

            // Handle PDF upload
            $pdfUrl = null;
            if ($request->hasFile('pdf_file')) {
                $pdfUrl = $request->file('pdf_file')->store('books/pdfs', 'public');
            }

            // Set digital access data
            $bookData['digital_access'] = [
                'pdfUrl' => $pdfUrl,
                'accessLevel' => $validated['access_level'] ?? 'free',
                'subscriptionRequired' => filter_var($validated['subscription_required'] ?? false, FILTER_VALIDATE_BOOLEAN),
                'passphrase' => $validated['passphrase'] ?? null,
            ];
        }

        $book = Book::create($bookData);

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Book created successfully',
                'data' => $book
            ], 201);
        }

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
        $user = Auth::user();

        // Allow super_admin to update any book, librarians only their library's books
        if ($user->user_type !== 'super_admin') {
            if ($book->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'isbn' => 'required|string|unique:books,isbn,' . $book->id,
            'description' => 'required|string',
            'cover_image' => 'nullable|image|max:5120',
            'cover_url' => 'nullable|string',
            'type' => 'required|in:physical,digital',
            'category' => 'required|string',
            'library_id' => 'required_if:type,physical|nullable|integer',
            'location' => 'nullable|string',
            'pdf_file' => 'nullable|file|mimes:pdf|max:51200',
            'access_level' => 'nullable|in:free,premium,premium_plus',
            'subscription_required' => 'nullable|boolean',
            'passphrase' => 'nullable|string',
            'status' => 'nullable|in:available,unavailable',
        ]);

        // Prepare data for Book model (map field names)
        $bookData = [
            'title' => $validated['title'],
            'author' => $validated['author'],
            'isbn' => $validated['isbn'],
            'description' => $validated['description'],
            'type' => $validated['type'],
            'category' => $validated['category'],
            'availability' => $validated['status'] ?? $book->availability,
        ];

        // Handle cover image upload
        if ($request->hasFile('cover_image')) {
            $bookData['cover'] = $request->file('cover_image')->store('books/covers', 'public');
        } elseif (isset($validated['cover_url']) && $validated['cover_url']) {
            $bookData['cover'] = $validated['cover_url'];
        }

        // Handle type-specific fields
        if ($validated['type'] === 'physical') {
            $bookData['library_id'] = $validated['library_id'] ?? $book->library_id;
            $bookData['location'] = $validated['location'] ?? $book->location;
        } else {
            // Digital book
            $bookData['library_id'] = null;

            // Handle PDF upload
            $currentDigitalAccess = $book->digital_access ?? [];
            $pdfUrl = $currentDigitalAccess['pdfUrl'] ?? null;

            if ($request->hasFile('pdf_file')) {
                $pdfUrl = $request->file('pdf_file')->store('books/pdfs', 'public');
            }

            // Set digital access data
            $bookData['digital_access'] = [
                'pdfUrl' => $pdfUrl,
                'accessLevel' => $validated['access_level'] ?? $currentDigitalAccess['accessLevel'] ?? 'free',
                'subscriptionRequired' => filter_var($validated['subscription_required'] ?? $currentDigitalAccess['subscriptionRequired'] ?? false, FILTER_VALIDATE_BOOLEAN),
                'passphrase' => $validated['passphrase'] ?? $currentDigitalAccess['passphrase'] ?? null,
            ];
        }

        $book->update($bookData);

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Book updated successfully',
                'data' => $book->fresh()
            ]);
        }

        return redirect()->route('librarian.books.index')
            ->with('success', 'Book updated successfully');
    }

    public function destroy(Book $book)
    {
        $user = Auth::user();

        // Allow super_admin to delete any book, librarians only their library's books
        if ($user->user_type !== 'super_admin') {
            if ($book->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $book->delete();

        // Return JSON for API requests
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Book deleted successfully'
            ]);
        }

        return redirect()->route('librarian.books.index')
            ->with('success', 'Book deleted successfully');
    }
}
