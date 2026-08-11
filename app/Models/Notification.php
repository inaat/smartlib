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

    /**
     * Send system notification while strictly enforcing notification settings
     */
    public static function send($userId, $type, $title, $message, $related = null)
    {
        // 1. Queue Availability Alerts toggle check
        if (in_array($type, ['queue', 'queue_turn', 'queue_alert'])) {
            $queueAlertsEnabled = \App\Models\SystemSetting::get('queue_availability_alerts', true)
                && \App\Models\SystemSetting::get('notify_on_queue_turn', true);

            if (!$queueAlertsEnabled) {
                return null; // Queue notifications disabled by admin
            }
        }

        // 2. System Email Notifications toggle check
        if (in_array($type, ['email', 'system_email'])) {
            $emailNotifsEnabled = \App\Models\SystemSetting::get('enable_system_email_notifications', true)
                && \App\Models\SystemSetting::get('enable_email_notifications', true);

            if (!$emailNotifsEnabled) {
                return null; // Email notifications disabled by admin
            }
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
