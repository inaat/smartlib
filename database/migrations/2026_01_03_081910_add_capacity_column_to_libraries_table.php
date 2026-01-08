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
        Schema::table('libraries', function (Blueprint $table) {
            if (!Schema::hasColumn('libraries', 'capacity')) {
                $table->integer('capacity')->default(0)->after('address');
            }
            if (!Schema::hasColumn('libraries', 'current_occupancy')) {
                $table->integer('current_occupancy')->default(0)->after('capacity');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('libraries', function (Blueprint $table) {
            $table->dropColumn(['capacity', 'current_occupancy']);
        });
    }
};
