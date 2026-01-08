<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LibrarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 5 libraries
        $libraries = [
            ['name' => 'Central Library', 'address' => '123 Main Street, Karachi', 'opening_time' => '08:00:00', 'closing_time' => '22:00:00'],
            ['name' => 'North Campus Library', 'address' => '456 University Road, Lahore', 'opening_time' => '07:00:00', 'closing_time' => '23:00:00'],
            ['name' => 'South Branch Library', 'address' => '789 College Avenue, Islamabad', 'opening_time' => '09:00:00', 'closing_time' => '21:00:00'],
            ['name' => 'East Wing Library', 'address' => '321 Study Lane, Faisalabad', 'opening_time' => '08:30:00', 'closing_time' => '22:30:00'],
            ['name' => 'West Side Library', 'address' => '654 Book Street, Multan', 'opening_time' => '08:00:00', 'closing_time' => '22:00:00'],
        ];

        foreach ($libraries as $index => $library) {
            $libraryId = DB::table('libraries')->insertGetId([
                'name' => $library['name'],
                'address' => $library['address'],
                'opening_time' => $library['opening_time'],
                'closing_time' => $library['closing_time'],
                'rules' => 'No food or drinks. Maintain silence. Respect study hours.',
                'contact_phone' => '021-' . rand(1000000, 9999999),
                'contact_email' => strtolower(str_replace(' ', '', $library['name'])) . '@smartlib.com',
                'is_active' => true,
                'created_by' => 2, // Created by super admin
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Create floors for each library
            $floorTypes = ['quiet_zone', 'discussion_area', 'girls_only', 'boys_only', 'mixed'];
            for ($f = 1; $f <= 4; $f++) {
                $floorId = DB::table('floors')->insertGetId([
                    'library_id' => $libraryId,
                    'name' => "Floor $f",
                    'type' => $floorTypes[($f - 1) % 5],
                    'capacity' => rand(50, 100),
                    'order' => $f,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                // Create seats for each floor
                $seatTypes = ['open', 'group', 'cabin'];
                for ($s = 1; $s <= 25; $s++) {
                    DB::table('seats')->insert([
                        'floor_id' => $floorId,
                        'seat_number' => "F{$f}-S" . str_pad($s, 3, '0', STR_PAD_LEFT),
                        'seat_type' => $seatTypes[$s % 3],
                        'zone' => 'Zone ' . chr(65 + ($s % 4)), // Zone A, B, C, D
                        'position_x' => ($s % 5) * 100,
                        'position_y' => floor($s / 5) * 100,
                        'qr_code' => 'QR-' . uniqid() . '-' . $libraryId . '-' . $floorId . '-' . $s,
                        'qr_generated_at' => now(),
                        'qr_expires_at' => now()->addYear(),
                        'is_maintenance' => $s % 20 == 0, // Every 20th seat is in maintenance
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }

            // Assign librarians to libraries
            $librarianIds = range(5, 14); // Librarian user IDs
            shuffle($librarianIds);
            $assignedLibrarians = array_slice($librarianIds, 0, rand(2, 4));
            
            foreach ($assignedLibrarians as $librarianId) {
                DB::table('library_librarian')->insert([
                    'library_id' => $libraryId,
                    'user_id' => $librarianId,
                    'permissions' => json_encode(['manage_seats', 'view_analytics', 'manage_queue']),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Create booking rules for each library
            DB::table('booking_rules')->insert([
                'library_id' => $libraryId,
                'max_booking_hours' => rand(3, 6),
                'min_extension_minutes' => 10,
                'max_extensions_per_day' => 3,
                'late_checkin_minutes' => 15,
                'auto_cancel_minutes' => 30,
                'no_show_time_limit' => 15,
                'require_qr_scan' => true,
                'max_delay_minutes' => 10,
                'auto_checkout_enabled' => true,
                'smart_queue_enabled' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
