<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user()->load(['library', 'activeSubscription.subscriptionPlan', 'loyaltyTransactions']);
        return response()->json($user);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
            'phone' => 'sometimes|nullable|string',
            'password' => 'sometimes|nullable|string|min:8',
            'profile_picture' => 'sometimes|image|max:2048', // Max 2MB
        ]);

        $data = $request->only(['name', 'email', 'phone']);

        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        if ($request->hasFile('profile_picture')) {
            // Delete old profile picture if exists
            if ($user->profile_picture && \Storage::disk('public')->exists($user->profile_picture)) {
                \Storage::disk('public')->delete($user->profile_picture);
            }

            $path = $request->file('profile_picture')->store('profile-pictures', 'public');
            $data['profile_picture'] = $path;
        }

        $user->update($data);

        return response()->json($user);
    }

    public function notifications(Request $request)
    {
        $notifications = Notification::where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($notifications);
    }

    public function markNotificationRead(Request $request, $id)
    {
        $notification = Notification::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $notification->update(['is_read' => true]);

        return response()->json(['success' => true]);
    }

    public function markAllNotificationsRead(Request $request)
    {
        Notification::where('user_id', $request->user()->id)
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json(['success' => true]);
    }

    public function clearAllNotifications(Request $request)
    {
        Notification::where('user_id', $request->user()->id)->delete();

        return response()->json(['success' => true]);
    }

    public function destroyNotification(Request $request, $id)
    {
        $notification = Notification::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $notification->delete();

        return response()->json(['success' => true]);
    }

    public function loyaltyTransactions(Request $request)
    {
        $user = $request->user();
        $transactions = $user->loyaltyTransactions()
            ->orderBy('created_at', 'desc')
            ->limit(20)
            ->get();

        $totalPoints = $user->loyaltyTransactions()->sum('points');

        $tierInfo = $this->calculateTierInfo($totalPoints);

        return response()->json([
            'total_points' => $totalPoints,
            'current_tier' => $tierInfo['current_tier'],
            'next_tier' => $tierInfo['next_tier'],
            'points_to_next_tier' => $tierInfo['points_to_next_tier'],
            'progress' => $tierInfo['progress'],
            'transactions' => $transactions
        ]);
    }

    private function calculateTierInfo($points)
    {
        $tiers = [
            ['name' => 'Bronze', 'min' => 0, 'max' => 99],
            ['name' => 'Silver', 'min' => 100, 'max' => 499],
            ['name' => 'Gold', 'min' => 500, 'max' => 999],
            ['name' => 'Platinum', 'min' => 1000, 'max' => PHP_INT_MAX],
        ];

        $currentTier = $tiers[0];
        $nextTier = null;

        foreach ($tiers as $index => $tier) {
            if ($points >= $tier['min'] && $points <= $tier['max']) {
                $currentTier = $tier;
                $nextTier = $tiers[$index + 1] ?? null;
                break;
            }
        }
        
        // Fallback for points > last max (though PHP_INT_MAX handles it)
        if ($points > $tiers[count($tiers)-1]['max']) {
             $currentTier = $tiers[count($tiers)-1];
        }

        $pointsToNextTier = 0;
        $progress = 100;

        if ($nextTier) {
            $pointsToNextTier = $nextTier['min'] - $points;
            $range = $nextTier['min'] - $currentTier['min'];
            $progress = 0;
            if ($range > 0) {
                $progress = round((($points - $currentTier['min']) / $range) * 100);
            }
        }

        return [
            'current_tier' => $currentTier['name'],
            'next_tier' => $nextTier ? $nextTier['name'] : null,
            'points_to_next_tier' => $pointsToNextTier,
            'progress' => $progress
        ];
    }
}
