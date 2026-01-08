<template>
  <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
    <div class="flex items-center">
      <button 
        @click="$emit('menu-click')"
        class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden mr-2"
      >
        <Menu class="w-6 h-6" />
      </button>
      
      <div class="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 lg:w-96">
        <Search class="w-4 h-4 text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search for libraries, users, or reports..." 
          class="bg-transparent border-none focus:ring-0 text-sm w-full"
        />
      </div>
    </div>

    <div class="flex items-center space-x-2 md:space-x-4">
      <!-- Notifications -->
      <div class="relative">
        <button class="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
          <Bell class="w-5 h-5" />
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      <!-- User Profile -->
      <div class="relative">
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
import { ref } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { Menu, Search, Bell, User, Settings, LogOut } from 'lucide-vue-next';

defineEmits(['menu-click']);

const { user, logout } = useAuth();
const showUserMenu = ref(false);

const handleLogout = async () => {
  showUserMenu.value = false;
  await logout();
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>
