<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmartQueue extends Model
{
    protected $table = 'smart_queue';

    protected $fillable = [
        'user_id',
        'library_id',
        'floor_id',
        'seat_id',
        'seat_type_preference',
        'queue_position',
        'joined_at',
        'notified_at',
        'claim_expires_at',
        'status',
        'wait_time_minutes',
    ];

    protected $casts = [
        'joined_at' => 'datetime',
        'notified_at' => 'datetime',
        'claim_expires_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class);
    }
}
