<template>
  <div class="space-y-6 font-outfit">
    <!-- Floor Selector + Section Tabs -->
    <div class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-wrap items-center gap-4 text-left">
      <!-- Floor Selector -->
      <div class="relative" v-if="floors.length > 1">
        <select
          v-model="activeFloorId"
          class="appearance-none bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 py-2 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
        >
          <option v-for="floor in floors" :key="floor.id" :value="floor.id">
            {{ floor.name }}
          </option>
        </select>
        <Building2 class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
      </div>

      <!-- Section Tabs -->
      <div 
        v-if="currentFloorSections.length > 0"
        class="flex items-center bg-slate-100 p-1 rounded-xl w-fit gap-1"
      >
        <button
          @click="activeSectionId = null"
          :class="[
            'px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-98 cursor-pointer border border-transparent',
            activeSectionId === null
              ? 'bg-white text-emerald-700 shadow-sm border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          All Seats
        </button>
        <button
          v-for="section in currentFloorSections"
          :key="section.id"
          @click="activeSectionId = section.id"
          :class="[
            'px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-98 cursor-pointer border border-transparent',
            activeSectionId === section.id
              ? 'bg-white text-emerald-700 shadow-sm border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          {{ section.name }}
        </button>
      </div>
    </div>

    <!-- Active Section / Total Seats Header -->
    <div class="bg-white rounded-3xl border border-slate-50 shadow-sm px-6 py-4 flex items-center justify-between">
      <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">
        Layout View — <span class="text-slate-400 font-bold lowercase">{{ activeSectionName }}</span>
      </h2>
      <div class="text-xs text-slate-400 font-bold uppercase tracking-widest">
        {{ filteredSeats.length }} Seats / {{ currentLayoutMode }} Layout
      </div>
    </div>

    <!-- Render Sub-Grids based on configured layout mode -->
    <div class="relative">
      <!-- Section-partitioned view if All Sections is selected -->
      <div v-if="activeSectionId === null" class="space-y-10">
        <div 
          v-for="section in currentFloorSections" 
          :key="section.id"
          class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4"
        >
          <!-- Partition Header -->
          <div class="border-b border-slate-100 pb-3 flex items-center justify-between text-left">
            <h3 class="text-xs font-bold uppercase text-slate-700 tracking-wider flex items-center space-x-1.5">
              <span class="w-1.5 h-3 bg-emerald-600 rounded-sm"></span>
              <span>{{ section.name }} Section</span>
            </h3>
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded-full">
              {{ getSectionSeats(section.id).length }} Seats
            </span>
          </div>

          <!-- Canvas container -->
          <div class="relative">
            <IndividualSeatGrid
              v-if="currentLayoutMode === 'individual'"
              :seats="getSectionSeats(section.id)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="canvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="section.name"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />

            <StudyTableGrid
              v-else-if="currentLayoutMode === 'tables'"
              :tables="getSectionTables(section.id)"
              :seats="getSectionSeats(section.id)"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="canvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              @seat-click="onSeatClick"
              @table-click="onTableClick"
              @table-layout-change="onTableLayoutChange"
            />

            <CabinGrid
              v-else-if="currentLayoutMode === 'cabins'"
              :seats="getSectionSeats(section.id)"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="canvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />
          </div>
        </div>
      </div>

      <!-- Single section view -->
      <div v-else>
        <IndividualSeatGrid
          v-if="currentLayoutMode === 'individual'"
          :seats="filteredSeats"
          :sections="sections"
          :selected-seat="selectedSeat"
          :is-designer="draggable"
          :use-canvas="!isDesignerListView"
          :canvas-width="canvasWidth"
          :canvas-height="canvasHeight"
          :grid-snap="gridSnap"
          :section-name="activeSectionName"
          @seat-click="onSeatClick"
          @layout-change="onSeatLayoutChange"
        />

        <StudyTableGrid
          v-else-if="currentLayoutMode === 'tables'"
          :tables="filteredTables"
          :seats="filteredSeats"
          :selected-seat="selectedSeat"
          :is-designer="draggable"
          :use-canvas="!isDesignerListView"
          :canvas-width="canvasWidth"
          :canvas-height="canvasHeight"
          :grid-snap="gridSnap"
          @seat-click="onSeatClick"
          @table-click="onTableClick"
          @table-layout-change="onTableLayoutChange"
        />

        <CabinGrid
          v-else-if="currentLayoutMode === 'cabins'"
          :seats="filteredSeats"
          :selected-seat="selectedSeat"
          :is-designer="draggable"
          :use-canvas="!isDesignerListView"
          :canvas-width="canvasWidth"
          :canvas-height="canvasHeight"
          :grid-snap="gridSnap"
          @seat-click="onSeatClick"
          @layout-change="onSeatLayoutChange"
        />
      </div>
    </div>

    <!-- Legend -->
    <SeatStatusLegend />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Building2, ChevronDown } from 'lucide-vue-next';
