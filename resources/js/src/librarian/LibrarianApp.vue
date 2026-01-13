<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <LibrarianSidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    
    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen lg:ml-0">
      <!-- Topbar -->
      <LibrarianTopbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LibrarianSidebar from './components/LibrarianSidebar.vue';
import LibrarianTopbar from './components/LibrarianTopbar.vue';

const sidebarOpen = ref(false);
</script>

