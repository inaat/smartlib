<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Owner
        DB::table('users')->insert([
            'name' => 'System Owner',
            'email' => 'owner@smartlib.com',
            'password' => Hash::make('password'),
            'role' => 'owner',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Create Super Admins
        for ($i = 1; $i <= 3; $i++) {
            DB::table('users')->insert([
                'name' => "Super Admin $i",
                'email' => "superadmin$i@smartlib.com",
                'password' => Hash::make('password'),
                'role' => 'super_admin',
                'is_active' => true,
                'created_by' => 1, // Created by owner
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Create Librarians
        for ($i = 1; $i <= 3; $i++) {
            DB::table('users')->insert([
                'name' => "Librarian $i",
                'email' => "librarian$i@smartlib.com",
                'password' => Hash::make('password'),
                'role' => 'librarian',
                'is_active' => true,
                'created_by' => 2, // Created by super admin
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Create Students
        $caLevels = ['PRC', 'CAP', 'Final'];
        for ($i = 1; $i <= 10; $i++) {
            $trialUsed = $i % 3 == 0; // Some students used trial
            $trialStarted = $trialUsed ? now()->subDays(rand(10, 30)) : null;
            
            DB::table('users')->insert([
                'name' => "Student $i",
                'email' => "student$i@smartlib.com",
                'password' => Hash::make('password'),
                'phone' => '0300' . str_pad($i, 7, '0', STR_PAD_LEFT),
                'crn' => 'CRN' . str_pad($i, 6, '0', STR_PAD_LEFT),
                'role' => 'student',
                'ca_level' => $caLevels[$i % 3],
                'is_active' => true,
                'trial_used' => $trialUsed,
                'trial_started_at' => $trialStarted,
                'trial_ends_at' => $trialStarted ? $trialStarted->addDays(7) : null,
                'created_at' => now()->subDays(rand(1, 60)),
                'updated_at' => now(),
            ]);
        }
    }
}
