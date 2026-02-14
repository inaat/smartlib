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
              ? 'bg-indigo-600 text-white border-indigo-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          ]"
        >
          <Move class="w-4 h-4" />
          <span class="text-sm font-medium">{{ isLayoutMode ? 'Grid View' : 'Layout Mode' }}</span>
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

    <!-- Seat Grid (Grouped) -->
    <div v-if="selectedLibraryId" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 class="text-lg font-bold text-gray-900">{{ activeSectionName }} - Seat Layout</h2>
          <p class="text-sm text-gray-600 mt-1">Seats are grouped by floor and section</p>
        </div>
        <div class="relative w-full md:w-64">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search seat number..."
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
            @input="debounceSearch"
          />
        </div>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap items-center gap-6 mb-8 pb-4 border-b border-gray-200">
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
              <h4 class="text-sm font-bold text-indigo-600 flex items-center">
                <Layout class="w-4 h-4 mr-2" />
                {{ sectionName }}
              </h4>
              <span class="text-xs text-gray-400 font-medium">{{ seats.length }} Seats</span>
            </div>

            <div 
              :class="[
                isLayoutMode 
                  ? 'relative h-[600px] bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden' 
                  : 'grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3'
              ]"
              @dragover.prevent
              @drop="onDrop($event, seats)"
            >
              <button
                v-for="seat in seats"
                :key="seat.id"
                @click="!isLayoutMode && selectSeat(seat)"
                :draggable="isLayoutMode"
                @dragstart="onDragStart($event, seat)"
                :style="isLayoutMode ? {
                  position: 'absolute',
                  left: `${seat.position_x}px`,
                  top: `${seat.position_y}px`,
                  width: '60px',
                  height: '60px'
                } : {}"
                :class="[
                  'rounded-lg border-2 flex flex-col items-center justify-center transition-all relative',
                  !isLayoutMode ? 'aspect-square hover:scale-105' : 'cursor-move shadow-md',
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
        No seats found matching your criteria.
      </div>
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
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select v-model="selectedSeat.status" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
                <option value="reserved">Reserved</option>
                <option value="occupied">Occupied</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select v-model="selectedSeat.seat_type" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="open">Open</option>
                <option value="cubicle">Cubicle</option>
                <option value="private_room">Private Room</option>
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

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select v-model="form.seat_type" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="open">Open</option>
                <option value="cubicle">Cubicle</option>
                <option value="private_room">Private Room</option>
              </select>
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
  Search, 
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
  Move
} from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';

const { toast } = useSwal();
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';

const selectedLibraryId = ref<number | null>(null);
const searchQuery = ref('');
const seats = ref<any[]>([]);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const showCreateModal = ref(false);
const selectedSeat = ref<any>(null);
const loading = ref(false);
const isLayoutMode = ref(false);
const activeSectionId = ref<number | null>(null);
const draggedSeat = ref<any>(null);
const dragOffset = ref({ x: 0, y: 0 });

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
    return;
  }
  loading.value = true;
  try {
    const params: any = { library_id: selectedLibraryId.value };
    if (searchQuery.value) params.search = searchQuery.value;
    
    const [seatsData, floorsData, sectionsData] = await Promise.all([
      superadminAPI.getSeats(params),
      superadminAPI.getFloors(selectedLibraryId.value),
      superadminAPI.getSeatSections(selectedLibraryId.value.toString())
    ]);
    seats.value = seatsData;
    floors.value = floorsData;
    sections.value = sectionsData;

    // Default to All Seats (null)
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

let searchTimeout: any = null;
const debounceSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(fetchData, 500);
};

const filteredSectionSeats = computed(() => {
  if (!activeSectionId.value) return seats.value;
  return seats.value.filter(s => s.section_id === activeSectionId.value);
});

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
  selectedSeat.value = { ...seat };
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

const onDrop = async (event: DragEvent, sectionSeats: any[]) => {
  if (!isLayoutMode.value || !draggedSeat.value) return;
  
  const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = Math.round(event.clientX - container.left - dragOffset.value.x);
  const y = Math.round(event.clientY - container.top - dragOffset.value.y);

  // Clamp values inside container
  const finalX = Math.max(0, Math.min(x, container.width - 60));
  const finalY = Math.max(0, Math.min(y, container.height - 60));

  try {
    // Optimistic update
    draggedSeat.value.position_x = finalX;
    draggedSeat.value.position_y = finalY;

    await superadminAPI.updateSeat(draggedSeat.value.id, {
      position_x: finalX,
      position_y: finalY
    });
    
    toast('Layout Updated', `Seat ${draggedSeat.value.seat_number} repositioned`, 'success');
  } catch (error) {
    console.error('Error saving seat position:', error);
    toast('Error', 'Could not save seat position', 'error');
    fetchData();
  } finally {
    draggedSeat.value = null;
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
          <p>${seat.seat_type.toUpperCase()} SEAT</p>
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
