<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Event extends Model
{
    protected $fillable = [
        'library_id',
        'title',
        'description',
        'date',
        'start_time',
        'end_time',
        'venue',
        'capacity',
        'registered',
        'waitlist',
        'type',
        'is_paid',
        'price',
        'image',
        'organizer_id',
        'registration_deadline',
        'is_active',
        'speakers',
        'agenda',
        'materials',
        'prerequisites',
        'certificate_provided',
        'recording_available',
        'tags',
        'target_audience',
        'difficulty',
        'attendance_tracking',
    ];

    protected $casts = [
        'date' => 'date',
        'registration_deadline' => 'datetime',
        'capacity' => 'integer',
        'registered' => 'integer',
        'waitlist' => 'integer',
        'is_paid' => 'boolean',
        'is_active' => 'boolean',
        'price' => 'decimal:2',
        'speakers' => 'array',
        'agenda' => 'array',
        'materials' => 'array',
        'prerequisites' => 'array',
        'certificate_provided' => 'boolean',
        'recording_available' => 'boolean',
        'tags' => 'array',
        'target_audience' => 'array',
        'attendance_tracking' => 'boolean',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function registrations()
    {
        return $this->hasMany(EventRegistration::class);
    }

    /**
     * Get the resolved URL for the event image.
     */
    public function getImageAttribute($value)
    {
        if (!$value) {
            return null;
        }

        // If it's already a full URL, return it
        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }

        // If it already starts with /storage/ or storage/, return as is
        if (str_starts_with($value, '/storage/')) {
            return $value;
        }
        if (str_starts_with($value, 'storage/')) {
            return '/' . $value;
        }

        // Otherwise, convert storage path to URL (e.g., /storage/events/filename.jpg)
        return Storage::url($value);
    }
}
