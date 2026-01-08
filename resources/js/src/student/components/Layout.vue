<template>
  <div v-if="!user">
    <slot />
  </div>
  <div v-else class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <StudentSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Bar -->
      <StudentTopbar @menu-click="sidebarOpen = true" />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
        <slot />
      </main>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div 
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
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
</script>
