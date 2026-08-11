<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\SeatBooking;
use App\Models\Seat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        SeatBooking::cancelExpiredBookings();
        $user = Auth::user();
        $library = $user->library;

        $query = SeatBooking::with(['user', 'seat.floor']);

        if ($user->role === 'super_admin') {
            $myLibraryIds = \App\Models\Library::where('created_by', $user->id)->pluck('id');
            if ($request->has('library_id')) {
                // Only allow filtering by a library they own
                if ($myLibraryIds->contains($request->library_id)) {
                    $query->where('library_id', $request->library_id);
                } else {
                    $query->whereIn('library_id', $myLibraryIds);
                }
            } else {
                $query->whereIn('library_id', $myLibraryIds);
            }
        } else {
            if (!$library) {
                return response()->json(['message' => 'No library assigned to this librarian'], 404);
            }
            $query->where('library_id', $library->id);
        }

        // Time Frame Filter
        $timeRange = $request->input('time_range', 'today');
        if ($timeRange === 'today') {
            $query->whereBetween('booking_time', [Carbon::today()->startOfDay(), Carbon::today()->endOfDay()]);
        } elseif ($timeRange === 'yesterday') {
            $query->whereBetween('booking_time', [Carbon::yesterday()->startOfDay(), Carbon::yesterday()->endOfDay()]);
        } elseif ($timeRange === 'this_month') {
            $query->whereBetween('booking_time', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]);
        } elseif ($timeRange === 'last_month') {
            $query->whereBetween('booking_time', [Carbon::now()->subMonth()->startOfMonth(), Carbon::now()->subMonth()->endOfMonth()]);
        } elseif ($timeRange === 'this_year') {
            $query->whereBetween('booking_time', [Carbon::now()->startOfYear(), Carbon::now()->endOfYear()]);
        } elseif ($timeRange === 'custom' || ($request->has('from_date') && $request->has('to_date'))) {
            if ($request->filled('from_date') && $request->filled('to_date')) {
                $query->whereBetween('booking_time', [$request->from_date . ' 00:00:00', $request->to_date . ' 23:59:59']);
            }
        }

        // Filter by status if provided
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Search by student name or CRN
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('crn', 'like', "%{$search}%");
            });
        }

        $perPage = $request->input('per_page', 20);
        if ($perPage === 'all' || $perPage == -1) {
            $perPage = 999999;
        }
        $bookings = $query->latest('booking_time')->paginate((int)$perPage);

        $bookings->getCollection()->transform(function ($booking) {
            return [
                'id' => $booking->id,
                'user' => $booking->user ? [
                    'id' => $booking->user->id,
                    'name' => $booking->user->name,
                    'email' => $booking->user->email,
                    'crn' => $booking->user->crn,
                    'profile_picture' => $booking->user->profile_picture,
                ] : null,
                'seat' => $booking->seat ? [
                    'id' => $booking->seat->id,
                    'seat_number' => $booking->seat->seat_number,
                    'floor' => $booking->seat->floor ? [
                        'id' => $booking->seat->floor->id,
                        'name' => $booking->seat->floor->name,
                    ] : null,
                ] : null,
                'booking_time' => $booking->booking_time,
                'check_in_time' => $booking->check_in_time,
                'check_out_time' => $booking->check_out_time,
                'scheduled_end_time' => $booking->scheduled_end_time,
                'status' => $booking->status,
            ];
        });

        return response()->json($bookings);
    }

    public function stats(Request $request)
    {
        SeatBooking::cancelExpiredBookings();
        $user = Auth::user();
        $library = $user->library;

        $baseQuery = SeatBooking::query();

        if ($user->role === 'super_admin') {
            $myLibraryIds = \App\Models\Library::where('created_by', $user->id)->pluck('id');
            $libraryId = $request->library_id;
            if ($libraryId && $myLibraryIds->contains($libraryId)) {
                $baseQuery->where('library_id', $libraryId);
            } else {
                $baseQuery->whereIn('library_id', $myLibraryIds);
            }
        } else {
            $libraryId = $request->library_id ?? ($library ? $library->id : null);
            if (!$libraryId) {
                return response()->json(['message' => 'No library assigned to this librarian'], 403);
            }
            $baseQuery->where('library_id', $libraryId);
        }

        $stats = [
            'all'       => (clone $baseQuery)->count(),
            'active'    => (clone $baseQuery)->where('status', 'checked_in')->count(),
            'pending'   => (clone $baseQuery)->where('status', 'booked')->count(),
            'completed' => (clone $baseQuery)->where('status', 'checked_out')->count(),
            'cancelled' => (clone $baseQuery)->where('status', 'cancelled')->count(),
        ];

        return response()->json($stats);
    }

    public function checkIn($id)
    {
        SeatBooking::cancelExpiredBookings();
        $booking = SeatBooking::findOrFail($id);
        
        if ($booking->status !== 'booked') {
            return response()->json(['message' => 'Booking is not in a state that can be checked in'], 400);
        }

        // Enforce 15-minute check-in window expiration
        if ($booking->booking_time->copy()->addMinutes(15)->isPast()) {
            $booking->update(['status' => 'cancelled']);
            $booking->seat->update(['status' => 'available']);
            return response()->json(['message' => 'Check-in window has expired. This booking has been cancelled.'], 400);
        }

        $now = now();
        $durationMinutes = Carbon::parse($booking->booking_time)->diffInMinutes(Carbon::parse($booking->scheduled_end_time), true);

        $booking->update([
            'status' => 'checked_in',
            'check_in_time' => $now,
            'booking_time' => $now,
            'scheduled_end_time' => $now->copy()->addMinutes($durationMinutes),
        ]);

        // Update seat status
        $booking->seat->update(['status' => 'occupied']);

        // Create Attendance record
        \App\Models\Attendance::firstOrCreate([
            'seat_booking_id' => $booking->id,
        ], [
            'user_id' => $booking->user_id,
            'library_id' => $booking->library_id,
            'date' => $now->toDateString(),
            'check_in_time' => $now->toTimeString(),
        ]);

        // Update student's study streak
        if ($booking->user) {
            $booking->user->calculateStudyStreak();
        }

        return response()->json([
            'message' => 'Checked in successfully',
            'booking' => [
                'id' => $booking->id,
                'status' => $booking->status,
                'check_in_time' => $booking->check_in_time,
            ]
        ]);
    }

    public function checkOut($id)
    {
        $booking = SeatBooking::findOrFail($id);
        
        if ($booking->status !== 'checked_in') {
            return response()->json(['message' => 'Booking is not checked in'], 400);
        }

        $now = now();
        $booking->update([
            'status' => 'checked_out',
            'check_out_time' => $now,
        ]);

        // Update seat status
        $booking->seat->update(['status' => 'available']);

        // Calculate total minutes
        if ($booking->check_in_time) {
            $booking->total_minutes = $now->diffInMinutes($booking->check_in_time, true);
            $booking->save();
        }

        // Update Attendance record
        $attendance = \App\Models\Attendance::where('seat_booking_id', $booking->id)->first();
        if ($attendance) {
            $attendance->update([
                'check_out_time' => $now->toTimeString(),
                'total_minutes' => $booking->total_minutes,
            ]);
        }

        return response()->json([
            'message' => 'Checked out successfully',
            'booking' => [
                'id' => $booking->id,
                'status' => $booking->status,
                'check_out_time' => $booking->check_out_time,
                'total_minutes' => $booking->total_minutes,
            ]
        ]);
    }

    public function cancel($id)
    {
        $booking = SeatBooking::findOrFail($id);
        
        if (!in_array($booking->status, ['booked', 'active'])) {
            return response()->json(['message' => 'Booking cannot be cancelled'], 400);
        }

        $booking->update(['status' => 'cancelled']);
        $booking->seat->update(['status' => 'available']);

        return response()->json(['message' => 'Booking cancelled successfully']);
    }

    public function getOverrideRequests(Request $request)
    {
        $user = Auth::user();

        if ($user->role === 'super_admin') {
            $myLibraryIds = \App\Models\Library::where('created_by', $user->id)->pluck('id');
            $query = \App\Models\OverrideRequest::whereIn('library_id', $myLibraryIds);
        } else {
            $libraryId = $request->library_id ?? ($user->library ? $user->library->id : $user->library_id);
            if ($libraryId) {
                $query = \App\Models\OverrideRequest::where('library_id', $libraryId);
            } else {
                $query = \App\Models\OverrideRequest::query();
            }
        }

        // Time Frame Filter for Override Requests
        $timeRange = $request->input('time_range', 'today');
        if ($timeRange === 'today') {
            $query->whereBetween('created_at', [Carbon::today()->startOfDay(), Carbon::today()->endOfDay()]);
        } elseif ($timeRange === 'yesterday') {
            $query->whereBetween('created_at', [Carbon::yesterday()->startOfDay(), Carbon::yesterday()->endOfDay()]);
        } elseif ($timeRange === 'this_month') {
            $query->whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]);
        } elseif ($timeRange === 'last_month') {
            $query->whereBetween('created_at', [Carbon::now()->subMonth()->startOfMonth(), Carbon::now()->subMonth()->endOfMonth()]);
        } elseif ($timeRange === 'this_year') {
            $query->whereBetween('created_at', [Carbon::now()->startOfYear(), Carbon::now()->endOfYear()]);
        } elseif ($timeRange === 'custom' || ($request->has('from_date') && $request->has('to_date'))) {
            if ($request->filled('from_date') && $request->filled('to_date')) {
                $query->whereBetween('created_at', [$request->from_date . ' 00:00:00', $request->to_date . ' 23:59:59']);
            }
        }

        // Status filter if provided
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Search by student name or CRN
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('crn', 'like', "%{$search}%");
            });
        }

        $perPage = $request->input('per_page', 20);
        if ($perPage === 'all' || $perPage == -1) {
            $perPage = 999999;
        }

        $requests = $query->with(['user', 'seat.floor', 'seat.seatSection', 'seat.seatSubsection'])->latest()->paginate((int)$perPage);

        return response()->json($requests);
    }

    public function approveOverrideRequest(Request $request, $id)
    {
        $override = \App\Models\OverrideRequest::findOrFail($id);
        $override->update(['status' => 'approved']);

        // Send Notification
        \App\Models\Notification::send(
            $override->user_id,
            'system',
            'Override Request Approved!',
            "Your request to use seat {$override->seat->seat_number} has been approved for TODAY! You can now book the seat for today.",
            $override
        );

        return response()->json([
            'success' => true,
            'message' => 'Override request approved successfully.',
            'request' => $override->load(['user', 'seat.floor', 'seat.seatSection'])
        ]);
    }

    public function rejectOverrideRequest(Request $request, $id)
    {
        $override = \App\Models\OverrideRequest::findOrFail($id);
        $override->update(['status' => 'rejected']);

        // Send Notification
        \App\Models\Notification::send(
            $override->user_id,
            'system',
            'Override Request Rejected',
            "Your request to use seat {$override->seat->seat_number} was rejected by the librarian.",
            $override
        );

        return response()->json([
            'success' => true,
            'message' => 'Override request rejected successfully.',
            'request' => $override->load(['user', 'seat.floor', 'seat.seatSection'])
        ]);
    }
}
