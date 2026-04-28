import { ref, computed, onMounted } from 'vue';
import { authAPI, studentAPI } from '@/shared/services/api';

interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;
    crn?: string;
    role: 'owner' | 'super_admin' | 'librarian' | 'student';
    ca_level?: 'PRC' | 'CAF' | 'Final';
    is_active: boolean;
    trial_used: boolean;
    trial_started_at?: string;
    trial_ends_at?: string;
    isApproved: boolean;
    user_type: string;
    library_id?: number;
    active_subscription?: any;
    loyalty_points?: number;
    loyalty_transactions?: any[];
    profile_picture?: string;
}

interface Notification {
    id: string;
    type: string;
    title: string;
    message: string;
    is_read: boolean;
    created_at: string;
}

const user = ref<User | null>(null);
const isLoading = ref(true);
const notifications = ref<Notification[]>([]);
const settings = ref<Record<string, any>>({});

export function useAuth() {
    const loadNotifications = async (userData?: User) => {
        try {
            const userRole = userData?.role || userData?.user_type;
            if (userRole === 'student') {
                const notifs = await studentAPI.getNotifications();
                notifications.value = notifs;
            } else {
                notifications.value = [];
            }
        } catch (error) {
            console.error('Failed to load notifications:', error);
            notifications.value = [];
        }
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            try {
                const userData = await authAPI.getCurrentUser();
                user.value = userData;
                localStorage.setItem('smart-lib-user', JSON.stringify(userData));
                await loadNotifications(userData);
            } catch (error) {
                console.error('Failed to load user:', error);
                localStorage.removeItem('auth_token');
                localStorage.removeItem('smart-lib-user');
            }
        }
        isLoading.value = false;
    };

    const login = async (email: string, password: string, remember: boolean = false) => {
        isLoading.value = true;
        try {
            const response = await authAPI.login(email, password, remember);
            user.value = response.user;
            localStorage.setItem('smart-lib-user', JSON.stringify(response.user));
            await loadNotifications(response.user);
        } catch (error: any) {
            console.error('Login failed:', error);
            throw error;
        } finally {
            isLoading.value = false;
        }
    };

    const register = async (userData: any) => {
        isLoading.value = true;
        try {
            const response = await authAPI.register(userData);
            user.value = response.user;
            localStorage.setItem('smart-lib-user', JSON.stringify(response.user));
            await loadNotifications(response.user);
        } catch (error: any) {
            if (error.response?.status !== 422) {
                console.error('Registration failed:', error);
            }
            throw error;
        } finally {
            isLoading.value = false;
        }
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            user.value = null;
            notifications.value = [];
            localStorage.removeItem('smart-lib-user');
            localStorage.removeItem('auth_token');
            window.location.href = '/login';
        }
    };

    const updateUser = async (userData: Partial<User>) => {
        if (user.value) {
            try {
                const updatedUser = await studentAPI.updateProfile(userData);
                user.value = updatedUser;
                localStorage.setItem('smart-lib-user', JSON.stringify(updatedUser));
            } catch (error) {
                console.error('Failed to update user:', error);
            }
        }
    };

    const markNotificationAsRead = async (notificationId: string | number) => {
        try {
            const idAsString = notificationId.toString();
            await studentAPI.markNotificationRead(idAsString);
            notifications.value = notifications.value.map(notif =>
                notif.id.toString() === idAsString ? { ...notif, is_read: true } : notif
            );
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

    const unreadCount = computed(() => notifications.value.filter(n => !n.is_read).length);

    const fetchSettings = async () => {
        try {
            const data = await authAPI.getPublicSettings();
            settings.value = data;
            // Apply primary color to CSS variable if it exists
            if (data.primary_color) {
                document.documentElement.style.setProperty('--primary-color', data.primary_color);
            }
        } catch (error) {
            console.error('Failed to fetch settings:', error);
        }
    };

    const isTrialActive = computed(() => {
        if (!user.value || user.value.role !== 'student') return false;
        if (!user.value.trial_ends_at) return false;

        // Ensure date string is in ISO format for better cross-browser parsing
        const dateStr = user.value.trial_ends_at.replace(' ', 'T');
        const trialDate = new Date(dateStr);
        const now = new Date();

        const isActive = trialDate > now;
        console.log('Trial status check:', {
            trial_ends_at: user.value.trial_ends_at,
            isActive
        });

        return isActive;
    });

    const isPlanExpired = computed(() => {
        if (!user.value || user.value.role !== 'student') return false;

        const now = new Date();

        // 1. Check active subscription if it exists
        if (user.value.active_subscription) {
            const expiryDate = new Date(user.value.active_subscription.expires_at.replace(' ', 'T'));
            if (expiryDate > now) {
                return false; // Subscription is still valid
            }
            console.log('Subscription expired:', { expiryDate: expiryDate.toISOString(), now: now.toISOString() });
        }

        // 2. If no valid subscription, check trial status
        const trialActive = isTrialActive.value;
        if (trialActive) return false;

        console.log('Plan marked as expired for student:', user.value.name, {
            hasSubscription: !!user.value.active_subscription,
            trialActive,
            trial_ends_at: user.value.trial_ends_at
        });
        return true;
    });

    const checkUniqueness = async (field: 'email' | 'crn', value: string) => {
        try {
            return await authAPI.checkUniqueness(field, value);
        } catch (error) {
            console.error(`Failed to check uniqueness for ${field}:`, error);
            return { exists: false };
        }
    };

    return {
        user,
        isLoading,
        notifications,
        unreadCount,
        settings,
        login,
        register,
        logout,
        updateUser,
        markNotificationAsRead,
        checkAuth,
        fetchSettings,
        checkUniqueness,
        isPlanExpired,
        isTrialActive
    };
}
