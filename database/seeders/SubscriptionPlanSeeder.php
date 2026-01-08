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
                'duration_days' => 7,
                'features' => ['Basic seat booking', 'Limited book borrowing', '2 hours per day'],
                'seat_bookings_limit' => 2,
                'book_reservations_limit' => 2,
                'digital_books_access' => false,
                'priority_booking' => false,
                'event_discounts' => 0,
                'status' => 'active',
            ],
            [
                'name' => 'Basic Plan',
                'description' => 'Perfect for casual readers',
                'price' => 299,
                'duration_days' => 30,
                'features' => ['10 seat bookings/month', '5 book borrowings', 'WiFi access', 'Event access'],
                'seat_bookings_limit' => 10,
                'book_reservations_limit' => 5,
                'digital_books_access' => true,
                'priority_booking' => false,
                'event_discounts' => 10,
                'status' => 'active',
            ],
            [
                'name' => 'Premium Plan',
                'description' => 'For serious students and researchers',
                'price' => 799,
                'duration_days' => 30,
                'features' => ['Unlimited seat bookings', '15 book borrowings', 'Priority seating', 'All events free', 'Extended hours'],
                'seat_bookings_limit' => null,
                'book_reservations_limit' => 15,
                'digital_books_access' => true,
                'priority_booking' => true,
                'event_discounts' => 50,
                'status' => 'active',
            ],
            [
                'name' => 'Annual Plan',
                'description' => 'Best value for full year',
                'price' => 7999,
                'duration_days' => 365,
                'features' => ['Unlimited everything', 'Priority support', 'Private study rooms', 'All events free', 'Guest passes'],
                'seat_bookings_limit' => null,
                'book_reservations_limit' => null,
                'digital_books_access' => true,
                'priority_booking' => true,
                'event_discounts' => 100,
                'status' => 'active',
            ],
        ];

        foreach ($plans as $plan) {
            SubscriptionPlan::create($plan);
        }
    }
}
