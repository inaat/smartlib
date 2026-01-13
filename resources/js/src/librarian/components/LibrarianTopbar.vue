<template>
  <div class="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Left: Menu Button -->
      <div class="flex items-center space-x-6">
        <button
          @click="$emit('toggle-sidebar')"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu class="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <!-- Right: Stats & User Menu -->
      <div class="flex items-center space-x-4">
        <!-- Stats Display -->
        <div class="hidden md:flex items-center space-x-4 mr-4">
          <!-- Active Check-ins -->
          <router-link to="/librarian/attendance" class="flex items-center px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm hover:bg-green-100 transition-colors cursor-pointer">
            <div class="relative flex items-center justify-center mr-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <div class="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
            </div>
            <span class="text-xs font-semibold text-green-700 whitespace-nowrap">
              {{ stats.active }} Active
            </span>
          </router-link>
          
          <!-- Pending Check-ins -->
          <router-link to="/librarian/bookings" class="flex items-center px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors cursor-pointer">
            <div class="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
            <span class="text-xs font-semibold text-orange-700 whitespace-nowrap">
              {{ stats.pending }} Pending
            </span>
          </router-link>
        </div>

        <div class="relative">
          <button
            @click="showUserMenu = !showUserMenu"
            class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center overflow-hidden">
              <img 
                v-if="user?.profile_picture" 
                :src="getProfilePictureUrl(user.profile_picture)" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
              <User v-else class="w-5 h-5 text-white" />
            </div>
            <div class="hidden md:block text-left">
              <div class="text-sm font-medium text-gray-700">{{ user?.name }}</div>
              <div class="text-xs text-gray-500">Librarian</div>
            </div>
            <ChevronDown class="w-4 h-4 text-gray-400" />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="showUserMenu"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          >
            <router-link
              to="/librarian/profile"
              class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              @click="showUserMenu = false"
            >
              <User class="w-4 h-4" />
              <span>My Profile</span>
            </router-link>
            <router-link
              to="/librarian/library"
              class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              @click="showUserMenu = false"
            >
              <Settings class="w-4 h-4" />
              <span>Settings</span>
            </router-link>
           
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import { 
  Menu, 
  User, 
  ChevronDown, 
  LogOut, 
  Settings
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

defineEmits(['toggle-sidebar']);

const router = useRouter();
const { user, logout } = useAuth();
const { showConfirm } = useSwal();

const showUserMenu = ref(false);
const stats = ref({
  active: 0,
  pending: 0
});

const fetchStats = async () => {
  try {
    const data = await librarianAPI.getBookingStats();
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
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await logout();
    router.push('/login');
  }
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

onMounted(() => {
  fetchStats();
  // Refresh stats every 30 seconds
  const interval = setInterval(fetchStats, 30000);
  return () => clearInterval(interval);
});
</script>
