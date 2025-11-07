# SmartLib - Quick Start Guide

## What Has Been Created

Your SmartLib Laravel application has been initialized with:

### ✅ Installed Packages
- **Laravel 12** (Latest version)
- **Laravel Sanctum** - API authentication
- **Spatie Laravel Permission** - Role-based access control
- **SimpleSoftwareIO QRCode** - QR code generation
- **Intervention Image** - Image processing
- **Barryvdh DomPDF** - PDF generation

### ✅ Database Structure
All migrations have been created for:
- Users (with CRN, ICAP ID, roles, status)
- Libraries (with location, capacity)
- Seats (with QR codes)
- Seat Bookings (with check-in/out)
- Books (physical & digital)
- Book Reservations
- Events (free & paid)
- Event Registrations
- Subscription Plans
- User Subscriptions
- Notifications
- Loyalty Transactions
- Permissions & Roles
- Sessions (with device type tracking)

### ✅ Models Created
All Eloquent models have been generated:
- User (with relationships and helper methods)
- Library, Seat, SeatBooking
- Book, BookReservation
- Event, EventRegistration
- SubscriptionPlan, UserSubscription
- Notification, LoyaltyTransaction

## Next Steps (Run These Commands)

### 1. Configure Database
Edit `.env` file and set your database credentials:
```env
DB_DATABASE=smartlib
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 2. Create Database
```bash
# If using MySQL
mysql -u root -p
CREATE DATABASE smartlib;
exit;
```

### 3. Run Migrations
```bash
php artisan migrate
```

### 4. Create Seeder
Create the seeder file shown in `SMARTLIB_IMPLEMENTATION_GUIDE.md` section 2, then run:
```bash
php artisan db:seed
```

This will create:
- Super Admin user (admin@smartlib.com / password)
- Three subscription plans (Trial, Basic, Pro)
- Three roles (student, librarian, super_admin)

### 5. Create Storage Link
```bash
php artisan storage:link
```

### 6. Start Development Server
```bash
php artisan serve
```

Your application will be available at: http://localhost:8000

## Test API Endpoints

### Register a Student
```bash
curl -X POST http://localhost:8000/api/register \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "password=password123" \
  -F "password_confirmation=password123" \
  -F "crn=CRN12345" \
  -F "phone=03001234567" \
  -F "icap_id_card_photo=@/path/to/image.jpg"
```

### Login as Super Admin
```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "crn": "ADMIN001",
    "password": "password",
    "device_type": "laptop"
  }'
```

## Project Structure

```
smartlib/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── Api/          # Create your API controllers here
│   ├── Models/               # All models created ✅
│   │   ├── User.php         # Enhanced with relationships ✅
│   │   ├── Library.php
│   │   ├── Seat.php
│   │   └── ...
│   └── Services/             # Create service classes here
│       ├── SeatBookingService.php  # Example in guide
│       └── QRCodeService.php       # Example in guide
├── database/
│   ├── migrations/           # All migrations created ✅
│   └── seeders/             # Create DatabaseSeeder here
├── routes/
│   └── api.php              # Define your API routes here
└── storage/
    └── app/
        └── public/          # QR codes & uploads will be stored here
```

## Development Workflow

### 1. Complete the Models
Add relationships and fillable fields to remaining models following the User model example.

### 2. Create Controllers
```bash
php artisan make:controller Api/AuthController
php artisan make:controller Api/Student/DashboardController
# ... more controllers as needed
```

### 3. Define API Routes
Edit `routes/api.php` and add your endpoints using the examples in the implementation guide.

### 4. Create Service Classes
For complex business logic (booking, QR generation, loyalty points), create service classes in `app/Services/`.

### 5. Add Validation
Create Form Request classes:
```bash
php artisan make:request RegisterRequest
php artisan make:request BookSeatRequest
```

### 6. Test Your API
Use tools like:
- Postman
- Insomnia
- cURL
- Laravel built-in testing

## Key Features to Implement

### Priority 1 (Core Functionality)
- [ ] Complete authentication system
- [ ] Student registration with approval workflow
- [ ] Library listing and filtering
- [ ] Seat booking system
- [ ] QR code generation for seats
- [ ] Check-in/Check-out functionality

### Priority 2 (Business Logic)
- [ ] Session management (1 mobile + 1 laptop)
- [ ] Subscription system
- [ ] Book management (physical & digital)
- [ ] Book reservation system
- [ ] PDF reader for digital books

### Priority 3 (Enhanced Features)
- [ ] Event management
- [ ] Event registration
- [ ] Payment integration (Easypaisa, JazzCash, Bank)
- [ ] Loyalty points system
- [ ] Notifications

### Priority 4 (Automation)
- [ ] Auto-release seats after 30 minutes
- [ ] Scheduled reminders
- [ ] Subscription expiry notifications
- [ ] Analytics and reports

## Common Commands

### Database
```bash
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Drop all tables and re-run migrations
php artisan migrate:refresh      # Rollback and re-run migrations
php artisan db:seed              # Run seeders
php artisan migrate:fresh --seed # Fresh migration + seed
```

### Artisan
```bash
php artisan make:model ModelName            # Create model
php artisan make:controller ControllerName  # Create controller
php artisan make:migration migration_name   # Create migration
php artisan make:request RequestName        # Create form request
php artisan make:resource ResourceName      # Create API resource
php artisan make:seeder SeederName          # Create seeder
```

### Cache & Config
```bash
php artisan config:cache    # Cache config
php artisan config:clear    # Clear config cache
php artisan cache:clear     # Clear application cache
php artisan route:cache     # Cache routes
php artisan route:clear     # Clear route cache
```

### Queue & Scheduler
```bash
php artisan queue:work         # Start queue worker
php artisan schedule:run       # Run scheduled tasks manually
php artisan schedule:work      # Run scheduler continuously
```

## Troubleshooting

### Migration Errors
If you get foreign key constraint errors:
1. Check migration file order (libraries must be created before users reference them)
2. Run `php artisan migrate:fresh` to start over

### Permission Errors
If storage is not writable:
```bash
chmod -R 775 storage bootstrap/cache
```

### Token Mismatch
If Sanctum tokens don't work:
1. Check SANCTUM_STATEFUL_DOMAINS in .env
2. Clear config cache: `php artisan config:clear`

## Resources

- **Full Implementation Guide**: See `SMARTLIB_IMPLEMENTATION_GUIDE.md`
- **Laravel Documentation**: https://laravel.com/docs
- **Sanctum Docs**: https://laravel.com/docs/sanctum
- **Spatie Permission**: https://spatie.be/docs/laravel-permission

## Need Help?

Review the comprehensive `SMARTLIB_IMPLEMENTATION_GUIDE.md` file for:
- Detailed code examples
- Service class implementations
- API endpoint definitions
- Scheduled task setup
- QR code generation
- Complete authentication flow

## Get Started Now!

```bash
# 1. Configure database in .env
# 2. Run migrations
php artisan migrate

# 3. Seed database
php artisan db:seed

# 4. Start server
php artisan serve

# 5. Visit http://localhost:8000
```

Happy coding! 🚀
