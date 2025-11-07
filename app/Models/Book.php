<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
        'fine_per_day',
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
        'fine_per_day' => 'decimal:2',
    ];

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function reservations()
    {
        return $this->hasMany(BookReservation::class);
    }
}
