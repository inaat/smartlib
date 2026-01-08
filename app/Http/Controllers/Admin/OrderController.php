<?php

namespace App\Http\Controllers\Admin;

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

        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $orders = $query->latest()->paginate(15);

        return response()->json($orders);
    }

    public function approve($id)
    {
        $order = Order::findOrFail($id);

        if ($order->status !== 'pending') {
            return response()->json(['message' => 'Order is already ' . $order->status], 400);
        }

        DB::beginTransaction();
        try {
            $order->update(['status' => 'approved']);

            // If it's a subscription order, create/activate the subscription
            if ($order->plan_id) {
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
            return response()->json(['message' => 'Order approved successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to approve order: ' . $e->getMessage()], 500);
        }
    }

    public function reject(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        if ($order->status !== 'pending') {
            return response()->json(['message' => 'Order is already ' . $order->status], 400);
        }

        $order->update([
            'status' => 'rejected',
            'notes' => $request->notes ?? $order->notes
        ]);

        return response()->json(['message' => 'Order rejected successfully']);
    }

    public function subscriptions(Request $request)
    {
        $query = UserSubscription::with(['user', 'subscriptionPlan']);

        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $subscriptions = $query->latest()->paginate(15);

        return response()->json($subscriptions);
    }
}
