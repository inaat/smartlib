<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SystemSetting;
use Illuminate\Http\Request;

class SystemSettingController extends Controller
{
    public function index()
    {
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
            $setting = SystemSetting::where('key', $settingData['key'])->first();
            if ($setting) {
                $value = $settingData['value'];
                if ($setting->type === 'json' && is_array($value)) {
                    $value = json_encode($value);
                }
                $setting->update(['value' => $value]);
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
