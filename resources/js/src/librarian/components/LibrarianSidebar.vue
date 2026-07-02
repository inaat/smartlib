<template>
  <!-- Sidebar -->
  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 flex flex-col bg-emerald-700 border-r border-emerald-800/40 shadow-2xl transition-all duration-300 ease-in-out',
      // Mobile: always full width sidebar, translate in/out
      'w-72',
      // Desktop overrides: sticky and width depends on collapsed state
      isCollapsed ? 'lg:w-20 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden' : 'lg:w-64 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden',
      // Translate: hidden on mobile unless open, always visible on desktop
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
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
          <Library class="w-5 h-5 text-white" />
        </div>
        <div v-if="!isCollapsed || !isDesktop" class="flex flex-col text-left">
          <h1 class="text-sm font-extrabold text-white tracking-tight leading-none animate-fade-in">SmartLib</h1>
          <p class="text-[9px] font-bold text-emerald-200 tracking-wider uppercase mt-1 leading-none animate-fade-in">Librarian Portal</p>
        </div>
      </div>

      <!-- Toggle button when collapsed (Desktop) -->
      <button
        v-if="showCollapsed"
        @click.stop="$emit('toggle-collapse')"
        class="hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
      >
        <Library class="w-5 h-5 text-white" />
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
      <!-- Main Menu Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          Main Menu
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <router-link
            v-for="item in mainNavItems"
            :key="item.path"
            @click="$emit('close')"
            :to="item.path"
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
                  ? 'bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in'
                  : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-colors',
                  isLinkActive ? 'text-emerald-700' : 'text-white/90 group-hover:text-white'
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>

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
          <!-- Collapsible Space Management Dropdown -->
          <div class="relative">
            <!-- Dropdown trigger -->
            <div
              @click="handleSpaceManagementToggle"
              @mouseenter="handleMouseEnter($event, 'Space Management')"
              @mouseleave="handleMouseLeave"
              :class="[
                'flex items-center transition-all duration-200 group cursor-pointer relative py-3 select-none',
                showCollapsed ? 'justify-center w-12 h-12 mx-auto my-1 rounded-xl' : 'px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm',
                isSpaceManagementActive && showCollapsed ? 'bg-white text-emerald-700 shadow-md' : '',
                isSpaceManagementActive && !showCollapsed ? 'text-white font-semibold' : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="Layers"
                :class="[
                  'w-5 h-5 transition-colors',
                  isSpaceManagementActive && showCollapsed ? 'text-emerald-700' : (isSpaceManagementActive ? 'text-white' : 'text-white/90 group-hover:text-white')
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in flex-1">Space Management</span>
              <span v-if="!showCollapsed" class="ml-auto flex items-center animate-fade-in">
                <ChevronDown v-if="spaceManagementOpen" class="w-3.5 h-3.5 text-white font-bold" />
                <ChevronLeft v-else class="w-3.5 h-3.5 text-white/80 group-hover:text-white" />
              </span>
            </div>

            <!-- Floating Submenu Popover (desktop collapsed only) -->
            <Teleport to="body">
              <div
                v-if="showSpaceManagementPopover && showCollapsed"
                class="fixed z-[9999] animate-fade-in w-48 bg-emerald-700 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-1 text-left"
                :style="{
                  top: `${spaceManagementPopoverTop}px`,
                  left: '80px'
                }"
                @click.stop
              >
                <div class="px-3 py-1.5 text-[10px] font-semibold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1">
                  Space Management
                </div>
                <router-link
                  v-for="subItem in spaceManagementItems"
                  :key="subItem.path"
                  :to="subItem.path"
                  @click="showSpaceManagementPopover = false; $emit('close')"
                  v-slot="{ isActive: isSubActive }"
                >
                  <div 
                    :class="[
                      'flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-colors text-xs font-semibold cursor-pointer',
                      isSubActive
                        ? 'text-emerald-700 bg-white shadow-sm'
                        : 'text-white hover:bg-white/10'
                    ]"
                  >
                    <component :is="subItem.icon" class="w-4 h-4" />
                    <span>{{ subItem.label }}</span>
                  </div>
                </router-link>
              </div>
            </Teleport>

            <!-- Expanded Nested Submenu (Tree line design) -->
            <transition name="slide-fade">
              <div
                v-if="spaceManagementOpen && !showCollapsed"
                class="relative ml-6 mt-1 space-y-1 animate-fade-in"
              >
                <div
                  v-for="(subItem, index) in spaceManagementItems"
                  :key="subItem.path"
                  class="relative pl-5 animate-fade-in"
                >
                  <!-- Tree connecting line vertical -->
                  <div 
                    :class="[
                      'absolute left-2.5 w-px bg-white/20',
                      index === spaceManagementItems.length - 1 ? 'top-0 h-1/2' : 'top-0 bottom-0'
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
                          ? 'text-emerald-700 bg-white shadow-sm'
                          : 'text-white hover:bg-white/10'
                      ]"
                    >
                      <component 
                        :is="subItem.icon" 
                        :class="[
                          'w-4 h-4', 
                          isSubActive ? 'text-emerald-700' : 'text-white/80 group-hover:text-white'
                        ]" 
                      />
                      <span>{{ subItem.label }}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <!-- Other Management Items -->
          <router-link
            v-for="item in managementItems"
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
                  ? 'bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in'
                  : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-colors',
                  isLinkActive ? 'text-emerald-700' : 'text-white/90 group-hover:text-white'
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Analytics & Reports Section -->
      <div>
        <h3
          v-if="!showCollapsed"
          class="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
        >
          Analytics & Reports
        </h3>
        <div v-else class="h-px bg-white/40 my-3 mx-1"></div>
        
        <div class="space-y-1">
          <router-link
            v-for="item in reportItems"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            v-slot="{ isActive: isLinkActive }"
          >
            <div
              @mouseenter="handleMouseEnter($event, item.label)"
              @mouseleave="handleMouseLeave"
              :class="[
                'flex items-center transition-all duration-205 group cursor-pointer relative',
                showCollapsed
                  ? 'justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in'
                  : 'px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm',
                isLinkActive
                  ? 'bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in'
                  : 'text-white hover:bg-white/10'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-colors',
                  isLinkActive ? 'text-emerald-700' : 'text-white/90 group-hover:text-white'
                ]"
              />
              <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">{{ item.label }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Footer Area (Sign Out Button Only) -->
    <div class="p-4 border-t border-white/10 bg-transparent flex-shrink-0 flex flex-col justify-end">
      <button
        @click="handleLogout"
        @mouseenter="handleMouseEnter($event, 'Sign Out')"
        @mouseleave="handleMouseLeave"
        :class="[
          'flex items-center transition-all duration-205 group cursor-pointer w-full text-left',
          showCollapsed
            ? 'justify-center w-12 h-12 mx-auto rounded-xl text-red-200 hover:bg-red-950/30'
            : 'px-4 py-3 mx-3 text-white hover:bg-white/10 font-semibold text-sm rounded-xl'
        ]"
      >
        <LogOut
          :class="[
            'w-5 h-5 transition-colors',
            showCollapsed ? 'text-red-200' : 'text-white/90 group-hover:text-white mr-3'
          ]"
        />
        <span v-if="!showCollapsed" class="tracking-wide animate-fade-in">Sign Out</span>
      </button>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { 
  BookOpen, 
  Library,
  Home, 
  Users,
  Calendar,
  X,
  ChevronLeft,
  ChevronDown,
  BarChart3,
  BookMarked,
  UserCheck,
  Clock,
  Building2,
  LayoutGrid,
  LifeBuoy,
  Layers,
  LogOut
} from 'lucide-vue-next';

