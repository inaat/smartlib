<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('subscription_plans', function (Blueprint $table) {
            // Rename columns to match frontend expectations
            $table->renameColumn('duration', 'duration_days');
            $table->renameColumn('booking_limit', 'seat_bookings_limit');
            $table->renameColumn('digital_book_access', 'digital_books_access');
            $table->renameColumn('priority_support', 'priority_booking');
            $table->renameColumn('is_active', 'status_bool');
        });

        // Convert is_active (boolean) to status (string)
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->string('status')->default('active')->after('features');
        });

        // Migrate data from status_bool to status
        DB::statement("UPDATE subscription_plans SET status = CASE WHEN status_bool = 1 THEN 'active' ELSE 'inactive' END");

        // Drop the old boolean column
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->dropColumn(['status_bool', 'trial_period']);
        });

        // Add book_reservations_limit column
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->integer('book_reservations_limit')->nullable()->after('seat_bookings_limit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subscription_plans', function (Blueprint $table) {
            // Add back trial_period
            $table->integer('trial_period')->nullable();
            $table->boolean('is_active')->default(true);
        });

        // Migrate status back to is_active
        DB::statement("UPDATE subscription_plans SET is_active = CASE WHEN status = 'active' THEN 1 ELSE 0 END");

        // Drop new columns and rename back
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->dropColumn(['status', 'book_reservations_limit']);
            $table->renameColumn('duration_days', 'duration');
            $table->renameColumn('seat_bookings_limit', 'booking_limit');
            $table->renameColumn('digital_books_access', 'digital_book_access');
            $table->renameColumn('priority_booking', 'priority_support');
        });
    }
};
