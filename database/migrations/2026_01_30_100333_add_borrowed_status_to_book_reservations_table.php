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
        // Modify the status enum to include 'borrowed'
        if (DB::connection()->getDriverName() !== 'sqlite') {
            DB::statement("ALTER TABLE `book_reservations` MODIFY COLUMN `status` ENUM('reserved', 'borrowed', 'pending_return', 'returned', 'overdue') NOT NULL DEFAULT 'reserved'");
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert back to original enum values
        if (DB::connection()->getDriverName() !== 'sqlite') {
            DB::statement("ALTER TABLE `book_reservations` MODIFY COLUMN `status` ENUM('reserved', 'pending_return', 'returned', 'overdue') NOT NULL DEFAULT 'reserved'");
        }
    }
};
