<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index()
    {
        $plans = SubscriptionPlan::withCount('subscriptions')->latest()->get();
        return view('admin.subscriptions.index', compact('plans'));
    }

    public function create()
    {
        return view('admin.subscriptions.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:subscription_plans',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1',
            'seat_bookings_limit' => 'nullable|integer|min:0',
            'daily_seat_bookings_limit' => 'nullable|integer|min:0',
            'monthly_seat_bookings_limit' => 'nullable|integer|min:0',
            'libraries_access_limit' => 'nullable|integer|min:0',
            'books_access_limit' => 'nullable|integer|min:0',
            'events_joining_limit' => 'nullable|integer|min:0',
            'advance_booking_days' => 'nullable|integer|min:-1',
            'is_active' => 'boolean',
        ]);

        SubscriptionPlan::create($validated);

        return redirect()->route('admin.subscriptions.index')
            ->with('success', 'Subscription plan created successfully');
    }

    public function edit(SubscriptionPlan $subscription)
    {
        return view('admin.subscriptions.edit', compact('subscription'));
    }

    public function update(Request $request, SubscriptionPlan $subscription)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:subscription_plans,slug,' . $subscription->id,
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1',
            'seat_bookings_limit' => 'nullable|integer|min:0',
            'daily_seat_bookings_limit' => 'nullable|integer|min:0',
            'monthly_seat_bookings_limit' => 'nullable|integer|min:0',
            'libraries_access_limit' => 'nullable|integer|min:0',
            'books_access_limit' => 'nullable|integer|min:0',
            'events_joining_limit' => 'nullable|integer|min:0',
            'advance_booking_days' => 'nullable|integer|min:-1',
            'is_active' => 'boolean',
        ]);

        $subscription->update($validated);

        return redirect()->route('admin.subscriptions.index')
            ->with('success', 'Subscription plan updated successfully');
    }

    public function destroy(SubscriptionPlan $subscription)
    {
        $subscription->delete();
        return redirect()->route('admin.subscriptions.index')
            ->with('success', 'Subscription plan deleted successfully');
    }
}
