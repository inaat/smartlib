<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;
use App\Models\Library;
use Carbon\Carbon;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraries = Library::all();

        $events = [
            [
                'title' => 'Introduction to Research Methods Workshop',
                'description' => 'Learn effective research methodologies and academic writing techniques',
                'venue' => 'Conference Room A',
                'capacity' => 50,
                'registered' => 0,
                'waitlist' => 0,
                'type' => 'workshop',
                'is_paid' => false,
                'price' => null,
                'image' => null,
                'organizer_id' => null,
                'is_active' => true,
                'speakers' => [],
                'agenda' => [],
                'materials' => [],
                'prerequisites' => [],
                'certificate_provided' => true,
                'recording_available' => false,
                'tags' => ['research', 'academic', 'workshop'],
                'target_audience' => ['Students', 'Researchers'],
                'difficulty' => 'beginner',
                'attendance_tracking' => true,
            ],
            [
                'title' => 'Digital Library Resources Training',
                'description' => 'Hands-on training for using digital library databases and resources',
                'venue' => 'Computer Lab',
                'capacity' => 30,
                'registered' => 0,
                'waitlist' => 0,
                'type' => 'workshop',
                'is_paid' => false,
                'price' => null,
                'image' => null,
                'organizer_id' => null,
                'is_active' => true,
                'speakers' => [],
                'agenda' => [],
                'materials' => [],
                'prerequisites' => [],
                'certificate_provided' => false,
                'recording_available' => true,
                'tags' => ['digital', 'training', 'resources'],
                'target_audience' => ['All Students'],
                'difficulty' => 'beginner',
                'attendance_tracking' => true,
            ],
            [
                'title' => 'Author Meet & Greet',
                'description' => 'Meet bestselling author and discuss their latest book',
                'venue' => 'Main Hall',
                'capacity' => 100,
                'registered' => 0,
                'waitlist' => 0,
                'type' => 'networking',
                'is_paid' => true,
                'price' => 150,
                'image' => null,
                'organizer_id' => null,
                'is_active' => true,
                'speakers' => [],
                'agenda' => [],
                'materials' => [],
                'prerequisites' => [],
                'certificate_provided' => false,
                'recording_available' => false,
                'tags' => ['author', 'books', 'networking'],
                'target_audience' => ['Book Lovers', 'Students'],
                'difficulty' => null,
                'attendance_tracking' => true,
            ],
            [
                'title' => 'Study Skills Seminar',
                'description' => 'Improve your study habits and time management skills',
                'venue' => 'Seminar Room B',
                'capacity' => 40,
                'registered' => 0,
                'waitlist' => 0,
                'type' => 'seminar',
                'is_paid' => false,
                'price' => null,
                'image' => null,
                'organizer_id' => null,
                'is_active' => true,
                'speakers' => [],
                'agenda' => [],
                'materials' => [],
                'prerequisites' => [],
                'certificate_provided' => true,
                'recording_available' => true,
                'tags' => ['study-skills', 'productivity', 'seminar'],
                'target_audience' => ['All Students'],
                'difficulty' => 'beginner',
                'attendance_tracking' => true,
            ],
        ];

        foreach ($libraries as $library) {
            foreach ($events as $eventData) {
                $eventData['library_id'] = $library->id;
                $eventDate = Carbon::now()->addDays(rand(7, 30));
                $eventData['date'] = $eventDate->format('Y-m-d');
                $eventData['start_time'] = $eventDate->setHour(rand(9, 16))->setMinute(0)->format('H:i:s');
                $eventData['end_time'] = $eventDate->copy()->addHours(rand(2, 4))->format('H:i:s');
                $eventData['registration_deadline'] = $eventDate->copy()->subDays(2);
                Event::create($eventData);
            }
        }
    }
}
