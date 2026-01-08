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
        Schema::table('floors', function (Blueprint $table) {
            if (!Schema::hasColumn('floors', 'level')) {
                $table->integer('level')->default(0)->after('name');
            }
            if (!Schema::hasColumn('floors', 'description')) {
                $table->text('description')->nullable()->after('level');
            }
            if (!Schema::hasColumn('floors', 'map_image')) {
                $table->string('map_image')->nullable()->after('description');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('floors', function (Blueprint $table) {
            $table->dropColumn(['level', 'description', 'map_image']);
        });
    }
};
