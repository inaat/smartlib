<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Seat Management</h1>
        <p class="text-gray-600 mt-1">Monitor and manage library seats in real-time</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchData"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button
          v-if="selectedLibraryId"
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
        </button>

        <button
          v-if="selectedLibraryId"
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Add Seat</span>
        </button>
      </div>
    </div>

    <!-- Library Selector -->
     
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Stats Overview -->
    <div v-if="selectedLibraryId" class="grid grid-cols-1 md:grid-cols-5 gap-4">
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
            <XIcon class="w-5 h-5 text-red-600" />
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
    <div v-if="selectedLibraryId && sections.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
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

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isLayoutMode && selectedLibraryId" class="bg-white p-2 rounded-xl border border-purple-100 shadow-sm flex items-center justify-between mt-4">
        <div class="flex items-center space-x-1">
          <div class="px-3 border-r border-gray-100 mr-2 py-1">
            <span class="text-[10px] font-bold text-purple-600 uppercase tracking-widest whitespace-nowrap">Layout Toolbar</span>
          </div>
          
          <button 
            @click="autoArrangeLayout"
            :disabled="isArranging"
            class="px-4 py-2 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all flex items-center space-x-2 group disabled:opacity-50"
          >
            <Wand2 :class="['w-4 h-4 transition-transform group-hover:rotate-12', isArranging ? 'animate-pulse' : '']" />
            <span class="text-sm font-semibold whitespace-nowrap">{{ isArranging ? 'Arranging...' : 'Auto-Arrange' }}</span>
          </button>

          <div class="w-px h-6 bg-gray-100 mx-2"></div>

          <button 
            class="p-2 hover:bg-gray-50 text-gray-400 rounded-lg transition-all relative group"
            title="More tools coming soon..."
          >
            <Plus class="w-4 h-4" />
          </button>
        </div>

        <div class="text-[10px] text-gray-400 font-medium px-4 italic flex items-center">
          <Info class="w-3 h-3 mr-1" />
          Drag seats to reposition or use auto-arrange for standard layouts
        </div>
      </div>
    </transition>

    <!-- Seat Map (Visual) -->
    <div v-if="selectedLibraryId" class="relative mt-4">
      <SeatLayoutRenderer
        :seats="seats"
        :floors="floors"
        :sections="sections"
        :tables="tables"
        :selected-seat="selectedSeat"
        :draggable="isLayoutMode"
        :seat-clickable="!isLayoutMode"
        :layout-mode="activeLayoutMode"
        @seat-click="selectSeat"
        @layout-change="handleSeatDrag"
        @table-layout-change="handleTableDrag"
      />
    </div>
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500">
      Please select a library to monitor its seats.
    </div>

    <!-- Seat Details Modal -->
    <div v-if="selectedSeat" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 my-8 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">Seat {{ selectedSeat.seat_number }}</h3>
          <div class="flex items-center space-x-2">
            <button v-if="selectedSeat.qr_code_url" @click="printQRCode(selectedSeat)" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Print QR">
              <Printer class="w-5 h-5" />
            </button>
            <button @click="selectedSeat = null" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select v-model="selectedSeat.status" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
                <option value="reserved">Reserved</option>
                <option value="occupied">Occupied</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Floor</label>
              <select v-model="selectedSeat.floor_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Section</label>
              <select v-model="selectedSeat.section_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option :value="null">No Section</option>
                <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.name }}</option>
              </select>
            </div>
          </div>

          <div class="space-y-3">
            <label class="flex items-center space-x-2">
              <input v-model="selectedSeat.has_computer" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
              <span class="text-sm font-medium text-gray-700">Has Computer</span>
            </label>
            <label class="flex items-center space-x-2">
              <input v-model="selectedSeat.near_window" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
              <span class="text-sm font-medium text-gray-700">Near Window</span>
            </label>
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-gray-700">Socket Count:</span>
              <input v-model.number="selectedSeat.socket_count" type="number" min="0" class="w-20 px-2 py-1 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              @click="saveSeat"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : 'Update Seat' }}
            </button>
            <button
              @click="confirmDelete(selectedSeat)"
              class="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 my-8 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">Add New Seat</h3>
          <button @click="showCreateModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <XIcon class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="createSeat" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Seat Number</label>
            <input v-model="form.seat_number" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Floor</label>
              <select v-model="form.floor_id" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Section</label>
              <select v-model="form.section_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option :value="null">No Section</option>
                <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.name }}</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select v-model="form.status" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option value="available">Available</option>
              <option value="maintenance">Maintenance</option>
              <option value="reserved">Reserved</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>

          <div class="space-y-3">
            <label class="flex items-center space-x-2">
              <input v-model="form.has_computer" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
              <span class="text-sm font-medium text-gray-700">Has Computer</span>
            </label>
            <label class="flex items-center space-x-2">
              <input v-model="form.near_window" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
              <span class="text-sm font-medium text-gray-700">Near Window</span>
            </label>
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-gray-700">Socket Count:</span>
              <input v-model.number="form.socket_count" type="number" min="0" class="w-20 px-2 py-1 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Creating...' : 'Create Seat' }}
            </button>
            <button
              type="button"
              @click="showCreateModal = false"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { 
  Monitor, 
  Zap, 
  Wind, 
  X as XIcon, 
  RefreshCw, 
  Plus, 
  Building2, 
  CheckCircle, 
  AlertTriangle, 
  Layout, 
  Wrench,
  Printer,
  User,
  Lock,
  Move,
  Wand2,
  Info
} from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';
import api from '@/shared/services/api';

