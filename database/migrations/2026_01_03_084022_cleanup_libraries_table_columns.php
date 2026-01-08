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
        Schema::table('libraries', function (Blueprint $table) {
            $columns = ['rules', 'opening_time', 'closing_time', 'contact_phone', 'contact_email'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('libraries', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('libraries', function (Blueprint $table) {
            $table->text('rules')->nullable();
            $table->time('opening_time')->nullable();
            $table->time('closing_time')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('contact_email')->nullable();
        });
    }
};
