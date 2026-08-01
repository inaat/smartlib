<template>
  <svg 
    viewBox="0 0 100 100" 
    :class="['w-full h-full transition-all duration-300 select-none', highlighted ? 'scale-105 filter drop-shadow-md' : '']" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Subtle Shadow for White Pill Badge -->
      <filter id="pillShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.15" />
      </filter>
    </defs>

    <!-- Top Chair View (Rotate: false -> Backrest at Top, Cushion & Pill at Bottom facing table) -->
    <g v-if="!rotate">
      <!-- Curved Backrest (Top) -->
      <path 
        d="M 18 8 Q 50 -2 82 8 L 76 25 Q 50 15 24 25 Z" 
        :fill="darkStatusColor" 
      />
      
      <!-- Armrests (Left & Right) -->
      <rect x="7" y="22" width="13" height="46" rx="6" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
      <rect x="80" y="22" width="13" height="46" rx="6" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
      <rect x="9" y="26" width="9" height="38" rx="4.5" fill="#F8FAFC" />
      <rect x="82" y="26" width="9" height="38" rx="4.5" fill="#F8FAFC" />
      
      <!-- Main Seat Cushion Body -->
      <rect x="20" y="22" width="60" height="56" rx="14" :fill="primaryStatusColor" />
      <rect x="23" y="25" width="54" height="20" rx="8" fill="#FFFFFF" opacity="0.15" />
      
      <!-- White Number Badge Pill (Centered over front seat cushion facing table) -->
      <rect 
        v-if="displaySeatNumber"
        x="23" y="44" width="54" height="28" rx="8" 
        fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" 
        filter="url(#pillShadow)"
      />
      
      <!-- Seat Number Text (Upright) -->
      <text 
        v-if="displaySeatNumber"
        x="50" y="64" 
        text-anchor="middle" 
        fill="#1E293B" 
        font-size="18" 
        font-weight="800" 
        font-family="'Outfit', sans-serif, system-ui"
      >
        {{ displaySeatNumber }}
      </text>
    </g>

    <!-- Bottom Chair View (Rotate: true -> Backrest at Bottom, Cushion & Pill at Top facing table) -->
    <g v-else>
      <!-- Curved Backrest (Bottom) -->
      <path 
        d="M 18 92 Q 50 102 82 92 L 76 75 Q 50 85 24 75 Z" 
        :fill="darkStatusColor" 
      />
      
      <!-- Armrests (Left & Right) -->
      <rect x="7" y="32" width="13" height="46" rx="6" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
      <rect x="80" y="32" width="13" height="46" rx="6" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
      <rect x="9" y="36" width="9" height="38" rx="4.5" fill="#F8FAFC" />
      <rect x="82" y="36" width="9" height="38" rx="4.5" fill="#F8FAFC" />
      
      <!-- Main Seat Cushion Body -->
      <rect x="20" y="22" width="60" height="56" rx="14" :fill="primaryStatusColor" />
      <rect x="23" y="53" width="54" height="20" rx="8" fill="#FFFFFF" opacity="0.15" />
      
      <!-- White Number Badge Pill (Centered over front seat cushion facing table) -->
      <rect 
        v-if="displaySeatNumber"
        x="23" y="28" width="54" height="28" rx="8" 
        fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" 
        filter="url(#pillShadow)"
      />
      
      <!-- Seat Number Text (Upright) -->
      <text 
        v-if="displaySeatNumber"
        x="50" y="48" 
        text-anchor="middle" 
        fill="#1E293B" 
        font-size="18" 
        font-weight="800" 
        font-family="'Outfit', sans-serif, system-ui"
      >
        {{ displaySeatNumber }}
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  rotate?: boolean;
  highlighted?: boolean;
  status?: string;
  seatNumber?: string | number;
}>(), {
  rotate: false,
  highlighted: false,
  status: 'available',
  seatNumber: ''
});

const displaySeatNumber = computed(() => {
  if (props.seatNumber === undefined || props.seatNumber === null || props.seatNumber === '') return '';
  const str = String(props.seatNumber);
  const parts = str.split('-');
  return parts[parts.length - 1] || str;
});

const primaryStatusColor = computed(() => {
  switch (props.status) {
    case 'available':       return '#10B981'; // Emerald
    case 'occupied':        return '#EF4444'; // Red
    case 'free_soon':       return '#F59E0B'; // Amber
    case 'reserved':        return '#3B82F6'; // Blue
    case 'maintenance':
    case 'disabled':        return '#94A3B8'; // Slate
    case 'overstay':        return '#F97316'; // Orange
    case 'serious_overstay':return '#A855F7'; // Purple
    default:                return '#94A3B8';
  }
});

const darkStatusColor = computed(() => {
  switch (props.status) {
    case 'available':       return '#047857';
    case 'occupied':        return '#B91C1C';
    case 'free_soon':       return '#B45309';
    case 'reserved':        return '#1D4ED8';
    case 'maintenance':
    case 'disabled':        return '#475569';
    case 'overstay':        return '#C2410C';
    case 'serious_overstay':return '#7E22CE';
    default:                return '#475569';
  }
});
</script>
