<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Library;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function pending()
    {
        $users = User::where('status', 'pending')
            ->where('role', 'student')
            ->latest()
            ->paginate(20);

        return view('admin.users.pending', compact('users'));
    }

    public function students()
    {
        $students = User::where('role', 'student')
            ->latest()
            ->paginate(20);

        return view('admin.users.students', compact('students'));
    }

    public function librarians()
    {
        $librarians = User::where('role', 'librarian')
            ->with('library')
            ->latest();

        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json($librarians->get());
        }

        $librarians = $librarians->paginate(20);
        return view('admin.users.librarians', compact('librarians'));
    }

    public function index()
    {
        $users = User::where('role', 'student')
            ->withCount('seatBookings as bookings_count')
            ->with(['library', 'activeSubscription.subscription_plan'])
            ->latest()
            ->get();

        return response()->json($users);
    }

    public function create()
    {
        $libraries = Library::all();
        return view('admin.users.create', compact('libraries'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'crn' => 'nullable|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'role' => 'required|in:student,librarian,super_admin',
            'library_id' => 'nullable|exists:libraries,id',
            'ca_level' => 'nullable|string|in:PRC,CAP,Final',
            'phone' => 'nullable|string|max:20',
        ]);

        $user = User::create([
            'name' => $request->name,
            'crn' => $request->crn,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'status' => $request->status ?? 'approved',
            'library_id' => $request->library_id,
            'ca_level' => $request->ca_level,
            'phone' => $request->phone,
        ]);

        $user->assignRole($request->role);

        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json($user->load('library'), 201);
        }

        return redirect()->route('admin.users.index')->with('success', 'User created successfully');
    }

    public function edit(User $user)
    {
        $libraries = Library::all();
        return view('admin.users.edit', compact('user', 'libraries'));
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
            'role' => 'sometimes|in:student,librarian,super_admin',
            'status' => 'sometimes|in:pending,approved,suspended,banned',
            'library_id' => 'nullable|exists:libraries,id',
            'ca_level' => 'nullable|string|in:PRC,CAP,Final',
            'phone' => 'nullable|string|max:20',
            'crn' => 'nullable|string|unique:users,crn,' . $user->id,
        ]);

        $user->update($request->only(['name', 'email', 'role', 'status', 'library_id', 'ca_level', 'phone', 'crn']));

        if ($request->filled('password')) {
            $user->update(['password' => Hash::make($request->password)]);
        }

        return response()->json($user->load(['library', 'activeSubscription.subscription_plan']));
    }

    public function destroy(User $user)
    {
        $user->delete();

        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json(['message' => 'User deleted successfully']);
        }

        return redirect()->route('admin.users.index')->with('success', 'User deleted successfully');
    }

    public function approve(User $user)
    {
        $user->update(['status' => 'approved']);

        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'message' => 'User approved successfully',
                'user' => $user->load(['library', 'activeSubscription.subscription_plan'])
            ]);
        }

        return back()->with('success', 'User approved successfully');
    }

    public function reject(User $user)
    {
        $userId = $user->id;
        $user->delete();

        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'message' => 'User rejected and deleted',
                'user_id' => $userId
            ]);
        }

        return back()->with('success', 'User rejected and deleted');
    }
}
