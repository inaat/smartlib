<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SeatSubsection extends Model
{
    protected $table = 'seat_subsections';

    protected $fillable = [
        'section_id',
        'library_id',
        'floor_id',
        'name',
        'code',
        'gender',
        'academic_level',
        'total_seats',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'total_seats' => 'integer',
    ];

    protected $appends = ['available_seats', 'occupied_seats'];

    public function seatSection(): BelongsTo
    {
        return $this->belongsTo(SeatSection::class, 'section_id');
    }

    public function library(): BelongsTo
    {
        return $this->belongsTo(Library::class);
    }

    public function floor(): BelongsTo
    {
        return $this->belongsTo(Floor::class);
    }

    public function seats(): HasMany
    {
        return $this->hasMany(Seat::class, 'subsection_id');
    }

    public function getAvailableSeatsAttribute(): int
    {
        return $this->seats()->where('status', 'available')->count();
    }

    public function getOccupiedSeatsAttribute(): int
    {
        return $this->seats()->whereIn('status', ['booked', 'occupied'])->count();
    }
}
