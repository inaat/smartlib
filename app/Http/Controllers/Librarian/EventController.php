<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Library;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index()
    {
        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            $user = Auth::user();
            $query = Event::with('registrations.user', 'library')->withCount('registrations');

            if (request()->filled('library_id')) {
                $query->where('library_id', request()->library_id);
            } elseif (!in_array($user->role, ['super_admin', 'admin', 'owner']) && $user->library_id) {
                $query->where('library_id', $user->library_id);
            }

            $events = $query->latest()->get();
            
            $events->each(function($event) {
                $event->registered_count = $event->registrations_count;
            });

            return response()->json($events);
        }

        $library = Auth::user()->library;
        $events = $library ? $library->events()->latest()->paginate(20) : Event::latest()->paginate(20);

        return view('librarian.events.index', compact('events', 'library'));
    }

    public function create()
    {
        $library = Auth::user()->library;
        return view('librarian.events.create', compact('library'));
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $library = $user->library;

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'venue' => 'nullable|string',
            'type' => 'nullable|string',
            'is_paid' => 'nullable|boolean',
            'price' => 'nullable|numeric|min:0',
            'capacity' => 'nullable|integer|min:1',
            'is_active' => 'nullable|boolean',
            'library_id' => 'nullable|exists:libraries,id',
        ]);

        $validated['library_id'] = $request->library_id ?? ($library ? $library->id : null);
        
        if (!$validated['library_id']) {
            return response()->json(['message' => 'Library ID is required'], 422);
        }
        $validated['registered'] = 0;
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $event = Event::create($validated);

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Event created successfully',
                'data' => $event->load('library')
            ], 201);
        }

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event created successfully');
    }

    public function show(Event $event)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($event->library_id !== $user->library_id) abort(403);
        }

        $event->load('registrations.user');

        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json($event);
        }

        return view('librarian.events.show', compact('event'));
    }


    public function edit(Event $event)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($event->library_id !== $user->library_id) abort(403);
        }

        return view('librarian.events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($event->library_id !== $user->library_id) abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'venue' => 'nullable|string',
            'type' => 'nullable|string',
            'is_paid' => 'nullable|boolean',
            'price' => 'nullable|numeric|min:0',
            'capacity' => 'nullable|integer|min:1',
            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $event->update($validated);

        // Return JSON for API requests
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Event updated successfully',
                'data' => $event->fresh()->load('library')
            ]);
        }

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event updated successfully');
    }

    public function destroy(Event $event)
    {
        $user = Auth::user();
        if (!in_array($user->role, ['super_admin', 'admin', 'owner'])) {
            if ($event->library_id !== $user->library_id) abort(403);
        }

        $event->delete();

        // Return JSON for API requests
        if (request()->expectsJson() || request()->is('api/*')) {
            return response()->json([
                'success' => true,
                'message' => 'Event deleted successfully'
            ]);
        }

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event deleted successfully');
    }
}
