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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'current_streak')) {
                $table->integer('current_streak')->default(0)->after('loyalty_points');
            }
            if (!Schema::hasColumn('users', 'max_streak')) {
                $table->integer('max_streak')->default(0)->after('current_streak');
            }
            if (!Schema::hasColumn('users', 'last_checkin_date')) {
                $table->date('last_checkin_date')->nullable()->after('max_streak');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['current_streak', 'max_streak', 'last_checkin_date']);
        });
    }
};
