<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudyTable extends Model
{
    protected $fillable = [
        'library_id',
        'floor_id',
        'section_id',
        'capacity',
        'label',
        'position_x',
        'position_y',
    ];

    protected $casts = [
        'library_id' => 'integer',
        'floor_id' => 'integer',
        'section_id' => 'integer',
        'capacity' => 'integer',
        'position_x' => 'integer',
        'position_y' => 'integer',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }

    public function seatSection()
    {
        return $this->belongsTo(SeatSection::class, 'section_id');
    }

    public function seats()
    {
        return $this->hasMany(Seat::class, 'table_id');
    }
}
