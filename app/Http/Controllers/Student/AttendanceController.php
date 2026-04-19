<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        $query = Attendance::with(['library'])
            ->where('user_id', $user->id);

        // Filter by month/year if needed, for now just list all
        $attendance = $query->latest('date')
            ->latest('check_in_time')
            ->paginate(20);

        return response()->json($attendance);
    }

    public function stats()
    {
        $user = Auth::user();
        
        $totalDays = Attendance::where('user_id', $user->id)->count();
        $totalMinutes = Attendance::where('user_id', $user->id)->sum('total_minutes');
        
        // This Month
        $thisMonth = Carbon::now()->month;
        $thisYear = Carbon::now()->year;
        $monthDays = Attendance::where('user_id', $user->id)
            ->whereMonth('date', $thisMonth)
            ->whereYear('date', $thisYear)
            ->count();

        return response()->json([
            'total_days' => $totalDays,
            'total_hours' => round($totalMinutes / 60, 1),
            'attendance_this_month' => $monthDays,
            'current_streak' => $user->current_streak,
            'max_streak' => $user->max_streak,
        ]);
    }

    public function calendar(Request $request)
    {
        $user  = Auth::user();
        $year  = (int) $request->get('year',  Carbon::today()->year);
        $month = (int) $request->get('month', Carbon::today()->month);

        $startOfMonth = Carbon::create($year, $month, 1)->startOfDay();
        $endOfMonth   = $startOfMonth->copy()->endOfMonth();

        $records = Attendance::where('user_id', $user->id)
            ->whereBetween('date', [$startOfMonth->toDateString(), $endOfMonth->toDateString()])
            ->get()
            ->groupBy(fn($r) => Carbon::parse($r->date)->toDateString());

        $days = [];
        $totalAttended = 0;
        $daysInMonth   = $startOfMonth->daysInMonth;

        for ($d = 1; $d <= $daysInMonth; $d++) {
            $dateStr   = Carbon::create($year, $month, $d)->toDateString();
            $dayRecords = $records->get($dateStr, collect());
            $attended   = $dayRecords->isNotEmpty();
            $minutes    = (int) $dayRecords->sum('total_minutes');
            if ($attended) $totalAttended++;
            $days[$dateStr] = [
                'attended'      => $attended,
                'total_minutes' => $minutes,
            ];
        }

        return response()->json([
            'year'           => $year,
            'month'          => $month,
            'days'           => $days,
            'total_attended' => $totalAttended,
            'total_days'     => $daysInMonth,
        ]);
    }
}
