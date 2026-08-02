<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'user_id',
        'type',
        'title',
        'message',
        'is_read',
        'related_type',
        'related_id',
    ];

    protected $casts = [
        'is_read' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function related()
    {
        return $this->morphTo();
    }

    public static function send($userId, $type, $title, $message, $related = null)
    {
        if ($type === 'queue' && !\App\Models\SystemSetting::get('notify_on_queue_turn', true)) {
            return null;
        }

        if (!\App\Models\SystemSetting::get('enable_email_notifications', true) && in_array($type, ['email', 'system_email'])) {
            return null;
        }

        return self::create([
            'user_id' => $userId,
            'type' => $type,
            'title' => $title,
            'message' => $message,
            'related_type' => $related ? get_class($related) : null,
            'related_id' => $related ? $related->id : null,
            'is_read' => false,
        ]);
    }
}
