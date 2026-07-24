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

      <!-- Tables Layer -->
      <div
        v-for="(table, index) in tables"
        :key="table.id"
        :draggable="isDesigner"
        @dragstart="onDragStart($event, table)"
        :style="{
          position: 'absolute',
          left: `${(table.position_x !== null && table.position_x !== undefined && table.position_x !== 0) ? table.position_x : (60 + (index % 3) * 240)}px`,
          top: `${(table.position_y !== null && table.position_y !== undefined && table.position_y !== 0) ? table.position_y : (60 + Math.floor(index / 3) * 160)}px`
        }"
        :class="[
          'z-10 transition-shadow',
          isDesigner ? 'cursor-move active:scale-98' : ''
        ]"
        @click.stop="$emit('table-click', table)"
      >
        <TableSvg 
          :capacity="table.capacity" 
          :label="table.label" 
          :seats="getTableSeats(table)"
          :selectedSeatId="selectedSeat?.id"
          @seat-click="onSeatClick"
        />
      </div>
    </div>

    <!-- Responsive Grid Layout (Fallback/List Mode) -->
    <div 
      v-else 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
    >
      <div
        v-for="table in tables"
        :key="table.id"
        class="p-2"
        @click.stop="$emit('table-click', table)"
      >
        <TableSvg 
          :capacity="table.capacity" 
          :label="table.label" 
          :seats="getTableSeats(table)"
          :selectedSeatId="selectedSeat?.id"
          @seat-click="onSeatClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TableSvg from './TableSvg.vue';
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
  (e: 'table-click', table: StudyTable): void;
  (e: 'table-layout-change', tableId: number, x: number, y: number): void;
}>();

const draggedTable = ref<StudyTable | null>(null);
const dragOffset = ref({ x: 0, y: 0 });

// Find seats linked to this table
const getTableSeats = (table: StudyTable) => {
  return props.seats.filter(s => s.table_id === table.id);
};

const onSeatClick = (seat: Seat) => {
  if (props.isDesigner) return; // In designer, click table/seats shows table props
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

  // Grid Snapping
  if (props.gridSnap) {
    x = Math.round(x / 20) * 20;
    y = Math.round(y / 20) * 20;
  }

  // Calculate table width for clamping boundary (new balanced scale)
  let tableWidth = 200;
  if (draggedTable.value.capacity === 2) tableWidth = 130;
  else if (draggedTable.value.capacity === 6) tableWidth = 270;
  else if (draggedTable.value.capacity === 8) tableWidth = 340;

  const finalX = Math.max(0, Math.min(x, props.canvasWidth - tableWidth));
  const finalY = Math.max(0, Math.min(y, props.canvasHeight - 130)); // table height is approx 130px with chairs

  emit('table-layout-change', draggedTable.value.id, finalX, finalY);
  draggedTable.value = null;
};
</script>
