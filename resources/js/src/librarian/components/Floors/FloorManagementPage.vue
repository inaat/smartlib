<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <button
        @click="openCreateModal"
        class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
      >
        <Plus class="w-4 h-4" />
        <span>Add Floor</span>
      </button>
    </div>

    <!-- Floors List Table Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-100 text-xs">
          <thead>
            <tr class="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
              <th class="px-6 py-4 font-semibold">Floor details</th>
              <th class="px-6 py-4 font-semibold">Level Number</th>
              <th class="px-6 py-4 font-semibold">Zone Type</th>
              <th class="px-6 py-4 font-semibold">Total Capacity</th>
              <th class="px-6 py-4 font-semibold">Status</th>
              <th class="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="floor in floors" :key="floor.id" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4">
                <div class="font-bold text-slate-800 text-sm">{{ floor.name }}</div>
                <div class="text-[11px] text-slate-400 font-medium mt-0.5">{{ floor.description || 'No description provided' }}</div>
              </td>
              <td class="px-6 py-4 font-bold text-slate-600">
                Lvl {{ floor.level }}
              </td>
              <td class="px-6 py-4">
                <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border bg-blue-50 border-blue-100 text-blue-700">
                  {{ (floor.type || 'mixed').replace('_', ' ') }}
                </span>
              </td>
              <td class="px-6 py-4 font-bold text-slate-600">
                {{ floor.capacity || 0 }} Seats
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1',
                    floor.is_active ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                  ]"
                >
                  <span :class="['w-1.5 h-1.5 rounded-full', floor.is_active ? 'bg-green-500' : 'bg-red-500']"></span>
                  {{ floor.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    @click="openSectionsModal(floor)" 
                    class="px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/40 cursor-pointer"
                  >
                    Sections
                  </button>
                  <button 
                    @click="editFloor(floor)" 
                    class="px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button 
                    @click="confirmDelete(floor)" 
                    class="px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="floors.length === 0">
              <td colspan="6" class="px-6 py-16 text-center">
                <Building2 class="w-10 h-10 text-slate-200 mx-auto mb-3" />
                <p class="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">No floors added yet</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Click "Add Floor" to create your first layout floor.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" @click.self="closeModal">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-slate-150 flex items-center justify-between text-left">
          <h3 class="text-base font-bold text-slate-800">{{ isEditing ? 'Edit Floor Settings' : 'Add New Floor' }}</h3>
          <button @click="closeModal" class="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400">
            <X class="w-4 h-4" />
          </button>
        </div>

        <form @submit.prevent="saveFloor" class="p-6 space-y-4 text-left">
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Floor Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              placeholder="e.g. First Floor"
            />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Level Number</label>
              <input
                v-model.number="form.level"
                type="number"
                required
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                placeholder="e.g. 1"
              />
            </div>
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Capacity</label>
              <input
                v-model.number="form.capacity"
                type="number"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                placeholder="e.g. 50"
              />
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Floor Type</label>
            <select
              v-model="form.type"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
            >
              <option value="mixed">Mixed</option>
              <option value="quiet_zone">Quiet Zone</option>
              <option value="discussion_area">Discussion Area</option>
              <option value="girls_only">Girls Only</option>
              <option value="boys_only">Boys Only</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
              placeholder="Optional description details..."
            ></textarea>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Map Image Layout</label>
            <input
              type="file"
              @change="handleFileUpload"
              accept="image/*"
              class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
            />
            <p v-if="form.map_image_url" class="mt-1.5 text-[10px] text-slate-400 font-bold truncate">Current: {{ form.map_image_url.split('/').pop() }}</p>
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
              {{ loading ? 'Saving...' : (isEditing ? 'Update Floor' : 'Create Floor') }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Sections Modal -->
    <SectionManagementModal
      :is-open="showSectionsModal"
      :floor="selectedFloor"
      @close="showSectionsModal = false"
      @updated="fetchFloors"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { librarianAPI } from '@/shared/services/api';
import SectionManagementModal from './SectionManagementModal.vue';
import { Plus, X, Building2 } from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();
const { user } = useAuth();
const floors = ref<Floor[]>([]);
const showModal = ref(false);
const showSectionsModal = ref(false);
const selectedFloor = ref<Floor | null>(null);
const isEditing = ref(false);
const loading = ref(false);

interface Floor {
  id: number;
  name: string;
  level: number;
  description: string;
  type: string;
  capacity: number;
  map_image: string;
  is_active: boolean;
}

const openSectionsModal = (floor: Floor) => {
  selectedFloor.value = floor;
  showSectionsModal.value = true;
};

const form = ref({
  id: null as number | null,
  name: '',
  level: 0,
  description: '',
  type: 'mixed',
  capacity: 0,
  map_image: null as File | null,
  map_image_url: '',
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

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    form.value.map_image = target.files[0];
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    name: '',
    level: 0,
    description: '',
    type: 'mixed',
    capacity: 0,
    map_image: null,
    map_image_url: '',
    is_active: true
  };
  showModal.value = true;
};

const editFloor = (floor: Floor) => {
  isEditing.value = true;
  form.value = {
    id: floor.id,
    name: floor.name,
    level: floor.level,
    description: floor.description,
    type: floor.type || 'mixed',
    capacity: floor.capacity || 0,
    map_image: null,
    map_image_url: floor.map_image,
    is_active: floor.is_active
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveFloor = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('level', form.value.level.toString());
    formData.append('description', form.value.description || '');
    formData.append('type', form.value.type);
    formData.append('capacity', form.value.capacity.toString());
    formData.append('is_active', form.value.is_active ? '1' : '0');
    
    if (form.value.map_image) {
      formData.append('map_image', form.value.map_image);
    }

    if (isEditing.value && form.value.id) {
      await librarianAPI.updateFloor(form.value.id, formData);
      showSuccess('Updated!', 'Floor details updated successfully.');
    } else {
      await librarianAPI.createFloor(formData);
      showSuccess('Created!', 'New floor created successfully.');
    }
    await fetchFloors();
    closeModal();
  } catch (error) {
    console.error('Error saving floor:', error);
    showError('Save Failed', 'Failed to save floor details.');
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (floor: Floor) => {
  if (!await showConfirm('Delete Floor', `Are you sure you want to delete "${floor.name}"? This action cannot be undone.`, 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteFloor(floor.id);
    showSuccess('Deleted!', 'Floor has been successfully deleted.');
    await fetchFloors();
  } catch (error) {
    console.error('Error deleting floor:', error);
    showError('Delete Failed', 'Failed to delete floor.');
  }
};

onMounted(() => {
  fetchFloors();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
