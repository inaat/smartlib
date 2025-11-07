<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Get first library for librarian assignment
        $firstLibrary = \App\Models\Library::first();

        // Create roles if they don't exist
        $superAdminRole = Role::firstOrCreate(['name' => 'super_admin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $librarianRole = Role::firstOrCreate(['name' => 'librarian']);
        $studentRole = Role::firstOrCreate(['name' => 'student']);

        // Create Super Admin
        $superAdmin = User::updateOrCreate(
            ['email' => 'superadmin@icap.edu.pk'],
            [
                'name' => 'Super Administrator',
                'crn' => 'SUPERADMIN001',
                'password' => Hash::make('superadmin'),
                'user_type' => 'super_admin',
                'status' => 'approved',
                'loyalty_points' => 0,
            ]
        );
        $superAdmin->assignRole($superAdminRole);

        // Create Librarian with library access
        $librarian = User::updateOrCreate(
            ['email' => 'admin@icap.edu.pk'],
            [
                'name' => 'Library Admin',
                'crn' => 'ADMIN001',
                'password' => Hash::make('admin'),
                'user_type' => 'librarian',
                'status' => 'approved',
                'loyalty_points' => 0,
                'library_id' => $firstLibrary?->id,
            ]
        );
        $librarian->assignRole($librarianRole);

        // Create Student
        $student = User::updateOrCreate(
            ['email' => 'student@icap.edu.pk'],
            [
                'name' => 'Ahmad Hassan',
                'crn' => 'ICAP2024001',
                'password' => Hash::make('student'),
                'user_type' => 'student',
                'status' => 'approved',
                'loyalty_points' => 250,
            ]
        );
        $student->assignRole($studentRole);

        $this->command->info('Users seeded successfully!');
        $this->command->info('Super Admin: SUPERADMIN001 / superadmin');
        $this->command->info('Librarian: ADMIN001 / admin');
        $this->command->info('Student: ICAP2024001 / student');
    }
}
