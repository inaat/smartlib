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
        $settings = SystemSetting::whereIn('group', ['general', 'appearance'])->get();
        $public = [];
        foreach ($settings as $setting) {
            $public[$setting->key] = $setting->value;
        }
        return response()->json($public);
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
}