import IndividualSeatGrid from './IndividualSeatGrid.vue';
import StudyTableGrid from './StudyTableGrid.vue';
import CabinGrid from './CabinGrid.vue';
import SeatStatusLegend from './SeatStatusLegend.vue';
import { Seat, StudyTable } from '../../types';

const props = withDefaults(defineProps<{
  seats: Seat[];
  floors: any[];
  sections: any[];
  tables?: StudyTable[];
  selectedSeat?: Seat | null;
  seatClickable?: boolean;
  draggable?: boolean;
  layoutMode?: string; // 'individual' | 'tables' | 'cabins' or fallback
  canvasWidth?: number;
  canvasHeight?: number;
  gridSnap?: boolean;
}>(), {
  tables: () => [],
  selectedSeat: null,
  seatClickable: true,
  draggable: false,
  layoutMode: 'individual',
  canvasWidth: 800,
  canvasHeight: 600,
  gridSnap: true
});

const emit = defineEmits<{
  (e: 'seat-click', seat: Seat): void;
  (e: 'table-click', table: StudyTable): void;
  (e: 'layout-change', seatId: number, x: number, y: number): void;
  (e: 'table-layout-change', tableId: number, x: number, y: number): void;
}>();

// State
const activeFloorId = ref<number | null>(null);
const activeSectionId = ref<number | null>(null);

// Watch for initial floor selection
watch(() => props.floors, (newFloors) => {
  if (newFloors.length > 0 && !activeFloorId.value) {
    activeFloorId.value = newFloors[0].id;
  }
}, { immediate: true });

// Filter sections based on active floor
const currentFloorSections = computed(() => {
  if (!activeFloorId.value) return props.sections;
  return props.sections.filter((s: any) => s.floor_id === activeFloorId.value);
});

// Watch section changes to reset or select default
watch(currentFloorSections, (newSections) => {
  // We keep activeSectionId null by default representing "All Seats"
}, { immediate: true });

const activeSectionName = computed(() => {
  if (activeSectionId.value === null) return 'All Sections';
  const section = props.sections.find((s: any) => s.id === activeSectionId.value);
  return section ? section.name : 'Unknown Section';
});

// Current Layout Mode normalizer
const currentLayoutMode = computed(() => {
  const mode = props.layoutMode;
  if (mode === 'layout' || mode === 'grid') {
    return 'individual'; // map old values to individual
  }
  return mode || 'individual';
});

// Designer Mode View options (allow grid list vs absolute canvas)
// We default to absolute canvas visual layout for students/librarians.
const isDesignerListView = computed(() => {
  // If no coordinate data exists for any seats/tables, render as list/grid view first
  if (currentLayoutMode.value === 'individual') {
    return props.seats.length > 0 && !props.seats.some(s => s.position_x || s.position_y);
  } else if (currentLayoutMode.value === 'tables') {
    return props.tables.length > 0 && !props.tables.some(t => t.position_x || t.position_y);
  } else if (currentLayoutMode.value === 'cabins') {
    return props.seats.length > 0 && !props.seats.some(s => s.position_x || s.position_y);
  }
  return false;
});

// Filter Seats by Floor & Section
const filteredSeats = computed(() => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: Seat) => s.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter((s: Seat) => s.section_id === activeSectionId.value);
  }
  return filtered;
});

// Filter Study Tables by Floor & Section
const filteredTables = computed(() => {
  let filtered = props.tables;
  if (activeFloorId.value) {
    filtered = filtered.filter((t: StudyTable) => t.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter((t: StudyTable) => t.section_id === activeSectionId.value);
  }
  return filtered;
});

// Emits mapping
const onSeatClick = (seat: Seat) => {
  if (props.seatClickable) {
    emit('seat-click', seat);
  }
};

const onTableClick = (table: StudyTable) => {
  emit('table-click', table);
};

const onSeatLayoutChange = (seatId: number, x: number, y: number) => {
  emit('layout-change', seatId, x, y);
};

const onTableLayoutChange = (tableId: number, x: number, y: number) => {
  emit('table-layout-change', tableId, x, y);
};

const getSectionSeats = (sectionId: number) => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: Seat) => s.floor_id === activeFloorId.value);
  }
  return filtered.filter((s: Seat) => s.section_id === sectionId);
};

const getSectionTables = (sectionId: number) => {
  let filtered = props.tables;
  if (activeFloorId.value) {
    filtered = filtered.filter((t: StudyTable) => t.floor_id === activeFloorId.value);
  }
  return filtered.filter((t: StudyTable) => t.section_id === sectionId);
};

// Expose active state properties for parent components
defineExpose({ activeFloorId, activeSectionId });
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
