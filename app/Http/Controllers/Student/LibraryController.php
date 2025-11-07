<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Library;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    public function index(Request $request)
    {
        $libraries = Library::with('seats')->get();

        // Calculate available seats
        $libraries->each(function($library) {
            $library->availableSeats = $library->seats()->where('status', 'available')->count();
            $library->totalSeats = $library->seats()->count();
            $library->currentOccupancy = $library->seats()->where('status', 'occupied')->count();
        });

        return response()->json($libraries);
    }

    public function show($id)
    {
        $library = Library::with(['seats' => function($query) {
            $query->orderBy('section')->orderBy('seat_number');
        }])->findOrFail($id);

        $library->availableSeats = $library->seats()->where('status', 'available')->count();
        $library->totalSeats = $library->seats()->count();
        $library->currentOccupancy = $library->seats()->where('status', 'occupied')->count();

        return response()->json($library);
    }

    public function seats($id)
    {
        $library = Library::findOrFail($id);
        $seats = $library->seats()->orderBy('section')->orderBy('seat_number')->get();

        return response()->json($seats);
    }
}
