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
            ->with(['seats.seatSubsection', 'floor', 'subsections'])
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

    public function store(Request $request, $libraryId)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string|in:male,female,mixed',
            'academic_level' => 'nullable|string|in:PRC,CAF,Final,all',
            'total_seats' => 'required|integer|min:1',
            'description' => 'nullable|string',
            'floor_id' => 'required|exists:floors,id',
        ]);

        // Calculate and validate floor capacity
        $floor = \App\Models\Floor::findOrFail($validated['floor_id']);
        $currentSeatsOnFloor = SeatSection::where('floor_id', $floor->id)->sum('total_seats');
        $newTotalSeats = $currentSeatsOnFloor + $validated['total_seats'];

        if ($floor->capacity > 0 && $newTotalSeats > $floor->capacity) {
            return response()->json([
                'message' => "Cannot add seats. The total seats across all sections cannot exceed the floor capacity of {$floor->capacity} seats."
            ], 422);
        }

        // Check if total seats exceeds library capacity (Skipped as capacity column is missing)
        $library = Library::findOrFail($libraryId);
        
        $section = SeatSection::create([
            'library_id' => $libraryId,
            'name' => $validated['name'],
            'gender' => $validated['gender'],
            'academic_level' => $validated['academic_level'] ?? 'all',
            'total_seats' => $validated['total_seats'],
            'description' => $validated['description'] ?? null,
            'floor_id' => $validated['floor_id'] ?? null,
        ]);

        // Auto-create seats for this section (skip existing seat numbers)
        $created = 0;
        $counter = 1;
        while ($created < $validated['total_seats']) {
            $seatNumber = "{$section->name}-{$counter}";

            // Skip if this seat number already exists in the library
            $exists = Seat::where('seat_number', $seatNumber)
                ->whereHas('floor', function($query) use ($libraryId) {
                    $query->where('library_id', $libraryId);
                })->exists();

            if ($exists) {
                $counter++;
                continue;
            }

            $qrData = [
                'type' => 'seat',
                'seat_number' => $seatNumber,
                'library_id' => $libraryId,
                'section_id' => $section->id,
                'uid' => uniqid(),
            ];
            $qrContent = base64_encode(json_encode($qrData));

            if (Seat::where('qr_code', $qrContent)->exists()) {
                $qrData['uid'] = uniqid() . '_' . rand(1000, 9999);
                $qrContent = base64_encode(json_encode($qrData));
            }

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

            $created++;
            $counter++;
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
            'gender' => 'sometimes|string|in:male,female,mixed',
            'academic_level' => 'sometimes|string|in:PRC,CAF,Final,all',
            'description' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
            'floor_id' => 'nullable|exists:floors,id',
            'total_seats' => 'sometimes|integer|min:1',
        ]);

        $targetFloorId = $validated['floor_id'] ?? $section->floor_id;
        $newSeatsCount = $validated['total_seats'] ?? $section->total_seats;

        $floor = \App\Models\Floor::findOrFail($targetFloorId);
        $currentSeatsOnFloor = SeatSection::where('floor_id', $floor->id)
            ->where('id', '!=', $section->id)
            ->sum('total_seats');
        $newTotalSeats = $currentSeatsOnFloor + $newSeatsCount;

        if ($floor->capacity > 0 && $newTotalSeats > $floor->capacity) {
            return response()->json([
                'message' => "Cannot add seats. The total seats across all sections cannot exceed the floor capacity of {$floor->capacity} seats."
            ], 422);
        }

        $oldSeatsCount = $section->total_seats;

        \Illuminate\Support\Facades\DB::transaction(function () use ($section, $validated, $newSeatsCount, $oldSeatsCount, $libraryId) {
            $section->update($validated);

            if ($newSeatsCount > $oldSeatsCount) {
                // Create extra seats (skip existing seat numbers)
                $seatsToCreate = $newSeatsCount - $oldSeatsCount;
                $created = 0;
                $counter = $oldSeatsCount + 1;
                while ($created < $seatsToCreate) {
                    $seatNumber = "{$section->name}-{$counter}";

                    // Skip if this seat number already exists in the library
                    $exists = Seat::where('seat_number', $seatNumber)
                        ->whereHas('floor', function($query) use ($libraryId) {
                            $query->where('library_id', $libraryId);
                        })->exists();

                    if ($exists) {
                        $counter++;
                        continue;
                    }

                    $qrData = [
                        'type' => 'seat',
                        'seat_number' => $seatNumber,
                        'library_id' => $libraryId,
                        'section_id' => $section->id,
                        'uid' => uniqid(),
                    ];
                    $qrContent = base64_encode(json_encode($qrData));

                    if (Seat::where('qr_code', $qrContent)->exists()) {
                        $qrData['uid'] = uniqid() . '_' . rand(1000, 9999);
                        $qrContent = base64_encode(json_encode($qrData));
                    }

                    $seat = Seat::create([
                        'floor_id' => $section->floor_id,
                        'section_id' => $section->id,
                        'seat_number' => $seatNumber,
                        'status' => 'available',
                        'seat_type' => 'open',
                        'qr_code' => $qrContent,
                        'qr_generated_at' => now(),
                    ]);

                    try {
                        $qrImage = \SimpleSoftwareIO\QrCode\Facades\QrCode::format('svg')->size(300)->generate($qrContent);
                        \Illuminate\Support\Facades\Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.svg", $qrImage);
                    } catch (\Exception $e) {
                        \Log::error("QR Code generation failed for seat {$seat->id}: " . $e->getMessage());
                    }

                    $created++;
                    $counter++;
                }
            } elseif ($newSeatsCount < $oldSeatsCount) {
                // Delete extra seats (ordered by highest suffix index)
                $seatsToDelete = $section->seats()
                    ->orderByRaw('CAST(SUBSTRING_INDEX(seat_number, "-", -1) AS UNSIGNED) DESC')
                    ->take($oldSeatsCount - $newSeatsCount)
                    ->get();

                foreach ($seatsToDelete as $s) {
                    \Illuminate\Support\Facades\Storage::disk('public')->delete("qrcodes/seats/seat-{$s->id}.svg");
                    $s->delete();
                }
            }
        });

        return response()->json($section->fresh());
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
