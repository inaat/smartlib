<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SeatSection;
use App\Models\Library;
use App\Models\Seat;
use Illuminate\Http\Request;

class SeatSectionController extends Controller
{
    public function index($libraryId)
    {
        $sections = SeatSection::where('library_id', $libraryId)
            ->withCount('seats')
            ->with('seats')
            ->get()
            ->map(function ($section) {
                $section->available_seats = $section->seats()->where('status', 'available')->count();
                $section->occupied_seats = $section->seats()->whereIn('status', ['booked', 'occupied'])->count();
                return $section;
            });

        return response()->json($sections);
    }

    public function store(Request $request, $libraryId)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'total_seats' => 'required|integer|min:1',
            'description' => 'nullable|string',
        ]);

        // Check if total seats exceeds library capacity
        $library = Library::findOrFail($libraryId);
        $currentTotalSeats = SeatSection::where('library_id', $libraryId)->sum('total_seats');

        if ($currentTotalSeats + $validated['total_seats'] > $library->capacity) {
            return response()->json([
                'message' => "Cannot add {$validated['total_seats']} seats. Maximum capacity is {$library->capacity}. Current total: {$currentTotalSeats}",
            ], 422);
        }

        $section = SeatSection::create([
            'library_id' => $libraryId,
            'name' => $validated['name'],
            'total_seats' => $validated['total_seats'],
            'description' => $validated['description'] ?? null,
        ]);

        // Auto-create seats for this section
        for ($i = 1; $i <= $validated['total_seats']; $i++) {
            Seat::create([
                'library_id' => $libraryId,
                'section_id' => $section->id,
                'seat_number' => "{$section->name}-{$i}",
                'status' => 'available',
                'type' => 'regular',
            ]);
        }

        $section->load('seats');
        $section->seats_count = $section->seats()->count();
        $section->available_seats = $section->seats()->where('status', 'available')->count();
        $section->occupied_seats = 0;

        return response()->json($section, 201);
    }

    public function update(Request $request, $libraryId, $sectionId)
    {
        $section = SeatSection::where('library_id', $libraryId)
            ->findOrFail($sectionId);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
        ]);

        $section->update($validated);

        return response()->json($section);
    }

    public function destroy($libraryId, $sectionId)
    {
        $section = SeatSection::where('library_id', $libraryId)
            ->findOrFail($sectionId);

        // Delete all seats in this section
        $section->seats()->delete();

        $section->delete();

        return response()->json(['message' => 'Section deleted successfully']);
    }
}
