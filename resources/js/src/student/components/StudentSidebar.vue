<template>
  <!-- Sidebar -->
  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 flex flex-col bg-blue-600 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-x-hidden overscroll-contain',
      // Mobile: always full width sidebar, translate in/out
      'w-72',
      // Desktop overrides: sticky h-screen locks height to exact viewport
      isCollapsed ? 'lg:w-20 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden' : 'lg:w-64 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden',
      // Translate: hidden on mobile unless open, always visible on desktop
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
    style="overscroll-behavior: contain;"
  >
    <!-- Branding Header -->
    <!-- Desktop: click to toggle collapse | Mobile: shows brand only -->
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
          <!-- Logo SVG -->
          <svg viewBox="0 0 32 32" class="w-5 h-5 text-white" fill="currentColor">
            <circle cx="11" cy="16" r="4.5" />
            <circle cx="21" cy="16" r="4.5" />
            <rect x="11" y="13.5" width="10" height="5" />
          </svg>
        </div>
        <div v-if="!isCollapsed || !isDesktop" class="flex flex-col text-left">
          <h1 class="text-sm font-bold text-white tracking-tight leading-none animate-fade-in">SmartLib</h1>
          <p class="text-[9px] font-bold text-blue-200 tracking-wider uppercase mt-1 leading-none animate-fade-in">Student Portal</p>
        </div>
      </div>

      <!-- Toggle button when collapsed (Desktop) -->
      <button
        v-if="showCollapsed"
        @click.stop="$emit('toggle-collapse')"
        class="hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
      >
        <svg viewBox="0 0 32 32" class="w-5 h-5 text-white" fill="currentColor">
          <circle cx="11" cy="16" r="4.5" />
          <circle cx="21" cy="16" r="4.5" />
          <rect x="11" y="13.5" width="10" height="5" />
        </svg>
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
        'flex-1 px-2.5 py-5 space-y-5 transition-all duration-300 overflow-y-auto overflow-x-hidden overscroll-contain'
      ]"
      style="scrollbar-width: none; -ms-overflow-style: none; overscroll-behavior: contain;"
    >
      <!-- Main Menu Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          Menu
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <!-- Normal Nav Items (Before Reservations Dropdown) -->
          <template v-for="item in mainNavItems.slice(0, 3)" :key="item.path">
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
                    ? 'bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in'
                    : 'text-white hover:bg-white/10'
                ]"
              >
                <component
                  :is="item.icon"
                  :class="[
                    'w-5 h-5 transition-colors',
                    isLinkActive ? 'text-blue-600' : 'text-white/90 group-hover:text-white'
                  ]"
                />
                <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
              </div>
            </router-link>
          </template>

          <!-- Collapsible Reservations Dropdown -->
          <div class="relative">
            <!-- Dropdown trigger -->
            <div
              @click="handleReservationsToggle"
              @mouseenter="handleMouseEnter($event, 'Reservations')"
              @mouseleave="handleMouseLeave"
              :class="[
                'flex items-center transition-all duration-200 group cursor-pointer relative py-3 select-none',
                showCollapsed ? 'justify-center w-12 h-12 mx-auto my-1 rounded-xl' : 'px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm',
                isReservationsDropdownActive && showCollapsed ? 'bg-white text-blue-600 shadow-md' : '',
                isReservationsDropdownActive && !showCollapsed ? 'text-white font-semibold' : 'text-white hover:bg-white/10'
              ]"
            >
              <BookMarked
                :class="[
                  'w-5 h-5 transition-colors',
                  isReservationsDropdownActive && showCollapsed ? 'text-blue-600' : (isReservationsDropdownActive ? 'text-white' : 'text-white/90 group-hover:text-white')
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in flex-1">Reservations</span>
              <span v-if="!showCollapsed" class="ml-auto flex items-center animate-fade-in">
                <ChevronDown v-if="isReservationsExpanded" class="w-3.5 h-3.5 text-white font-bold" />
                <ChevronLeft v-else class="w-3.5 h-3.5 text-white/80 group-hover:text-white" />
              </span>
            </div>

            <!-- Floating Submenu Popover (desktop collapsed only) -->
            <Teleport to="body">
              <div
                v-if="showReservationsPopover && showCollapsed"
                class="fixed z-[9999] animate-fade-in w-48 bg-blue-600 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-1 text-left"
                :style="{
                  top: `${reservationsPopoverTop}px`,
                  left: '80px'
                }"
                @click.stop
              >
                <div class="px-3 py-1.5 text-[10px] font-semibold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1">
                  Reservations
                </div>
                <router-link
                  v-for="subItem in reservationsSubItems"
                  :key="subItem.path"
                  :to="subItem.path"
                  @click="showReservationsPopover = false; $emit('close')"
                  v-slot="{ isActive: isSubActive }"
                >
                  <div 
                    :class="[
                      'flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-colors text-xs font-semibold cursor-pointer',
                      isSubActive
                        ? 'text-blue-600 bg-white shadow-sm'
                        : 'text-white hover:bg-white/10'
                    ]"
                  >
                    <component :is="subItem.icon" class="w-4 h-4" />
                    <span>{{ subItem.label }}</span>
                  </div>
                </router-link>
              </div>
            </Teleport>

            <!-- Expanded Nested Submenu (Tree line design) - smooth max-height transition -->
            <div
              :class="[
                'reservations-submenu overflow-hidden transition-all duration-300 ease-in-out',
                isReservationsExpanded && !showCollapsed ? 'submenu-open' : 'submenu-closed'
              ]"
            >
              <div class="relative ml-6 mt-1 space-y-1">
                <div
                  v-for="(subItem, index) in reservationsSubItems"
                  :key="subItem.path"
                  class="relative pl-5"
                >
                  <!-- Tree connecting line vertical -->
                  <div 
                    :class="[
                      'absolute left-2.5 w-px bg-white/20',
                      index === reservationsSubItems.length - 1 ? 'top-0 h-1/2' : 'top-0 bottom-0'
                    ]"
                  ></div>
                  
                  <!-- Tree connecting line horizontal -->
                  <div class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-px bg-white/20"></div>
                  
                  <router-link
                    :to="subItem.path"
                    @click="$emit('close')"
                    v-slot="{ isActive: isSubActive }"
                  >
                    <div 
                      :class="[
                        'flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all text-xs font-semibold cursor-pointer',
                        isSubActive
                          ? 'text-blue-600 bg-white shadow-sm'
                          : 'text-white hover:bg-white/10'
                      ]"
                    >
                      <component 
                        :is="subItem.icon" 
                        :class="[
                          'w-4 h-4', 
                          isSubActive ? 'text-blue-600' : 'text-white/80 group-hover:text-white'
                        ]" 
                      />
                      <span>{{ subItem.label }}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Normal Nav Items (After Reservations Dropdown) -->
          <template v-for="item in mainNavItems.slice(3)" :key="item.path">
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
                    ? 'bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in'
                    : 'text-white hover:bg-white/10'
                ]"
              >
                <component
                  :is="item.icon"
                  :class="[
                    'w-5 h-5 transition-colors',
                    isLinkActive ? 'text-blue-600' : 'text-white/90 group-hover:text-white'
                  ]"
                />
                <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
              </div>
            </router-link>
          </template>
        </div>
      </div>

      <!-- Quick Access Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          Others
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <router-link
            v-for="item in quickAccessItems"
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
                  ? 'bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in'
                  : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-colors',
                  isLinkActive ? 'text-blue-600' : 'text-white/90 group-hover:text-white'
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Footer Area (User Profile Only) -->
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
            <span class="text-[10px] text-blue-200 truncate block mt-0.5">{{ user?.email }}</span>
          </div>

          <!-- Profile More Options button (Expanded Only) -->
          <div v-if="!showCollapsed" class="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <MoreVertical class="w-4 h-4 text-white/80 hover:text-white" />
          </div>
        </div>

        <!-- Profile Dropdown Menu (Expanded / Mobile state) -->
        <div
          v-if="showProfileDropdown && !showCollapsed"
          class="absolute bottom-14 left-0 right-0 bg-blue-600 border border-slate-400 rounded-2xl shadow-xl p-1.5 z-[100] flex flex-col space-y-0.5 animate-fade-in text-left"
        >
          <router-link
            to="/student/profile"
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
            class="fixed z-[9999] animate-fade-in w-48 bg-blue-600 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-0.5 text-left"
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
              to="/student/profile"
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
  BookOpen, 
  Home, 
  Calendar,
  MapPin,
  LogOut,
  X,
  ChevronLeft,
  ChevronDown,
  CreditCard,
  BarChart3,
  BookMarked,
  LifeBuoy,
  CalendarCheck,
  Armchair,
  Clock,
  MoreVertical,
  User
} from 'lucide-vue-next';

