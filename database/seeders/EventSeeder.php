<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraryIds = DB::table('libraries')->pluck('id')->toArray();
        $librarianIds = DB::table('users')->where('role', 'librarian')->pluck('id')->toArray();
        $studentIds = DB::table('users')->where('role', 'student')->pluck('id')->toArray();

        $eventTypes = ['Workshop', 'Seminar', 'Study Group', 'Book Club', 'Career Guidance', 'Exam Prep'];
        
        // Create 20 events
        for ($i = 1; $i <= 10; $i++) {
            $libraryId = $libraryIds[array_rand($libraryIds)];
            $createdBy = $librarianIds[array_rand($librarianIds)];
            $startTime = now()->addDays(rand(-10, 30))->setTime(rand(10, 18), 0);
            $endTime = $startTime->copy()->addHours(rand(1, 3));
            
            $eventId = DB::table('events')->insertGetId([
                'library_id' => $libraryId,
                'created_by' => $createdBy,
                'title' => $eventTypes[array_rand($eventTypes)] . ' - ' . $i,
                'description' => 'Join us for an exciting ' . strtolower($eventTypes[array_rand($eventTypes)]) . ' session. Learn, network, and grow!',
                'event_type' => $eventTypes[array_rand($eventTypes)],
                'start_time' => $startTime,
                'end_time' => $endTime,
                'location' => 'Hall ' . chr(65 + rand(0, 4)),
                'max_participants' => rand(20, 100),
                'requires_approval' => $i % 3 == 0, // Every 3rd event requires approval
                'status' => $startTime < now() ? 'completed' : 'published',
                'created_at' => now()->subDays(rand(5, 20)),
                'updated_at' => now(),
            ]);

            // Register students for events
            $participantsCount = rand(10, 50);
            $selectedStudents = array_rand(array_flip($studentIds), min($participantsCount, count($studentIds)));
            
            foreach ((array)$selectedStudents as $studentId) {
                $registeredAt = now()->subDays(rand(1, 15));
                $requiresApproval = DB::table('events')->where('id', $eventId)->value('requires_approval');
                
                $status = 'pending';
                if (!$requiresApproval) {
                    $status = 'approved';
                } elseif (rand(0, 1)) {
                    $status = 'approved';
                }
                
                if ($startTime < now() && $status == 'approved') {
                    $status = rand(0, 1) ? 'attended' : 'absent';
                }
                
                DB::table('event_registrations')->insert([
                    'event_id' => $eventId,
                    'user_id' => $studentId,
                    'status' => $status,
                    'registered_at' => $registeredAt,
                    'approved_at' => $status != 'pending' ? $registeredAt->copy()->addHours(rand(1, 24)) : null,
                    'approved_by' => $status != 'pending' ? $createdBy : null,
                    'attended' => $status == 'attended',
                    'attendance_marked_at' => $status == 'attended' ? $startTime->copy()->addMinutes(rand(5, 30)) : null,
                    'created_at' => $registeredAt,
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
