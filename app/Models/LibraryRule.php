<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LibraryRule extends Model
{
    protected $fillable = [
        'library_id',
        'type',
        'rule_text',
        'order',
        'is_active',
    ];

    protected $casts = [
        'order' => 'integer',
        'is_active' => 'boolean',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }
}
