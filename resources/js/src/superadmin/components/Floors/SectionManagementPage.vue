<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Section Management</h1>
        <p class="text-gray-600 mt-1">Manage library sections and zones across all libraries</p>
      </div>
      <button
        v-if="selectedLibraryId"
        @click="openCreateModal"
        class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
      >
        <span class="text-sm font-medium">Add Section</span>
      </button>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Sections List -->
    <div v-if="selectedLibraryId" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Floor</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Seats</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
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
                <div class="text-sm text-gray-500">{{ section.floor?.name || 'N/A' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ section.total_seats }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize',
                    section.gender === 'male' ? 'bg-blue-100 text-blue-800' : 
                    section.gender === 'female' ? 'bg-pink-100 text-pink-800' : 
                    'bg-gray-100 text-gray-800'
                  ]"
                >
                  {{ section.gender || 'mixed' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ section.available_seats }}</div>
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
                <button @click="printSectionQRs(section)" class="text-green-600 hover:text-green-900 mr-4">Print QR</button>
                <button @click="editSection(section)" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button @click="confirmDelete(section)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr v-if="sections.length === 0">
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                No sections found for this library. Add a new section to get started.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500">
      Please select a library to manage its sections.
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Section' : 'Add New Section' }}</h3>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="saveSection" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Section Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Quiet Zone A"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Floor</label>
            <select
              v-model="form.floor_id"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                {{ floor.name }} (Level {{ floor.level }})
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Gender Restriction</label>
            <select
              v-model="form.gender"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="mixed">Mixed (All)</option>
              <option value="male">Male Only</option>
              <option value="female">Female Only</option>
            </select>
          </div>
          <div v-if="!isEditing">
            <label class="block text-sm font-medium text-gray-700 mb-1">Total Seats to Create</label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              min="1"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 10"
            />
            <p class="mt-1 text-xs text-gray-500">Seats will be automatically generated for this section.</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Optional description..."
            ></textarea>
          </div>
          <div class="flex items-center space-x-2">
            <input
              v-model="form.is_active"
              type="checkbox"
              id="is_active"
              class="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label for="is_active" class="text-sm font-medium text-gray-700">Active</label>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Create Section') }}
            </button>
            <button
              type="button"
              @click="closeModal"
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
import { ref, watch, onMounted } from 'vue';
import { X } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';

const selectedLibraryId = ref<number | null>(null);
const sections = ref<any[]>([]);
const floors = ref<any[]>([]);
const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  floor_id: null as number | null,
  gender: 'mixed',
  total_seats: 10,
  description: '',
  is_active: true
});

const fetchData = async () => {
  if (!selectedLibraryId.value) {
    sections.value = [];
    floors.value = [];
    return;
  }
  try {
    const [sectionsData, floorsData] = await Promise.all([
      superadminAPI.getSeatSections(selectedLibraryId.value.toString()),
      superadminAPI.getFloors(selectedLibraryId.value)
    ]);
    sections.value = sectionsData;
    floors.value = floorsData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

watch(selectedLibraryId, fetchData);

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    name: '',
    floor_id: floors.value.length > 0 ? floors.value[0].id : null,
    gender: 'mixed',
    total_seats: 10,
    description: '',
    is_active: true
  };
  showModal.value = true;
};

