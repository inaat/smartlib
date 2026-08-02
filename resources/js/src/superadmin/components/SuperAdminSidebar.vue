<template>
  <!-- Sidebar -->
  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 flex flex-col bg-purple-700 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out',
      // Mobile: always full width sidebar, translate in/out
      'w-72 max-w-[85vw]',
      // Desktop overrides: relative h-full and width depends on collapsed state
      isCollapsed ? 'lg:w-20 lg:shadow-none lg:relative lg:top-0 lg:h-full lg:flex-shrink-0 lg:overflow-hidden' : 'lg:w-64 lg:shadow-none lg:relative lg:top-0 lg:h-full lg:flex-shrink-0 lg:overflow-hidden',
      // Translate: hidden on mobile unless open, always visible on desktop
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <!-- Branding Header -->
    <div
      @click="handleBrandClick"
      :class="[
        'flex items-center transition-all duration-300 border-b border-white/10 flex-shrink-0 cursor-pointer hover:bg-white/10 active:bg-white/20 select-none relative group',
        isCollapsed ? 'lg:p-5 lg:justify-center p-5 justify-between' : 'p-5'
      ]"
    >
      <div v-if="!showCollapsed" class="flex items-center space-x-3 animate-fade-in">
        <!-- Logo Icon -->
        <div class="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white shadow-md shadow-white/5 group-hover:scale-105 transition-transform flex-shrink-0">
          <ShieldCheck class="w-5 h-5 text-white" />
        </div>
        <div v-if="!isCollapsed || !isDesktop" class="flex flex-col text-left">
          <h1 class="text-sm font-bold text-white tracking-tight leading-none animate-fade-in">{{ settings.site_name || 'SmartLib' }}</h1>
          <p class="text-[9px] font-bold text-purple-200 tracking-wider uppercase mt-1 leading-none animate-fade-in">Super Admin Portal</p>
        </div>
      </div>

      <!-- Toggle button when collapsed (Desktop) -->
      <button
        v-if="showCollapsed"
        @click.stop="$emit('toggle-collapse')"
        class="hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
      >
        <ShieldCheck class="w-5 h-5 text-white" />
      </button>

      <!-- Mobile close button inside header -->
      <button
        @click.stop="$emit('close')"
        class="lg:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
      >
        <X class="w-4 h-4" />
      </button>
    </div>

    <!-- Navigation Menu -->
    <nav
      @scroll="closeAllDropdowns"
      :class="[
        'flex-1 px-2.5 py-5 space-y-5 transition-all duration-300 overflow-y-auto'
      ]"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      <!-- Management Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          Management
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <template v-for="item in mainNavItems" :key="item.path">
            <router-link
              :to="item.path"
              @click="$emit('close')"
              v-slot="{ isActive: isLinkActive }"
            >
              <div
                @mouseenter="handleMouseEnter($event, item.label)"
                @mouseleave="handleMouseLeave"
                :class="[
                  'flex items-center transition-all duration-200 group cursor-pointer relative',
                  showCollapsed
                    ? 'justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in'
                    : 'px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm',
                  isLinkActive
                    ? 'bg-white text-purple-700 shadow-md shadow-purple-950/15 animate-fade-in'
                    : 'text-white hover:bg-white/10'
                ]"
              >
                <component
                  :is="item.icon"
                  :class="[
                    'w-5 h-5 transition-colors',
                    isLinkActive ? 'text-purple-700' : 'text-white/90 group-hover:text-white'
                  ]"
                />
                <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
              </div>
            </router-link>
          </template>
        </div>
      </div>

      <!-- System Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          System
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <router-link
            v-for="item in systemItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div
              @mouseenter="handleMouseEnter($event, item.label)"
              @mouseleave="handleMouseLeave"
              :class="[
                'flex items-center transition-all duration-200 group cursor-pointer relative',
                showCollapsed
                  ? 'justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in'
                  : 'px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm',
                isLinkActive
                  ? 'bg-white text-purple-700 shadow-md shadow-purple-950/15 animate-fade-in'
                  : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-colors',
                  isLinkActive ? 'text-purple-700' : 'text-white/90 group-hover:text-white'
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Footer Area (User Profile Card) -->
    <div class="p-4 border-t border-white/10 bg-transparent z-10 flex flex-col justify-end flex-shrink-0 min-h-0">
      
      <!-- User Profile Card -->
      <div class="relative">
        <div 
          @mouseenter="handleMouseEnter($event, 'User Profile & Menu')"
          @mouseleave="handleMouseLeave"
          :class="[
            'flex items-center justify-between rounded-2xl hover:bg-white/10 transition-colors relative cursor-pointer group',
            isCollapsed && isDesktop ? 'p-1 justify-center' : 'p-2'
          ]"
          @click="toggleProfileDropdown"
        >
          <!-- Profile Avatar -->
          <div class="w-9 h-9 rounded-full bg-white/15 border border-white/10 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 overflow-hidden">
            <img 
              v-if="user?.profile_picture" 
              :src="getProfilePictureUrl(user.profile_picture)" 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
            <span v-else>{{ userInitials }}</span>
          </div>

          <!-- Profile Details (Expanded Only) -->
          <div v-if="!showCollapsed" class="flex-1 ml-3 min-w-0 text-left">
            <span class="text-xs font-bold text-white truncate block">{{ user?.name }}</span>
            <span class="text-[10px] text-purple-200 truncate block mt-0.5">{{ user?.email }}</span>
          </div>

          <!-- Profile More Options button (Expanded Only) -->
          <div v-if="!showCollapsed" class="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <MoreVertical class="w-4 h-4 text-white/80 hover:text-white" />
          </div>
        </div>

        <!-- Profile Dropdown Menu (Expanded / Mobile state) -->
        <div
          v-if="showProfileDropdown && !showCollapsed"
          class="absolute bottom-14 left-0 right-0 bg-purple-800 border border-slate-400 rounded-2xl shadow-xl p-1.5 z-[100] flex flex-col space-y-0.5 animate-fade-in text-left"
        >
          <router-link
            to="/superadmin/profile"
            @click="showProfileDropdown = false"
            class="flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <User class="w-4 h-4 text-white/80" />
            <span>My Profile</span>
          </router-link>
          <button
            @click="handleLogout"
            class="w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
          >
            <LogOut class="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        <!-- Profile Floating Menu (desktop collapsed only) -->
        <Teleport to="body">
          <div
            v-if="showProfileDropdown && showCollapsed"
            class="fixed z-[9999] animate-fade-in w-48 bg-purple-800 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-0.5 text-left"
            :style="{
              bottom: `${profileDropdownBottom}px`,
              left: '80px'
            }"
            @click.stop
          >
            <div class="px-3 py-1.5 text-[10px] font-bold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1">
              {{ user?.name }}
            </div>
            <router-link
              to="/superadmin/profile"
              @click="showProfileDropdown = false"
              class="flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <User class="w-4 h-4 text-white/80" />
              <span>My Profile</span>
            </router-link>
            <button
              @click="handleLogout"
              class="w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
            >
              <LogOut class="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </Teleport>
      </div>
      
    </div>
  </aside>

  <!-- Global Tooltip for Collapsed Sidebar -->
  <Teleport to="body">
    <div
      v-if="showGlobalTooltip"
      class="fixed bg-slate-900 text-white text-[10px] font-semibold rounded-lg px-2.5 py-1.5 shadow-lg whitespace-nowrap z-[9999] pointer-events-none transition-opacity duration-150 font-sans"
      :style="{
        top: `${activeTooltipTop}px`,
        left: '80px',
        transform: 'translateY(-50%)'
      }"
    >
      {{ activeTooltipText }}
      <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { 
  Home, 
  Library,
  UserCheck,
  Users,
  Calendar,
  LifeBuoy,
  BarChart3,
  Settings,
  LogOut,
  X,
  ShieldCheck,
  MoreVertical,
  User
} from 'lucide-vue-next';

