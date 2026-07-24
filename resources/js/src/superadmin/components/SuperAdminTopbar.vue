<template>
  <header class="bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 transition-all duration-300 sticky top-0 z-40">
    <div class="flex items-center justify-between">
      <!-- Left Side: Menu button & Title -->
      <div class="flex items-center space-x-4">
        <button
          @click="$emit('menu-click')"
          class="p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-purple-600 lg:hidden border border-slate-100 transition-colors cursor-pointer"
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

      <!-- Right Side: Stats & User Menu -->
      <div class="flex items-center space-x-3.5">
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

        <!-- User Menu Dropdown Button -->
        <div class="relative" ref="userMenuRef">
          <button
            @click="showUserMenu = !showUserMenu"
            class="flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-655 hover:bg-slate-50 hover:text-purple-600 transition-all duration-200 border border-slate-100/50 cursor-pointer"
          >
            <div class="w-8 h-8 bg-purple-600/10 text-purple-600 font-bold flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-purple-500/10 flex-shrink-0">
              <img 
                v-if="user?.profile_picture" 
                :src="getProfilePictureUrl(user.profile_picture)" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
              <span v-else class="text-xs">{{ userInitials }}</span>
            </div>
            <div class="hidden md:block text-left">
              <div class="text-xs font-bold text-slate-800 leading-none">{{ user?.name }}</div>
              <div class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-none">
                Super Admin
              </div>
            </div>
            <ChevronDown class="w-3.5 h-3.5 text-slate-400" />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="showUserMenu"
            class="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-1.5 animate-fade-in text-left"
          >
            <div class="px-3 py-2.5 border-b border-slate-100 mb-1.5">
              <div class="text-xs font-bold text-slate-800">{{ user?.name }}</div>
              <div class="text-[10px] text-slate-400 truncate mt-0.5">{{ user?.email }}</div>
            </div>
            <div class="space-y-0.5">
              <router-link
                to="/superadmin/profile"
                class="flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                @click="showUserMenu = false"
              >
                <User class="w-4 h-4 text-slate-400" />
                <span>My Profile</span>
              </router-link>
              <router-link
                to="/superadmin/settings"
                class="flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                @click="showUserMenu = false"
              >
                <Settings class="w-4 h-4 text-slate-400" />
                <span>Settings</span>
              </router-link>
             
              <button
                @click="handleLogout"
                class="w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-655 hover:bg-red-50 rounded-xl transition-colors text-left cursor-pointer"
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
  User, 
  ChevronDown, 
  LogOut, 
  Settings
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

defineEmits(['menu-click']);

const router = useRouter();
const route = useRoute();
const { user, logout } = useAuth();
const { showConfirm } = useSwal();

const showUserMenu = ref(false);
const stats = ref({
  active: 0,
  pending: 0
});

// Dynamic Title computation
const pageTitle = computed(() => {
  const path = route.path;
  if (path.includes('/superadmin/dashboard')) return 'Dashboard';
  if (path.includes('/superadmin/libraries')) {
    if (route.params.id) return 'Library Details';
    return 'Libraries';
  }
  if (path.includes('/superadmin/librarians')) return 'Librarians';
  if (path.includes('/superadmin/users')) return 'Students';
  if (path.includes('/superadmin/bookings')) return 'Seat Bookings';
  if (path.includes('/superadmin/books')) return 'Book Inventory';
  if (path.includes('/superadmin/events')) return 'Events';
  if (path.includes('/superadmin/attendance')) return 'Attendance';
  if (path.includes('/superadmin/support')) return 'Support & Complaints';
  if (path.includes('/superadmin/floors')) return 'Floor Management';
  if (path.includes('/superadmin/sections')) return 'Section Management';
  if (path.includes('/superadmin/seats')) return 'Seat Management';
  if (path.includes('/superadmin/settings')) return 'System Settings';
  if (path.includes('/superadmin/analytics') || path.includes('/superadmin/reports')) return 'Analytics & Reports';
  if (path.includes('/superadmin/profile')) return 'My Profile';
  return (route.meta?.title as string) || 'Dashboard';
});

// Dynamic Subtitle computation
const pageSubtitle = computed(() => {
  const path = route.path;
  if (path.includes('/superadmin/dashboard')) return 'System-wide activity and operations overview';
  if (path.includes('/superadmin/libraries')) {
    if (route.params.id) return 'Detailed information and analytics for this library';
    return 'Manage and configure system libraries';
  }
  if (path.includes('/superadmin/librarians')) return 'Manage system librarians and their accounts';
  if (path.includes('/superadmin/users')) return 'Manage student profiles, search, and authorizations';
  if (path.includes('/superadmin/bookings')) return 'View and manage seat reservation history';
  if (path.includes('/superadmin/books')) return 'View catalog copy counts and system-wide inventory';
  if (path.includes('/superadmin/events')) return 'Oversee scheduled events, workshops, and registrations';
  if (path.includes('/superadmin/attendance')) return 'View seat booking session check-in logs';
  if (path.includes('/superadmin/support')) return 'Manage user feedback, support requests, and complaints';
  if (path.includes('/superadmin/floors')) return 'Configure library building layout and floor details';
  if (path.includes('/superadmin/sections')) return 'Configure sections and zones within library floors';
  if (path.includes('/superadmin/seats')) return 'Configure seats, rules, and layout templates';
  if (path.includes('/superadmin/settings')) return 'Manage system configurations, policies, and parameters';
  if (path.includes('/superadmin/analytics') || path.includes('/superadmin/reports')) return 'View system occupancy, check-ins, charts, and generate reports';
  if (path.includes('/superadmin/profile')) return 'Update your credentials and account information';
  return '';
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
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await logout();
    router.push('/login');
  }
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

const userInitials = computed(() => {
  if (!user.value?.name) return 'SA';
  const parts = user.value.name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
});

// Click outside handling
const userMenuRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
    showUserMenu.value = false;
  }
};

let interval: any = null;

onMounted(() => {
  fetchStats();
  // Refresh stats every 30 seconds
  interval = setInterval(fetchStats, 30000);
  
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
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

.text-slate-655 {
  color: #475569;
}

.text-red-655 {
  color: #ef4444;
}

.bg-purple-600\/10 {
  background-color: rgba(147, 51, 234, 0.1);
}

.text-purple-600 {
  color: #9333EA;
}

.border-purple-500\/10 {
  border-color: rgba(168, 85, 247, 0.1);
}
</style>
