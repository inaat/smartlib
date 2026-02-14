<template>
  <div class="p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Student Support Tickets</h1>
      <p class="text-gray-500 text-sm">Respond to student inquiries and resolve library issues.</p>
    </div>
    
    <SupportSystem role="librarian" />
  </div>
</template>

<script setup lang="ts">
import SupportSystem from '@/shared/components/Support/SupportSystem.vue';
</script>