const { toast } = useSwal();
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';
import SeatLayoutRenderer from '@/shared/components/SeatLayout/SeatLayoutRenderer.vue';

const selectedLibraryId = ref<number | null>(null);
const searchQuery = ref('');
const seats = ref<any[]>([]);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const tables = ref<any[]>([]);
const activeLayoutMode = ref('individual');
const showCreateModal = ref(false);
const selectedSeat = ref<any>(null);
const loading = ref(false);
const isLayoutMode = ref(false);
const isArranging = ref(false);
const activeSectionId = ref<number | null>(null);
const draggedSeat = ref<any>(null);
const dragOffset = ref({ x: 0, y: 0 });

const eShapeCoordinates = [
  { x: 50, y: 30 }, { x: 85, y: 30 }, { x: 120, y: 30 }, { x: 155, y: 30 }, { x: 190, y: 30 }, 
  { x: 225, y: 30 }, { x: 260, y: 30 }, { x: 295, y: 30 }, { x: 330, y: 30 }, { x: 365, y: 30 },
  { x: 400, y: 30 }, { x: 435, y: 30 }, { x: 470, y: 30 }, { x: 505, y: 30 }, { x: 540, y: 30 },
  { x: 575, y: 30 }, { x: 610, y: 30 }, { x: 645, y: 30 }, { x: 680, y: 30 }, { x: 715, y: 30 },
  { x: 75, y: 150 }, { x: 185, y: 150 }, { x: 75, y: 185 }, { x: 185, y: 185 },
  { x: 75, y: 220 }, { x: 185, y: 220 }, { x: 75, y: 255 }, { x: 185, y: 255 },
  { x: 75, y: 290 }, { x: 185, y: 290 }, { x: 75, y: 325 }, { x: 185, y: 325 },
  { x: 75, y: 360 }, { x: 185, y: 360 }, { x: 75, y: 395 }, { x: 185, y: 395 },
  { x: 60, y: 445 }, { x: 95, y: 445 }, { x: 130, y: 445 }, { x: 165, y: 445 }, { x: 200, y: 445 },
  { x: 325, y: 150 }, { x: 435, y: 150 }, { x: 325, y: 185 }, { x: 435, y: 185 },
  { x: 325, y: 220 }, { x: 435, y: 220 }, { x: 325, y: 255 }, { x: 435, y: 255 },
  { x: 325, y: 290 }, { x: 435, y: 290 }, { x: 325, y: 325 }, { x: 435, y: 325 },
  { x: 325, y: 360 }, { x: 435, y: 360 }, { x: 325, y: 395 }, { x: 435, y: 395 },
  { x: 310, y: 445 }, { x: 345, y: 445 }, { x: 380, y: 445 }, { x: 415, y: 445 }, { x: 450, y: 445 },
  { x: 575, y: 150 }, { x: 685, y: 150 }, { x: 575, y: 185 }, { x: 685, y: 185 },
  { x: 575, y: 220 }, { x: 685, y: 220 }, { x: 575, y: 255 }, { x: 685, y: 255 },
  { x: 575, y: 290 }, { x: 685, y: 290 }, { x: 575, y: 325 }, { x: 685, y: 325 },
  { x: 575, y: 360 }, { x: 685, y: 360 }, { x: 575, y: 395 }, { x: 685, y: 395 },
  { x: 560, y: 445 }, { x: 595, y: 445 }, { x: 630, y: 445 }, { x: 665, y: 445 }, { x: 700, y: 445 }
];

