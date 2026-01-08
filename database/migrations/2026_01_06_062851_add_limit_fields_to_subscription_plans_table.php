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
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->integer('daily_seat_bookings_limit')->nullable()->after('seat_bookings_limit');
            $table->integer('monthly_seat_bookings_limit')->nullable()->after('daily_seat_bookings_limit');
            $table->integer('libraries_access_limit')->nullable()->after('monthly_seat_bookings_limit');
            $table->integer('books_access_limit')->nullable()->after('libraries_access_limit');
            $table->integer('events_joining_limit')->nullable()->after('books_access_limit');
            $table->integer('advance_booking_days')->nullable()->after('events_joining_limit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->dropColumn([
                'daily_seat_bookings_limit',
                'monthly_seat_bookings_limit',
                'libraries_access_limit',
                'books_access_limit',
                'events_joining_limit',
                'advance_booking_days'
            ]);
        });
    }
};
