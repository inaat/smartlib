<template>
  <div v-if="isPlanExpired" class="bg-red-600 text-white px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left animate-pulse z-50 relative">
    <div class="flex items-center space-x-2">
      <AlertTriangle class="w-4 h-4 flex-shrink-0" />
      <span class="text-xs font-semibold">Your subscription has expired. Please renew to continue using all features.</span>
    </div>
    <router-link to="/student/subscription" class="text-xs font-bold underline hover:text-red-100 whitespace-nowrap">
      Renew Now
    </router-link>
  </div>
  
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 transition-all duration-300 font-outfit">
    <div class="flex items-center justify-between">
      <!-- Left Side -->
      <div class="flex items-center space-x-4">
        <button
          @click="$emit('menu-click')"
          class="p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 lg:hidden border border-slate-100 transition-colors"
        >
          <Menu class="w-5 h-5" />
        </button>
        
        <div class="hidden lg:block text-left">
          <h1 class="text-xl font-bold text-slate-800 tracking-tight leading-none">
            {{ pageTitle }}
          </h1>
          <p class="text-xs font-medium text-slate-400 mt-1.5 leading-none">{{ pageSubtitle }}</p>
        </div>
      </div>

      <!-- Right Side -->
      <div class="flex items-center space-x-3.5">
        <!-- Notifications -->
        <div class="relative" ref="notificationsRef">
          <button
            @click="showNotifications = !showNotifications; showUserMenu = false"
            class="p-2.5 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 active:bg-blue-50 relative transition-all duration-200 border border-slate-100/40"
            title="Notifications"
          >
            <Bell class="w-5 h-5" />
            <span 
              v-if="unreadCount > 0"
              class="absolute top-2 right-2 w-4.5 h-4.5 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-semibold animate-pulse"
            >
              {{ unreadCount > 9 ? '9+' : unreadCount }}
            </span>
          </button>
        </div>

        <!-- Teleported Notifications Dropdown (Compact & Viewport Aligned) -->
        <Teleport to="body">
          <div 
            v-if="showNotifications" 
            ref="notificationsDropdownRef"
            class="fixed top-16 right-3 sm:right-6 w-72 sm:w-80 max-w-[calc(100vw-24px)] z-[9999] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden font-outfit max-h-[380px] flex flex-col animate-fade-in"
          >
            <!-- Header -->
            <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/30 flex-shrink-0">
              <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Notifications</h3>
              <span class="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full" v-if="unreadCount > 0">
                {{ unreadCount }} New
              </span>
            </div>
            
            <!-- List Container -->
            <div class="flex-1 overflow-y-auto min-h-0">
              <div v-if="notifications.length === 0" class="p-6 text-center">
                <Bell class="w-8 h-8 text-slate-200 mx-auto mb-2" />
                <p class="text-xs font-medium text-slate-400">No new notifications</p>
              </div>
              <div v-else class="divide-y divide-slate-50">
                <div 
                  v-for="notification in notifications" 
                  :key="notification.id"
                  class="p-3.5 hover:bg-slate-50 transition-colors cursor-pointer relative text-left"
                  :class="{ 'bg-blue-50/20': !notification.is_read }"
                  @click="markNotificationAsRead(notification.id)"
                >
                  <div class="flex items-start space-x-2.5">
                    <div class="p-1.5 rounded-lg flex-shrink-0 mt-0.5" :class="getNotificationIconClass(notification.type)">
                      <component :is="getNotificationIcon(notification.type)" class="w-3.5 h-3.5" />
                    </div>
                    <div class="flex-1 min-w-0 text-left">
                      <div class="flex items-center justify-between mb-0.5 gap-1">
                        <span class="text-xs font-bold text-slate-800 truncate" :class="{ 'text-blue-900': !notification.is_read }">{{ notification.title }}</span>
                        <span class="text-[9px] text-slate-400 font-semibold flex-shrink-0 whitespace-nowrap">{{ formatDate(notification.created_at) }}</span>
                      </div>
                      <p class="text-[11px] text-slate-500 font-medium leading-normal break-words line-clamp-2">{{ notification.message }}</p>
                    </div>
                  </div>
                  <div v-if="!notification.is_read" class="absolute right-2.5 top-3 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <!-- Footer (Always Visible) -->
            <div class="p-2.5 border-t border-slate-100 text-center bg-slate-50/50 flex-shrink-0">
              <button 
                @click="router.push('/student/notifications'); showNotifications = false"
                class="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer w-full flex items-center justify-center space-x-1"
              >
                <span>View All Notifications</span>
              </button>
            </div>
          </div>
        </Teleport>

        <!-- User Menu -->
        <div class="relative" ref="userMenuRef">
          <button
            @click="showUserMenu = !showUserMenu; showNotifications = false"
            class="flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 border border-slate-100/50"
          >
            <div class="w-8 h-8 bg-blue-600/10 text-blue-600 font-bold flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-blue-500/10">
              <img 
                v-if="user?.profile_picture" 
                :src="getProfilePictureUrl(user.profile_picture)" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
              <span v-else class="text-xs">{{ userInitials }}</span>
            </div>
            <div class="hidden sm:block text-left">
              <div class="text-xs font-semibold text-slate-800 leading-none">{{ user?.name }}</div>
              <div class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-none">
                {{ user?.user_type?.replace('_', ' ') }}
              </div>
            </div>
            <ChevronDown class="w-3.5 h-3.5 text-slate-400" />
          </button>

          <!-- User Dropdown -->
          <div v-if="showUserMenu" class="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-1.5 animate-fade-in text-left">
            <div class="px-3 py-2.5 border-b border-slate-100 mb-1.5">
              <div class="text-xs font-semibold text-slate-800">{{ user?.name }}</div>
              <div class="text-[10px] text-slate-400 truncate mt-0.5">{{ user?.email }}</div>
            </div>
            <div class="space-y-0.5">
              <router-link 
                to="/student/profile" 
                @click="showUserMenu = false"
                class="flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <User class="w-4 h-4 text-slate-400" />
                <span>My Profile</span>
              </router-link>
              <button 
                @click="handleLogout"
                class="w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-red-655 hover:bg-red-50 rounded-xl transition-colors text-left"
              >
                <LogOut class="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import { 
  Menu, 
  Bell, 
  User,
  ChevronDown,
  AlertTriangle,
  Calendar,
  CreditCard,
  Book,
  CheckCircle,
  MessageSquare,
  Clock,
  LogOut
} from 'lucide-vue-next';
import { formatDistanceToNow } from 'date-fns';

