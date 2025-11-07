<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index()
    {
        // Check if API request
        if (request()->expectsJson() || request()->is('api/*')) {
            // For API, return all events (admins see all, librarians see their library's events)
            $user = Auth::user();
            if ($user->user_type === 'super_admin') {
                $events = Event::latest()->get();
            } elseif ($user->library_id) {
                $events = Event::where('library_id', $user->library_id)->latest()->get();
            } else {
                $events = Event::latest()->get();
            }
            return response()->json($events);
        }

        $library = Auth::user()->library;
        $events = $library->events()->latest()->paginate(20);

        return view('librarian.events.index', compact('events', 'library'));
    }

    public function create()
    {
        $library = Auth::user()->library;
        return view('librarian.events.create', compact('library'));
    }

    public function store(Request $request)
    {
        $library = Auth::user()->library;

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'start_time' => 'required|date|after:now',
            'end_time' => 'required|date|after:start_time',
            'location' => 'nullable|string',
            'is_free' => 'required|boolean',
            'price' => 'required_if:is_free,0|nullable|numeric|min:0',
            'capacity' => 'nullable|integer|min:1',
        ]);

        $validated['library_id'] = $library->id;
        $validated['registered_count'] = 0;

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        Event::create($validated);

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event created successfully');
    }

    public function show(Event $event)
    {
        if ($event->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $event->load('registrations.user');
        return view('librarian.events.show', compact('event'));
    }

    public function edit(Event $event)
    {
        if ($event->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        return view('librarian.events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        if ($event->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'location' => 'nullable|string',
            'is_free' => 'required|boolean',
            'price' => 'required_if:is_free,0|nullable|numeric|min:0',
            'capacity' => 'nullable|integer|min:1',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $event->update($validated);

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event updated successfully');
    }

    public function destroy(Event $event)
    {
        if ($event->library_id !== Auth::user()->library_id) {
            abort(403);
        }

        $event->delete();

        return redirect()->route('librarian.events.index')
            ->with('success', 'Event deleted successfully');
    }
}
