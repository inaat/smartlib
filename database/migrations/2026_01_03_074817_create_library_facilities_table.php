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
        Schema::create('library_facilities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('icon')->nullable(); // Icon name for frontend
            $table->boolean('is_available')->default(true);
            $table->text('description')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_facilities');
    }
};
