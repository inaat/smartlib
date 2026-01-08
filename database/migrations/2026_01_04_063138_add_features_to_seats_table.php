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
            $table->boolean('has_computer')->default(false)->after('seat_type');
            $table->boolean('near_window')->default(false)->after('has_computer');
            $table->integer('socket_count')->default(0)->after('near_window');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('seats', function (Blueprint $table) {
            $table->dropColumn(['has_computer', 'near_window', 'socket_count']);
        });
    }
};
