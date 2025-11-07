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
        Schema::create('book_reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('book_id')->constrained()->cascadeOnDelete();
            $table->dateTime('reserved_at');
            $table->dateTime('expires_at')->nullable();
            $table->enum('status', ['active', 'collected', 'expired', 'cancelled'])->default('active');
            $table->dateTime('pickup_deadline');
            $table->integer('renewal_count')->default(0);
            $table->dateTime('borrowed_at')->nullable();
            $table->dateTime('return_due_date')->nullable();
            $table->dateTime('returned_at')->nullable();
            $table->decimal('fine_amount', 10, 2)->default(0);
            $table->json('renewal_history')->nullable(); // array of {date, newDueDate}
            $table->integer('pickup_reminders')->default(0);
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'status']);
            $table->index(['book_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_reservations');
    }
};
