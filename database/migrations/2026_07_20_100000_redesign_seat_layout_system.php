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
        // 1. Create study_tables table
        if (!Schema::hasTable('study_tables')) {
            Schema::create('study_tables', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('library_id');
                $table->unsignedBigInteger('floor_id');
                $table->unsignedBigInteger('section_id')->nullable();
                $table->integer('capacity')->default(4); // 2, 4, 6, 8
                $table->string('label')->nullable();
                $table->integer('position_x')->default(100);
                $table->integer('position_y')->default(100);
                $table->timestamps();

                // Foreign keys
                $table->foreign('library_id')->references('id')->on('libraries')->onDelete('cascade');
                $table->foreign('floor_id')->references('id')->on('floors')->onDelete('cascade');
                $table->foreign('section_id')->references('id')->on('seat_sections')->onDelete('set null');
            });
        }

        // 2. Add columns to seats table
        Schema::table('seats', function (Blueprint $table) {
            if (!Schema::hasColumn('seats', 'table_id')) {
                $table->unsignedBigInteger('table_id')->nullable()->after('section_id');
                $table->foreign('table_id')->references('id')->on('study_tables')->onDelete('set null');
            }
            if (!Schema::hasColumn('seats', 'cabin_number')) {
                $table->string('cabin_number')->nullable()->after('table_id');
            }
            if (!Schema::hasColumn('seats', 'cabin_features')) {
                $table->json('cabin_features')->nullable()->after('cabin_number');
            }
        });

        // 3. Migrate existing seat_layout_mode values
        if (Schema::hasColumn('libraries', 'seat_layout_mode')) {
            DB::table('libraries')
                ->whereIn('seat_layout_mode', ['layout', 'grid'])
                ->update(['seat_layout_mode' => 'individual']);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('seats', function (Blueprint $table) {
            $table->dropForeign(['table_id']);
            $table->dropColumn(['table_id', 'cabin_number', 'cabin_features']);
        });

        Schema::dropIfExists('study_tables');
    }
};
