<template>
  <!-- Sidebar -->
  <div :class="[
    'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
    isOpen ? 'translate-x-0' : '-translate-x-full'
  ]">
    
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 relative">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 lg:hidden"
      >
        <X class="w-5 h-5" />
      </button>
      
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <BookOpen class="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 class="text-lg font-bold">Smart Lib</h1>
          <p class="text-xs opacity-90">Student Portal</p>
        </div>
      </div>
          
      
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-6">
      <!-- Main Navigation -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Main Menu
        </h3>
        <div class="space-y-1">
          <router-link
            v-for="item in mainNavItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div :class="[
              'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer',
              isLinkActive
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            ]">
              <component :is="item.icon" :class="['w-5 h-5', isLinkActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500']" />
              <span class="font-medium text-sm">{{ item.label }}</span>
              <ChevronRight v-if="isLinkActive" class="w-4 h-4 ml-auto text-blue-600" />
            </div>
          </router-link>
        </div>
      </div>

      <!-- Quick Access -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Quick Access
        </h3>
        <div class="space-y-1">
          <router-link
            v-for="item in quickAccessItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 group"
          >
            <component :is="item.icon" class="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            <span class="font-medium text-sm">{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="border-t border-gray-200 p-4">
      
      
      <button
        @click="handleLogout"
        class="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <LogOut class="w-4 h-4" />
        <span class="text-sm font-medium">Sign Out</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/shared/composables/useAuth';
import { 
  BookOpen, 
  Home, 
  Calendar,
  QrCode,
  User,
  LogOut,
  X,
  ChevronRight,
  CreditCard,
  BarChart3,
  BookMarked,
  LifeBuoy,
  CalendarCheck
} from 'lucide-vue-next';

import { useSwal } from '@/shared/composables/useSwal';

defineProps<{
  isOpen: boolean;
}>();

defineEmits(['close']);

const { logout: authLogout } = useAuth();
const { showConfirm } = useSwal();

const handleLogout = async () => {
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await authLogout();
  }
};

const mainNavItems = [
  { path: '/student/dashboard', label: 'Dashboard', icon: Home, exact: true },
  { path: '/student/books', label: 'Browse Books', icon: BookOpen },
  { path: '/student/my-reservations', label: 'My Reservations', icon: BookMarked },
  { path: '/student/events', label: 'Events & Seminars', icon: Calendar },
  { path: '/student/libraries', label: 'Seat Booking', icon: QrCode },
  { path: '/student/profile', label: 'My Profile', icon: User },
];

const quickAccessItems = [
  { path: '/student/attendance', label: 'My Attendance', icon: CalendarCheck },
  { path: '/student/analytics', label: 'My Analytics', icon: BarChart3 },
  { path: '/student/subscription', label: 'Subscription', icon: CreditCard },
  { path: '/student/support', label: 'Support & Complaints', icon: LifeBuoy },
];
</script>

