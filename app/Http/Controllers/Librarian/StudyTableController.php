<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\StudyTable;
use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudyTableController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $libraryId = $user->library_id;
        if ($request->has('library_id') && in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            $libraryId = $request->library_id;
        }

        if (!$libraryId) {
            return response()->json([]);
        }

        $tables = StudyTable::where('library_id', $libraryId)
            ->with(['seats'])
            ->get();

        return response()->json($tables);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $libraryId = $user->library_id;
        if ($request->has('library_id') && in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            $libraryId = $request->library_id;
        }

        $validated = $request->validate([
            'floor_id' => 'required|integer|exists:floors,id',
            'section_id' => 'nullable|integer|exists:seat_sections,id',
            'capacity' => 'required|integer|in:2,4,6,8',
            'label' => 'required|string',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        $floor = \App\Models\Floor::findOrFail($validated['floor_id']);
        $currentSeatsOnFloor = Seat::where('floor_id', $floor->id)->count();
        $seatsToCreate = (int) $validated['capacity'];
        if ($floor->capacity > 0 && ($currentSeatsOnFloor + $seatsToCreate) > $floor->capacity) {
            return response()->json([
                'message' => "Cannot add table. The total seats on this floor cannot exceed the floor capacity of {$floor->capacity} seats (currently {$currentSeatsOnFloor} seats, table requires {$seatsToCreate})."
            ], 422);
        }

        $validated['library_id'] = $libraryId;
        $validated['position_x'] = $validated['position_x'] ?? 150;
        $validated['position_y'] = $validated['position_y'] ?? 150;

        $table = StudyTable::create($validated);

        // Auto-create seats associated with this study table
        $capacity = (int) $validated['capacity'];
        $label = $validated['label'];

        for ($i = 1; $i <= $capacity; $i++) {
            $seatNumber = "{$label}-{$i}";

            // Ensure seat number doesn't conflict
            $exists = Seat::where('seat_number', $seatNumber)
                ->whereHas('floor', function($query) use ($libraryId) {
                    $query->where('library_id', $libraryId);
                })->exists();

            if ($exists) {
                // If it conflicts, append unique ID
                $seatNumber = "{$label}-{$i}-" . uniqid();
            }

            // Generate unique QR content
            $qrData = [
                'type' => 'seat',
                'seat_number' => $seatNumber,
                'library_id' => $libraryId,
                'table_id' => $table->id,
                'uid' => uniqid(),
            ];
            $qrContent = base64_encode(json_encode($qrData));

            Seat::create([
                'floor_id' => $validated['floor_id'],
                'section_id' => $validated['section_id'],
                'table_id' => $table->id,
                'seat_number' => $seatNumber,
                'seat_type' => 'regular',
                'status' => 'available',
                'position_x' => 0,
                'position_y' => 0,
                'qr_code' => $qrContent,
                'qr_generated_at' => now(),
            ]);
        }

        return response()->json($table->load('seats'), 201);
    }

    public function update(Request $request, StudyTable $table)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($table->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $validated = $request->validate([
            'label' => 'sometimes|required|string',
            'capacity' => 'sometimes|required|integer|in:2,4,6,8',
            'position_x' => 'sometimes|required|integer',
            'position_y' => 'sometimes|required|integer',
            'section_id' => 'nullable|integer|exists:seat_sections,id',
        ]);

        $table->update($validated);

        // If capacity changes, we can adjust seats (add or remove)
        if (isset($validated['capacity']) && (int)$validated['capacity'] !== $table->seats()->count()) {
            $newCapacity = (int) $validated['capacity'];
            $currentSeats = $table->seats()->orderBy('id')->get();
            $currentCount = $currentSeats->count();

            if ($newCapacity > $currentCount) {
                // Capacity check
                $floor = $table->floor ?? \App\Models\Floor::findOrFail($table->floor_id);
                $currentSeatsOnFloor = Seat::where('floor_id', $floor->id)->count();
                $seatsToCreate = $newCapacity - $currentCount;
                if ($floor->capacity > 0 && ($currentSeatsOnFloor + $seatsToCreate) > $floor->capacity) {
                    return response()->json([
                        'message' => "Cannot increase table capacity. This would exceed the floor capacity of {$floor->capacity} seats."
                    ], 422);
                }

                // Add seats
                for ($i = $currentCount + 1; $i <= $newCapacity; $i++) {
                    $seatNumber = "{$table->label}-{$i}";
                    
                    $qrData = [
                        'type' => 'seat',
                        'seat_number' => $seatNumber,
                        'library_id' => $table->library_id,
                        'table_id' => $table->id,
                        'uid' => uniqid(),
                    ];
                    $qrContent = base64_encode(json_encode($qrData));

                    Seat::create([
                        'floor_id' => $table->floor_id,
                        'section_id' => $table->section_id,
                        'table_id' => $table->id,
                        'seat_number' => $seatNumber,
                        'seat_type' => 'regular',
                        'status' => 'available',
                        'position_x' => 0,
                        'position_y' => 0,
                        'qr_code' => $qrContent,
                        'qr_generated_at' => now(),
                    ]);
                }
            } elseif ($newCapacity < $currentCount) {
                // Remove excess seats
                $toDelete = $currentSeats->slice($newCapacity);
                foreach ($toDelete as $seat) {
                    $seat->delete();
                }
            }
        }

        // If label changes, update seat numbers & unique QR codes
        if (isset($validated['label'])) {
            $seats = $table->seats()->get();
            foreach ($seats as $index => $seat) {
                $num = $index + 1;
                $newSeatNumber = "{$validated['label']}-{$num}";
                $qrData = [
                    'type' => 'seat',
                    'seat_id' => $seat->id,
                    'seat_number' => $newSeatNumber,
                    'library_id' => $table->library_id,
                    'table_id' => $table->id,
                ];
                $qrContent = base64_encode(json_encode($qrData));
                if (Seat::where('qr_code', $qrContent)->where('id', '!=', $seat->id)->exists()) {
                    $qrData['uid'] = uniqid();
                    $qrContent = base64_encode(json_encode($qrData));
                }

                $seat->update([
                    'seat_number' => $newSeatNumber,
                    'qr_code' => $qrContent,
                    'qr_generated_at' => now(),
                ]);
            }
        }

        return response()->json($table->load('seats'));
    }

    public function destroy(StudyTable $table)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($table->library_id !== $user->library_id) {
                abort(403);
            }
        }

        // Delete associated seats
        $table->seats()->get()->each->delete();
        $table->delete();

        return response()->json(['success' => true, 'message' => 'Table and its seats deleted successfully']);
    }
}
