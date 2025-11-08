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
        Schema::table('seats', function (Blueprint $table) {
            $table->dropColumn(['position', 'amenities', 'section', 'restrictions', 'hourly_rate']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('seats', function (Blueprint $table) {
            $table->json('position')->nullable(); // {x, y}
            $table->json('amenities')->nullable(); // array of strings
            $table->string('section')->nullable();
            $table->json('restrictions')->nullable(); // array of strings
            $table->decimal('hourly_rate', 8, 2)->nullable();
        });
    }
};
