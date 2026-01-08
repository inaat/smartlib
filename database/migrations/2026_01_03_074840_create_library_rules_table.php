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
        Schema::create('library_rules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['general', 'cancellation', 'booking', 'conduct'])->default('general');
            $table->text('rule_text');
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_rules');
    }
};
