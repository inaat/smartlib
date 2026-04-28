<?php

namespace App\Http\Controllers;

use App\Models\SupportTicket;
use App\Models\SupportMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportTicketController extends Controller
{
    /**
     * Display a listing of tickets.
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = SupportTicket::with(['user', 'library', 'messages.user']);

        if ($user->role === 'student') {
            $query->where('user_id', $user->id);
        } elseif ($user->role === 'librarian') {
            // Get library tickets for the librarian's library
            $query->where('library_id', $user->library_id)
                  ->where('ticket_type', 'library');
        } elseif ($user->role === 'super_admin') {
            $query->where('ticket_type', 'system');
        }

        $tickets = $query->latest()->get();
        return response()->json($tickets);
    }

    /**
     * Store a newly created ticket in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'ticket_type' => 'required|in:library,system',
            'library_id' => 'required_if:ticket_type,library|nullable|exists:libraries,id',
            'priority' => 'required|in:low,medium,high,urgent',
        ]);

        $user = Auth::user();

        $ticket = SupportTicket::create([
            'user_id' => $user->id,
            'library_id' => $request->ticket_type === 'library' ? $request->library_id : null,
            'ticket_type' => $request->ticket_type,
            'subject' => $request->subject,
            'priority' => $request->priority,
            'status' => 'open',
        ]);

        SupportMessage::create([
            'support_ticket_id' => $ticket->id,
            'user_id' => $user->id,
            'message' => $request->message,
        ]);

        return response()->json($ticket->load('messages.user'));
    }

    /**
     * Display the specified ticket.
     */
    public function show(SupportTicket $supportTicket)
    {
        $user = Auth::user();

        // Check permission
        if ($user->role === 'student' && $supportTicket->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'librarian' && $supportTicket->library_id !== $user->library_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'super_admin' && $supportTicket->ticket_type !== 'system') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($supportTicket->load(['user', 'library', 'messages.user']));
    }

    /**
     * Add a message to a ticket.
     */
    public function sendMessage(Request $request, SupportTicket $supportTicket)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        $user = Auth::user();

        // Check permission
        if ($user->role === 'student' && $supportTicket->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'librarian' && $supportTicket->library_id !== $user->library_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'super_admin' && $supportTicket->ticket_type !== 'system') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $message = SupportMessage::create([
            'support_ticket_id' => $supportTicket->id,
            'user_id' => $user->id,
            'message' => $request->message,
        ]);

        // If librarian or admin responds, maybe mark as in-progress
        if ($user->role !== 'student' && $supportTicket->status === 'open') {
            $supportTicket->update(['status' => 'in_progress']);
        }

        return response()->json($message->load('user'));
    }

    /**
     * Update ticket status.
     */
    public function updateStatus(Request $request, SupportTicket $supportTicket)
    {
        $request->validate([
            'status' => 'required|in:open,in_progress,resolved,closed',
        ]);

        $user = Auth::user();
        
        // Only librarian or admin can change status of any ticket in their scope
        // Student can potentially close their own ticket
        if ($user->role === 'student' && $supportTicket->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'librarian' && $supportTicket->library_id !== $user->library_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'super_admin' && $supportTicket->ticket_type !== 'system') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $supportTicket->update(['status' => $request->status]);

        return response()->json($supportTicket);
    }
}
