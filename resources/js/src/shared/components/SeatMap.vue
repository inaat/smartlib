<template>
  <div class="space-y-6">
    <!-- Floor selector + Section tabs -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-4">
      <!-- Floor Selector -->
      <div class="relative" v-if="floors.length > 1">
        <select
          v-model="activeFloorId"
          class="appearance-none bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 py-1.5 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
        </select>
        <Building2 class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
      </div>

      <!-- Section Tabs -->
      <div class="flex items-center bg-gray-50 p-1 rounded-lg border border-gray-200 overflow-x-auto no-scrollbar gap-1" v-if="currentFloorSections.length > 0">
        <button
          v-for="section in currentFloorSections"
          :key="section.id"
          @click="activeSectionId = section.id"
          :class="[
            'px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap',
            activeSectionId === section.id
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          {{ section.name }}
        </button>
      </div>
    </div>

    <!-- Map Card -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-visible">
      <!-- Sub-header -->
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 class="font-bold text-gray-800">
          Seat Map — <span class="text-gray-500">{{ activeSectionName }}</span>
        </h2>
        <div class="flex items-center space-x-2 text-xs text-gray-400 font-semibold">
          <span>{{ sectionSeats.length }} seats</span>
        </div>
      </div>

      <!-- Map Area -->
      <div class="relative bg-gray-50 p-10 min-h-[500px]">
        <!-- Decorative floor plan lines -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div class="absolute top-0 bottom-0 left-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[10%] bottom-[10%] left-0 w-[5%] border-y-2 border-r-2 border-gray-300 rounded-r-3xl"></div>
          <div class="absolute top-0 bottom-0 right-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[40%] bottom-[40%] right-0 w-[5%] border-y-2 border-l-2 border-gray-300 rounded-l-3xl"></div>
        </div>
        <div class="absolute top-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute bottom-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute top-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>

        <!-- Grid layout -->
        <div v-if="!isLayoutView" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 p-8 justify-items-center">
          <div v-for="tableIndex in Math.ceil(sectionSeats.length / 8)" :key="tableIndex" class="space-y-1">
            <!-- Top chairs -->
            <div class="flex items-center space-x-1 justify-center">
              <div
                v-for="seat in sectionSeats.slice((tableIndex-1)*8, (tableIndex-1)*8 + 4)"
                :key="seat.id"
                class="relative group"
                @mouseenter="hoveredSeatId = seat.id"
                @mouseleave="hoveredSeatId = null"
                @click="$emit('seat-click', seat)"
              >
                <div :class="['w-10 h-10 flex items-center justify-center transition-all drop-shadow-sm', seatClickable ? 'cursor-pointer hover:scale-110' : '', getStatusColors(seat).text, isSelected(seat) ? 'scale-110' : '']">
                  <SeatSvg :rotate="false" :highlighted="isSelected(seat)" />
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                      <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                    </div>
                  </div>
                  <!-- Selection ring -->
                  <div v-if="isSelected(seat)" class="absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"></div>
                </div>
                <SeatPopover v-if="hoveredSeatId === seat.id" :seat="seat" :section-name="activeSectionName" position="top" />
              </div>
            </div>

            <!-- Table -->
            <div class="w-48 h-10 bg-white border-2 border-gray-100 rounded-sm shadow-sm flex items-center justify-center relative mx-auto">
              <div class="absolute inset-x-4 h-[2px] bg-gray-50 top-2"></div>
              <div class="absolute inset-x-4 h-[2px] bg-gray-50 bottom-2"></div>
              <div class="flex space-x-4 opacity-10">
                <div v-for="i in 3" :key="i" class="w-8 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <!-- Bottom chairs (rotated) -->
            <div class="flex items-center space-x-1 justify-center">
              <div
                v-for="seat in sectionSeats.slice((tableIndex-1)*8 + 4, (tableIndex-1)*8 + 8)"
                :key="seat.id"
                class="relative group"
                @mouseenter="hoveredSeatId = seat.id"
                @mouseleave="hoveredSeatId = null"
                @click="$emit('seat-click', seat)"
              >
                <div :class="['w-10 h-10 flex items-center justify-center transition-all drop-shadow-sm', seatClickable ? 'cursor-pointer hover:scale-110' : '', getStatusColors(seat).text, isSelected(seat) ? 'scale-110' : '']">
                  <SeatSvg :rotate="true" :highlighted="isSelected(seat)" />
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="mb-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                      <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                    </div>
                  </div>
                  <div v-if="isSelected(seat)" class="absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"></div>
                </div>
                <SeatPopover v-if="hoveredSeatId === seat.id" :seat="seat" :section-name="activeSectionName" position="bottom" />
              </div>
            </div>
          </div>
        </div>

        <div
          v-else
          class="relative w-full overflow-x-auto bg-gray-50/50 flex flex-col items-center justify-start p-8 rounded-2xl border border-gray-100 shadow-inner"
        >
          <div 
            class="relative flex-none w-[800px] h-[600px] bg-white rounded-2xl border-[6px] border-gray-900 shadow-md overflow-hidden"
            @dragover.prevent
            @drop="$emit('drop', $event)"
          >
          <!-- E-Shaped Floor Plan Backdrop -->
          <div class="absolute inset-0 pointer-events-none">
            <!-- Top Windows -->
            <div class="absolute top-0 left-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div>
            <div class="absolute top-0 right-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div>
            
            <!-- Side Windows -->
            <div class="absolute top-[45%] left-0 w-2 h-[15%] bg-blue-100 border-y border-r border-gray-400 rounded-r-sm"></div>
            <div class="absolute top-[20%] right-0 w-2 h-[40%] bg-blue-100 border-y border-l border-gray-400 rounded-l-sm"></div>

            <!-- Top Left Door Swing -->
            <div class="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-gray-800 rounded-br-full opacity-40"></div>
            <!-- Bottom Right Door Swing -->
            <div class="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-gray-800 rounded-tl-full opacity-40"></div>

            <!-- The E-Shaped Table Structure -->
            <!-- Top Horizontal Main Table -->
            <div class="absolute top-[80px] left-[10%] right-[10%] h-[60px] bg-white border-[2px] border-gray-600 shadow-sm z-10"></div>
            
            <!-- Left Vertical Desk -->
            <div class="absolute top-[140px] left-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>
            <!-- Center Vertical Desk -->
            <div class="absolute top-[140px] left-1/2 -translate-x-1/2 w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>
            <!-- Right Vertical Desk -->
            <div class="absolute top-[140px] right-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>

            <!-- Bottom Presentation Desk/Counter -->
            <div class="absolute bottom-[20px] left-[12%] right-[25%] h-[40px] bg-white border-[2px] border-gray-600 shadow-sm"></div>

            <!-- Decor: Plants -->
            <svg class="absolute top-[220px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
            <svg class="absolute top-[380px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
            <svg class="absolute top-[220px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
            <svg class="absolute top-[380px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
            <svg class="absolute bottom-[20px] left-[3%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
            <svg class="absolute bottom-[20px] right-[13%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
            </svg>
          </div>

          <div
            v-for="(seat, idx) in sectionSeats"
            :key="seat.id"
            :draggable="draggable"
            @dragstart="$emit('drag-start', $event, seat)"
            @mouseenter="hoveredSeatId = seat.id"
            @mouseleave="hoveredSeatId = null"
            @click="$emit('seat-click', seat)"
            :style="{ 
              position: 'absolute', 
              left: (seat.position_x || seat.position_y) ? `${seat.position_x}px` : `${eShapeCoordinates[idx]?.x || 20 + ((idx * 60) % 700)}px`, 
              top: (seat.position_x || seat.position_y) ? `${seat.position_y}px` : `${eShapeCoordinates[idx]?.y || 500}px`
            }"
            :class="[
              'w-[52px] h-[52px] flex items-center justify-center transition-all drop-shadow-sm relative',
              draggable ? 'cursor-move active:scale-95' : (seatClickable ? 'cursor-pointer hover:scale-110' : ''),
              getStatusColors(seat).text,
              isSelected(seat) ? 'scale-110' : ''
            ]"
          >
            <SeatSvg :rotate="false" :highlighted="isSelected(seat)" />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
              </div>
            </div>
            <div v-if="isSelected(seat)" class="absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"></div>
            <SeatPopover v-if="hoveredSeatId === seat.id" :seat="seat" :section-name="activeSectionName" position="top" />
          </div>
        </div>
      </div>
      </div>

      <!-- Footer Legend -->
      <div class="bg-gray-50/80 border-t border-gray-100 px-8 py-4 flex flex-wrap items-center gap-6">
        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">Legend</span>
        <div v-for="item in legendItems" :key="item.label" class="flex items-center space-x-2">
          <svg viewBox="0 0 100 100" :class="['w-5 h-5', item.text]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
            <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
          </svg>
          <span class="text-xs font-semibold text-gray-500">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Building2, ChevronDown } from 'lucide-vue-next';

