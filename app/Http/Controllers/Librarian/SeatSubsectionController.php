<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatSection;
use App\Models\SeatSubsection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SeatSubsectionController extends Controller
{
    /**
     * List all subsections under a section.
     */
    public function index(Request $request, $sectionId)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);

        $subsections = $section->subsections()
            ->withCount('seats')
            ->with('seats')
            ->get()
            ->map(function ($sub) {
                $sub->available_seats = $sub->seats()->where('status', 'available')->count();
                $sub->occupied_seats = $sub->seats()->whereIn('status', ['booked', 'occupied', 'reserved'])->count();
                return $sub;
            });

        return response()->json($subsections);
    }

    /**
     * Create a new subsection under a section.
     */
    public function store(Request $request, $sectionId)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'nullable|string|max:50',
            'gender' => 'nullable|string|in:male,female,mixed',
            'academic_level' => 'nullable|string|in:PRC,CAF,Final,all',
            'total_seats' => 'nullable|integer|min:0',
            'description' => 'nullable|string',
            'is_active' => 'nullable|boolean',
            'auto_generate_seats' => 'nullable|boolean',
        ]);

        $requestedSeats = (int)($validated['total_seats'] ?? 0);
        $currentAllocated = $section->subsections()->sum('total_seats');

        if ($requestedSeats > 0 && ($currentAllocated + $requestedSeats) > $section->total_seats) {
            $remaining = max(0, $section->total_seats - $currentAllocated);
            return response()->json([
                'message' => "Cannot allocate {$requestedSeats} seats. Section '{$section->name}' capacity is {$section->total_seats} seats ({$currentAllocated} already allocated across subsections). Max remaining unallocated: {$remaining} seats."
            ], 422);
        }

        $subsection = SeatSubsection::create([
            'section_id' => $section->id,
            'library_id' => $libraryId,
            'floor_id' => $section->floor_id,
            'name' => $validated['name'],
            'code' => $validated['code'] ?? null,
            'gender' => $validated['gender'] ?? $section->gender,
            'academic_level' => $validated['academic_level'] ?? $section->academic_level,
            'total_seats' => $requestedSeats,
            'description' => $validated['description'] ?? null,
            'is_active' => $validated['is_active'] ?? true,
        ]);

        // Ensure parent section has_subsections is true
        if (!$section->has_subsections) {
            $section->update(['has_subsections' => true]);
        }

        // Auto-assign or auto-generate seats for this subsection whenever total_seats > 0
        if ($requestedSeats > 0) {
            $this->generateSeatsForSubsection($subsection, $requestedSeats);
        }

        // Recalculate and sync total_seats on subsection after seat assignment
        $subsection->update(['total_seats' => $subsection->seats()->count()]);

        return response()->json($subsection->load('seats')->loadCount('seats'), 201);
    }

    /**
     * Update an existing subsection.
     */
    public function update(Request $request, $sectionId, $id)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);
        $subsection = $section->subsections()->findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'code' => 'nullable|string|max:50',
            'gender' => 'nullable|string|in:male,female,mixed',
            'academic_level' => 'nullable|string|in:PRC,CAF,Final,all',
            'total_seats' => 'nullable|integer|min:0',
            'description' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
            'auto_generate_seats' => 'nullable|boolean',
        ]);

        if (array_key_exists('total_seats', $validated)) {
            $newTotalSeats = $validated['total_seats'] ?? 0;
            $otherAllocated = $section->subsections()->where('id', '!=', $subsection->id)->sum('total_seats');

            if ($newTotalSeats > 0 && ($otherAllocated + $newTotalSeats) > $section->total_seats) {
                $remaining = max(0, $section->total_seats - $otherAllocated);
                return response()->json([
                    'message' => "Cannot set {$newTotalSeats} seats. Section '{$section->name}' capacity is {$section->total_seats} seats ({$otherAllocated} allocated to other subsections). Max remaining unallocated: {$remaining} seats."
                ], 422);
            }
        }

        $oldSeatsCount = $subsection->seats()->count();
        $subsection->update($validated);

        $targetSeats = array_key_exists('total_seats', $validated) ? (int)$validated['total_seats'] : $oldSeatsCount;

        if ($targetSeats < $oldSeatsCount) {
            $excess = $oldSeatsCount - $targetSeats;
            // Unassign excess seats from subsection so they become unallocated section seats
            $seatsToUnassign = $subsection->seats()
                ->where('status', 'available')
                ->whereDoesntHave('activeBooking')
                ->orderBy('id', 'desc')
                ->take($excess)
                ->get();

            foreach ($seatsToUnassign as $s) {
                $s->update(['subsection_id' => null]);
            }
        } elseif ($targetSeats > $oldSeatsCount) {
            $this->generateSeatsForSubsection($subsection, $targetSeats);
        }

        // Recalculate and sync exact subsection count
        $subsection->update(['total_seats' => $subsection->seats()->count()]);

        return response()->json($subsection->fresh()->load('seats')->loadCount('seats'));
    }

    /**
     * Generate / Assign seats to subsection automatically
     */
    private function generateSeatsForSubsection(SeatSubsection $subsection, int $targetCount)
    {
        $section = $subsection->seatSection;
        $libraryId = $subsection->library_id;
        $code = !empty($subsection->code) ? trim($subsection->code) : trim($subsection->name);
        $prefix = $code;

        $existingCount = $subsection->seats()->count();
        if ($existingCount >= $targetCount) {
            $this->syncSubsectionSeatNumbers($subsection);
            return;
        }

        $needed = $targetCount - $existingCount;

        // First, check if unassigned individual seats exist in section and assign them (exclude table-linked seats)
        $unassignedSeats = \App\Models\Seat::where('section_id', $section->id)
            ->whereNull('subsection_id')
            ->whereNull('table_id')
            ->take($needed)
            ->get();

        $assignedCount = 0;
        foreach ($unassignedSeats as $seat) {
            $seat->update(['subsection_id' => $subsection->id]);
            $assignedCount++;
        }

        // Create remaining seats up to needed ONLY IF floor capacity permits
        $needed -= $assignedCount;
        $counter = 1;

        if ($needed > 0) {
            $floor = \App\Models\Floor::find($subsection->floor_id);
            while ($needed > 0) {
                if ($floor && $floor->capacity > 0) {
                    $seatsOnFloor = \App\Models\Seat::where('floor_id', $floor->id)->count();
                    if ($seatsOnFloor >= $floor->capacity) {
                        break;
                    }
                }

                $seatNumber = "{$prefix}-{$counter}";
                
                // Check if seat exists
                $exists = \App\Models\Seat::where('seat_number', $seatNumber)
                    ->whereHas('floor', function($q) use ($libraryId) {
                        $q->where('library_id', $libraryId);
                    })->exists();

                if ($exists) {
                    $counter++;
                    continue;
                }

                $qrData = [
                    'type' => 'seat',
                    'seat_number' => $seatNumber,
                    'library_id' => $libraryId,
                    'subsection_id' => $subsection->id,
                    'uid' => uniqid(),
                ];
                $qrContent = base64_encode(json_encode($qrData));

                $seat = \App\Models\Seat::create([
                    'floor_id' => $subsection->floor_id,
                    'section_id' => $section->id,
                    'subsection_id' => $subsection->id,
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
                    \Log::error("QR Code generation failed: " . $e->getMessage());
                }

                $needed--;
                $counter++;
            }
        }

        // Always sync seat numbers so all seats in this subsection start with the subsection prefix (e.g. PRC-1, PRC-2...)
        $this->syncSubsectionSeatNumbers($subsection);
    }

    /**
     * Rename/sync all seats assigned to a subsection to use its code prefix (e.g. PRC-1, PRC-2...)
     */
    public function syncSeatNumbers(Request $request, $sectionId, $id)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);
        $subsection = $section->subsections()->findOrFail($id);

        $count = $this->syncSubsectionSeatNumbers($subsection);

        return response()->json([
            'message' => "Successfully re-numbered {$count} seats using prefix '{$subsection->code}'",
            'subsection' => $subsection->fresh()->load('seats')->loadCount('seats')
        ]);
    }

    private function syncSubsectionSeatNumbers(SeatSubsection $subsection): int
    {
        $code = !empty($subsection->code) ? trim($subsection->code) : trim($subsection->name);
        $prefix = $code;
        $seats = $subsection->seats()->orderBy('id')->get();

        // First pass: assign temporary unique QR codes to prevent unique constraint conflicts during sequential updates
        foreach ($seats as $seat) {
            $seat->update([
                'qr_code' => 'temp_sync_' . $seat->id . '_' . uniqid(),
            ]);
        }

        $counter = 1;
        foreach ($seats as $seat) {
            $newSeatNumber = "{$prefix}-{$counter}";
            
            $qrData = [
                'type' => 'seat',
                'seat_id' => $seat->id,
                'seat_number' => $newSeatNumber,
                'library_id' => $subsection->library_id,
                'subsection_id' => $subsection->id,
            ];
            $qrContent = base64_encode(json_encode($qrData));
            if (\App\Models\Seat::where('qr_code', $qrContent)->where('id', '!=', $seat->id)->exists()) {
                $qrData['uid'] = uniqid();
                $qrContent = base64_encode(json_encode($qrData));
            }

            $seat->update([
                'seat_number' => $newSeatNumber,
                'qr_code' => $qrContent,
                'qr_generated_at' => now(),
            ]);

            try {
                $qrImage = \SimpleSoftwareIO\QrCode\Facades\QrCode::format('svg')->size(300)->generate($qrContent);
                \Illuminate\Support\Facades\Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.svg", $qrImage);
            } catch (\Exception $e) {
                \Log::error("QR Code update failed: " . $e->getMessage());
            }
            
            $counter++;
        }

        return $seats->count();
    }

    /**
     * Delete a subsection.
     */
    public function destroy($sectionId, $id)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);
        $subsection = $section->subsections()->findOrFail($id);

        // Disassociate seats from this subsection
        $subsection->seats()->update(['subsection_id' => null]);

        $subsection->delete();

        // If no more subsections remain, update parent section has_subsections flag
        if ($section->subsections()->count() === 0) {
            $section->update(['has_subsections' => false]);
        }

        return response()->json(['message' => 'Subsection deleted successfully']);
    }

    /**
     * Toggle active state of a subsection.
     */
    public function toggleActive($sectionId, $id)
    {
        $libraryId = Auth::user()->library_id;
        $section = SeatSection::where('library_id', $libraryId)->findOrFail($sectionId);
        $subsection = $section->subsections()->findOrFail($id);

        $subsection->update(['is_active' => !$subsection->is_active]);

        return response()->json($subsection);
    }
}
