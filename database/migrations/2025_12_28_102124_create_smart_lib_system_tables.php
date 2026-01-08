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
        // 1. Users & Authentication
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('email')->unique();
                $table->string('password');
                $table->enum('role', ['owner', 'super_admin', 'librarian', 'student'])->default('student');
                $table->boolean('is_active')->default(true);
                $table->string('phone')->nullable();
                $table->string('crn')->nullable();
                $table->enum('ca_level', ['PRC', 'CAP', 'Final'])->nullable();
                $table->string('profile_picture')->nullable();
                $table->integer('streak_count')->default(0);
                $table->integer('streak_freeze_count')->default(0);
                $table->timestamp('last_activity_at')->nullable();
                $table->boolean('trial_used')->default(false);
                $table->timestamp('trial_started_at')->nullable();
                $table->timestamp('trial_ends_at')->nullable();
                $table->integer('loyalty_points')->default(0);
                $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
                $table->rememberToken();
                $table->softDeletes();
                $table->timestamps();
            });
        }


        if (!Schema::hasTable('otp_verifications')) {
            Schema::create('otp_verifications', function (Blueprint $table) {
                $table->id();
                $table->string('phone');
                $table->string('crn');
                $table->string('otp');
                $table->boolean('verified')->default(false);
                $table->timestamp('expires_at');
                $table->integer('attempts')->default(0);
                $table->timestamps();
            });
        }


        // 2. Library Management
        if (!Schema::hasTable('libraries')) {
            Schema::create('libraries', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('address');
                $table->time('opening_time')->nullable();
                $table->time('closing_time')->nullable();
                $table->text('rules')->nullable();
                $table->string('contact_phone')->nullable();
                $table->string('contact_email')->nullable();
                $table->boolean('is_active')->default(true);
                $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('floors')) {
            Schema::create('floors', function (Blueprint $table) {
                $table->id();
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->string('name');
                $table->enum('type', ['quiet_zone', 'discussion_area', 'girls_only', 'boys_only', 'mixed'])->default('mixed');
                $table->integer('capacity')->default(0);
                $table->integer('order')->default(0);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('seats')) {
            Schema::create('seats', function (Blueprint $table) {
                $table->id();
                $table->foreignId('floor_id')->constrained('floors')->onDelete('cascade');
                $table->string('seat_number');
                $table->string('seat_type')->default('open'); // open, group, cabin
                $table->string('zone')->nullable();
                $table->enum('status', ['available', 'occupied', 'reserved', 'maintenance'])->default('available');
                $table->integer('position_x')->default(0);
                $table->integer('position_y')->default(0);
                $table->string('qr_code')->unique()->nullable();
                $table->timestamp('qr_generated_at')->nullable();
                $table->timestamp('qr_expires_at')->nullable();
                $table->boolean('is_maintenance')->default(false);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('library_librarian')) {
            Schema::create('library_librarian', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->json('permissions')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('booking_rules')) {
            Schema::create('booking_rules', function (Blueprint $table) {
                $table->id();
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->integer('max_booking_hours')->default(4);
                $table->integer('min_extension_minutes')->default(10);
                $table->integer('max_extensions_per_day')->default(3);
                $table->integer('late_checkin_minutes')->default(15);
                $table->integer('auto_cancel_minutes')->default(30);
                $table->integer('no_show_time_limit')->default(15);
                $table->boolean('require_qr_scan')->default(true);
                $table->integer('max_delay_minutes')->default(10);
                $table->boolean('auto_checkout_enabled')->default(true);
                $table->boolean('smart_queue_enabled')->default(true);
                $table->timestamps();
            });
        }

        // 3. Subscriptions & Payments
        if (!Schema::hasTable('subscription_plans')) {
            Schema::create('subscription_plans', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->text('description')->nullable();
                $table->decimal('price', 10, 2);
                $table->string('duration_type')->default('monthly'); // monthly, quarterly, yearly
                $table->integer('duration_value')->default(1);
                $table->boolean('auto_renewal_default')->default(false);
                $table->integer('trial_days')->default(0);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('user_subscriptions')) {
            Schema::create('user_subscriptions', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('subscription_plan_id')->constrained('subscription_plans')->onDelete('cascade');
                $table->dateTime('started_at');
                $table->dateTime('expires_at');
                $table->enum('status', ['active', 'expired', 'cancelled'])->default('active');
                $table->boolean('auto_renew')->default(false);
                $table->decimal('amount_paid', 10, 2)->nullable();
                $table->string('payment_method')->nullable();
                $table->string('transaction_id')->nullable();
                $table->integer('renewal_attempts')->default(0);
                $table->softDeletes();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('payments')) {
            Schema::create('payments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('user_subscription_id')->nullable()->constrained('user_subscriptions')->onDelete('set null');
                $table->decimal('amount', 10, 2);
                $table->string('currency')->default('PKR');
                $table->string('payment_method')->nullable();
                $table->string('transaction_id')->nullable();
                $table->string('gateway')->nullable();
                $table->enum('status', ['pending', 'completed', 'failed', 'refunded'])->default('pending');
                $table->dateTime('paid_at')->nullable();
                $table->enum('type', ['subscription', 'refund'])->default('subscription');
                $table->timestamps();
            });
        }

        // 4. Bookings & Queue
        if (!Schema::hasTable('seat_bookings')) {
            Schema::create('seat_bookings', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('seat_id')->constrained()->onDelete('cascade');
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->dateTime('booking_time');
                $table->dateTime('check_in_time')->nullable();
                $table->dateTime('check_out_time')->nullable();
                $table->dateTime('scheduled_end_time');
                $table->dateTime('extended_until')->nullable();
                $table->integer('extension_count')->default(0);
                $table->enum('status', ['booked', 'active', 'checked_in', 'checked_out', 'cancelled', 'no_show'])->default('booked');
                $table->boolean('qr_scanned')->default(false);
                $table->timestamp('qr_scanned_at')->nullable();
                $table->integer('total_minutes')->default(0);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('attendance')) {
            Schema::create('attendance', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->foreignId('seat_booking_id')->nullable()->constrained('seat_bookings')->onDelete('set null');
                $table->date('date');
                $table->time('check_in_time')->nullable();
                $table->time('check_out_time')->nullable();
                $table->integer('total_minutes')->default(0);
                $table->boolean('marked_manually')->default(false);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('smart_queue')) {
            Schema::create('smart_queue', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->foreignId('floor_id')->nullable()->constrained('floors')->onDelete('cascade');
                $table->string('seat_type_preference')->default('any');
                $table->integer('queue_position')->default(0);
                $table->dateTime('joined_at')->nullable();
                $table->enum('status', ['waiting', 'notified', 'assigned', 'cancelled'])->default('waiting');
                $table->integer('wait_time_minutes')->default(0);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('study_streaks')) {
            Schema::create('study_streaks', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->integer('current_streak')->default(0);
                $table->integer('longest_streak')->default(0);
                $table->date('last_study_date')->nullable();
                $table->integer('total_study_days')->default(0);
                $table->timestamps();
            });
        }

        // 5. Productivity Tools
        if (!Schema::hasTable('pomodoro_sessions')) {
            Schema::create('pomodoro_sessions', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->integer('focus_minutes')->default(25);
                $table->integer('short_break_minutes')->default(5);
                $table->integer('long_break_minutes')->default(15);
                $table->integer('cycles_before_long_break')->default(4);
                $table->integer('current_cycle')->default(1);
                $table->string('current_phase')->default('idle'); // focus, short_break, long_break, idle
                $table->dateTime('started_at')->nullable();
                $table->dateTime('ended_at')->nullable();
                $table->integer('completed_cycles')->default(0);
                $table->boolean('is_active')->default(false);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('distraction_blocker')) {
            Schema::create('distraction_blocker', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->boolean('is_enabled')->default(false);
                $table->json('blocked_apps')->nullable();
                $table->json('blocked_websites')->nullable();
                $table->json('whitelisted_apps')->nullable();
                $table->json('whitelisted_websites')->nullable();
                $table->boolean('mute_notifications')->default(false);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('habits')) {
            Schema::create('habits', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('name');
                $table->text('description')->nullable();
                $table->string('frequency')->default('daily'); // daily, weekly
                $table->time('reminder_time')->nullable();
                $table->integer('current_streak')->default(0);
                $table->integer('longest_streak')->default(0);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('habit_logs')) {
            Schema::create('habit_logs', function (Blueprint $table) {
                $table->id();
                $table->foreignId('habit_id')->constrained()->onDelete('cascade');
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->date('date');
                $table->boolean('completed')->default(false);
                $table->text('notes')->nullable();
                $table->timestamps();
            });
        }

        // 6. Digital Library
        if (!Schema::hasTable('books')) {
            Schema::create('books', function (Blueprint $table) {
                $table->id();
                $table->foreignId('library_id')->nullable()->constrained()->onDelete('cascade');
                $table->string('title');
                $table->string('author');
                $table->string('isbn')->unique();
                $table->string('type')->default('physical'); // physical, digital
                $table->string('category')->nullable();
                $table->string('cover')->nullable();
                $table->text('description')->nullable();
                $table->string('availability')->default('available');
                $table->string('location')->nullable();
                $table->json('digital_access')->nullable();
                $table->string('uploaded_by')->nullable();
                $table->dateTime('upload_date')->nullable();
                $table->integer('download_count')->default(0);
                $table->string('publisher')->nullable();
                $table->integer('publication_year')->nullable();
                $table->string('edition')->nullable();
                $table->string('language')->default('English');
                $table->integer('pages')->nullable();
                $table->json('tags')->nullable();
                $table->decimal('rating', 3, 2)->default(0.00);
                $table->integer('copies_total')->default(1);
                $table->integer('copies_available')->default(1);
                $table->json('reservation_queue')->nullable();
                $table->integer('borrowing_period')->default(14);
                $table->integer('renewal_limit')->default(2);
                $table->string('qr_code')->nullable();
                $table->timestamps();
            });
        }

        Schema::create('user_book_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('book_id')->constrained()->onDelete('cascade');
            $table->integer('current_page')->default(0);
            $table->integer('progress_percentage')->default(0);
            $table->boolean('is_downloaded')->default(false);
            $table->timestamps();
        });

        // 7. Community & Events
        if (!Schema::hasTable('chat_groups')) {
            Schema::create('chat_groups', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->foreignId('admin_id')->constrained('users')->onDelete('cascade');
                $table->boolean('is_locked')->default(false);
                $table->boolean('announcement_only')->default(false);
                $table->enum('type', ['public', 'private'])->default('public');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('chat_messages')) {
            Schema::create('chat_messages', function (Blueprint $table) {
                $table->id();
                $table->foreignId('chat_group_id')->constrained()->onDelete('cascade');
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->text('message')->nullable();
                $table->string('attachment_path')->nullable();
                $table->string('attachment_name')->nullable();
                $table->enum('type', ['text', 'file', 'system'])->default('text');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('events')) {
            Schema::create('events', function (Blueprint $table) {
                $table->id();
                $table->foreignId('library_id')->constrained()->onDelete('cascade');
                $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
                $table->string('title');
                $table->text('description')->nullable();
                $table->string('event_type')->nullable(); // Workshop, Seminar, etc.
                $table->dateTime('start_time');
                $table->dateTime('end_time');
                $table->string('location')->nullable();
                $table->integer('max_participants')->nullable();
                $table->boolean('requires_approval')->default(false);
                $table->enum('status', ['upcoming', 'ongoing', 'completed', 'cancelled', 'published'])->default('upcoming');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('event_registrations')) {
            Schema::create('event_registrations', function (Blueprint $table) {
                $table->id();
                $table->foreignId('event_id')->constrained()->onDelete('cascade');
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->enum('status', ['pending', 'approved', 'rejected', 'attended', 'absent', 'cancelled'])->default('pending');
                $table->dateTime('registered_at')->nullable();
                $table->dateTime('approved_at')->nullable();
                $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('set null');
                $table->boolean('attended')->default(false);
                $table->dateTime('attendance_marked_at')->nullable();
                $table->timestamps();
            });
        }

        // 8. Support & System
        if (!Schema::hasTable('tickets')) {
            Schema::create('tickets', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('subject');
                $table->text('description');
                $table->enum('status', ['open', 'in_progress', 'resolved', 'closed'])->default('open');
                $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
                $table->foreignId('assigned_to')->nullable()->constrained('users')->onDelete('set null');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('notifications')) {
            Schema::create('notifications', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('title');
                $table->text('message');
                $table->string('type')->nullable();
                $table->boolean('is_read')->default(false);
                $table->string('action_url')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('system_settings')) {
            Schema::create('system_settings', function (Blueprint $table) {
                $table->id();
                $table->string('key')->unique();
                $table->text('value')->nullable();
                $table->string('type')->default('string');
                $table->timestamps();
            });
        }

        // 9. Laravel System Tables
        if (!Schema::hasTable('sessions')) {
            Schema::create('sessions', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->foreignId('user_id')->nullable()->index();
                $table->string('ip_address', 45)->nullable();
                $table->text('user_agent')->nullable();
                $table->longText('payload');
                $table->integer('last_activity')->index();
            });
        }

        if (!Schema::hasTable('cache')) {
            Schema::create('cache', function (Blueprint $table) {
                $table->string('key')->primary();
                $table->mediumText('value');
                $table->integer('expiration');
            });
        }

        if (!Schema::hasTable('personal_access_tokens')) {
            Schema::create('personal_access_tokens', function (Blueprint $table) {
                $table->id();
                $table->morphs('tokenable');
                $table->string('name');
                $table->string('token', 64)->unique();
                $table->text('abilities')->nullable();
                $table->timestamp('last_used_at')->nullable();
                $table->timestamp('expires_at')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
        Schema::dropIfExists('cache');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('system_settings');
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('tickets');
        Schema::dropIfExists('event_registrations');
        Schema::dropIfExists('events');
        Schema::dropIfExists('chat_messages');
        Schema::dropIfExists('chat_groups');
        Schema::dropIfExists('user_book_progress');
        Schema::dropIfExists('books');
        Schema::dropIfExists('habit_logs');
        Schema::dropIfExists('habits');
        Schema::dropIfExists('distraction_blocker');
        Schema::dropIfExists('pomodoro_sessions');
        Schema::dropIfExists('study_streaks');
        Schema::dropIfExists('smart_queue');
        Schema::dropIfExists('attendance');
        Schema::dropIfExists('seat_bookings');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('user_subscriptions');
        Schema::dropIfExists('subscription_plans');
        Schema::dropIfExists('booking_rules');
        Schema::dropIfExists('library_librarian');
        Schema::dropIfExists('seats');
        Schema::dropIfExists('floors');
        Schema::dropIfExists('libraries');
        // Schema::dropIfExists('users'); // Usually keep users
    }
};
