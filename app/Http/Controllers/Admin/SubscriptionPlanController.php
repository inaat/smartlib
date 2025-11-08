<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscriptionPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = SubscriptionPlan::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $plans
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1',
            'seat_bookings_limit' => 'nullable|integer|min:0',
            'book_reservations_limit' => 'nullable|integer|min:0',
            'digital_books_access' => 'boolean',
            'priority_booking' => 'boolean',
            'event_discounts' => 'nullable|integer|min:0|max:100',
            'features' => 'nullable|array',
            'features.*' => 'string',
            'status' => 'required|in:active,inactive',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $plan = SubscriptionPlan::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Subscription plan created successfully',
            'data' => $plan
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $plan = SubscriptionPlan::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $plan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $plan = SubscriptionPlan::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric|min:0',
            'duration_days' => 'sometimes|required|integer|min:1',
            'seat_bookings_limit' => 'nullable|integer|min:0',
            'book_reservations_limit' => 'nullable|integer|min:0',
            'digital_books_access' => 'boolean',
            'priority_booking' => 'boolean',
            'event_discounts' => 'nullable|integer|min:0|max:100',
            'features' => 'nullable|array',
            'features.*' => 'string',
            'status' => 'sometimes|required|in:active,inactive',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $plan->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Subscription plan updated successfully',
            'data' => $plan->fresh()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $plan = SubscriptionPlan::findOrFail($id);

        // Check if plan has active subscriptions
        if ($plan->userSubscriptions()->where('status', 'active')->count() > 0) {
            return response()->json([
                'success' => false,
                'message' => 'Cannot delete plan with active subscriptions'
            ], 422);
        }

        $plan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Subscription plan deleted successfully'
        ]);
    }
}
