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
            if (!Schema::hasColumn('subscription_plans', 'duration_days')) {
                $table->integer('duration_days')->default(30)->after('price');
            }
            if (!Schema::hasColumn('subscription_plans', 'seat_bookings_limit')) {
                $table->integer('seat_bookings_limit')->nullable()->after('duration_days');
            }
            if (!Schema::hasColumn('subscription_plans', 'book_reservations_limit')) {
                $table->integer('book_reservations_limit')->nullable()->after('seat_bookings_limit');
            }
            if (!Schema::hasColumn('subscription_plans', 'digital_books_access')) {
                $table->boolean('digital_books_access')->default(false)->after('book_reservations_limit');
            }
            if (!Schema::hasColumn('subscription_plans', 'priority_booking')) {
                $table->boolean('priority_booking')->default(false)->after('digital_books_access');
            }
            if (!Schema::hasColumn('subscription_plans', 'event_discounts')) {
                $table->integer('event_discounts')->nullable()->after('priority_booking');
            }
            if (!Schema::hasColumn('subscription_plans', 'features')) {
                $table->json('features')->nullable()->after('event_discounts');
            }
            if (!Schema::hasColumn('subscription_plans', 'status')) {
                $table->enum('status', ['active', 'inactive'])->default('active')->after('features');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->dropColumn([
                'duration_days',
                'seat_bookings_limit',
                'book_reservations_limit',
                'digital_books_access',
                'priority_booking',
                'event_discounts',
                'features',
                'status'
            ]);
        });
    }
};
