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
        $library = Auth::user()->library;

        $validated = $request->validate([
            'seat_number' => 'required|string',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        // Check if seat number already exists in this library
        if ($library->seats()->where('seat_number', $validated['seat_number'])->exists()) {
            return back()->withErrors(['seat_number' => 'Seat number already exists in this library']);
        }

        $validated['library_id'] = $library->id;
        $validated['status'] = 'available';

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
        if ($seat->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $validated = $request->validate([
            'seat_number' => 'required|string',
            'status' => 'required|in:available,booked,maintenance',
            'position_x' => 'nullable|integer',
            'position_y' => 'nullable|integer',
        ]);

        $seat->update($validated);

        return redirect()->route('librarian.seats.index')
            ->with('success', 'Seat updated successfully');
    }

    public function destroy(Seat $seat)
    {
        if ($seat->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $seat->delete();

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
