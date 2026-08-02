<template>
  <div ref="rootContainer" class="space-y-6 font-outfit w-full">
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

      <!-- Section Tabs (Scrollable & Responsive, 100% Contained, Hidden Scrollbar Line) -->
      <div 
        v-if="currentFloorSections.length > 0"
        class="flex items-center bg-slate-100/90 p-1 rounded-2xl max-w-full overflow-x-auto gap-1 border border-slate-200/50 flex-shrink-0 no-scrollbar"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        <button
          @click="activeSectionId = null"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent',
            activeSectionId === null
              ? 'bg-white text-emerald-700 shadow-sm border-slate-200/60'
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
            'px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent',
            activeSectionId === section.id
              ? 'bg-white text-emerald-700 shadow-sm border-slate-200/60'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          {{ section.name }}
        </button>
      </div>

      <!-- Subsection Tabs -->
      <div 
        v-if="currentSubsections.length > 0"
        class="flex items-center bg-blue-50/80 p-1 rounded-2xl max-w-full overflow-x-auto gap-1 border border-blue-100 flex-shrink-0 no-scrollbar"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        <button
          @click="activeSubsectionId = null"
          :class="[
            'px-3 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent',
            activeSubsectionId === null
              ? 'bg-white text-blue-700 shadow-sm border-blue-200/60'
              : 'text-blue-600/80 hover:text-blue-900'
          ]"
        >
          All Subsections
        </button>
        <button
          v-for="sub in currentSubsections"
          :key="sub.id"
          @click="activeSubsectionId = sub.id"
          :class="[
            'px-3.5 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent',
            activeSubsectionId === sub.id
              ? 'bg-white text-blue-700 shadow-sm border-blue-200/60'
              : 'text-blue-600/80 hover:text-blue-900'
          ]"
        >
          <span>{{ sub.name }}</span>
        </button>
      </div>
    </div>

    <!-- Active Section / Total Seats Header -->
    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 py-4 flex items-center justify-between">
      <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">
        Seat Map — <span class="text-emerald-700 font-bold capitalize">{{ activeSectionName }}</span>
      </h2>
      <div class="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center space-x-2">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{{ filteredSeats.length }} Seats / {{ currentLayoutMode }} Layout</span>
      </div>
    </div>

    <!-- Table Capacity Switcher when in Tables Layout Mode -->


    <!-- Render Sub-Grids based on configured layout mode -->
    <div class="relative">
      <!-- Section-partitioned view if All Sections is selected -->
      <div v-if="activeSectionId === null" class="space-y-10">
        <div 
          v-for="section in currentFloorSections" 
          :key="section.id"
          class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-6"
        >
          <!-- Partition Header -->
          <div class="border-b border-slate-100 pb-3 flex items-center justify-between text-left">
            <h3 class="text-xs font-bold uppercase text-slate-700 tracking-wider flex items-center space-x-1.5">
              <span class="w-1.5 h-3 bg-emerald-600 rounded-sm"></span>
              <span>{{ section.name.toLowerCase().includes('section') ? section.name : `${section.name} Section` }}</span>
            </h3>
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded-full">
              {{ getSectionSeats(section.id).length }} Seats
            </span>
          </div>

          <!-- If section has subsections enabled, group seats by subsection -->
          <div v-if="!!section.has_subsections && section.subsections && section.subsections.length > 0" class="space-y-8">
            <div
              v-for="sub in section.subsections"
              :key="sub.id"
              v-show="getSubsectionSeats(section.id, sub.id).length > 0"
              class="space-y-3"
            >
              <div class="flex items-center justify-between text-left border-b border-blue-100/80 pb-2">
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-blue-900">
                    {{ sub.name }}
                  </h4>
                </div>
                <span class="text-[10px] font-bold text-blue-700 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full">
                  {{ getSubsectionSeats(section.id, sub.id).length }} Seats
                </span>
              </div>

              <IndividualSeatGrid
                v-if="currentLayoutMode === 'individual'"
                :seats="getSubsectionSeats(section.id, sub.id)"
                :sections="sections"
                :selected-seat="selectedSeat"
                :is-designer="draggable"
                :use-canvas="!isDesignerListView"
                :canvas-width="resolvedCanvasWidth"
                :canvas-height="canvasHeight"
                :grid-snap="gridSnap"
                :section-name="`${section.name} — ${sub.name}`"
                @seat-click="onSeatClick"
                @layout-change="onSeatLayoutChange"
              />

              <StudyTableGrid
                v-else-if="currentLayoutMode === 'tables'"
                :tables="getSectionTables(section.id)"
                :seats="getSubsectionSeats(section.id, sub.id)"
                :selected-seat="selectedSeat"
                :is-designer="draggable"
                :use-canvas="!isDesignerListView"
                :canvas-width="resolvedCanvasWidth"
                :canvas-height="canvasHeight"
                :grid-snap="gridSnap"
                :table-capacity="globalTableCapacity"
                :tables-per-row="tablesPerRow"
                @seat-click="onSeatClick"
                @table-click="onTableClick"
                @table-layout-change="onTableLayoutChange"
              />

              <CabinGrid
                v-else-if="currentLayoutMode === 'cabins'"
                :seats="getSubsectionSeats(section.id, sub.id)"
                :sections="sections"
                :selected-seat="selectedSeat"
                :is-designer="draggable"
                :use-canvas="!isDesignerListView"
                :canvas-width="resolvedCanvasWidth"
                :canvas-height="canvasHeight"
                :grid-snap="gridSnap"
                :section-name="`${section.name} — ${sub.name}`"
                @seat-click="onSeatClick"
                @layout-change="onSeatLayoutChange"
              />
            </div>

            <!-- Unassigned Seats inside Section -->
            <div
              v-if="getUnassignedSubSeats(section.id).length > 0"
              class="space-y-3 pt-2"
            >
              <div class="flex items-center justify-between text-left border-b border-slate-100 pb-2">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-2">
                  <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span>General / Unassigned Seats</span>
                </h4>
                <span class="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                  {{ getUnassignedSubSeats(section.id).length }} Seats
                </span>
              </div>

              <IndividualSeatGrid
                v-if="currentLayoutMode === 'individual'"
                :seats="getUnassignedSubSeats(section.id)"
                :sections="sections"
                :selected-seat="selectedSeat"
                :is-designer="draggable"
                :use-canvas="!isDesignerListView"
                :canvas-width="resolvedCanvasWidth"
                :canvas-height="canvasHeight"
                :grid-snap="gridSnap"
                :section-name="section.name"
                @seat-click="onSeatClick"
                @layout-change="onSeatLayoutChange"
              />

              <CabinGrid
                v-else-if="currentLayoutMode === 'cabins'"
                :seats="getUnassignedSubSeats(section.id)"
                :sections="sections"
                :selected-seat="selectedSeat"
                :is-designer="draggable"
                :use-canvas="!isDesignerListView"
                :canvas-width="resolvedCanvasWidth"
                :canvas-height="canvasHeight"
                :grid-snap="gridSnap"
                :section-name="section.name"
                @seat-click="onSeatClick"
                @layout-change="onSeatLayoutChange"
              />
            </div>
          </div>

          <!-- Standard Section layout if no subsections -->
          <div v-else class="relative">
            <IndividualSeatGrid
              v-if="currentLayoutMode === 'individual'"
              :seats="getSectionSeats(section.id)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
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
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :table-capacity="globalTableCapacity"
              :tables-per-row="tablesPerRow"
              @seat-click="onSeatClick"
              @table-click="onTableClick"
              @table-layout-change="onTableLayoutChange"
            />

            <CabinGrid
              v-else-if="currentLayoutMode === 'cabins'"
              :seats="getSectionSeats(section.id)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="section.name"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />
          </div>
        </div>
      </div>

      <!-- Single section view -->
      <div v-else class="space-y-6">
        <!-- If All Subsections tab is selected and subsections exist, group seats by subsection -->
        <div v-if="activeSubsectionId === null && currentSubsections.length > 0" class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div
            v-for="sub in currentSubsections"
            :key="sub.id"
            v-show="getSubsectionSeats(activeSectionId, sub.id).length > 0"
            class="space-y-3"
          >
            <div class="flex items-center justify-between text-left border-b border-blue-100 pb-2.5">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 class="text-xs font-bold uppercase tracking-wider text-blue-900">
                  {{ sub.name }}
                </h3>
              </div>
              <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                {{ getSubsectionSeats(activeSectionId, sub.id).length }} Seats
              </span>
            </div>

            <IndividualSeatGrid
              v-if="currentLayoutMode === 'individual'"
              :seats="getSubsectionSeats(activeSectionId, sub.id)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="`${activeSectionName} — ${sub.name}`"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />

            <StudyTableGrid
              v-else-if="currentLayoutMode === 'tables'"
              :tables="filteredTables"
              :seats="getSubsectionSeats(activeSectionId, sub.id)"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :table-capacity="globalTableCapacity"
              :tables-per-row="tablesPerRow"
              @seat-click="onSeatClick"
              @table-click="onTableClick"
              @table-layout-change="onTableLayoutChange"
            />

            <CabinGrid
              v-else-if="currentLayoutMode === 'cabins'"
              :seats="getSubsectionSeats(activeSectionId, sub.id)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="`${activeSectionName} — ${sub.name}`"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />
          </div>

          <!-- Unassigned seats in section -->
          <div
            v-if="getUnassignedSubSeats(activeSectionId).length > 0"
            class="space-y-3 pt-2"
          >
            <div class="flex items-center justify-between text-left border-b border-slate-100 pb-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span>General / Unassigned Seats</span>
              </h3>
              <span class="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                {{ getUnassignedSubSeats(activeSectionId).length }} Seats
              </span>
            </div>

            <IndividualSeatGrid
              v-if="currentLayoutMode === 'individual'"
              :seats="getUnassignedSubSeats(activeSectionId)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="activeSectionName"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />

            <CabinGrid
              v-else-if="currentLayoutMode === 'cabins'"
              :seats="getUnassignedSubSeats(activeSectionId)"
              :sections="sections"
              :selected-seat="selectedSeat"
              :is-designer="draggable"
              :use-canvas="!isDesignerListView"
              :canvas-width="resolvedCanvasWidth"
              :canvas-height="canvasHeight"
              :grid-snap="gridSnap"
              :section-name="activeSectionName"
              @seat-click="onSeatClick"
              @layout-change="onSeatLayoutChange"
            />
          </div>
        </div>

        <!-- Single subsection or plain section view -->
        <div v-else>
          <IndividualSeatGrid
            v-if="currentLayoutMode === 'individual'"
            :seats="filteredSeats"
            :sections="sections"
            :selected-seat="selectedSeat"
            :is-designer="draggable"
            :use-canvas="!isDesignerListView"
            :canvas-width="resolvedCanvasWidth"
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
            :canvas-width="resolvedCanvasWidth"
            :canvas-height="canvasHeight"
            :grid-snap="gridSnap"
            :table-capacity="globalTableCapacity"
            :tables-per-row="tablesPerRow"
            @seat-click="onSeatClick"
            @table-click="onTableClick"
            @table-layout-change="onTableLayoutChange"
          />

          <CabinGrid
            v-else-if="currentLayoutMode === 'cabins'"
            :seats="filteredSeats"
            :sections="sections"
            :selected-seat="selectedSeat"
            :is-designer="draggable"
            :use-canvas="!isDesignerListView"
            :canvas-width="resolvedCanvasWidth"
            :canvas-height="canvasHeight"
            :grid-snap="gridSnap"
            :section-name="activeSectionName"
            @seat-click="onSeatClick"
            @layout-change="onSeatLayoutChange"
          />
        </div>
      </div>
    </div>

    <!-- Legend -->
    <SeatStatusLegend v-if="showLegend" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { Building2, ChevronDown, Grid } from 'lucide-vue-next';
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
  tablesPerRow?: number;
  tableCapacity?: number;
  showLegend?: boolean;
}>(), {
  tables: () => [],
  selectedSeat: null,
  seatClickable: true,
  draggable: false,
  layoutMode: 'individual',
  canvasWidth: 780,
  canvasHeight: 600,
  gridSnap: true,
  tablesPerRow: 3,
  tableCapacity: 4,
  showLegend: true
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
const activeSubsectionId = ref<number | null>(null);
const globalTableCapacity = ref<number>(props.tableCapacity || 4);

watch(() => props.tableCapacity, (newVal) => {
  if (newVal && [2, 4, 6, 8, 10, 12, 14, 16].includes(newVal)) {
    globalTableCapacity.value = newVal;
  }
});

const loadGlobalTableCapacity = () => {
  try {
    const saved = localStorage.getItem('smartlib_global_table_capacity') || localStorage.getItem('smartlib_table_capacity');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if ([2, 4, 6, 8, 10, 12, 14, 16].includes(parsed)) {
        globalTableCapacity.value = parsed;
      }
    } else if (props.tableCapacity) {
      globalTableCapacity.value = props.tableCapacity;
    }
  } catch (e) {}
};

