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
        // First, delete all existing reservations to avoid data conflicts
        DB::table('book_reservations')->truncate();

        Schema::table('book_reservations', function (Blueprint $table) {
            // Drop old columns if they exist
            if (Schema::hasColumn('book_reservations', 'reservation_date')) {
                $table->dropColumn('reservation_date');
            }
            if (Schema::hasColumn('book_reservations', 'pickup_deadline')) {
                $table->dropColumn('pickup_deadline');
            }
            if (Schema::hasColumn('book_reservations', 'pickup_date')) {
                $table->dropColumn('pickup_date');
            }
            if (Schema::hasColumn('book_reservations', 'return_date')) {
                $table->dropColumn('return_date');
            }
            
            // Drop status column if it exists
            if (Schema::hasColumn('book_reservations', 'status')) {
                $table->dropColumn('status');
            }
        });

        Schema::table('book_reservations', function (Blueprint $table) {
            // Add new columns if they don't exist
            if (!Schema::hasColumn('book_reservations', 'due_date')) {
                $table->dateTime('due_date')->after('book_id');
            }
            if (!Schema::hasColumn('book_reservations', 'returned_at')) {
                $table->dateTime('returned_at')->nullable()->after('due_date');
            }
            if (!Schema::hasColumn('book_reservations', 'status')) {
                $table->enum('status', ['reserved', 'pending_return', 'returned', 'overdue'])->default('reserved')->after('returned_at');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('book_reservations', function (Blueprint $table) {
            if (Schema::hasColumn('book_reservations', 'due_date')) {
                $table->dropColumn('due_date');
            }
            if (Schema::hasColumn('book_reservations', 'returned_at')) {
                $table->dropColumn('returned_at');
            }
            if (Schema::hasColumn('book_reservations', 'status')) {
                $table->dropColumn('status');
            }
        });

        Schema::table('book_reservations', function (Blueprint $table) {
            $table->dateTime('reservation_date');
            $table->dateTime('pickup_deadline');
            $table->dateTime('pickup_date')->nullable();
            $table->dateTime('return_date')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected', 'picked_up', 'returned', 'cancelled'])->default('pending');
        });
    }
};
