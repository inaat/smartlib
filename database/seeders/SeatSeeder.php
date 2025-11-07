<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Seat;
use App\Models\Library;

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

            foreach ($sections as $sectionLetter) {
                for ($i = 1; $i <= 20; $i++) {
                    $type = $types[array_rand($types)];
                    Seat::create([
                        'library_id' => $library->id,
                        'seat_number' => $sectionLetter . str_pad($i, 3, '0', STR_PAD_LEFT),
                        'status' => 'available',
                        'position' => ['x' => rand(50, 800), 'y' => rand(50, 600)],
                        'type' => $type,
                        'amenities' => ['Power Outlet', 'Desk Lamp', 'Storage', 'USB Charger'],
                        'qr_code' => 'QR-' . $library->id . '-' . $sectionLetter . $i,
                        'next_available_time' => null,
                        'current_booking_id' => null,
                        'floor' => rand(1, 3),
                        'section' => 'Section ' . $sectionLetter,
                        'near_window' => rand(0, 1) == 1,
                        'power_outlets' => rand(1, 4),
                        'has_computer' => $type === 'collaborative' ? true : (rand(0, 1) == 1),
                        'max_occupancy' => $type === 'group' ? rand(4, 8) : 1,
                        'hourly_rate' => $type === 'premium' ? 50.00 : null,
                        'restrictions' => $type === 'silent' ? ['No talking', 'No phone calls'] : [],
                    ]);
                }
            }
        }
    }
}
