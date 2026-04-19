<template>
  <div :class="[
    'absolute left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]',
    position === 'top' ? 'bottom-[110%]' : 'top-[110%]'
  ]">
    <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
      <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
      <div :class="['w-2 h-2 rounded-full', statusDot]"></div>
    </div>
    <div class="p-4 text-xs space-y-1 text-gray-600">
      <p>{{ seat.current_booking?.user_name || 'Available' }}</p>
      <p v-if="seat.current_booking?.minutes_left">{{ seat.current_booking.minutes_left }} mins left</p>
      <p class="font-bold text-gray-400 uppercase tracking-widest pt-1 border-t border-gray-50">{{ sectionName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  seat: any;
  sectionName: string;
  position: 'top' | 'bottom';
}>();

const statusDot = computed(() => {
  const map: Record<string, string> = {
    available: 'bg-green-500',
    occupied: 'bg-orange-400',
    reserved: 'bg-indigo-400',
    overstay: 'bg-yellow-400',
    serious_overstay: 'bg-red-500',
    maintenance: 'bg-gray-400'
  };
  return map[props.seat?.status] || 'bg-gray-400';
});
</script>
