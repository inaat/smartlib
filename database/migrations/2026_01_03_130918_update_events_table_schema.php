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
        Schema::table('events', function (Blueprint $table) {
            if (!Schema::hasColumn('events', 'date')) {
                $table->date('date')->nullable()->after('description');
            }
            if (!Schema::hasColumn('events', 'venue')) {
                $table->string('venue')->nullable()->after('end_time');
            }
            if (!Schema::hasColumn('events', 'capacity')) {
                $table->integer('capacity')->nullable()->after('venue');
            }
            if (!Schema::hasColumn('events', 'registered')) {
                $table->integer('registered')->default(0)->after('capacity');
            }
            if (!Schema::hasColumn('events', 'waitlist')) {
                $table->integer('waitlist')->default(0)->after('registered');
            }
            if (!Schema::hasColumn('events', 'type')) {
                $table->string('type')->nullable()->after('waitlist');
            }
            if (!Schema::hasColumn('events', 'is_paid')) {
                $table->boolean('is_paid')->default(false)->after('type');
            }
            if (!Schema::hasColumn('events', 'price')) {
                $table->decimal('price', 10, 2)->nullable()->after('is_paid');
            }
            if (!Schema::hasColumn('events', 'image')) {
                $table->string('image')->nullable()->after('price');
            }
            if (!Schema::hasColumn('events', 'organizer_id')) {
                $table->foreignId('organizer_id')->nullable()->constrained('users')->onDelete('set null')->after('image');
            }
            if (!Schema::hasColumn('events', 'registration_deadline')) {
                $table->dateTime('registration_deadline')->nullable()->after('organizer_id');
            }
            if (!Schema::hasColumn('events', 'is_active')) {
                $table->boolean('is_active')->default(true)->after('registration_deadline');
            }
            if (!Schema::hasColumn('events', 'speakers')) {
                $table->json('speakers')->nullable()->after('is_active');
            }
            if (!Schema::hasColumn('events', 'agenda')) {
                $table->json('agenda')->nullable()->after('speakers');
            }
            if (!Schema::hasColumn('events', 'materials')) {
                $table->json('materials')->nullable()->after('agenda');
            }
            if (!Schema::hasColumn('events', 'prerequisites')) {
                $table->json('prerequisites')->nullable()->after('materials');
            }
            if (!Schema::hasColumn('events', 'certificate_provided')) {
                $table->boolean('certificate_provided')->default(false)->after('prerequisites');
            }
            if (!Schema::hasColumn('events', 'recording_available')) {
                $table->boolean('recording_available')->default(false)->after('certificate_provided');
            }
            if (!Schema::hasColumn('events', 'tags')) {
                $table->json('tags')->nullable()->after('recording_available');
            }
            if (!Schema::hasColumn('events', 'target_audience')) {
                $table->json('target_audience')->nullable()->after('tags');
            }
            if (!Schema::hasColumn('events', 'difficulty')) {
                $table->string('difficulty')->nullable()->after('target_audience');
            }
            if (!Schema::hasColumn('events', 'attendance_tracking')) {
                $table->boolean('attendance_tracking')->default(false)->after('difficulty');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn([
                'date', 'venue', 'capacity', 'registered', 'waitlist', 'type',
                'is_paid', 'price', 'image', 'organizer_id', 'registration_deadline',
                'is_active', 'speakers', 'agenda', 'materials', 'prerequisites',
                'certificate_provided', 'recording_available', 'tags',
                'target_audience', 'difficulty', 'attendance_tracking'
            ]);
        });
    }
};
