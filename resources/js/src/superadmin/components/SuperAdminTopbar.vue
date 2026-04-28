<template>
  <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
    <div class="flex items-center">
      <button 
        @click="$emit('menu-click')"
        class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden mr-2"
      >
        <Menu class="w-6 h-6" />
      </button>
    </div>

    <div class="flex items-center space-x-4">
      <!-- Stats Display -->
      <div class="hidden md:flex items-center space-x-4 mr-4">
        <!-- Active Check-ins -->
        <router-link to="/superadmin/bookings" class="flex items-center px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm hover:bg-green-100 transition-colors cursor-pointer">
          <div class="relative flex items-center justify-center mr-2">
            <div class="w-2 h-2 rounded-full bg-green-500"></div>
            <div class="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
          </div>
          <span class="text-xs font-semibold text-green-700 whitespace-nowrap">
            {{ stats.active }} Active
          </span>
        </router-link>
        
        <!-- Pending Check-ins -->
        <router-link to="/superadmin/bookings" class="flex items-center px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors cursor-pointer">
          <div class="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
          <span class="text-xs font-semibold text-orange-700 whitespace-nowrap">
            {{ stats.pending }} Pending
          </span>
        </router-link>
      </div>

      <!-- User Profile -->
      <div class="relative" ref="userMenuRef">
        <button 
          @click="showUserMenu = !showUserMenu"
          class="flex items-center space-x-3 pl-2 md:pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors"
        >
          <div class="hidden md:block text-right">
            <div class="text-sm font-semibold text-gray-800">{{ user?.name }}</div>
            <div class="text-xs text-gray-500">Super Admin</div>
          </div>
          <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-indigo-50 overflow-hidden">
            <img 
              v-if="user?.profile_picture" 
              :src="getProfilePictureUrl(user.profile_picture)" 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
            <User v-else class="w-6 h-6 text-indigo-600" />
          </div>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          <router-link
            to="/superadmin/profile"
            class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            @click="showUserMenu = false"
          >
            <User class="w-4 h-4" />
            <span>My Profile</span>
          </router-link>
          <router-link
            to="/superadmin/settings"
            class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            @click="showUserMenu = false"
          >
            <Settings class="w-4 h-4" />
            <span>Settings</span>
          </router-link>
          <hr class="my-2" />
          <button
            @click="handleLogout"
            class="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut class="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { Menu, User, Settings, LogOut } from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

defineEmits(['menu-click']);

const { user, logout } = useAuth();
const showUserMenu = ref(false);
const stats = ref({
  active: 0,
  pending: 0
});

const fetchStats = async () => {
  try {
    const data = await adminAPI.getAllBookingStats();
    stats.value = {
      active: data.active || 0,
      pending: data.pending || 0
    };
  } catch (error) {
    console.error('Error fetching booking stats:', error);
  }
};

const handleLogout = async () => {
  showUserMenu.value = false;
  await logout();
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

// Click outside handling
const userMenuRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
    showUserMenu.value = false;
  }
};

onMounted(() => {
  fetchStats();
  // Refresh stats every 30 seconds
  const interval = setInterval(fetchStats, 30000);
  
  document.addEventListener('mousedown', handleClickOutside);
  
  return () => {
    clearInterval(interval);
    document.removeEventListener('mousedown', handleClickOutside);
  };
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
