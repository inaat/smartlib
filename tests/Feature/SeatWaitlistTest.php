<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Library;
use App\Models\Floor;
use App\Models\Seat;
use App\Models\SeatBooking;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Carbon\Carbon;

class SeatWaitlistTest extends TestCase
{
    use RefreshDatabase;

    private $student1;
    private $student2;
    private $library;
    private $floor;
    private $seat;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-07-20 12:00:00'));

        $this->student1 = User::create([
            'name' => 'Occupant Student',
            'email' => 'occupant@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
        ]);

        $this->student2 = User::create([
            'name' => 'Waitlist Student',
            'email' => 'waitlist@test.com',
            'password' => bcrypt('password'),
            'role' => 'student',
            'is_active' => true,
        ]);

        $this->library = Library::create([
            'name' => 'Main Library',
            'address' => '123 Main St',
        ]);

        $this->floor = Floor::create([
            'library_id' => $this->library->id,
            'floor_number' => 1,
            'name' => 'First Floor',
        ]);

        $this->seat = Seat::create([
            'floor_id' => $this->floor->id,
            'seat_number' => 'S101',
            'status' => 'occupied',
            'is_active' => true,
        ]);
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();
        parent::tearDown();
    }

    public function test_seat_status_becomes_free_soon_when_remaining_minutes_is_ten_or_less()
    {
        // Booking ends in 9 minutes
        SeatBooking::create([
            'user_id' => $this->student1->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(9),
            'status' => 'checked_in',
        ]);

        Sanctum::actingAs($this->student2, ['*']);

        $response = $this->getJson("/api/student/libraries/{$this->library->id}/seats");

        $response->assertStatus(200);
        $seats = $response->json('seats');
        $this->assertCount(1, $seats);
        $this->assertEquals('free_soon', $seats[0]['status']);
    }

    public function test_seat_status_stays_occupied_when_remaining_minutes_is_more_than_ten()
    {
        // Booking ends in 15 minutes
        SeatBooking::create([
            'user_id' => $this->student1->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(15),
            'status' => 'checked_in',
        ]);

        Sanctum::actingAs($this->student2, ['*']);

        $response = $this->getJson("/api/student/libraries/{$this->library->id}/seats");

        $response->assertStatus(200);
        $seats = $response->json('seats');
        $this->assertCount(1, $seats);
        $this->assertEquals('occupied', $seats[0]['status']);
    }

    public function test_student_can_join_waitlist_when_seat_is_free_soon()
    {
        // Booking ends in 5 minutes
        SeatBooking::create([
            'user_id' => $this->student1->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(5),
            'status' => 'checked_in',
        ]);

        Sanctum::actingAs($this->student2, ['*']);

        $response = $this->postJson("/api/student/bookings/join-queue", [
            'seat_id' => $this->seat->id,
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('success', true);
    }

    public function test_student_cannot_join_waitlist_when_seat_is_occupied_with_more_than_ten_minutes_left()
    {
        // Booking ends in 20 minutes
        SeatBooking::create([
            'user_id' => $this->student1->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(20),
            'status' => 'checked_in',
        ]);

        Sanctum::actingAs($this->student2, ['*']);

        $response = $this->postJson("/api/student/bookings/join-queue", [
            'seat_id' => $this->seat->id,
        ]);

        $response->assertStatus(400)
            ->assertJsonPath('message', 'You can only join the waitlist when the seat status is Free Soon (10 minutes or less remaining).');
    }
}
