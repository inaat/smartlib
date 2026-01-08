<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LibraryFacility extends Model
{
    protected $fillable = [
        'library_id',
        'name',
        'icon',
        'is_available',
        'description',
        'order',
    ];

    protected $casts = [
        'is_available' => 'boolean',
        'order' => 'integer',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }
}
