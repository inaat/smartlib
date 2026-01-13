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

    /**
     * Check if the reservation is overdue
     */
    public function isOverdue(): bool
    {
        return $this->status === 'reserved' && $this->due_date < now();
    }

    /**
     * Scope to get overdue reservations
     */
    public function scopeOverdue($query)
    {
        return $query->where('status', 'reserved')
                     ->where('due_date', '<', now());
    }

    /**
     * Scope to get active reservations
     */
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['reserved', 'pending_return']);
    }
}
