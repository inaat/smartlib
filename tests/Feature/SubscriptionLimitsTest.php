<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Book;
use App\Models\Library;
use App\Models\Floor;
use App\Models\Seat;
use App\Models\SeatBooking;
use App\Models\Event;
use App\Models\EventRegistration;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use App\Models\BookReservation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Carbon\Carbon;

class SubscriptionLimitsTest extends TestCase
{
    use RefreshDatabase;

    private $student;
    private $library;
    private $floor;
    private $seat1;
    private $seat2;
    private $seat3;
    private $book1;
    private $book2;
    private $event1;
    private $event2;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-07-14 12:00:00'));

        $this->library = Library::create([
            'name' => 'Main Library',
            'address' => '123 Main St',
            'latitude' => 34.0,
            'longitude' => 73.0,
        ]);

        \App\Models\LibraryOperatingHour::create([
            'library_id' => $this->library->id,
            'day_of_week' => 'Tuesday', // 2026-07-14 is Tuesday
            'is_open' => true,
            'open_time' => '08:00:00',
            'close_time' => '23:00:00',
        ]);

        $this->floor = Floor::create([
            'library_id' => $this->library->id,
            'floor_number' => 1,
            'name' => 'First Floor',
        ]);

        $this->seat1 = Seat::create([
            'floor_id' => $this->floor->id,
            'seat_number' => 'S101',
            'status' => 'available',
            'is_active' => true,
        ]);

        $this->seat2 = Seat::create([
            'floor_id' => $this->floor->id,
            'seat_number' => 'S102',
            'status' => 'available',
            'is_active' => true,
        ]);

        $this->seat3 = Seat::create([
            'floor_id' => $this->floor->id,
            'seat_number' => 'S103',
            'status' => 'available',
            'is_active' => true,
        ]);

        $this->book1 = Book::create([
            'library_id' => $this->library->id,
            'title' => 'Book 1',
            'author' => 'Author 1',
            'isbn' => '1111111111',
            'type' => 'physical',
            'category' => 'Fiction',
            'availability' => 'available',
            'borrowing_period' => 14,
            'copies_total' => 1,
            'copies_available' => 1,
        ]);

        $this->book2 = Book::create([
            'library_id' => $this->library->id,
            'title' => 'Book 2',
            'author' => 'Author 2',
            'isbn' => '2222222222',
            'type' => 'physical',
            'category' => 'Fiction',
            'availability' => 'available',
            'borrowing_period' => 14,
            'copies_total' => 1,
            'copies_available' => 1,
        ]);

        $this->event1 = Event::create([
            'library_id' => $this->library->id,
            'title' => 'Event 1',
            'description' => 'Test Event 1',
            'date' => '2026-07-20',
            'start_time' => '14:00:00',
            'end_time' => '16:00:00',
            'venue' => 'Main Hall',
            'capacity' => 10,
            'is_active' => true,
        ]);

        $this->event2 = Event::create([
            'library_id' => $this->library->id,
            'title' => 'Event 2',
            'description' => 'Test Event 2',
            'date' => '2026-07-21',
            'start_time' => '14:00:00',
            'end_time' => '16:00:00',
            'venue' => 'Main Hall',
            'capacity' => 10,
            'is_active' => true,
        ]);

