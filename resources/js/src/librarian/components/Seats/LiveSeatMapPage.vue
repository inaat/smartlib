<template>
  <div class="p-4 md:p-6 lg:p-8 space-y-6 font-outfit min-h-screen bg-gray-50">
    
    <!-- Page Header with Live Indicator -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="text-left">
        <h1 class="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight flex items-center space-x-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <MapPin class="w-5 h-5 text-emerald-600" />
          </div>
          <span>Live Seat Map</span>
        </h1>
        <p class="text-xs text-slate-400 font-medium mt-1.5 ml-[46px]">Real-time seat occupancy monitoring across all floors and sections</p>
      </div>
      <div class="flex items-center space-x-3 flex-shrink-0">
        <!-- Live badge -->
        <div class="flex items-center space-x-2 px-3.5 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Live</span>
        </div>
        <!-- Last updated -->
        <div class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider flex items-center space-x-1.5 bg-white border border-slate-100 rounded-full px-3 py-2">
          <RefreshCw :class="['w-3 h-3', refreshing ? 'animate-spin text-emerald-500' : 'text-slate-400']" />
          <span>{{ lastUpdatedText }}</span>
        </div>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <div 
        v-for="(stat, key) in [
          { label: 'Total Seats', count: seatStats.total, bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: 'Available', count: seatStats.available, bg: 'bg-emerald-50', text: 'text-emerald-600' },
          { label: 'Occupied', count: seatStats.occupied, bg: 'bg-rose-50', text: 'text-rose-600' },
          { label: 'Reserved', count: seatStats.reserved, bg: 'bg-indigo-50', text: 'text-indigo-650' },
          { label: 'Overstay', count: seatStats.overstay, bg: 'bg-orange-50', text: 'text-orange-600' },
          { label: 'Serious Overstay', count: seatStats.serious_overstay, bg: 'bg-purple-50', text: 'text-purple-650' },
          { label: 'Maintenance', count: seatStats.maintenance, bg: 'bg-slate-100', text: 'text-slate-600' }
        ]" 
        :key="key"
        class="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 text-left"
      >
        <div :class="['w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg', stat.bg, stat.text]">
          {{ stat.count }}
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase text-slate-400 tracking-wider leading-none">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Seat Map Canvas -->
    <div v-if="loading && seats.length === 0" class="flex items-center justify-center h-96">
      <div class="flex flex-col items-center space-y-4">
        <div class="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <span class="text-sm text-slate-400 font-semibold">Loading seat map...</span>
      </div>
    </div>

    <div v-else>
      <SeatLayoutRenderer
        :seats="seats"
        :floors="floors"
        :sections="sections"
        :tables="tables"
        :selected-seat="selectedSeat"
        :draggable="false"
        :seat-clickable="true"
        :layout-mode="activeLayoutMode"
        :tables-per-row="3"
        :table-capacity="globalTableCapacity"
        :grid-snap="false"
        :show-legend="true"
        @seat-click="handleSeatClick"
        @table-click="handleTableClick"
      />
    </div>

    <!-- Seat Detail Bottom Sheet / Side Panel -->
    <Teleport to="body">
      <Transition name="slide-up">
        <div 
          v-if="selectedSeat"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          @click.self="selectedSeat = null"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="selectedSeat = null"></div>
          
          <!-- Panel -->
          <div class="relative w-full sm:w-[420px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[80vh] overflow-y-auto">
            <!-- Close bar (mobile) -->
            <div class="flex justify-center pt-3 pb-1 sm:hidden">
              <div class="w-10 h-1 bg-slate-200 rounded-full"></div>
            </div>
            
            <!-- Header -->
            <div class="px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm',
                  seatStatusColor(selectedSeat.status)
                ]">
                  {{ selectedSeat.seat_number?.replace(/\D/g, '').slice(-2) || selectedSeat.seat_number }}
                </div>
                <div class="text-left">
                  <h3 class="text-sm font-bold text-slate-800 tracking-tight">{{ getSeatDisplayTitle(selectedSeat) }}</h3>
                  <span :class="[
                    'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-0.5',
                    seatStatusBadge(selectedSeat.status)
                  ]">
                    <span class="w-1.5 h-1.5 rounded-full mr-1" :class="seatStatusDot(selectedSeat.status)"></span>
                    {{ formatStatus(selectedSeat.status) }}
                  </span>
                </div>
              </div>
              <button @click="selectedSeat = null" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                <X class="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <!-- Booking Details -->
            <div class="px-6 py-4 space-y-4">
              <!-- Section & Floor Info -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-slate-50 rounded-xl px-3.5 py-2.5 text-left">
                  <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Floor</div>
                  <div class="text-xs font-bold text-slate-700 mt-0.5">{{ selectedSeat.floor?.name || getFloorName(selectedSeat.floor_id) }}</div>
                </div>
                <div class="bg-slate-50 rounded-xl px-3.5 py-2.5 text-left">
                  <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Section</div>
                  <div class="text-xs font-bold text-slate-700 mt-0.5">
                    {{ selectedSeat.seat_section?.name || getSectionName(selectedSeat.section_id) }}
                    <span v-if="selectedSeat.seat_subsection?.name" class="text-slate-400 font-semibold"> - {{ selectedSeat.seat_subsection.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Features -->
              <div v-if="selectedSeat.has_computer || selectedSeat.near_window || selectedSeat.socket_count > 0" class="flex items-center flex-wrap gap-2">
                <span v-if="selectedSeat.has_computer" class="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  <Monitor class="w-3 h-3 mr-1" /> Computer
                </span>
                <span v-if="selectedSeat.near_window" class="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  <Sun class="w-3 h-3 mr-1" /> Window
                </span>
                <span v-if="selectedSeat.socket_count > 0" class="inline-flex items-center px-2.5 py-1 bg-purple-50 text-purple-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  <Zap class="w-3 h-3 mr-1" /> {{ selectedSeat.socket_count }} Socket{{ selectedSeat.socket_count > 1 ? 's' : '' }}
                </span>
              </div>

              <!-- Current Booking Info -->
              <div v-if="selectedSeat.current_booking" :class="[
                'rounded-2xl border p-4 space-y-3 text-left',
                selectedSeat.status === 'reserved' ? 'bg-blue-50/60 border-blue-100' :
                selectedSeat.status === 'occupied' ? 'bg-red-50/60 border-red-100' :
                selectedSeat.status === 'free_soon' ? 'bg-amber-50/60 border-amber-100' :
                selectedSeat.status === 'overstay' ? 'bg-orange-50/60 border-orange-100' :
                selectedSeat.status === 'serious_overstay' ? 'bg-purple-50/60 border-purple-100' :
                'bg-slate-50 border-slate-100'
              ]">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <UserCheck :class="[
                      'w-4 h-4',
                      selectedSeat.status === 'reserved' ? 'text-blue-600' :
                      selectedSeat.status === 'occupied' ? 'text-red-600' :
                      selectedSeat.status === 'free_soon' ? 'text-amber-600' :
                      selectedSeat.status === 'overstay' ? 'text-orange-600' :
                      selectedSeat.status === 'serious_overstay' ? 'text-purple-600' :
                      'text-slate-600'
                    ]" />
                    <span :class="[
                      'text-xs font-bold uppercase tracking-wider',
                      selectedSeat.status === 'reserved' ? 'text-blue-700' :
                      selectedSeat.status === 'occupied' ? 'text-red-700' :
                      selectedSeat.status === 'free_soon' ? 'text-amber-700' :
                      selectedSeat.status === 'overstay' ? 'text-orange-700' :
                      selectedSeat.status === 'serious_overstay' ? 'text-purple-700' :
                      'text-slate-700'
                    ]">
                      {{ selectedSeat.status === 'reserved' ? 'Reserved Booking' : 'Current Occupant' }}
                    </span>
                  </div>
                  <span :class="[
                    'text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider',
                    seatStatusBadge(selectedSeat.status)
                  ]">
                    {{ formatStatus(selectedSeat.status) }}
                  </span>
                </div>

                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">Student</span>
                    <span class="text-xs font-bold text-slate-700">{{ selectedSeat.current_booking.user_name }}</span>
                  </div>
                  <div class="flex items-center justify-between" v-if="selectedSeat.current_booking.user_crn">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">CRN / Roll</span>
                    <span class="text-xs font-bold text-slate-700">{{ selectedSeat.current_booking.user_crn }}</span>
                  </div>
                  <div class="flex items-center justify-between" v-if="selectedSeat.current_booking.check_in_time || selectedSeat.current_booking.start_time">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">{{ selectedSeat.status === 'reserved' ? 'Reserved At' : 'Checked In' }}</span>
                    <span class="text-xs font-bold text-slate-600">{{ formatTime(selectedSeat.current_booking.check_in_time || selectedSeat.current_booking.start_time) }}</span>
                  </div>
                  <div class="flex items-center justify-between" v-if="selectedSeat.current_booking.end_time || selectedSeat.current_booking.scheduled_end_time">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">Session Ends</span>
                    <span class="text-xs font-bold text-slate-600">{{ formatTime(selectedSeat.current_booking.end_time || selectedSeat.current_booking.scheduled_end_time) }}</span>
                  </div>
                  <div class="flex items-center justify-between" v-if="selectedSeat.current_booking.minutes_left !== null && selectedSeat.current_booking.minutes_left !== undefined">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">Time Details</span>
                    <span :class="[
                      'text-xs font-semibold px-2.5 py-0.5 rounded-full',
                      selectedSeat.status === 'serious_overstay' ? 'bg-purple-100 text-purple-700' :
                      selectedSeat.status === 'overstay' ? 'bg-orange-100 text-orange-700' : 
                      selectedSeat.status === 'free_soon' ? 'bg-amber-100 text-amber-700' : 
                      'bg-emerald-100 text-emerald-700'
                    ]">
                      <template v-if="selectedSeat.current_booking.overstay_minutes > 0">
                        {{ formatDuration(selectedSeat.current_booking.overstay_minutes, 'overstayed') }}
                      </template>
                      <template v-else-if="selectedSeat.current_booking.minutes_left <= 0">
                        {{ formatDuration(Math.abs(selectedSeat.current_booking.minutes_left), 'overstayed') }}
                      </template>
                      <template v-else>
                        {{ formatDuration(selectedSeat.current_booking.minutes_left, 'left') }}
                      </template>
                    </span>
                  </div>
                </div>
              </div>

              <!-- No booking -->
              <div v-else-if="selectedSeat.status === 'available'" class="bg-emerald-50 rounded-2xl border border-emerald-100 p-4 text-center">
                <CheckCircle class="w-8 h-8 text-emerald-400 mx-auto" />
                <p class="text-xs font-bold text-emerald-600 mt-2">This seat is available</p>
                <p class="text-[10px] text-emerald-400 mt-0.5">Ready for check-in</p>
              </div>

              <div v-else-if="selectedSeat.status === 'maintenance' || selectedSeat.is_maintenance" class="bg-slate-50 rounded-2xl border border-slate-200 p-4 text-center">
                <Wrench class="w-8 h-8 text-slate-400 mx-auto" />
                <p class="text-xs font-bold text-slate-600 mt-2">Under Maintenance</p>
                <p class="text-[10px] text-slate-400 mt-0.5">This seat is temporarily unavailable</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Table Detail Panel -->
    <Teleport to="body">
      <Transition name="slide-up">
        <div 
          v-if="selectedTable"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          @click.self="selectedTable = null"
        >
          <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="selectedTable = null"></div>
          <div class="relative w-full sm:w-[440px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[80vh] overflow-y-auto font-outfit">
            <div class="flex justify-center pt-3 pb-1 sm:hidden">
              <div class="w-10 h-1 bg-slate-200 rounded-full"></div>
            </div>
            
            <!-- Modal Header -->
            <div class="px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  <Grid class="w-5 h-5" />
                </div>
                <div class="text-left">
                  <h3 class="text-sm font-extrabold text-slate-800 tracking-tight">{{ getTableDisplayTitle(selectedTable) }}</h3>
                  <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {{ getTableSeats(selectedTable).length || selectedTable.capacity || 0 }} Seats Capacity
                  </span>
                </div>
              </div>
              <button @click="selectedTable = null" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                <X class="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <!-- Modal Content -->
            <div class="px-6 py-4 space-y-4">
              <!-- Location Cards (Floor & Section/Subsection) -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-slate-50 rounded-xl px-3.5 py-2.5 text-left border border-slate-100">
                  <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Floor</div>
                  <div class="text-xs font-bold text-slate-700 mt-0.5">{{ getTableFloorName(selectedTable) }}</div>
                </div>
                <div class="bg-slate-50 rounded-xl px-3.5 py-2.5 text-left border border-slate-100">
                  <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Section</div>
                  <div class="text-xs font-bold text-slate-700 mt-0.5">{{ getTableSectionName(selectedTable) }}</div>
                </div>
              </div>

              <!-- Table Seat Breakdown -->
              <div class="space-y-2 text-left">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Table Seats Status</span>
                  <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {{ getTableSeats(selectedTable).filter((s: Seat) => s.status === 'occupied').length }} Occupied / {{ getTableSeats(selectedTable).length }} Total
                  </span>
                </div>

                <div v-if="getTableSeats(selectedTable).length > 0" class="grid grid-cols-2 gap-2">
                  <div 
                    v-for="seat in getTableSeats(selectedTable)" 
                    :key="seat.id" 
                    @click="handleSeatClickFromTable(seat)"
                    :class="[
                      'flex items-center justify-between px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer hover:shadow-xs',
                      seatStatusBadge(seat.status)
                    ]"
                  >
                    <div class="flex items-center space-x-2 truncate">
                      <span class="w-2 h-2 rounded-full flex-shrink-0" :class="seatStatusDot(seat.status)"></span>
                      <span class="truncate">{{ seat.seat_number }}</span>
                    </div>
                    <span class="text-[9px] font-bold uppercase tracking-wider opacity-80 ml-1">{{ formatStatus(seat.status) }}</span>
                  </div>
                </div>
                <div v-else class="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <p class="text-xs text-slate-400 font-semibold">No individual seat records attached to this table</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { MapPin, RefreshCw, X, UserCheck, Monitor, Sun, Zap, CheckCircle, Wrench, Grid } from 'lucide-vue-next';
