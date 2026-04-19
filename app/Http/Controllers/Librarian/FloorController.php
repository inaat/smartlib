<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Floor;
use App\Models\Library;
use Illuminate\Http\Request;

class FloorController extends Controller
{
    public function index()
    {
        $libraryId = auth()->user()->library_id;
        return response()->json(Floor::where('library_id', $libraryId)->orderBy('level')->get());
    }

    public function store(Request $request)
    {
        $libraryId = auth()->user()->library_id;
        $library = Library::findOrFail($libraryId);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'level' => 'required|integer',
            'description' => 'nullable|string',
            'map_image' => 'nullable|image|max:10240',
            'type' => 'nullable|string|in:quiet_zone,discussion_area,girls_only,boys_only,mixed',
            'capacity' => 'nullable|integer|min:0',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('map_image')) {
            $validated['map_image'] = $request->file('map_image')->store('floors', 'public');
        }

        $floor = $library->floors()->create($validated);

        return response()->json($floor, 201);
    }

    public function show(Floor $floor)
    {
        $libraryId = auth()->user()->library_id;
        if ($floor->library_id !== $libraryId) {
            return response()->json(['message' => 'Floor not found in your library'], 403);
        }
        return response()->json($floor);
    }

    public function update(Request $request, Floor $floor)
    {
        $libraryId = auth()->user()->library_id;
        if ($floor->library_id !== $libraryId) {
            return response()->json(['message' => 'Floor not found in your library'], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'level' => 'sometimes|required|integer',
            'description' => 'nullable|string',
            'map_image' => 'nullable|image|max:10240',
            'type' => 'nullable|string|in:quiet_zone,discussion_area,girls_only,boys_only,mixed',
            'capacity' => 'nullable|integer|min:0',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('map_image')) {
            $validated['map_image'] = $request->file('map_image')->store('floors', 'public');
        }

        $floor->update($validated);

        return response()->json($floor);
    }

    public function destroy(Floor $floor)
    {
        $libraryId = auth()->user()->library_id;
        if ($floor->library_id !== $libraryId) {
            return response()->json(['message' => 'Floor not found in your library'], 403);
        }

        $floor->delete();

        return response()->json(['message' => 'Floor deleted successfully']);
    }
}
