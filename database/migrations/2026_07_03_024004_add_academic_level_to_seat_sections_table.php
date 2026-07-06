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
        Schema::table('seat_sections', function (Blueprint $table) {
            $table->string('academic_level')->nullable()->default('all')->after('gender');
        });
    }

    public function down(): void
    {
        Schema::table('seat_sections', function (Blueprint $table) {
            $table->dropColumn('academic_level');
        });
    }
};
