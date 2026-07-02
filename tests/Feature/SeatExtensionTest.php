<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Library;
use App\Models\Floor;
use App\Models\Seat;
use App\Models\SeatBooking;
use App\Models\LibraryOperatingHour;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Carbon\Carbon;

class SeatExtensionTest extends TestCase
{
    use RefreshDatabase;

    private $student;
    private $library;
    private $floor;
    private $seat;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-06-23 12:00:00'));

        $this->student = User::create([
            'name' => 'Test Student',
            'email' => 'student@test.com',
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
            'status' => 'checked_in',
            'is_active' => true,
        ]);
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();
        parent::tearDown();
    }

    public function test_student_can_extend_active_booking_with_min_10_minutes()
    {
        $dayOfWeek = now()->format('l');
        LibraryOperatingHour::create([
            'library_id' => $this->library->id,
            'day_of_week' => $dayOfWeek,
            'is_open' => true,
            'open_time' => '08:00:00',
            'close_time' => '23:00:00',
        ]);

        // Booking ends in 30 minutes (more than 10 minutes remaining)
        $booking = SeatBooking::create([
            'user_id' => $this->student->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(30),
            'status' => 'checked_in',
            'extension_count' => 0,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        $response = $this->postJson("/api/student/bookings/{$booking->id}/extend", [
            'minutes' => 10
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('success', true);

        $booking->refresh();
        $this->assertEquals(1, $booking->extension_count);
        $this->assertEquals(
            now()->addMinutes(40)->toIso8601String(),
            $booking->scheduled_end_time->toIso8601String()
        );
    }

    public function test_student_cannot_extend_booking_with_less_than_10_minutes_remaining()
    {
        $dayOfWeek = now()->format('l');
        LibraryOperatingHour::create([
            'library_id' => $this->library->id,
            'day_of_week' => $dayOfWeek,
            'is_open' => true,
            'open_time' => '08:00:00',
            'close_time' => '23:00:00',
        ]);

        // Booking ends in 9 minutes (strictly less than 10 minutes remaining)
        $booking = SeatBooking::create([
            'user_id' => $this->student->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(9),
            'status' => 'checked_in',
            'extension_count' => 0,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        $response = $this->postJson("/api/student/bookings/{$booking->id}/extend", [
            'minutes' => 15
        ]);

        $response->assertStatus(400)
            ->assertJsonPath('message', 'Cannot extend booking with less than 10 minutes remaining. Priority is given to the queue.');
    }

    public function test_student_cannot_extend_booking_past_library_closing_hour()
    {
        $dayOfWeek = now()->format('l');
        
        // Define closing hour today to be exactly 1 hour from now
        $closingTime = now()->addHour();
        
        LibraryOperatingHour::create([
            'library_id' => $this->library->id,
            'day_of_week' => $dayOfWeek,
            'is_open' => true,
            'open_time' => '08:00:00',
            'close_time' => $closingTime->format('H:i:s'),
        ]);

        // Booking ends in 30 minutes (30 minutes remaining before closing time)
        $booking = SeatBooking::create([
            'user_id' => $this->student->id,
            'seat_id' => $this->seat->id,
            'library_id' => $this->library->id,
            'booking_time' => now()->subHour(),
            'scheduled_end_time' => now()->addMinutes(30),
            'status' => 'checked_in',
            'extension_count' => 0,
        ]);

        Sanctum::actingAs($this->student, ['*']);

        // Request extension of 45 minutes, which exceeds the remaining 30 minutes until closing time
        $response = $this->postJson("/api/student/bookings/{$booking->id}/extend", [
            'minutes' => 45
        ]);

        $response->assertStatus(400);
        $response->assertJsonStructure(['message']);
        
        // Assert that the message contains the maximum available extension warning
        $this->assertStringContainsString('Cannot extend beyond library closing time', $response->json('message'));
        $this->assertStringContainsString('Maximum available extension is 30 minutes', $response->json('message'));
    }
}