import { useSwal } from '@/shared/composables/useSwal';

const props = defineProps<{
  isOpen: boolean;
  isCollapsed: boolean;
}>();

const emit = defineEmits(['close', 'toggle-collapse']);

const route = useRoute();
const { logout: authLogout } = useAuth();
const { showConfirm } = useSwal();

// Track if we are on desktop (lg breakpoint = 1024px)
const isDesktop = ref(window.innerWidth >= 1024);
const handleResize = () => { isDesktop.value = window.innerWidth >= 1024; };

// showCollapsed is true only on desktop when sidebar is in collapsed state
const showCollapsed = computed(() => props.isCollapsed && isDesktop.value);

const showSpaceManagementPopover = ref(false);

// Teleported elements positioning state
const activeTooltipText = ref('');
const activeTooltipTop = ref(0);
const showGlobalTooltip = ref(false);
const spaceManagementPopoverTop = ref(0);

const handleMouseEnter = (event: MouseEvent, label: string) => {
  if (!showCollapsed.value) return;
  if (label === 'Space Management' && showSpaceManagementPopover.value) return;
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

// Toggle dropdown expanded state or handle popover toggle
const spaceManagementOpen = ref(false);
const handleSpaceManagementToggle = (event: Event) => {
  event.stopPropagation();
  if (showCollapsed.value) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    spaceManagementPopoverTop.value = rect.top;
    showSpaceManagementPopover.value = !showSpaceManagementPopover.value;
    if (showSpaceManagementPopover.value) {
      showGlobalTooltip.value = false;
    }
  } else {
    spaceManagementOpen.value = !spaceManagementOpen.value;
  }
};

const isSpaceManagementActive = computed(() => {
  return ['/librarian/floors', '/librarian/sections', '/librarian/seats'].some(path => route.path.includes(path));
});

// Watch to sync dropdown expand with active state on initial load or route change
watch(isSpaceManagementActive, (active) => {
  if (active && !showCollapsed.value) {
    spaceManagementOpen.value = true;
  }
}, { immediate: true });

// Close all menus when clicking outside
const closeAllDropdowns = () => {
  showSpaceManagementPopover.value = false;
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
  { path: '/librarian/dashboard', label: 'Dashboard', icon: Home, exact: true },
  { path: '/librarian/bookings', label: 'Seat Bookings', icon: Calendar },
  { path: '/librarian/reservations', label: 'Reserved Books', icon: BookOpen },
  { path: '/librarian/library', label: 'Library Info', icon: Building2 },
];

const managementItems = [
  { path: '/librarian/students', label: 'Students', icon: Users },
  { path: '/librarian/books', label: 'Book Inventory', icon: BookMarked },
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
  { path: '/librarian/analytics', label: 'Analytics & Reports', icon: BarChart3 },
];
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

/* Slide Fade Transition for Sub-menu options */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}

/* Hide scrollbar across all browsers while keeping scroll functional */
nav::-webkit-scrollbar {
  display: none;
}
</style>
