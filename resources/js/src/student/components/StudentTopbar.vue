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
