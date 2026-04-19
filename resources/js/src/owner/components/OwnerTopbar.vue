<template>
  <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
    <div class="flex items-center text-indigo-600">
      <button 
        @click="$emit('menu-click')"
        class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden mr-2"
      >
        <Menu class="w-6 h-6" />
      </button>
      <h2 class="text-lg font-bold lg:hidden">Owner</h2>
    </div>

    <div class="flex items-center space-x-4">
      <!-- User Profile -->
      <div class="relative" ref="menuRef">
        <button 
          @click="showUserMenu = !showUserMenu"
          class="flex items-center space-x-3 pl-2 md:pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors"
        >
          <div class="hidden md:block text-right">
            <div class="text-sm font-semibold text-gray-800">{{ user?.name }}</div>
            <div class="text-xs text-indigo-500 font-medium tracking-tight">System Owner</div>
          </div>
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden text-white font-bold">
            {{ user?.name?.charAt(0) || 'O' }}
          </div>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
        >
          <div class="px-4 py-2 border-b border-gray-50 mb-1">
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">My Account</p>
          </div>
          <router-link
            to="/profile"
            class="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            @click="showUserMenu = false"
          >
            <User class="w-4 h-4 text-gray-400" />
            <span>Profile</span>
          </router-link>
          <hr class="my-1 border-gray-50" />
          <button
            @click="handleLogout"
            class="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut class="w-4 h-4" />
            <span class="font-medium">Sign Out</span>
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

defineEmits(['menu-click']);

const { user, logout } = useAuth();
const showUserMenu = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const handleLogout = async () => {
  showUserMenu.value = false;
  await logout();
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    showUserMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
