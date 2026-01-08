<template>
  <div class="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Left: Menu Button & Search -->
      <div class="flex items-center space-x-4 flex-1">
        <button
          @click="$emit('toggle-sidebar')"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu class="w-5 h-5 text-gray-600" />
        </button>

        <div class="relative flex-1 max-w-md">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search students, bookings, or books..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Right: Quick Actions & Profile -->
      <div class="flex items-center space-x-4">
        <!-- Quick Stats -->
        <div class="hidden md:flex items-center space-x-4 mr-4">
          <div class="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
            <UserCheck class="w-4 h-4 text-green-600" />
            <span class="text-sm font-medium text-green-700">{{ activeBookings }} Active</span>
          </div>
          <div class="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-lg">
            <Clock class="w-4 h-4 text-blue-600" />
            <span class="text-sm font-medium text-blue-700">{{ pendingCheckIns }} Pending</span>
          </div>
        </div>

        <!-- Notifications -->
        <button class="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell class="w-5 h-5 text-gray-600" />
          <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ unreadCount }}
          </span>
        </button>

        <!-- User Menu -->
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
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
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
              to="/librarian/settings"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { librarianAPI } from '@/librarian/services/librarianApi';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  ChevronDown, 
  LogOut, 
  Settings,
  UserCheck,
  Clock
} from 'lucide-vue-next';

defineEmits(['toggle-sidebar']);

const { user, logout } = useAuth();

const searchQuery = ref('');
const showUserMenu = ref(false);
const unreadCount = ref(3);
const activeBookings = ref(0);
const pendingCheckIns = ref(0);

const fetchStats = async () => {
  try {
    const data = await librarianAPI.getDashboard();
    if (data && data.stats) {
      activeBookings.value = data.stats.active_bookings;
      pendingCheckIns.value = data.stats.pending_bookings;
    }
  } catch (error) {
    console.error('Error fetching header stats:', error);
  }
};

const handleLogout = async () => {
  showUserMenu.value = false;
  await logout();
};

onMounted(() => {
  fetchStats();
});

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>
