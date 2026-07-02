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
            $openCarbon = \Carbon\Carbon::createFromFormat('H:i:s', $library['opening_time']);
            $closeCarbon = \Carbon\Carbon::createFromFormat('H:i:s', $library['closing_time']);
            $openingHoursStr = $openCarbon->format('h:i A') . ' - ' . $closeCarbon->format('h:i A');

            $libraryId = DB::table('libraries')->insertGetId([
                'name' => $library['name'],
                'address' => $library['address'],
                'opening_hours' => $openingHoursStr,
                'is_active' => true,
                'created_by' => 2, // Created by super admin
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Create operating hours for the library (Monday to Sunday)
            $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            foreach ($daysOfWeek as $day) {
                DB::table('library_operating_hours')->insert([
                    'library_id' => $libraryId,
                    'day_of_week' => $day,
                    'is_open' => true,
                    'open_time' => $library['opening_time'],
                    'close_time' => $library['closing_time'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Create library rules
            $rules = [
                ['type' => 'general', 'rule_text' => 'No food or drinks allowed in the library.', 'order' => 1],
                ['type' => 'general', 'rule_text' => 'Maintain silence in quiet zones.', 'order' => 2],
                ['type' => 'booking', 'rule_text' => 'Respect study hours and booking times.', 'order' => 3],
                ['type' => 'conduct', 'rule_text' => 'Be respectful to other library users.', 'order' => 4],
            ];

            foreach ($rules as $rule) {
                DB::table('library_rules')->insert([
                    'library_id' => $libraryId,
                    'type' => $rule['type'],
                    'rule_text' => $rule['rule_text'],
                    'order' => $rule['order'],
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Create floors for each library
            $floorTypes = ['quiet_zone', 'discussion_area', 'girls_only', 'boys_only', 'mixed'];
            for ($f = 1; $f <= 1; $f++) {
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

                // Create sections for each floor
                $sections = [
                    ['name' => 'Section A', 'description' => 'Window side seating area'],
                    ['name' => 'Section B', 'description' => 'Central study area'],
                    ['name' => 'Section C', 'description' => 'Corner quiet zone'],
                ];

                $seatTypes = ['open', 'group', 'cabin'];
                $seatCounter = 1;

                foreach ($sections as $sectionData) {
                    $sectionId = DB::table('seat_sections')->insertGetId([
                        'library_id' => $libraryId,
                        'floor_id' => $floorId,
                        'name' => $sectionData['name'],
                        'description' => $sectionData['description'],
                        'total_seats' => 8, // Will be updated as we add seats
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);

                    // Create 8-9 seats for each section
                    $seatsInSection = rand(8, 9);
                    for ($s = 0; $s < $seatsInSection; $s++) {
                        DB::table('seats')->insert([
                            'floor_id' => $floorId,
                            'section_id' => $sectionId,
                            'seat_number' => "F{$f}-S" . str_pad($seatCounter, 3, '0', STR_PAD_LEFT),
                            'seat_type' => $seatTypes[$seatCounter % 3],
                            'zone' => 'Zone ' . chr(65 + ($seatCounter % 4)), // Zone A, B, C, D
                            'position_x' => ($seatCounter % 5) * 100,
                            'position_y' => floor($seatCounter / 5) * 100,
                            'qr_code' => 'QR-' . uniqid() . '-' . $libraryId . '-' . $floorId . '-' . $seatCounter,
                            'qr_generated_at' => now(),
                            'qr_expires_at' => now()->addYear(),
                            'is_maintenance' => $seatCounter % 20 == 0, // Every 20th seat is in maintenance
                            'is_active' => true,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);
                        $seatCounter++;
                    }

                    // Update section total_seats count
                    DB::table('seat_sections')
                        ->where('id', $sectionId)
                        ->update(['total_seats' => $seatsInSection]);
                }
            }

            // Assign librarians to libraries
            $librarianIds = DB::table('users')->where('role', 'librarian')->pluck('id')->toArray();
            shuffle($librarianIds);
            $assignedLibrarians = array_slice($librarianIds, 0, rand(2, 3));
            
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
