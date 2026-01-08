<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LibraryOperatingHour extends Model
{
    protected $fillable = [
        'library_id',
        'day_of_week',
        'is_open',
        'open_time',
        'close_time',
    ];

    protected $casts = [
        'is_open' => 'boolean',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }
}
