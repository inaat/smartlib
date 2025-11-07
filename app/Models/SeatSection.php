<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SeatSection extends Model
{
    protected $fillable = [
        'library_id',
        'name',
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
