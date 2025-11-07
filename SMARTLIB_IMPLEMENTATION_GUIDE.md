# SmartLib - Implementation Guide

## Project Overview
SmartLib is a comprehensive library management system for ICAP CA students with features including:
- Multi-role authentication (Student, Librarian, Super Admin)
- Seat booking with QR code check-in/check-out
- Physical and digital book management
- Event management with free/paid registration
- Subscription plans (Trial, Basic, Pro)
- Loyalty points system
- Automated notifications and reminders
- Session management (1 mobile + 1 laptop simultaneously)

## Database Structure

### Core Tables Created
1. **users** - Students, Librarians, Super Admins
2. **libraries** - Library locations and details
3. **subscription_plans** - Trial, Basic, Pro plans
4. **user_subscriptions** - User subscription records
5. **seats** - Library seats with QR codes
6. **seat_bookings** - Seat reservations and check-ins
7. **books** - Physical and digital books
8. **book_reservations** - Book borrowing records
9. **events** - Library events (free/paid)
10. **event_registrations** - Event registrations
11. **notifications** - User notifications
12. **loyalty_transactions** - Points history
13. **permission_tables** - Role-based permissions (Spatie)
14. **personal_access_tokens** - API authentication (Sanctum)

## Installation Steps Already Completed

1. ✅ Laravel project created
2. ✅ Required packages installed:
   - Laravel Sanctum (API authentication)
   - Spatie Laravel Permission (role management)
   - SimpleSoftwareIO Simple QRCode (QR generation)
   - Intervention Image (image processing)
   - Barryvdh Laravel DomPDF (PDF generation)
3. ✅ Database migrations created
4. ✅ Core models created

## Next Steps to Complete

### 1. Run Migrations
```bash
php artisan migrate
```

### 2. Create Database Seeders

Create `database/seeders/DatabaseSeeder.php`:
```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\SubscriptionPlan;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles
        Role::create(['name' => 'student']);
        Role::create(['name' => 'librarian']);
        Role::create(['name' => 'super_admin']);

        // Create Super Admin
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'admin@smartlib.com',
            'password' => bcrypt('password'),
            'crn' => 'ADMIN001',
            'user_type' => 'super_admin',
            'status' => 'approved',
        ]);
        $superAdmin->assignRole('super_admin');

        // Create Subscription Plans
        SubscriptionPlan::create([
            'name' => 'Trial',
            'slug' => 'trial',
            'description' => '1 week trial with limited bookings',
            'price' => 0,
            'duration_days' => 7,
            'seat_bookings_limit' => 5,
            'is_active' => true,
        ]);

        SubscriptionPlan::create([
            'name' => 'Basic',
            'slug' => 'basic',
            'description' => 'Monthly plan with 30 seat bookings',
            'price' => 500,
            'duration_days' => 30,
            'seat_bookings_limit' => 30,
            'is_active' => true,
        ]);

        SubscriptionPlan::create([
            'name' => 'Pro',
            'slug' => 'pro',
            'description' => '6 months with unlimited bookings',
            'price' => 2500,
            'duration_days' => 180,
            'seat_bookings_limit' => null, // unlimited
            'is_active' => true,
        ]);
    }
}
```

Run the seeder:
```bash
php artisan db:seed
```

### 3. Complete the Models

Add relationships and fillable fields to all models. Example for Library model:

