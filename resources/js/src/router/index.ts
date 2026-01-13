import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/shared/components/LandingPage.vue'),
            meta: { public: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/shared/components/Auth/LoginForm.vue'),
            meta: { guestOnly: true }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/shared/components/Auth/RegisterForm.vue'),
            meta: { guestOnly: true }
        },
        {
            path: '/student',
            component: () => import('@/student/StudentApp.vue'),
            meta: { requiresAuth: true, role: 'student' },
            children: [
                {
                    path: 'dashboard',
                    name: 'student-dashboard',
                    component: () => import('@/student/components/Dashboard/Dashboard.vue')
                },
                {
                    path: 'libraries',
                    name: 'student-libraries',
                    component: () => import('@/student/components/Libraries/LibrariesPage.vue')
                },
                {
                    path: 'libraries/:libraryId',
                    name: 'student-library-details',
                    component: () => import('@/student/components/Libraries/LibraryDetailsPage.vue')
                },
                {
                    path: 'libraries/:libraryId/seats',
                    name: 'student-seat-booking',
                    component: () => import('@/student/components/Seats/SeatBookingPage.vue')
                },
                {
                    path: 'books',
                    name: 'student-books',
                    component: () => import('@/student/components/Books/BooksPage.vue')
                },
                {
                    path: 'my-reservations',
                    name: 'student-reservations',
                    component: () => import('@/student/components/Books/MyReservationsPage.vue')
                },
                {
                    path: 'events',
                    name: 'student-events',
                    component: () => import('@/student/components/Events/EventsPage.vue')
                },
                {
                    path: 'profile',
                    name: 'student-profile',
                    component: () => import('@/student/components/Profile/ProfilePage.vue')
                },
                {
                    path: 'qr-checkin',
                    name: 'student-qr-checkin',
                    component: () => import('@/student/components/QR/QRCheckInPage.vue')
                },
                {
                    path: 'loyalty',
                    name: 'student-loyalty',
                    component: () => import('@/student/components/Loyalty/LoyaltyPage.vue')
                },
                {
                    path: 'subscription',
                    name: 'student-subscription',
                    component: () => import('@/student/components/Subscription/SubscriptionPage.vue')
                },
                {
                    path: '',
                    redirect: { name: 'student-dashboard' }
                }
            ]
        },
        {
            path: '/librarian',
            component: () => import('@/librarian/LibrarianApp.vue'),
            meta: { requiresAuth: true, role: 'librarian' },
            children: [
                {
                    path: 'dashboard',
                    name: 'librarian-dashboard',
                    component: () => import('@/librarian/components/Dashboard/Dashboard.vue')
                },
                {
                    path: 'bookings',
                    name: 'librarian-bookings',
                    component: () => import('@/librarian/components/Bookings/BookingsPage.vue')
                },
                {
                    path: 'students',
                    name: 'librarian-students',
                    component: () => import('@/librarian/components/Students/StudentsPage.vue')
                },
                {
                    path: 'seats',
                    name: 'librarian-seats',
                    component: () => import('@/librarian/components/Seats/SeatManagementPage.vue')
                },
                {
                    path: 'floors',
                    name: 'librarian-floors',
                    component: () => import('@/librarian/components/Floors/FloorManagementPage.vue')
                },
                {
                    path: 'sections',
                    name: 'librarian-sections',
                    component: () => import('@/librarian/components/Floors/SectionManagementPage.vue')
                },
                {
                    path: 'library',
                    name: 'librarian-library',
                    component: () => import('@/librarian/components/Library/LibraryInfoPage.vue')
                },
                {
                    path: 'books',
                    name: 'librarian-books',
                    component: () => import('@/librarian/components/Books/BookInventoryPage.vue')
                },
                {
                    path: 'reservations',
                    name: 'librarian-reservations',
                    component: () => import('@/librarian/components/Books/ReservedBooksPage.vue')
                },
                {
                    path: 'analytics',
                    name: 'librarian-analytics',
                    component: () => import('@/librarian/components/Analytics/AnalyticsPage.vue')
                },
                {
                    path: 'events',
                    name: 'librarian-events',
                    component: () => import('@/librarian/components/Events/EventsPage.vue')
                },
                {
                    path: 'attendance',
                    name: 'librarian-attendance',
                    component: () => import('@/librarian/components/Attendance/AttendancePage.vue')
                },
                {
                    path: 'profile',
                    name: 'librarian-profile',
                    component: () => import('@/librarian/components/Profile/ProfilePage.vue')
                },
                {
                    path: '',
                    redirect: { name: 'librarian-dashboard' }
                }
            ]
        },
        {
            path: '/superadmin',
            component: () => import('@/superadmin/SuperAdminApp.vue'),
            meta: { requiresAuth: true, role: 'super_admin' },
            children: [
                {
                    path: 'dashboard',
                    name: 'superadmin-dashboard',
                    component: () => import('@/superadmin/components/Dashboard/Dashboard.vue')
                },
                {
                    path: 'libraries',
                    name: 'superadmin-libraries',
                    component: () => import('@/superadmin/components/Library/LibraryManagementPage.vue')
                },
                {
                    path: 'libraries/:id',
                    name: 'superadmin-library-details',
                    component: () => import('@/superadmin/components/Library/LibraryDetailsPage.vue')
                },
                {
                    path: 'librarians',
                    name: 'superadmin-librarians',
                    component: () => import('@/superadmin/components/Librarians/LibrarianManagementPage.vue')
                },
                {
                    path: 'users',
                    name: 'superadmin-users',
                    component: () => import('@/superadmin/components/Users/UserManagementPage.vue')
                },
                {
                    path: 'subscription-plans',
                    name: 'superadmin-subscription-plans',
                    component: () => import('@/superadmin/components/Subscriptions/SubscriptionPlanManagementPage.vue')
                },
                {
                    path: 'floors',
                    name: 'superadmin-floors',
                    component: () => import('@/superadmin/components/Floors/FloorManagementPage.vue')
                },
                {
                    path: 'sections',
                    name: 'superadmin-sections',
                    component: () => import('@/superadmin/components/Floors/SectionManagementPage.vue')
                },
                {
                    path: 'books',
                    name: 'superadmin-books',
                    component: () => import('@/superadmin/components/Books/BookInventoryPage.vue')
                },
                {
                    path: 'events',
                    name: 'superadmin-events',
                    component: () => import('@/superadmin/components/Events/EventsPage.vue')
                },
                {
                    path: 'bookings',
                    name: 'superadmin-bookings',
                    component: () => import('@/superadmin/components/Bookings/SeatBookingPage.vue')
                },
                {
                    path: 'seats',
                    name: 'superadmin-seats',
                    component: () => import('@/superadmin/components/Seats/SeatManagementPage.vue')
                },
                {
                    path: 'settings',
                    name: 'superadmin-settings',
                    component: () => import('@/superadmin/components/Settings/SystemSettingsPage.vue')
                },
                {
                    path: 'orders',
                    name: 'superadmin-orders',
                    component: () => import('@/superadmin/components/Orders/OrdersPage.vue')
                },
                {
                    path: 'analytics',
                    name: 'superadmin-analytics',
                    component: () => import('@/superadmin/components/Analytics/AnalyticsPage.vue')
                },
                {
                    path: 'profile',
                    name: 'superadmin-profile',
                    component: () => import('@/superadmin/components/Profile/ProfilePage.vue')
                },
                {
                    path: '',
                    redirect: { name: 'superadmin-dashboard' }
                }
            ]
        },
        {
            path: '/home',
            redirect: to => {
                const { user } = useAuth();
                if (!user.value) return '/';
                if (user.value.role === 'super_admin') return '/superadmin';
                if (user.value.role === 'librarian') return '/librarian';
                return '/student';
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { user, isLoading, isPlanExpired } = useAuth();

    if (isLoading.value) {
        // Wait for auth to load
        return next();
    }

    if (to.meta.requiresAuth && !user.value) {
        return next('/login');
    }

    if (to.meta.guestOnly && user.value) {
        const role = user.value.role;
        if (role === 'super_admin') return next('/superadmin');
        if (role === 'librarian') return next('/librarian');
        return next('/student');
    }

    if (to.meta.role && user.value && user.value.role !== to.meta.role) {
        return next('/');
    }

    // Redirect student to subscription page if plan is expired
    if (user.value?.role === 'student' && isPlanExpired.value && to.name !== 'student-subscription') {
        return next({ name: 'student-subscription' });
    }

    next();
});

export default router;
