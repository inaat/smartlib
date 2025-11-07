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
        Schema::create('event_registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->dateTime('registered_at');
            $table->string('qr_code_path')->nullable(); // Event pass QR code
            $table->enum('payment_method', ['easypaisa', 'jazzcash', 'bank'])->nullable();
            $table->string('payment_transaction_id')->nullable();
            $table->decimal('amount_paid', 10, 2)->default(0);
            $table->boolean('attended')->default(false);
            $table->dateTime('attended_at')->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'event_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_registrations');
    }
};
