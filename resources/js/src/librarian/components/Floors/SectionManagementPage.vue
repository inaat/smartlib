<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Header & Filters in One Line -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <!-- Filter by Floor -->
        <div class="flex items-center space-x-3 w-full sm:max-w-xs text-left">
          <div class="w-full">
            <label class="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Filter by Floor</label>
            <div class="relative">
              <select
                v-model="selectedFloorId"
                @change="fetchSections"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-600 font-semibold bg-white appearance-none cursor-pointer shadow-sm"
              >
                <option :value="null">All Floors</option>
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                  {{ floor.name }} (Level {{ floor.level }})
                </option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                <ChevronDown class="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-3 sm:ml-auto">
          <button 
            @click="fetchSections" 
            class="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm" 
            title="Refresh List"
          >
            <RefreshCw :class="['w-4 h-4 text-slate-500', loading ? 'animate-spin' : '']" />
          </button>
          <button
            @click="printAllQRs"
            class="px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm"
          >
            <Printer class="w-4 h-4 text-slate-500" />
            <span>Print All Bulk</span>
          </button>
          <button
            @click="openCreateModal"
            class="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
          >
            <Plus class="w-4 h-4" />
            <span>Add Section</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Sections Table Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-100 text-xs">
          <thead>
            <tr class="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
              <th class="px-6 py-4 font-semibold">Section details</th>
              <th class="px-6 py-4 font-semibold">Floor level</th>
              <th class="px-6 py-4 font-semibold">Seat stats</th>
              <th class="px-6 py-4 font-semibold">Gender Rule</th>
              <th class="px-6 py-4 font-semibold">Status</th>
              <th class="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="section in sections" :key="section.id" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4">
                <div class="font-bold text-slate-800 text-sm">{{ section.name }}</div>
                <div class="text-[11px] text-slate-400 font-medium mt-0.5">{{ section.description || 'No description provided' }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-bold text-slate-700">{{ section.floor?.name || 'N/A' }}</div>
                <div class="text-[10px] text-slate-400 font-semibold mt-0.5">Level {{ section.floor?.level ?? '0' }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-bold text-slate-700">{{ section.total_seats }} total</div>
                <div class="text-[10px] text-green-600 font-bold mt-0.5">{{ section.available_seats }} available</div>
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'px-2.5 py-0.5 rounded text-[9px] font-bold uppercase border',
                    section.gender === 'male' ? 'bg-blue-50 border-blue-100 text-blue-700' :
                    section.gender === 'female' ? 'bg-pink-50 border-pink-100 text-pink-700' :
                    'bg-emerald-50 border-emerald-100 text-emerald-700'
                  ]"
                >
                  {{ section.gender === 'male' ? 'Male Only' : section.gender === 'female' ? 'Female Only' : 'Mixed' }}
                </span>
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1',
                    section.is_active ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                  ]"
                >
                  <span :class="['w-1.5 h-1.5 rounded-full', section.is_active ? 'bg-green-500' : 'bg-red-500']"></span>
                  {{ section.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    @click="printSectionQRs(section)" 
                    class="px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/40 cursor-pointer inline-flex items-center gap-1"
                  >
                    <Printer class="w-3.5 h-3.5" />
                    <span>Print QR</span>
                  </button>
                  <button 
                    @click="editSection(section)" 
                    class="px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button 
                    @click="confirmDelete(section)" 
                    class="px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="sections.length === 0 && !loading">
              <td colspan="6" class="px-6 py-16 text-center">
                <Building2 class="w-10 h-10 text-slate-200 mx-auto mb-3" />
                <p class="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">No sections found</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Click "Add Section" to configure library space partitions.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" @click.self="showModal = false">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-slate-150 flex items-center justify-between text-left">
          <h3 class="text-base font-bold text-slate-800">{{ isEditing ? 'Edit Section Settings' : 'Add New Section' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400">
            <X class="w-4 h-4" />
          </button>
        </div>

        <form @submit.prevent="saveSection" class="p-6 space-y-4 text-left">
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Floor Level</label>
            <select
              v-model="form.floor_id"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
            >
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                {{ floor.name }} (Level {{ floor.level }})
              </option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Section Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              placeholder="e.g. Zone A"
            />
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Gender Restriction</label>
            <select
              v-model="form.gender"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
            >
              <option value="mixed">Mixed (All)</option>
              <option value="male">Male Only</option>
              <option value="female">Female Only</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Total Seats</label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              :disabled="isEditing"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 disabled:bg-slate-100/50 disabled:text-slate-400"
              placeholder="e.g. 20"
            />
            <p v-if="isEditing" class="mt-1 text-[10px] text-slate-400 font-bold">Total seats count cannot be modified after creation.</p>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
              placeholder="e.g. Near window, quiet zone"
            ></textarea>
          </div>

          <div class="flex items-center space-x-2 pt-1">
            <input
              v-model="form.is_active"
              type="checkbox"
              id="is_active"
              class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <label for="is_active" class="text-xs font-bold text-slate-500 cursor-pointer select-none">Mark Active</label>
          </div>

          <div class="flex items-center space-x-3 pt-4 border-t border-slate-100">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Create Section') }}
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
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
import { Plus, X, RefreshCw, Printer, ChevronDown, Building2 } from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();
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
  gender: 'mixed',
  total_seats: 0,
  description: '',
  is_active: true
});

const fetchFloors = async () => {
  try {
    const data = await librarianAPI.getFloors();
    floors.value = data;
  } catch (error) {
    console.error('Error fetching floors:', error);
  }
};

const fetchSections = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getSections(selectedFloorId.value || undefined);
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
    gender: 'mixed',
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
    gender: section.gender || 'mixed',
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
      await librarianAPI.updateSection(form.value.id, form.value);
      showSuccess('Updated!', 'Section updated successfully.');
    } else {
      await librarianAPI.createSection(form.value);
      showSuccess('Created!', 'New section created successfully.');
    }
    await fetchSections();
    showModal.value = false;
  } catch (error) {
    console.error('Error saving section:', error);
    showError('Save Failed', 'Failed to save section.');
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (section: any) => {
  if (!await showConfirm('Delete Section', `Are you sure you want to delete "${section.name}"? This will delete all seats in this section.`, 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteSection(section.id);
    showSuccess('Deleted!', 'Section has been successfully deleted.');
    await fetchSections();
  } catch (error) {
    console.error('Error deleting section:', error);
    showError('Delete Failed', 'Failed to delete section.');
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
          <button onclick="window.print()" style="padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
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
        <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
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
          .section-title { font-size: 20px; font-bold; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #059669; }
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
          <button onclick="window.print()" style="padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
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
          <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
