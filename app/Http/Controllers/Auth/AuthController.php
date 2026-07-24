<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Login user
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
            'remember' => 'boolean',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['Invalid email'],
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['Invalid password'],
            ]);
        }

        if (!$user->is_active || $user->status !== 'approved') {
            throw ValidationException::withMessages([
                'email' => ['Your account is inactive. Please contact support.'],
            ]);
        }

        if ($user->role === 'librarian' && !$user->library_id) {
            throw ValidationException::withMessages([
                'email' => ['No library has been assigned to your account. Please contact support.'],
            ]);
        }

        // Create token for API authentication
        $tokenResult = $user->createToken('auth-token');
        $token = $tokenResult->plainTextToken;
 
        // Save metadata
        $tokenResult->accessToken->forceFill([
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ])->save();

        // Load relationships
        $user->load(['userSubscriptions' => function($query) {
            $query->where('status', 'active')->latest();
        }, 'libraries', 'library']);

        $libraryId = $user->library_id;

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'crn' => $user->crn,
                'role' => $user->role,
                'ca_level' => $user->ca_level,
                'is_active' => $user->is_active,
                'trial_used' => $user->trial_used,
                'trial_started_at' => $user->trial_started_at,
                'trial_ends_at' => $user->trial_ends_at,
                'created_at' => $user->created_at,
                'isApproved' => $user->is_active, // For frontend compatibility
                'role' => $user->role, // For frontend compatibility
                'library_id' => $libraryId,
                'library' => $user->library,
                'active_subscription' => $user->activeSubscription()->with('subscriptionPlan')->first(),
                'pending_order' => $user->pendingOrder()->with('plan')->first(),
                'profile_picture' => $user->profile_picture,
                'gender' => $user->gender,
            ],
            'token' => $token,
            'message' => 'Login successful'
        ]);
    }

    /**
     * Register new user (Student)
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|regex:/^03\d{9}$/',
            'crn' => 'required|regex:/^\d+$/|unique:users,crn',
            'ca_level' => 'required|in:PRC,CAF,Final',
            'gender' => 'required|in:male,female',
            'password' => 'required|string|min:8',
            'password_confirmation' => 'required|same:password',
            'plan_id' => 'nullable|exists:subscription_plans,id',
        ]);




        // Determine trial end date based on plan or default
        $trialEndsAt = now()->addDays(7);
        $plan = null;

        if ($request->plan_id) {
            $plan = \App\Models\SubscriptionPlan::find($request->plan_id);
            if ($plan && $plan->free_trial_days > 0) {
                $trialEndsAt = now()->addDays($plan->free_trial_days);
            }
        }

        // Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'crn' => $request->crn,
            'role' => 'student',
            'ca_level' => $request->ca_level,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
            'is_active' => true,
            'trial_used' => true,
            'trial_started_at' => now(),
            'trial_ends_at' => $trialEndsAt,
        ]);

        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'student', 'guard_name' => 'web']);
        $user->assignRole('student');

        // Create subscription if plan selected
        if ($plan) {
            $status = 'pending';
            $expiresAt = null;
            $startedAt = null;

            if ($plan->free_trial_days > 0) {
                $status = 'active';
                $startedAt = now();
                $expiresAt = now()->addDays($plan->free_trial_days);
            } elseif ($plan->price == 0) {
                $status = 'active';
                $startedAt = now();
                $expiresAt = now()->addDays($plan->duration_days);
            }

            \App\Models\UserSubscription::create([
                'user_id' => $user->id,
                'subscription_plan_id' => $plan->id,
                'status' => $status,
                'started_at' => $startedAt,
                'expires_at' => $expiresAt,
                'auto_renew' => false,
                'amount_paid' => 0,
                'renewal_attempts' => 0,
            ]);
        }



        // Create token
        $tokenResult = $user->createToken('auth-token');
        $token = $tokenResult->plainTextToken;
 
        // Save metadata
        $tokenResult->accessToken->forceFill([
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ])->save();

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'crn' => $user->crn,
                'role' => $user->role,
                'ca_level' => $user->ca_level,
                'is_active' => $user->is_active,
                'trial_used' => $user->trial_used,
                'trial_started_at' => $user->trial_started_at,
                'trial_ends_at' => $user->trial_ends_at,
                'isApproved' => true,
                'role' => 'student',
                'library_id' => null,
                'active_subscription' => $user->activeSubscription()->with('subscriptionPlan')->first(),
                'pending_order' => $user->pendingOrder()->with('plan')->first(),
                'profile_picture' => $user->profile_picture,
                'gender' => $user->gender,
            ],
            'token' => $token,
            'message' => 'Registration successful! Welcome to SMART LIB.'
        ], 201);
    }

    /**
     * Send OTP for registration
     */
    public function sendOTP(Request $request)
    {
        $request->validate([
            'phone' => 'required|regex:/^03\d{9}$/',
            'crn' => 'required|regex:/^\d+$/',
        ]);


        // Check if user already exists
        if (User::where('crn', $request->crn)->exists()) {
            throw ValidationException::withMessages([
                'crn' => ['This CRN is already registered.'],
            ]);
        }

        if (User::where('phone', $request->phone)->exists()) {
            throw ValidationException::withMessages([
                'phone' => ['This phone number is already registered.'],
            ]);
        }

        // Generate 4-digit OTP
        $otp = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);

        // Store OTP in database
        DB::table('otp_verifications')->insert([
            'phone' => $request->phone,
            'crn' => $request->crn,
            'otp' => $otp,
            'verified' => false,
            'expires_at' => now()->addMinutes(10),
            'attempts' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // In production, send OTP via SMS
        // For demo, return OTP in response (REMOVE IN PRODUCTION!)
        return response()->json([
            'message' => 'OTP sent successfully to ' . $request->phone,
            'otp' => $otp, // REMOVE IN PRODUCTION!
            'expires_in' => 600, // 10 minutes
        ]);
    }

    /**
     * Get current authenticated user
     */
    public function me(Request $request)
    {
        $user = $request->user();
        
        if (!$user->is_active || $user->status !== 'approved') {
            $user->tokens()->delete();
            return response()->json(['message' => 'Your account is inactive.'], 403);
        }
        
        if ($user->role === 'librarian' && !$user->library_id) {
            $user->tokens()->delete();
            return response()->json(['message' => 'No library has been assigned to your account.'], 403);
        }

        $user->load(['userSubscriptions' => function($query) {
            $query->where('status', 'active')->latest();
        }, 'libraries', 'library']);

        $libraryId = $user->library_id;

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'crn' => $user->crn,
            'role' => $user->role,
            'ca_level' => $user->ca_level,
            'is_active' => $user->is_active,
            'trial_used' => $user->trial_used,
            'trial_started_at' => $user->trial_started_at,
            'trial_ends_at' => $user->trial_ends_at,
            'created_at' => $user->created_at,
            'isApproved' => $user->is_active,
            'role' => $user->role,
            'library_id' => $libraryId,
            'library' => $user->library,
            'active_subscription' => $user->activeSubscription()->with('subscriptionPlan')->first(),
            'pending_order' => $user->pendingOrder()->with('plan')->first(),
            'profile_picture' => $user->profile_picture,
            'gender' => $user->gender,
        ]);
    }

    /**
     * Logout user
     */
    public function logout(Request $request)
    {
        // Revoke current token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    /**
     * Logout from all devices
     */
    public function logoutAll(Request $request)
    {
        // Revoke all tokens
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out from all devices successfully'
        ]);
    }

    /**
     * Get all active sessions (tokens) for the current user
     */
    public function sessions(Request $request)
    {
        $sessions = $request->user()->tokens()->get()->map(function($token) use ($request) {
            return [
                'id' => $token->id,
                'name' => $token->name,
                'ip_address' => $token->ip_address,
                'user_agent' => $token->user_agent,
                'last_used_at' => $token->last_used_at,
                'created_at' => $token->created_at,
                'is_current' => $token->id === $request->user()->currentAccessToken()->id,
            ];
        });

        return response()->json($sessions);
    }

    /**
     * Revoke a specific session
     */
    public function revokeSession(Request $request, $id)
    {
        $request->user()->tokens()->where('id', $id)->delete();
        return response()->json(['message' => 'Session revoked successfully']);
    }

    /**
     * Check field uniqueness
     */
    public function checkUniqueness(Request $request)
    {
        $request->validate([
            'field' => 'required|string|in:email,crn',
            'value' => 'required',
        ]);

        $field = $request->field;
        $value = trim($request->value);

        if ($field === 'email') {
            $exists = User::withTrashed()->where('email', $value)->exists();
        } else {
            $exists = User::withTrashed()->where($field, $value)->exists();
        }
        
        return response()->json([
            'exists' => $exists,
            'message' => $exists ? "This " . strtoupper($field === 'crn' ? 'CRN' : $field) . " is already registered." : null,
            'debug' => [
                'field' => $field,
                'value' => $value,
                'count' => User::where($field, $value)->count()
            ]
        ]);
    }
}