import SeatLayoutRenderer from '@/shared/components/SeatLayout/SeatLayoutRenderer.vue';
import { librarianAPI } from '@/shared/services/api';
import { Seat, StudyTable } from '@/shared/types';

// State
const seats = ref<Seat[]>([]);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const tables = ref<StudyTable[]>([]);
const selectedSeat = ref<Seat | null>(null);
const selectedTable = ref<StudyTable | null>(null);
const loading = ref(true);
const refreshing = ref(false);
const activeLayoutMode = ref('individual');
const globalTableCapacity = ref(4);
const lastRefreshTime = ref<Date>(new Date());
const lastUpdatedText = ref('Just now');

// Stats computed
const seatStats = computed(() => {
  return {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    overstay: seats.value.filter(s => s.status === 'overstay').length,
    serious_overstay: seats.value.filter(s => s.status === 'serious_overstay').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance' || s.is_maintenance).length,
  };
});

// Helpers
const seatStatusColor = (status: string) => {
  const map: Record<string, string> = {
    'available': 'bg-emerald-500',
    'occupied': 'bg-red-500',
    'reserved': 'bg-blue-500',
    'free_soon': 'bg-amber-400',
    'overstay': 'bg-orange-500',
    'serious_overstay': 'bg-purple-600',
    'maintenance': 'bg-slate-400',
  };
  return map[status] || 'bg-slate-400';
};

