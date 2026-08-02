<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class SeatController extends Controller
{
    public function activeFloors(Request $request)
    {
        $user = Auth::user();
        $libraryId = $user->library_id;
        if ($request->has('library_id')) $libraryId = $request->library_id;
        
        $floors = \App\Models\Floor::where('library_id', $libraryId)->orderBy('level')->get();
        return response()->json($floors);
    }

    public function activeSections(Request $request)
    {
        $user = Auth::user();
        $libraryId = $user->library_id;
        if ($request->has('library_id')) $libraryId = $request->library_id;
        
        $sections = \App\Models\SeatSection::where('library_id', $libraryId)
            ->with(['subsections' => function($q) {
                $q->withCount('seats')->with('seats');
            }])
            ->get();
        return response()->json($sections);
    }

    public function index(Request $request)
    {
        \App\Models\SeatBooking::cancelExpiredBookings();
        // Check if API request
        if ($request->expectsJson() || $request->is('api/*')) {
            $user = Auth::user();
            $query = Seat::with(['floor', 'seatSection', 'seatSubsection']);

            if ($user->library_id && !in_array($user->role, ['super_admin', 'admin', 'owner'])) {
                $query->whereHas('floor', function($q) use ($user) {
                    $q->where('library_id', $user->library_id);
                });
            } elseif ($request->has('library_id')) {
                $query->whereHas('floor', function($q) use ($request) {
                    $q->where('library_id', $request->library_id);
                });
            }

            if ($request->has('section_id')) {
                $query->where('section_id', $request->section_id);
            }

            if ($request->has('subsection_id')) {
                $query->where('subsection_id', $request->subsection_id);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where('seat_number', 'like', "%{$search}%");
            }

            $seats = $query->latest()->get();

            $data = $seats->map(function ($seat) {
                // Find current active booking
                $currentBooking = $seat->bookings()
                    ->whereNull('check_out_time')
                    ->where(function($q) {
                        $q->whereNotNull('check_in_time')
                          ->orWhere('status', 'reserved');
                    })
                    ->with('user')
                    ->first();

                $status = $seat->status;
                $bookingData = null;

                if ($currentBooking) {
                    $endTime = $currentBooking->extended_until ?? $currentBooking->scheduled_end_time;
                    $now = now();
                    
                    if ($currentBooking->check_in_time && $endTime && $now->gt($endTime)) {
                        if (\App\Models\SystemSetting::get('overstay_penalty_enabled', true)) {
                            $overstayMinutes = $now->diffInMinutes($endTime, true);
                            if ($overstayMinutes > 30) {
                                $status = 'serious_overstay';
                            } else {
                                $status = 'overstay';
                            }
                        } else {
                            $status = 'occupied';
                        }
                    } elseif ($currentBooking->status === 'reserved') {
                        $status = 'reserved';
                    } elseif ($currentBooking->check_in_time) {
                        $status = 'occupied';
                        if ($endTime) {
                            $remaining = $now->diffInMinutes($endTime, false);
                            if ($remaining > 0 && $remaining <= 10) {
                                $status = 'free_soon';
                            }
                        }
                    }

                    $overstayMins = ($currentBooking->check_in_time && $endTime && $now->gt($endTime)) ? (int)$now->diffInMinutes($endTime, true) : 0;

                    $bookingData = [
                        'id' => $currentBooking->id,
                        'user_name' => $currentBooking->user->name ?? 'Unknown',
                        'user_email' => $currentBooking->user->email ?? '',
                        'user_crn' => $currentBooking->user->crn ?? null,
                        'user_phone' => $currentBooking->user->phone ?? null,
                        'booking_status' => $currentBooking->status,
                        'start_time' => $currentBooking->scheduled_start_time ?? $currentBooking->check_in_time ?? $currentBooking->created_at,
                        'check_in_time' => $currentBooking->check_in_time,
                        'scheduled_end_time' => $currentBooking->scheduled_end_time,
                        'extended_until' => $currentBooking->extended_until,
                        'end_time' => $endTime,
                        'minutes_left' => $endTime ? (int)round($now->diffInMinutes($endTime, false)) : null,
                        'overstay_minutes' => $overstayMins,
                    ];
                }

                return [
                    'id' => $seat->id,
                    'seat_number' => $seat->seat_number,
                    'seat_type' => $seat->seat_type,
                    'zone' => $seat->zone,
                    'status' => $status,
                    'original_status' => $seat->status,
                    'position_x' => $seat->position_x,
                    'position_y' => $seat->position_y,
                    'is_maintenance' => $seat->is_maintenance || $seat->status === 'maintenance',
                    'is_active' => $seat->is_active,
                    'section_id' => $seat->section_id,
                    'subsection_id' => $seat->subsection_id,
                    'table_id' => $seat->table_id,
                    'cabin_number' => $seat->cabin_number,
                    'cabin_features' => $seat->cabin_features,
                    'floor_id' => $seat->floor->id ?? null,
                    'floor' => $seat->floor,
                    'seat_section' => $seat->seatSection,
                    'seat_subsection' => $seat->seatSubsection ? [
                        'id' => $seat->seatSubsection->id,
                        'name' => $seat->seatSubsection->name,
                        'code' => $seat->seatSubsection->code,
                    ] : null,
                    'has_computer' => $seat->has_computer,
                    'near_window' => $seat->near_window,
                    'socket_count' => $seat->socket_count,
                    'current_booking' => $bookingData,
                    'qr_code_url' => Storage::disk('public')->exists("qrcodes/seats/seat-{$seat->id}.svg") 
                        ? "/storage/qrcodes/seats/seat-{$seat->id}.svg" 
                        : (Storage::disk('public')->exists("qrcodes/seats/seat-{$seat->id}.png") ? "/storage/qrcodes/seats/seat-{$seat->id}.png" : null),
                    'floor' => $seat->floor ? [
                        'id' => $seat->floor->id,
                        'name' => $seat->floor->name,
                    ] : null,
                    'seat_section' => $seat->seatSection ? [
                        'id' => $seat->seatSection->id,
                        'name' => $seat->seatSection->name,
                    ] : null,
                ];
            });
            return response()->json($data);
        }

        $library = Auth::user()->library;
        $seats = $library->seats()->latest()->get();

        return view('librarian.seats.index', compact('seats', 'library'));
    }

    public function create()
    {
        $library = Auth::user()->library;
        return view('librarian.seats.create', compact('library'));
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $library = $user->library;

        $validated = $request->validate([
            'seat_number' => 'required|string',
            'seat_type' => 'nullable|string',
            'status' => 'nullable|in:available,reserved,maintenance,occupied',
            'floor_id' => 'required|integer|exists:floors,id',
            'section_id' => 'nullable|integer|exists:seat_sections,id',
            'subsection_id' => 'nullable|integer|exists:seat_subsections,id',
            'table_id' => 'nullable|integer|exists:study_tables,id',
            'cabin_number' => 'nullable|string',
            'cabin_features' => 'nullable|array',
            'has_computer' => 'nullable|boolean',
            'near_window' => 'nullable|boolean',
            'socket_count' => 'nullable|integer|min:0',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        $validated['status'] = $validated['status'] ?? 'available';
        $validated['seat_type'] = $validated['seat_type'] ?? 'open';
        $validated['is_maintenance'] = ($validated['status'] === 'maintenance');

        // Check if seat number already exists in this library (via floors)
        $exists = Seat::where('seat_number', $validated['seat_number'])
            ->whereHas('floor', function($query) use ($library) {
                $query->where('library_id', $library->id);
            })->exists();

        if ($exists) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'message' => 'Seat number already exists in this library'
                ], 422);
            }
            return back()->withErrors(['seat_number' => 'Seat number already exists in this library']);
        }

        // Get library from floor
        $floor = \App\Models\Floor::findOrFail($validated['floor_id']);
        $library = $floor->library;

        // Check floor capacity
        $currentSeatsOnFloor = Seat::where('floor_id', $floor->id)->count();
        if ($floor->capacity > 0 && ($currentSeatsOnFloor + 1) > $floor->capacity) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'message' => "Cannot add seat. The total seats on this floor cannot exceed the floor capacity of {$floor->capacity} seats."
                ], 422);
            }
            return back()->withErrors(['floor_id' => "The total seats on this floor cannot exceed the floor capacity of {$floor->capacity} seats."]);
        }

        // Check subsection capacity
        if (!empty($validated['subsection_id'])) {
            $subsection = \App\Models\SeatSubsection::find($validated['subsection_id']);
            if ($subsection && $subsection->total_seats > 0) {
                $currentSeatsInSub = Seat::where('subsection_id', $subsection->id)->count();
                if (($currentSeatsInSub + 1) > $subsection->total_seats) {
                    if ($request->expectsJson() || $request->is('api/*')) {
                        return response()->json([
                            'message' => "Cannot add seat to subsection '{$subsection->name}'. Subsection limit of {$subsection->total_seats} seats reached."
                        ], 422);
                    }
                    return back()->withErrors(['subsection_id' => "Subsection limit of {$subsection->total_seats} seats reached."]);
                }
            }
        }

        // Generate QR code with unique payload
        $qrData = [
            'type' => 'seat',
            'seat_number' => $validated['seat_number'],
            'library_id' => $library->id,
            'section_id' => $validated['section_id'] ?? null,
            'floor_id' => $validated['floor_id'] ?? null,
            'uid' => uniqid(),
        ];
        $qrContent = base64_encode(json_encode($qrData));
        if (Seat::where('qr_code', $qrContent)->exists()) {
            $qrData['uid'] = uniqid() . '_' . rand(1000, 9999);
            $qrContent = base64_encode(json_encode($qrData));
        }

        $validated['qr_code'] = $qrContent;
        $validated['qr_generated_at'] = now();

        $seat = Seat::create($validated);

        // Generate QR image
        try {
            $qrImage = QrCode::format('svg')->size(300)->generate($qrContent);
            Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.svg", $qrImage);
        } catch (\Exception $e) {
            // Log error but continue
            \Log::error("QR Code generation failed: " . $e->getMessage());
        }

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Seat created successfully',
                'data' => $seat->load(['floor', 'seatSection'])
            ], 201);
        }

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat created successfully with QR code');
    }

    public function edit(Seat $seat)
    {
        // Ensure seat belongs to librarian's library
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($seat->floor->library_id !== $user->library_id) {
                abort(403);
            }
        }

        return view('librarian.seats.edit', compact('seat'));
    }

    public function update(Request $request, Seat $seat)
    {
        // Check if user is admin/super_admin or librarian with permission
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($seat->floor->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $validated = $request->validate([
            'seat_number' => 'sometimes|string',
            'seat_type' => 'nullable|string',
            'status' => 'sometimes|in:available,reserved,maintenance,occupied',
            'floor_id' => 'nullable|integer|exists:floors,id',
            'section_id' => 'nullable|integer|exists:seat_sections,id',
            'subsection_id' => 'nullable|integer|exists:seat_subsections,id',
            'table_id' => 'nullable|integer|exists:study_tables,id',
            'cabin_number' => 'nullable|string',
            'cabin_features' => 'nullable|array',
            'has_computer' => 'nullable|boolean',
            'near_window' => 'nullable|boolean',
            'socket_count' => 'nullable|integer|min:0',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        // Auto-set is_maintenance based on status
        if (isset($validated['status'])) {
            $validated['is_maintenance'] = ($validated['status'] === 'maintenance');
        }

        // Regenerate QR code if seat number changes
        if (isset($validated['seat_number']) && $validated['seat_number'] !== $seat->seat_number) {
            $library = $seat->floor->library ?? $seat->section->library ?? null;
            $libraryId = $library->id ?? Auth::user()->library_id;
            $qrData = [
                'type' => 'seat',
                'seat_id' => $seat->id,
                'seat_number' => $validated['seat_number'],
                'library_id' => $libraryId,
                'section_id' => $validated['section_id'] ?? $seat->section_id,
            ];
            $qrContent = base64_encode(json_encode($qrData));
            if (Seat::where('qr_code', $qrContent)->where('id', '!=', $seat->id)->exists()) {
                $qrData['uid'] = uniqid();
                $qrContent = base64_encode(json_encode($qrData));
            }

            $validated['qr_code'] = $qrContent;
            $validated['qr_generated_at'] = now();
            
            // Regenerate image
            try {
                $qrImage = QrCode::format('svg')->size(300)->generate($qrContent);
                Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.svg", $qrImage);
            } catch (\Exception $e) {
                \Log::error("QR Code regeneration failed: " . $e->getMessage());
            }
        }

        $seat->update($validated);

        // Return JSON for API calls
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'message' => 'Seat updated successfully',
                'seat' => $seat->fresh(['floor', 'seatSection'])
            ]);
        }

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat updated successfully');
    }

    public function destroy(Seat $seat)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($seat->floor->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $seat->delete();

        // Return JSON for API requests
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Seat deleted successfully'
            ]);
        }

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat deleted successfully');
    }

    public function generateQRCodes()
    {
        $library = Auth::user()->library;
        $seats = $library->seats;

        return view('librarian.seats.qr-codes', compact('seats', 'library'));
    }

    public function bulkUpdate(Request $request)
    {
        $validated = $request->validate([
            'seats' => 'required|array',
            'seats.*.id' => 'required|integer|exists:seats,id',
            'seats.*.position_x' => 'nullable|integer',
            'seats.*.position_y' => 'nullable|integer',
            'seats.*.seat_number' => 'nullable|string',
        ]);

        \Illuminate\Support\Facades\DB::transaction(function () use ($validated) {
            foreach ($validated['seats'] as $seatData) {
                $seat = Seat::find($seatData['id']);
                if ($seat) {
                    $updateData = [];
                    if (array_key_exists('position_x', $seatData)) $updateData['position_x'] = $seatData['position_x'];
                    if (array_key_exists('position_y', $seatData)) $updateData['position_y'] = $seatData['position_y'];
                    if (array_key_exists('seat_number', $seatData)) $updateData['seat_number'] = $seatData['seat_number'];
                    $seat->update($updateData);
                }
            }
        });

        return response()->json(['success' => true, 'message' => 'Seats updated successfully']);
    }
}
