<template>
  <div class="relative w-full overflow-visible">
    <!-- Visual Floor Plan Canvas Layout -->
    <div 
      v-if="useCanvas"
      class="relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg transition-all overflow-visible"
      :style="{ width: canvasWidth + 'px', height: computedCanvasHeight + 'px' }"
      @dragover.prevent
      @drop="onDrop($event)"
    >
      <!-- Render Individual Card-less Cabins on Canvas -->
      <div
        v-for="(seat, index) in cabinSeats"
        :key="seat.id"
        :draggable="isDesigner"
        @dragstart="onDragStart($event, seat)"
        @click.stop="$emit('seat-click', seat)"
        @mouseenter="onSeatHover($event, seat)"
        @mouseleave="onSeatLeave"
        :style="{
          position: 'absolute',
          left: `${(seat.position_x !== null && seat.position_x !== undefined && seat.position_x !== 0) ? seat.position_x : (35 + (index % 10) * 68)}px`,
          top: `${(seat.position_y !== null && seat.position_y !== undefined && seat.position_y !== 0) ? seat.position_y : (45 + Math.floor(index / 10) * 94)}px`
        }"
        :class="[
          'w-[68px] h-[88px] flex items-center justify-center transition-all duration-200 select-none z-10',
          isDesigner ? 'cursor-move active:scale-95' : 'cursor-pointer hover:scale-105 active:scale-95',
        ]"
      >
        <CabinSvg 
          :number="seat.cabin_number || seat.seat_number"
          :status="seat.status"
          :highlighted="selectedSeat?.id === seat.id"
        />
      </div>
    </div>

    <!-- Responsive Grid Fallback Mode -->
    <div v-else class="space-y-8 text-left">
      <!-- Grouped by Section (All Sections active) -->
      <div 
        v-if="isAllSections && groupedSections.length > 0"
        v-for="group in groupedSections"
        :key="group.id"
        class="space-y-4"
      >
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 flex items-center space-x-1.5">
          <span class="w-1.5 h-3 bg-emerald-600 rounded-sm"></span>
          <span>{{ group.name }} Section</span>
          <span class="text-[10px] font-bold text-slate-350">({{ group.seats.length }} cabins)</span>
        </h3>
        
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center p-2 pt-3 pb-2">
          <div
            v-for="seat in group.seats"
            :key="seat.id"
            @click.stop="$emit('seat-click', seat)"
            @mouseenter="onSeatHover($event, seat)"
            @mouseleave="onSeatLeave"
            class="cursor-pointer transition-all duration-150 select-none"
          >
            <CabinSvg 
              :number="seat.cabin_number || seat.seat_number"
              :status="seat.status"
              :highlighted="selectedSeat?.id === seat.id"
            />
          </div>
        </div>
      </div>

      <!-- Flat View (Single Section view) -->
      <div v-else class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center p-2 pt-3 pb-2">
        <div
          v-for="seat in cabinSeats"
          :key="seat.id"
          @click.stop="$emit('seat-click', seat)"
          @mouseenter="onSeatHover($event, seat)"
          @mouseleave="onSeatLeave"
          class="cursor-pointer transition-all duration-150 select-none"
        >
          <CabinSvg 
            :number="seat.cabin_number || seat.seat_number"
            :status="seat.status"
            :highlighted="selectedSeat?.id === seat.id"
          />
        </div>
      </div>
    </div>

    <!-- Teleported Popover for Hover Details -->
    <SeatPopover 
      :seat="hoveredSeat || fallbackSeat" 
      :section-name="sectionName" 
      :visible="hoveredSeatId !== null && !isDesigner"
      :anchor-rect="hoveredAnchorRect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CabinSvg from './CabinSvg.vue';
import SeatPopover from '../SeatPopover.vue';
import { Seat } from '../../types';

const props = withDefaults(defineProps<{
  seats: Seat[];
  selectedSeat?: Seat | null;
  isDesigner?: boolean;
  useCanvas?: boolean;
  canvasWidth?: number;
  canvasHeight?: number;
  gridSnap?: boolean;
  sectionName?: string;
  sections?: any[];
}>(), {
  selectedSeat: null,
  isDesigner: false,
  useCanvas: true,
  canvasWidth: 800,
  canvasHeight: 600,
  gridSnap: true,
  sectionName: 'Main Section',
  sections: () => []
});

