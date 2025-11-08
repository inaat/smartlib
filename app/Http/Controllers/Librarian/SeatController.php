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
    public function index()
    {
        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            $user = Auth::user();
            if ($user->library_id) {
                $seats = Seat::where('library_id', $user->library_id)->latest()->get();
            } else {
                $seats = Seat::latest()->get();
            }
            return response()->json($seats);
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
            'type' => 'nullable|in:regular,premium,group,silent,collaborative',
            'status' => 'nullable|in:available,booked,maintenance,occupied',
            'floor' => 'nullable|integer',
            'section' => 'nullable|string',
            'near_window' => 'nullable|boolean',
            'power_outlets' => 'nullable|integer',
            'has_computer' => 'nullable|boolean',
            'max_occupancy' => 'nullable|integer',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        // Check if seat number already exists in this library
        if ($library->seats()->where('seat_number', $validated['seat_number'])->exists()) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'message' => 'Seat number already exists in this library'
                ], 422);
            }
            return back()->withErrors(['seat_number' => 'Seat number already exists in this library']);
        }

        $validated['library_id'] = $library->id;
        $validated['status'] = $validated['status'] ?? 'available';
        $validated['type'] = $validated['type'] ?? 'regular';

        // Generate QR code
        $qrContent = encrypt([
            'type' => 'seat',
            'seat_number' => $validated['seat_number'],
            'library_id' => $library->id,
        ]);

        $validated['qr_code'] = $qrContent;

        $seat = Seat::create($validated);

        // Generate QR image
        $qrImage = QrCode::format('png')->size(300)->generate($qrContent);
        Storage::disk('public')->put("qrcodes/seats/seat-{$seat->id}.png", $qrImage);

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Seat created successfully',
                'data' => $seat
            ], 201);
        }

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat created successfully with QR code');
    }

    public function edit(Seat $seat)
    {
        // Ensure seat belongs to librarian's library
        if ($seat->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        return view('librarian.seats.edit', compact('seat'));
    }

    public function update(Request $request, Seat $seat)
    {
        // Check if user is admin/super_admin or librarian with permission
        $user = Auth::user();
        if (!in_array($user->user_type, ['super_admin', 'admin'])) {
            if ($seat->library_id !== $user->library_id) {
                abort(403);
            }
        }

        $validated = $request->validate([
            'seat_number' => 'nullable|string',
            'type' => 'nullable|in:regular,premium,group,silent,collaborative',
            'status' => 'nullable|in:available,booked,maintenance,occupied',
            'floor' => 'nullable|integer',
            'near_window' => 'nullable|boolean',
            'power_outlets' => 'nullable|integer',
            'has_computer' => 'nullable|boolean',
            'max_occupancy' => 'nullable|integer',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        // Remove amenities and restrictions from the data if they exist
        $updateData = collect($validated)->except(['amenities', 'restrictions'])->toArray();

        $seat->update($updateData);

        // Return JSON for API calls
        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'Seat updated successfully',
                'seat' => $seat->fresh()
            ]);
        }

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat updated successfully');
    }

    public function destroy(Seat $seat)
    {
        if ($seat->library_id !== Auth::user()->library_id) {
            abort(403);
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
}
