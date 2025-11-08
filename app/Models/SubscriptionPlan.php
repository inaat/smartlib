<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'duration_days',
        'seat_bookings_limit',
        'book_reservations_limit',
        'digital_books_access',
        'priority_booking',
        'event_discounts',
        'features',
        'status',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'duration_days' => 'integer',
        'seat_bookings_limit' => 'integer',
        'book_reservations_limit' => 'integer',
        'digital_books_access' => 'boolean',
        'priority_booking' => 'boolean',
        'event_discounts' => 'integer',
        'features' => 'array',
    ];

    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }
}
