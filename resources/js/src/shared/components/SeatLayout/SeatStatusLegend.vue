<template>
  <div class="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl px-6 py-4 flex flex-wrap items-center justify-center gap-6 shadow-sm">
    <div 
      v-for="item in legendItems" 
      :key="item.label" 
      class="flex items-center space-x-2 select-none"
    >
      <!-- Premium Glowing Colored Dot -->
      <span 
        class="w-3 h-3 rounded-full transition-shadow duration-300"
        :style="{ 
          backgroundColor: item.color, 
          boxShadow: '0 0 6px ' + item.color + '80'
        }"
      ></span>
      <span class="text-xs font-bold text-slate-650 tracking-tight">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const legendItems = [
  { label: 'Available', color: '#22C55E' },
  { label: 'Occupied', color: '#EF4444' },
  { label: 'Free Soon', color: '#EAB308' },
  { label: 'Reserved', color: '#3B82F6' },
  { label: 'Overstay', color: '#F97316' },
  { label: 'Serious Overstay', color: '#A855F7' },
  { label: 'Maintenance', color: '#6B7280' },
];
</script>
