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
              <th class="px-6 py-4 font-semibold">Academic Level</th>
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
                    'px-2.5 py-0.5 rounded text-[9px] font-bold uppercase border',
                    section.academic_level === 'PRC' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                    section.academic_level === 'CAF' ? 'bg-cyan-50 border-cyan-100 text-cyan-700' :
                    section.academic_level === 'Final' ? 'bg-purple-50 border-purple-100 text-purple-700' :
                    'bg-slate-50 border-slate-200 text-slate-600'
                  ]"
                >
                  {{ section.academic_level === 'all' || !section.academic_level ? 'All Levels' : section.academic_level }}
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
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Academic Level Restriction</label>
            <select
              v-model="form.academic_level"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
            >
              <option value="all">Available for All</option>
              <option value="PRC">PRC Students Only</option>
              <option value="CAF">CAF Students Only</option>
              <option value="Final">Final Year Students Only</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Total Seats</label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 disabled:bg-slate-100/50 disabled:text-slate-400"
              placeholder="e.g. 20"
            />
            <p v-if="isEditing" class="mt-1 text-[10px] text-slate-450 font-bold text-slate-400">Note: Changing the count will automatically create new seat records or delete excess ones to match.</p>
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
  academic_level: 'all',
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
    academic_level: 'all',
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
    academic_level: section.academic_level || 'all',
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
  } catch (error: any) {
    console.error('Error saving section:', error);
    const message = error.response?.data?.message || 'Failed to save section.';
    showError('Save Failed', message);
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
  const libraryName = user.value?.library?.name || 'SmartLib';

  let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .header p { font-size: 14px; color: #64748b; margin: 6px 0 0 0; }
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
          .qr-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); page-break-inside: avoid; display: flex; flex-direction: column; align-items: center; }
          .brand-header { width: 100%; border-bottom: 1.5px dashed #e2e8f0; padding-bottom: 12px; margin-bottom: 16px; }
          .brand-name { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.15em; margin: 0; }
          .library-name { font-size: 12px; font-weight: 600; color: #059669; margin: 4px 0 0 0; }
          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; padding: 16px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          .seat-badge { font-size: 20px; font-weight: 900; color: #0f172a; margin: 16px 0 0 0; letter-spacing: -0.025em; }
          .meta-info { font-size: 11px; font-weight: 600; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 1px solid #cbd5e1; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print QR Codes</button>
        </div>
        <div class="header">
          <h1>Seat QR Codes</h1>
          <p>Section: ${section.name} | Floor: ${section.floor?.name || 'N/A'}</p>
        </div>
        <div class="qr-grid">
  `;

  seats.forEach((seat: any) => {
    const simpleSeatNum = String(seat.seat_number).replace(/\D/g, '') || seat.seat_number;
    html += `
      <div class="qr-card">
        <div class="brand-header">
          <div class="brand-name">SMARTLIB SYSTEM</div>
          <div class="library-name">${libraryName}</div>
        </div>
        <div class="qr-wrapper">
          <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        </div>
        <div class="seat-badge">SEAT ${simpleSeatNum}</div>
        <div class="meta-info">${section.name} &bull; ${section.floor?.name || ''}</div>
        <div class="scan-footer">Scan to Check-In / Check-Out</div>
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

  const libraryName = user.value?.library?.name || 'SmartLib';

  let html = `
    <html>
      <head>
        <title>Print All QR Codes</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .header p { font-size: 14px; color: #64748b; margin: 6px 0 0 0; }
          .section-block { margin-bottom: 50px; page-break-after: always; }
          .section-title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 20px; padding-left: 12px; border-left: 4px solid #059669; }
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
          .qr-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); page-break-inside: avoid; display: flex; flex-direction: column; align-items: center; }
          .brand-header { width: 100%; border-bottom: 1.5px dashed #e2e8f0; padding-bottom: 12px; margin-bottom: 16px; }
          .brand-name { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.15em; margin: 0; }
          .library-name { font-size: 12px; font-weight: 600; color: #059669; margin: 4px 0 0 0; }
          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; padding: 16px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          .seat-badge { font-size: 20px; font-weight: 900; color: #0f172a; margin: 16px 0 0 0; letter-spacing: -0.025em; }
          .meta-info { font-size: 11px; font-weight: 600; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 1px solid #cbd5e1; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print All QR Codes</button>
        </div>
        <div class="header">
          <h1>Library Seat QR Codes</h1>
          <p>Bulk Export - All Sections</p>
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
      const simpleSeatNum = String(seat.seat_number).replace(/\D/g, '') || seat.seat_number;
      html += `
        <div class="qr-card">
          <div class="brand-header">
            <div class="brand-name">SMARTLIB SYSTEM</div>
            <div class="library-name">${libraryName}</div>
          </div>
          <div class="qr-wrapper">
            <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
          </div>
          <div class="seat-badge">SEAT ${simpleSeatNum}</div>
          <div class="meta-info">${section.name} &bull; ${section.floor?.name || ''}</div>
          <div class="scan-footer">Scan to Check-In / Check-Out</div>
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
