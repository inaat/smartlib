<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatSection;
use App\Models\Library;
use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SeatSectionController extends Controller
{
    public function index(Request $request)
    {
        $libraryId = Auth::user()->library_id;
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
                
                // Add QR code URLs to seats
                $section->seats->transform(function($seat) {
                    $seat->qr_code_url = \Illuminate\Support\Facades\Storage::disk('public')->exists("qrcodes/seats/seat-{$seat->id}.svg") 
                        ? "/storage/qrcodes/seats/seat-{$seat->id}.svg" 
                        : (\Illuminate\Support\Facades\Storage::disk('public')->exists("qrcodes/seats/seat-{$seat->id}.png") ? "/storage/qrcodes/seats/seat-{$seat->id}.png" : null);
                    return $seat;
                });
                
                return $section;
            });

        return response()->json($sections);
    }

    public function store(Request $request)
    {
        $libraryId = Auth::user()->library_id;
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string|in:male,female,mixed',
            'total_seats' => 'required|integer|min:1',
            'description' => 'nullable|string',
            'floor_id' => 'required|exists:floors,id',
        ]);

        $section = SeatSection::create([
            'library_id' => $libraryId,
            'name' => $validated['name'],
            'gender' => $validated['gender'],
            'total_seats' => $validated['total_seats'],
            'description' => $validated['description'] ?? null,
            'floor_id' => $validated['floor_id'] ?? null,
        ]);

        // Auto-create seats for this section
        for ($i = 1; $i <= $validated['total_seats']; $i++) {
            $seatNumber = "{$section->name}-{$i}";
            $qrContent = base64_encode(json_encode([
                'type' => 'seat',
                'seat_number' => $seatNumber,
                'library_id' => $libraryId,
            ]));

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
                $qrImage = \SimpleSoftwareIO\QrCode\Facades\QrCode::format('svg')->size(300)->generate($qrContent);
                \Illuminate\Support\Facades\Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.svg", $qrImage);
            } catch (\Exception $e) {
                \Log::error("QR Code generation failed for seat {$seat->id}: " . $e->getMessage());
            }
        }

        $section->load('seats');
        return response()->json($section, 201);
    }

    public function update(Request $request, $sectionId)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)
            ->findOrFail($sectionId);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'gender' => 'sometimes|string|in:male,female,mixed',
            'description' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
            'floor_id' => 'nullable|exists:floors,id',
        ]);

        $section->update($validated);

        return response()->json($section);
    }

    public function destroy($sectionId)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)
            ->findOrFail($sectionId);

        // Delete all seats in this section
        $section->seats()->delete();

        $section->delete();

        return response()->json(['message' => 'Section deleted successfully']);
    }
}