const emit = defineEmits<{
  (e: 'seat-click', seat: Seat): void;
  (e: 'layout-change', seatId: number, x: number, y: number): void;
}>();

const hoveredSeatId = ref<number | null>(null);
const hoveredSeat = ref<Seat | null>(null);
const hoveredAnchorRect = ref<{ top: number; left: number; width: number; height: number } | null>(null);
const draggedSeat = ref<Seat | null>(null);
const dragOffset = ref({ x: 0, y: 0 });
let hoverTimer: any = null;

const fallbackSeat = { id: 0, seat_number: '', status: 'available', has_computer: false, near_window: false, socket_count: 0, seat_type: 'private_room' } as any;

const onSeatHover = (event: MouseEvent, seat: Seat) => {
  if (hoverTimer) clearTimeout(hoverTimer);
  const el = (event.currentTarget as HTMLElement);
  const rect = el.getBoundingClientRect();

  // 1.5 second (1500ms) hover delay timer as requested by user
  hoverTimer = setTimeout(() => {
    hoveredSeatId.value = seat.id;
    hoveredSeat.value = seat;
    hoveredAnchorRect.value = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  }, 1500);
};

const onSeatLeave = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
  hoveredSeatId.value = null;
  hoveredSeat.value = null;
  hoveredAnchorRect.value = null;
};

const isAllSections = computed(() => props.sectionName === 'All Sections');

const naturalCompare = (a: string, b: string) => {
  const ax: any[] = [];
  const bx: any[] = [];
  a.replace(/(\d+)|(\D+)/g, function() {
    ax.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || '']);
    return '';
  });
  b.replace(/(\d+)|(\D+)/g, function() {
    bx.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || '']);
    return '';
  });
  while (ax.length && bx.length) {
    const an = ax.shift();
    const bn = bx.shift();
    const nn = (an[0] !== bn[0]) 
      ? (an[0] - bn[0]) 
      : an[1].localeCompare(bn[1], undefined, { sensitivity: 'base' });
    if (nn) return nn;
  }
  return ax.length - bx.length;
};

// Filter and sort seats that represent cabins
const cabinSeats = computed(() => {
  const filtered = props.seats.filter(s => !s.table_id);
  return filtered.sort((a, b) => {
    const numA = a.cabin_number || a.seat_number || '';
    const numB = b.cabin_number || b.seat_number || '';
    return naturalCompare(numA, numB);
  });
});

const groupedSections = computed(() => {
  if (!props.sections || props.sections.length === 0) return [];
  const groupsMap = new Map<number, Seat[]>();
  cabinSeats.value.forEach(seat => {
    if (seat.section_id) {
      if (!groupsMap.has(seat.section_id)) {
        groupsMap.set(seat.section_id, []);
      }
      groupsMap.get(seat.section_id)!.push(seat);
    }
  });

  const sortedSections = [...props.sections].sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'}));
  
  return sortedSections
    .map(sec => ({
      id: sec.id,
      name: sec.name,
      seats: (groupsMap.get(sec.id) || []).sort((a, b) => naturalCompare(a.cabin_number || a.seat_number, b.cabin_number || b.seat_number))
    }))
    .filter(g => g.seats.length > 0);
});

const computedCanvasHeight = computed(() => {
  if (!cabinSeats.value || cabinSeats.value.length === 0) {
    return 120;
  }
  let maxY = 0;
  cabinSeats.value.forEach((seat, index) => {
    const y = (seat.position_y !== null && seat.position_y !== undefined && seat.position_y !== 0)
      ? seat.position_y
      : (45 + Math.floor(index / 10) * 94);
    if (y > maxY) {
      maxY = y;
    }
  });
  return Math.max(160, maxY + 120);
});

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

  const finalX = Math.max(0, Math.min(x, props.canvasWidth - 80));
  const finalY = Math.max(0, Math.min(y, props.canvasHeight - 96));

  emit('layout-change', draggedSeat.value.id, finalX, finalY);
  draggedSeat.value = null;
};
</script>