import { useSwal } from '@/shared/composables/useSwal';

const props = defineProps<{
  isOpen: boolean;
  isCollapsed: boolean;
}>();

const emit = defineEmits(['close', 'toggle-collapse']);

const route = useRoute();
const { logout: authLogout, user } = useAuth();
const { showConfirm } = useSwal();

// Track if we are on desktop (lg breakpoint = 1024px)
const isDesktop = ref(window.innerWidth >= 1024);
const handleResize = () => { isDesktop.value = window.innerWidth >= 1024; };

// showCollapsed is true only on desktop when sidebar is in collapsed state
const showCollapsed = computed(() => props.isCollapsed && isDesktop.value);

const showReservationsPopover = ref(false);

// Profile Dropdown state
const showProfileDropdown = ref(false);

// Teleported elements positioning state
const activeTooltipText = ref('');
const activeTooltipTop = ref(0);
const showGlobalTooltip = ref(false);
const reservationsPopoverTop = ref(0);
const profileDropdownBottom = ref(0);

const handleMouseEnter = (event: MouseEvent, label: string) => {
  if (!showCollapsed.value) return;
  if (label === 'Reservations' && showReservationsPopover.value) return;
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

// Brand header click: only toggle collapse on desktop
const handleBrandClick = () => {
  if (isDesktop.value) {
    emit('toggle-collapse');
  }
};

// Toggle dropdown expanded state or handle popover toggle (on Click)
const isReservationsExpanded = ref(false);
const handleReservationsToggle = (event: Event) => {
  event.stopPropagation();
  if (showCollapsed.value) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    reservationsPopoverTop.value = rect.top;
    showReservationsPopover.value = !showReservationsPopover.value;
    if (showReservationsPopover.value) {
      showGlobalTooltip.value = false;
    }
  } else {
    isReservationsExpanded.value = !isReservationsExpanded.value;
  }
};

