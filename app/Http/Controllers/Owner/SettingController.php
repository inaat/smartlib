<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\SystemSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function index()
    {
        $settings = SystemSetting::whereIn('key', ['app_name', 'app_logo'])->get()->keyBy('key');
        
        return response()->json([
            'app_name' => $settings->get('app_name')?->value ?? config('app.name'),
            'app_logo' => $settings->get('app_logo')?->value ? asset('storage/' . $settings->get('app_logo')->value) : null,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'app_name' => 'nullable|string|max:255',
            'app_logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->has('app_name')) {
            SystemSetting::set('app_name', $request->input('app_name') ?? '', 'general', 'text');
        }

        if ($request->hasFile('app_logo')) {
            // Validate image specifically here to catch issues
            $request->validate([
                'app_logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $setting = SystemSetting::where('key', 'app_logo')->first();
            if ($setting && $setting->value) {
                Storage::disk('public')->delete($setting->value);
            }

            $path = $request->file('app_logo')->store('settings', 'public');
            SystemSetting::set('app_logo', $path, 'general', 'text');
        }

        return response()->json(['message' => 'Settings updated successfully']);
    }
}
