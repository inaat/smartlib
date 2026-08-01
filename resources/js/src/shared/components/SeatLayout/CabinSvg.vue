<template>
  <div 
    @click="$emit('click')"
    :class="[
      'relative w-[68px] h-[88px] flex flex-col items-center justify-between cursor-pointer select-none transition-all duration-200 group',
      highlighted 
        ? 'scale-105 z-20' 
        : 'hover:scale-105'
    ]"
  >
    <!-- Status LED Top Dot (Turns Blue when Selected) -->
    <div class="absolute top-0 right-0 flex items-center gap-1 z-10">
      <span 
        class="w-1.5 h-1.5 rounded-full border border-white shadow-xs transition-colors duration-200" 
        :style="{ 
          backgroundColor: highlighted ? '#2563eb' : statusTheme.hex, 
          boxShadow: highlighted ? '0 0 6px #2563eb' : ('0 0 6px ' + statusTheme.hex) 
        }"
      ></span>
    </div>

    <!-- Front Elevation View Study Cabin Graphic (Card-less Pure SVG) -->
    <div class="w-full h-[72px] relative flex items-center justify-center">
      <svg viewBox="0 0 100 110" class="w-full h-full drop-shadow-xs transition-all" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Wall Slats Back Wall Pattern -->
          <pattern :id="'frontSlats-' + componentId" width="8" height="20" patternUnits="userSpaceOnUse">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,2" />
          </pattern>

          <!-- Warm Light Glow Projection in Front View -->
          <radialGradient :id="'frontLightGlow-' + componentId" cx="50%" cy="15%" r="70%">
            <stop offset="0%" :stop-color="highlighted ? '#3b82f6' : statusTheme.hex" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </radialGradient>

          <!-- Desk Surface Gradient -->
          <linearGradient :id="'frontDeskGrad-' + componentId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#e2e8f0" />
          </linearGradient>

          <!-- Left & Right Partition Wall Front Elevation Gradients -->
          <linearGradient :id="'leftSideWall-' + componentId" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#94a3b8" />
            <stop offset="100%" stop-color="#cbd5e1" />
          </linearGradient>

          <linearGradient :id="'rightSideWall-' + componentId" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#cbd5e1" />
            <stop offset="100%" stop-color="#94a3b8" />
          </linearGradient>
        </defs>

        <!-- Ground Floor Shadow -->
        <ellipse cx="50" cy="102" rx="46" ry="4" fill="#0f172a" opacity="0.08" />

        <!-- 1. Left Vertical Partition Wall (Turns Blue when Selected) -->
        <rect 
          x="2" y="4" width="6" height="96" rx="1" 
          :fill="highlighted ? '#3b82f6' : ('url(#leftSideWall-' + componentId + ')') " 
          :stroke="highlighted ? '#1d4ed8' : '#64748b'" 
          :stroke-width="highlighted ? 1.5 : 0.8" 
        />

        <!-- 2. Right Vertical Partition Wall (Turns Blue when Selected) -->
        <rect 
          x="92" y="4" width="6" height="96" rx="1" 
          :fill="highlighted ? '#3b82f6' : ('url(#rightSideWall-' + componentId + ')') " 
          :stroke="highlighted ? '#1d4ed8' : '#64748b'" 
          :stroke-width="highlighted ? 1.5 : 0.8" 
        />

        <!-- 3. Back Panel Wall between partitions -->
        <rect x="8" y="4" width="84" height="96" fill="#faf8f6" :stroke="highlighted ? '#93c5fd' : '#cbd5e1'" stroke-width="0.6" />
        <rect x="8" y="4" width="84" height="96" :fill="'url(#frontSlats-' + componentId + ')'" opacity="0.35" />

        <!-- Light Glow Beam Projection -->
        <rect x="8" y="4" width="84" height="54" :fill="'url(#frontLightGlow-' + componentId + ')'" />

        <!-- Overhead LED Light Strip / Lamp Bar -->
        <rect x="25" y="8" width="50" height="4" rx="2" fill="#334155" />
        <rect x="28" y="9" width="44" height="2" rx="1" :fill="highlighted ? '#2563eb' : statusTheme.hex" />

        <!-- Overhead Shelf -->
        <rect x="8" y="20" width="84" height="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8" />

        <!-- 4. Study Desk Top Surface -->
        <rect x="6" y="50" width="88" height="6" rx="1" :fill="'url(#frontDeskGrad-' + componentId + ')'" stroke="#64748b" stroke-width="1" />
        <line x1="6" y1="56" x2="94" y2="56" stroke="#475569" stroke-width="1.2" />

        <!-- Laptop / Notebook on Desk -->
        <rect x="40" y="41" width="20" height="9" rx="1" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8" />
        <line x1="38" y1="50" x2="62" y2="50" stroke="#64748b" stroke-width="1" />

        <!-- Power Socket Plate on Back Wall -->
        <rect x="14" y="41" width="12" height="6" rx="1" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" />
        <circle cx="18" cy="44" r="0.8" fill="#475569" />
        <circle cx="22" cy="44" r="0.8" :fill="highlighted ? '#2563eb' : statusTheme.hex" />

        <!-- 5. Simple Study Chair (Front Elevation View - Under Desk, No Curved Handles) -->
        <g>
          <!-- Chair Legs -->
          <line x1="34" y1="78" x2="34" y2="98" stroke="#475569" stroke-width="2" stroke-linecap="round" />
          <line x1="66" y1="78" x2="66" y2="98" stroke="#475569" stroke-width="2" stroke-linecap="round" />
          
          <!-- Chair Seat Cushion -->
          <rect x="26" y="74" width="48" height="6" rx="2" :fill="statusTheme.chairBg" stroke="#475569" stroke-width="1.2" />
          
          <!-- Chair Backrest -->
          <rect x="30" y="59" width="40" height="15" rx="3" :fill="highlighted ? '#2563eb' : statusTheme.hex" stroke="#334155" stroke-width="1.2" />
          <!-- Backrest Support Posts -->
          <line x1="38" y1="74" x2="38" y2="78" stroke="#475569" stroke-width="1.5" />
          <line x1="62" y1="74" x2="62" y2="78" stroke="#475569" stroke-width="1.5" />
        </g>
      </svg>
    </div>

    <!-- Cabin Code Label Tag -->
    <div class="text-center w-full">
      <span :class="['block text-[9.5px] font-medium tracking-tight leading-none mb-0.5 truncate', highlighted ? 'text-blue-600 font-extrabold' : 'text-slate-700']">
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  number: string;
  status: string;
  highlighted?: boolean;
}>(), {
  highlighted: false
});

defineEmits<{
  (e: 'click'): void;
}>();

const componentId = Math.random().toString(36).substring(2, 9);

const statusTheme = computed(() => {
  switch (props.status) {
    case 'available':
      return { hex: '#22c55e', chairBg: '#f0fdf4', label: 'Available' };
    case 'occupied':
      return { hex: '#ef4444', chairBg: '#fef2f2', label: 'Occupied' };
    case 'free_soon':
      return { hex: '#eab308', chairBg: '#fefce8', label: 'Free Soon' };
    case 'reserved':
      return { hex: '#3b82f6', chairBg: '#eff6ff', label: 'Reserved' };
    case 'maintenance':
      return { hex: '#64748b', chairBg: '#f1f5f9', label: 'Maintenance' };
    case 'overstay':
      return { hex: '#f97316', chairBg: '#fff7ed', label: 'Overstay' };
    case 'serious_overstay':
      return { hex: '#a855f7', chairBg: '#faf5ff', label: 'Serious Overstay' };
    default:
      return { hex: '#22c55e', chairBg: '#f0fdf4', label: 'Available' };
  }
});
</script>
