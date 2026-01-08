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
            if (!Schema::hasColumn('libraries', 'description')) {
                $table->text('description')->nullable()->after('name');
            }
            if (!Schema::hasColumn('libraries', 'photo')) {
                $table->string('photo')->nullable()->after('address');
            }
            if (!Schema::hasColumn('libraries', 'latitude')) {
                $table->decimal('latitude', 10, 8)->nullable()->after('photo');
            }
            if (!Schema::hasColumn('libraries', 'longitude')) {
                $table->decimal('longitude', 11, 8)->nullable()->after('latitude');
            }
            if (!Schema::hasColumn('libraries', 'capacity')) {
                $table->integer('capacity')->default(0)->after('longitude');
            }
            if (!Schema::hasColumn('libraries', 'opening_hours')) {
                $table->string('opening_hours')->nullable()->after('capacity');
            }
            if (!Schema::hasColumn('libraries', 'wifi_password')) {
                $table->string('wifi_password')->nullable()->after('opening_hours');
            }
            if (!Schema::hasColumn('libraries', 'parking_available')) {
                $table->boolean('parking_available')->default(false)->after('wifi_password');
            }
            if (!Schema::hasColumn('libraries', 'special_features')) {
                $table->json('special_features')->nullable()->after('parking_available');
            }
            if (!Schema::hasColumn('libraries', 'contact_info')) {
                $table->json('contact_info')->nullable()->after('special_features');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('libraries', function (Blueprint $table) {
            $table->dropColumn([
                'description',
                'photo',
                'latitude',
                'longitude',
                'capacity',
                'opening_hours',
                'wifi_password',
                'parking_available',
                'special_features',
                'contact_info'
            ]);
        });
    }
};