const editSection = (section: any) => {
  isEditing.value = true;
  form.value = {
    id: section.id,
    name: section.name,
    floor_id: section.floor_id,
    gender: section.gender || 'mixed',
    total_seats: section.total_seats,
    description: section.description,
    is_active: section.is_active
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError, showWarning } = useSwal();

const saveSection = async () => {
  if (!selectedLibraryId.value) return;
  loading.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await superadminAPI.updateSeatSection(selectedLibraryId.value.toString(), form.value.id.toString(), {
        ...form.value
      });
      showSuccess('Updated!', 'Section updated successfully');
    } else {
      await superadminAPI.createSeatSection(selectedLibraryId.value.toString(), {
        ...form.value,
        floor_id: form.value.floor_id as any
      });
      showSuccess('Created!', 'Section created successfully');
    }
    await fetchData();
    closeModal();
  } catch (error) {
    console.error('Error saving section:', error);
    showError('Save Failed', 'Failed to save section');
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (section: any) => {
  if (!selectedLibraryId.value) return;
  if (await showConfirm('Delete Section', 'Are you sure you want to delete this section? All associated seats will also be deleted.', 'Yes, Delete')) {
    try {
      await superadminAPI.deleteSeatSection(selectedLibraryId.value.toString(), section.id.toString());
      showSuccess('Deleted!', 'Section deleted successfully');
      await fetchData();
    } catch (error) {
      console.error('Error deleting section:', error);
      showError('Delete Failed', 'Failed to delete section');
    }
  }
};

const printSectionQRs = async (section: any) => {
  try {
    const seats = await superadminAPI.getSeats({ section_id: section.id });
    if (seats.length === 0) {
      showWarning('No Seats', 'No seats found in this section.');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const libraryName = 'SmartLib Library';

    // Group seats by subsection
    const subGroups: Record<string, any[]> = {};
    seats.forEach((seat: any) => {
      const subName = seat.seat_subsection?.name || seat.seat_subsection?.code || seat.subsection?.name || null;
      const key = subName ? `${subName} Subsection` : `${section.name} (General Seats)`;
      if (!subGroups[key]) subGroups[key] = [];
      subGroups[key].push(seat);
    });

    let html = `
      <html>
        <head>
          <title>Print QR Codes - ${section.name}</title>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
            .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
            .no-print button { padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .page-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; }
            .page-header h1 { font-size: 26px; font-weight: 900; color: #0f172a; margin: 0; }
            .page-header p { font-size: 13px; color: #64748b; margin: 6px 0 0 0; font-weight: 600; }

            .sub-block { margin-bottom: 35px; page-break-inside: avoid; }
            .sub-title { font-size: 13px; font-weight: 800; color: #6d28d9; margin-bottom: 14px; background: #f3e8ff; padding: 6px 14px; border-radius: 8px; display: inline-block; border: 1px solid #e9d5ff; text-transform: uppercase; letter-spacing: 0.05em; }

            .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1100px; margin: 0 auto 20px auto; }
            .qr-card { 
              background: white; 
              border: 2px solid #e2e8f0; 
              border-radius: 20px; 
              padding: 24px 20px 20px 20px; 
              text-align: center; 
              box-shadow: 0 4px 12px rgba(0,0,0,0.03); 
              page-break-inside: avoid; 
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              justify-content: space-between; 
              min-height: 430px; 
              width: 100%; 
              max-width: 310px; 
              margin: 0 auto; 
              box-sizing: border-box; 
            }

            .card-top { width: 100%; border-bottom: 1.5px dashed #cbd5e1; padding-bottom: 12px; margin-bottom: 14px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
            .top-library-name { font-size: 15px; font-weight: 900; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.08em; margin: 0; }

            .academic-badge { display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 800; border-radius: 9999px; letter-spacing: 0.08em; text-transform: uppercase; }
            .badge-prc { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
            .badge-caf { background: #f3e8ff; color: #6b21a8; border: 1px solid #d8b4fe; }
            .badge-final { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
            .badge-all { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

            .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 14px; padding: 14px; display: inline-block; }
            .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }

            .seat-badge { font-size: 22px; font-weight: 900; color: #0f172a; margin: 12px 0 0 0; letter-spacing: -0.025em; text-transform: uppercase; }
            .meta-info { font-size: 11px; font-weight: 700; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
            .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }

            @media print {
              .no-print { display: none; }
              body { background: white; padding: 0; }
              .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
              .qr-card { box-shadow: none; border: 2px solid #94a3b8; }
            }
          </style>
        </head>
        <body>
          <div class="no-print">
            <button onclick="window.print()">Print QR Codes</button>
          </div>
          <div class="page-header">
            <h1>Seat QR Codes</h1>
            <p>Section: ${section.name}</p>
          </div>
    `;

    Object.keys(subGroups).forEach(subKey => {
      const seatsGroup = subGroups[subKey];
      html += `
        <div class="sub-block">
          <div class="sub-title">${subKey} (${seatsGroup.length} Seats)</div>
          <div class="qr-grid">
      `;

      seatsGroup.forEach((seat: any) => {
        const qrUrl = seat.qr_code_url || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}`;
        const displaySeatName = seat.seat_type === 'private_room'
          ? `CABIN ${seat.cabin_number || seat.seat_number}`
          : seat.seat_number;

        // Academic Level Determination
        const rawLevel = String(seat.academic_level || seat.seat_subsection?.academic_level || seat.seat_section?.academic_level || section.academic_level || 'all').toUpperCase();
        let levelClass = 'badge-all';
        let levelLabel = 'ALL LEVELS';

        if (rawLevel.includes('PRC')) {
          levelClass = 'badge-prc';
          levelLabel = 'PRC';
        } else if (rawLevel.includes('CAF')) {
          levelClass = 'badge-caf';
          levelLabel = 'CAF';
        } else if (rawLevel.includes('FINAL')) {
          levelClass = 'badge-final';
          levelLabel = 'FINAL';
        }

        html += `
          <div class="qr-card">
            <div class="card-top">
              <div class="top-library-name">${libraryName}</div>
              <div class="academic-badge ${levelClass}">${levelLabel}</div>
            </div>
            <div class="qr-wrapper">
              <img src="${qrUrl}" class="qr-image" />
            </div>
            <div>
              <div class="seat-badge">${displaySeatName}</div>
              <div class="meta-info">${section.name}</div>
            </div>
            <div class="scan-footer">Scan to Check-In</div>
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
  } catch (error) {
    console.error('Error printing section QRs:', error);
    showError('Print Failed', 'Failed to fetch seats for printing.');
  }
};

onMounted(() => {
  fetchData();
});
</script>
