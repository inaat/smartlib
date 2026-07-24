<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventRegistration;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::where('is_active', true)
            ->where(function ($q) {
                $q->where('date', '>', now()->toDateString())
                  ->orWhere(function ($q2) {
                      $q2->where('date', '=', now()->toDateString())
                         ->where('start_time', '>=', now()->toTimeString());
                  });
            });

        // Filter by library
        if ($request->has('library_id')) {
            $query->where('library_id', $request->library_id);
        }

        $events = $query->with('library')->orderBy('date')->orderBy('start_time')->get();

        // Add registration count and check if user is registered
        $user = $request->user();
        $events->each(function($event) use ($user) {
            $event->registered_count = $event->registrations()->count();
            $reg = $event->registrations()->where('user_id', $user->id)->first();
            $event->is_registered = $reg ? true : false;
            $event->seat_number = $reg ? $event->registrations()->where('id', '<=', $reg->id)->count() : null;
        });

        return response()->json($events);
    }

    public function show($id)
    {
        $event = Event::with('library')->findOrFail($id);
        $user = request()->user();
        $event->registered_count = $event->registrations()->count();
        $reg = $event->registrations()->where('user_id', $user->id)->first();
        $event->is_registered = $reg ? true : false;
        $event->seat_number = $reg ? $event->registrations()->where('id', '<=', $reg->id)->count() : null;

        return response()->json($event);
    }

    public function register(Request $request, $id)
    {
        $user = $request->user();
        $event = Event::with('library')->findOrFail($id);

        // Load active subscription with plan details
        $activeSubscription = $user->activeSubscription()->with('subscriptionPlan')->first();

        if (!$activeSubscription) {
            return response()->json(['message' => 'You need an active subscription to register for events'], 400);
        }

        $plan = $activeSubscription->subscriptionPlan;

        // Check events joining limit
        $eventsLimit = $plan->events_joining_limit ?? -1;
        if ($eventsLimit === 0) {
            $eventsLimit = -1;
        }

        if ($eventsLimit !== -1) {
            // Count total event registrations in the current subscription period
            $totalPeriodRegistrations = EventRegistration::where('user_id', $user->id)
                ->where('registered_at', '>=', $activeSubscription->started_at)
                ->count();

            if ($totalPeriodRegistrations >= $eventsLimit) {
                return response()->json([
                    'message' => "You have reached your events joining limit for this subscription period ({$eventsLimit}).",
                    'limit' => $eventsLimit,
                    'current' => $totalPeriodRegistrations
                ], 400);
            }
        }

        // Check if already registered
        $existingRegistration = EventRegistration::where('user_id', $user->id)
            ->where('event_id', $event->id)
            ->first();

        if ($existingRegistration) {
            return response()->json(['message' => 'Already registered for this event'], 400);
        }

        // Check capacity
        if ($event->capacity && $event->registrations()->count() >= $event->capacity) {
            return response()->json(['message' => 'Event registration seat is full'], 400);
        }

        // Check registration deadline (registration auto closed if it is event date or later)
        if (now()->toDateString() >= $event->date) {
            return response()->json(['message' => 'Registration closed. You can only register before the event date.'], 400);
        }

        $registration = EventRegistration::create([
            'user_id' => $user->id,
            'event_id' => $event->id,
            'registered_at' => now(),
            'amount_paid' => $event->is_paid ? $event->price : 0,
        ]);

        \App\Models\Notification::send(
            $user->id,
            'event',
            'Event Registered!',
            "You have successfully registered for the event: {$event->title}.",
            $event
        );

        return response()->json($registration, 201);
    }
}
