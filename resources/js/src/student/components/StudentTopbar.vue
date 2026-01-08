<template>
  <div v-if="isPlanExpired" class="bg-red-600 text-white px-6 py-2 flex items-center justify-between animate-pulse">
    <div class="flex items-center space-x-2">
      <AlertTriangle class="w-4 h-4" />
      <span class="text-sm font-medium">Your subscription has expired. Please renew to continue using all features.</span>
    </div>
    <router-link to="/student/subscriptions" class="text-xs font-bold underline hover:text-red-100">
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

      <!-- Center - Search -->
      <div class="hidden md:flex flex-1 max-w-md mx-8">
        <div class="relative w-full">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search libraries, books, events..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Right Side -->
      <div class="flex items-center space-x-4">
        <!-- Loyalty Points -->
        

        <!-- Notifications -->
        <div class="relative">
          <button 
            @click="showNotifications = !showNotifications"
            class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative"
          >
            <Bell class="w-5 h-5" />
            <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {{ unreadCount }}
            </span>
          </button>

          <!-- Notifications Dropdown -->
          <div v-if="showNotifications" class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div class="p-4 border-b border-gray-200">
              <h3 class="text-sm font-semibold text-gray-800">Notifications</h3>
            </div>
            <div class="max-h-96 overflow-y-auto">
              <div v-if="notifications.length === 0" class="p-4 text-center text-gray-500 text-sm">
                No notifications
              </div>
              <div
                v-else
                v-for="notification in notifications.slice(0, 5)"
                :key="notification.id"
                :class="['p-4 border-b border-gray-100 hover:bg-gray-50', !notification.isRead ? 'bg-blue-50' : '']"
              >
                <h4 class="text-sm font-medium text-gray-800">{{ notification.title }}</h4>
                <p class="text-xs text-gray-600 mt-1">{{ notification.message }}</p>
                <p class="text-xs text-gray-400 mt-1">
                  {{ new Date(notification.created_at).toLocaleTimeString() }}
                </p>
              </div>
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
            <div class="p-2">
              <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center">
                <Settings class="w-4 h-4 mr-2" />
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { 
  Menu, 
  Bell, 
  Search, 
  User,
  ChevronDown,
  Award,
  Settings,
  AlertTriangle
} from 'lucide-vue-next';

defineEmits(['menu-click']);

const { user, notifications, unreadCount, isPlanExpired } = useAuth();
const showNotifications = ref(false);
const showUserMenu = ref(false);

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>