const router = useRouter();
const route = useRoute();

defineEmits(['menu-click']);

const pageTitle = computed(() => {
  const path = route.path;
  if (path.includes('/student/dashboard')) return 'Dashboard';
  if (path.includes('/student/books')) return 'Browse Books';
  if (path.includes('/student/my-queue')) return 'Waitlist';
  if (path.includes('/student/events')) return 'Events & Seminars';
  if (path.includes('/student/libraries')) return 'Find Library';
  if (path.includes('/student/my-bookings')) return 'Seat Bookings';
  if (path.includes('/student/my-reservations')) return 'Book Reservations';
  if (path.includes('/student/attendance')) return 'My Attendance';
  if (path.includes('/student/analytics')) return 'My Analytics';
  if (path.includes('/student/subscription')) return 'Subscription';
  if (path.includes('/student/support')) return 'Support & Complaints';
  if (path.includes('/student/profile')) return 'My Profile';
  if (path.includes('/student/notifications')) return 'Notifications';
  return (route.meta?.title as string) || 'Dashboard';
});

const pageSubtitle = computed(() => {
  const path = route.path;
  if (path.includes('/student/dashboard')) return 'Your overview of library activity and stats';
  if (path.includes('/student/books')) return 'Browse and reserve books from our collection';
  if (path.includes('/student/my-queue')) return 'Track your position in book waiting lists';
  if (path.includes('/student/events')) return 'Discover and register for upcoming events & seminars';
  if (path.includes('/student/libraries')) return 'Find nearby libraries and explore available seats';
  if (path.includes('/student/my-bookings')) return 'View and manage your active seat reservations';
  if (path.includes('/student/my-reservations')) return 'Track books you have reserved for pickup';
  if (path.includes('/student/attendance')) return 'Review your library visit and study attendance history';
  if (path.includes('/student/analytics')) return 'Insights into your study habits and progress';
  if (path.includes('/student/subscription')) return 'Manage your library membership and plan';
  if (path.includes('/student/support')) return 'Get help or submit a complaint to our support team';
  if (path.includes('/student/profile')) return 'Manage your personal information and preferences';
  if (path.includes('/student/notifications')) return 'Stay updated with alerts and library announcements';
  return '';
});

const { user, notifications, unreadCount, markNotificationAsRead, isPlanExpired, logout } = useAuth();
const { showConfirm } = useSwal();
const showNotifications = ref(false);
const showUserMenu = ref(false);

const handleLogout = async () => {
  showUserMenu.value = false;
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await logout();
  }
};

const userInitials = computed(() => {
  if (!user.value?.name) return 'ST';
  const parts = user.value.name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
});

// Click outside handling
const notificationsRef = ref<HTMLElement | null>(null);
const notificationsDropdownRef = ref<HTMLElement | null>(null);
const userMenuRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (
    notificationsRef.value && 
    !notificationsRef.value.contains(target) &&
    notificationsDropdownRef.value &&
    !notificationsDropdownRef.value.contains(target)
  ) {
    showNotifications.value = false;
  }
  if (userMenuRef.value && !userMenuRef.value.contains(target)) {
    showUserMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'event': return Calendar;
    case 'subscription': return CreditCard;
    case 'book': return Book;
    case 'booking': return CheckCircle;
    case 'queue': return Clock;
    default: return MessageSquare;
  }
};

const getNotificationIconClass = (type: string) => {
  switch (type) {
    case 'event': return 'bg-purple-50 text-purple-600';
    case 'subscription': return 'bg-green-50 text-green-600';
    case 'book': return 'bg-blue-50 text-blue-600';
    case 'booking': return 'bg-orange-50 text-orange-600';
    case 'queue': return 'bg-amber-50 text-amber-600';
    default: return 'bg-slate-50 text-slate-600';
  }
};

const formatDate = (date: string) => {
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  } catch (e) {
    return date;
  }
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.bg-red-600 {
  background-color: #ef4444;
}

.text-red-655 {
  color: #ef4444;
}
</style>
