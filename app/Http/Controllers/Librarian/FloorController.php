<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Floor;
use App\Models\Library;
use Illuminate\Http\Request;

class FloorController extends Controller
{
    public function index(Library $library)
    {
        return response()->json($library->floors()->orderBy('level')->get());
    }

    public function store(Request $request, Library $library)
    {
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

    public function show(Library $library, Floor $floor)
    {
        if ($floor->library_id !== $library->id) {
            return response()->json(['message' => 'Floor not found in this library'], 404);
        }
        return response()->json($floor);
    }

    public function update(Request $request, Library $library, Floor $floor)
    {
        if ($floor->library_id !== $library->id) {
            return response()->json(['message' => 'Floor not found in this library'], 404);
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

    public function destroy(Library $library, Floor $floor)
    {
        if ($floor->library_id !== $library->id) {
            return response()->json(['message' => 'Floor not found in this library'], 404);
        }

        $floor->delete();

        return response()->json(['message' => 'Floor deleted successfully']);
    }
}