import { useSwal } from '@/shared/composables/useSwal';

const props = defineProps<{
  isOpen: boolean;
  isCollapsed: boolean;
}>();

const emit = defineEmits(['close', 'toggle-collapse']);

const { logout: authLogout, user, settings } = useAuth();
const { showConfirm } = useSwal();

// Track if we are on desktop (lg breakpoint = 1024px)
const isDesktop = ref(window.innerWidth >= 1024);
const handleResize = () => { isDesktop.value = window.innerWidth >= 1024; };

// showCollapsed is true only on desktop when sidebar is in collapsed state
const showCollapsed = computed(() => props.isCollapsed && isDesktop.value);

// Profile Dropdown state
const showProfileDropdown = ref(false);

// Teleported elements positioning state
const activeTooltipText = ref('');
const activeTooltipTop = ref(0);
const showGlobalTooltip = ref(false);
const profileDropdownBottom = ref(0);

const handleMouseEnter = (event: MouseEvent, label: string) => {
  if (!showCollapsed.value) return;
  if (label === 'User Profile & Menu' && showProfileDropdown.value) return;
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  activeTooltipText.value = label;
  activeTooltipTop.value = rect.top + rect.height / 2;
  showGlobalTooltip.value = true;
};

const handleMouseLeave = () => {
  showGlobalTooltip.value = false;
};

