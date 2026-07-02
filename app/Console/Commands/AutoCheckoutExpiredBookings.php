<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AutoCheckoutExpiredBookings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bookings:auto-checkout';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically checkout expired bookings and update seat status';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // 1. Auto checkout checked-in bookings that have expired
        $expiredBookings = \App\Models\SeatBooking::where('status', 'checked_in')
            ->where('scheduled_end_time', '<=', now())
            ->with('seat')
            ->get();

        $checkoutCount = 0;
        foreach ($expiredBookings as $booking) {
            // Auto checkout
            $booking->update([
                'status' => 'checked_out',
                'check_out_time' => now(),
            ]);

            // Calculate total minutes
            if ($booking->check_in_time) {
                $booking->total_minutes = now()->diffInMinutes($booking->check_in_time, true);
                $booking->save();
            }

            // Update seat status to available
            if ($booking->seat) {
                $booking->seat->update(['status' => 'available']);
            }

            $checkoutCount++;
        }

        // 2. Auto cancel unclaimed bookings after 15 minutes of scheduled booking start time
        $cancelledCount = \App\Models\SeatBooking::where('status', 'booked')
            ->where('booking_time', '<=', now()->subMinutes(15))
            ->count();

        \App\Models\SeatBooking::cancelExpiredBookings();

        $this->info("Auto-checked out {$checkoutCount} bookings and auto-cancelled {$cancelledCount} unclaimed bookings.");
        return 0;
    }
}
