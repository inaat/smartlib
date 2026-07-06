<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 overflow-hidden max-h-[90vh] flex flex-col border border-gray-200 animate-in fade-in zoom-in duration-200 font-outfit text-slate-700">
      
      <!-- Modal Header -->
      <div class="p-6 border-b border-slate-150 flex items-center justify-between text-left">
        <div>
          <h3 class="text-base font-bold text-slate-800">Sections for {{ floor?.name }}</h3>
          <p class="text-[11px] text-slate-400 font-medium mt-0.5">Manage seating zones and layouts for this floor</p>
        </div>
        <button @click="$emit('close')" class="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400">
          <X class="w-4 h-4" />
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 flex-1 text-left">
        <!-- Add/Edit Section Form Container -->
        <div class="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
          <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">{{ isEditing ? 'Edit Section Settings' : 'Add New Section to Floor' }}</h4>
          <form @submit.prevent="saveSection" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Section Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white"
                  placeholder="e.g. Zone A"
                />
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Total Seats</label>
                <input
                  v-model.number="form.total_seats"
                  type="number"
                  required
                  :disabled="isEditing"
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white disabled:bg-slate-100/50 disabled:text-slate-400"
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Gender Restriction</label>
                <select
                  v-model="form.gender"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                >
                  <option value="mixed">Mixed (All)</option>
                  <option value="male">Male Only</option>
                  <option value="female">Female Only</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Academic Level</label>
                <select
                  v-model="form.academic_level"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                >
                  <option value="all">Available for All</option>
                  <option value="PRC">PRC Students Only</option>
                  <option value="CAF">CAF Students Only</option>
                  <option value="Final">Final Year Students Only</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Description (Optional)</label>
              <input
                v-model="form.description"
                type="text"
                class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white"
                placeholder="e.g. Near the window, quiet area"
              />
            </div>

            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center space-x-2">
                <input
                  v-model="form.is_active"
                  type="checkbox"
                  id="modal_is_active"
                  class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <label for="modal_is_active" class="text-xs font-bold text-slate-500 cursor-pointer select-none">Mark Active</label>
              </div>
              
              <div class="flex items-center space-x-2">
                <button
                  type="button"
                  v-if="isEditing"
                  @click="resetForm"
                  class="px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
                >
                  Cancel Edit
                </button>
                <button
                  type="submit"
                  :disabled="loading"
                  class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                >
                  {{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Add Section') }}
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Sections Table List -->
        <div class="overflow-x-auto border border-slate-100 rounded-xl">
          <table class="min-w-full divide-y divide-slate-100 text-xs">
            <thead>
              <tr class="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                <th class="px-4 py-3 text-left font-semibold">Name details</th>
                <th class="px-4 py-3 text-left font-semibold">Seat capacity</th>
                <th class="px-4 py-3 text-left font-semibold">Gender Rule</th>
                <th class="px-4 py-3 text-left font-semibold">Academic Level</th>
                <th class="px-4 py-3 text-left font-semibold">Status</th>
                <th class="px-4 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-for="section in sections" :key="section.id" class="hover:bg-slate-50/50 transition-colors">
                <td class="px-4 py-3">
                  <div class="font-bold text-slate-800">{{ section.name }}</div>
                  <div class="text-[10px] text-slate-400 font-medium mt-0.5">{{ section.description || 'No description provided' }}</div>
                </td>
                <td class="px-4 py-3">
                  <div class="font-bold text-slate-600">{{ section.total_seats }} total</div>
                  <div class="text-[10px] text-green-600 font-bold mt-0.5">{{ section.available_seats }} available</div>
                </td>
                <td class="px-4 py-3">
                  <span
                    :class="[
                      'px-2 py-0.5 rounded text-[9px] font-bold uppercase border',
                      section.gender === 'male' ? 'bg-blue-50 border-blue-100 text-blue-700' : 
                      section.gender === 'female' ? 'bg-pink-50 border-pink-100 text-pink-700' : 
                      'bg-emerald-50 border-emerald-100 text-emerald-700'
                    ]"
                  >
                    {{ section.gender || 'mixed' }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <span
                    :class="[
                      'px-2 py-0.5 rounded text-[9px] font-bold uppercase border',
                      section.academic_level === 'PRC' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                      section.academic_level === 'CAF' ? 'bg-cyan-50 border-cyan-100 text-cyan-700' :
                      section.academic_level === 'Final' ? 'bg-purple-50 border-purple-100 text-purple-700' :
                      'bg-slate-50 border-slate-200 text-slate-600'
                    ]"
                  >
                    {{ section.academic_level === 'all' || !section.academic_level ? 'All Levels' : section.academic_level }}
                  </span>
                </td>
                <td class="px-4 py-3">
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
                <td class="px-4 py-3 text-right">
                  <div class="flex items-center justify-end space-x-2">
                    <button 
                      @click="editSection(section)" 
                      class="px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button 
                      @click="deleteSection(section.id)" 
                      class="px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="sections.length === 0">
                <td colspan="5" class="px-4 py-8 text-center text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  No sections found for this floor layout.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { X } from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const props = defineProps<{
  isOpen: boolean;
  floor: any;
}>();

const emit = defineEmits(['close', 'updated']);

const sections = ref<any[]>([]);
const loading = ref(false);
const isEditing = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  gender: 'mixed',
  academic_level: 'all',
  total_seats: 0,
  description: '',
  is_active: true
});

const fetchSections = async () => {
  if (!props.floor) return;
  try {
    const data = await librarianAPI.getSections(props.floor.id);
    sections.value = data;
  } catch (error) {
    console.error('Error fetching sections:', error);
  }
};

const resetForm = () => {
  form.value = {
    id: null,
    name: '',
    gender: 'mixed',
    academic_level: 'all',
    total_seats: 0,
    description: '',
    is_active: true
  };
  isEditing.value = false;
};

const editSection = (section: any) => {
  isEditing.value = true;
  form.value = {
    id: section.id,
    name: section.name,
    gender: section.gender || 'mixed',
    academic_level: section.academic_level || 'all',
    total_seats: section.total_seats,
    description: section.description || '',
    is_active: section.is_active
  };
};

const saveSection = async () => {
  loading.value = true;
  try {
    const payload = {
      ...form.value,
      floor_id: props.floor.id
    };

    if (isEditing.value && form.value.id) {
      await librarianAPI.updateSection(form.value.id, payload);
      showSuccess('Updated!', 'Section updated successfully.');
    } else {
      await librarianAPI.createSection(payload);
      showSuccess('Created!', 'New section added successfully.');
    }
    await fetchSections();
    resetForm();
    emit('updated');
  } catch (error: any) {
    console.error('Error saving section:', error);
    const message = error.response?.data?.message || 'Failed to save section.';
    showError('Save Failed', message);
  } finally {
    loading.value = false;
  }
};

const deleteSection = async (id: number) => {
  if (!await showConfirm('Delete Section', 'Are you sure you want to delete this section? This will delete all seats in this section.', 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteSection(id);
    showSuccess('Deleted!', 'Section has been successfully deleted.');
    await fetchSections();
    emit('updated');
  } catch (error) {
    console.error('Error deleting section:', error);
    showError('Delete Failed', 'Failed to delete section.');
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    fetchSections();
    resetForm();
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
