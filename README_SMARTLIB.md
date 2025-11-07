# 📚 SmartLib - Smart Library Management System

A modern, comprehensive library management system built with Laravel for ICAP CA students, featuring seat booking, digital library, events, and subscription-based services with AI recommendations and secure session management.

## 🎯 Overview

SmartLib is a web-based library access and management system designed for:
- **Students**: Book library seats, reserve books, register for events, manage subscriptions
- **Librarians**: Manage their assigned library's resources, track usage, view analytics
- **Super Admin**: Central control over all libraries, approve students, manage subscriptions

## ✨ Key Features

### For Students
- 🪑 **Seat Booking** with QR code check-in/check-out
- 📖 **Book Management** (physical reservations & digital reading)
- 🎯 **Event Registration** (free & paid events)
- 💳 **Subscription Plans** (Trial, Basic, Pro)
- ⭐ **Loyalty Points System** with leaderboard
- 🔔 **Smart Notifications** & automated reminders
- 📱 **Multi-Device Sessions** (1 mobile + 1 laptop simultaneously)
- 🤖 **AI Recommendations** for books, seats, and events

### For Librarians
- 🗺️ **Seat Map Management** with QR code generation
- 📚 **Book Management** (physical & digital, free & paid)
- 📅 **Event Organization** (library-specific or global)
- 📊 **Analytics Dashboard** (seat usage, popular books, attendance)
- 👥 **Student Tracking** in their library

### For Super Admin
- ✅ **Student Approval System**
- 🏢 **Library Management** (add, edit, assign librarians)
- 💰 **Subscription & Payment Management**
- 📈 **Global Analytics** across all libraries
- ⚙️ **System Configuration** (booking rules, loyalty points, automation)

## 🛠️ Technology Stack

- **Backend**: Laravel 12
- **Authentication**: Laravel Sanctum (API tokens)
- **Authorization**: Spatie Laravel Permission (role-based)
- **QR Codes**: SimpleSoftwareIO Simple QRCode
- **Image Processing**: Intervention Image
- **PDF Generation**: Barryvdh Laravel DomPDF
- **Database**: MySQL/PostgreSQL
- **Scheduler**: Laravel Task Scheduling
- **Queue**: Laravel Queue (for notifications & automation)

## 📋 Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- MySQL 8.0 or higher
- Node.js & NPM (for frontend assets)

### Quick Setup

1. **Clone the repository** (if from git)
   ```bash
   cd smartlib
   ```

2. **Install Dependencies**
   ```bash
   composer install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Setup Database**
   Edit `.env` and configure your database:
   ```env
   DB_DATABASE=smartlib
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. **Run Migrations**
   ```bash
   php artisan migrate
   ```

6. **Seed Database**
   ```bash
   php artisan db:seed
   ```

7. **Create Storage Link**
   ```bash
   php artisan storage:link
   ```

8. **Start Development Server**
   ```bash
   php artisan serve
   ```

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[SMARTLIB_IMPLEMENTATION_GUIDE.md](SMARTLIB_IMPLEMENTATION_GUIDE.md)** - Complete implementation guide with code examples

## 🗄️ Database Schema

### Core Tables
- `users` - Students, Librarians, Super Admins
- `libraries` - Library locations with capacity & hours
- `seats` - Individual seats with QR codes
- `seat_bookings` - Seat reservations and check-ins
- `books` - Physical and digital book catalog
- `book_reservations` - Book borrowing records
- `events` - Library events (free & paid)
- `event_registrations` - Event sign-ups
- `subscription_plans` - Trial, Basic, Pro plans
- `user_subscriptions` - Active subscriptions
- `notifications` - User notifications
- `loyalty_transactions` - Points history

## 🔐 Authentication & Authorization

### User Roles
1. **Student** - End users accessing library services
2. **Librarian** - Manages assigned library
3. **Super Admin** - Full system control

### Session Management
- Only **1 mobile device** login at a time
- Can be logged in on **laptop + mobile** simultaneously
- Mobile login on new device logs out previous mobile session
- Laptop sessions remain independent

## 🎫 Subscription Plans

