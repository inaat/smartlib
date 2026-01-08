<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    protected $fillable = [
        'library_id',
        'name',
        'level',
        'description',
        'map_image',
        'type',
        'capacity',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'level' => 'integer',
        'capacity' => 'integer',
        'order' => 'integer',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function seatSections()
    {
        return $this->hasMany(SeatSection::class);
    }
}
