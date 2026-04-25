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
        $librarian = Auth::user();
        $library   = $librarian->library;

        // Strategy 1: SuperAdmin via librarian's created_by
        $superAdminId = null;
        if ($librarian->created_by) {
            $creator = User::find($librarian->created_by);
            if ($creator && $creator->role === 'super_admin') {
                $superAdminId = $creator->id;
            }
        }

        // Strategy 2: SuperAdmin via the library's created_by
        if (!$superAdminId && $library && $library->created_by) {
            $libraryCreator = User::find($library->created_by);
            if ($libraryCreator && $libraryCreator->role === 'super_admin') {
                $superAdminId = $libraryCreator->id;
            }
        }

        $query = User::where('role', 'student')->withCount('seatBookings');

        if ($superAdminId) {
            // Show all students under this SuperAdmin's libraries + global students (null library_id and created_by)
            $superAdminLibraryIds = \App\Models\Library::where('created_by', $superAdminId)->pluck('id');
            $query->where(function ($q) use ($superAdminId, $superAdminLibraryIds) {
                $q->where('created_by', $superAdminId)
                  ->orWhereIn('library_id', $superAdminLibraryIds)
                  ->orWhere(function($sub) {
                      $sub->whereNull('library_id')->whereNull('created_by');
                  });
            });
        } elseif ($library) {
            // Strategy 3: Fallback — students in this library only + global students + students with interactions
            $query->where(function ($q) use ($library) {
                $q->where('library_id', $library->id)
                  ->orWhere(function($sub) {
                      $sub->whereNull('library_id')->whereNull('created_by');
                  })
                  ->orWhereHas('seatBookings.seat', function($qs) use ($library) {
                      $qs->where('library_id', $library->id);
                  })
                  ->orWhereHas('attendance', function($qa) use ($library) {
                      $qa->where('library_id', $library->id);
                  })
                  ->orWhereHas('eventRegistrations.event', function($qe) use ($library) {
                      $qe->where('library_id', $library->id);
                  });
            });
        }
        // Strategy 4: If no library and no superAdmin, it will just show all students due to lack of where clause.

        $students = $query->latest()->get();

        $data = $students->map(function ($student) use ($library) {
            $isBanned = $library ? $student->isBannedFrom($library->id) : false;
            $activeBan = null;
            if ($isBanned && $library) {
                $activeBan = $student->bans()
                    ->where(function ($q) use ($library) {
                        $q->where('library_id', $library->id)->orWhereNotNull('super_admin_id');
                    })
                    ->where(function ($q) {
                        $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
                    })
                    ->first();
            }

            return [
                'id'                  => $student->id,
                'name'                => $student->name,
                'email'               => $student->email,
                'phone'               => $student->phone,
                'crn'                 => $student->crn,
                'gender'              => $student->gender,
                'ca_level'            => $student->ca_level,
                'is_active'           => $student->is_active,
                'seat_bookings_count' => $student->seat_bookings_count,
                'created_at'          => $student->created_at,
                'is_banned'           => $isBanned,
                'active_ban'          => $activeBan,
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
            'gender' => 'nullable|string|in:male,female',
            'ca_level' => 'nullable|in:PRC,CAF,Final',
            'password' => 'required|string|min:8',
        ]);

        $student = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'crn' => $validated['crn'],
            'gender' => $validated['gender'] ?? null,
            'ca_level' => $validated['ca_level'],
            'password' => Hash::make($validated['password']),
            'role' => 'student',
            'is_active' => true,
            'created_by' => Auth::id(),
        ]);

        $student->assignRole('student');

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
            'gender' => 'nullable|string|in:male,female',
            'ca_level' => 'nullable|in:PRC,CAF,Final',
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

    public function show($id)
    {
        $student = User::with([
            'seatBookings.seat.library',
            'attendance.library',
            'eventRegistrations.event',
            'bookReservations.book.library',
            'activeSubscription.subscriptionPlan',
            'creator'
        ])->findOrFail($id);

        if ($student->role !== 'student') {
            return response()->json(['message' => 'User is not a student'], 403);
        }

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
        $librarian = Auth::user();
        $library   = $librarian->library;

        $superAdminId = null;
        if ($librarian->created_by) {
            $creator = User::find($librarian->created_by);
            if ($creator && $creator->role === 'super_admin') {
                $superAdminId = $creator->id;
            }
        }

        $baseQuery = User::where('role', 'student');

        if ($superAdminId) {
            $superAdminLibraryIds = \App\Models\Library::where('created_by', $superAdminId)->pluck('id');
            $baseQuery->where(function ($q) use ($superAdminId, $superAdminLibraryIds) {
                $q->where('created_by', $superAdminId)
                  ->orWhereIn('library_id', $superAdminLibraryIds)
                  ->orWhere(function($sub) {
                      $sub->whereNull('library_id')->whereNull('created_by');
                  });
            });
        } elseif ($library) {
            $baseQuery->where(function ($q) use ($library) {
                $q->where('library_id', $library->id)
                  ->orWhere(function($sub) {
                      $sub->whereNull('library_id')->whereNull('created_by');
                  })
                  ->orWhereHas('seatBookings.seat', function($qs) use ($library) {
                      $qs->where('library_id', $library->id);
                  })
                  ->orWhereHas('attendance', function($qa) use ($library) {
                      $qa->where('library_id', $library->id);
                  })
                  ->orWhereHas('eventRegistrations.event', function($qe) use ($library) {
                      $qe->where('library_id', $library->id);
                  });
            });
        }

        $total = (clone $baseQuery)->count();
        $activeToday = (clone $baseQuery)->whereHas('seatBookings', function ($q) {
            $q->whereDate('check_in_time', now()->toDateString());
        })->count();
        $pending       = (clone $baseQuery)->where('is_active', false)->count();
        $newThisMonth  = (clone $baseQuery)->whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->count();

        return response()->json([
            'total'        => $total,
            'activeToday'  => $activeToday,
            'pending'      => $pending,
            'newThisMonth' => $newThisMonth,
        ]);
    }

    public function ban(Request $request, $id)
    {
        $validated = $request->validate([
            'days' => 'nullable|integer|min:1',
            'reason' => 'nullable|string'
        ]);

        $librarian = Auth::user();
        $student = User::findOrFail($id);

        if ($student->role !== 'student') {
            return response()->json(['message' => 'User is not a student'], 403);
        }

        if (!$librarian->library_id) {
            return response()->json(['message' => 'Librarian is not assigned to a library'], 400);
        }

        // Ban from current library
        \App\Models\Ban::updateOrCreate(
            ['user_id' => $student->id, 'library_id' => $librarian->library_id],
            [
                'banned_by' => $librarian->id,
                'reason' => $validated['reason'] ?? null,
                'expires_at' => isset($validated['days']) ? now()->addDays($validated['days']) : null
            ]
        );

        return response()->json(['message' => 'Student banned from this library']);
    }

    public function unban($id)
    {
        $librarian = Auth::user();
        \App\Models\Ban::where('user_id', $id)
            ->where('library_id', $librarian->library_id)
            ->delete();

        return response()->json(['message' => 'Student unbanned successfully']);
    }
}
