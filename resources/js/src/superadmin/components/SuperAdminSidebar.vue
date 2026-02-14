<template>
  <!-- Sidebar -->
  <div :class="[
    'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
    isOpen ? 'translate-x-0' : '-translate-x-full'
  ]">
    
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 relative">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 lg:hidden"
      >
        <X class="w-5 h-5" />
      </button>
      
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <ShieldCheck class="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 class="text-lg font-bold">{{ settings.site_name || 'Smart Lib' }}</h1>
          <p class="text-xs opacity-90">Super Admin</p>
        </div>
      </div>
      
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
      <!-- Main Navigation -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Management
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
                ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
            ]">
              <component :is="item.icon" :class="['w-5 h-5', isLinkActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500']" />
              <span class="font-medium text-sm">{{ item.label }}</span>
              <ChevronRight v-if="isLinkActive" class="w-4 h-4 ml-auto text-indigo-600" />
            </div>
          </router-link>
        </div>
      </div>

      <!-- System -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          System
        </h3>
        <div class="space-y-1">
          <router-link
            v-for="item in systemNavItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div :class="[
              'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer',
              isLinkActive
                ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
            ]">
              <component :is="item.icon" :class="['w-5 h-5', isLinkActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500']" />
              <span class="font-medium text-sm">{{ item.label }}</span>
              <ChevronRight v-if="isLinkActive" class="w-4 h-4 ml-auto text-indigo-600" />
            </div>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="border-t border-gray-200 p-4">
      <button
        @click="logout"
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
  Home, 
  Library,
  Users,
  UserCheck,
  CreditCard,
  BarChart3,
  Settings,
  ShieldCheck,
  User,
  LogOut,
  X,
  ChevronRight,
  Layers,
  Layout,
  BookOpen,
  Calendar,
  ClipboardList,
  Square,
  ShoppingBag,
  LifeBuoy
} from 'lucide-vue-next';


defineProps<{
  isOpen: boolean;
}>();

defineEmits(['close']);

const { user, logout, settings } = useAuth();

const mainNavItems = [
  { path: '/superadmin/dashboard', label: 'Dashboard', icon: Home },
  { path: '/superadmin/libraries', label: 'Libraries', icon: Library },
  { path: '/superadmin/librarians', label: 'Librarians', icon: UserCheck },
  { path: '/superadmin/users', label: 'Students', icon: Users },
  { path: '/superadmin/floors', label: 'Floors', icon: Layers },
  { path: '/superadmin/sections', label: 'Sections', icon: Layout },
  { path: '/superadmin/books', label: 'Books', icon: BookOpen },
  { path: '/superadmin/events', label: 'Events', icon: Calendar },
  { path: '/superadmin/bookings', label: 'Bookings', icon: ClipboardList },
  { path: '/superadmin/seats', label: 'Seats', icon: Square },
];

const systemNavItems = [
  { path: '/superadmin/subscription-plans', label: 'Subscription Plans', icon: CreditCard },
  { path: '/superadmin/orders', label: 'Orders', icon: ShoppingBag },
  { path: '/superadmin/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/superadmin/support', label: 'Support & Complaints', icon: LifeBuoy },
  { path: '/superadmin/settings', label: 'System Settings', icon: Settings },
];
</script>
