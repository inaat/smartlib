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
        Schema::create('libraries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('address');
            $table->json('coordinates')->nullable(); // {lat, lng}
            $table->integer('total_seats')->default(0);
            $table->integer('available_seats')->default(0);
            $table->string('opening_hours')->nullable();
            $table->json('facilities')->nullable(); // array of strings
            $table->integer('capacity')->nullable();
            $table->integer('current_occupancy')->default(0);
            $table->json('images')->nullable(); // array of image URLs
            $table->json('contact_info')->nullable(); // {phone, email, website}
            $table->json('rules')->nullable(); // array of strings
            $table->json('special_features')->nullable(); // array of strings
            $table->json('accessibility_features')->nullable(); // array of strings
            $table->boolean('parking_available')->default(false);
            $table->string('wifi_password')->nullable();
            $table->json('operating_days')->nullable(); // array of strings
            $table->json('holiday_schedule')->nullable(); // array of {date, status}
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('libraries');
    }
};
