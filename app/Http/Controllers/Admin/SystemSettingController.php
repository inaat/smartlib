<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SystemSetting;
use Illuminate\Http\Request;

class SystemSettingController extends Controller
{
    public function index()
    {
        SystemSetting::whereIn('key', ['max_booking_duration', 'allow_cancellations'])->delete();
        $seeder = new \Database\Seeders\SystemSettingSeeder();
        $seeder->run();

        $settings = SystemSetting::all()->groupBy('group');
        return response()->json($settings);
    }

    public function publicSettings()
    {
        $allSettings = SystemSetting::all()->keyBy('key');
        
        return response()->json([
            'site_name' => $allSettings->get('site_name')?->value ?? $allSettings->get('app_name')?->value ?? 'Smart Lib',
            'site_description' => $allSettings->get('site_description')?->value ?? '',
            'contact_email' => $allSettings->get('contact_email')?->value ?? 'support@smartlib.com',
            'contact_phone' => $allSettings->get('contact_phone')?->value ?? '',
            'maintenance_mode' => SystemSetting::get('maintenance_mode', false),
            'allow_user_registration' => SystemSetting::get('allow_user_registration', true),
            'require_student_approval' => SystemSetting::get('require_student_approval', false),
            'enforce_strong_passwords' => SystemSetting::get('enforce_strong_passwords', true),
            'enable_system_email_notifications' => SystemSetting::get('enable_system_email_notifications', true),
            'queue_availability_alerts' => SystemSetting::get('queue_availability_alerts', true),
            'allow_digital_book_downloads' => SystemSetting::get('allow_digital_book_downloads', true),
            'max_books_per_student' => (int)SystemSetting::get('max_books_per_student', 3),
            'max_checkin_time_minutes' => (int)SystemSetting::get('max_checkin_time_minutes', 15),
            'allow_seat_extensions' => SystemSetting::get('allow_seat_extensions', true),
            'max_extension_minutes' => (int)SystemSetting::get('max_extension_minutes', 60),
            'queue_hold_minutes' => (int)SystemSetting::get('queue_hold_minutes', 10),
            'overstay_penalty_enabled' => SystemSetting::get('overstay_penalty_enabled', true),
            'app_name' => $allSettings->get('site_name')?->value ?? config('app.name'),
            'app_logo' => $allSettings->get('app_logo')?->value ? asset('storage/' . $allSettings->get('app_logo')->value) : null,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'nullable',
        ]);

        foreach ($request->settings as $settingData) {
            $key = $settingData['key'];
            $value = $settingData['value'] ?? null;
            $setting = SystemSetting::where('key', $key)->first();

            if (($setting && $setting->type === 'boolean') || in_array(strtolower((string)$value), ['true', 'false', '1', '0'])) {
                $isTrue = in_array(strtolower((string)$value), ['true', '1', 'yes', 'on'], true);
                $value = $isTrue ? 'true' : 'false';
            } elseif ($setting && $setting->type === 'json' && is_array($value)) {
                $value = json_encode($value);
            }

            if ($setting) {
                $setting->update(['value' => (string)$value]);
            } else {
                SystemSetting::create([
                    'key' => $key,
                    'value' => (string)$value,
                    'group' => $settingData['group'] ?? 'general',
                    'type' => $settingData['type'] ?? 'text',
                    'label' => $settingData['label'] ?? ucwords(str_replace('_', ' ', $key)),
                    'description' => $settingData['description'] ?? null,
                ]);
            }
        }

        return response()->json(['message' => 'Settings updated successfully']);
    }

    public function store(Request $request)
    {
        $request->validate([
            'key' => 'required|string|unique:system_settings',
            'value' => 'nullable',
            'group' => 'required|string',
            'type' => 'required|string',
            'label' => 'required|string',
        ]);

        $setting = SystemSetting::create($request->all());
        return response()->json($setting, 201);
    }

    public function resetDefaults()
    {
        $seeder = new \Database\Seeders\SystemSettingSeeder();
        $seeder->run();

        $settings = SystemSetting::all()->groupBy('group');
        return response()->json([
            'message' => 'System settings reset to defaults successfully',
            'settings' => $settings
        ]);
    }
}