| Plan | Duration | Seat Bookings | Price |
|------|----------|---------------|-------|
| Trial | 7 days | 5 bookings | Free |
| Basic | 30 days | 30 bookings | PKR 500 |
| Pro | 180 days | Unlimited | PKR 2,500 |

## 🎯 Seat Booking Flow

1. Student searches for libraries (all/available/nearby)
2. Views interactive seat map (green=available, red=booked, yellow=free soon)
3. Books a seat for specific time slot (7:35 AM - closing time)
4. **Must check-in within 30 minutes** using QR code scan
5. Can check-out early to release seat
6. Auto-released if not checked in on time

## ⭐ Loyalty Points System

Students earn points for:
- ✅ Proper checkout: **+10 points**
- 🎉 Attending events: **+20 points**
- 📖 Returning books on time: **+15 points**

View leaderboard to see top students!

## 🤖 Automation Features

### Auto-Release
- Seats auto-released if not checked in within 30 minutes
- Booking time expires → seat released

### Reminders
- Book return deadline reminders
- Event start time notifications
- Subscription expiry warnings (3 days before)

### Scheduled Tasks
Configure cron job:
```bash
* * * * * cd /path-to-smartlib && php artisan schedule:run >> /dev/null 2>&1
```

## 📱 API Endpoints

### Public Endpoints
```
POST /api/register          - Student registration
POST /api/login             - User login
```

### Student Endpoints (Protected)
```
GET  /api/student/dashboard              - Dashboard stats
GET  /api/student/libraries              - List libraries
POST /api/student/bookings               - Book a seat
POST /api/student/bookings/{id}/checkin  - Check-in with QR
POST /api/student/bookings/{id}/checkout - Check-out
GET  /api/student/books                  - Browse books
POST /api/student/books/{id}/reserve     - Reserve book
GET  /api/student/events                 - List events
POST /api/student/events/{id}/register   - Register for event
```

### Librarian Endpoints (Protected)
```
GET  /api/librarian/dashboard       - Library stats
POST /api/librarian/seats           - Create seat
GET  /api/librarian/seats/qrcode    - Generate QR codes
POST /api/librarian/books           - Add book
POST /api/librarian/events          - Create event
```

### Super Admin Endpoints (Protected)
```
GET  /api/admin/users/pending          - Pending registrations
POST /api/admin/users/{id}/approve     - Approve student
POST /api/admin/libraries              - Create library
POST /api/admin/subscription-plans     - Manage plans
GET  /api/admin/analytics              - Global analytics
```

## 🧪 Testing

Run tests:
```bash
php artisan test
```

## 📊 Analytics & Reports

### Library Dashboard
- Current seat usage
- Most borrowed books
- Event attendance rates
- Peak usage hours

### Admin Dashboard
- System-wide statistics
- Financial reports
- User engagement metrics
- Library performance comparison

## 🔧 Configuration

### Booking Rules
Configure in Super Admin panel:
- Check-in time window (default: 30 minutes)
- Maximum seats per student (default: 1)
- Auto-release timing

### Loyalty Points
Configure point values for different actions in Super Admin panel.

### Payment Gateways
Support for:
- Easypaisa
- JazzCash
- Bank Transfer

## 📦 Deployment

### Production Checklist
- [ ] Set `APP_ENV=production` in `.env`
- [ ] Set `APP_DEBUG=false`
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`
- [ ] Set up cron job for scheduler
- [ ] Configure queue workers
- [ ] Set up SSL certificate
- [ ] Configure backup system
- [ ] Set up monitoring

### Queue Workers
Start queue workers for background jobs:
```bash
php artisan queue:work --tries=3
```

## 🤝 Contributing

This is a proprietary project for ICAP CA. Internal contributions welcome.

## 📝 License

Proprietary - ICAP CA

## 📞 Support

For technical support or questions:
- Review the implementation guide
- Check Laravel documentation
- Contact development team

## 🎉 Credits

Built with Laravel and love for ICAP CA students.

---

**Current Status**: ✅ Database & Core Structure Complete
**Next Steps**: Implement controllers, services, and API endpoints (see SMARTLIB_IMPLEMENTATION_GUIDE.md)
