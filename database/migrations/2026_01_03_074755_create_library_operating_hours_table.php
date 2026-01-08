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
        Schema::create('library_operating_hours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->constrained()->onDelete('cascade');
            $table->enum('day_of_week', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
            $table->boolean('is_open')->default(true);
            $table->time('open_time')->nullable();
            $table->time('close_time')->nullable();
            $table->timestamps();

            $table->unique(['library_id', 'day_of_week']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_operating_hours');
    }
};
