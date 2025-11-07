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
            ->where('start_time', '>=', now());

        // Filter by library
        if ($request->has('library_id')) {
            $query->where('library_id', $request->library_id);
        }

        $events = $query->orderBy('start_time')->get();

        // Add registration count
        $events->each(function($event) {
            $event->registered = $event->registrations()->count();
        });

        return response()->json($events);
    }

    public function show($id)
    {
        $event = Event::with('library')->findOrFail($id);
        $event->registered = $event->registrations()->count();

        return response()->json($event);
    }

    public function register(Request $request, $id)
    {
        $event = Event::findOrFail($id);

        // Check if already registered
        $existingRegistration = EventRegistration::where('user_id', $request->user()->id)
            ->where('event_id', $event->id)
            ->first();

        if ($existingRegistration) {
            return response()->json(['message' => 'Already registered for this event'], 400);
        }

        // Check capacity
        if ($event->capacity && $event->registrations()->count() >= $event->capacity) {
            return response()->json(['message' => 'Event is full'], 400);
        }

        $registration = EventRegistration::create([
            'user_id' => $request->user()->id,
            'event_id' => $event->id,
            'registered_at' => now(),
            'amount_paid' => $event->is_free ? 0 : $event->price,
        ]);

        return response()->json($registration, 201);
    }
}