const seatStatusBadge = (status: string) => {
  const map: Record<string, string> = {
    'available': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'occupied': 'bg-red-50 text-red-700 border-red-100',
    'reserved': 'bg-blue-50 text-blue-700 border-blue-100',
    'free_soon': 'bg-amber-50 text-amber-700 border-amber-100',
    'overstay': 'bg-orange-50 text-orange-700 border-orange-100',
    'serious_overstay': 'bg-purple-50 text-purple-700 border-purple-100',
    'maintenance': 'bg-slate-100 text-slate-600 border-slate-200',
  };
  return map[status] || 'bg-slate-100 text-slate-600 border-slate-200';
};

const seatStatusDot = (status: string) => {
  const map: Record<string, string> = {
    'available': 'bg-emerald-500',
    'occupied': 'bg-red-500',
    'reserved': 'bg-blue-500',
    'free_soon': 'bg-amber-400',
    'overstay': 'bg-orange-500',
    'serious_overstay': 'bg-purple-600',
    'maintenance': 'bg-slate-400',
  };
  return map[status] || 'bg-slate-400';
};

const getSeatDisplayTitle = (seat: Seat) => {
  if (!seat) return '';
  const num = seat.seat_number || '';
  const secName = seat.seat_section?.name || getSectionName(seat.section_id);
  const subName = seat.seat_subsection?.name || seat.seat_subsection?.code || '';

  if (subName) {
    if (num.toLowerCase().includes(subName.toLowerCase())) {
      return num;
    }
    return `${subName} ${secName && secName !== 'N/A' ? secName + '-' : ''}${num}`;
  } else if (secName && secName !== 'N/A') {
    if (num.toLowerCase().includes(secName.toLowerCase())) {
      return num;
    }
    return `${secName}-${num}`;
  }
  return num;
};

