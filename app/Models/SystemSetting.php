<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'group',
        'type',
        'label',
        'description',
    ];

    /**
     * Get setting by key with alias fallback & strict boolean conversion
     */
    public static function get($key, $default = null)
    {
        $setting = self::where('key', $key)->first();

        // Support alias key mappings
        if (!$setting) {
            if ($key === 'enable_system_email_notifications') {
                $setting = self::where('key', 'enable_email_notifications')->first();
            } elseif ($key === 'enable_email_notifications') {
                $setting = self::where('key', 'enable_system_email_notifications')->first();
            } elseif ($key === 'queue_availability_alerts') {
                $setting = self::where('key', 'notify_on_queue_turn')->first();
            } elseif ($key === 'notify_on_queue_turn') {
                $setting = self::where('key', 'queue_availability_alerts')->first();
            } elseif ($key === 'allow_digital_book_downloads') {
                $setting = self::where('key', 'allow_digital_downloads')->first();
            } elseif ($key === 'allow_digital_downloads') {
                $setting = self::where('key', 'allow_digital_book_downloads')->first();
            }
        }

        if (!$setting) return $default;

        if ($setting->type === 'boolean' || in_array(strtolower((string)$setting->value), ['true', 'false', '1', '0', 'yes', 'no', 'on', 'off'])) {
            return in_array(strtolower((string)$setting->value), ['true', '1', 'yes', 'on'], true);
        }

        if ($setting->type === 'json') {
            return json_decode($setting->value, true);
        }

        return $setting->value;
    }

    /**
     * Set setting by key
     */
    public static function set($key, $value, $group = 'general', $type = 'text')
    {
        $val = is_array($value) ? json_encode($value) : $value;
        
        return self::updateOrCreate(
            ['key' => $key],
            [
                'value' => $val,
                'group' => $group,
                'type' => $type
            ]
        );
    }
}
