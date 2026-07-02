<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = Attendance::with(['user', 'library']);
 
        if ($user->role !== 'super_admin') {
            $library = $user->library;
            $query->where('library_id', $library->id);
        } elseif ($request->has('library_id')) {
            $query->where('library_id', $request->library_id);
        }

        // Filter by date
        $date = $request->get('date', Carbon::today()->toDateString());
        $query->where('date', $date);

        // Search by student name or CRN
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('crn', 'like', "%{$search}%");
            });
        }

        // Filter by status (Present/Left)
        if ($request->has('status')) {
            if ($request->status === 'present') {
                $query->whereNull('check_out_time');
            } elseif ($request->status === 'left') {
                $query->whereNotNull('check_out_time');
            }
        }

        $attendance = $query->latest('check_in_time')->paginate(15);

        return response()->json($attendance);
    }

    public function stats(Request $request)
    {
        $user = Auth::user();
        $date = $request->get('date', Carbon::today()->toDateString());
        
        $query = Attendance::where('date', $date);
        
        if ($user->role !== 'super_admin') {
            $library = $user->library;
            $query->where('library_id', $library->id);
        } elseif ($request->has('library_id')) {
            $query->where('library_id', $request->library_id);
        }
 
        $stats = [
            'total_today' => (clone $query)->distinct('user_id')->count('user_id'),
            'currently_present' => (clone $query)->whereNull('check_out_time')->distinct('user_id')->count('user_id'),
            'avg_minutes' => (int) (clone $query)->whereNotNull('check_out_time')->avg('total_minutes'),
        ];

        return response()->json($stats);
    }

    public function calendar(Request $request)
    {
        $user = Auth::user();
        $year  = $request->get('year',  Carbon::today()->year);
        $month = $request->get('month', Carbon::today()->month);

        $startOfMonth = Carbon::create($year, $month, 1)->startOfDay();
        $endOfMonth   = $startOfMonth->copy()->endOfMonth();

        $query = Attendance::whereBetween('date', [$startOfMonth->toDateString(), $endOfMonth->toDateString()]);

        if ($user->role !== 'super_admin') {
            $query->where('library_id', $user->library_id);
        } elseif ($request->has('library_id')) {
            $query->where('library_id', $request->library_id);
        }

        // Optional: filter by student user_id
        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        // Group and count attendance per day
        $records = $query->selectRaw('date, COUNT(DISTINCT user_id) as student_count')
            ->groupBy('date')
            ->get()
            ->keyBy('date');

        // Build a full calendar map for the month
        $days = [];
        $totalDays = $startOfMonth->daysInMonth;
        $totalAttended = 0;

        for ($d = 1; $d <= $totalDays; $d++) {
            $dateStr = Carbon::create($year, $month, $d)->toDateString();
            $count = $records->get($dateStr)?->student_count ?? 0;
            if ($count > 0) $totalAttended++;
            $days[$dateStr] = $count;
        }

        return response()->json([
            'year'           => (int)$year,
            'month'          => (int)$month,
            'days_in_month'  => $totalDays,
            'days'           => $days,
            'total_attended' => $totalAttended,
            'total_days'     => $totalDays,
        ]);
    }

    public function markAttendance(Request $request)
    {
        $request->validate([
            'crn' => 'required|string',
            'type' => 'required|in:check_in,check_out',
        ]);

        $user = Auth::user();
        $library = $user->library;
        $student = User::where('crn', $request->crn)->where('role', 'student')->first();

        if (!$student) {
            return response()->json(['message' => 'Student not found with this CRN'], 404);
        }

        // Check for active ban
        if ($student->isBannedFrom($library->id)) {
            $ban = $student->bans()
                ->where(function ($q) use ($library) {
                    $q->where('library_id', $library->id)->orWhereNotNull('super_admin_id');
                })
                ->where(function ($q) {
                    $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
                })
                ->first();

            $expiry = $ban->expires_at ? " until " . $ban->expires_at->format('M d, Y') : " for lifetime";
            return response()->json([
                'message' => "This student is restricted from accessing this library{$expiry}. Reason: " . ($ban->reason ?? 'No reason provided.')
            ], 403);
        }

        $today = Carbon::today()->toDateString();

        if ($request->type === 'check_in') {
            // Check if already has ANY manual attendance today (even if checked out)
            $existing = Attendance::where('user_id', $student->id)
                ->where('date', $today)
                ->whereNull('seat_booking_id')
                ->first();
 
            if ($existing && !$existing->check_out_time) {
                return response()->json(['message' => 'Student is already checked in'], 400);
            }
            
            if ($existing) {
                $existing->update(['check_out_time' => null]);
                return response()->json(['message' => 'Attendance resumed successfully', 'attendance' => $existing]);
            }
 
            $attendance = Attendance::create([
                'user_id' => $student->id,
                'library_id' => $library->id,
                'date' => $today,
                'check_in_time' => Carbon::now()->toTimeString(),
                'marked_manually' => true,
            ]);
 
            return response()->json(['message' => 'Checked in successfully', 'attendance' => $attendance]);
        } else {
            // Check out manual check-in
            $attendance = Attendance::where('user_id', $student->id)
                ->where('date', $today)
                ->whereNull('seat_booking_id')
                ->whereNull('check_out_time')
                ->first();

            if (!$attendance) {
                return response()->json(['message' => 'No active check-in found for this student today'], 400);
            }

            $checkOutTime = Carbon::now();
            $checkInTime = Carbon::parse($attendance->date->toDateString() . ' ' . $attendance->check_in_time);
            $totalMinutes = $checkOutTime->diffInMinutes($checkInTime, true);

            $attendance->update([
                'check_out_time' => $checkOutTime->toTimeString(),
                'total_minutes' => $totalMinutes,
            ]);

            return response()->json(['message' => 'Checked out successfully', 'attendance' => $attendance]);
        }
    }
}
