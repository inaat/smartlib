<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Floor Management</h1>
        <p class="text-gray-600 mt-1">Manage library floors and levels across all libraries</p>
      </div>
      <button
        v-if="selectedLibraryId"
        @click="openCreateModal"
        class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
      >
        <span class="text-sm font-medium">Add Floor</span>
      </button>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Floors List -->
    <div v-if="selectedLibraryId" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="floor in floors" :key="floor.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ floor.name }}</div>
                <div class="text-xs text-gray-500">{{ floor.description || 'No description' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ floor.level }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                  {{ (floor.type || 'mixed').replace('_', ' ') }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ floor.capacity || 0 }} seats</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    floor.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ floor.is_active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editFloor(floor)" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button @click="confirmDelete(floor)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr v-if="floors.length === 0">
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                No floors found for this library. Add a new floor to get started.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500">
      Please select a library to manage its floors.
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Floor' : 'Add New Floor' }}</h3>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="saveFloor" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Floor Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. First Floor"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Level Number</label>
              <input
                v-model.number="form.level"
                type="number"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g. 1"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <input
                v-model.number="form.capacity"
                type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g. 50"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Floor Type</label>
            <select
              v-model="form.type"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="mixed">Mixed</option>
              <option value="quiet_zone">Quiet Zone</option>
              <option value="discussion_area">Discussion Area</option>
              <option value="girls_only">Girls Only</option>
              <option value="boys_only">Boys Only</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Optional description..."
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Map Image</label>
            <input
              type="file"
              @change="handleFileUpload"
              accept="image/*"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p v-if="form.map_image_url" class="mt-1 text-xs text-gray-500">Current: {{ form.map_image_url }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <input
              v-model="form.is_active"
              type="checkbox"
              id="is_active"
              class="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
            />
            <label for="is_active" class="text-sm font-medium text-gray-700">Active</label>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Floor' : 'Create Floor') }}
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

const selectedLibraryId = ref<number | null>(null);
const floors = ref<Floor[]>([]);
const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

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
  if (!selectedLibraryId.value) {
    floors.value = [];
    return;
  }
  try {
    const data = await superadminAPI.getFloors(selectedLibraryId.value);
    floors.value = data;
  } catch (error) {
    console.error('Error fetching floors:', error);
  }
};

watch(selectedLibraryId, fetchFloors);

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
  if (!selectedLibraryId.value) return;
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
      await superadminAPI.updateFloor(selectedLibraryId.value, form.value.id, formData);
    } else {
      await superadminAPI.createFloor(selectedLibraryId.value, formData);
    }
    await fetchFloors();
    closeModal();
  } catch (error) {
    console.error('Error saving floor:', error);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (floor: Floor) => {
  if (!selectedLibraryId.value) return;
  if (confirm('Are you sure you want to delete this floor?')) {
    try {
      await superadminAPI.deleteFloor(selectedLibraryId.value, floor.id);
      await fetchFloors();
    } catch (error) {
      console.error('Error deleting floor:', error);
    }
  }
};

onMounted(() => {
  fetchFloors();
});
</script>
