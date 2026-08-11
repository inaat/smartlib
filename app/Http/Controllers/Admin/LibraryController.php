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
        $query = Library::withCount(['seats', 'reviews']);
        
        // Filter for SuperAdmins
        if (auth()->user()->role === 'super_admin') {
            $query->where('created_by', auth()->id());
        }

        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            $libraries = $query->latest()->get()->map(function ($library) {
                // Calculate available and occupied seats
                $totalSeats = $library->seats_count ?? $library->capacity ?? 0;
                $occupiedSeats = $library->seats()->where('status', '!=', 'available')->count();
                $availableSeats = $totalSeats - $occupiedSeats;

                // Add computed properties
                $library->totalSeats = $totalSeats;
                $library->availableSeats = $availableSeats;
                $library->currentOccupancy = $occupiedSeats;
                $library->averageRating = $library->average_rating;
                $library->reviewsCount = $library->reviews_count ?? 0;

                return $library;
            });

            return response()->json($libraries);
        }

        $libraries = $query->latest()->paginate(20);
        return view('admin.libraries.index', compact('libraries'));
    }

    public function create()
    {
        $librarians = User::where('role', 'librarian')
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
            'capacity' => 'sometimes|nullable|integer|min:1',
            'opening_hours' => 'nullable|string',
            'photo' => 'nullable|image|max:10240',
            'facilities' => 'nullable|array',
            'wifi_password' => 'nullable|string',
            'parking_available' => 'nullable|boolean',
            'operating_days' => 'nullable|array',
            'rules' => 'nullable|array',
            'special_features' => 'nullable|array',
            'contact_info' => 'nullable',
            'phone' => 'nullable|string|max:50',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('libraries', 'public');
        }

        if ($request->filled('phone')) {
            $contactInfo = is_array($request->contact_info ?? null) ? $request->contact_info : [];
            $contactInfo['phone'] = $request->phone;
            $validated['contact_info'] = $contactInfo;
        }

        $validated['created_by'] = auth()->id();
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
        $librarians = User::where('role', 'librarian')
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
            'capacity' => 'sometimes|nullable|integer|min:1',
            'opening_hours' => 'sometimes|string',
            'photo' => 'nullable|image|max:10240',
            'facilities' => 'nullable|array',
            'wifi_password' => 'nullable|string',
            'parking_available' => 'nullable|boolean',
            'operating_days' => 'nullable|array',
            'rules' => 'nullable|array',
            'special_features' => 'nullable|array',
            'contact_info' => 'nullable',
            'phone' => 'nullable|string|max:50',
            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('libraries', 'public');
        }

        if ($request->has('phone')) {
            $contactInfo = is_array($request->contact_info ?? null) ? $request->contact_info : ($library->contact_info ?? []);
            $contactInfo['phone'] = $request->phone;
            $validated['contact_info'] = $contactInfo;
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
        // Unassign librarians assigned to this library (do NOT delete librarian accounts)
        $librarians = User::where('role', 'librarian')
            ->where(function($query) use ($library) {
                $query->where('library_id', $library->id)
                      ->orWhereHas('libraries', function($q) use ($library) {
                          $q->where('libraries.id', $library->id);
                      });
            })
            ->get();

        foreach ($librarians as $librarian) {
            $librarian->update(['library_id' => null]);
            if (method_exists($librarian, 'libraries')) {
                $librarian->libraries()->detach($library->id);
            }
        }

        $library->delete();

        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json(['message' => 'Library deleted successfully and librarian accounts unassigned']);
        }

        return redirect()->route('admin.libraries.index')
            ->with('success', 'Library deleted successfully and librarian accounts unassigned');
    }
}
