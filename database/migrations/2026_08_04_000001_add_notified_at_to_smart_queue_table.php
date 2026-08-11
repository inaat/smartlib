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
        Schema::table('smart_queue', function (Blueprint $table) {
            if (!Schema::hasColumn('smart_queue', 'notified_at')) {
                $table->dateTime('notified_at')->nullable()->after('joined_at');
            }
            if (!Schema::hasColumn('smart_queue', 'claim_expires_at')) {
                $table->dateTime('claim_expires_at')->nullable()->after('notified_at');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('smart_queue', function (Blueprint $table) {
            if (Schema::hasColumn('smart_queue', 'notified_at')) {
                $table->dropColumn('notified_at');
            }
            if (Schema::hasColumn('smart_queue', 'claim_expires_at')) {
                $table->dropColumn('claim_expires_at');
            }
        });
    }
};
