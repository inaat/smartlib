<template>
  <div v-if="!user">
    <slot />
  </div>
  <div v-else class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <SuperAdminSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Bar -->
      <SuperAdminTopbar @menu-click="sidebarOpen = true" />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-8">
        <slot />
      </main>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div 
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
      @click="sidebarOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import SuperAdminSidebar from './SuperAdminSidebar.vue';
import SuperAdminTopbar from './SuperAdminTopbar.vue';

const { user, fetchSettings } = useAuth();
const sidebarOpen = ref(false);

onMounted(() => {
  fetchSettings();
});
</script>
