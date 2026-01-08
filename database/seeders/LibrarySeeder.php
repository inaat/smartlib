<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Library;

class LibrarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraries = [
            [
                'name' => 'Central Campus Library',
                'description' => 'Main library with extensive collection of books and study spaces',
                'address' => '123 University Ave, Metro Manila',
                'latitude' => 14.5995,
                'longitude' => 120.9842,
                'total_seats' => 0,
                'available_seats' => 0,
                'opening_hours' => '7:00 AM - 10:00 PM',
                'facilities' => ['WiFi', 'AC', 'Silent Zone', 'Group Study Rooms', 'Computer Lab'],
                'capacity' => 200,
                'current_occupancy' => 0,
                'images' => [],
                'contact_info' => ['phone' => '(02) 1234-5678', 'email' => 'central@library.edu'],
                'rules' => ['No food or drinks', 'Keep phones on silent', 'Respect study hours'],
                'special_features' => ['24/7 Access', 'Study Pods', 'Digital Resources'],
                'accessibility_features' => ['Wheelchair Access', 'Elevator', 'Accessible Restrooms'],
                'parking_available' => true,
                'wifi_password' => 'library2024',
                'operating_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'holiday_schedule' => [],
                'is_active' => true,
            ],
            [
                'name' => 'Science & Technology Library',
                'description' => 'Specialized library for science and technology resources',
                'address' => '456 Research Blvd, Quezon City',
                'latitude' => 14.6507,
                'longitude' => 121.0494,
                'total_seats' => 0,
                'available_seats' => 0,
                'opening_hours' => '8:00 AM - 9:00 PM',
                'facilities' => ['WiFi', 'AC', 'Research Lab', 'Computer Lab', 'Printing'],
                'capacity' => 150,
                'current_occupancy' => 0,
                'images' => [],
                'contact_info' => ['phone' => '(02) 2234-5678', 'email' => 'scitech@library.edu'],
                'rules' => ['No food or drinks', 'Keep phones on silent', 'Lab equipment usage requires training'],
                'special_features' => ['Research Database Access', '3D Printers', 'VR Lab'],
                'accessibility_features' => ['Wheelchair Access', 'Elevator'],
                'parking_available' => true,
                'wifi_password' => 'scitech2024',
                'operating_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'holiday_schedule' => [],
                'is_active' => true,
            ],
            [
                'name' => 'Medical Library',
                'description' => 'Medical and health sciences library',
                'address' => '789 Health St, Manila',
                'latitude' => 14.5764,
                'longitude' => 121.0851,
                'total_seats' => 0,
                'available_seats' => 0,
                'opening_hours' => '7:00 AM - 8:00 PM',
                'facilities' => ['WiFi', 'AC', 'Medical Journals', 'Silent Zone'],
                'capacity' => 100,
                'current_occupancy' => 0,
                'images' => [],
                'contact_info' => ['phone' => '(02) 3234-5678', 'email' => 'medical@library.edu'],
                'rules' => ['Strict silence policy', 'No food or drinks', 'Medical students priority'],
                'special_features' => ['Medical Database', 'Anatomy Models', 'Clinical Resources'],
                'accessibility_features' => ['Wheelchair Access'],
                'parking_available' => false,
                'wifi_password' => 'medlib2024',
                'operating_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'holiday_schedule' => [],
                'is_active' => true,
            ],
        ];

        foreach ($libraries as $library) {
            Library::create($library);
        }
    }
}
