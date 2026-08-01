<template>
  <div v-if="!user">
    <slot />
  </div>
  <div v-else class="h-screen bg-gray-50 flex student-portal overflow-hidden">
    <!-- Sidebar -->
    <StudentSidebar 
      :is-open="sidebarOpen" 
      :is-collapsed="sidebarCollapsed"
      @close="sidebarOpen = false" 
      @toggle-collapse="toggleCollapse"
    />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-0 overflow-hidden">
      <!-- Top Bar -->
      <StudentTopbar @menu-click="sidebarOpen = true" />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-5">
        <slot />
      </main>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div 
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
      @click="sidebarOpen = false"
    />

    <!-- Global Extension Modal -->
    <GlobalExtensionModal />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { useGeolocation } from '@/shared/composables/useGeolocation';
import StudentSidebar from './StudentSidebar.vue';
import StudentTopbar from './StudentTopbar.vue';
import GlobalExtensionModal from './GlobalExtensionModal.vue';

const { user } = useAuth();
const { locationGranted, requestLocation } = useGeolocation();
const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);

const toggleCollapse = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

const lockBody = () => {
  document.documentElement.style.margin = '0';
  document.documentElement.style.padding = '0';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.height = '100%';
  document.documentElement.style.width = '100%';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
  document.body.style.width = '100%';
};

const unlockBody = () => {
  document.documentElement.style.margin = '';
  document.documentElement.style.padding = '';
  document.documentElement.style.overflow = '';
  document.documentElement.style.height = '';
  document.documentElement.style.width = '';
  document.body.style.margin = '';
  document.body.style.padding = '';
  document.body.style.overflow = '';
  document.body.style.height = '';
  document.body.style.width = '';
};

onMounted(() => {
  lockBody();
  // Request location permission on first app load
  if (!locationGranted.value) {
    requestLocation();
  }
});

onUnmounted(() => {
  unlockBody();
});
</script>
