<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Floor;
use App\Models\Seat;

class Library extends Model
{
    protected $fillable = [
        'name',
        'description',
        'address',
        'photo',
        'latitude',
        'longitude',
        'contact_info',
        'special_features',
        'capacity',
        'opening_hours',
        'wifi_password',
        'parking_available',                    
        'is_active',
        'seat_layout_mode',
        'table_capacity',
        'created_by',
    ];

    protected $casts = [
        'contact_info' => 'array',
        'special_features' => 'array',
        'capacity' => 'integer',
        'table_capacity' => 'integer',
        'parking_available' => 'boolean',
        'is_active' => 'boolean',
        'latitude' => 'float',
        'longitude' => 'float',
    ];

    protected $appends = ['photo_url', 'average_rating'];

    public function reviews()
    {
        return $this->hasMany(LibraryReview::class);
    }

    public function getAverageRatingAttribute()
    {
        return round($this->reviews()->avg('rating') ?: 0, 1);
    }

    public function getPhotoUrlAttribute()
    {
        if (!$this->photo) {
            return 'https://images.pexels.com/photos/204494/pexels-photo-204494.jpeg?auto=compress&cs=tinysrgb&w=400';
        }

        if (filter_var($this->photo, FILTER_VALIDATE_URL)) {
            return $this->photo;
        }

        return \Illuminate\Support\Facades\Storage::url($this->photo);
    }

    public function seats()
    {
        return $this->hasManyThrough(Seat::class, Floor::class);
    }

    public function seatSections()
    {
        return $this->hasMany(SeatSection::class);
    }

    public function studyTables()
    {
        return $this->hasMany(StudyTable::class);
    }

    public function floors()
    {
        return $this->hasMany(Floor::class);
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
        return $this->hasMany(SeatBooking::class);
    }

    public function operatingHours()
    {
        return $this->hasMany(LibraryOperatingHour::class);
    }

    public function facilities()
    {
        return $this->hasMany(LibraryFacility::class)->orderBy('order');
    }

    public function rules()
    {
        return $this->hasMany(LibraryRule::class)->orderBy('order');
    }
}
