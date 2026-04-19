<template>
  <div class="p-6 space-y-6">
    <!-- Top Header -->
    <div class="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold text-gray-900">Seat Map</h1>
        <div class="h-6 w-px bg-gray-200"></div>
        <div class="flex items-center space-x-2">
          <!-- Floor Selector -->
          <div class="relative">
            <select
              v-model="activeFloorId"
              class="appearance-none flex items-center bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 py-1.5 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                {{ floor.name }}
              </option>
            </select>
            <Building2 class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>

          <!-- Section Tabs -->
          <div class="flex items-center bg-gray-50 p-1 rounded-lg border border-gray-200 max-w-[280px] sm:max-w-sm overflow-x-auto no-scrollbar">
            <button
              v-for="section in currentFloorSections"
              :key="section.id"
              @click="activeSectionId = section.id"
              :class="[
                'px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap',
                activeSectionId === section.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              {{ section.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button
          @click="isLayoutMode = !isLayoutMode"
          :class="[
            'px-4 py-2 rounded-lg transition-all flex items-center space-x-2 border shadow-sm',
            isLayoutMode 
              ? 'bg-purple-600 text-white border-purple-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          ]"
        >
          <Move class="w-4 h-4" />
          <span class="text-sm font-medium">{{ isLayoutMode ? 'View Mode' : 'Layout Mode' }}</span>
          <Settings v-if="isLayoutMode" class="w-3.5 h-3.5 ml-1" />
        </button>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <div 
        v-for="(stat, key) in [
          { label: 'Total Seats', count: seatStats.total, delta: 3, color: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: 'Available', count: seatStats.available, delta: 20, color: 'green', bg: 'bg-green-50', text: 'text-green-600' },
          { label: 'Occupied', count: seatStats.occupied, delta: 13, color: 'orange', bg: 'bg-orange-50', text: 'text-orange-600' },
          { label: 'Reserved', count: seatStats.reserved, delta: 5, color: 'indigo', bg: 'bg-indigo-50', text: 'text-indigo-600' },
          { label: 'Overstay', count: seatStats.overstay, delta: 3, color: 'yellow', bg: 'bg-yellow-50', text: 'text-yellow-600' },
          { label: 'Serious Overstay', count: seatStats.serious_overstay, delta: 1, color: 'red', bg: 'bg-red-50', text: 'text-red-600' },
          { label: 'Maintenance', count: seatStats.maintenance, delta: 2, color: 'gray', bg: 'bg-gray-100', text: 'text-gray-600' }
        ]" 
        :key="key"
        class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4"
      >
        <div :class="['w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg', stat.bg, stat.text]">
          {{ stat.count }}
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-500 whitespace-nowrap">{{ stat.label }}</p>
          <p class="text-[10px] text-gray-400 font-medium">{{ stat.delta }}</p>
        </div>
      </div>
    </div>

    <!-- Main Seat Map Card -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-visible flex flex-col min-h-[600px]">
      <!-- Sub-header -->
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 class="font-bold text-gray-800">Seat Map - <span class="text-gray-500">{{ activeSectionName }}</span></h2>
        <div class="text-sm font-medium text-gray-400">{{ activeSectionName }}</div>
      </div>

      <!-- Scrollable Map Area -->
      <div class="flex-1 overflow-visible bg-gray-50 relative p-12">
        <!-- Floor Plan Outline Elements -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div class="absolute top-0 bottom-0 left-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[10%] bottom-[10%] left-0 w-[5%] border-y-2 border-r-2 border-gray-300 rounded-r-3xl"></div>
          <div class="absolute top-0 bottom-0 right-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[40%] bottom-[40%] right-0 w-[5%] border-y-2 border-l-2 border-gray-300 rounded-l-3xl"></div>
        </div>

        <!-- Exit Labels -->
        <div class="absolute top-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute bottom-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute top-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute bottom-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>

        <!-- Desk Container Layer -->
        <div class="relative w-full h-full min-h-[500px]">
          <!-- When in Grid View -->
          <div v-if="!isLayoutMode" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 p-8 justify-items-center">
            <!-- Simulated Tables/Desks by grouping seats -->
            <div v-for="tableIndex in Math.ceil(sectionSeats.length / 8)" :key="tableIndex" class="space-y-1">
              <!-- Top Row of Chairs -->
              <div class="flex items-center space-x-1 justify-center">
                <div 
                  v-for="seat in sectionSeats.slice((tableIndex-1)*8, (tableIndex-1)*8 + 4)" 
                  :key="seat.id" 
                  class="relative group"
                  @mouseenter="hoveredSeat = seat"
                  @mouseleave="hoveredSeat = null"
                >
                  <!-- Chair Icon -->
                  <div 
                    :class="[
                      'w-10 h-10 flex items-center justify-center transition-all cursor-pointer hover:scale-110 drop-shadow-sm',
                      getStatusColors(seat.status).text
                    ]"
                  >
                    <svg viewBox="0 0 100 100" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                      <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                      <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                        <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Hover Detail Popover -->
                  <transition name="fade">
                    <div
                      v-if="hoveredSeat?.id === seat.id"
                      class="absolute bottom-[110%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
                    >
                      <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                        <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
                        <div :class="['w-2 h-2 rounded-full', getStatusColors(seat.status).dotBg]"></div>
                      </div>
                      <div class="p-4 space-y-4">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                            <User class="w-5 h-5" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold text-gray-900 truncate">{{ seat.current_booking?.user_name || 'Available' }}</p>
                            <p class="text-xs font-medium text-gray-500">
                              {{ seat.current_booking?.minutes_left ? seat.current_booking.minutes_left + ' mins Left' : 'Available' }}
                            </p>
                          </div>
                        </div>
                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2 border-t border-gray-50">
                          {{ activeSectionName }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>

              <!-- Table Visual -->
              <div class="w-48 h-10 bg-white border-2 border-gray-100 rounded-sm shadow-sm flex items-center justify-center relative mx-auto">
                <div class="absolute inset-x-4 h-[2px] bg-gray-50 top-2"></div>
                <div class="absolute inset-x-4 h-[2px] bg-gray-50 bottom-2"></div>
                <!-- Table Decoration -->
                <div class="flex space-x-4 opacity-10">
                   <div v-for="i in 3" :key="i" class="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              <!-- Bottom Row of Chairs -->
              <div class="flex items-center space-x-1 justify-center">
                <div 
                  v-for="seat in sectionSeats.slice((tableIndex-1)*8 + 4, (tableIndex-1)*8 + 8)" 
                  :key="seat.id" 
                  class="relative group"
                  @mouseenter="hoveredSeat = seat"
                  @mouseleave="hoveredSeat = null"
                >
                  <!-- Chair Icon (Flipped) -->
                  <div 
                    :class="[
                      'w-10 h-10 flex items-center justify-center transition-all cursor-pointer hover:scale-110 drop-shadow-sm',
                      getStatusColors(seat.status).text
                    ]"
                  >
                    <svg viewBox="0 0 100 100" class="w-10 h-10 rotate-180" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                      <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                      <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="mb-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                        <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Hover Detail Popover -->
                  <transition name="fade">
                    <div
                      v-if="hoveredSeat?.id === seat.id"
                      class="absolute top-[110%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
                    >
                      <!-- same popover content -->
                      <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                        <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
                        <div :class="['w-2 h-2 rounded-full', getStatusColors(seat.status).dotBg]"></div>
                      </div>
                      <div class="p-4 space-y-4">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                            <User class="w-5 h-5" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold text-gray-900 truncate">{{ seat.current_booking?.user_name || 'Available' }}</p>
                            <p class="text-xs font-medium text-gray-500">
                              {{ seat.current_booking?.minutes_left ? seat.current_booking.minutes_left + ' mins Left' : 'Available' }}
                            </p>
                          </div>
                        </div>
                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2 border-t border-gray-50">
                          {{ activeSectionName }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <!-- When in Layout Mode -->
          <div 
            v-else 
            class="relative w-full h-[600px] bg-white/50 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden transition-all"
            @dragover.prevent
            @drop="onDrop($event)"
          >
            <div
              v-for="seat in sectionSeats"
              :key="seat.id"
              :draggable="true"
              @dragstart="onDragStart($event, seat)"
              :style="{
                position: 'absolute',
                left: `${seat.position_x}px`,
                top: `${seat.position_y}px`,
              }"
              :class="[
                'w-10 h-10 flex items-center justify-center transition-all cursor-move hover:scale-110 active:scale-95 drop-shadow-sm',
                getStatusColors(seat.status).text
              ]"
            >
              <svg viewBox="0 0 100 100" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                  <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Legend Bar -->
      <div class="bg-gray-50/80 backdrop-blur-sm border-t border-gray-100 px-8 py-4 flex items-center justify-center space-x-12">
        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest mr-4">Seat</span>
        
        <div v-for="item in [
          { label: 'Available', status: 'available' },
          { label: 'Reserved', status: 'reserved' },
          { label: 'Occupied', status: 'occupied' },
          { label: 'Overstay', status: 'overstay' },
          { label: 'Serious Overstay', status: 'serious_overstay' },
          { label: 'Maintenance', status: 'maintenance' }
        ]" :key="item.label" class="flex items-center space-x-2">
          <svg viewBox="0 0 100 100" :class="['w-6 h-6', getStatusColors(item.status).text]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
            <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
            <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
            <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
            <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
            <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
            <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
          </svg>
          <span class="text-xs font-semibold text-gray-500">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Selected Seat Details Modal -->
    <div
      v-if="selectedSeat"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      @click="selectedSeat = null"
    >
      <div
        class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6"
        @click.stop
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">Seat {{ selectedSeat.seat_number }}</h3>
          <button
            @click="selectedSeat = null"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X class="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="text-sm font-medium text-gray-700">Status</label>
            <select
              v-model="selectedSeat.status"
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="reserved">Reserved</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-medium text-gray-700 flex items-center">
                <Monitor class="w-4 h-4 mr-2 text-gray-400" />
                Computer
              </label>
              <select
                v-model="selectedSeat.has_computer"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-700 flex items-center">
                <Layout class="w-4 h-4 mr-2 text-gray-400" />
                Near Window
              </label>
              <select
                v-model="selectedSeat.near_window"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 flex items-center">
              <Zap class="w-4 h-4 mr-2 text-gray-400" />
              Electric Sockets
            </label>
            <input
              type="number"
              v-model="selectedSeat.socket_count"
              min="0"
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div v-if="selectedSeat.currentUser">
            <label class="text-sm font-medium text-gray-700">Current User</label>
            <div class="mt-1 p-3 bg-gray-50 rounded-lg">
              <p class="font-medium text-gray-900">{{ selectedSeat.currentUser }}</p>
              <p class="text-sm text-gray-600">{{ selectedSeat.bookingTime }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              @click="updateSeat"
              class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Update Seat
            </button>
            <button
              @click="selectedSeat = null"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import {
  Building2,
  CheckCircle,
  RefreshCw,
  Settings,
  User,
  Lock,
  X,
  AlertTriangle,
  Layout,
  Wind,
  Wrench,
  Printer,
  Monitor,
  Zap,
  Move,
  ChevronDown,
  Plus,
  BookOpen
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { toast } = useSwal();

const seats = ref<any[]>([]);
const loading = ref(false);
const isLayoutMode = ref(false);

const activeFloorId = ref<number | null>(null);
const activeSectionId = ref<number | null>(null);

const selectedSeat = ref<any>(null);
const hoveredSeat = ref<any>(null);
const draggedSeat = ref<any>(null);
const dragOffset = ref({ x: 0, y: 0 });

const floors = ref<any[]>([]);
const sections = ref<any[]>([]);

const currentFloorSections = computed(() => {
  if (!activeFloorId.value) return sections.value;
  return sections.value.filter((s: any) => s.floor_id === activeFloorId.value);
});

const activeSectionName = computed(() => {
  const section = sections.value.find((s: any) => s.id === activeSectionId.value);
  return section ? section.name : 'Unknown Section';
});



watch(floors, (newFloors) => {
  if (newFloors.length > 0 && (!activeFloorId.value || !newFloors.find((f: any) => f.id === activeFloorId.value))) {
    activeFloorId.value = newFloors[0].id;
  }
}, { immediate: true });

watch(currentFloorSections, (newSections) => {
  if (newSections.length > 0 && (!activeSectionId.value || !newSections.find((s: any) => s.id === activeSectionId.value))) {
    activeSectionId.value = newSections[0].id;
  }
}, { immediate: true });

const sectionSeats = computed(() => {
  let filtered = seats.value;
  if (activeFloorId.value) {
    filtered = filtered.filter(seat => seat.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter(seat => seat.section_id === activeSectionId.value);
  } else if (currentFloorSections.value.length > 0) {
    filtered = filtered.filter(seat => seat.section_id === currentFloorSections.value[0].id);
  }
  return filtered;
});

const seatStats = computed(() => {
  return {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    overstay: seats.value.filter(s => s.status === 'overstay').length,
    serious_overstay: seats.value.filter(s => s.status === 'serious_overstay').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance').length
  };
});

const fetchSeats = async () => {
  loading.value = true;
  try {
    const [seatsData, floorsData, sectionsData] = await Promise.all([
      librarianAPI.getSeats(),
      librarianAPI.getActiveFloors(),
      librarianAPI.getActiveSections()
    ]);
    seats.value = seatsData;
    floors.value = floorsData.sort((a: any, b: any) => a.level - b.level);
    sections.value = sectionsData;
  } catch (error) {
    console.error('Error fetching layout data:', error);
  } finally {
    loading.value = false;
  }
};

const getStatusColors = (status: string) => {
  switch (status) {
    case 'available': return { 
      text: 'text-[#29B072]', 
      bg: 'bg-[#E7F7F0]', 
      dotBg: 'bg-[#29B072]' 
    };
    case 'occupied': return { 
      text: 'text-[#FF9D43]', 
      bg: 'bg-[#FFF3E8]', 
      dotBg: 'bg-[#FF9D43]' 
    };
    case 'reserved': return { 
      text: 'text-[#617DFF]', 
      bg: 'bg-[#EEF2FF]', 
      dotBg: 'bg-[#617DFF]' 
    };
    case 'overstay': return { 
      text: 'text-[#F4D339]', 
      bg: 'bg-[#FFFCE8]', 
      dotBg: 'bg-[#F4D339]' 
    };
    case 'serious_overstay': return { 
      text: 'text-[#E95252]', 
      bg: 'bg-[#FFE8E8]', 
      dotBg: 'bg-[#E95252]' 
    };
    case 'maintenance': return { 
      text: 'text-[#9CA3AF]', 
      bg: 'bg-[#F3F4F6]', 
      dotBg: 'bg-[#9CA3AF]' 
    };
    default: return { 
      text: 'text-gray-400', 
      bg: 'bg-white', 
      dotBg: 'bg-gray-400' 
    };
  }
};

const selectSeat = (seat: any) => {
  selectedSeat.value = { ...seat };
};

const updateSeat = async () => {
  if (!selectedSeat.value) return;
  try {
    await librarianAPI.updateSeat(selectedSeat.value.id, {
      status: selectedSeat.value.status,
      has_computer: selectedSeat.value.has_computer,
      near_window: selectedSeat.value.near_window,
      socket_count: selectedSeat.value.socket_count
    });
    await fetchSeats();
    selectedSeat.value = null;
  } catch (error) {
    console.error('Error updating seat:', error);
  }
};

const onDragStart = (event: DragEvent, seat: any) => {
  if (!isLayoutMode.value) return;
  draggedSeat.value = seat;
  const rect = (event.target as HTMLElement).getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  event.dataTransfer?.setData('text/plain', seat.id.toString());
};

const onDrop = async (event: DragEvent) => {
  if (!isLayoutMode.value || !draggedSeat.value) return;
  
  const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = Math.round(event.clientX - container.left - dragOffset.value.x);
  const y = Math.round(event.clientY - container.top - dragOffset.value.y);

  // Clamp values inside container
  const finalX = Math.max(0, Math.min(x, container.width - 48));
  const finalY = Math.max(0, Math.min(y, container.height - 40));

  try {
    // Optimistic update
    draggedSeat.value.position_x = finalX;
    draggedSeat.value.position_y = finalY;

    await librarianAPI.updateSeat(draggedSeat.value.id, {
      position_x: finalX,
      position_y: finalY
    });
    
    toast('Layout Updated', `Seat ${draggedSeat.value.seat_number} repositioned`, 'success');
  } catch (error) {
    console.error('Error saving seat position:', error);
    toast('Error', 'Could not save seat position', 'error');
    fetchSeats();
  } finally {
    draggedSeat.value = null;
  }
};

const printActiveSectionQRs = () => {
  const section = activeSectionId.value 
    ? sections.value.find(s => s.id === activeSectionId.value)
    : { name: 'All Sections' };
    
  if (!section && activeSectionId.value) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    toast('Error', 'Popup blocked! Please allow popups to print.', 'error');
    return;
  }

  const seats = sectionSeats.value;
  let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Section: ${section.name}</p>
        </div>
        <div class="qr-grid">
  `;

  seats.forEach((seat: any) => {
    const seatSectionName = seat.seat_section?.name || section.name;
    html += `
      <div class="qr-item">
        <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${seatSectionName}</div>
      </div>
    `;
  });

  html += `
        </div>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
};

onMounted(() => {
  fetchSeats();
});
</script>
