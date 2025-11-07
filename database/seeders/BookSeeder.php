<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\Library;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $libraries = Library::all();

        $books = [
            [
                'title' => 'Introduction to Algorithms',
                'author' => 'Thomas H. Cormen',
                'isbn' => '9780262033848',
                'type' => 'physical',
                'category' => 'Computer Science',
                'cover' => null,
                'description' => 'Comprehensive introduction to modern study of computer algorithms',
                'availability' => 'available',
                'location' => 'Shelf A-12',
                'digital_access' => null,
                'uploaded_by' => null,
                'upload_date' => null,
                'download_count' => 0,
                'publisher' => 'MIT Press',
                'publication_year' => 2009,
                'edition' => '3rd Edition',
                'language' => 'English',
                'pages' => 1312,
                'tags' => ['algorithms', 'computer-science', 'programming'],
                'rating' => 4.5,
                'copies_total' => 5,
                'copies_available' => 5,
                'reservation_queue' => [],
                'borrowing_period' => 14,
                'renewal_limit' => 2,
                'fine_per_day' => 5.00,
                'qr_code' => null,
            ],
            [
                'title' => 'Clean Code',
                'author' => 'Robert C. Martin',
                'isbn' => '9780132350884',
                'type' => 'physical',
                'category' => 'Software Engineering',
                'cover' => null,
                'description' => 'A handbook of agile software craftsmanship',
                'availability' => 'available',
                'location' => 'Shelf B-05',
                'digital_access' => null,
                'uploaded_by' => null,
                'upload_date' => null,
                'download_count' => 0,
                'publisher' => 'Prentice Hall',
                'publication_year' => 2008,
                'edition' => '1st Edition',
                'language' => 'English',
                'pages' => 464,
                'tags' => ['clean-code', 'software-engineering', 'best-practices'],
                'rating' => 4.7,
                'copies_total' => 3,
                'copies_available' => 3,
                'reservation_queue' => [],
                'borrowing_period' => 14,
                'renewal_limit' => 2,
                'fine_per_day' => 5.00,
                'qr_code' => null,
            ],
            [
                'title' => 'Design Patterns',
                'author' => 'Erich Gamma',
                'isbn' => '9780201633610',
                'type' => 'digital',
                'category' => 'Software Engineering',
                'cover' => null,
                'description' => 'Elements of reusable object-oriented software',
                'availability' => 'available',
                'location' => null,
                'digital_access' => [
                    'subscriptionRequired' => true,
                    'pdfUrl' => '/books/digital/design-patterns.pdf',
                    'accessLevel' => 'premium',
                    'downloadAllowed' => true,
                    'printAllowed' => false,
                    'offlineAccess' => true,
                ],
                'uploaded_by' => 'admin',
                'upload_date' => now(),
                'download_count' => 125,
                'publisher' => 'Addison-Wesley',
                'publication_year' => 1994,
                'edition' => '1st Edition',
                'language' => 'English',
                'pages' => 395,
                'tags' => ['design-patterns', 'oop', 'software-architecture'],
                'rating' => 4.8,
                'copies_total' => 1,
                'copies_available' => 1,
                'reservation_queue' => [],
                'borrowing_period' => 30,
                'renewal_limit' => 5,
                'fine_per_day' => 0,
                'qr_code' => null,
            ],
            [
                'title' => 'The Pragmatic Programmer',
                'author' => 'Andrew Hunt',
                'isbn' => '9780135957059',
                'type' => 'physical',
                'category' => 'Software Engineering',
                'cover' => null,
                'description' => 'Your journey to mastery',
                'availability' => 'available',
                'location' => 'Shelf B-08',
                'digital_access' => null,
                'uploaded_by' => null,
                'upload_date' => null,
                'download_count' => 0,
                'publisher' => 'Addison-Wesley',
                'publication_year' => 2019,
                'edition' => '2nd Edition',
                'language' => 'English',
                'pages' => 352,
                'tags' => ['programming', 'career', 'best-practices'],
                'rating' => 4.6,
                'copies_total' => 4,
                'copies_available' => 4,
                'reservation_queue' => [],
                'borrowing_period' => 14,
                'renewal_limit' => 2,
                'fine_per_day' => 5.00,
                'qr_code' => null,
            ],
        ];

        foreach ($libraries as $index => $library) {
            foreach ($books as $bookData) {
                $bookData['library_id'] = $library->id;
                $bookData['isbn'] = $bookData['isbn'] . '-' . $library->id; // Make ISBN unique per library
                $bookData['qr_code'] = 'BOOK-' . $library->id . '-' . rand(1000, 9999);
                Book::create($bookData);
            }
        }
    }
}
