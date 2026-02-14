<template>
  <div class="p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Support & Complaints</h1>
      <p class="text-gray-500 text-sm">Get help from our librarians or report an issue.</p>
    </div>
    
    <SupportSystem role="student" />
  </div>
</template>

<script setup lang="ts">
import SupportSystem from '@/shared/components/Support/SupportSystem.vue';
</script>
