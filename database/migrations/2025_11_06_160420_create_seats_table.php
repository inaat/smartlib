<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->constrained()->cascadeOnDelete();
            $table->string('seat_number');
            $table->enum('status', ['available', 'booked', 'occupied', 'maintenance', 'free_soon'])->default('available');
            $table->json('position')->nullable(); // {x, y}
            $table->enum('type', ['regular', 'premium', 'group', 'silent', 'collaborative'])->default('regular');
            $table->json('amenities')->nullable(); // array of strings
            $table->text('qr_code')->nullable(); // QR code content/path
            $table->string('next_available_time')->nullable();
            $table->string('current_booking_id')->nullable();
            $table->integer('floor')->default(1);
            $table->string('section')->nullable();
            $table->boolean('near_window')->default(false);
            $table->integer('power_outlets')->default(0);
            $table->boolean('has_computer')->default(false);
            $table->integer('max_occupancy')->default(1);
            $table->decimal('hourly_rate', 8, 2)->nullable();
            $table->json('restrictions')->nullable(); // array of strings
            $table->timestamps();

            $table->unique(['library_id', 'seat_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seats');
    }
};
