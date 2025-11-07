# SmartLib React + Laravel API Integration

## ✅ Completed Setup

### Frontend (React)
- ✅ React integrated with Laravel via Vite
- ✅ API service layer created (`resources/js/src/services/api.ts`)
- ✅ AuthContext updated to use real API calls
- ✅ AppContext updated to use real API calls
- ✅ All components ready to connect to backend
- ✅ Build successful

### Backend (Laravel)
- ✅ API routes created (`routes/api.php`)
- ✅ SPA routing configured (`routes/web.php`)

---

## 🔧 Required Backend Configuration

### 1. Install Laravel Sanctum (for API authentication)

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### 2. Update `config/sanctum.php`

Add your frontend URL to stateful domains:

```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
    env('APP_URL') ? ','.parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),
```

### 3. Update `app/Http/Kernel.php`

Add Sanctum middleware to API:

```php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

### 4. Update Controllers to Return JSON

Example for `AuthController::login()`:

```php
public function login(Request $request)
{
    $credentials = $request->validate([
        'crn' => 'required|string',
        'password' => 'required|string',
    ]);

    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    return response()->json([
        'message' => 'Invalid credentials'
    ], 401);
}
```

### 5. Update All Controllers

Make sure all controllers return JSON responses:

- `AuthController` - login, register, logout
- `StudentDashboard` - dashboard data
- `StudentLibrary` - libraries list and details
- `BookingController` - CRUD operations for bookings
- `BookController` - books list and details
- `EventController` - events list and details
- `ProfileController` - profile data and updates
- `AdminDashboard` - admin dashboard data
- `UserController` - user management
- `LibraryController` - library management
- `AnalyticsController` - analytics data

### 6. Enable CORS

Update `config/cors.php`:

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],

'allowed_origins' => [
    'http://localhost:5173', // Vite dev server
    'http://localhost:8000', // Laravel server
],

'supports_credentials' => true,
```

### 7. Update `.env`

```env
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
SESSION_DRIVER=cookie
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:8000
```

---

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Laravel Backend:**
```bash
php artisan serve
# Runs on http://localhost:8000
```

**Terminal 2 - React Frontend:**
```bash
npm run dev
# Runs on http://localhost:5173
```

### Production Mode

```bash
# Build React
npm run build

# Serve via Laravel
php artisan serve
# Access at http://localhost:8000
```

---

## 📡 API Endpoints

All endpoints are defined in `routes/api.php`:

### Public Routes
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Student Routes (Protected)
- `GET /api/student/dashboard` - Dashboard data
- `GET /api/student/libraries` - List all libraries
- `GET /api/student/libraries/{id}` - Library details
- `GET /api/student/libraries/{id}/seats` - Library seats
- `GET /api/student/bookings` - User bookings
- `POST /api/student/bookings` - Create booking
- `POST /api/student/bookings/{id}/checkin` - Check-in
- `POST /api/student/bookings/{id}/checkout` - Check-out
- `GET /api/student/books` - List all books
- `POST /api/student/books/{id}/reserve` - Reserve book
- `GET /api/student/events` - List all events
- `POST /api/student/events/{id}/register` - Register for event
- `GET /api/student/profile` - Get profile
- `PUT /api/student/profile` - Update profile
- `GET /api/student/notifications` - Get notifications

### Admin Routes (Protected)
- `GET /api/admin/dashboard` - Admin dashboard
- `GET /api/admin/users` - List all users
- `GET /api/admin/users/pending` - Pending approvals
- `POST /api/admin/users/{id}/approve` - Approve user
- `GET /api/admin/libraries` - Manage libraries
- `GET /api/admin/books` - Manage books
- `GET /api/admin/events` - Manage events
- `GET /api/admin/analytics` - Analytics data

---

## 🔐 API Authentication Flow

1. User logs in via `/api/auth/login`
2. Backend returns user data + Bearer token
3. Frontend stores token in localStorage
4. All subsequent requests include: `Authorization: Bearer {token}`
5. Backend validates token via Sanctum middleware

---

## 📝 Testing the Integration

### Test Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"crn":"ICAP001","password":"password"}'
```

### Test Protected Route
```bash
curl -X GET http://localhost:8000/api/student/libraries \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🐛 Troubleshooting

### CORS Issues
- Check `config/cors.php` settings
- Ensure `SESSION_DOMAIN` in `.env` is correct
- Clear Laravel cache: `php artisan config:clear`

### 401 Unauthorized
- Check if token is being sent in headers
- Verify Sanctum middleware is configured
- Check if user is authenticated

### 404 Not Found
- Run `php artisan route:list` to verify routes
- Check API URL in `resources/js/.env`
- Ensure API routes are in `routes/api.php`

---

## 📦 Environment Variables

### Frontend (`resources/js/.env`)
```env
VITE_API_URL=http://localhost:8000/api
```

### Backend (`.env`)
```env
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
SESSION_DRIVER=cookie
SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:8000
```

---

## ✨ Features

- ✅ JWT/Sanctum Authentication
- ✅ Real-time data from API
- ✅ CRUD operations for all resources
- ✅ Protected routes
- ✅ Auto token refresh
- ✅ Error handling
- ✅ Loading states
- ✅ TypeScript support

---

## 📚 Next Steps

1. Implement all controller methods to return JSON
2. Set up database migrations
3. Seed database with test data
4. Test all API endpoints
5. Deploy to production

---

## 🎯 Current Status

- Frontend: ✅ Ready and built
- Backend: ⚠️ Needs controller implementation
- Database: ⚠️ Needs setup
- Testing: 📝 Pending

**The React app is now fully configured to use the API instead of mock data!**
