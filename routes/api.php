<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\LibraryController as AdminLibrary;
use App\Http\Controllers\Admin\SeatSectionController;
use App\Http\Controllers\Admin\SubscriptionController as AdminSubscription;
use App\Http\Controllers\Admin\SubscriptionPlanController;
use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Librarian\DashboardController as LibrarianDashboard;
use App\Http\Controllers\Librarian\SeatController;
use App\Http\Controllers\Librarian\BookController as LibrarianBook;
use App\Http\Controllers\Librarian\EventController as LibrarianEvent;

use App\Http\Controllers\Librarian\AnalyticsController as LibrarianAnalytics;
use App\Http\Controllers\Librarian\FloorController;
use App\Http\Controllers\Librarian\StudentController;
use App\Http\Controllers\Librarian\LibraryController as LibrarianLibrary;
use App\Http\Controllers\Librarian\BookingController as LibrarianBooking;
use App\Http\Controllers\Librarian\SeatSectionController as LibrarianSection;
use App\Http\Controllers\Student\DashboardController as StudentDashboard;
use App\Http\Controllers\Student\LibraryController as StudentLibrary;
use App\Http\Controllers\Student\BookingController;
use App\Http\Controllers\Student\BookController as StudentBook;
use App\Http\Controllers\Student\EventController as StudentEvent;
use App\Http\Controllers\Student\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/auth/login', [AuthController::class, 'login'])->name('api.auth.login');
Route::post('/auth/register', [AuthController::class, 'register'])->name('api.auth.register');
Route::post('/auth/send-otp', [AuthController::class, 'sendOTP'])->name('api.auth.send-otp');
Route::post('/auth/check-uniqueness', [AuthController::class, 'checkUniqueness'])->name('api.auth.check-uniqueness');
Route::get('/settings/public', [\App\Http\Controllers\Admin\SystemSettingController::class, 'publicSettings'])->name('api.settings.public');
Route::get('/subscription-plans/public', [\App\Http\Controllers\Admin\SubscriptionPlanController::class, 'publicIndex'])->name('api.subscription-plans.public');

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::get('/auth/me', [AuthController::class, 'me'])->name('api.auth.me');
    Route::post('/auth/logout', [AuthController::class, 'logout'])->name('api.auth.logout');
    Route::post('/auth/logout-all', [AuthController::class, 'logoutAll'])->name('api.auth.logout-all');
    Route::get('/auth/sessions', [AuthController::class, 'sessions'])->name('api.auth.sessions');
    Route::delete('/auth/sessions/{id}', [AuthController::class, 'revokeSession'])->name('api.auth.sessions.revoke');
    Route::get('/auth/user', function (Request $request) {
        return response()->json($request->user());
    })->name('api.auth.user');

    // Student Routes
    Route::prefix('student')->middleware(['role:student'])->name('api.student.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [StudentDashboard::class, 'index'])->name('dashboard');

        // Libraries
        Route::get('/libraries', [StudentLibrary::class, 'index'])->name('libraries.index');
        Route::get('/libraries/nearby', [StudentLibrary::class, 'nearby'])->name('libraries.nearby');
        Route::get('/libraries/{library}', [StudentLibrary::class, 'show'])->name('libraries.show');

        // Seats
        Route::get('/libraries/{library}/seats', [StudentLibrary::class, 'seats'])->name('libraries.seats');

        // Bookings
        Route::get('/bookings', [BookingController::class, 'index'])->name('bookings.index');
        Route::post('/bookings', [BookingController::class, 'store'])->name('bookings.store');
        Route::get('/bookings/{booking}', [BookingController::class, 'show'])->name('bookings.show');
        Route::put('/bookings/{booking}', [BookingController::class, 'update'])->name('bookings.update');
        Route::delete('/bookings/{booking}', [BookingController::class, 'destroy'])->name('bookings.destroy');
        Route::post('/bookings/{booking}/checkin', [BookingController::class, 'checkIn'])->name('bookings.checkin');
        Route::post('/bookings/{booking}/checkout', [BookingController::class, 'checkOut'])->name('bookings.checkout');
        Route::post('/bookings/{booking}/extend', [BookingController::class, 'extend'])->name('bookings.extend');
        Route::post('/bookings/join-queue', [BookingController::class, 'joinQueue'])->name('bookings.join-queue');
        Route::post('/bookings/override-requests', [BookingController::class, 'requestOverride'])->name('bookings.override-requests.store');
        Route::get('/my-queue', [BookingController::class, 'myQueue'])->name('bookings.my-queue');
        Route::delete('/my-queue/{id}', [BookingController::class, 'leaveQueue'])->name('bookings.leave-queue');
        Route::post('/bookings/{booking}/cancel', [BookingController::class, 'cancel'])->name('bookings.cancel');

        // Books
        Route::get('/books', [StudentBook::class, 'index'])->name('books.index');
        
        // Book Reservations (must come before /books/{book} to avoid route conflict)
        Route::get('/books/reservations', [StudentBook::class, 'getMyReservations'])->name('books.reservations');
        Route::post('/books/reservations/{id}/pick-up', [StudentBook::class, 'pickUpBook'])->name('books.reservations.pickup');
        Route::post('/books/reservations/{id}/return', [StudentBook::class, 'returnBook'])->name('books.reservations.return');
        
        // Book details and actions
        Route::get('/books/{book}', [StudentBook::class, 'show'])->name('books.show');
        Route::post('/books/{book}/reserve', [StudentBook::class, 'reserve'])->name('books.reserve');

        // Events
        Route::get('/events', [StudentEvent::class, 'index'])->name('events.index');
        Route::get('/events/{event}', [StudentEvent::class, 'show'])->name('events.show');
        Route::post('/events/{event}/register', [StudentEvent::class, 'register'])->name('events.register');

        // Loyalty
        Route::get('/profile/loyalty-transactions', [ProfileController::class, 'loyaltyTransactions'])->name('profile.loyalty');

        // Subscriptions
        Route::get('/subscription-plans', [\App\Http\Controllers\Student\SubscriptionController::class, 'index'])->name('subscription-plans.index');
        Route::post('/subscriptions', [\App\Http\Controllers\Student\SubscriptionController::class, 'store'])->name('subscriptions.store');
        Route::post('/subscriptions/{subscription}/cancel', [\App\Http\Controllers\Student\SubscriptionController::class, 'cancel'])->name('subscriptions.cancel');

        // Analytics
        Route::get('/analytics', [\App\Http\Controllers\Student\AnalyticsController::class, 'index'])->name('analytics');

        // Support Tickets
        Route::get('/support-tickets', [\App\Http\Controllers\SupportTicketController::class, 'index'])->name('support-tickets.index');
        Route::post('/support-tickets', [\App\Http\Controllers\SupportTicketController::class, 'store'])->name('support-tickets.store');
        Route::get('/support-tickets/{supportTicket}', [\App\Http\Controllers\SupportTicketController::class, 'show'])->name('support-tickets.show');
        Route::post('/support-tickets/{supportTicket}/messages', [\App\Http\Controllers\SupportTicketController::class, 'sendMessage'])->name('support-tickets.messages.store');
        Route::put('/support-tickets/{supportTicket}/status', [\App\Http\Controllers\SupportTicketController::class, 'updateStatus'])->name('support-tickets.status');
 
        // Attendance
        Route::get('/attendance', [\App\Http\Controllers\Student\AttendanceController::class, 'index'])->name('attendance.index');
        Route::get('/attendance/stats', [\App\Http\Controllers\Student\AttendanceController::class, 'stats'])->name('attendance.stats');
        Route::get('/attendance/calendar', [\App\Http\Controllers\Student\AttendanceController::class, 'calendar'])->name('attendance.calendar');

        // Reviews
        Route::get('/libraries/{library}/reviews', [\App\Http\Controllers\Student\ReviewController::class, 'index'])->name('libraries.reviews.index');
        Route::post('/libraries/{library}/reviews', [\App\Http\Controllers\Student\ReviewController::class, 'store'])->name('libraries.reviews.store');
        Route::delete('/reviews/{review}', [\App\Http\Controllers\Student\ReviewController::class, 'destroy'])->name('reviews.destroy');
    });

    // Common Profile & Notification Routes (Accessible by all authenticated users)
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update.post');
    Route::get('/notifications', [ProfileController::class, 'notifications'])->name('notifications');
    Route::post('/notifications/read-all', [ProfileController::class, 'markAllNotificationsRead'])->name('notifications.read-all');
    Route::post('/notifications/clear-all', [ProfileController::class, 'clearAllNotifications'])->name('notifications.clear-all');
    Route::post('/notifications/{notification}/read', [ProfileController::class, 'markNotificationRead'])->name('notifications.read');
    Route::delete('/notifications/{notification}', [ProfileController::class, 'destroyNotification'])->name('notifications.destroy');

    // Admin Routes
    Route::prefix('admin')->middleware(['role:super_admin|admin|librarian'])->name('api.admin.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [AdminDashboard::class, 'index'])->name('dashboard');
        Route::get('/dashboard/stats', [AdminDashboard::class, 'stats'])->name('dashboard.stats');

        // Users
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::post('/users', [UserController::class, 'store'])->name('users.store');
        Route::get('/users/pending', [UserController::class, 'pending'])->name('users.pending');
        Route::post('/users/{user}/approve', [UserController::class, 'approve'])->name('users.approve');
        Route::delete('/users/{user}/reject', [UserController::class, 'reject'])->name('users.reject');
        Route::get('/users/students', [UserController::class, 'students'])->name('users.students');
        Route::get('/users/librarians', [UserController::class, 'librarians'])->name('users.librarians');
        Route::post('/users/{user}/ban', [UserController::class, 'ban'])->name('users.ban');
        Route::post('/users/{user}/unban', [UserController::class, 'unban'])->name('users.unban');
        Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
        Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

        // Libraries
        Route::get('/libraries', [AdminLibrary::class, 'index'])->name('libraries.index');
        Route::post('/libraries', [AdminLibrary::class, 'store'])->name('libraries.store');
        Route::get('/libraries/{library}', [AdminLibrary::class, 'show'])->name('libraries.show');
        Route::put('/libraries/{library}', [AdminLibrary::class, 'update'])->name('libraries.update');
        Route::post('/libraries/{library}', [AdminLibrary::class, 'update'])->name('libraries.update.post'); // For FormData with method spoofing
        Route::delete('/libraries/{library}', [AdminLibrary::class, 'destroy'])->name('libraries.destroy');

        // Floors
        Route::get('/libraries/{library}/floors', [FloorController::class, 'index'])->name('libraries.floors.index');
        Route::post('/libraries/{library}/floors', [FloorController::class, 'store'])->name('libraries.floors.store');
        Route::get('/libraries/{library}/floors/{floor}', [FloorController::class, 'show'])->name('libraries.floors.show');
        Route::put('/libraries/{library}/floors/{floor}', [FloorController::class, 'update'])->name('libraries.floors.update');
        Route::post('/libraries/{library}/floors/{floor}', [FloorController::class, 'update'])->name('libraries.floors.update.post');
        Route::delete('/libraries/{library}/floors/{floor}', [FloorController::class, 'destroy'])->name('libraries.floors.destroy');

        // Seat Sections
        Route::get('/libraries/{library}/sections', [SeatSectionController::class, 'index'])->name('libraries.sections.index');
        Route::post('/libraries/{library}/sections', [SeatSectionController::class, 'store'])->name('libraries.sections.store');
        Route::put('/libraries/{library}/sections/{section}', [SeatSectionController::class, 'update'])->name('libraries.sections.update');
        Route::delete('/libraries/{library}/sections/{section}', [SeatSectionController::class, 'destroy'])->name('libraries.sections.destroy');

        // Seats
        Route::get('/seats', [SeatController::class, 'index'])->name('seats.index');
        Route::post('/seats', [SeatController::class, 'store'])->name('seats.store');
        Route::get('/seats/{seat}', [SeatController::class, 'show'])->name('seats.show');
        Route::put('/seats/{seat}', [SeatController::class, 'update'])->name('seats.update');
        Route::delete('/seats/{seat}', [SeatController::class, 'destroy'])->name('seats.destroy');
        Route::post('/seats/bulk-update', [SeatController::class, 'bulkUpdate'])->name('seats.bulk-update');

        // Books
        Route::get('/books', [LibrarianBook::class, 'index'])->name('books.index');
        Route::post('/books', [LibrarianBook::class, 'store'])->name('books.store');
        Route::get('/books/{book}', [LibrarianBook::class, 'show'])->name('books.show');
        Route::put('/books/{book}', [LibrarianBook::class, 'update'])->name('books.update');
        Route::delete('/books/{book}', [LibrarianBook::class, 'destroy'])->name('books.destroy');

        // Events
        Route::get('/events', [LibrarianEvent::class, 'index'])->name('events.index');
        Route::post('/events', [LibrarianEvent::class, 'store'])->name('events.store');
        Route::get('/events/{event}', [LibrarianEvent::class, 'show'])->name('events.show');
        Route::put('/events/{event}', [LibrarianEvent::class, 'update'])->name('events.update');
        Route::delete('/events/{event}', [LibrarianEvent::class, 'destroy'])->name('events.destroy');

        // Analytics
        Route::get('/analytics', [AnalyticsController::class, 'index'])->name('analytics');
        Route::get('/analytics/reports', [AnalyticsController::class, 'reports'])->name('analytics.reports');

        // Subscription Plans (MOVED TO OWNER)
        // Route::get('/subscription-plans', [SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
        // Route::post('/subscription-plans', [SubscriptionPlanController::class, 'store'])->name('subscription-plans.store');
        // Route::get('/subscription-plans/{plan}', [SubscriptionPlanController::class, 'show'])->name('subscription-plans.show');
        // Route::put('/subscription-plans/{plan}', [SubscriptionPlanController::class, 'update'])->name('subscription-plans.update');
        // Route::delete('/subscription-plans/{plan}', [SubscriptionPlanController::class, 'destroy'])->name('subscription-plans.destroy');

        // Subscriptions
        Route::get('/subscriptions', [AdminSubscription::class, 'index'])->name('subscriptions.index');

        // Orders (MOVED TO OWNER)
        // Route::get('/orders', [\App\Http\Controllers\Admin\OrderController::class, 'index'])->name('orders.index');
        // Route::post('/orders/{id}/approve', [\App\Http\Controllers\Admin\OrderController::class, 'approve'])->name('orders.approve');
        // Route::post('/orders/{id}/reject', [\App\Http\Controllers\Admin\OrderController::class, 'reject'])->name('orders.reject');
        // Route::get('/user-subscriptions', [\App\Http\Controllers\Admin\OrderController::class, 'subscriptions'])->name('user-subscriptions.index');

        // System Settings
        Route::get('/settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'index'])->name('settings.index');
        Route::put('/settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'update'])->name('settings.update');
        Route::post('/settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'store'])->name('settings.store');

        // Support Tickets
        Route::get('/support-tickets', [\App\Http\Controllers\SupportTicketController::class, 'index'])->name('support-tickets.index');
        Route::get('/support-tickets/{supportTicket}', [\App\Http\Controllers\SupportTicketController::class, 'show'])->name('support-tickets.show');
        Route::post('/support-tickets/{supportTicket}/messages', [\App\Http\Controllers\SupportTicketController::class, 'sendMessage'])->name('support-tickets.messages.store');
        Route::put('/support-tickets/{supportTicket}/status', [\App\Http\Controllers\SupportTicketController::class, 'updateStatus'])->name('support-tickets.status');
    });

    // Owner Routes
    Route::prefix('owner')->middleware(['role:owner'])->name('api.owner.')->group(function () {
        // SuperAdmins
        Route::get('/superadmins', [\App\Http\Controllers\Owner\SuperAdminController::class, 'index'])->name('superadmins.index');
        Route::post('/superadmins', [\App\Http\Controllers\Owner\SuperAdminController::class, 'store'])->name('superadmins.store');
        Route::put('/superadmins/{id}', [\App\Http\Controllers\Owner\SuperAdminController::class, 'update'])->name('superadmins.update');
        Route::delete('/superadmins/{id}', [\App\Http\Controllers\Owner\SuperAdminController::class, 'destroy'])->name('superadmins.destroy');

        // Analytics
        Route::get('/analytics', [\App\Http\Controllers\Owner\AnalyticsController::class, 'index'])->name('analytics');

        // Subscription Plans
        Route::get('/subscription-plans', [\App\Http\Controllers\Owner\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
        Route::post('/subscription-plans', [\App\Http\Controllers\Owner\SubscriptionPlanController::class, 'store'])->name('subscription-plans.store');
        Route::get('/subscription-plans/{plan}', [\App\Http\Controllers\Owner\SubscriptionPlanController::class, 'show'])->name('subscription-plans.show');
        Route::put('/subscription-plans/{plan}', [\App\Http\Controllers\Owner\SubscriptionPlanController::class, 'update'])->name('subscription-plans.update');
        Route::delete('/subscription-plans/{plan}', [\App\Http\Controllers\Owner\SubscriptionPlanController::class, 'destroy'])->name('subscription-plans.destroy');

        // Orders & Subscriptions
        Route::get('/orders', [\App\Http\Controllers\Owner\OrderController::class, 'index'])->name('orders.index');
        Route::post('/orders/{id}/approve', [\App\Http\Controllers\Owner\OrderController::class, 'approve'])->name('orders.approve');
        Route::post('/orders/{id}/reject', [\App\Http\Controllers\Owner\OrderController::class, 'reject'])->name('orders.reject');
        Route::get('/user-subscriptions', [\App\Http\Controllers\Owner\OrderController::class, 'subscriptions'])->name('user-subscriptions.index');

        // App Settings
        Route::get('/settings', [\App\Http\Controllers\Owner\SettingController::class, 'index'])->name('settings.index');
        Route::post('/settings', [\App\Http\Controllers\Owner\SettingController::class, 'update'])->name('settings.update');
    });

    // Librarian Routes
    Route::prefix('librarian')->middleware(['role:librarian|admin|super_admin'])->name('api.librarian.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [LibrarianDashboard::class, 'index'])->name('dashboard');



        // Floors
        Route::get('/floors', [FloorController::class, 'index'])->name('floors.index');
        Route::post('/floors', [FloorController::class, 'store'])->name('floors.store');
        Route::get('/floors/{floor}', [FloorController::class, 'show'])->name('floors.show');
        Route::put('/floors/{floor}', [FloorController::class, 'update'])->name('floors.update');
        Route::post('/floors/{floor}', [FloorController::class, 'update'])->name('floors.update.post');
        Route::delete('/floors/{floor}', [FloorController::class, 'destroy'])->name('floors.destroy');

        // Seat Sections
        Route::get('/sections', [LibrarianSection::class, 'index'])->name('sections.index');
        Route::post('/sections', [LibrarianSection::class, 'store'])->name('sections.store');
        Route::put('/sections/{section}', [LibrarianSection::class, 'update'])->name('sections.update');
        Route::delete('/sections/{section}', [LibrarianSection::class, 'destroy'])->name('sections.destroy');

        // Seats
        Route::get('/active-floors', [SeatController::class, 'activeFloors'])->name('floors.active');
        Route::get('/active-sections', [SeatController::class, 'activeSections'])->name('sections.active');
        Route::get('/seats', [SeatController::class, 'index'])->name('seats.index');
        Route::post('/seats', [SeatController::class, 'store'])->name('seats.store');
        Route::get('/seats/{seat}', [SeatController::class, 'show'])->name('seats.show');
        Route::put('/seats/{seat}', [SeatController::class, 'update'])->name('seats.update');
        Route::delete('/seats/{seat}', [SeatController::class, 'destroy'])->name('seats.destroy');
        Route::post('/seats/bulk-update', [SeatController::class, 'bulkUpdate'])->name('seats.bulk-update');
        Route::get('/seats/qr-codes', [SeatController::class, 'generateQRCodes'])->name('seats.qrcodes');

        // Study Tables
        Route::get('/study-tables', [\App\Http\Controllers\Librarian\StudyTableController::class, 'index'])->name('study-tables.index');
        Route::post('/study-tables', [\App\Http\Controllers\Librarian\StudyTableController::class, 'store'])->name('study-tables.store');
        Route::put('/study-tables/{table}', [\App\Http\Controllers\Librarian\StudyTableController::class, 'update'])->name('study-tables.update');
        Route::delete('/study-tables/{table}', [\App\Http\Controllers\Librarian\StudyTableController::class, 'destroy'])->name('study-tables.destroy');

        // Books
        Route::get('/books', [LibrarianBook::class, 'index'])->name('books.index');
        Route::post('/books', [LibrarianBook::class, 'store'])->name('books.store');
        
        // Book Reservations (must come before /books/{book} to avoid route conflict)
        Route::get('/books/reservations', [\App\Http\Controllers\Librarian\BookReservationController::class, 'index'])->name('books.reservations');
        Route::post('/books/reservations/{id}/approve-return', [\App\Http\Controllers\Librarian\BookReservationController::class, 'approveReturn'])->name('books.reservations.approve-return');
        Route::post('/books/reservations/{id}/approve', [\App\Http\Controllers\Librarian\BookReservationController::class, 'approveReservation'])->name('books.reservations.approve');
        Route::post('/books/reservations/{id}/reject', [\App\Http\Controllers\Librarian\BookReservationController::class, 'rejectReservation'])->name('books.reservations.reject');
        
        // Book details and actions
        Route::get('/books/{book}', [LibrarianBook::class, 'show'])->name('books.show');
        Route::put('/books/{book}', [LibrarianBook::class, 'update'])->name('books.update');
        Route::delete('/books/{book}', [LibrarianBook::class, 'destroy'])->name('books.destroy');

        // Events
        Route::get('/events', [LibrarianEvent::class, 'index'])->name('events.index');
        Route::post('/events', [LibrarianEvent::class, 'store'])->name('events.store');
        Route::get('/events/{event}', [LibrarianEvent::class, 'show'])->name('events.show');
        Route::put('/events/{event}', [LibrarianEvent::class, 'update'])->name('events.update');
        Route::delete('/events/{event}', [LibrarianEvent::class, 'destroy'])->name('events.destroy');

        // Analytics
        Route::get('/analytics', [LibrarianAnalytics::class, 'index'])->name('analytics');

        // Students
        Route::get('/students', [StudentController::class, 'index'])->name('students.index');
        Route::get('/students/stats', [StudentController::class, 'stats'])->name('students.stats');
        Route::get('/students/{id}', [StudentController::class, 'show'])->name('students.show');

        Route::post('/students', [StudentController::class, 'store'])->name('students.store');
        Route::post('/students/{id}/ban', [StudentController::class, 'ban'])->name('students.ban');
        Route::post('/students/{id}/unban', [StudentController::class, 'unban'])->name('students.unban');
        Route::put('/students/{id}', [StudentController::class, 'update'])->name('students.update');
        Route::delete('/students/{id}', [StudentController::class, 'destroy'])->name('students.destroy');

        // Library Info
        Route::get('/library', [LibrarianLibrary::class, 'show'])->name('library.show');
        Route::put('/library', [LibrarianLibrary::class, 'update'])->name('library.update');

        // Bookings
        Route::get('/bookings', [LibrarianBooking::class, 'index'])->name('bookings.index');
        Route::get('/bookings/stats', [LibrarianBooking::class, 'stats'])->name('bookings.stats');
        Route::post('/bookings/{id}/check-in', [LibrarianBooking::class, 'checkIn'])->name('bookings.checkin');
        Route::post('/bookings/{id}/check-out', [LibrarianBooking::class, 'checkOut'])->name('bookings.checkout');
        Route::post('/bookings/{id}/cancel', [LibrarianBooking::class, 'cancel'])->name('bookings.cancel');
        Route::get('/override-requests', [LibrarianBooking::class, 'getOverrideRequests'])->name('override-requests.index');
        Route::post('/override-requests/{id}/approve', [LibrarianBooking::class, 'approveOverrideRequest'])->name('override-requests.approve');
        Route::post('/override-requests/{id}/reject', [LibrarianBooking::class, 'rejectOverrideRequest'])->name('override-requests.reject');

        // Attendance
        Route::get('/attendance', [\App\Http\Controllers\Librarian\AttendanceController::class, 'index'])->name('attendance.index');
        Route::get('/attendance/stats', [\App\Http\Controllers\Librarian\AttendanceController::class, 'stats'])->name('attendance.stats');
        Route::get('/attendance/calendar', [\App\Http\Controllers\Librarian\AttendanceController::class, 'calendar'])->name('attendance.calendar');
        Route::post('/attendance/mark', [\App\Http\Controllers\Librarian\AttendanceController::class, 'markAttendance'])->name('attendance.mark');

        // Support Tickets
        Route::get('/support-tickets', [\App\Http\Controllers\SupportTicketController::class, 'index'])->name('support-tickets.index');
        Route::get('/support-tickets/{supportTicket}', [\App\Http\Controllers\SupportTicketController::class, 'show'])->name('support-tickets.show');
        Route::post('/support-tickets/{supportTicket}/messages', [\App\Http\Controllers\SupportTicketController::class, 'sendMessage'])->name('support-tickets.messages.store');
        Route::put('/support-tickets/{supportTicket}/status', [\App\Http\Controllers\SupportTicketController::class, 'updateStatus'])->name('support-tickets.status');
    });
});
