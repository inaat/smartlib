<template>
  <div class="w-full">
    <!-- Clean Responsive Table Grid Layout (Perfectly Centered with Equal Left & Right Margins) -->
    <div 
      v-if="!isDesigner"
      class="w-full flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-10 py-4 px-4 sm:px-8 mx-auto"
    >
      <div
        v-for="table in displayTables"
        :key="table.id"
        class="transition-all duration-300 hover:scale-[1.02] flex justify-center items-center shrink-0"
        :style="{
          transform: getTableScale(table.capacity) < 1 ? `scale(${getTableScale(table.capacity)})` : undefined,
          transformOrigin: 'center center'
        }"
        @click.stop="$emit('table-click', table)"
      >
        <TableSvg 
          :capacity="table.capacity" 
          :label="table.label" 
          :seats="getTableSeats(table)"
          :selectedSeatId="selectedSeat?.id"
          @seat-click="onSeatClick"
          @seat-hover="onSeatHover"
          @seat-leave="onSeatLeave"
        />
      </div>
    </div>

    <!-- Designer Mode Visual Canvas Layout (Only when drag-and-drop designer is active) -->
    <div 
      v-else
      class="relative w-full overflow-visible transition-all py-3"
      :style="{ height: computedCanvasHeight + 'px' }"
      @dragover.prevent
      @drop="onDrop($event)"
    >
      <!-- Render Tables -->
      <div
        v-for="(table, index) in displayTables"
        :key="table.id"
        :draggable="isDesigner"
        @dragstart="onDragStart($event, table)"
        :style="{
          position: 'absolute',
          left: `${(table.position_x !== null && table.position_x !== undefined && table.position_x !== 0) ? table.position_x : (autoPositions[table.id]?.left || 16)}px`,
          top: `${(table.position_y !== null && table.position_y !== undefined && table.position_y !== 0) ? table.position_y : (autoPositions[table.id]?.top || 20)}px`,
          transform: getTableScale(table.capacity) < 1 ? `scale(${getTableScale(table.capacity)})` : undefined,
          transformOrigin: 'top left'
        }"
        class="z-10 transition-all duration-300 cursor-move active:scale-98"
        @click.stop="$emit('table-click', table)"
      >
        <TableSvg 
          :capacity="table.capacity" 
          :label="table.label" 
          :seats="getTableSeats(table)"
          :selectedSeatId="selectedSeat?.id"
          @seat-click="onSeatClick"
          @seat-hover="onSeatHover"
          @seat-leave="onSeatLeave"
        />
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
import { ref, computed, onUnmounted } from 'vue';
import TableSvg from './TableSvg.vue';
import SeatPopover from '../SeatPopover.vue';
import { StudyTable, Seat } from '../../types';

const props = withDefaults(defineProps<{
  tables: StudyTable[];
  seats: Seat[];
  selectedSeat?: Seat | null;
  isDesigner?: boolean;
  useCanvas?: boolean;
  canvasWidth?: number;
  canvasHeight?: number;
  gridSnap?: boolean;
  sectionName?: string;
  tableCapacity?: number;
  tablesPerRow?: number;
}>(), {
  selectedSeat: null,
  isDesigner: false,
  useCanvas: true,
  canvasWidth: 800,
  canvasHeight: 600,
  gridSnap: true,
  sectionName: 'Main Section',
  tableCapacity: 4,
  tablesPerRow: 3
});

const emit = defineEmits<{
  (e: 'seat-click', seat: Seat): void;
  (e: 'table-click', table: StudyTable): void;
  (e: 'table-layout-change', tableId: number, x: number, y: number): void;
}>();

const hoveredSeatId = ref<number | null>(null);
const hoveredSeat = ref<Seat | null>(null);
const hoveredAnchorRect = ref<{ top: number; left: number; width: number; height: number } | null>(null);
const draggedTable = ref<StudyTable | null>(null);
const dragOffset = ref({ x: 0, y: 0 });
let hoverTimer: any = null;

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

onUnmounted(() => {
  if (hoverTimer) clearTimeout(hoverTimer);
});

const selectedCapacity = computed(() => props.tableCapacity || 4);

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

// Sorted list of seats
const sortedSeats = computed(() => {
  return [...props.seats].sort((a, b) => naturalCompare(a.seat_number || '', b.seat_number || ''));
});

