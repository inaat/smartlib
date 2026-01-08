<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Seat Management</h1>
        <p class="text-gray-600 mt-1">Monitor and manage library seats in real-time</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchSeats"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <router-link
          to="/librarian/sections"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Settings class="w-4 h-4" />
          <span class="text-sm font-medium">Configure Seats</span>
        </router-link>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-blue-100 rounded-lg">
            <Building2 class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Total Seats</p>
            <p class="text-xl font-bold text-gray-900">{{ seatStats.total }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-green-100 rounded-lg">
            <CheckCircle class="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Available</p>
            <p class="text-xl font-bold text-green-600">{{ seatStats.available }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-red-100 rounded-lg">
            <X class="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Occupied</p>
            <p class="text-xl font-bold text-red-600">{{ seatStats.occupied }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-orange-100 rounded-lg">
            <AlertTriangle class="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Reserved</p>
            <p class="text-xl font-bold text-orange-600">{{ seatStats.reserved }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-gray-100 rounded-lg">
            <Tool class="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Maintenance</p>
            <p class="text-xl font-bold text-gray-600">{{ seatStats.maintenance }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Tabs -->
    <div v-if="sections.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
      <div class="flex items-center space-x-2 overflow-x-auto pb-1">
        <button
          @click="activeSectionId = null"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
            activeSectionId === null
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          All Seats
        </button>
        <button
          v-for="section in sections"
          :key="section.id"
          @click="activeSectionId = section.id"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
            activeSectionId === section.id
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          {{ section.name }}
        </button>
      </div>
      <button
        @click="printActiveSectionQRs"
        class="ml-4 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors flex items-center space-x-2 border border-purple-200"
      >
        <Printer class="w-4 h-4" />
        <span class="hidden sm:inline">Print Section QR</span>
      </button>
    </div>

    <!-- Seat Grid (Grouped) -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="mb-6">
        <h2 class="text-lg font-bold text-gray-900">{{ activeSectionName }} - Seat Layout</h2>
        <p class="text-sm text-gray-600 mt-1">Seats are grouped by floor and section</p>
      </div>

      <!-- Legend -->
      <div class="flex items-center space-x-6 mb-8 pb-4 border-b border-gray-200">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-green-500 rounded"></div>
          <span class="text-sm text-gray-600">Available</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-red-500 rounded"></div>
          <span class="text-sm text-gray-600">Occupied</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-orange-500 rounded"></div>
          <span class="text-sm text-gray-600">Reserved</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-gray-400 rounded"></div>
          <span class="text-sm text-gray-600">Maintenance</span>
        </div>
      </div>

      <!-- Grouped Seat Layout -->
      <div v-if="Object.keys(groupedSeats).length > 0" class="space-y-10">
        <div v-for="(sections, floorName) in groupedSeats" :key="floorName" class="space-y-6">
          <div class="flex items-center space-x-4">
            <div class="h-px flex-1 bg-gray-200"></div>
            <h3 class="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">{{ floorName }}</h3>
            <div class="h-px flex-1 bg-gray-200"></div>
          </div>
          
          <div v-for="(seats, sectionName) in sections" :key="sectionName" class="space-y-4">
            <div class="flex items-center justify-between px-2">
              <h4 class="text-sm font-bold text-purple-600 flex items-center">
                <Layout class="w-4 h-4 mr-2" />
                {{ sectionName }}
              </h4>
              <span class="text-xs text-gray-400 font-medium">{{ seats.length }} Seats</span>
            </div>

            <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
              <button
                v-for="seat in seats"
                :key="seat.id"
                @click="selectSeat(seat)"
                :class="[
                  'aspect-square rounded-lg border-2 flex flex-col items-center justify-center transition-all hover:scale-105 relative',
                  seat.status === 'available' ? 'bg-green-50 border-green-500 hover:bg-green-100' :
                  seat.status === 'occupied' ? 'bg-red-50 border-red-500 hover:bg-red-100' :
                  seat.status === 'reserved' ? 'bg-orange-50 border-orange-500 hover:bg-orange-100' :
                  'bg-gray-50 border-gray-400 hover:bg-gray-100'
                ]"
              >
                <!-- Feature Indicators -->
                <div class="absolute top-1 right-1 flex flex-col items-end space-y-0.5 pointer-events-none">
                  <Monitor v-if="seat.has_computer" class="w-2 h-2 text-gray-500/50" />
                  <Zap v-if="seat.socket_count > 0" class="w-2 h-2 text-blue-500/50" />
                  <Wind v-if="seat.near_window" class="w-2 h-2 text-yellow-600/50" />
                </div>

                <span class="text-xs font-bold text-gray-900">{{ seat.seat_number }}</span>
                <component
                  :is="getSeatIcon(seat.status)"
                  class="w-3.5 h-3.5 mt-0.5"
                  :class="[
                    seat.status === 'available' ? 'text-green-600' :
                    seat.status === 'occupied' ? 'text-red-600' :
                    seat.status === 'reserved' ? 'text-orange-600' :
                    'text-gray-600'
                  ]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="py-12 text-center text-gray-500">
        No seats found.
      </div>
    </div>

    <!-- Selected Seat Details Modal -->
    <div
      v-if="selectedSeat"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
import { ref, computed, onMounted } from 'vue';
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
  Zap
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

const seats = ref<any[]>([]);
const loading = ref(false);
const activeSectionId = ref<number | null>(null);
const selectedSeat = ref<any>(null);

const seatStats = computed(() => {
  const stats = {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance').length
  };
  return stats;
});

const sections = computed(() => {
  const uniqueSections = new Map();
  seats.value.forEach(seat => {
    if (seat.seat_section) {
      uniqueSections.set(seat.seat_section.id, seat.seat_section);
    }
  });
  return Array.from(uniqueSections.values());
});

const fetchSeats = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getSeats();
    seats.value = data;
    // Default to All Seats (null)
    if (!activeSectionId.value) {
      activeSectionId.value = null;
    }
  } catch (error) {
    console.error('Error fetching seats:', error);
  } finally {
    loading.value = false;
  }
};

const sectionSeats = computed(() => {
  if (!activeSectionId.value) return seats.value;
  return seats.value.filter(s => s.section_id === activeSectionId.value);
});

const groupedSeats = computed(() => {
  const groups: any = {};
  sectionSeats.value.forEach(seat => {
    const floorName = seat.floor?.name || 'Unknown Floor';
    const sectionName = seat.seat_section?.name || 'No Section';
    if (!groups[floorName]) groups[floorName] = {};
    if (!groups[floorName][sectionName]) groups[floorName][sectionName] = [];
    groups[floorName][sectionName].push(seat);
  });
  return groups;
});

const activeSectionName = computed(() => {
  if (!activeSectionId.value) return 'All Seats';
  const section = sections.value.find(s => s.id === activeSectionId.value);
  return section ? section.name : 'All Seats';
});

const getSeatIcon = (status: string) => {
  switch (status) {
    case 'available':
      return CheckCircle;
    case 'occupied':
      return User;
    case 'reserved':
      return Lock;
    case 'maintenance':
      return Wrench;
    default:
      return CheckCircle;
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

const printActiveSectionQRs = () => {
  if (!activeSectionId.value) return;
  
  const section = sections.value.find(s => s.id === activeSectionId.value);
  if (!section) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

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
    html += `
      <div class="qr-item">
        <img src="/storage/qrcodes/seats/seat-${seat.id}.png" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${section.name}</div>
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
