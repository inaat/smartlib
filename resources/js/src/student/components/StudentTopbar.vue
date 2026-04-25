<template>
  <div v-if="isPlanExpired" class="bg-red-600 text-white px-6 py-2 flex items-center justify-between animate-pulse">
    <div class="flex items-center space-x-2">
      <AlertTriangle class="w-4 h-4" />
      <span class="text-sm font-medium">Your subscription has expired. Please renew to continue using all features.</span>
    </div>
    <router-link to="/student/subscription" class="text-xs font-bold underline hover:text-red-100">
      Renew Now
    </router-link>
  </div>
  <header class="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Left Side -->
      <div class="flex items-center space-x-4">
        <button
          @click="$emit('menu-click')"
          class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu class="w-5 h-5" />
        </button>
        
        <div class="hidden lg:block">
          <h1 class="text-xl font-semibold text-gray-800">
            Welcome back, {{ user?.name?.split(' ')[0] }}!
          </h1>
          <p class="text-sm text-gray-600">
            Ready to continue your studies?
          </p>
        </div>
      </div>

     
      <!-- Right Side -->
      <div class="flex items-center space-x-4">
        <!-- Loyalty Points -->
        

        <!-- Notifications -->
        <div class="relative">
          <button
            @click="showNotifications = !showNotifications; showUserMenu = false"
            class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 relative transition-colors"
            title="Notifications"
          >
            <Bell class="w-5 h-5" />
            <span 
              v-if="unreadCount > 0"
              class="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold"
            >
              {{ unreadCount > 9 ? '9+' : unreadCount }}
            </span>
          </button>

          <!-- Notifications Dropdown -->
          <div v-if="showNotifications" class="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div class="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 class="font-bold text-gray-800">Notifications</h3>
              <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full" v-if="unreadCount > 0">
                {{ unreadCount }} New
              </span>
            </div>
            
            <div class="max-h-[400px] overflow-y-auto">
              <div v-if="notifications.length === 0" class="p-8 text-center">
                <Bell class="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <p class="text-sm text-gray-500">No notifications yet</p>
              </div>
              <div v-else>
                <div 
                  v-for="notification in notifications" 
                  :key="notification.id"
                  class="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer relative"
                  :class="{ 'bg-blue-50/30': !notification.is_read }"
                  @click="markNotificationAsRead(notification.id)"
                >
                  <div class="flex items-start space-x-3">
                    <div class="p-2 rounded-lg" :class="getNotificationIconClass(notification.type)">
                      <component :is="getNotificationIcon(notification.type)" class="w-4 h-4" />
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-sm font-bold text-gray-800">{{ notification.title }}</span>
                        <span class="text-[10px] text-gray-400 font-medium">{{ formatDate(notification.created_at) }}</span>
                      </div>
                      <p class="text-xs text-gray-600 leading-relaxed">{{ notification.message }}</p>
                    </div>
                  </div>
                  <div v-if="!notification.is_read" class="absolute right-4 bottom-4 w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div v-if="notifications.length > 0" class="p-3 border-t border-gray-100 text-center bg-gray-50/30">
              <button 
                @click="router.push('/student/notifications'); showNotifications = false"
                class="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View All Notifications
              </button>
            </div>
          </div>
        </div>

        <!-- User Menu -->
        <div class="relative">
          <button
            @click="showUserMenu = !showUserMenu"
            class="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                v-if="user?.profile_picture" 
                :src="getProfilePictureUrl(user.profile_picture)" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
              <User v-else class="w-4 h-4 text-blue-600" />
            </div>
            <div class="hidden sm:block text-left">
              <div class="text-sm font-medium text-gray-800">{{ user?.name }}</div>
              <div class="text-xs text-gray-500 capitalize">
                {{ user?.user_type?.replace('_', ' ') }}
              </div>
            </div>
            <ChevronDown class="w-4 h-4" />
          </button>

          <!-- User Dropdown -->
          <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div class="p-3 border-b border-gray-200">
              <div class="font-medium text-gray-800">{{ user?.name }}</div>
              <div class="text-sm text-gray-600">{{ user?.email }}</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
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
  Clock
} from 'lucide-vue-next';
import { formatDistanceToNow } from 'date-fns';
const router = useRouter();

defineEmits(['menu-click']);

const { user, notifications, unreadCount, markNotificationAsRead, isPlanExpired } = useAuth();
const showNotifications = ref(false);
const showUserMenu = ref(false);

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
    case 'event': return 'bg-purple-100 text-purple-600';
    case 'subscription': return 'bg-green-100 text-green-600';
    case 'book': return 'bg-blue-100 text-blue-600';
    case 'booking': return 'bg-orange-100 text-orange-600';
    case 'queue': return 'bg-amber-100 text-amber-600';
    default: return 'bg-gray-100 text-gray-600';
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
