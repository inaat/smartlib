<template>
  <!-- Sidebar -->
  <div :class="[
    'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
    isOpen ? 'translate-x-0' : '-translate-x-full'
  ]">
    
    <!-- Header -->
    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 relative">
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
          <p class="text-xs opacity-90">Librarian Portal</p>
        </div>
      </div>
      
      
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-6 overflow-y-auto" style="max-height: calc(100vh - 250px);">
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
                ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
            ]">
              <component :is="item.icon" :class="['w-5 h-5', isLinkActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500']" />
              <span class="font-medium text-sm">{{ item.label }}</span>
              <ChevronRight v-if="isLinkActive" class="w-4 h-4 ml-auto text-purple-600" />
            </div>
          </router-link>
        </div>
      </div>

      <!-- Space Management Submenu -->
      <div>
        <div 
          @click="spaceManagementOpen = !spaceManagementOpen"
          :class="[
            'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer mb-1',
            isSpaceManagementActive ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
          ]"
        >
          <Layers :class="['w-5 h-5', isSpaceManagementActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500']" />
          <span class="font-semibold text-sm">Space Management</span>
          <ChevronDownIcon 
            :class="[
              'w-4 h-4 ml-auto transition-transform duration-200',
              spaceManagementOpen ? 'rotate-180' : ''
            ]" 
          />
        </div>

        <div v-if="spaceManagementOpen" class="mt-1 space-y-1 ml-4 border-l-2 border-purple-100 pl-2">
          <router-link
            v-for="item in spaceManagementItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div :class="[
              'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer',
              isLinkActive
                ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
            ]">
              <component :is="item.icon" :class="['w-4 h-4', isLinkActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500']" />
              <span class="font-medium text-xs">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Management -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Management
        </h3>
        <div class="space-y-1">
          <router-link
            v-for="item in managementItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div :class="[
              'flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer',
              isLinkActive
                ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
            ]">
              <component :is="item.icon" :class="['w-5 h-5', isLinkActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500']" />
              <span class="font-medium text-sm">{{ item.label }}</span>
              <ChevronRight v-if="isLinkActive" class="w-4 h-4 ml-auto text-purple-600" />
            </div>
          </router-link>
        </div>
      </div>

      <!-- Analytics -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Analytics
        </h3>
        <div class="space-y-1">
          <router-link
            v-for="item in reportItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-all duration-200 group"
          >
            <component :is="item.icon" class="w-4 h-4 text-gray-400 group-hover:text-purple-500" />
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
  Users,
  Calendar,
  Settings,
  User,
  LogOut,
  X,
  ChevronRight,
  BarChart3,
  BookMarked,
  UserCheck,
  Clock,
  AlertCircle,
  Building2,
  LayoutGrid,
  LifeBuoy,
  Layers,
  FileBarChart,
  ChevronDown as ChevronDownIcon
} from 'lucide-vue-next';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useSwal } from '@/shared/composables/useSwal';


defineProps<{
  isOpen: boolean;
}>();

defineEmits(['close']);

const route = useRoute();
const { user, logout: authLogout } = useAuth();
const { showConfirm } = useSwal();

const isSpaceManagementActive = computed(() => {
  return ['/librarian/floors', '/librarian/sections', '/librarian/seats'].some(path => route.path.includes(path));
});

const spaceManagementOpen = ref(isSpaceManagementActive.value);

// Re-open if navigating to a child
watch(isSpaceManagementActive, (active) => {
  if (active) spaceManagementOpen.value = true;
});

const handleLogout = async () => {
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await authLogout();
  }
};

const mainNavItems = [
  { path: '/librarian/dashboard', label: 'Dashboard', icon: Home, exact: true },
  { path: '/librarian/bookings', label: 'Seat Bookings', icon: Calendar },
  { path: '/librarian/library', label: 'Library Info', icon: Building2 },
];

const managementItems = [
  { path: '/librarian/students', label: 'Students', icon: Users },
  { path: '/librarian/books', label: 'Book Inventory', icon: BookMarked },
  { path: '/librarian/reservations', label: 'Reserved Books', icon: BookOpen },
  { path: '/librarian/events', label: 'Events', icon: Calendar },
  { path: '/librarian/attendance', label: 'Attendance', icon: Clock },
  { path: '/librarian/support', label: 'Support & Complaints', icon: LifeBuoy },
];

const spaceManagementItems = [
  { path: '/librarian/floors', label: 'Floor Management', icon: Building2 },
  { path: '/librarian/sections', label: 'Section Management', icon: LayoutGrid },
  { path: '/librarian/seats', label: 'Seat Management', icon: UserCheck },
];

const reportItems = [
  { path: '/librarian/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/librarian/reports', label: 'Reports', icon: FileBarChart },
];
</script>
