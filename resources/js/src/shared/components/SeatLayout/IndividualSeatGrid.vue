<template>
  <div class="relative w-full overflow-auto">
    <!-- Visual Floor Plan Canvas -->
    <div 
      v-if="useCanvas"
      class="relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg transition-all overflow-visible"
      :style="{ width: canvasWidth + 'px', height: computedCanvasHeight + 'px' }"
      @dragover.prevent
      @drop="onDrop($event)"
    >
      <!-- Render Absolute Positioned Seats -->
      <div
        v-for="(seat, index) in sortedSeats"
        :key="seat.id"
        :draggable="isDesigner"
        @dragstart="onDragStart($event, seat)"
        @click.stop="$emit('seat-click', seat)"
        @mouseenter="onSeatHover($event, seat)"
        @mouseleave="onSeatLeave"
        :style="{
          position: 'absolute',
          left: `${(seat.position_x !== null && seat.position_x !== undefined && seat.position_x !== 0) ? seat.position_x : (45 + (index % 10) * 78)}px`,
          top: `${(seat.position_y !== null && seat.position_y !== undefined && seat.position_y !== 0) ? seat.position_y : (50 + Math.floor(index / 10) * 95)}px`
        }"
        :class="[
          'w-16 h-16 flex items-center justify-center transition-all duration-200 select-none z-10',
          isDesigner ? 'cursor-move active:scale-95' : 'cursor-pointer hover:scale-110 active:scale-95',
        ]"
      >
        <!-- Seat SVG rendering status with integrated white pill number -->
        <SeatSvg 
          :status="seat.status" 
          :seat-number="seat.seat_number"
          :highlighted="selectedSeat?.id === seat.id"
        />
      </div>
    </div>

    <!-- Responsive Grid fallback if not visual layout mode -->
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
          <span class="text-[10px] font-bold text-slate-350">({{ group.seats.length }} seats)</span>
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center p-2 pt-3 pb-2">
          <div
            v-for="seat in group.seats"
            :key="seat.id"
            @click.stop="$emit('seat-click', seat)"
            @mouseenter="onSeatHover($event, seat)"
            @mouseleave="onSeatLeave"
            :class="[
              'relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100',
              hoveredSeatId === seat.id ? 'z-50 shadow-lg' : 'z-10',
              selectedSeat?.id === seat.id
                ? 'bg-blue-50/70 border-2 border-blue-600 text-blue-700 shadow-md ring-2 ring-inset ring-blue-500/50'
                : getStatusBgClass(seat.status) + ' hover:shadow-md hover:-translate-y-0.5'
            ]"
          >
            <!-- Chair SVG -->
            <div class="w-10 h-10 mt-1">
              <SeatSvg 
                :status="seat.status" 
                :highlighted="selectedSeat?.id === seat.id"
              />
            </div>

            <!-- Seat labels -->
            <div class="text-center w-full">
              <span :class="['block text-[10px] font-bold tracking-tight leading-none mb-1.5', selectedSeat?.id === seat.id ? 'text-blue-600' : 'text-slate-800']">
                {{ seat.seat_number }}
              </span>
            </div>

            <!-- Amenity dots indicators -->
            <div class="absolute top-1.5 right-1.5 flex space-x-0.5">
              <span v-if="seat.has_computer" class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span v-if="seat.near_window" class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span v-if="seat.socket_count > 0" class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flat Grid (Single Section view) -->
      <div 
        v-else 
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center p-2 pt-3 pb-2"
      >
        <div
          v-for="seat in sortedSeats"
          :key="seat.id"
          @click.stop="$emit('seat-click', seat)"
          @mouseenter="onSeatHover($event, seat)"
          @mouseleave="onSeatLeave"
          :class="[
            'relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100',
            hoveredSeatId === seat.id ? 'z-50 shadow-lg' : 'z-10',
            selectedSeat?.id === seat.id
              ? 'bg-blue-50/70 border-2 border-blue-600 text-blue-700 shadow-md ring-2 ring-inset ring-blue-500/50'
              : getStatusBgClass(seat.status) + ' hover:shadow-md hover:-translate-y-0.5'
          ]"
        >
          <!-- Chair SVG -->
          <div class="w-10 h-10 mt-1">
            <SeatSvg 
              :status="seat.status" 
              :highlighted="selectedSeat?.id === seat.id"
            />
          </div>

          <!-- Seat labels -->
          <div class="text-center w-full">
            <span :class="['block text-[10px] font-bold tracking-tight leading-none mb-1.5', selectedSeat?.id === seat.id ? 'text-blue-600' : 'text-slate-800']">
              {{ seat.seat_number }}
            </span>
          </div>

          <!-- Amenity dots indicators -->
          <div class="absolute top-1.5 right-1.5 flex space-x-0.5">
            <span v-if="seat.has_computer" class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span v-if="seat.near_window" class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span v-if="seat.socket_count > 0" class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Teleported Popover (renders on body, always on top) -->
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
import SeatSvg from '../SeatSvg.vue';
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

