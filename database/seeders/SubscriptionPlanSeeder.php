<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Free Trial',
                'description' => 'Try our services for free',
                'price' => 0,
                'duration' => 7,
                'features' => ['Basic seat booking', 'Limited book borrowing', '2 hours per day'],
                'booking_limit' => 2,
                'digital_book_access' => false,
                'priority_support' => false,
                'event_discounts' => 0,
                'is_active' => true,
                'trial_period' => 7,
            ],
            [
                'name' => 'Basic Plan',
                'description' => 'Perfect for casual readers',
                'price' => 299,
                'duration' => 30,
                'features' => ['10 seat bookings/month', '5 book borrowings', 'WiFi access', 'Event access'],
                'booking_limit' => 10,
                'digital_book_access' => true,
                'priority_support' => false,
                'event_discounts' => 10,
                'is_active' => true,
                'trial_period' => null,
            ],
            [
                'name' => 'Premium Plan',
                'description' => 'For serious students and researchers',
                'price' => 799,
                'duration' => 30,
                'features' => ['Unlimited seat bookings', '15 book borrowings', 'Priority seating', 'All events free', 'Extended hours'],
                'booking_limit' => null,
                'digital_book_access' => true,
                'priority_support' => true,
                'event_discounts' => 50,
                'is_active' => true,
                'trial_period' => null,
            ],
            [
                'name' => 'Annual Plan',
                'description' => 'Best value for full year',
                'price' => 7999,
                'duration' => 365,
                'features' => ['Unlimited everything', 'Priority support', 'Private study rooms', 'All events free', 'Guest passes'],
                'booking_limit' => null,
                'digital_book_access' => true,
                'priority_support' => true,
                'event_discounts' => 100,
                'is_active' => true,
                'trial_period' => null,
            ],
        ];

        foreach ($plans as $plan) {
            SubscriptionPlan::create($plan);
        }
    }
}
