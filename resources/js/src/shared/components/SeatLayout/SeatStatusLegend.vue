<template>
  <div class="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-2xl px-4 py-2 flex flex-wrap items-center justify-center gap-4.5 shadow-2xs">
    <div 
      v-for="item in legendItems" 
      :key="item.label" 
      class="flex items-center space-x-2 select-none"
    >
      <!-- Premium Glowing Colored Dot -->
      <span 
        class="w-2.5 h-2.5 rounded-full transition-shadow duration-300"
        :style="{ 
          backgroundColor: item.color, 
          boxShadow: '0 0 5px ' + item.color + '80'
        }"
      ></span>
      <span class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const legendItems = [
  { label: 'Available', color: '#29B072' },
  { label: 'Occupied', color: '#E95252' },
  { label: 'Free Soon', color: '#F4D339' },
  { label: 'Reserved', color: '#617DFF' },
  { label: 'Overstay', color: '#FF9D43' },
  { label: 'Serious Overstay', color: '#A855F7' },
  { label: 'Maintenance', color: '#9CA3AF' },
];
</script>