`app/Models/Library.php`:
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Library extends Model
{
    protected $fillable = [
        'name', 'description', 'photo', 'address',
        'latitude', 'longitude', 'capacity',
        'opening_time', 'closing_time', 'services', 'is_active'
    ];

    protected $casts = [
        'services' => 'array',
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
        'is_active' => 'boolean',
    ];

    public function librarians()
    {
        return $this->hasMany(User::class)->where('user_type', 'librarian');
    }

    public function seats()
    {
        return $this->hasMany(Seat::class);
    }

    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function seatBookings()
    {
        return $this->hasMany(SeatBooking::class);
    }

    public function availableSeats()
    {
        return $this->seats()->where('status', 'available');
    }
}
```

### 4. Create API Controllers

Create controllers for each panel:

```bash
php artisan make:controller Api/AuthController
php artisan make:controller Api/Student/DashboardController
php artisan make:controller Api/Student/LibraryController
php artisan make:controller Api/Student/SeatBookingController
php artisan make:controller Api/Student/BookController
php artisan make:controller Api/Student/EventController
php artisan make:controller Api/Student/ProfileController
php artisan make:controller Api/Librarian/DashboardController
php artisan make:controller Api/Librarian/SeatManagementController
php artisan make:controller Api/Librarian/BookManagementController
php artisan make:controller Api/Librarian/EventManagementController
php artisan make:controller Api/SuperAdmin/UserManagementController
php artisan make:controller Api/SuperAdmin/LibraryManagementController
php artisan make:controller Api/SuperAdmin/SubscriptionManagementController
```

### 5. Setup API Routes

In `routes/api.php`:
```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Student routes
    Route::prefix('student')->middleware(['role:student'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);
        Route::get('/libraries', [LibraryController::class, 'index']);
        Route::post('/bookings', [SeatBookingController::class, 'store']);
        Route::post('/bookings/{booking}/checkin', [SeatBookingController::class, 'checkIn']);
        Route::post('/bookings/{booking}/checkout', [SeatBookingController::class, 'checkOut']);
        // ... more routes
    });

    // Librarian routes
    Route::prefix('librarian')->middleware(['role:librarian'])->group(function () {
        // ... librarian routes
    });

    // Super Admin routes
    Route::prefix('admin')->middleware(['role:super_admin'])->group(function () {
        // ... admin routes
    });
});
```

### 6. Create Authentication Controller

`app/Http/Controllers/Api/AuthController.php`:
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
            'crn' => 'required|unique:users',
            'icap_id_card_photo' => 'required|image',
            'phone' => 'nullable|string',
        ]);

        // Handle ICAP ID card photo upload
        $icapPhotoPath = $request->file('icap_id_card_photo')
            ->store('icap_photos', 'public');

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'crn' => $request->crn,
            'icap_id_card_photo' => $icapPhotoPath,
            'phone' => $request->phone,
            'user_type' => 'student',
            'status' => 'pending', // Awaits Super Admin approval
        ]);

        $user->assignRole('student');

        return response()->json([
            'message' => 'Registration successful. Awaiting admin approval.',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'crn' => 'required',
            'password' => 'required',
            'device_type' => 'required|in:mobile,laptop',
        ]);

        $user = User::where('crn', $request->crn)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'crn' => ['The provided credentials are incorrect.'],
            ]);
        }

        if ($user->status !== 'approved') {
            return response()->json([
                'message' => 'Your account is not approved yet.'
            ], 403);
        }

        // Handle session management (1 mobile + 1 laptop)
        if ($request->device_type === 'mobile') {
            // Revoke existing mobile tokens
            $user->tokens()->where('name', 'mobile')->delete();
        }

        $token = $user->createToken($request->device_type)->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
```

### 7. Create Seat Booking Service

Create `app/Services/SeatBookingService.php`:
```php
<?php

namespace App\Services;

use App\Models\Seat;
use App\Models\SeatBooking;
use App\Models\User;
use Carbon\Carbon;

class SeatBookingService
{
    public function bookSeat(User $user, Seat $seat, $startTime, $endTime)
    {
        if (!$user->canBookSeat()) {
            throw new \Exception('You cannot book a seat at this time.');
        }

        if (!$this->isSeatAvailable($seat, $startTime, $endTime)) {
            throw new \Exception('Seat is not available for the selected time.');
        }

        $booking = SeatBooking::create([
            'user_id' => $user->id,
            'seat_id' => $seat->id,
            'library_id' => $seat->library_id,
            'booking_start' => $startTime,
            'booking_end' => $endTime,
            'status' => 'pending',
        ]);

        $seat->update(['status' => 'booked']);

        // Increment subscription usage
        $subscription = $user->activeSubscription;
        $subscription->increment('bookings_used');

        return $booking;
    }

    public function checkIn(SeatBooking $booking, $qrCode)
    {
        $seat = $booking->seat;

        if ($seat->qr_code !== $qrCode) {
            throw new \Exception('Invalid QR code.');
        }

        if ($booking->status !== 'pending') {
            throw new \Exception('Booking is not in pending status.');
        }

        $booking->update([
            'status' => 'active',
            'check_in_time' => now(),
        ]);

        return $booking;
    }

    public function checkOut(SeatBooking $booking)
    {
        $booking->update([
            'status' => 'completed',
            'check_out_time' => now(),
        ]);

        $booking->seat->update(['status' => 'available']);

        // Award loyalty points for proper checkout
        $booking->user->addLoyaltyPoints(
            10,
            'proper_checkout',
            'Checked out properly from seat booking',
            $booking
        );

        return $booking;
    }

    public function autoRelease()
    {
        $expiredBookings = SeatBooking::where('status', 'pending')
            ->where('booking_start', '<', now()->subMinutes(30))
            ->get();

        foreach ($expiredBookings as $booking) {
            $booking->update(['status' => 'auto_released']);
            $booking->seat->update(['status' => 'available']);
        }

        return $expiredBookings->count();
    }

    private function isSeatAvailable(Seat $seat, $startTime, $endTime)
    {
        return !SeatBooking::where('seat_id', $seat->id)
            ->whereIn('status', ['pending', 'active'])
            ->where(function ($query) use ($startTime, $endTime) {
                $query->whereBetween('booking_start', [$startTime, $endTime])
                    ->orWhereBetween('booking_end', [$startTime, $endTime])
                    ->orWhere(function ($q) use ($startTime, $endTime) {
                        $q->where('booking_start', '<=', $startTime)
                          ->where('booking_end', '>=', $endTime);
                    });
            })
            ->exists();
    }
}
```

