<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $table = 'attendance';

    protected $fillable = [
        'user_id',
        'library_id',
        'seat_booking_id',
        'date',
        'check_in_time',
        'check_out_time',
        'total_minutes',
        'marked_manually',
    ];

    protected $casts = [
        'date' => 'date',
        'marked_manually' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function seatBooking()
    {
        return $this->belongsTo(SeatBooking::class);
    }
}
