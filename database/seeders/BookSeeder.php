<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraries = DB::table('libraries')->pluck('id')->toArray();
        
        if (empty($libraries)) {
            return;
        }

        $books = [
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'isbn' => '9780743273565',
                'type' => 'Physical',
                'category' => 'Fiction',
                'description' => 'A story of wealth, love, and the American Dream in the 1920s.',
                'availability' => 'available',
                'copies_total' => 5,
                'copies_available' => 5,
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'isbn' => '9780061120084',
                'type' => 'Physical',
                'category' => 'Fiction',
                'description' => 'A classic novel about racial injustice and the loss of innocence.',
                'availability' => 'available',
                'copies_total' => 3,
                'copies_available' => 3,
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'isbn' => '9780451524935',
                'type' => 'Digital',
                'category' => 'Dystopian',
                'description' => 'A chilling portrayal of a totalitarian future.',
                'availability' => 'available',
                'copies_total' => 10,
                'copies_available' => 10,
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'isbn' => '9780316769488',
                'type' => 'Physical',
                'category' => 'Fiction',
                'description' => 'A story about teenage angst and alienation.',
                'availability' => 'reserved',
                'copies_total' => 2,
                'copies_available' => 0,
            ],
            [
                'title' => 'A Brief History of Time',
                'author' => 'Stephen Hawking',
                'isbn' => '9780553380163',
                'type' => 'Physical',
                'category' => 'Science',
                'description' => 'An exploration of the origins and fate of the universe.',
                'availability' => 'available',
                'copies_total' => 4,
                'copies_available' => 4,
            ],
            [
                'title' => 'Clean Code',
                'author' => 'Robert C. Martin',
                'isbn' => '9780132350884',
                'type' => 'Digital',
                'category' => 'Technology',
                'description' => 'A handbook of agile software craftsmanship.',
                'availability' => 'available',
                'copies_total' => 20,
                'copies_available' => 20,
            ],
            [
                'title' => 'The Lean Startup',
                'author' => 'Eric Ries',
                'isbn' => '9780307887894',
                'type' => 'Physical',
                'category' => 'Business',
                'description' => 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses.',
                'availability' => 'available',
                'copies_total' => 6,
                'copies_available' => 6,
            ],
            [
                'title' => 'Thinking, Fast and Slow',
                'author' => 'Daniel Kahneman',
                'isbn' => '9780374533557',
                'type' => 'Physical',
                'category' => 'Psychology',
                'description' => 'An exploration of the two systems that drive the way we think.',
                'availability' => 'available',
                'copies_total' => 4,
                'copies_available' => 4,
            ],
        ];

        foreach ($books as $book) {
            DB::table('books')->insert(array_merge($book, [
                'library_id' => $libraries[array_rand($libraries)],
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}
