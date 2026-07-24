<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Floor;
use App\Models\Library;
use App\Models\SeatSection;

class Seat extends Model
{
    protected $fillable = [
        'floor_id',
        'section_id',
        'table_id',
        'cabin_number',
        'cabin_features',
        'seat_number',
        'seat_type',
        'has_computer',
        'near_window',
        'socket_count',
        'zone',
        'status',
        'position_x',
        'position_y',
        'qr_code',
        'qr_generated_at',
        'qr_expires_at',
        'is_maintenance',
        'is_active',
    ];

    protected $casts = [
        'floor_id' => 'integer',
        'section_id' => 'integer',
        'table_id' => 'integer',
        'cabin_features' => 'array',
        'has_computer' => 'boolean',
        'near_window' => 'boolean',
        'socket_count' => 'integer',
        'position_x' => 'integer',
        'position_y' => 'integer',
        'qr_generated_at' => 'datetime',
        'qr_expires_at' => 'datetime',
        'is_maintenance' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function floor()
    {
        return $this->belongsTo(Floor::class, 'floor_id');
    }

    public function library()
    {
        return $this->hasOneThrough(
            Library::class,
            Floor::class,
            'id', // Foreign key on floors table...
            'id', // Foreign key on libraries table...
            'floor_id', // Local key on seats table...
            'library_id' // Local key on floors table...
        );
    }

    public function seatSection()
    {
        return $this->belongsTo(SeatSection::class, 'section_id');
    }

    public function studyTable()
    {
        return $this->belongsTo(StudyTable::class, 'table_id');
    }

    public function bookings()
    {
        return $this->hasMany(SeatBooking::class);
    }

    protected static function booted()
    {
        static::created(function ($seat) {
            $seat->updateSectionTotalSeats();
        });

        static::updated(function ($seat) {
            if ($seat->isDirty('section_id')) {
                $oldSectionId = $seat->getOriginal('section_id');
                if ($oldSectionId) {
                    $oldSection = SeatSection::find($oldSectionId);
                    if ($oldSection) {
                        $oldSection->update(['total_seats' => $oldSection->seats()->count()]);
                    }
                }
            }
            $seat->updateSectionTotalSeats();
        });

        static::deleted(function ($seat) {
            $seat->updateSectionTotalSeats();
        });
    }

    public function updateSectionTotalSeats()
    {
        if ($this->section_id) {
            $section = $this->seatSection;
            if ($section) {
                $section->update(['total_seats' => $section->seats()->count()]);
            }
        }
    }
}
