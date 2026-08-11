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
            $columnsToDrop = [];

            if (Schema::hasColumn('users', 'study_goal_type')) {
                $columnsToDrop[] = 'study_goal_type';
            }
            if (Schema::hasColumn('users', 'study_goal_hours')) {
                $columnsToDrop[] = 'study_goal_hours';
            }
            if (Schema::hasColumn('users', 'study_goal_hour')) {
                $columnsToDrop[] = 'study_goal_hour';
            }

            if (!empty($columnsToDrop)) {
                $table->dropColumn($columnsToDrop);
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'study_goal_type')) {
                $table->string('study_goal_type')->nullable();
            }
            if (!Schema::hasColumn('users', 'study_goal_hours')) {
                $table->integer('study_goal_hours')->nullable();
            }
        });
    }
};
