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
            if (!Schema::hasColumn('libraries', 'contact_info')) {
                $table->json('contact_info')->nullable()->after('address');
            }
            if (!Schema::hasColumn('libraries', 'special_features')) {
                $table->json('special_features')->nullable()->after('contact_info');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('libraries', function (Blueprint $table) {
            $table->dropColumn(['contact_info', 'special_features']);
        });
    }
};
