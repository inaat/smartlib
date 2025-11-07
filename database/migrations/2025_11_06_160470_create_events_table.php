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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->nullable()->constrained()->nullOnDelete(); // null = global event
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('venue')->nullable();
            $table->integer('capacity')->nullable(); // null = unlimited
            $table->integer('registered')->default(0);
            $table->integer('waitlist')->default(0);
            $table->enum('type', ['seminar', 'workshop', 'study_group', 'exam_prep', 'career_guidance', 'networking'])->default('seminar');
            $table->boolean('is_paid')->default(false);
            $table->decimal('price', 10, 2)->nullable();
            $table->string('image')->nullable();
            $table->string('organizer_id')->nullable();
            $table->dateTime('registration_deadline')->nullable();
            $table->boolean('is_active')->default(true);
            $table->json('speakers')->nullable(); // array of speaker objects
            $table->json('agenda')->nullable(); // array of agenda items
            $table->json('materials')->nullable(); // array of materials
            $table->json('prerequisites')->nullable(); // array of strings
            $table->boolean('certificate_provided')->default(false);
            $table->boolean('recording_available')->default(false);
            $table->json('tags')->nullable(); // array of strings
            $table->json('target_audience')->nullable(); // array of strings
            $table->enum('difficulty', ['beginner', 'intermediate', 'advanced'])->nullable();
            $table->boolean('attendance_tracking')->default(true);
            $table->timestamps();

            $table->index(['library_id', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
