<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeatBooking extends Model
{
    protected $fillable = [
        'user_id',
        'seat_id',
        'library_id',
        'booking_time',
        'check_in_time',
        'check_out_time',
        'scheduled_end_time',
        'extended_until',
        'extension_count',
        'status',
        'qr_scanned',
        'qr_scanned_at',
        'total_minutes',
    ];

    protected $casts = [
        'booking_time' => 'datetime',
        'check_in_time' => 'datetime',
        'check_out_time' => 'datetime',
        'scheduled_end_time' => 'datetime',
        'extended_until' => 'datetime',
        'qr_scanned_at' => 'datetime',
        'qr_scanned' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class);
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    /**
     * Lazy cancel any booked seats that have exceeded their 15 minute check-in window.
     */
    public static function cancelExpiredBookings()
    {
        $expiredBookings = self::where('status', 'booked')
            ->where('booking_time', '<=', now()->subMinutes(15))
            ->get();

        foreach ($expiredBookings as $booking) {
            $booking->update([
                'status' => 'cancelled',
            ]);

            if ($booking->seat) {
                // Only mark seat available if there is no other active/checked_in booking for the same seat
                $otherActive = self::where('seat_id', $booking->seat_id)
                    ->whereIn('status', ['booked', 'checked_in'])
                    ->where('id', '!=', $booking->id)
                    ->exists();
                if (!$otherActive) {
                    $booking->seat->update(['status' => 'available']);
                }
            }

            try {
                \App\Models\Notification::send(
                    $booking->user_id,
                    'booking',
                    'Booking Auto-Cancelled',
                    "Your booking for seat " . ($booking->seat->seat_number ?? 'N/A') . " was automatically cancelled because you did not check in within 15 minutes.",
                    $booking
                );
            } catch (\Exception $e) {
                // Ignore notification failure
            }
        }
    }
}

