<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookReservation extends Model
{
    protected $fillable = [
        'user_id',
        'book_id',
        'due_date',
        'returned_at',
        'status',
    ];

    protected $casts = [
        'due_date' => 'datetime',
        'returned_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function isOverdue(): bool
    {
        return in_array($this->status, ['approved', 'collected']) && $this->due_date < now();
    }

    /**
     * Scope to get overdue reservations
     */
    public function scopeOverdue($query)
    {
        return $query->whereIn('status', ['approved', 'collected'])
                     ->where('due_date', '<', now());
    }

    /**
     * Scope to get active reservations
     */
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['pending', 'approved', 'collected', 'pending_return', 'overdue']);
    }
}