// Fallback seat object to avoid template errors when hoveredSeat is null
const fallbackSeat = { id: 0, seat_number: '', status: 'available', has_computer: false, near_window: false, socket_count: 0, seat_type: 'open' } as any;

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

const groupedSections = computed(() => {
  if (!props.sections || props.sections.length === 0) return [];
  const groupsMap = new Map<number, Seat[]>();
  props.seats.forEach(seat => {
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
      seats: (groupsMap.get(sec.id) || []).sort((a, b) => naturalCompare(a.seat_number, b.seat_number))
    }))
    .filter(g => g.seats.length > 0);
});

// Drag and drop events for designer
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

  // Apply Grid snapping
  if (props.gridSnap) {
    x = Math.round(x / 20) * 20;
    y = Math.round(y / 20) * 20;
  }

  // Clamp inside container
  const finalX = Math.max(0, Math.min(x, props.canvasWidth - 64));
  const finalY = Math.max(0, Math.min(y, props.canvasHeight - 64));

  emit('layout-change', draggedSeat.value.id, finalX, finalY);
  draggedSeat.value = null;
};

// Clean label
const getSimpleSeatNumber = (num: string) => {
  return String(num).replace(/\D/g, '') || num;
};

// Custom premium grid card colors
const getStatusBgClass = (status: string) => {
  switch (status) {
    case 'available': return 'bg-emerald-50/40 border-emerald-100/50 text-emerald-700';
    case 'occupied': return 'bg-rose-50/40 border-rose-100/50 text-rose-700';
    case 'free_soon': return 'bg-amber-50/40 border-amber-100/50 text-amber-700';
    case 'reserved': return 'bg-blue-50/40 border-blue-100/50 text-blue-700';
    case 'maintenance': return 'bg-slate-100/40 border-slate-200/50 text-slate-500';
    case 'overstay': return 'bg-orange-50/40 border-orange-100/50 text-orange-700';
    case 'serious_overstay': return 'bg-purple-50/40 border-purple-100/50 text-purple-700';
    default: return 'bg-slate-50 border-slate-200 text-slate-650';
  }
};

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

const sortedSeats = computed(() => {
  return [...props.seats].sort((a, b) => naturalCompare(a.seat_number, b.seat_number));
});

const computedCanvasHeight = computed(() => {
  if (!sortedSeats.value || sortedSeats.value.length === 0) {
    return 100;
  }
  let maxY = 0;
  sortedSeats.value.forEach((seat, index) => {
    const y = (seat.position_y !== null && seat.position_y !== undefined && seat.position_y !== 0)
      ? seat.position_y
      : (50 + Math.floor(index / 10) * 95);
    if (y > maxY) {
      maxY = y;
    }
  });
  return Math.max(120, maxY + 110);
});
</script>