// Dynamic Virtual Tables generated from selectedCapacity (2, 4, 6, 8)
const displayTables = computed(() => {
  if (sortedSeats.value.length === 0) {
    return props.tables || [];
  }

  const cap = selectedCapacity.value;
  const tableCount = Math.ceil(sortedSeats.value.length / cap);
  const virtualTables: StudyTable[] = [];

  for (let i = 0; i < tableCount; i++) {
    virtualTables.push({
      id: 9000 + i,
      label: `Table ${i + 1}`,
      capacity: cap,
      table_number: `T-${i + 1}`,
      position_x: null,
      position_y: null
    } as StudyTable);
  }

  return virtualTables;
});

// Map seats to each virtual table
const getTableSeats = (table: StudyTable) => {
  const cap = table.capacity;
  const index = displayTables.value.findIndex(t => t.id === table.id);
  if (index === -1) return [];

  const start = index * cap;
  return sortedSeats.value.slice(start, start + cap);
};

const getTableWidthPx = (capacity: number) => {
  switch (capacity) {
    case 2: return 75;
    case 4: return 125;
    case 6: return 175;
    case 8: return 225;
    case 10: return 275;
    case 12: return 325;
    case 14: return 375;
    case 16: return 425;
    default: return 125;
  }
};

const getTableScale = (capacity: number) => {
  const tableWidthPx = getTableWidthPx(capacity);
  const availableWidth = Math.max(320, props.canvasWidth || 320);
  const neededWidth = tableWidthPx + 32;
  if (neededWidth > availableWidth) {
    return availableWidth / neededWidth;
  }
  return 1;
};

const autoPositions = computed(() => {
  const positions: Record<number, { left: number, top: number }> = {};
  const availableWidth = Math.max(700, props.canvasWidth || 700);
  
  const rowSpacing = 165;
  const colGap = 24;

  // First pass: Group tables into rows based on available canvas width
  const rows: Array<Array<{ id: number; capacity: number }>> = [];
  let currentRow: Array<{ id: number; capacity: number }> = [];
  let currentRowWidth = 0;

  displayTables.value.forEach((table) => {
    const tableWidthPx = getTableWidthPx(table.capacity);
    const neededWidth = currentRow.length === 0 ? tableWidthPx : (tableWidthPx + colGap);
    
    // Check if it fits on current row (with 32px padding/margin cushion)
    if (currentRowWidth + neededWidth + 32 > availableWidth) {
      rows.push(currentRow);
      currentRow = [table];
      currentRowWidth = tableWidthPx;
    } else {
      currentRow.push(table);
      currentRowWidth += neededWidth;
    }
  });

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  // Second pass: Calculate centered left coordinate for each row
  let currentY = 20;
  rows.forEach((row) => {
    let rowWidth = 0;
    row.forEach((table, index) => {
      const tableWidthPx = getTableWidthPx(table.capacity);
      rowWidth += index === 0 ? tableWidthPx : (tableWidthPx + colGap);
    });

    const leftover = availableWidth - rowWidth;
    let startX = Math.max(16, Math.round(leftover / 2));

    row.forEach((table) => {
      positions[table.id] = { left: startX, top: currentY };
      startX += getTableWidthPx(table.capacity) + colGap;
    });

    currentY += rowSpacing;
  });

  return positions;
});

const computedCanvasHeight = computed(() => {
  if (!displayTables.value || displayTables.value.length === 0) {
    return 160;
  }
  let maxBottom = 160;
  displayTables.value.forEach((table) => {
    const y = (table.position_y !== null && table.position_y !== undefined && table.position_y !== 0) 
      ? table.position_y 
      : (autoPositions.value[table.id]?.top || 20);
    const bottom = y + 160; // Safe table layout height
    if (bottom > maxBottom) {
      maxBottom = bottom;
    }
  });
  return Math.max(180, maxBottom + 20);
});

const onSeatClick = (seat: Seat) => {
  emit('seat-click', seat);
};

// Drag and drop for tables
const onDragStart = (event: DragEvent, table: StudyTable) => {
  if (!props.isDesigner) return;
  draggedTable.value = table;
  const rect = (event.target as HTMLElement).getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  event.dataTransfer?.setData('text/plain', table.id.toString());
};

const onDrop = (event: DragEvent) => {
  if (!props.isDesigner || !draggedTable.value) return;

  const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
  let x = Math.round(event.clientX - container.left - dragOffset.value.x);
  let y = Math.round(event.clientY - container.top - dragOffset.value.y);

  if (props.gridSnap) {
    x = Math.round(x / 20) * 20;
    y = Math.round(y / 20) * 20;
  }

  emit('table-layout-change', draggedTable.value.id, x, y);
  draggedTable.value = null;
};
</script>
