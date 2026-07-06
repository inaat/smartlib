<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SeatSection extends Model
{
    protected $table = 'seat_sections';

    protected $fillable = [
        'library_id',
        'floor_id',
        'name',
        'gender',
        'academic_level',
        'total_seats',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // Relationship to Library
    public function library(): BelongsTo
    {
        return $this->belongsTo(Library::class);
    }

    // Relationship to Floor
    public function floor(): BelongsTo
    {
        return $this->belongsTo(Floor::class);
    }

    // Relationship to Seats
    public function seats(): HasMany
    {
        return $this->hasMany(Seat::class, 'section_id');
    }

    // Get available seats count
    public function getAvailableSeatsCountAttribute(): int
    {
        return $this->seats()->where('status', 'available')->count();
    }

    // Get occupied seats count
    public function getOccupiedSeatsCountAttribute(): int
    {
        return $this->seats()->whereIn('status', ['booked', 'occupied'])->count();
    }
}
