<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Monthly Basic',
                'description' => 'Access to all library facilities for one month',
                'price' => 1500.00,
                'duration_type' => 'monthly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
            [
                'name' => 'Monthly Premium',
                'description' => 'Premium access with priority booking and extended hours',
                'price' => 2500.00,
                'duration_type' => 'monthly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
            [
                'name' => 'Quarterly Standard',
                'description' => 'Three months access with 10% discount',
                'price' => 4000.00,
                'duration_type' => 'quarterly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
            [
                'name' => 'Quarterly Premium',
                'description' => 'Three months premium access with all benefits',
                'price' => 6500.00,
                'duration_type' => 'quarterly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
            [
                'name' => 'Yearly Standard',
                'description' => 'Full year access with 20% discount',
                'price' => 15000.00,
                'duration_type' => 'yearly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
            [
                'name' => 'Yearly Premium',
                'description' => 'Full year premium access with maximum benefits',
                'price' => 25000.00,
                'duration_type' => 'yearly',
                'duration_value' => 1,
                'trial_days' => 7,
            ],
        ];

        foreach ($plans as $plan) {
            DB::table('subscription_plans')->insert([
                'name' => $plan['name'],
                'description' => $plan['description'],
                'price' => $plan['price'],
                'duration_type' => $plan['duration_type'],
                'duration_value' => $plan['duration_value'],
                'auto_renewal_default' => false,
                'trial_days' => $plan['trial_days'],
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Create user subscriptions for some students
        $studentIds = DB::table('users')->where('role', 'student')->pluck('id')->toArray();
        
        // Take a subset of students to have subscriptions
        $subscribedStudentIds = array_slice($studentIds, 10, 65); // Roughly IDs 15-80 if sequential

        foreach ($subscribedStudentIds as $userId) {
            $planId = rand(1, 6);
            $startedAt = now()->subDays(rand(1, 60));
            $expiresAt = match($planId) {
                1, 2 => $startedAt->copy()->addMonth(),
                3, 4 => $startedAt->copy()->addMonths(3),
                5, 6 => $startedAt->copy()->addYear(),
            };

            DB::table('user_subscriptions')->insert([
                'user_id' => $userId,
                'subscription_plan_id' => $planId,
                'started_at' => $startedAt,
                'expires_at' => $expiresAt,
                'auto_renew' => $userId % 3 == 0, // Every 3rd student has auto-renew
                'status' => $expiresAt > now() ? 'active' : 'expired',
                'amount_paid' => DB::table('subscription_plans')->where('id', $planId)->value('price'),
                'payment_method' => ['card', 'bank_transfer', 'cash'][$userId % 3],
                'transaction_id' => 'TXN-' . uniqid(),
                'renewal_attempts' => 0,
                'created_at' => $startedAt,
                'updated_at' => now(),
            ]);

            // Create payment record
            DB::table('payments')->insert([
                'user_id' => $userId,
                'user_subscription_id' => DB::getPdo()->lastInsertId(),
                'amount' => DB::table('subscription_plans')->where('id', $planId)->value('price'),
                'payment_method' => ['card', 'bank_transfer', 'cash'][$userId % 3],
                'transaction_id' => 'TXN-' . uniqid(),
                'gateway' => ['stripe', 'paypal', 'bank'][($userId % 3)],
                'status' => 'completed',
                'paid_at' => $startedAt,
                'created_at' => $startedAt,
                'updated_at' => now(),
            ]);
        }
    }
}
