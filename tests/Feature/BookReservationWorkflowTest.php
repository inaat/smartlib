<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Book;
use App\Models\Library;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use App\Models\BookReservation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BookReservationWorkflowTest extends TestCase
{
    use RefreshDatabase;

    public function test_student_can_reserve_book_with_custom_days_and_librarian_can_approve_or_reject()
    {
        // 1. Create a library
        $library = Library::create([
            'name' => 'Test Library',
            'address' => 'Test Address',
        ]);

        // 2. Create a student and a librarian
        $student = User::create([
            'name' => 'Test Student',
            'email' => 'student@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
        ]);

        $librarian = User::create([
            'name' => 'Test Librarian',
            'email' => 'librarian@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'is_active' => true,
        ]);

        // Create Subscription Plan
        $plan = SubscriptionPlan::create([
            'name' => 'Premium Plan',
            'price' => 10.00,
            'duration_days' => 30,
            'book_reservations_limit' => 5,
            'status' => 'active',
        ]);

        // Create Active Subscription for Student
        UserSubscription::create([
            'user_id' => $student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 10.00,
        ]);

        // 3. Create a physical book
        $book = Book::create([
            'library_id' => $library->id,
            'title' => 'Test Physical Book',
            'author' => 'Test Author',
            'isbn' => '1234567890',
            'type' => 'physical',
            'category' => 'Fiction',
            'availability' => 'available',
            'borrowing_period' => 14,
            'copies_total' => 1,
            'copies_available' => 1,
        ]);

        // 4. Act as student and request reservation for 10 days
        Sanctum::actingAs($student, ['*']);

        $response = $this->postJson("/api/student/books/{$book->id}/reserve", [
            'days' => 10
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('reservation.status', 'pending');

        $this->assertDatabaseHas('book_reservations', [
            'book_id' => $book->id,
            'user_id' => $student->id,
            'status' => 'pending',
        ]);

        $reservationId = $response->json('reservation.id');

        // Check book availability is set to reserved
        $book->refresh();
        $this->assertEquals('reserved', $book->availability);

        // 5. Act as librarian and approve the reservation
        Sanctum::actingAs($librarian, ['*']);

        $approveResponse = $this->postJson("/api/librarian/books/reservations/{$reservationId}/approve");
        $approveResponse->assertStatus(200);

        // Check reservation status is approved
        $this->assertDatabaseHas('book_reservations', [
            'id' => $reservationId,
            'status' => 'approved',
        ]);

        // Check notification is created for student
        $this->assertDatabaseHas('notifications', [
            'user_id' => $student->id,
            'type' => 'reservation',
        ]);

        // 6. Act as student and pick up the book
        Sanctum::actingAs($student, ['*']);

        $pickupResponse = $this->postJson("/api/student/books/reservations/{$reservationId}/pick-up");
        $pickupResponse->assertStatus(200);

        // Check status is collected
        $this->assertDatabaseHas('book_reservations', [
            'id' => $reservationId,
            'status' => 'collected',
        ]);

        // 7. Act as student and return the book (requests return)
        $returnResponse = $this->postJson("/api/student/books/reservations/{$reservationId}/return");
        $returnResponse->assertStatus(200);

        // Check status is pending_return
        $this->assertDatabaseHas('book_reservations', [
            'id' => $reservationId,
            'status' => 'pending_return',
        ]);

        // 8. Act as librarian and approve the return
        Sanctum::actingAs($librarian, ['*']);

        $approveReturnResponse = $this->postJson("/api/librarian/books/reservations/{$reservationId}/approve-return");
        $approveReturnResponse->assertStatus(200);

        // Check reservation status is returned, and book is available
        $this->assertDatabaseHas('book_reservations', [
            'id' => $reservationId,
            'status' => 'returned',
        ]);

        $book->refresh();
        $this->assertEquals('available', $book->availability);
    }

    public function test_librarian_can_reject_reservation()
    {
        // 1. Create a library
        $library = Library::create([
            'name' => 'Test Library',
            'address' => 'Test Address',
        ]);

        // 2. Create student, librarian, subscription plan and active subscription
        $student = User::create([
            'name' => 'Test Student',
            'email' => 'student2@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
        ]);

        $librarian = User::create([
            'name' => 'Test Librarian',
            'email' => 'librarian2@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'is_active' => true,
        ]);

        $plan = SubscriptionPlan::create([
            'name' => 'Premium Plan',
            'price' => 10.00,
            'duration_days' => 30,
            'book_reservations_limit' => 5,
            'status' => 'active',
        ]);

        UserSubscription::create([
            'user_id' => $student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 10.00,
        ]);

        $book = Book::create([
            'library_id' => $library->id,
            'title' => 'Test Physical Book 2',
            'author' => 'Test Author',
            'isbn' => '1234567891',
            'type' => 'physical',
            'category' => 'Fiction',
            'availability' => 'available',
            'borrowing_period' => 14,
            'copies_total' => 1,
            'copies_available' => 1,
        ]);

        // 3. Act as student and request reservation
        Sanctum::actingAs($student, ['*']);

        $response = $this->postJson("/api/student/books/{$book->id}/reserve", [
            'days' => 7
        ]);

        $response->assertStatus(201);
        $reservationId = $response->json('reservation.id');

        // Check book availability is set to reserved
        $book->refresh();
        $this->assertEquals('reserved', $book->availability);

        // 4. Act as librarian and reject the reservation
        Sanctum::actingAs($librarian, ['*']);

        $rejectResponse = $this->postJson("/api/librarian/books/reservations/{$reservationId}/reject");
        $rejectResponse->assertStatus(200);

        // Check reservation status is rejected
        $this->assertDatabaseHas('book_reservations', [
            'id' => $reservationId,
            'status' => 'rejected',
        ]);

        // Check book is available again
        $book->refresh();
        $this->assertEquals('available', $book->availability);
    }

    public function test_student_dashboard_displays_correct_active_reservations_count()
    {
        // 1. Create a library
        $library = Library::create([
            'name' => 'Test Library',
            'address' => 'Test Address',
        ]);

        // 2. Create student
        $student = User::create([
            'name' => 'Test Student',
            'email' => 'student3@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
        ]);

        $book = Book::create([
            'library_id' => $library->id,
            'title' => 'Test Physical Book 3',
            'author' => 'Test Author',
            'isbn' => '1234567899',
            'type' => 'physical',
            'category' => 'Fiction',
            'availability' => 'available',
            'borrowing_period' => 14,
            'copies_total' => 1,
            'copies_available' => 1,
        ]);

        // Create an active reservation
        BookReservation::create([
            'user_id' => $student->id,
            'book_id' => $book->id,
            'due_date' => now()->addDays(7),
            'status' => 'approved',
        ]);

        // Act as student
        Sanctum::actingAs($student, ['*']);

        // Check dashboard endpoint
        $dashboardResponse = $this->getJson('/api/student/dashboard');
        $dashboardResponse->assertStatus(200);
        $this->assertEquals(1, $dashboardResponse->json('stats.active_reservations'));

        // Check analytics endpoint
        $analyticsResponse = $this->getJson('/api/student/analytics');
        $analyticsResponse->assertStatus(200);
        $this->assertEquals(1, $analyticsResponse->json('stats.active_reservations'));
    }
}
