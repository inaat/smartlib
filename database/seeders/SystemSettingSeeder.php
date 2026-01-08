<?php

namespace Database\Seeders;

use App\Models\SystemSetting;
use Illuminate\Database\Seeder;

class SystemSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General Settings
            [
                'key' => 'site_name',
                'value' => 'Smart Lib',
                'group' => 'general',
                'type' => 'text',
                'label' => 'Site Name',
                'description' => 'The name of the library system.',
            ],
            [
                'key' => 'site_description',
                'value' => 'Your intelligent library management system for seamless seat booking, study tracking, and productivity enhancement.',
                'group' => 'general',
                'type' => 'textarea',
                'label' => 'Site Description',
                'description' => 'A brief description of the system shown on the login page.',
            ],
            [
                'key' => 'contact_email',
                'value' => 'support@smartlib.com',
                'group' => 'general',
                'type' => 'text',
                'label' => 'Contact Email',
                'description' => 'Primary contact email for support.',
            ],
            [
                'key' => 'maintenance_mode',
                'value' => 'false',
                'group' => 'general',
                'type' => 'boolean',
                'label' => 'Maintenance Mode',
                'description' => 'Enable or disable maintenance mode.',
            ],

            // Booking Settings
            [
                'key' => 'max_booking_duration',
                'value' => '240',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Max Booking Duration (mins)',
                'description' => 'Maximum time a student can book a seat.',
            ],
            [
                'key' => 'booking_advance_days',
                'value' => '7',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Booking Advance Days',
                'description' => 'How many days in advance a student can book.',
            ],
            [
                'key' => 'allow_guest_booking',
                'value' => 'false',
                'group' => 'booking',
                'type' => 'boolean',
                'label' => 'Allow Guest Booking',
                'description' => 'Whether non-registered users can book seats.',
            ],

            // Appearance Settings
            [
                'key' => 'primary_color',
                'value' => '#4f46e5',
                'group' => 'appearance',
                'type' => 'color',
                'label' => 'Primary Color',
                'description' => 'Main theme color for the application.',
            ],
            [
                'key' => 'logo_url',
                'value' => null,
                'group' => 'appearance',
                'type' => 'image',
                'label' => 'Logo URL',
                'description' => 'URL to the application logo.',
            ],
        ];

        foreach ($settings as $setting) {
            SystemSetting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }
}
