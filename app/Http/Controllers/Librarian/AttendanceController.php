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
        $library = $user->library;

        $query = Attendance::with(['user'])
            ->where('library_id', $library->id);

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
        $library = $user->library;
        $date = $request->get('date', Carbon::today()->toDateString());

        $stats = [
            'total_today' => Attendance::where('library_id', $library->id)->where('date', $date)->count(),
            'currently_present' => Attendance::where('library_id', $library->id)
                ->where('date', $date)
                ->whereNull('check_out_time')
                ->count(),
            'avg_minutes' => (int) Attendance::where('library_id', $library->id)
                ->where('date', $date)
                ->whereNotNull('check_out_time')
                ->avg('total_minutes'),
        ];

        return response()->json($stats);
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

        $today = Carbon::today()->toDateString();

        if ($request->type === 'check_in') {
            // Check if already checked in
            $existing = Attendance::where('user_id', $student->id)
                ->where('date', $today)
                ->whereNull('check_out_time')
                ->first();

            if ($existing) {
                return response()->json(['message' => 'Student is already checked in'], 400);
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
            // Check out
            $attendance = Attendance::where('user_id', $student->id)
                ->where('date', $today)
                ->whereNull('check_out_time')
                ->first();

            if (!$attendance) {
                return response()->json(['message' => 'No active check-in found for this student today'], 400);
            }

            $checkOutTime = Carbon::now();
            $checkInTime = Carbon::parse($attendance->date->toDateString() . ' ' . $attendance->check_in_time);
            $totalMinutes = $checkOutTime->diffInMinutes($checkInTime);

            $attendance->update([
                'check_out_time' => $checkOutTime->toTimeString(),
                'total_minutes' => $totalMinutes,
            ]);

            return response()->json(['message' => 'Checked out successfully', 'attendance' => $attendance]);
        }
    }
}
