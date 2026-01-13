<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Section Management</h1>
        <p class="text-gray-600 mt-1">Manage seating sections across all floors</p>
      </div>
      <div class="flex items-center space-x-3">
        <button @click="fetchSections" class="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" title="Refresh">
          <RefreshCw :class="['w-5 h-5 text-gray-600', loading ? 'animate-spin' : '']" />
        </button>
        <button
          @click="printAllQRs"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
        >
          <Printer class="w-4 h-4 text-gray-600" />
          <span class="text-sm font-medium text-gray-700">Print All Bulk</span>
        </button>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Add Section</span>
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div class="flex items-center space-x-4">
        <div class="flex-1 max-w-xs">
          <label class="block text-xs font-medium text-gray-700 mb-1">Filter by Floor</label>
          <select
            v-model="selectedFloorId"
            @change="fetchSections"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option :value="null">All Floors</option>
            <option v-for="floor in floors" :key="floor.id" :value="floor.id">
              {{ floor.name }} (Level {{ floor.level }})
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Sections Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Floor</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="section in sections" :key="section.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ section.name }}</div>
              <div class="text-xs text-gray-500">{{ section.description || 'No description' }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ section.floor?.name || 'N/A' }}</div>
              <div class="text-xs text-gray-500">Level {{ section.floor?.level }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ section.total_seats }} total</div>
              <div class="text-xs text-green-600">{{ section.available_seats }} available</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  section.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]"
              >
                {{ section.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="printSectionQRs(section)" class="text-green-600 hover:text-green-900 mr-4 flex items-center inline-flex">
                <Printer class="w-3 h-3 mr-1" />
                Print QR
              </button>
              <button @click="editSection(section)" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
              <button @click="confirmDelete(section)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
          <tr v-if="sections.length === 0 && !loading">
            <td colspan="5" class="px-6 py-12 text-center text-gray-500">
              No sections found. Add a new section to get started.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Section' : 'Add New Section' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="saveSection" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Floor</label>
            <select
              v-model="form.floor_id"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                {{ floor.name }} (Level {{ floor.level }})
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Section Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Zone A"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Total Seats</label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              :disabled="isEditing"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
              placeholder="e.g. 20"
            />
            <p v-if="isEditing" class="mt-1 text-xs text-gray-500">Total seats cannot be changed after creation.</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Near the window, quiet area"
            ></textarea>
          </div>
          <div class="flex items-center">
            <input
              v-model="form.is_active"
              type="checkbox"
              id="is_active"
              class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label for="is_active" class="ml-2 text-sm text-gray-700">Active</label>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Create Section') }}
            </button>
            <button
              type="button"
              @click="showModal = false"
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
import { ref, onMounted, computed } from 'vue';
import { Plus, X, RefreshCw, Printer } from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { librarianAPI } from '@/shared/services/api';

const { user } = useAuth();
const libraryId = computed(() => user.value?.library_id || 1);

const sections = ref<any[]>([]);
const floors = ref<any[]>([]);
const loading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const selectedFloorId = ref<number | null>(null);

const form = ref({
  id: null as number | null,
  floor_id: null as number | null,
  name: '',
  total_seats: 0,
  description: '',
  is_active: true
});

const fetchFloors = async () => {
  try {
    const data = await librarianAPI.getFloors(libraryId.value);
    floors.value = data;
  } catch (error) {
    console.error('Error fetching floors:', error);
  }
};

const fetchSections = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getSections(libraryId.value, selectedFloorId.value || undefined);
    sections.value = data;
  } catch (error) {
    console.error('Error fetching sections:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    floor_id: floors.value[0]?.id || null,
    name: '',
    total_seats: 0,
    description: '',
    is_active: true
  };
  showModal.value = true;
};

const editSection = (section: any) => {
  isEditing.value = true;
  form.value = {
    id: section.id,
    floor_id: section.floor_id,
    name: section.name,
    total_seats: section.total_seats,
    description: section.description || '',
    is_active: section.is_active
  };
  showModal.value = true;
};

const saveSection = async () => {
  loading.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await librarianAPI.updateSection(libraryId.value, form.value.id, form.value);
    } else {
      await librarianAPI.createSection(libraryId.value, form.value);
    }
    await fetchSections();
    showModal.value = false;
  } catch (error) {
    console.error('Error saving section:', error);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (section: any) => {
  if (confirm(`Are you sure you want to delete section "${section.name}"? This will also delete all seats in this section.`)) {
    try {
      await librarianAPI.deleteSection(libraryId.value, section.id);
      await fetchSections();
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  }
};

const printSectionQRs = (section: any) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const seats = section.seats || [];
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
          <p style="margin: 5px 0; color: #666;">Section: ${section.name} | Floor: ${section.floor?.name || 'N/A'}</p>
        </div>
        <div class="qr-grid">
  `;

  seats.forEach((seat: any) => {
    html += `
      <div class="qr-item">
        <img src="/storage/qrcodes/seats/seat-${seat.id}.png" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${section.name} - ${section.floor?.name || ''}</div>
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

const printAllQRs = () => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  let html = `
    <html>
      <head>
        <title>Print All QR Codes</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .section-block { margin-bottom: 50px; }
          .section-title { font-size: 20px; font-bold; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #7c3aed; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            .section-block { page-break-after: always; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print All QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Library Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Bulk Export - All Sections</p>
        </div>
  `;

  sections.value.forEach((section: any) => {
    if (!section.seats || section.seats.length === 0) return;
    
    html += `
      <div class="section-block">
        <div class="section-title">${section.name} (${section.floor?.name || 'N/A'})</div>
        <div class="qr-grid">
    `;

    section.seats.forEach((seat: any) => {
      html += `
        <div class="qr-item">
          <img src="/storage/qrcodes/seats/seat-${seat.id}.png" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
          <div class="seat-number">Seat ${seat.seat_number}</div>
          <div class="section-info">${section.name} - ${section.floor?.name || ''}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
};

onMounted(() => {
  fetchFloors();
  fetchSections();
});
</script>
