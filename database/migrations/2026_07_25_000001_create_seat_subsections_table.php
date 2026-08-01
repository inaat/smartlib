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
        // 1. Add has_subsections to seat_sections table
        if (!Schema::hasColumn('seat_sections', 'has_subsections')) {
            Schema::table('seat_sections', function (Blueprint $table) {
                $table->boolean('has_subsections')->default(false)->after('description');
            });
        }

        // 2. Create seat_subsections table
        if (!Schema::hasTable('seat_subsections')) {
            Schema::create('seat_subsections', function (Blueprint $table) {
                $table->id();
                $table->foreignId('section_id')->constrained('seat_sections')->onDelete('cascade');
                $table->foreignId('library_id')->constrained('libraries')->onDelete('cascade');
                $table->foreignId('floor_id')->nullable()->constrained('floors')->onDelete('cascade');
                $table->string('name');
                $table->string('code')->nullable();
                $table->string('gender')->nullable(); // 'male', 'female', 'mixed'
                $table->string('academic_level')->nullable(); // 'PRC', 'CAF', 'Final', 'all'
                $table->integer('total_seats')->default(0);
                $table->text('description')->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        // 3. Add subsection_id to seats table
        if (!Schema::hasColumn('seats', 'subsection_id')) {
            Schema::table('seats', function (Blueprint $table) {
                $table->foreignId('subsection_id')->nullable()->after('section_id')->constrained('seat_subsections')->nullOnDelete();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('seats', 'subsection_id')) {
            Schema::table('seats', function (Blueprint $table) {
                $table->dropForeign(['subsection_id']);
                $table->dropColumn('subsection_id');
            });
        }

        Schema::dropIfExists('seat_subsections');

        if (Schema::hasColumn('seat_sections', 'has_subsections')) {
            Schema::table('seat_sections', function (Blueprint $table) {
                $table->dropColumn('has_subsections');
            });
        }
    }
};