const formatStatus = (status: string) => {
  const map: Record<string, string> = {
    'available': 'Available',
    'occupied': 'Occupied',
    'reserved': 'Reserved',
    'free_soon': 'Free Soon',
    'overstay': 'Overstay',
    'serious_overstay': 'Serious Overstay',
    'maintenance': 'Maintenance',
  };
  return map[status] || status;
};

const formatTime = (time: string) => {
  if (!time) return 'N/A';
  const d = new Date(time);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

const formatDuration = (totalMinutes: number, suffix: string = 'left') => {
  if (totalMinutes === null || totalMinutes === undefined || isNaN(totalMinutes)) return '';
  const mins = Math.abs(Math.round(totalMinutes));
  if (mins === 0) return `0m ${suffix}`;

  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;

  if (hours > 0) {
    if (remainingMins > 0) {
      return `${hours}h ${remainingMins}m ${suffix}`;
    }
    return `${hours}h ${suffix}`;
  }
  return `${mins}m ${suffix}`;
};

const getFloorName = (floorId: any) => {
  if (!floorId) return '';
  const f = floors.value.find(x => String(x.id) === String(floorId));
  return f?.name || '';
};

const getSectionName = (sectionId: any) => {
  if (!sectionId) return '';
  const s = sections.value.find(x => String(x.id) === String(sectionId));
  return s?.name || '';
};

const getTableSeats = (table: any): Seat[] => {
  if (!table) return [];
  const tableId = typeof table === 'object' ? table.id : table;
  
  if (typeof table === 'object' && Array.isArray(table.seats) && table.seats.length > 0) {
    return table.seats;
  }
  
  return seats.value.filter(s => s.table_id && String(s.table_id) === String(tableId));
};

const getTableDisplayTitle = (table: StudyTable) => {
  if (!table) return '';
  const label = table.label || '';
  if (label) {
    if (label.toLowerCase().startsWith('table')) {
      return label;
    }
    return `Table ${label}`;
  }
  return `Table ${table.id}`;
};

const getTableFloorName = (table: StudyTable) => {
  if (!table) return 'N/A';
  
  if (table.floor_id) {
    const name = getFloorName(table.floor_id);
    if (name) return name;
  }
  
  const tableSeats = getTableSeats(table);
  if (tableSeats.length > 0) {
    const firstSeat = tableSeats[0];
    if (firstSeat.floor?.name) return firstSeat.floor.name;
    if (firstSeat.floor_id) {
      const name = getFloorName(firstSeat.floor_id);
      if (name) return name;
    }
  }
  
  return 'N/A';
};

const getTableSectionName = (table: StudyTable) => {
  if (!table) return 'N/A';
  
  const tableSeats = getTableSeats(table);
  let secId = table.section_id;
  if (!secId && tableSeats.length > 0) {
    secId = tableSeats[0].section_id;
  }
  
  let secName = secId ? getSectionName(secId) : '';
  if (!secName && tableSeats.length > 0 && tableSeats[0].seat_section?.name) {
    secName = tableSeats[0].seat_section.name;
  }
  if (!secName) secName = 'N/A';

  const subSeat = tableSeats.find(s => s.seat_subsection?.name || s.seat_subsection?.code);
  const subName = subSeat?.seat_subsection?.name || subSeat?.seat_subsection?.code;

  if (subName) {
    return secName !== 'N/A' ? `${secName} - ${subName}` : subName;
  }
  
  return secName;
};

const handleSeatClickFromTable = (seat: Seat) => {
  selectedTable.value = null;
  selectedSeat.value = seat;
};

// Event handlers
const handleSeatClick = (seat: Seat) => {
  selectedTable.value = null;
  selectedSeat.value = seat;
};

const handleTableClick = (table: StudyTable) => {
  selectedSeat.value = null;
  selectedTable.value = table;
};

// Data fetching
const fetchData = async (silent = false) => {
  if (!silent) loading.value = true;
  refreshing.value = true;
  
  try {
    const [seatsData, floorsData, sectionsData, tablesData, libraryInfo] = await Promise.all([
      librarianAPI.getSeats(),
      librarianAPI.getActiveFloors(),
      librarianAPI.getActiveSections(),
      librarianAPI.getStudyTables(),
      librarianAPI.getLibraryInfo()
    ]);

    seats.value = seatsData;
    floors.value = floorsData.sort((a: any, b: any) => a.level - b.level);
    sections.value = sectionsData;
    tables.value = tablesData;
    activeLayoutMode.value = libraryInfo.seat_layout_mode || 'individual';
    if (libraryInfo.table_capacity) {
      globalTableCapacity.value = libraryInfo.table_capacity;
    }

    lastRefreshTime.value = new Date();
  } catch (error) {
    console.error('Failed to load live seat map data:', error);
  } finally {
    loading.value = false;
    refreshing.value = false;
  }
};

// Update "last updated" text
const updateLastUpdatedText = () => {
  const now = new Date();
  const diffSec = Math.floor((now.getTime() - lastRefreshTime.value.getTime()) / 1000);
  if (diffSec < 5) {
    lastUpdatedText.value = 'Just now';
  } else if (diffSec < 60) {
    lastUpdatedText.value = `${diffSec}s ago`;
  } else {
    const mins = Math.floor(diffSec / 60);
    lastUpdatedText.value = `${mins}m ago`;
  }
};

// Timers
let refreshInterval: ReturnType<typeof setInterval> | null = null;
let textInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  fetchData();
  // Auto-refresh seat data silently every 5 seconds
  refreshInterval = setInterval(() => fetchData(true), 5000);
  // Update "last updated" text every 5 seconds
  textInterval = setInterval(updateLastUpdatedText, 5000);
});

onUnmounted(() => {
  if (refreshInterval) clearInterval(refreshInterval);
  if (textInterval) clearInterval(textInterval);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

/* Slide up transition for the detail panel */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Tabular numbers for stats */
.tabular-nums {
  font-variant-numeric: tabular-nums;
}

/* Hide scrollbar for horizontal cards */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
