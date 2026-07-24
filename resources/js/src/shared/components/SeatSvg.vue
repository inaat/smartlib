<template>
  <svg 
    viewBox="0 0 100 100" 
    :class="['w-full h-full transition-all duration-300', rotate ? 'rotate-180' : '', highlighted ? 'text-blue-500 scale-105' : statusColor]" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Backrest -->
    <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
    
    <!-- Armrest support bars -->
    <rect x="10" y="25" width="12" height="40" rx="4" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
    <rect x="78" y="25" width="12" height="40" rx="4" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
    <rect x="12" y="30" width="8" height="30" rx="3" fill="#F8FAFC" />
    <rect x="80" y="30" width="8" height="30" rx="3" fill="#F8FAFC" />
    
    <!-- Seat Cushion -->
    <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
    
    <!-- Reflection highlighting -->
    <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  rotate?: boolean;
  highlighted?: boolean;
  status?: string;
}>(), {
  rotate: false,
  highlighted: false,
  status: 'available'
});

const statusColor = computed(() => {
  switch (props.status) {
    case 'available':       return 'text-[#29B072]'; // Green
    case 'occupied':        return 'text-[#E95252]'; // Red
    case 'free_soon':       return 'text-[#F4D339]'; // Yellow
    case 'reserved':        return 'text-[#617DFF]'; // Blue
    case 'maintenance':
    case 'disabled':        return 'text-[#9CA3AF]'; // Gray
    case 'overstay':        return 'text-[#FF9D43]'; // Orange
    case 'serious_overstay':return 'text-[#A855F7]'; // Purple
    default:                return 'text-slate-400';
  }
});
</script>
