<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Book extends Model
{
    protected $fillable = [
        'library_id',
        'title',
        'author',
        'isbn',
        'type',
        'category',
        'cover',
        'description',
        'availability',
        'location',
        'digital_access',
        'uploaded_by',
        'upload_date',
        'download_count',
        'publisher',
        'publication_year',
        'edition',
        'language',
        'pages',
        'tags',
        'rating',
        'copies_total',
        'copies_available',
        'reservation_queue',
        'borrowing_period',
        'renewal_limit',
        'qr_code',
    ];

    protected $casts = [
        'digital_access' => 'array',
        'upload_date' => 'datetime',
        'download_count' => 'integer',
        'publication_year' => 'integer',
        'pages' => 'integer',
        'tags' => 'array',
        'rating' => 'decimal:2',
        'copies_total' => 'integer',
        'copies_available' => 'integer',
        'reservation_queue' => 'array',
        'borrowing_period' => 'integer',
        'renewal_limit' => 'integer',
    ];

    protected $appends = ['cover_url'];

    public function getCoverUrlAttribute()
    {
        if (!$this->cover) {
            return 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400';
        }

        // If it's already a full URL, return it
        if (filter_var($this->cover, FILTER_VALIDATE_URL)) {
            return $this->cover;
        }

        // If it already starts with /storage/, return as is
        if (str_starts_with($this->cover, '/storage/')) {
            return $this->cover;
        }

        // Otherwise, convert storage path to URL
        return Storage::url($this->cover);
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function reservations()
    {
        return $this->hasMany(BookReservation::class);
    }
}