import SeatSvg from './SeatSvg.vue';
import SeatPopover from './SeatPopover.vue';


// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps<{
  seats: any[];
  floors: any[];
  sections: any[];
  selectedSeat?: any;
  activeSectionName?: string;
  draggable?: boolean;
  seatClickable?: boolean;
  layoutMode?: 'grid' | 'layout';
}>();

const emit = defineEmits<{
  (e: 'seat-click', seat: any): void;
  (e: 'drag-start', event: DragEvent, seat: any): void;
  (e: 'drop', event: DragEvent): void;
}>();

// ─── State ────────────────────────────────────────────────────────────────────
const activeFloorId = ref<number | null>(null);
const activeSectionId = ref<number | null>(null);
const hoveredSeatId = ref<number | null>(null);

// ─── Watchers ─────────────────────────────────────────────────────────────────
watch(() => props.floors, (newFloors) => {
  if (newFloors.length > 0 && !activeFloorId.value) {
    activeFloorId.value = newFloors[0].id;
  }
}, { immediate: true });

// ─── Computed ─────────────────────────────────────────────────────────────────
const currentFloorSections = computed(() => {
  if (!activeFloorId.value) return props.sections;
  return props.sections.filter((s: any) => s.floor_id === activeFloorId.value);
});

// Must be declared AFTER currentFloorSections to avoid Temporal Dead Zone error
watch(currentFloorSections, (newSections) => {
  if (newSections.length > 0 && !activeSectionId.value) {
    activeSectionId.value = newSections[0].id;
  }
}, { immediate: true });

