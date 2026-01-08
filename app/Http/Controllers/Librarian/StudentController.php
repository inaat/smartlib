<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function index()
    {
        $students = User::where('role', 'student')
            ->withCount('seatBookings')
            ->latest()
            ->get();

        $data = $students->map(function ($student) {
            return [
                'id' => $student->id,
                'name' => $student->name,
                'email' => $student->email,
                'phone' => $student->phone,
                'crn' => $student->crn,
                'ca_level' => $student->ca_level,
                'is_active' => $student->is_active,
                'seat_bookings_count' => $student->seat_bookings_count,
                'created_at' => $student->created_at,
            ];
        });

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string|max:20',
            'crn' => 'required|string|unique:users',
            'ca_level' => 'nullable|in:PRC,CAP,Final',
            'password' => 'required|string|min:8',
        ]);

        $student = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'crn' => $validated['crn'],
            'ca_level' => $validated['ca_level'],
            'password' => Hash::make($validated['password']),
            'role' => 'student',
            'is_active' => true,
            'created_by' => Auth::id(),
        ]);

        return response()->json($student, 201);
    }

    public function update(Request $request, $id)
    {
        $student = User::findOrFail($id);

        if ($student->role !== 'student') {
            return response()->json(['message' => 'User is not a student'], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $student->id,
            'phone' => 'nullable|string|max:20',
            'crn' => 'sometimes|string|unique:users,crn,' . $student->id,
            'ca_level' => 'nullable|in:PRC,CAP,Final',
            'is_active' => 'sometimes|boolean',
            'password' => 'nullable|string|min:8',
        ]);

        if (isset($validated['password']) && $validated['password']) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $student->update($validated);

        return response()->json($student);
    }

    public function destroy($id)
    {
        $student = User::findOrFail($id);

        if ($student->role !== 'student') {
            return response()->json(['message' => 'User is not a student'], 403);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully']);
    }

    public function stats()
    {
        $total = User::where('role', 'student')->count();
        $activeToday = User::where('role', 'student')
            ->whereHas('seatBookings', function($q) {
                $q->whereDate('check_in_time', now()->toDateString());
            })->count();
        $pending = User::where('role', 'student')->where('is_active', false)->count();
        $newThisMonth = User::where('role', 'student')
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();

        return response()->json([
            'total' => $total,
            'activeToday' => $activeToday,
            'pending' => $pending,
            'newThisMonth' => $newThisMonth
        ]);
    }
}
