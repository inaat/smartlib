<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Library;
use App\Models\LibraryOperatingHour;
use App\Models\LibraryFacility;

class LibraryDefaultsSeeder extends Seeder
{
    public function run(): void
    {
        $libraries = Library::all();

        foreach ($libraries as $library) {
            // Add default operating hours if none exist
            if ($library->operatingHours()->count() === 0) {
                $days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                
                foreach ($days as $day) {
                    $isOpen = !in_array($day, ['Sunday']);
                    $openTime = $day === 'Friday' ? '08:00' : '08:00';
                    $closeTime = $day === 'Friday' ? '20:00' : ($day === 'Saturday' ? '18:00' : '22:00');
                    
                    LibraryOperatingHour::create([
                        'library_id' => $library->id,
                        'day_of_week' => $day,
                        'is_open' => $isOpen,
                        'open_time' => $isOpen ? $openTime : null,
                        'close_time' => $isOpen ? $closeTime : null,
                    ]);
                }
            }

            // Add default facilities if none exist
            if ($library->facilities()->count() === 0) {
                $defaultFacilities = [
                    ['name' => 'High-Speed WiFi', 'icon' => 'Wifi'],
                    ['name' => 'Cafeteria', 'icon' => 'Coffee'],
                    ['name' => 'Printing Services', 'icon' => 'Printer'],
                    ['name' => 'Library Books', 'icon' => 'BookOpen'],
                    ['name' => 'Power Outlets', 'icon' => 'Zap'],
                    ['name' => 'Air Conditioning', 'icon' => 'Wind'],
                    ['name' => 'Lockers', 'icon' => 'Lock'],
                    ['name' => 'CCTV Security', 'icon' => 'Camera'],
                ];

                foreach ($defaultFacilities as $index => $facility) {
                    LibraryFacility::create([
                        'library_id' => $library->id,
                        'name' => $facility['name'],
                        'icon' => $facility['icon'],
                        'is_available' => true,
                        'order' => $index,
                    ]);
                }
            }
        }
    }
}
