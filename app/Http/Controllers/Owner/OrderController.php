<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $query = Order::with(['user', 'plan']);
        if ($request->has('status') && $request->status !== 'all') $query->where('status', $request->status);
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%");
            });
        }
        return response()->json($query->latest()->paginate(15));
    }

    public function approve($id)
    {
        $order = Order::findOrFail($id);
        if ($order->status !== 'pending') return response()->json(['message' => 'Order is already ' . $order->status], 400);

        DB::beginTransaction();
        try {
            $order->update(['status' => 'approved']);
            if ($order->plan_id) {
                // Deactivate existing active subscriptions
                UserSubscription::where('user_id', $order->user_id)
                    ->where('status', 'active')
                    ->update(['status' => 'inactive']);

                $plan = $order->plan;
                UserSubscription::create([
                    'user_id' => $order->user_id,
                    'subscription_plan_id' => $order->plan_id,
                    'started_at' => now(),
                    'expires_at' => now()->addDays($plan->duration_days),
                    'status' => 'active',
                    'amount_paid' => $order->amount,
                    'payment_method' => $order->payment_method,
                    'transaction_id' => $order->transaction_id,
                    'auto_renew' => false,
                ]);
            }
            DB::commit();

            \App\Models\Notification::send(
                $order->user_id,
                'subscription',
                'Subscription Approved',
                "Your subscription to {$plan->name} has been approved. Enjoy your benefits!",
                $order
            );

            return response()->json(['message' => 'Order approved successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to approve order: ' . $e->getMessage()], 500);
        }
    }


    public function reject(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        if ($order->status !== 'pending') return response()->json(['message' => 'Order is already ' . $order->status], 400);
        $order->update(['status' => 'rejected', 'notes' => $request->notes ?? $order->notes]);

        \App\Models\Notification::send(
            $order->user_id,
            'subscription',
            'Subscription Rejected',
            "Your subscription request has been rejected. Reason: " . ($request->notes ?? 'Not specified'),
            $order
        );

        return response()->json(['message' => 'Order rejected successfully']);
    }

    public function subscriptions(Request $request)
    {
        $query = UserSubscription::with(['user', 'subscriptionPlan']);
        if ($request->has('status') && $request->status !== 'all') $query->where('status', $request->status);
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%");
            });
        }
        return response()->json($query->latest()->paginate(15));
    }
}
