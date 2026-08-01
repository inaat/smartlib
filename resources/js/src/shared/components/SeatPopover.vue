<template>
  <Teleport to="body">
    <div 
      v-if="visible"
      class="fixed w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden z-[9999] pointer-events-none animate-popover-in text-left"
      :style="popoverStyle"
    >
      <!-- Accent Top Status Line -->
      <div class="h-[2px] w-full" :style="{ backgroundColor: statusTheme.hex }"></div>

      <div class="p-3 space-y-2.5">
        <!-- Header: Seat & Status -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-800 uppercase tracking-tight">Seat {{ seat.seat_number }}</span>
          <span :class="['text-[8px] font-bold px-1.5 py-0.5 rounded-full border uppercase tracking-wider', statusTheme.bg, statusTheme.text, statusTheme.border]">
            {{ statusLabel }}
          </span>
        </div>

        <!-- Occupancy Info -->
        <div class="flex items-center space-x-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100/50">
          <User class="w-3.5 h-3.5 text-slate-450 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <p class="text-[10px] font-bold text-slate-800 truncate leading-none mb-0.5">
              {{ occupancyLabel }}
            </p>
            <p class="text-[8px] font-medium text-slate-400 flex items-center gap-0.5">
              <Clock class="w-2.5 h-2.5 text-slate-350 flex-shrink-0" />
              <span>{{ displayTimeLeft !== null ? formatTimeLeft(displayTimeLeft) : (isAvailable ? 'Ready' : 'In Use') }}</span>
            </p>
          </div>
        </div>

        <!-- Amenities -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-100/60">
          <div class="flex items-center gap-2">
            <Monitor 
              :class="['w-3.5 h-3.5 transition-colors', seat.has_computer ? 'text-emerald-600' : 'text-slate-300']" 
            />
            <Layout 
              :class="['w-3.5 h-3.5 transition-colors', seat.near_window ? 'text-sky-500' : 'text-slate-300']" 
            />
            <Zap 
              :class="['w-3.5 h-3.5 transition-colors', seat.socket_count > 0 ? 'text-amber-500' : 'text-slate-300']" 
            />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 
  User, 
  Monitor, 
  Layout, 
  Zap,
  Clock
} from 'lucide-vue-next';

const props = defineProps<{
  seat: any;
  sectionName: string;
  visible: boolean;
  anchorRect: { top: number; left: number; width: number; height: number } | null;
}>();

const isAvailable = computed(() => props.seat.status === 'available');

const popoverStyle = computed(() => {
  if (!props.anchorRect) return {};
  const popW = 192; // w-48 = 12rem = 192px
  const popH = 180; // approximate popover height
  const gap = 8;
  
  // Center horizontally relative to anchor
  let left = props.anchorRect.left + props.anchorRect.width / 2 - popW / 2;
  
  // Clamp so it doesn't go off-screen horizontally
  left = Math.max(8, Math.min(left, window.innerWidth - popW - 8));
  
  // Decide top vs bottom: if there's enough space above, show above; otherwise show below
  const spaceAbove = props.anchorRect.top;
  let top: number;
  if (spaceAbove > popH + gap) {
    top = props.anchorRect.top - popH - gap;
  } else {
    top = props.anchorRect.top + props.anchorRect.height + gap;
  }
  
  // Clamp vertical
  top = Math.max(8, Math.min(top, window.innerHeight - popH - 8));
  
  return {
    top: top + 'px',
    left: left + 'px',
  };
});

const statusLabel = computed(() => {
  switch (props.seat.status) {
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

const occupancyLabel = computed(() => {
  if (props.seat.current_booking?.user_name) return props.seat.current_booking.user_name;
  if (isAvailable.value) return 'No Active User';
  if (props.seat.status === 'maintenance') return 'Maintenance';
  if (props.seat.status === 'free_soon') return 'Free Soon';
  if (props.seat.status === 'reserved') return 'Reserved';
  if (props.seat.status === 'overstay') return 'Overstay Alert';
  if (props.seat.status === 'serious_overstay') return 'Critical Overstay';
  return 'Occupied';
});

const displayTimeLeft = computed(() => {
  if (props.seat.current_booking?.minutes_left !== undefined && props.seat.current_booking?.minutes_left !== null) {
     return props.seat.current_booking.minutes_left;
  }
  if (props.seat.remaining_minutes !== undefined && props.seat.remaining_minutes !== null) {
     return props.seat.remaining_minutes;
  }
  return null;
});

const formatTimeLeft = (minutes: number) => {
  if (minutes < 0) return 'Expired';
  if (minutes < 60) return `${minutes}m left`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hrs}h ${mins}m left` : `${hrs}h left`;
};

const statusTheme = computed(() => {
  const map: Record<string, { bg: string, text: string, border: string, hex: string }> = {
    available: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', hex: '#10B981' },
    occupied: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100', hex: '#F43F5E' },
    free_soon: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', hex: '#F59E0B' },
    reserved: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', hex: '#3B82F6' },
    overstay: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', hex: '#F97316' },
    serious_overstay: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', hex: '#A855F7' },
    maintenance: { bg: 'bg-slate-50', text: 'text-slate-650', border: 'border-slate-100', hex: '#6B7280' }
  };
  return map[props.seat?.status] || { bg: 'bg-slate-50', text: 'text-slate-650', border: 'border-slate-100', hex: '#6B7280' };
});
</script>

<style scoped>
@keyframes popoverIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-popover-in {
  animation: popoverIn 0.12s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
