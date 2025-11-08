<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    protected $fillable = [
        'library_id',
        'section_id',
        'seat_number',
        'status',
        'position',
        'type',
        'amenities',
        'qr_code',
        'next_available_time',
        'current_booking_id',
        'floor',
        'section',
        'near_window',
        'power_outlets',
        'has_computer',
        'max_occupancy',
        'restrictions',
    ];

    protected $casts = [
        'position' => 'array',
        'amenities' => 'array',
        'restrictions' => 'array',
        'floor' => 'integer',
        'near_window' => 'boolean',
        'power_outlets' => 'integer',
        'has_computer' => 'boolean',
        'max_occupancy' => 'integer',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function seatSection()
    {
        return $this->belongsTo(SeatSection::class, 'section_id');
    }

    public function bookings()
    {
        return $this->hasMany(SeatBooking::class);
    }
}
