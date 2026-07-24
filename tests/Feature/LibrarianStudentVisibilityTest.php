<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Library;
use App\Models\Floor;
use App\Models\Seat;
use App\Models\SeatBooking;
use App\Models\Attendance;
use App\Models\Book;
use App\Models\BookReservation;
use App\Models\Event;
use App\Models\EventRegistration;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class LibrarianStudentVisibilityTest extends TestCase
{
    use RefreshDatabase;

    private $peshawarLibrary;
    private $lahoreLibrary;
    
    private $peshawarLibrarian;
    private $lahoreLibrarian;

    private $studentBelongsPeshawar;
    private $studentBookedPeshawar;
    private $studentAttendancePeshawar;
    private $studentReservedPeshawar;
    private $studentEventPeshawar;
    
    private $studentBelongsLahore;
    private $studentOnlyLahore;

    protected function setUp(): void
    {
        parent::setUp();

        // 1. Create Libraries
        $this->peshawarLibrary = Library::create([
            'name' => 'Peshawar Library',
            'address' => 'Peshawar',
        ]);

        $this->lahoreLibrary = Library::create([
            'name' => 'Lahore Library',
            'address' => 'Lahore',
        ]);

        // 2. Create Librarians
        $this->peshawarLibrarian = User::create([
            'name' => 'Peshawar Librarian',
            'email' => 'peshawar_lib@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'library_id' => $this->peshawarLibrary->id,
            'is_active' => true,
        ]);

        $this->lahoreLibrarian = User::create([
            'name' => 'Lahore Librarian',
            'email' => 'lahore_lib@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'library_id' => $this->lahoreLibrary->id,
            'is_active' => true,
        ]);

        // Assign Roles
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'librarian', 'guard_name' => 'web']);
        $this->peshawarLibrarian->assignRole('librarian');
        $this->lahoreLibrarian->assignRole('librarian');

        // 3. Create Students and their interactions
        
        // Student A: Belongs directly to Peshawar
        $this->studentBelongsPeshawar = User::create([
            'name' => 'Student A Peshawar Direct',
            'email' => 'student_a@test.com',
            'password' => bcrypt('password'),
            'crn' => '1001',
            'role' => 'student',
            'library_id' => $this->peshawarLibrary->id,
            'is_active' => true,
        ]);

        // Student B: Booked a seat at Peshawar
        $this->studentBookedPeshawar = User::create([
            'name' => 'Student B Booked Peshawar',
            'email' => 'student_b@test.com',
            'password' => bcrypt('password'),
            'crn' => '1002',
            'role' => 'student',
            'is_active' => true,
        ]);
        $peshawarFloor = Floor::create([
            'library_id' => $this->peshawarLibrary->id,
            'floor_number' => 1,
            'name' => 'Floor 1',
        ]);
        $peshawarSeat = Seat::create([
            'floor_id' => $peshawarFloor->id,
            'seat_number' => 'P-S1',
            'status' => 'available',
        ]);
        SeatBooking::create([
            'user_id' => $this->studentBookedPeshawar->id,
            'seat_id' => $peshawarSeat->id,
            'library_id' => $this->peshawarLibrary->id,
            'booking_time' => now(),
            'scheduled_end_time' => now()->addHour(),
            'status' => 'booked',
        ]);

        // Student C: Logged attendance at Peshawar
        $this->studentAttendancePeshawar = User::create([
            'name' => 'Student C CheckedIn Peshawar',
            'email' => 'student_c@test.com',
            'password' => bcrypt('password'),
            'crn' => '1003',
            'role' => 'student',
            'is_active' => true,
        ]);
        Attendance::create([
            'user_id' => $this->studentAttendancePeshawar->id,
            'library_id' => $this->peshawarLibrary->id,
            'date' => now()->toDateString(),
            'check_in_time' => '09:00:00',
        ]);

        // Student D: Reserved a book from Peshawar
        $this->studentReservedPeshawar = User::create([
            'name' => 'Student D Reserved Peshawar',
            'email' => 'student_d@test.com',
            'password' => bcrypt('password'),
            'crn' => '1004',
            'role' => 'student',
            'is_active' => true,
        ]);
        $peshawarBook = Book::create([
            'library_id' => $this->peshawarLibrary->id,
            'title' => 'Peshawar Book 1',
            'author' => 'Author P',
            'isbn' => '1234567890',
            'quantity' => 5,
        ]);
        BookReservation::create([
            'user_id' => $this->studentReservedPeshawar->id,
            'book_id' => $peshawarBook->id,
            'status' => 'pending',
            'due_date' => now()->addDays(7),
            'created_at' => now(),
        ]);

        // Student E: Event registered at Peshawar
        $this->studentEventPeshawar = User::create([
            'name' => 'Student E Event Peshawar',
            'email' => 'student_e@test.com',
            'password' => bcrypt('password'),
            'crn' => '1005',
            'role' => 'student',
            'is_active' => true,
        ]);
        $peshawarEvent = Event::create([
            'library_id' => $this->peshawarLibrary->id,
            'title' => 'Peshawar Event 1',
            'description' => 'Event description',
            'date' => now()->toDateString(),
            'start_time' => '10:00:00',
            'end_time' => '12:00:00',
            'venue' => 'Main Hall',
        ]);
        EventRegistration::create([
            'user_id' => $this->studentEventPeshawar->id,
            'event_id' => $peshawarEvent->id,
        ]);

        // Student F: Belongs directly to Lahore
        $this->studentBelongsLahore = User::create([
            'name' => 'Student F Lahore Direct',
            'email' => 'student_f@test.com',
            'password' => bcrypt('password'),
            'crn' => '1006',
            'role' => 'student',
            'library_id' => $this->lahoreLibrary->id,
            'is_active' => true,
        ]);

        // Student G: Only interacts with Lahore (booked seat in Lahore)
        $this->studentOnlyLahore = User::create([
            'name' => 'Student G Lahore Only',
            'email' => 'student_g@test.com',
            'password' => bcrypt('password'),
            'crn' => '1007',
            'role' => 'student',
            'is_active' => true,
        ]);
        $lahoreFloor = Floor::create([
            'library_id' => $this->lahoreLibrary->id,
            'floor_number' => 1,
            'name' => 'Floor 1',
        ]);
        $lahoreSeat = Seat::create([
            'floor_id' => $lahoreFloor->id,
            'seat_number' => 'L-S1',
            'status' => 'available',
        ]);
        SeatBooking::create([
            'user_id' => $this->studentOnlyLahore->id,
            'seat_id' => $lahoreSeat->id,
            'library_id' => $this->lahoreLibrary->id,
            'booking_time' => now(),
            'scheduled_end_time' => now()->addHour(),
            'status' => 'booked',
        ]);

        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'student', 'guard_name' => 'web']);
        $this->studentBelongsPeshawar->assignRole('student');
        $this->studentBookedPeshawar->assignRole('student');
        $this->studentAttendancePeshawar->assignRole('student');
        $this->studentReservedPeshawar->assignRole('student');
        $this->studentEventPeshawar->assignRole('student');
        $this->studentBelongsLahore->assignRole('student');
        $this->studentOnlyLahore->assignRole('student');
    }

    public function test_librarian_only_sees_students_who_have_interacted_with_their_library()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->getJson('/api/librarian/students');

        $response->assertStatus(200);
        $studentIds = collect($response->json())->pluck('id')->toArray();

        // Should see Peshawar-interacted students
        $this->assertContains($this->studentBelongsPeshawar->id, $studentIds);
        $this->assertContains($this->studentBookedPeshawar->id, $studentIds);
        $this->assertContains($this->studentAttendancePeshawar->id, $studentIds);
        $this->assertContains($this->studentReservedPeshawar->id, $studentIds);
        $this->assertContains($this->studentEventPeshawar->id, $studentIds);

        // Should NOT see Lahore-only students
        $this->assertNotContains($this->studentBelongsLahore->id, $studentIds);
        $this->assertNotContains($this->studentOnlyLahore->id, $studentIds);
    }

    public function test_librarian_cannot_view_details_of_unassociated_student()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        // Allowed student
        $responseAllowed = $this->getJson("/api/librarian/students/{$this->studentBelongsPeshawar->id}");
        $responseAllowed->assertStatus(200);

        // Disallowed student
        $responseDisallowed = $this->getJson("/api/librarian/students/{$this->studentBelongsLahore->id}");
        $responseDisallowed->assertStatus(403);
    }

    public function test_librarian_cannot_update_unassociated_student()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->putJson("/api/librarian/students/{$this->studentBelongsLahore->id}", [
            'name' => 'Updated Disallowed Student Name'
        ]);

        $response->assertStatus(403);
    }

    public function test_librarian_cannot_delete_unassociated_student()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->deleteJson("/api/librarian/students/{$this->studentBelongsLahore->id}");

        $response->assertStatus(403);
    }

    public function test_librarian_cannot_ban_unassociated_student()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->postJson("/api/librarian/students/{$this->studentBelongsLahore->id}/ban", [
            'days' => 5,
            'reason' => 'Testing ban'
        ]);

        $response->assertStatus(403);
    }

    public function test_librarian_cannot_unban_unassociated_student()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->postJson("/api/librarian/students/{$this->studentBelongsLahore->id}/unban");

        $response->assertStatus(403);
    }

    public function test_creating_student_as_librarian_assigns_library_id()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->postJson('/api/librarian/students', [
            'name' => 'Librarian Created Student',
            'email' => 'created_student@test.com',
            'phone' => '03123456789',
            'crn' => '9999',
            'gender' => 'male',
            'ca_level' => 'CAF',
            'password' => 'password123',
        ]);

        $response->assertStatus(201);
        
        $studentId = $response->json('id');
        $student = User::find($studentId);

        $this->assertEquals($this->peshawarLibrary->id, $student->library_id);
    }

    public function test_librarian_stats_reflects_only_interacted_students()
    {
        Sanctum::actingAs($this->peshawarLibrarian, ['*']);

        $response = $this->getJson('/api/librarian/students/stats');

        $response->assertStatus(200);
        $this->assertEquals(5, $response->json('total'));
    }
}
