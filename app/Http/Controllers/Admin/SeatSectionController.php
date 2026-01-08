<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SeatSection;
use App\Models\Library;
use App\Models\Seat;
use Illuminate\Http\Request;

class SeatSectionController extends Controller
{
    public function index(Request $request, $libraryId)
    {
        $query = SeatSection::where('library_id', $libraryId);

        if ($request->has('floor_id')) {
            $query->where('floor_id', $request->floor_id);
        }

        $sections = $query->withCount('seats')
            ->with(['seats', 'floor'])
            ->get()
            ->map(function ($section) {
                $section->available_seats = $section->seats()->where('status', 'available')->count();
                $section->occupied_seats = $section->seats()->whereIn('status', ['reserved', 'occupied'])->count();
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
            'floor_id' => 'required|exists:floors,id',
        ]);

        // Check if total seats exceeds library capacity (Skipped as capacity column is missing)
        $library = Library::findOrFail($libraryId);
        
        $section = SeatSection::create([
            'library_id' => $libraryId,
            'name' => $validated['name'],
            'total_seats' => $validated['total_seats'],
            'description' => $validated['description'] ?? null,
            'floor_id' => $validated['floor_id'] ?? null,
        ]);

        // Auto-create seats for this section
        for ($i = 1; $i <= $validated['total_seats']; $i++) {
            $seatNumber = "{$section->name}-{$i}";
            $qrContent = encrypt([
                'type' => 'seat',
                'seat_number' => $seatNumber,
                'library_id' => $libraryId,
            ]);

            $seat = Seat::create([
                'floor_id' => $section->floor_id,
                'section_id' => $section->id,
                'seat_number' => $seatNumber,
                'status' => 'available',
                'seat_type' => 'open',
                'qr_code' => $qrContent,
                'qr_generated_at' => now(),
            ]);

            // Generate QR image
            try {
                $qrImage = \SimpleSoftwareIO\QrCode\Facades\QrCode::format('png')->size(300)->generate($qrContent);
                \Illuminate\Support\Facades\Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.png", $qrImage);
            } catch (\Exception $e) {
                \Log::error("QR Code generation failed for seat {$seat->id}: " . $e->getMessage());
            }
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
            'floor_id' => 'nullable|exists:floors,id',
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
