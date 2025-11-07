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
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Trial, Basic, Pro
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2)->default(0);
            $table->integer('duration')->default(30); // days
            $table->json('features')->nullable(); // array of feature strings
            $table->integer('booking_limit')->nullable(); // null = unlimited
            $table->boolean('digital_book_access')->default(false);
            $table->boolean('priority_support')->default(false);
            $table->integer('event_discounts')->default(0); // percentage
            $table->boolean('is_active')->default(true);
            $table->integer('trial_period')->nullable(); // days
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_plans');
    }
};
