<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Library;
use App\Models\User;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    public function index()
    {
        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            $libraries = Library::withCount('seats')->latest()->get()->map(function ($library) {
                // Calculate available and occupied seats
                $totalSeats = $library->seats_count ?? $library->capacity ?? 0;
                $occupiedSeats = $library->seats()->where('status', '!=', 'available')->count();
                $availableSeats = $totalSeats - $occupiedSeats;

                // Add computed properties
                $library->totalSeats = $totalSeats;
                $library->availableSeats = $availableSeats;
                $library->currentOccupancy = $occupiedSeats;

                return $library;
            });

            return response()->json($libraries);
        }

        $libraries = Library::withCount('seats')->latest()->paginate(20);
        return view('admin.libraries.index', compact('libraries'));
    }

    public function create()
    {
        $librarians = User::where('user_type', 'librarian')
            ->whereNull('library_id')
            ->get();
        return view('admin.libraries.create', compact('librarians'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'address' => 'required|string',
            'capacity' => 'required|integer|min:1',
            'opening_hours' => 'required|string',
            'photo' => 'nullable|image|max:10240',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'facilities' => 'nullable|array',
            'wifi_password' => 'nullable|string',
            'parking_available' => 'nullable|boolean',
            'operating_days' => 'nullable|array',
            'rules' => 'nullable|array',
            'special_features' => 'nullable|array',
            'contact_info' => 'nullable|array',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('libraries', 'public');
        }

        $library = Library::create($validated);

        // Check if API request
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json($library, 201);
        }

        return redirect()->route('admin.libraries.index')
            ->with('success', 'Library created successfully');
    }

    public function show(Library $library)
    {
        $library->load(['seats', 'librarians', 'books', 'events']);
        return view('admin.libraries.show', compact('library'));
    }

    public function edit(Library $library)
    {
        $librarians = User::where('user_type', 'librarian')
            ->where(function($q) use ($library) {
                $q->whereNull('library_id')
                  ->orWhere('library_id', $library->id);
            })
            ->get();
        return view('admin.libraries.edit', compact('library', 'librarians'));
    }

    public function update(Request $request, Library $library)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'address' => 'sometimes|string',
            'capacity' => 'sometimes|integer|min:1',
            'opening_hours' => 'sometimes|string',
            'photo' => 'nullable|image|max:10240',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'facilities' => 'nullable|array',
            'wifi_password' => 'nullable|string',
            'parking_available' => 'nullable|boolean',
            'operating_days' => 'nullable|array',
            'rules' => 'nullable|array',
            'special_features' => 'nullable|array',
            'contact_info' => 'nullable|array',
            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('libraries', 'public');
        }

        $library->update($validated);

        // Check if API request
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json($library);
        }

        return redirect()->route('admin.libraries.index')
            ->with('success', 'Library updated successfully');
    }

    public function destroy(Library $library)
    {
        $library->delete();

        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json(['message' => 'Library deleted successfully']);
        }

        return redirect()->route('admin.libraries.index')
            ->with('success', 'Library deleted successfully');
    }
}