        $this->student = User::create([
            'name' => 'Test Student',
            'email' => 'student@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
            'gender' => 'mixed',
            'ca_level' => 'PRC',
        ]);
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();
        parent::tearDown();
    }

    public function test_student_restricted_by_daily_seat_booking_limit()
    {
        // Limit daily to 1 booking
        $plan = SubscriptionPlan::create([
            'name' => 'Basic Tier',
            'price' => 5.00,
            'duration_days' => 30,
            'daily_seat_bookings_limit' => 1,
            'status' => 'active',
        ]);

        UserSubscription::create([
            'user_id' => $this->student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 5.00,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        // First seat booking: successful
        $response = $this->postJson("/api/student/bookings", [
            'seat_id' => $this->seat1->id,
            'booking_time' => '2026-07-14 13:00:00',
            'scheduled_end_time' => '2026-07-14 14:00:00',
            'latitude' => 34.0,
            'longitude' => 73.0,
        ]);

        $response->assertStatus(201);

        // Cancel booking or check out so we can book another seat (since we can't book multiple seats simultaneously)
        $bookingId = $response->json('id');
        SeatBooking::find($bookingId)->update(['status' => 'checked_out']);
        $this->seat1->update(['status' => 'available']);

        // Second seat booking: failed due to limit of 1 per day
        $response2 = $this->postJson("/api/student/bookings", [
            'seat_id' => $this->seat2->id,
            'booking_time' => '2026-07-14 15:00:00',
            'scheduled_end_time' => '2026-07-14 16:00:00',
            'latitude' => 34.0,
            'longitude' => 73.0,
        ]);

        $response2->assertStatus(400);
        $this->assertStringContainsString('daily seat booking limit', $response2->json('message'));
    }

    public function test_student_unlimited_daily_seat_bookings_when_limit_is_zero_or_null()
    {
        // 0 daily_seat_bookings_limit represents unlimited
        $plan = SubscriptionPlan::create([
            'name' => 'Unlimited Tier',
            'price' => 20.00,
            'duration_days' => 30,
            'daily_seat_bookings_limit' => 0,
            'status' => 'active',
        ]);

        UserSubscription::create([
            'user_id' => $this->student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 20.00,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        // First booking
        $response = $this->postJson("/api/student/bookings", [
            'seat_id' => $this->seat1->id,
            'booking_time' => '2026-07-14 13:00:00',
            'scheduled_end_time' => '2026-07-14 14:00:00',
            'latitude' => 34.0,
            'longitude' => 73.0,
        ]);
        $response->assertStatus(201);

        // Cancel/check out
        SeatBooking::find($response->json('id'))->update(['status' => 'checked_out']);
        $this->seat1->update(['status' => 'available']);

        // Second booking: also successful because 0 daily limit means unlimited
        $response2 = $this->postJson("/api/student/bookings", [
            'seat_id' => $this->seat2->id,
            'booking_time' => '2026-07-14 15:00:00',
            'scheduled_end_time' => '2026-07-14 16:00:00',
            'latitude' => 34.0,
            'longitude' => 73.0,
        ]);
        $response2->assertStatus(201);
    }

    public function test_student_restricted_by_books_access_limit()
    {
        // Limit total books access to 1
        $plan = SubscriptionPlan::create([
            'name' => 'Basic Tier',
            'price' => 5.00,
            'duration_days' => 30,
            'book_reservations_limit' => 5,
            'books_access_limit' => 1,
            'status' => 'active',
        ]);

        UserSubscription::create([
            'user_id' => $this->student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 5.00,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        // Reserve first book: successful
        $response = $this->postJson("/api/student/books/{$this->book1->id}/reserve");
        $response->assertStatus(201);

        // Reserve second book: fails because we've reached our total access limit of 1
        $response2 = $this->postJson("/api/student/books/{$this->book2->id}/reserve");
        $response2->assertStatus(400);
        $this->assertStringContainsString('total books access limit', $response2->json('message'));
    }

    public function test_student_restricted_by_events_joining_limit()
    {
        // Limit events joining to 1
        $plan = SubscriptionPlan::create([
            'name' => 'Basic Tier',
            'price' => 5.00,
            'duration_days' => 30,
            'events_joining_limit' => 1,
            'status' => 'active',
        ]);

        UserSubscription::create([
            'user_id' => $this->student->id,
            'subscription_plan_id' => $plan->id,
            'started_at' => now(),
            'expires_at' => now()->addDays(30),
            'status' => 'active',
            'amount_paid' => 5.00,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        // Join first event: successful
        $response = $this->postJson("/api/student/events/{$this->event1->id}/register");
        $response->assertStatus(201);

        // Join second event: fails because we've reached our limit of 1
        $response2 = $this->postJson("/api/student/events/{$this->event2->id}/register");
        $response2->assertStatus(400);
        $this->assertStringContainsString('events joining limit', $response2->json('message'));
    }
}
