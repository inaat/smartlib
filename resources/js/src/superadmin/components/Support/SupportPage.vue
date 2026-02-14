<template>
  <div class="p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Global Support Monitoring</h1>
      <p class="text-gray-500 text-sm">Monitor all support tickets and student-librarian interactions.</p>
    </div>
    
    <SupportSystem role="admin" />
  </div>
</template>

<script setup lang="ts">
import SupportSystem from '@/shared/components/Support/SupportSystem.vue';
</script>
