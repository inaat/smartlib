<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\LibraryController as AdminLibrary;
use App\Http\Controllers\Admin\SeatSectionController;
use App\Http\Controllers\Admin\SubscriptionController as AdminSubscription;
use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Librarian\DashboardController as LibrarianDashboard;
use App\Http\Controllers\Librarian\SeatController;
use App\Http\Controllers\Librarian\BookController as LibrarianBook;
use App\Http\Controllers\Librarian\EventController as LibrarianEvent;
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

// Protected routes
Route::middleware('auth:api')->group(function () {
    // Auth
    Route::post('/auth/logout', [AuthController::class, 'logout'])->name('api.auth.logout');
    Route::get('/auth/user', function (Request $request) {
        return response()->json($request->user());
    })->name('api.auth.user');

    // Student Routes
    Route::prefix('student')->middleware(['role:student'])->name('api.student.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [StudentDashboard::class, 'index'])->name('dashboard');

        // Libraries
        Route::get('/libraries', [StudentLibrary::class, 'index'])->name('libraries.index');
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

        // Books
        Route::get('/books', [StudentBook::class, 'index'])->name('books.index');
        Route::get('/books/{book}', [StudentBook::class, 'show'])->name('books.show');
        Route::post('/books/{book}/reserve', [StudentBook::class, 'reserve'])->name('books.reserve');

        // Events
        Route::get('/events', [StudentEvent::class, 'index'])->name('events.index');
        Route::get('/events/{event}', [StudentEvent::class, 'show'])->name('events.show');
        Route::post('/events/{event}/register', [StudentEvent::class, 'register'])->name('events.register');

        // Profile
        Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
        Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::get('/profile/loyalty-transactions', [ProfileController::class, 'loyaltyTransactions'])->name('profile.loyalty');

        // Notifications
        Route::get('/notifications', [ProfileController::class, 'notifications'])->name('notifications');
        Route::post('/notifications/{notification}/read', [ProfileController::class, 'markNotificationRead'])->name('notifications.read');
    });

    // Admin Routes
    Route::prefix('admin')->middleware(['role:super_admin|admin|librarian'])->name('api.admin.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [AdminDashboard::class, 'index'])->name('dashboard');

        // Users
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::get('/users/pending', [UserController::class, 'pending'])->name('users.pending');
        Route::post('/users/{user}/approve', [UserController::class, 'approve'])->name('users.approve');
        Route::delete('/users/{user}/reject', [UserController::class, 'reject'])->name('users.reject');
        Route::get('/users/students', [UserController::class, 'students'])->name('users.students');
        Route::get('/users/librarians', [UserController::class, 'librarians'])->name('users.librarians');
        Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
        Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

        // Libraries
        Route::get('/libraries', [AdminLibrary::class, 'index'])->name('libraries.index');
        Route::post('/libraries', [AdminLibrary::class, 'store'])->name('libraries.store');
        Route::get('/libraries/{library}', [AdminLibrary::class, 'show'])->name('libraries.show');
        Route::put('/libraries/{library}', [AdminLibrary::class, 'update'])->name('libraries.update');
        Route::delete('/libraries/{library}', [AdminLibrary::class, 'destroy'])->name('libraries.destroy');

        // Seat Sections
        Route::get('/libraries/{library}/sections', [SeatSectionController::class, 'index'])->name('libraries.sections.index');
        Route::post('/libraries/{library}/sections', [SeatSectionController::class, 'store'])->name('libraries.sections.store');
        Route::put('/libraries/{library}/sections/{section}', [SeatSectionController::class, 'update'])->name('libraries.sections.update');
        Route::delete('/libraries/{library}/sections/{section}', [SeatSectionController::class, 'destroy'])->name('libraries.sections.destroy');

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

        // Subscriptions
        Route::get('/subscriptions', [AdminSubscription::class, 'index'])->name('subscriptions.index');
    });

    // Librarian Routes
    Route::prefix('librarian')->middleware(['role:librarian,admin'])->name('api.librarian.')->group(function () {
        // Dashboard
        Route::get('/dashboard', [LibrarianDashboard::class, 'index'])->name('dashboard');

        // Seats
        Route::get('/seats', [SeatController::class, 'index'])->name('seats.index');
        Route::post('/seats', [SeatController::class, 'store'])->name('seats.store');
        Route::get('/seats/{seat}', [SeatController::class, 'show'])->name('seats.show');
        Route::put('/seats/{seat}', [SeatController::class, 'update'])->name('seats.update');
        Route::delete('/seats/{seat}', [SeatController::class, 'destroy'])->name('seats.destroy');
        Route::get('/seats/qr-codes', [SeatController::class, 'generateQRCodes'])->name('seats.qrcodes');

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
    });
});
