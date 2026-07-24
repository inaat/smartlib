<template>
  <div 
    class="flex flex-col items-center justify-center p-3 border border-dashed border-slate-200/60 rounded-3xl bg-slate-50/20 shadow-inner select-none transition-all duration-300 hover:shadow-md hover:border-slate-350"
    :style="{ width: tableWidth }"
  >
    <!-- Top Row of Chairs -->
    <div class="flex items-center justify-center gap-2.5 mb-2">
      <div 
        v-for="seat in topSeats" 
        :key="seat.id" 
        class="relative cursor-pointer transition-all duration-200 hover:scale-110"
        @click.stop="$emit('seat-click', seat)"
      >
        <div class="w-9.5 h-9.5">
          <SeatSvg 
            :status="seat.status" 
            :highlighted="selectedSeatId === seat.id"
            :rotate="false" 
          />
        </div>
        <!-- Seat Label Badging -->
        <span class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 text-[8px] font-bold rounded-md bg-white border border-slate-200 shadow-sm text-slate-800 leading-none">
          {{ getSimpleNumber(seat.seat_number) }}
        </span>
      </div>
    </div>

    <!-- The Solid Desk Body -->
    <div class="w-full h-10 rounded-2xl bg-white border-2 border-slate-100 shadow-sm relative flex items-center justify-center overflow-hidden">
      <!-- Old style lines top and bottom -->
      <div class="absolute inset-x-3 h-[2px] bg-slate-50 top-1.5"></div>
      <div class="absolute inset-x-3 h-[2px] bg-slate-50 bottom-1.5"></div>

      <!-- Old style decorative capsules in the background -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div class="flex space-x-4">
          <div v-for="i in 3" :key="i" class="w-8 h-1 bg-slate-400 rounded-full"></div>
        </div>
      </div>
      
      <!-- Desk Label -->
      <div class="text-center z-10 px-2">
        <span class="text-[9.5px] font-bold tracking-wider text-slate-800 uppercase leading-none block">
          {{ label }}
        </span>
        <span class="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1 block">
          {{ capacity }} Pax
        </span>
      </div>
    </div>

    <!-- Bottom Row of Chairs -->
    <div class="flex items-center justify-center gap-2.5 mt-3.5">
      <div 
        v-for="seat in bottomSeats" 
        :key="seat.id" 
        class="relative cursor-pointer transition-all duration-200 hover:scale-110"
        @click.stop="$emit('seat-click', seat)"
      >
        <!-- Seat Label Badging -->
        <span class="absolute -top-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 text-[8px] font-bold rounded-md bg-white border border-slate-200 shadow-sm text-slate-800 leading-none z-10">
          {{ getSimpleNumber(seat.seat_number) }}
        </span>
        <div class="w-9.5 h-9.5">
          <SeatSvg 
            :status="seat.status" 
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
}>();

// Dynamic Width based on Capacity (New Balanced Scale)
const tableWidth = computed(() => {
  switch (props.capacity) {
    case 2: return '130px';
    case 4: return '200px';
    case 6: return '270px';
    case 8: return '340px';
    default: return '200px';
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

// Clean seat number to display only seat index (e.g. T1-1 -> 1, or Seat 1 -> 1)
const getSimpleNumber = (num: string) => {
  const parts = num.split('-');
  return parts[parts.length - 1] || num;
};
</script>
