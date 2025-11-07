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
        Schema::create('seat_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('seat_id')->constrained()->cascadeOnDelete();
            $table->foreignId('library_id')->constrained()->cascadeOnDelete();
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->enum('status', ['upcoming', 'active', 'completed', 'cancelled', 'no_show'])->default('upcoming');
            $table->boolean('checked_in')->default(false);
            $table->dateTime('checked_in_at')->nullable();
            $table->dateTime('checked_out_at')->nullable();
            $table->text('qr_code')->nullable();
            $table->dateTime('auto_release_time')->nullable();
            $table->integer('loyalty_points_earned')->nullable();
            $table->decimal('total_cost', 10, 2)->default(0);
            $table->enum('payment_status', ['pending', 'paid', 'refunded'])->default('paid');
            $table->text('cancellation_reason')->nullable();
            $table->json('extended_times')->nullable(); // array of extensions
            $table->integer('guest_count')->default(1);
            $table->text('special_requests')->nullable();
            $table->integer('reminders_sent')->default(0);
            $table->timestamps();

            $table->index(['user_id', 'status']);
            $table->index(['seat_id', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seat_bookings');
    }
};
