<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'duration',
        'features',
        'booking_limit',
        'digital_book_access',
        'priority_support',
        'event_discounts',
        'is_active',
        'trial_period',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'duration' => 'integer',
        'features' => 'array',
        'booking_limit' => 'integer',
        'digital_book_access' => 'boolean',
        'priority_support' => 'boolean',
        'event_discounts' => 'integer',
        'is_active' => 'boolean',
        'trial_period' => 'integer',
    ];

    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }
}
