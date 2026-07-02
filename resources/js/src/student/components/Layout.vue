<template>
  <div v-if="!user">
    <slot />
  </div>
  <div v-else class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <StudentSidebar 
      :is-open="sidebarOpen" 
      :is-collapsed="sidebarCollapsed"
      @close="sidebarOpen = false" 
      @toggle-collapse="toggleCollapse"
    />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen lg:ml-0">
      <!-- Top Bar -->
      <StudentTopbar @menu-click="sidebarOpen = true" />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto bg-gray-50 p-5">
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
import { ref } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import StudentSidebar from './StudentSidebar.vue';
import StudentTopbar from './StudentTopbar.vue';
import GlobalExtensionModal from './GlobalExtensionModal.vue';

const { user } = useAuth();
const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);

const toggleCollapse = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};
</script>