const activeSectionName = computed(() => {
  const section = props.sections.find((s: any) => s.id === activeSectionId.value);
  return section ? section.name : 'All Seats';
});

const sectionSeats = computed(() => {
  let filtered = props.seats;
  if (activeFloorId.value) {
    filtered = filtered.filter((s: any) => s.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter((s: any) => s.section_id === activeSectionId.value);
  } else if (currentFloorSections.value.length > 0) {
    filtered = filtered.filter((s: any) => s.section_id === currentFloorSections.value[0].id);
  }
  return filtered;
});

const isLayoutView = computed(() => {
  if (props.layoutMode) {
    return props.layoutMode === 'layout';
  }
  return sectionSeats.value.some((s: any) => s.position_x || s.position_y);
});

const legendItems = [
  { label: 'Available', text: 'text-[#29B072]' },
  { label: 'Reserved', text: 'text-[#617DFF]' },
  { label: 'Occupied', text: 'text-[#FF9D43]' },
  { label: 'Overstay', text: 'text-[#F4D339]' },
  { label: 'Serious Overstay', text: 'text-[#E95252]' },
  { label: 'Maintenance', text: 'text-[#9CA3AF]' },
];

const getStatusColors = (seat: any) => {
  switch (seat.status) {
    case 'available':       return { text: 'text-[#29B072]', dotBg: 'bg-[#29B072]' };
    case 'occupied':        return { text: 'text-[#FF9D43]', dotBg: 'bg-[#FF9D43]' };
    case 'reserved':        return { text: 'text-[#617DFF]', dotBg: 'bg-[#617DFF]' };
    case 'overstay':        return { text: 'text-[#F4D339]', dotBg: 'bg-[#F4D339]' };
    case 'serious_overstay':return { text: 'text-[#E95252]', dotBg: 'bg-[#E95252]' };
    case 'maintenance':     return { text: 'text-[#9CA3AF]', dotBg: 'bg-[#9CA3AF]' };
    default:                return { text: 'text-gray-400',  dotBg: 'bg-gray-400' };
  }
};

const isSelected = (seat: any) => props.selectedSeat?.id === seat.id;

// Expose active section for parent
defineExpose({ activeFloorId, activeSectionId });

const eShapeCoordinates = [
  // Top Row (0-19) - 20 seats
  { x: 50, y: 30 }, { x: 85, y: 30 }, { x: 120, y: 30 }, { x: 155, y: 30 }, { x: 190, y: 30 }, 
  { x: 225, y: 30 }, { x: 260, y: 30 }, { x: 295, y: 30 }, { x: 330, y: 30 }, { x: 365, y: 30 },
  { x: 400, y: 30 }, { x: 435, y: 30 }, { x: 470, y: 30 }, { x: 505, y: 30 }, { x: 540, y: 30 },
  { x: 575, y: 30 }, { x: 610, y: 30 }, { x: 645, y: 30 }, { x: 680, y: 30 }, { x: 715, y: 30 },
  
  // Left Desk Column (20-45) - 26 seats
  { x: 75, y: 150 }, { x: 185, y: 150 }, { x: 75, y: 185 }, { x: 185, y: 185 },
  { x: 75, y: 220 }, { x: 185, y: 220 }, { x: 75, y: 255 }, { x: 185, y: 255 },
  { x: 75, y: 290 }, { x: 185, y: 290 }, { x: 75, y: 325 }, { x: 185, y: 325 },
  { x: 75, y: 360 }, { x: 185, y: 360 }, { x: 75, y: 395 }, { x: 185, y: 395 },
  { x: 60, y: 445 }, { x: 95, y: 445 }, { x: 130, y: 445 }, { x: 165, y: 445 }, { x: 200, y: 445 },
  
  // Center Desk Column (46-71) - 26 seats
  { x: 325, y: 150 }, { x: 435, y: 150 }, { x: 325, y: 185 }, { x: 435, y: 185 },
  { x: 325, y: 220 }, { x: 435, y: 220 }, { x: 325, y: 255 }, { x: 435, y: 255 },
  { x: 325, y: 290 }, { x: 435, y: 290 }, { x: 325, y: 325 }, { x: 435, y: 325 },
  { x: 325, y: 360 }, { x: 435, y: 360 }, { x: 325, y: 395 }, { x: 435, y: 395 },
  { x: 310, y: 445 }, { x: 345, y: 445 }, { x: 380, y: 445 }, { x: 415, y: 445 }, { x: 450, y: 445 },
  
  // Right Desk Column (72-97) - 26 seats
  { x: 575, y: 150 }, { x: 685, y: 150 }, { x: 575, y: 185 }, { x: 685, y: 185 },
  { x: 575, y: 220 }, { x: 685, y: 220 }, { x: 575, y: 255 }, { x: 685, y: 255 },
  { x: 575, y: 290 }, { x: 685, y: 290 }, { x: 575, y: 325 }, { x: 685, y: 325 },
  { x: 575, y: 360 }, { x: 685, y: 360 }, { x: 575, y: 395 }, { x: 685, y: 395 },
  { x: 560, y: 445 }, { x: 595, y: 445 }, { x: 630, y: 445 }, { x: 665, y: 445 }, { x: 700, y: 445 }
];
</script>
