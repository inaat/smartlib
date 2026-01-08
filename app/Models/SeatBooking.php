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
}