// Auto-close dropdowns smoothly when sidebar collapses
watch(showCollapsed, (collapsed) => {
  if (collapsed) {
    isReservationsExpanded.value = false;
    showProfileDropdown.value = false;
    showReservationsPopover.value = false;
  }
});

const isReservationsDropdownActive = computed(() => {
  return route.path.includes('/student/my-bookings') || route.path.includes('/student/my-reservations');
});

// User initials generator for default avatar
const userInitials = computed(() => {
  if (!user.value?.name) return 'ST';
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
  showReservationsPopover.value = false;
  handleMouseLeave();
};

onMounted(() => {
  if (route.path.includes('/student/my-bookings') || route.path.includes('/student/my-reservations')) {
    isReservationsExpanded.value = true;
  }
  document.addEventListener('click', closeAllDropdowns);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', closeAllDropdowns);
  window.removeEventListener('resize', handleResize);
});

// Exclude Profile, Bookings, and Book Reservations from mainNavItems list
const mainNavItems = [
  { path: '/student/dashboard', label: 'Dashboard', icon: Home, exact: true },
  { path: '/student/libraries', label: 'Find Library', icon: MapPin },
  { path: '/student/books', label: 'Browse Books', icon: BookOpen },
  { path: '/student/events', label: 'Events & Seminars', icon: Calendar },
  { path: '/student/my-queue', label: 'Waitlist', icon: Clock },
  
];

const reservationsSubItems = [
  { path: '/student/my-bookings', label: 'Seat Reservations', icon: Armchair },
  { path: '/student/my-reservations', label: 'Book Reservations', icon: BookMarked },
];

const quickAccessItems = [
  { path: '/student/attendance', label: 'My Attendance', icon: CalendarCheck },
  { path: '/student/analytics', label: 'My Analytics', icon: BarChart3 },
  { path: '/student/subscription', label: 'Subscription', icon: CreditCard },
  { path: '/student/support', label: 'Support & Complaints', icon: LifeBuoy },
];

// Utility to generate profile image path
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

/* Smooth submenu expand/collapse via max-height + opacity */
.reservations-submenu {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}
.submenu-open {
  max-height: 200px; /* enough for 2-3 sub-items */
  opacity: 1;
}
.submenu-closed {
  max-height: 0;
  opacity: 0;
}

/* Force the Student sidebar to use the same default system sans-serif font stack as the Librarian sidebar for exact size alignment */
aside,
aside * {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

/* Vibrant Blue background replacement for the primary color */
.bg-blue-600 {
  background-color: #0061FF;
}

.bg-blue-dark {
  background-color: #004ecc;
}

.text-red-655 {
  color: #ef4444;
}

/* Hide scrollbar across all browsers while keeping scroll functional */
nav::-webkit-scrollbar {
  display: none;
}
</style>
