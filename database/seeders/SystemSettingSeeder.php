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
                'label' => 'System Name',
                'description' => 'The public organization name displayed across all portals.',
            ],
            [
                'key' => 'site_description',
                'value' => 'Intelligent library management platform for seat booking, inventory, and analytics.',
                'group' => 'general',
                'type' => 'textarea',
                'label' => 'System Description',
                'description' => 'A brief description of the system shown on landing and auth pages.',
            ],
            [
                'key' => 'contact_email',
                'value' => 'support@smartlib.com',
                'group' => 'general',
                'type' => 'text',
                'label' => 'Support Email',
                'description' => 'Primary email address for system support inquiries.',
            ],
            [
                'key' => 'contact_phone',
                'value' => '+92 300 1234567',
                'group' => 'general',
                'type' => 'text',
                'label' => 'Support Contact Phone',
                'description' => 'Helpline phone number for student inquiries.',
            ],
            [
                'key' => 'maintenance_mode',
                'value' => 'false',
                'group' => 'general',
                'type' => 'boolean',
                'label' => 'Maintenance Mode',
                'description' => 'Enable maintenance mode to prevent non-admin access during updates.',
            ],
            [
                'key' => 'allow_user_registration',
                'value' => 'true',
                'group' => 'general',
                'type' => 'boolean',
                'label' => 'Allow Student Self-Registration',
                'description' => 'Allow new students to sign up directly from the login page.',
            ],
            [
                'key' => 'require_student_approval',
                'value' => 'false',
                'group' => 'general',
                'type' => 'boolean',
                'label' => 'Require Admin Approval for New Students',
                'description' => 'Newly registered student accounts must be approved by admin before logging in.',
            ],

            // Booking Settings
            [
                'key' => 'max_booking_duration',
                'value' => '240',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Max Booking Duration (Minutes)',
                'description' => 'Maximum single session duration allowed per seat booking.',
            ],
            [
                'key' => 'booking_advance_days',
                'value' => '7',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Advance Booking Limit (Days)',
                'description' => 'How many days in advance students can book a seat.',
            ],
            [
                'key' => 'allow_seat_extensions',
                'value' => 'true',
                'group' => 'booking',
                'type' => 'boolean',
                'label' => 'Allow Active Seat Extensions',
                'description' => 'Allow students to extend their active seat booking if no conflict exists.',
            ],
            [
                'key' => 'max_extension_minutes',
                'value' => '60',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Max Extension Time (Minutes)',
                'description' => 'Maximum duration added per single seat extension request.',
            ],
            [
                'key' => 'queue_hold_minutes',
                'value' => '10',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Queue Notification Hold (Minutes)',
                'description' => 'Time window a queued student has to check in when a seat becomes free.',
            ],
            [
                'key' => 'allow_cancellations',
                'value' => 'true',
                'group' => 'booking',
                'type' => 'boolean',
                'label' => 'Allow Student Booking Cancellations',
                'description' => 'Permit students to cancel upcoming bookings prior to start time.',
            ],
            [
                'key' => 'cancellation_buffer_minutes',
                'value' => '15',
                'group' => 'booking',
                'type' => 'number',
                'label' => 'Cancellation Notice Buffer (Minutes)',
                'description' => 'Minimum minutes before session start allowed for cancellation without penalty.',
            ],
            [
                'key' => 'overstay_penalty_enabled',
                'value' => 'true',
                'group' => 'booking',
                'type' => 'boolean',
                'label' => 'Enable Overstay Warning System',
                'description' => 'Flag and log seats when students exceed their scheduled checkout time.',
            ],

            // Library & Book Inventory Settings
            [
                'key' => 'max_books_per_student',
                'value' => '3',
                'group' => 'inventory',
                'type' => 'number',
                'label' => 'Max Books Borrowed per Student',
                'description' => 'Maximum number of physical books a student can hold simultaneously.',
            ],
            [
                'key' => 'max_book_reservation_days',
                'value' => '14',
                'group' => 'inventory',
                'type' => 'number',
                'label' => 'Max Book Borrow Duration (Days)',
                'description' => 'Standard loan duration granted for book reservations.',
            ],
            [
                'key' => 'late_book_fine_per_day',
                'value' => '10',
                'group' => 'inventory',
                'type' => 'number',
                'label' => 'Overdue Book Fine per Day (Rs.)',
                'description' => 'Daily penalty charge applied to overdue physical books.',
            ],
            [
                'key' => 'allow_digital_book_downloads',
                'value' => 'true',
                'group' => 'inventory',
                'type' => 'boolean',
                'label' => 'Allow Digital Book PDF Downloads',
                'description' => 'Allow registered students to read or download digital E-books.',
            ],

            // Notifications & Alerts Settings
            [
                'key' => 'enable_email_notifications',
                'value' => 'true',
                'group' => 'notifications',
                'type' => 'boolean',
                'label' => 'Enable System Email Notifications',
                'description' => 'Send transactional emails for booking confirmations, cancellations, and alerts.',
            ],
            [
                'key' => 'notify_on_booking_expiry',
                'value' => 'true',
                'group' => 'notifications',
                'type' => 'boolean',
                'label' => 'Send Pre-Expiry Reminders',
                'description' => 'Alert students shortly before their active booking session expires.',
            ],
            [
                'key' => 'expiry_reminder_lead_minutes',
                'value' => '15',
                'group' => 'notifications',
                'type' => 'number',
                'label' => 'Expiry Lead Warning Time (Minutes)',
                'description' => 'Minutes before checkout when the pre-expiry alert is triggered.',
            ],
            [
                'key' => 'notify_on_queue_turn',
                'value' => 'true',
                'group' => 'notifications',
                'type' => 'boolean',
                'label' => 'Queue Availability Alerts',
                'description' => 'Send instant notifications to waiting list students when a seat opens up.',
            ],

            // Security & Controls Settings
            [
                'key' => 'session_timeout_minutes',
                'value' => '120',
                'group' => 'security',
                'type' => 'number',
                'label' => 'Inactive Session Timeout (Minutes)',
                'description' => 'Duration of inactivity before user web sessions are automatically logged out.',
            ],
            [
                'key' => 'max_login_attempts',
                'value' => '5',
                'group' => 'security',
                'type' => 'number',
                'label' => 'Max Failed Login Attempts',
                'description' => 'Number of failed password attempts allowed before temporary lockout.',
            ],
            [
                'key' => 'enforce_strong_passwords',
                'value' => 'true',
                'group' => 'security',
                'type' => 'boolean',
                'label' => 'Enforce Strong Passwords',
                'description' => 'Require passwords to contain at least 8 characters with numbers and symbols.',
            ],
        ];

        foreach ($settings as $setting) {
            SystemSetting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }
}
