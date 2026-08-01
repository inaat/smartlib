<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Library;
use App\Models\User;
use App\Models\LibraryReview;

class LibraryReviewSeeder extends Seeder
{
    public function run(): void
    {
        $libraries = Library::all();
        $students = User::where('role', 'student')->take(20)->get();

        if ($libraries->isEmpty() || $students->isEmpty()) {
            return;
        }

        $comments = [
            5 => [
                'Amazing study environment! Very quiet with high speed WiFi and comfortable ergonomic chairs.',
                'The atmosphere is super peaceful and perfect for CA exam preparation.',
                'Extremely clean, modern facilities, and helpful librarians. 10/10 recommended!',
                'Love the private study cabins and instant seat booking system.',
            ],
            4 => [
                'Great library overall! Good lighting and clean desks. Would love more power outlets.',
                'Very good facility and peaceful ambiance. Highly recommended for students.',
                'Comfortable seating and smooth WiFi connection.',
            ],
            3 => [
                'Decent study space, but it gets a bit noisy during peak hours.',
                'Good library, but AC could be colder during hot afternoons.',
            ]
        ];

        foreach ($libraries as $library) {
            // Assign 4 to 6 random student reviews per library
            $reviewingStudents = $students->random(min(6, $students->count()));

            foreach ($reviewingStudents as $student) {
                $rating = rand(3, 5);
                $commentOptions = $comments[$rating] ?? ['Good study environment.'];
                $comment = $commentOptions[array_rand($commentOptions)];

                LibraryReview::updateOrCreate(
                    [
                        'user_id' => $student->id,
                        'library_id' => $library->id,
                    ],
                    [
                        'rating' => $rating,
                        'comment' => $comment,
                        'created_at' => now()->subDays(rand(1, 30)),
                    ]
                );
            }
        }
    }
}
