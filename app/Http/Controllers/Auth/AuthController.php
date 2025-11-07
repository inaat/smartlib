<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        // Check if request is from API
        if ($request->expectsJson() || $request->is('api/*')) {
            return $this->apiLogin($request);
        }

        $request->validate([
            'crn' => 'required',
            'password' => 'required',
            'device_type' => 'required|in:mobile,laptop',
        ]);

        $user = User::where('crn', $request->crn)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return back()->withErrors([
                'crn' => 'The provided credentials are incorrect.',
            ])->onlyInput('crn');
        }

        if ($user->status !== 'approved') {
            return back()->with('error', 'Your account is pending approval or has been suspended.');
        }

        // Handle session management (1 mobile at a time)
        if ($request->device_type === 'mobile') {
            // Logout other mobile sessions
            $user->tokens()->where('name', 'mobile')->delete();
        }

        Auth::login($user, $request->boolean('remember'));

        $request->session()->regenerate();

        // Redirect based on user type
        return $this->redirectUser($user);
    }

    protected function apiLogin(Request $request)
    {
        $request->validate([
            'crn' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('crn', $request->crn)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        if ($user->status !== 'approved') {
            return response()->json([
                'message' => 'Your account is pending approval'
            ], 403);
        }

        // Create token
        $token = $user->createToken('auth-token')->accessToken;

        return response()->json([
            'user' => $user->load('library', 'activeSubscription'),
            'token' => $token
        ]);
    }

    public function showRegister()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        // Check if request is from API
        if ($request->expectsJson() || $request->is('api/*')) {
            return $this->apiRegister($request);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'crn' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string',
            'icap_id_card_photo' => 'required|image|max:10240',
            'password' => 'required|min:8|confirmed',
        ]);

        // Upload ICAP ID card photo
        $icapPhotoPath = $request->file('icap_id_card_photo')->store('icap_photos', 'public');

        $user = User::create([
            'name' => $request->name,
            'crn' => $request->crn,
            'email' => $request->email,
            'phone' => $request->phone,
            'icap_id_card_photo' => $icapPhotoPath,
            'password' => Hash::make($request->password),
            'user_type' => 'student',
            'status' => 'pending',
        ]);

        $user->assignRole('student');

        return redirect()->route('login')->with('success', 'Registration successful! Your account is pending approval.');
    }

    protected function apiRegister(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'crn' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'crn' => $request->crn,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'user_type' => 'student',
            'status' => 'pending',
        ]);

        $user->assignRole('student');

        // Auto-approve for demo (remove in production)
        $user->update(['status' => 'approved']);

        $token = $user->createToken('auth-token')->accessToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
            'message' => 'Registration successful'
        ], 201);
    }

    public function logout(Request $request)
    {
        // Check if request is from API
        if ($request->expectsJson() || $request->is('api/*')) {
            $request->user()->token()->revoke();
            return response()->json(['message' => 'Logged out successfully']);
        }

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    protected function redirectUser($user)
    {
        return match($user->user_type) {
            'super_admin' => redirect()->route('admin.dashboard'),
            'librarian' => redirect()->route('librarian.dashboard'),
            'student' => redirect()->route('student.dashboard'),
            default => redirect()->route('login'),
        };
    }
}
