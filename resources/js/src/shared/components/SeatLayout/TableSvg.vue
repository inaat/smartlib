<template>
  <div 
    class="flex flex-col items-center justify-center p-1 select-none transition-all duration-300 group hover:scale-[1.02]"
    :style="{ width: tableWidth }"
  >
    <!-- Top Row of Chairs (facing DOWN, tucked close to top edge of table) -->
    <div class="flex items-center justify-center gap-2.5 -mb-1.5 z-20">
      <div 
        v-for="seat in topSeats" 
        :key="seat.id" 
        :class="[
          'relative cursor-pointer transition-all duration-200 hover:scale-115 hover:-translate-y-1 active:scale-95 rounded-lg',
          selectedSeatId === seat.id ? 'ring-2 ring-emerald-500 ring-offset-1 scale-110 shadow-md z-30' : ''
        ]"
        @click.stop="$emit('seat-click', seat)"
        @mouseenter="$emit('seat-hover', $event, seat)"
        @mouseleave="$emit('seat-leave')"
      >
        <div class="w-9.5 h-9.5">
          <SeatSvg 
            :status="seat.status" 
            :seat-number="seat.seat_number"
            :highlighted="selectedSeatId === seat.id"
            :rotate="false" 
          />
        </div>
      </div>
    </div>

    <!-- Solid White Desk Surface Body (h-10 height, rounded-xl corners, compact body) -->
    <div class="w-full h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm relative flex items-center justify-center overflow-hidden my-0 z-10">
      <!-- Center Dashed Accent Line -->
      <div class="absolute inset-x-4 h-[2px] top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none opacity-30">
        <span class="w-6 h-[2px] bg-slate-300 rounded-full"></span>
        <span class="w-6 h-[2px] bg-slate-300 rounded-full"></span>
        <span class="w-6 h-[2px] bg-slate-300 rounded-full"></span>
      </div>
      
      <!-- Table Name Label (Slate color, font-semibold, clean font size) -->
      <div class="text-center z-10 px-2.5 py-0.5 bg-white border border-slate-200/60 rounded-md">
        <span class="text-[9.5px] font-semibold tracking-wider text-slate-500 uppercase leading-none block">
          {{ label }}
        </span>
      </div>
    </div>

    <!-- Bottom Row of Chairs (facing UP, tucked close to bottom edge of table) -->
    <div class="flex items-center justify-center gap-2.5 -mt-1.5 z-20">
      <div 
        v-for="seat in bottomSeats" 
        :key="seat.id" 
        :class="[
          'relative cursor-pointer transition-all duration-200 hover:scale-115 hover:translate-y-1 active:scale-95 rounded-lg',
          selectedSeatId === seat.id ? 'ring-2 ring-emerald-500 ring-offset-1 scale-110 shadow-md z-30' : ''
        ]"
        @click.stop="$emit('seat-click', seat)"
        @mouseenter="$emit('seat-hover', $event, seat)"
        @mouseleave="$emit('seat-leave')"
      >
        <div class="w-9.5 h-9.5">
          <SeatSvg 
            :status="seat.status" 
            :seat-number="seat.seat_number"
            :highlighted="selectedSeatId === seat.id"
            :rotate="true" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SeatSvg from '../SeatSvg.vue';
import { Seat } from '../../types';

const props = withDefaults(defineProps<{
  capacity: number; // 2, 4, 6, 8
  label: string;
  seats: Seat[];
  selectedSeatId?: number | null;
}>(), {
  selectedSeatId: null
});

defineEmits<{
  (e: 'seat-click', seat: Seat): void;
  (e: 'seat-hover', event: MouseEvent, seat: Seat): void;
  (e: 'seat-leave'): void;
}>();

// Compact Responsive Dynamic Width based on Capacity
const tableWidth = computed(() => {
  switch (props.capacity) {
    case 2: return '75px';
    case 4: return '125px';
    case 6: return '175px';
    case 8: return '225px';
    case 10: return '275px';
    case 12: return '325px';
    case 14: return '375px';
    case 16: return '425px';
    default: return '125px';
  }
});

// Distribute seats: half on top, half on bottom
const sortedSeats = computed(() => {
  return [...props.seats].sort((a, b) => a.seat_number.localeCompare(b.seat_number, undefined, {numeric: true, sensitivity: 'base'}));
});

const topSeats = computed(() => {
  const half = Math.ceil(sortedSeats.value.length / 2);
  return sortedSeats.value.slice(0, half);
});

const bottomSeats = computed(() => {
  const half = Math.ceil(sortedSeats.value.length / 2);
  return sortedSeats.value.slice(half);
});
</script>
