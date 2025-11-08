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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->foreignId('library_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('author')->nullable();
            $table->string('isbn')->nullable()->unique();
            $table->enum('type', ['physical', 'digital']);
            $table->string('category')->nullable();
            $table->string('cover')->nullable(); // cover image path
            $table->text('description')->nullable();
            $table->enum('availability', ['available', 'reserved', 'unavailable'])->default('available');
            $table->string('location')->nullable(); // shelf location for physical books
            $table->json('digital_access')->nullable(); // {subscriptionRequired, pdfUrl, accessLevel, etc}
            $table->string('uploaded_by')->nullable();
            $table->timestamp('upload_date')->nullable();
            $table->integer('download_count')->default(0);
            $table->string('publisher')->nullable();
            $table->integer('publication_year')->nullable();
            $table->string('edition')->nullable();
            $table->string('language')->default('English');
            $table->integer('pages')->nullable();
            $table->json('tags')->nullable(); // array of strings
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('copies_total')->default(1);
            $table->integer('copies_available')->default(1);
            $table->json('reservation_queue')->nullable(); // array of user IDs
            $table->integer('borrowing_period')->default(14); // days
            $table->integer('renewal_limit')->default(2);
            $table->text('qr_code')->nullable();
            $table->timestamps();

            $table->index(['library_id', 'type']);
            $table->index('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
