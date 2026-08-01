<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OverrideRequest extends Model
{
    protected $fillable = [
        'user_id',
        'seat_id',
        'library_id',
        'status',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function seat(): BelongsTo
    {
        return $this->belongsTo(Seat::class);
    }

    public function library(): BelongsTo
    {
        return $this->belongsTo(Library::class);
    }
}
