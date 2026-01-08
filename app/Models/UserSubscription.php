<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'subscription_plan_id',
        'started_at',
        'expires_at',
        'auto_renew',
        'status',
        'amount_paid',
        'payment_method',
        'transaction_id',
        'renewal_attempts',
        'last_renewal_attempt',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'expires_at' => 'datetime',
        'auto_renew' => 'boolean',
        'amount_paid' => 'decimal:2',
        'renewal_attempts' => 'integer',
        'last_renewal_attempt' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subscriptionPlan()
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }

    public function subscription_plan()
    {
        return $this->subscriptionPlan();
    }

    public function isActive()
    {
        return $this->status === 'active' && $this->expires_at >= now();
    }
}
