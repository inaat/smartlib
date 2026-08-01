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
            if (!Schema::hasColumn('users', 'weekly_goal_hours')) {
                $table->integer('weekly_goal_hours')->default(20)->after('loyalty_points');
            }
            if (!Schema::hasColumn('users', 'monthly_goal_hours')) {
                $table->integer('monthly_goal_hours')->default(80)->after('weekly_goal_hours');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'weekly_goal_hours')) {
                $table->dropColumn('weekly_goal_hours');
            }
            if (Schema::hasColumn('users', 'monthly_goal_hours')) {
                $table->dropColumn('monthly_goal_hours');
            }
        });
    }
};
