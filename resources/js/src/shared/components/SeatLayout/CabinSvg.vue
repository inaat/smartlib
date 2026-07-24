<template>
  <div 
    @click="$emit('click')"
    :class="[
      'relative w-32 h-36 rounded-2.5xl border transition-all duration-300 flex flex-col p-2.5 select-none cursor-pointer',
      highlighted 
        ? 'border-emerald-600 bg-emerald-50/40 shadow-lg shadow-emerald-500/10 scale-102 ring-4 ring-emerald-500/10' 
        : 'border-slate-200 bg-white hover:border-slate-350 hover:shadow-md hover:-translate-y-0.5'
    ]"
  >
    <!-- Premium Glowing Status LED Bar at the top of the cabin -->
    <div 
      class="absolute top-0 inset-x-6 h-1.5 rounded-b-full transition-colors duration-300"
      :style="{ backgroundColor: statusColor.hex, boxShadow: '0 2px 8px ' + statusColor.hex }"
    ></div>

    <!-- Cabin Title / Number -->
    <div class="flex items-center justify-between mt-1">
      <div>
        <span class="text-[10.5px] font-bold uppercase text-slate-800 tracking-tight leading-none block">
          Cabin {{ number }}
        </span>
        <span class="text-[7.5px] font-bold uppercase tracking-wider block mt-1 transition-colors duration-300" :style="{ color: statusColor.hex }">
          {{ statusLabel }}
        </span>
      </div>
      <!-- Small Status LED Dot -->
      <span class="w-2 h-2 rounded-full border border-white" :style="{ backgroundColor: statusColor.hex }"></span>
    </div>

    <!-- Mini Architectural Room Blueprint/Illustration -->
    <div class="flex-1 my-2 bg-slate-50/50 rounded-xl border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
      <!-- Desk Blueprint -->
      <div class="w-16 h-2.5 bg-slate-200 border border-slate-300 rounded-sm absolute top-2"></div>
      <!-- Mini Chair blueprint -->
      <div class="w-7 h-7 absolute bottom-2 flex items-center justify-center opacity-70">
        <svg viewBox="0 0 100 100" class="w-full h-full text-slate-400" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="40" rx="8" fill="currentColor" />
          <rect x="35" y="65" width="30" height="10" rx="3" fill="currentColor" />
        </svg>
      </div>
      <!-- Glass wall aesthetic lines -->
      <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20"></div>
    </div>

    <!-- Cabin Amenities/Features -->
    <div class="flex items-center justify-between border-t border-slate-100 pt-2">
      <div class="flex items-center gap-1">
        <Zap 
          v-if="features?.power_outlet !== false && socketCount > 0" 
          class="w-3 h-3 text-slate-400" 
          title="Power Outlet" 
        />
        <Monitor 
          v-if="features?.computer" 
          class="w-3 h-3 text-slate-400" 
          title="Computer Available" 
        />
        <Wind 
          v-if="features?.ac" 
          class="w-3 h-3 text-slate-400" 
          title="Air Conditioned" 
        />
        <Wifi 
          v-if="features?.wifi !== false" 
          class="w-3 h-3 text-slate-400" 
          title="High Speed WiFi" 
        />
      </div>
      <span class="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">
        Private
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Zap, Monitor, Wind, Wifi } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  number: string;
  status: string;
  features?: {
    power_outlet?: boolean;
    computer?: boolean;
    ac?: boolean;
    wifi?: boolean;
    [key: string]: any;
  };
  socketCount?: number;
  highlighted?: boolean;
}>(), {
  features: () => ({ power_outlet: true, computer: false, ac: true, wifi: true }),
  socketCount: 1,
  highlighted: false
});

defineEmits<{
  (e: 'click'): void;
}>();

const statusLabel = computed(() => {
  switch (props.status) {
    case 'available': return 'Available';
    case 'occupied': return 'Occupied';
    case 'free_soon': return 'Free Soon';
    case 'reserved': return 'Reserved';
    case 'maintenance': return 'Maintenance';
    case 'overstay': return 'Overstay';
    case 'serious_overstay': return 'Serious Overstay';
    default: return 'Available';
  }
});

const statusColor = computed(() => {
  switch (props.status) {
    case 'available':
      return { hex: '#22C55E' };
    case 'occupied':
      return { hex: '#EF4444' };
    case 'free_soon':
      return { hex: '#EAB308' };
    case 'reserved':
      return { hex: '#3B82F6' };
    case 'maintenance':
      return { hex: '#6B7280' };
    case 'overstay':
      return { hex: '#F97316' };
    case 'serious_overstay':
      return { hex: '#A855F7' };
    default:
      return { hex: '#6B7280' };
  }
});
</script>

<style scoped>
.scale-102 {
  transform: scale(1.02);
}
</style>
