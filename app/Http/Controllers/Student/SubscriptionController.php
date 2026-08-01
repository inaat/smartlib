<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    public function index()
    {
        $plans = SubscriptionPlan::where('status', 'active')
            ->orderBy('price', 'asc')
            ->get();

        return response()->json($plans);
    }

    public function store(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:subscription_plans,id',
        ]);

        $user = $request->user();
        $plan = SubscriptionPlan::findOrFail($request->plan_id);

        // Check if user already has an active subscription of the SAME plan
        $activeSubscription = $user->active_subscription;
        if ($activeSubscription && $activeSubscription->subscription_plan_id == $plan->id) {
            return response()->json([
                'message' => 'You already have an active subscription for this plan.'
            ], 400);
        }

        // Check if user already has a pending order
        $pendingOrder = \App\Models\Order::where('user_id', $user->id)
            ->where('status', 'pending')
            ->first();
        if ($pendingOrder) {
            return response()->json([
                'message' => 'You already have a pending subscription request. Please wait for admin approval.'
            ], 400);
        }


        // Create new order
        $order = \App\Models\Order::create([
            'user_id' => $user->id,
            'plan_id' => $plan->id,
            'amount' => $plan->price,
            'status' => 'pending',
            'payment_method' => $request->payment_method ?? 'manual',
            'transaction_id' => $request->transaction_id,
            'notes' => 'Subscription request for ' . $plan->name,
        ]);

        return response()->json([
            'message' => 'Subscription request submitted successfully! Please wait for admin approval.',
            'order' => $order->load('plan')
        ]);
    }

    public function history(Request $request)
    {
        $user = $request->user();

        // Get orders / subscription buy requests
        $orders = \App\Models\Order::with('plan')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        // Get subscription history (active & past subscriptions)
        $subscriptions = UserSubscription::with('subscriptionPlan')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'orders' => $orders,
            'subscriptions' => $subscriptions,
        ]);
    }
}
