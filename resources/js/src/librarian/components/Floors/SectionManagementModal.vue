<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-xl font-bold text-gray-900">Sections for {{ floor?.name }}</h3>
          <p class="text-sm text-gray-600">Manage seating sections for this floor</p>
        </div>
        <button @click="$emit('close')" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <X class="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <!-- Add Section Form -->
      <div class="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 class="text-sm font-bold text-gray-700 mb-4">{{ isEditing ? 'Edit Section' : 'Add New Section' }}</h4>
        <form @submit.prevent="saveSection" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Section Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Zone A"
            />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Total Seats</label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              :disabled="isEditing"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
              placeholder="e.g. 10"
            />
          </div>
          <div class="flex items-end space-x-2">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update' : 'Add Section') }}
            </button>
            <button
              v-if="isEditing"
              type="button"
              @click="resetForm"
              class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          </div>
          <div class="md:col-span-3">
            <label class="block text-xs font-medium text-gray-700 mb-1">Description (Optional)</label>
            <input
              v-model="form.description"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Near the window"
            />
          </div>
        </form>
      </div>

      <!-- Sections List -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seats</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="section in sections" :key="section.id" class="hover:bg-gray-50">
              <td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ section.name }}
                <div class="text-xs text-gray-500">{{ section.description }}</div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ section.total_seats }} total
                <div class="text-xs text-green-600">{{ section.available_seats }} available</div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 py-1 text-xs font-semibold rounded-full',
                    section.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ section.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editSection(section)" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button @click="deleteSection(section.id)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr v-if="sections.length === 0">
              <td colspan="4" class="px-4 py-8 text-center text-gray-500 text-sm">
                No sections found for this floor.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { X } from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

const props = defineProps<{
  isOpen: boolean;
  floor: any;
  libraryId: number;
}>();

const emit = defineEmits(['close', 'updated']);

const sections = ref<any[]>([]);
const loading = ref(false);
const isEditing = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  total_seats: 0,
  description: '',
  is_active: true
});

const fetchSections = async () => {
  if (!props.floor) return;
  try {
    const data = await librarianAPI.getSections(props.libraryId, props.floor.id);
    sections.value = data;
  } catch (error) {
    console.error('Error fetching sections:', error);
  }
};

const resetForm = () => {
  form.value = {
    id: null,
    name: '',
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
      await librarianAPI.updateSection(props.libraryId, form.value.id, payload);
    } else {
      await librarianAPI.createSection(props.libraryId, payload);
    }
    await fetchSections();
    resetForm();
    emit('updated');
  } catch (error) {
    console.error('Error saving section:', error);
  } finally {
    loading.value = false;
  }
};

const deleteSection = async (id: number) => {
  if (confirm('Are you sure? This will also delete all seats in this section.')) {
    try {
      await librarianAPI.deleteSection(props.libraryId, id);
      await fetchSections();
      emit('updated');
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    fetchSections();
    resetForm();
  }
});
</script>