const form = ref({
  seat_number: '',
  floor_id: null as number | null,
  section_id: null as number | null,
  seat_type: 'open',
  status: 'available',
  has_computer: false,
  near_window: false,
  socket_count: 0
});

const seatStats = computed(() => {
  return {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance').length
  };
});

const fetchData = async () => {
  if (!selectedLibraryId.value) {
    seats.value = [];
    floors.value = [];
    sections.value = [];
    tables.value = [];
    return;
  }
  loading.value = true;
  try {
    const params: any = { library_id: selectedLibraryId.value };
    if (searchQuery.value) params.search = searchQuery.value;
    
    const [seatsData, floorsData, sectionsData, tablesResponse, libraryResponse] = await Promise.all([
      superadminAPI.getSeats(params),
      superadminAPI.getFloors(selectedLibraryId.value),
      superadminAPI.getSeatSections(selectedLibraryId.value.toString()),
      api.get('/librarian/study-tables', { params: { library_id: selectedLibraryId.value } }),
      api.get(`/admin/libraries/${selectedLibraryId.value}`)
    ]);
    seats.value = seatsData;
    floors.value = floorsData;
    sections.value = sectionsData;
    tables.value = tablesResponse.data || [];
    activeLayoutMode.value = libraryResponse.data?.data?.seat_layout_mode || libraryResponse.data?.seat_layout_mode || 'individual';

    if (!activeSectionId.value) {
      activeSectionId.value = null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};



watch(selectedLibraryId, () => {
  activeSectionId.value = null;
  fetchData();
});

const autoArrangeLayout = async () => {
  if (!selectedLibraryId.value) return;
  const SwalInstance = (await import('sweetalert2')).default;
  const naturalCompare = (a: string, b: string) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});

  if (activeLayoutMode.value === 'individual') {
    const seatsToArrange = seats.value.filter(s => {
      return s.floor_id === activeFloorId.value && 
             s.section_id === activeSectionId.value &&
             s.seat_type !== 'private_room' &&
             !s.table_id;
    });

    if (seatsToArrange.length === 0) {
      toast('No Seats', 'No individual seats found in this floor/section to arrange.', 'error');
      return;
    }

    const result = await SwalInstance.fire({
      title: 'Auto-Arrange Seats?',
      text: `This will arrange all ${seatsToArrange.length} individual seats into straight rows sorted ascending by seat number. Continue?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, arrange them!',
      confirmButtonColor: '#7C3AED',
    });
    if (!result.isConfirmed) return;

    isArranging.value = true;
    try {
      const sorted = [...seatsToArrange].sort((a, b) => naturalCompare(a.seat_number, b.seat_number));
      const seatsPerRow = 10;
      const colSpacing = 78;
      const rowSpacing = 95;
      const startX = 45;
      const startY = 50;

      const promises = sorted.map((seat, index) => {
        const row = Math.floor(index / seatsPerRow);
        const col = index % seatsPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return superadminAPI.updateSeat(seat.id, { position_x: x, position_y: y });
      });

      await Promise.all(promises);
      toast('Arranged', 'Individual seats arranged in straight rows successfully!', 'success');
      fetchData();
    } catch (err: any) {
      toast('Error', 'Failed to auto-arrange seats', 'error');
    } finally {
      isArranging.value = false;
    }
  } else if (activeLayoutMode.value === 'tables') {
    const tablesToArrange = tables.value.filter(t => {
      return t.floor_id === activeFloorId.value && t.section_id === activeSectionId.value;
    });

    if (tablesToArrange.length === 0) {
      toast('No Tables', 'No study tables found in this floor/section to arrange.', 'error');
      return;
    }

    const result = await SwalInstance.fire({
      title: 'Auto-Arrange Tables?',
      text: `This will arrange all ${tablesToArrange.length} study tables into straight rows sorted ascending by table label. Continue?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, arrange them!',
      confirmButtonColor: '#7C3AED',
    });
    if (!result.isConfirmed) return;

    isArranging.value = true;
    try {
      const sorted = [...tablesToArrange].sort((a, b) => naturalCompare(a.label, b.label));
      const tablesPerRow = 3;
      const colSpacing = 240;
      const rowSpacing = 160;
      const startX = 60;
      const startY = 60;

      const promises = sorted.map((table, index) => {
        const row = Math.floor(index / tablesPerRow);
        const col = index % tablesPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return superadminAPI.updateStudyTable(table.id, { position_x: x, position_y: y });
      });

      await Promise.all(promises);
      toast('Arranged', 'Study tables arranged successfully!', 'success');
      fetchData();
    } catch (err: any) {
      toast('Error', 'Failed to auto-arrange tables', 'error');
    } finally {
      isArranging.value = false;
    }
  } else if (activeLayoutMode.value === 'cabins') {
    const cabinsToArrange = seats.value.filter(s => {
      return s.floor_id === activeFloorId.value && 
             s.section_id === activeSectionId.value &&
             (s.seat_type === 'private_room' || s.cabin_number !== null);
    });

    if (cabinsToArrange.length === 0) {
      toast('No Cabins', 'No cabins found in this floor/section to arrange.', 'error');
      return;
    }

    const result = await SwalInstance.fire({
      title: 'Auto-Arrange Cabins?',
      text: `This will arrange all ${cabinsToArrange.length} private cabins into straight rows sorted ascending by cabin number. Continue?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, arrange them!',
      confirmButtonColor: '#7C3AED',
    });
    if (!result.isConfirmed) return;

    isArranging.value = true;
    try {
      const sorted = [...cabinsToArrange].sort((a, b) => naturalCompare(a.cabin_number || a.seat_number, b.cabin_number || b.seat_number));
      const cabinsPerRow = 5;
      const colSpacing = 145;
      const rowSpacing = 190;
      const startX = 50;
      const startY = 60;

      const promises = sorted.map((cabin, index) => {
        const row = Math.floor(index / cabinsPerRow);
        const col = index % cabinsPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return superadminAPI.updateSeat(cabin.id, { position_x: x, position_y: y });
      });

      await Promise.all(promises);
      toast('Arranged', 'Private cabins arranged successfully!', 'success');
      fetchData();
    } catch (err: any) {
      toast('Error', 'Failed to auto-arrange cabins', 'error');
    } finally {
      isArranging.value = false;
    }
  }
};

const groupedSeats = computed(() => {
  const groups: any = {};
  filteredSectionSeats.value.forEach(seat => {
    const floorName = seat.floor?.name || 'Unknown Floor';
    const sectionName = seat.seat_section?.name || 'No Section';
    if (!groups[floorName]) groups[floorName] = {};
    if (!groups[floorName][sectionName]) groups[floorName][sectionName] = [];
    groups[floorName][sectionName].push(seat);
  });
  return groups;
});

const activeSectionName = computed(() => {
  const section = sections.value.find(s => s.id === activeSectionId.value);
  return section ? section.name : 'All Seats';
});

const getSeatIcon = (status: string) => {
  switch (status) {
    case 'available': return CheckCircle;
    case 'occupied': return User;
    case 'reserved': return Lock;
    case 'maintenance': return Wrench;
    default: return CheckCircle;
  }
};

const selectSeat = (seat: any) => {
  if (selectedSeat.value?.id === seat.id) {
    selectedSeat.value = null;
  } else {
    selectedSeat.value = { ...seat };
  }
};

const openCreateModal = () => {
  form.value = {
    seat_number: '',
    floor_id: floors.value.length > 0 ? floors.value[0].id : null,
    section_id: activeSectionId.value,
    seat_type: 'open',
    status: 'available',
    has_computer: false,
    near_window: false,
    socket_count: 0
  };
  showCreateModal.value = true;
};

const createSeat = async () => {
  loading.value = true;
  try {
    await superadminAPI.createSeat(form.value);
    await fetchData();
    showCreateModal.value = false;
  } catch (error) {
    console.error('Error creating seat:', error);
  } finally {
    loading.value = false;
  }
};

const saveSeat = async () => {
  if (!selectedSeat.value) return;
  loading.value = true;
  try {
    await superadminAPI.updateSeat(selectedSeat.value.id, selectedSeat.value);
    await fetchData();
    selectedSeat.value = null;
  } catch (error) {
    console.error('Error saving seat:', error);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (seat: any) => {
  if (confirm('Are you sure you want to delete this seat?')) {
    try {
      await superadminAPI.deleteSeat(seat.id);
      await fetchData();
      selectedSeat.value = null;
    } catch (error) {
      console.error('Error deleting seat:', error);
    }
  }
};

const handleSeatDrag = async (seatId: number, x: number, y: number) => {
  const seat = seats.value.find(s => s.id === seatId);
  if (seat) {
    seat.position_x = x;
    seat.position_y = y;
  }
  try {
    await superadminAPI.updateSeat(seatId, { position_x: x, position_y: y });
    toast('Position Saved', `Seat moved to ${x}, ${y}`, 'success');
  } catch (err) {
    console.error('Failed to update seat position:', err);
  }
};

const handleTableDrag = async (tableId: number, x: number, y: number) => {
  const table = tables.value.find(t => t.id === tableId);
  if (table) {
    table.position_x = x;
    table.position_y = y;
  }
  try {
    await api.put(`/librarian/study-tables/${tableId}`, { position_x: x, position_y: y });
    toast('Position Saved', `Table moved to ${x}, ${y}`, 'success');
  } catch (err) {
    console.error('Failed to update table position:', err);
  }
};

const printQRCode = (seat: any) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const html = `
    <html>
      <head>
        <title>Print QR Code - Seat ${seat.seat_number}</title>
        <style>
          body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; font-family: sans-serif; }
          .container { text-align: center; border: 2px solid #eee; padding: 40px; border-radius: 20px; }
          img { width: 300px; height: 300px; margin-bottom: 20px; }
          h1 { margin: 0; color: #333; font-size: 24px; }
          p { margin: 5px 0; color: #666; font-size: 16px; }
          .library { font-weight: bold; color: #4f46e5; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="${seat.qr_code_url}" onload="window.print(); window.close();" />
          <h1>Seat ${seat.seat_number}</h1>
          <p class="library">${seat.floor?.name} - ${seat.seat_section?.name || ''}</p>
        </div>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
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

  const sectionSeats = filteredSectionSeats.value;
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

  sectionSeats.forEach((seat: any) => {
    const seatSectionName = seat.seat_section?.name || section.name;
    html += `
      <div class="qr-item">
        <img src="${seat.qr_code_url}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
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
  fetchData();
});
</script>
