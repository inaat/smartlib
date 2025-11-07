<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'crn',
        'icap_id_card_photo',
        'phone',
        'profile_photo',
        'user_type',
        'status',
        'library_id',
        'loyalty_points',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'loyalty_points' => 'integer',
        ];
    }

    protected $appends = ['isApproved', 'role', 'loyaltyPoints', 'subscriptionPlan'];

    // Relationships
    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function seatBookings()
    {
        return $this->hasMany(SeatBooking::class);
    }

    public function bookings()
    {
        return $this->hasMany(SeatBooking::class);
    }

    public function bookReservations()
    {
        return $this->hasMany(BookReservation::class);
    }

    public function eventRegistrations()
    {
        return $this->hasMany(EventRegistration::class);
    }

    public function subscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }

    public function activeSubscription()
    {
        return $this->hasOne(UserSubscription::class)
            ->where('status', 'active')
            ->where('end_date', '>=', now());
    }

    public function loyaltyTransactions()
    {
        return $this->hasMany(LoyaltyTransaction::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    // Helper methods
    public function isStudent()
    {
        return $this->user_type === 'student';
    }

    public function isLibrarian()
    {
        return $this->user_type === 'librarian';
    }

    public function isSuperAdmin()
    {
        return $this->user_type === 'super_admin';
    }

    public function isApproved()
    {
        return $this->status === 'approved';
    }

    public function getIsApprovedAttribute()
    {
        return $this->status === 'approved';
    }

    public function getRoleAttribute()
    {
        return $this->user_type;
    }

    public function getLoyaltyPointsAttribute()
    {
        return $this->attributes['loyalty_points'] ?? 0;
    }

    public function getSubscriptionPlanAttribute()
    {
        $activeSubscription = $this->activeSubscription;
        if ($activeSubscription && $activeSubscription->subscription_plan) {
            return $activeSubscription->subscription_plan->name ?? 'free';
        }
        return 'free';
    }

    public function hasActiveBooking()
    {
        return $this->seatBookings()
            ->whereIn('status', ['pending', 'active'])
            ->exists();
    }

    public function canBookSeat()
    {
        if (!$this->isApproved()) {
            return false;
        }

        if ($this->hasActiveBooking()) {
            return false;
        }

        $activeSubscription = $this->activeSubscription;
        if (!$activeSubscription) {
            return false;
        }

        if ($activeSubscription->subscription_plan->seat_bookings_limit === null) {
            return true;
        }

        return $activeSubscription->bookings_used < $activeSubscription->subscription_plan->seat_bookings_limit;
    }

    public function addLoyaltyPoints(int $points, string $type, string $description = null, $related = null)
    {
        $this->increment('loyalty_points', $points);

        return $this->loyaltyTransactions()->create([
            'points' => $points,
            'type' => $type,
            'description' => $description,
            'related_type' => $related ? get_class($related) : null,
            'related_id' => $related?->id,
        ]);
    }
}
