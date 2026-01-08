<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Seat;
use App\Models\Library;
use Illuminate\Support\Facades\DB;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraries = Library::all();

        foreach ($libraries as $library) {
            $sections = ['A', 'B', 'C'];
            $types = ['regular', 'premium', 'group', 'silent', 'collaborative'];

            // Create seat sections for this library
            $sectionIds = [];
            foreach ($sections as $sectionLetter) {
                $sectionId = DB::table('seat_sections')->insertGetId([
                    'library_id' => $library->id,
                    'name' => 'Section ' . $sectionLetter,
                    'total_seats' => 20,
                    'description' => 'Section ' . $sectionLetter . ' seating area',
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
                $sectionIds[$sectionLetter] = $sectionId;
            }

            // Create seats for each section
            foreach ($sections as $sectionLetter) {
                for ($i = 1; $i <= 20; $i++) {
                    $type = $types[array_rand($types)];
                    Seat::create([
                        'library_id' => $library->id,
                        'section_id' => $sectionIds[$sectionLetter],
                        'seat_number' => $sectionLetter . str_pad($i, 3, '0', STR_PAD_LEFT),
                        'status' => 'available',
                        'type' => $type,
                        'qr_code' => 'QR-' . $library->id . '-' . $sectionLetter . $i,
                        'next_available_time' => null,
                        'current_booking_id' => null,
                        'floor' => rand(1, 3),
                        'near_window' => rand(0, 1) == 1,
                        'power_outlets' => rand(1, 4),
                        'has_computer' => $type === 'collaborative' ? true : (rand(0, 1) == 1),
                        'max_occupancy' => $type === 'group' ? rand(4, 8) : 1,
                    ]);
                }
            }
        }
    }
}
