<template>
  <div class="relative w-full overflow-auto bg-slate-50/40 p-6 rounded-3xl border border-slate-100/80 min-h-[500px]">
    <!-- Visual Canvas Layout -->
    <div 
      v-if="useCanvas"
      class="relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg overflow-hidden transition-all"
      :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
      @dragover.prevent
      @drop="onDrop($event)"
    >
      <!-- Clean canvas background -->

      <!-- Cabins Layer -->
      <div
        v-for="(seat, index) in cabinSeats"
        :key="seat.id"
        :draggable="isDesigner"
        @dragstart="onDragStart($event, seat)"
        :style="{
          position: 'absolute',
          left: `${(seat.position_x !== null && seat.position_x !== undefined && seat.position_x !== 0) ? seat.position_x : (50 + (index % 5) * 145)}px`,
          top: `${(seat.position_y !== null && seat.position_y !== undefined && seat.position_y !== 0) ? seat.position_y : (60 + Math.floor(index / 5) * 190)}px`
        }"
        class="z-10"
      >
        <CabinSvg 
          :number="seat.cabin_number || getSimpleCabinNumber(seat.seat_number)"
          :status="seat.status"
          :features="getCabinFeatures(seat)"
          :socket-count="seat.socket_count"
          :highlighted="selectedSeat?.id === seat.id"
          @click="onCabinClick(seat)"
        />
      </div>
    </div>

    <!-- Responsive Grid Layout (Fallback/List Mode) -->
    <div 
      v-else 
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
    >
      <div
        v-for="seat in cabinSeats"
        :key="seat.id"
      >
        <CabinSvg 
          :number="seat.cabin_number || getSimpleCabinNumber(seat.seat_number)"
          :status="seat.status"
          :features="getCabinFeatures(seat)"
          :socket-count="seat.socket_count"
          :highlighted="selectedSeat?.id === seat.id"
          @click="onCabinClick(seat)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CabinSvg from './CabinSvg.vue';
import { Seat } from '../../types';

const props = withDefaults(defineProps<{
  seats: Seat[];
  selectedSeat?: Seat | null;
  isDesigner?: boolean;
  useCanvas?: boolean;
  canvasWidth?: number;
  canvasHeight?: number;
  gridSnap?: boolean;
}>(), {
  selectedSeat: null,
  isDesigner: false,
  useCanvas: true,
  canvasWidth: 800,
  canvasHeight: 600,
  gridSnap: true
});

const emit = defineEmits<{
  (e: 'seat-click', seat: Seat): void;
  (e: 'layout-change', seatId: number, x: number, y: number): void;
}>();

const draggedSeat = ref<Seat | null>(null);
const dragOffset = ref({ x: 0, y: 0 });

// Filter seats that represent cabins (could be by seat_type, or cabin_number exists)
// We will filter seats where seat_type is 'private_room' or cabin_number is set
const cabinSeats = computed(() => {
  return props.seats.filter(s => s.seat_type === 'private_room' || s.cabin_number !== null);
});

const getCabinFeatures = (seat: Seat) => {
  if (seat.cabin_features) return seat.cabin_features;
  // Default values mapping from seat columns
  return {
    power_outlet: seat.socket_count > 0,
    computer: seat.has_computer,
    ac: true,
    wifi: true
  };
};

const getSimpleCabinNumber = (num: string) => {
  return String(num).replace(/\D/g, '') || num;
};

const onCabinClick = (seat: Seat) => {
  emit('seat-click', seat);
};

// Drag and drop for cabins
const onDragStart = (event: DragEvent, seat: Seat) => {
  if (!props.isDesigner) return;
  draggedSeat.value = seat;
  const rect = (event.target as HTMLElement).getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  event.dataTransfer?.setData('text/plain', seat.id.toString());
};

const onDrop = (event: DragEvent) => {
  if (!props.isDesigner || !draggedSeat.value) return;

  const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
  let x = Math.round(event.clientX - container.left - dragOffset.value.x);
  let y = Math.round(event.clientY - container.top - dragOffset.value.y);

  // Snapping
  if (props.gridSnap) {
    x = Math.round(x / 20) * 20;
    y = Math.round(y / 20) * 20;
  }

  // Cabin width is 128px (w-32), height is 144px (h-36) [balanced premium scale]
  const finalX = Math.max(0, Math.min(x, props.canvasWidth - 128));
  const finalY = Math.max(0, Math.min(y, props.canvasHeight - 144));

  emit('layout-change', draggedSeat.value.id, finalX, finalY);
  draggedSeat.value = null;
};
</script>