const handleLogout = async () => {
  showProfileDropdown.value = false;
  if (await showConfirm('Sign Out', 'Are you sure you want to sign out?', 'Yes, Sign Out')) {
    await authLogout();
  }
};

// Brand header click: toggle collapse
const handleBrandClick = () => {
  if (isDesktop.value) {
    emit('toggle-collapse');
  }
};

// Auto-close dropdowns smoothly when sidebar collapses
watch(showCollapsed, (collapsed) => {
  if (collapsed) {
    showProfileDropdown.value = false;
  }
});

// User initials generator for default avatar
const userInitials = computed(() => {
  if (!user.value?.name) return 'SA';
  const parts = user.value.name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
});

// Profile Dropdown Click-Outside handler
const toggleProfileDropdown = (event: Event) => {
  event.stopPropagation();
  if (showCollapsed.value) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    profileDropdownBottom.value = window.innerHeight - rect.bottom;
    if (!showProfileDropdown.value) {
      showGlobalTooltip.value = false;
    }
  }
  showProfileDropdown.value = !showProfileDropdown.value;
};

// Close all menus when clicking outside
const closeAllDropdowns = () => {
  showProfileDropdown.value = false;
  handleMouseLeave();
};

onMounted(() => {
  document.addEventListener('click', closeAllDropdowns);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', closeAllDropdowns);
  window.removeEventListener('resize', handleResize);
});

const mainNavItems = [
  { path: '/superadmin/dashboard', label: 'Dashboard', icon: Home },
  { path: '/superadmin/libraries', label: 'Libraries', icon: Library },
  { path: '/superadmin/librarians', label: 'Librarians', icon: UserCheck },
  { path: '/superadmin/users', label: 'Students', icon: Users },
  { path: '/superadmin/events', label: 'Events', icon: Calendar },
];

const systemItems = [
  { path: '/superadmin/analytics', label: 'Analytics & Reports', icon: BarChart3 },
  { path: '/superadmin/support', label: 'Support & Complaints', icon: LifeBuoy },
  { path: '/superadmin/settings', label: 'System Settings', icon: Settings },
];

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Force the Super Admin sidebar to use standard font stack for sizing consistency */
aside,
aside * {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

/* Elegant solid purple-600 background */
.bg-purple-700 {
  background-color: #6903c3;
}

/* Darker contrast for menus/dropdowns */
.bg-purple-800 {
  background-color: #6903c3;
}

.text-purple-700 {
  color:#6903c3;
}

.text-purple-200 {
  color: #E9D5FF;
}

.bg-purple-950\/30 {
  background-color: rgba(59, 7, 100, 0.3);
}

/* Hide scrollbar across all browsers while keeping scroll functional */
nav::-webkit-scrollbar {
  display: none;
}
</style>
