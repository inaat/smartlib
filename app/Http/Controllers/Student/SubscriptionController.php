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

        // Check if user already has an active subscription
        $activeSubscription = $user->activeSubscription;
        if ($activeSubscription) {
            return response()->json([
                'message' => 'You already have an active subscription.'
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
}
