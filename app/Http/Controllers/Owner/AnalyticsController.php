<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Library;
use App\Models\User;
use App\Models\UserSubscription;
use App\Models\SeatBooking;
use App\Models\Seat;
use App\Models\Book;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    public function index()
    {
        $totalLibraries    = Library::count();
        $totalStudents     = User::where('role', 'student')->count();
        $totalSuperAdmins  = User::where('role', 'super_admin')->count();
        $totalLibrarians   = User::where('role', 'librarian')->count();
        $totalSeats        = Seat::count();
        $totalBooks        = Book::count();
        $totalEvents       = Event::count();

        $activeSubscriptions = UserSubscription::where('status', 'active')->count();
        $totalRevenue        = UserSubscription::sum('amount_paid');

        $bookingsToday = SeatBooking::whereDate('created_at', Carbon::today())->count();

        // Monthly Revenue Growth
        $monthlyRevenue = UserSubscription::select(
                DB::raw('sum(amount_paid) as total'),
                DB::raw("DATE_FORMAT(created_at, '%M') as month")
            )
            ->groupBy('month')
            ->orderBy(DB::raw('MIN(created_at)'))
            ->get();

        return response()->json([
            'overview' => [
                'total_libraries'     => $totalLibraries,
                'total_students'      => $totalStudents,
                'total_superadmins'   => $totalSuperAdmins,
                'total_librarians'    => $totalLibrarians,
                'total_seats'         => $totalSeats,
                'total_books'         => $totalBooks,
                'total_events'        => $totalEvents,
                'active_subscriptions'=> $activeSubscriptions,
                'total_revenue'       => (float) $totalRevenue,
                'bookings_today'      => $bookingsToday,
            ],
            'monthly_revenue' => $monthlyRevenue->map(function ($item) {
                return [
                    'month' => $item->month,
                    'total' => (float) $item->total,
                ];
            }),
            'recent_bookings' => SeatBooking::with(['user', 'library'])->latest()->take(10)->get(),
        ]);
    }
}