const rootContainer = ref<HTMLElement | null>(null);
const dynamicCanvasWidth = ref(780);

const updateWidth = () => {
  if (rootContainer.value) {
    const rect = rootContainer.value.getBoundingClientRect();
    // Safely deduct padding from the wrapper card to get dynamic width of seating designer canvas
    const width = Math.floor(rect.width - 48);
    dynamicCanvasWidth.value = Math.max(350, width);
  }
};

const resolvedCanvasWidth = computed(() => {
  if (props.canvasWidth !== 780) {
    return props.canvasWidth;
  }
  return dynamicCanvasWidth.value;
});

onMounted(() => {
  loadGlobalTableCapacity();
  updateWidth();
  window.addEventListener('resize', updateWidth);
  window.addEventListener('storage', loadGlobalTableCapacity);
  window.addEventListener('smartlib_table_capacity_changed', loadGlobalTableCapacity);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
  window.removeEventListener('storage', loadGlobalTableCapacity);
  window.removeEventListener('smartlib_table_capacity_changed', loadGlobalTableCapacity);
});

watch([activeSectionId, activeFloorId, () => props.layoutMode], () => {
  // Let layout DOM settle before recalculating
  setTimeout(updateWidth, 80);
});

const setGlobalTableCapacity = (cap: number) => {
  globalTableCapacity.value = cap;
  try {
    localStorage.setItem('smartlib_global_table_capacity', cap.toString());
    window.dispatchEvent(new Event('smartlib_table_capacity_changed'));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {}
};

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

// Current section's subsections
const currentSubsections = computed(() => {
  if (!activeSectionId.value) return [];
  const section = props.sections.find((s: any) => s.id === activeSectionId.value);
  if (!section || section.has_subsections === false) return [];
  return section.subsections || [];
});

const getSubSeatCount = (subId: number) => {
  return props.seats.filter((s: Seat) => s.subsection_id === subId).length;
};

watch(activeSectionId, () => {
  activeSubsectionId.value = null;
});

// Watch section changes to reset or select default
watch(currentFloorSections, (newSections) => {
  // We keep activeSectionId null by default representing "All Seats"
}, { immediate: true });

const activeSectionName = computed(() => {
  if (activeSectionId.value === null) return 'All Sections';
  const section = props.sections.find((s: any) => s.id === activeSectionId.value);
  if (!section) return 'Unknown Section';
  if (activeSubsectionId.value) {
    const sub = section.subsections?.find((sub: any) => sub.id === activeSubsectionId.value);
    if (sub) return `${section.name} — ${sub.name}`;
  }
  return section.name;
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

// Filter Seats by Floor & Section & Subsection
const filteredSeats = computed(() => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: Seat) => s.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter((s: Seat) => s.section_id === activeSectionId.value);
  }
  if (activeSubsectionId.value) {
    filtered = filtered.filter((s: Seat) => s.subsection_id === activeSubsectionId.value);
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

const getSubsectionSeats = (sectionId: number, subsectionId: number) => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: Seat) => s.floor_id === activeFloorId.value);
  }
  return filtered.filter((s: Seat) => s.section_id === sectionId && s.subsection_id === subsectionId);
};

const getUnassignedSubSeats = (sectionId: number) => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: Seat) => s.floor_id === activeFloorId.value);
  }
  return filtered.filter((s: Seat) => s.section_id === sectionId && !s.subsection_id);
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
