<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Library extends Model
{
    protected $fillable = [
        'name',
        'description',
        'address',
        'latitude',
        'longitude',
        'total_seats',
        'available_seats',
        'opening_hours',
        'facilities',
        'capacity',
        'current_occupancy',
        'images',
        'contact_info',
        'rules',
        'special_features',
        'accessibility_features',
        'parking_available',
        'wifi_password',
        'operating_days',
        'holiday_schedule',
        'is_active',
        'photo',
    ];

    protected $casts = [
        'facilities' => 'array',
        'images' => 'array',
        'contact_info' => 'array',
        'rules' => 'array',
        'special_features' => 'array',
        'accessibility_features' => 'array',
        'operating_days' => 'array',
        'holiday_schedule' => 'array',
        'total_seats' => 'integer',
        'available_seats' => 'integer',
        'capacity' => 'integer',
        'current_occupancy' => 'integer',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'parking_available' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function seats()
    {
        return $this->hasMany(Seat::class);
    }

    public function seatSections()
    {
        return $this->hasMany(SeatSection::class);
    }

    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function seatBookings()
    {
        return $this->hasManyThrough(SeatBooking::class, Seat::class);
    }
}
