<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('generated_reports');
        Schema::dropIfExists('scheduled_reports');

        Schema::create('scheduled_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->constrained('libraries')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('report_type');
            $table->enum('frequency', ['daily', 'weekly', 'monthly'])->default('daily');
            $table->string('format')->default('pdf');
            $table->string('recipient_email');
            $table->string('send_time')->default('08:00');
            $table->enum('status', ['active', 'paused'])->default('active');
            $table->timestamp('last_generated_at')->nullable();
            $table->timestamp('next_run_at')->nullable();
            $table->timestamps();
        });

        Schema::create('generated_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('scheduled_report_id')->nullable()->constrained('scheduled_reports')->onDelete('set null');
            $table->foreignId('library_id')->constrained('libraries')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->string('report_title');
            $table->string('report_type');
            $table->string('frequency')->default('daily');
            $table->string('format')->default('pdf');
            $table->string('file_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('generated_reports');
        Schema::dropIfExists('scheduled_reports');
    }
};
