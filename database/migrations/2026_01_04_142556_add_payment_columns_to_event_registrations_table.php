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
        Schema::table('event_registrations', function (Blueprint $table) {
            $table->decimal('amount_paid', 10, 2)->default(0)->after('registered_at');
            $table->string('transaction_id')->nullable()->after('amount_paid');
            $table->string('payment_status')->default('pending')->after('transaction_id'); // pending, completed, failed
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('event_registrations', function (Blueprint $table) {
            $table->dropColumn(['amount_paid', 'transaction_id', 'payment_status']);
        });
    }
};
