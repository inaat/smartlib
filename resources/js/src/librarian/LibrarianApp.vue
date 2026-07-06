<template>
  <div class="h-screen bg-gray-50 flex librarian-portal overflow-hidden">
    <!-- Sidebar -->
    <LibrarianSidebar
      :isOpen="sidebarOpen"
      :isCollapsed="sidebarCollapsed"
      @close="sidebarOpen = false"
      @toggle-collapse="toggleCollapse"
    />
    
    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-0 overflow-hidden lg:ml-0">
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
import { ref, onMounted, onUnmounted } from 'vue';
import LibrarianSidebar from './components/LibrarianSidebar.vue';
import LibrarianTopbar from './components/LibrarianTopbar.vue';

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
});

onUnmounted(() => {
  unlockBody();
});
</script>

