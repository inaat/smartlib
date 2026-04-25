<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, SoftDeletes, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'crn',
        'gender',
        'role',
        'ca_level',
        'is_active',
        'trial_used',
        'trial_started_at',
        'trial_ends_at',
        'created_by',
        'library_id',
        'status',
        'profile_picture',
        'current_streak',
        'max_streak',
        'last_checkin_date',
        'last_streak_date',
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
            'is_active' => 'boolean',
            'trial_used' => 'boolean',
            'trial_started_at' => 'datetime',
            'trial_ends_at' => 'datetime',
        ];
    }

    /**
     * Get the library ID for the librarian.
     */
    public function getLibraryIdAttribute()
    {
        return ($this->attributes['library_id'] ?? null) ?: $this->libraries->first()?->id;
    }

    /**
     * Get the library model for the librarian.
     */
    public function getLibraryAttribute()
    {
        return $this->library()->first() ?: $this->libraries->first();
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    // Relationships
    public function libraries()
    {
        return $this->belongsToMany(Library::class, 'library_librarian')
            ->withPivot('permissions')
            ->withTimestamps();
    }

    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }

    public function activeSubscription()
    {
        return $this->hasOne(UserSubscription::class)
            ->where('status', 'active')
            ->where('expires_at', '>', now());
    }

    public function pendingOrder()
    {
        return $this->hasOne(Order::class)
            ->where('status', 'pending');
    }


    public function seatBookings()
    {
        return $this->hasMany(SeatBooking::class);
    }

    public function attendance()
    {
        return $this->hasMany(Attendance::class);
    }

    public function studyStreak()
    {
        return $this->hasOne(StudyStreak::class);
    }

    public function pomodoroSessions()
    {
        return $this->hasMany(PomodoroSession::class);
    }

    public function habits()
    {
        return $this->hasMany(Habit::class);
    }

    public function digitalBooks()
    {
        return $this->hasMany(DigitalBook::class);
    }

    public function communityGroups()
    {
        return $this->belongsToMany(CommunityGroup::class, 'group_members')
            ->withPivot('role', 'joined_at', 'is_muted')
            ->withTimestamps();
    }

    public function supportTickets()
    {
        return $this->hasMany(SupportTicket::class);
    }

    public function achievements()
    {
        return $this->belongsToMany(Achievement::class, 'user_achievements')
            ->withPivot('earned_at', 'progress_value', 'notified')
            ->withTimestamps();
    }

    public function eventRegistrations()
    {
        return $this->hasMany(EventRegistration::class);
    }

    public function bookReservations()
    {
        return $this->hasMany(BookReservation::class);
    }



    public function violations()
    {
        return $this->hasMany(UserViolation::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function createdUsers()
    {
        return $this->hasMany(User::class, 'created_by');
    }

    public function loyaltyTransactions()
    {
        return $this->hasMany(LoyaltyTransaction::class);
    }

    public function bans()
    {
        return $this->hasMany(Ban::class, 'user_id');
    }

    /**
     * Check if user is banned from a specific library or globally by their SuperAdmin.
     */
    public function isBannedFrom($libraryId)
    {
        $query = $this->bans()->where(function ($q) use ($libraryId) {
            $q->where('library_id', $libraryId)
              ->orWhereNotNull('super_admin_id'); // Global ban by SuperAdmin
        })->where(function ($q) {
            $q->whereNull('expires_at')
              ->orWhere('expires_at', '>', now());
        });

        return $query->exists();
    }
}