### 8. Create Scheduled Tasks

In `app/Console/Kernel.php`:
```php
protected function schedule(Schedule $schedule)
{
    // Auto-release seats not checked in within 30 minutes
    $schedule->call(function () {
        app(SeatBookingService::class)->autoRelease();
    })->everyFiveMinutes();

    // Send subscription expiry reminders
    $schedule->call(function () {
        // Send notifications to users whose subscriptions expire in 3 days
        $expiringSubscriptions = UserSubscription::where('status', 'active')
            ->whereBetween('end_date', [now(), now()->addDays(3)])
            ->with('user')
            ->get();

        foreach ($expiringSubscriptions as $subscription) {
            Notification::create([
                'user_id' => $subscription->user_id,
                'title' => 'Subscription Expiring Soon',
                'message' => 'Your subscription will expire on ' . $subscription->end_date->format('Y-m-d'),
                'type' => 'subscription_expiry',
            ]);
        }
    })->daily();

    // Send event reminders (1 day before)
    $schedule->call(function () {
        // Similar logic for event reminders
    })->daily();
}
```

To run the scheduler, add to crontab:
```
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

### 9. Create QR Code Generator

`app/Services/QRCodeService.php`:
```php
<?php

namespace App\Services;

use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class QRCodeService
{
    public function generateSeatQRCode(Seat $seat)
    {
        $qrContent = encrypt([
            'type' => 'seat',
            'seat_id' => $seat->id,
            'library_id' => $seat->library_id,
        ]);

        $qrCode = QrCode::format('png')
            ->size(300)
            ->generate($qrContent);

        $filename = 'qrcodes/seats/seat-' . $seat->id . '.png';
        Storage::disk('public')->put($filename, $qrCode);

        $seat->update(['qr_code' => $qrContent]);

        return $filename;
    }

    public function generateEventQRCode(EventRegistration $registration)
    {
        $qrContent = encrypt([
            'type' => 'event',
            'registration_id' => $registration->id,
            'user_id' => $registration->user_id,
            'event_id' => $registration->event_id,
        ]);

        $qrCode = QrCode::format('png')
            ->size(300)
            ->generate($qrContent);

        $filename = 'qrcodes/events/event-' . $registration->id . '.png';
        Storage::disk('public')->put($filename, $qrCode);

        $registration->update(['qr_code_path' => $filename]);

        return $filename;
    }

    public function verifyQRCode($encryptedData)
    {
        try {
            return decrypt($encryptedData);
        } catch (\Exception $e) {
            throw new \Exception('Invalid QR code');
        }
    }
}
```

### 10. Environment Configuration

Update `.env`:
```env
APP_NAME="SmartLib"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=smartlib
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DRIVER=database
```

### 11. CORS Configuration

In `config/cors.php`:
```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'supports_credentials' => true,
```

## Key Features Implementation Summary

### Session Management (1 Mobile + 1 Laptop)
- Implemented via Sanctum tokens
- Token names: 'mobile' or 'laptop'
- On mobile login, previous mobile tokens are revoked
- Laptop tokens remain independent

### Seat Booking Flow
1. Student searches libraries
2. Views available seats (color-coded)
3. Books a seat
4. Must check-in within 30 minutes using QR
5. Can check-out early
6. Auto-released if not checked in

### Subscription System
- Trial: 1 week, 5 bookings, free
- Basic: 30 days, 30 bookings, paid
- Pro: 180 days, unlimited bookings, paid
- Payment gateways: Easypaisa, JazzCash, Bank

### Loyalty Points
- +10 points: Proper checkout
- +20 points: Attending events
- +15 points: Returning books on time
- Leaderboard available

### Book Management
- Physical: Reserve → Pick up from library
- Digital Free: Downloadable PDF
- Digital Paid: Read-only in app with features:
  - Highlighter
  - Notes & Bookmarks
  - Reading progress tracking
  - Auto-expires with subscription

## Testing

Run tests:
```bash
php artisan test
```

## Deployment Checklist

- [ ] Set APP_ENV=production in .env
- [ ] Set APP_DEBUG=false
- [ ] Run migrations on production
- [ ] Set up cron job for scheduler
- [ ] Configure file storage (S3 or local)
- [ ] Set up SSL certificate
- [ ] Configure queue workers
- [ ] Set up monitoring (Laravel Telescope)
- [ ] Configure backup system

## API Documentation

Generate API documentation using Laravel API Documentation Generator:
```bash
composer require --dev knuckleswtf/scribe
php artisan vendor:publish --tag=scribe-config
php artisan scribe:generate
```

## Support & Maintenance

For questions or issues:
- Check Laravel documentation: https://laravel.com/docs
- Spatie Permission: https://spatie.be/docs/laravel-permission
- Laravel Sanctum: https://laravel.com/docs/sanctum

## License

This project is proprietary software for ICAP CA.
