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
        $query = User::where('status', 'pending')
            ->where('role', 'student');

        if (auth()->user()->role === 'super_admin') {
            $myLibraryIds = Library::where('created_by', auth()->id())->pluck('id');
            $query->where(function($q) use ($myLibraryIds) {
                $q->where('created_by', auth()->id())
                  ->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $users = $query->latest()->paginate(20);

        return view('admin.users.pending', compact('users'));
    }

    public function students()
    {
        $query = User::where('role', 'student');

        if (auth()->user()->role === 'super_admin') {
            $myLibraryIds = Library::where('created_by', auth()->id())->pluck('id');
            $query->where(function($q) use ($myLibraryIds) {
                $q->where('created_by', auth()->id())
                  ->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $students = $query->latest()->paginate(20);

        return view('admin.users.students', compact('students'));
    }

    public function librarians()
    {
        $query = User::where('role', 'librarian')
            ->with('library');

        if (auth()->user()->role === 'super_admin') {
            $myLibraryIds = Library::where('created_by', auth()->id())->pluck('id');
            $query->where(function($q) use ($myLibraryIds) {
                $q->where('created_by', auth()->id())
                  ->orWhereIn('library_id', $myLibraryIds);
            });
        }

        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json($query->latest()->get());
        }

        $librarians = $query->latest()->paginate(20);
        return view('admin.users.librarians', compact('librarians'));
    }

    public function index()
    {
        $query = User::where('role', 'student')
            ->withCount('seatBookings as bookings_count')
            ->with(['library', 'activeSubscription.subscription_plan', 'bans']);

        if (auth()->user()->role === 'super_admin') {
            $myLibraryIds = Library::where('created_by', auth()->id())->pluck('id');
            $query->where(function($q) use ($myLibraryIds) {
                $q->where('created_by', auth()->id())
                  ->orWhereIn('library_id', $myLibraryIds);
            });
        }

        $users = $query->latest()->get();

        return response()->json($users);
    }

    public function create()
    {
        $query = Library::query();
        if (auth()->user()->role === 'super_admin') {
            $query->where('created_by', auth()->id());
        }
        $libraries = $query->get();
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
            'ca_level' => 'nullable|string|in:PRC,CAF,Final',
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
            'created_by' => auth()->id(),
        ]);

        $user->assignRole($request->role);

        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json($user->load('library'), 201);
        }

        return redirect()->route('admin.users.index')->with('success', 'User created successfully');
    }

    public function edit(User $user)
    {
        $query = Library::query();
        if (auth()->user()->role === 'super_admin') {
            $query->where('created_by', auth()->id());
        }
        $libraries = $query->get();
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
            'ca_level' => 'nullable|string|in:PRC,CAF,Final',
            'phone' => 'nullable|string|max:20',
            'crn' => 'nullable|string|unique:users,crn,' . $user->id,
        ]);

        $user->update($request->only(['name', 'email', 'role', 'status', 'library_id', 'ca_level', 'phone', 'crn']));
        
        if ($request->filled('role')) {
            $user->syncRoles($request->role);
        }

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

    public function ban(Request $request, User $user)
    {
        $validated = $request->validate([
            'days' => 'nullable|integer|min:1',
            'reason' => 'nullable|string'
        ]);

        $admin = \Illuminate\Support\Facades\Auth::user();

        // Ban across all super_admin's libraries
        // For super_admin, we set the 'super_admin_id'
        // For 'admin' or 'owner', we can leave it null for a truly global ban or log it differently.
        $superAdminId = null;
        if ($admin->role === 'super_admin') {
            $superAdminId = $admin->id;
        }

        \App\Models\Ban::updateOrCreate(
            ['user_id' => $user->id, 'super_admin_id' => $superAdminId],
            [
                'banned_by' => $admin->id,
                'reason' => $validated['reason'] ?? null,
                'expires_at' => isset($validated['days']) ? now()->addDays($validated['days']) : null
            ]
        );

        return response()->json(['message' => 'User banned successfully']);
    }

    public function unban(User $user)
    {
        $admin = \Illuminate\Support\Facades\Auth::user();
        $superAdminId = $admin->role === 'super_admin' ? $admin->id : null;

        \App\Models\Ban::where('user_id', $user->id)
            ->where('super_admin_id', $superAdminId)
            ->delete();

        return response()->json(['message' => 'User unbanned successfully']);
    }
}
