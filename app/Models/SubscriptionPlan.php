<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlan extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'price',
        'duration_days',
        'free_trial_days',
        'seat_bookings_limit',
        'daily_seat_bookings_limit',
        'monthly_seat_bookings_limit',
        'libraries_access_limit',
        'books_access_limit',
        'events_joining_limit',
        'advance_booking_days',
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
        'free_trial_days' => 'integer',
        'seat_bookings_limit' => 'integer',
        'daily_seat_bookings_limit' => 'integer',
        'monthly_seat_bookings_limit' => 'integer',
        'libraries_access_limit' => 'integer',
        'books_access_limit' => 'integer',
        'events_joining_limit' => 'integer',
        'advance_booking_days' => 'integer',
        'book_reservations_limit' => 'integer',
        'digital_books_access' => 'boolean',
        'priority_booking' => 'boolean',
        'event_discounts' => 'integer',
        'features' => 'array',
        'status' => 'string',
    ];

    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }
}
