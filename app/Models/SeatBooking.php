<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeatBooking extends Model
{
    protected $fillable = [
        'user_id',
        'seat_id',
        'booking_date',
        'start_time',
        'end_time',
        'status',
        'checked_in_at',
        'checked_out_at',
    ];

    protected $casts = [
        'booking_date' => 'date',
        'checked_in_at' => 'datetime',
        'checked_out_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class);
    }
}
