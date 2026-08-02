<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ScheduledReport extends Model
{
    protected $fillable = [
        'library_id',
        'user_id',
        'report_type',
        'frequency',
        'format',
        'recipient_email',
        'send_time',
        'status',
        'last_generated_at',
        'next_run_at',
    ];

    protected $casts = [
        'last_generated_at' => 'datetime',
        'next_run_at' => 'datetime',
    ];

    public function library(): BelongsTo
    {
        return $this->belongsTo(Library::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function generatedReports(): HasMany
    {
        return $this->hasMany(GeneratedReport::class);
    }
}
