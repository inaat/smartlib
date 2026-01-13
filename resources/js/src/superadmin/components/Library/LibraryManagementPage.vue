<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Library Management</h1>
        <p class="text-gray-600 mt-1">Manage all registered libraries in the system</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchLibraries"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Add Library</span>
        </button>
      </div>
    </div>

    <!-- Libraries Grid -->
    <div v-if="loading && libraries.length === 0" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="library in libraries"
        :key="library.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
      >
        <div class="h-40 bg-gray-100 relative">
          <img
            v-if="library.photo"
            :src="'/storage/' + library.photo"
            class="w-full h-full object-cover"
            alt="Library cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-indigo-50 to-purple-50">
            <Building2 class="w-12 h-12" />
          </div>
          <div class="absolute top-4 right-4">
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium shadow-sm',
                library.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]"
            >
              {{ library.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="text-lg font-bold text-gray-900">{{ library.name }}</h3>
              <p class="text-sm text-gray-500 flex items-center mt-1">
                <MapPin class="w-3 h-3 mr-1" />
                {{ library.address }}
              </p>
            </div>
          </div>

          <p class="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
            {{ library.description || 'No description provided.' }}
          </p>

          <div class="grid grid-cols-2 gap-4 my-4">
            <div class="p-3 bg-indigo-50 rounded-lg">
              <div class="text-xs text-indigo-600 font-medium">Total Seats</div>
              <div class="text-lg font-bold text-indigo-900">{{ library.totalSeats }}</div>
            </div>
            <div class="p-3 bg-purple-50 rounded-lg">
              <div class="text-xs text-purple-600 font-medium">Available</div>
              <div class="text-lg font-bold text-purple-900">{{ library.availableSeats }}</div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <div class="flex items-center space-x-2">
              <button
                @click="editLibrary(library)"
                class="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                title="Edit Library"
              >
                <Edit2 class="w-4 h-4" />
              </button>
              <button
                @click="confirmDelete(library)"
                class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete Library"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <router-link
              :to="'/superadmin/libraries/' + library.id"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              View Details
              <ChevronRight class="w-4 h-4 ml-1" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Library' : 'Add New Library' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="saveLibrary" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Library Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Central Library"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                v-model="form.address"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Full address of the library"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
              <input
                v-model.number="form.latitude"
                type="number"
                step="any"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 31.5204"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
              <input
                v-model.number="form.longitude"
                type="number"
                step="any"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 74.3587"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Capacity (Total Seats)</label>
              <input
                v-model.number="form.capacity"
                type="number"
                required
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Opening Hours</label>
              <input
                v-model="form.opening_hours"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 08:00 AM - 10:00 PM"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Library Photo</label>
              <input
                type="file"
                @change="handlePhotoUpload"
                accept="image/*"
                class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                v-model="form.description"
                rows="3"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Brief description of the library..."
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">WiFi Password (Optional)</label>
              <div class="relative">
                <Wifi class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  v-model="form.wifi_password"
                  type="text"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex items-center space-x-6 h-full pt-6">
              <label class="flex items-center space-x-2 cursor-pointer group">
                <div class="relative flex items-center">
                  <input
                    v-model="form.parking_available"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <span class="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors">Parking Available</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer group">
                <div class="relative flex items-center">
                  <input
                    v-model="form.is_active"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <span class="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors">Active</span>
              </label>
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-6 border-t border-gray-100">
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <span v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              <span class="font-medium">{{ saving ? 'Saving...' : (isEditing ? 'Update Library' : 'Create Library') }}</span>
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
import { ref, onMounted } from 'vue';
import { 
  Building2, 
  MapPin, 
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  Users,
  Clock,
  Wifi,
  Car,
  ChevronRight
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

const libraries = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  address: '',
  latitude: null as number | null,
  longitude: null as number | null,
  capacity: 50,
  opening_hours: '08:00 AM - 10:00 PM',
  description: '',
  wifi_password: '',
  parking_available: true,
  is_active: true,
  photo: null as File | null
});

const handlePhotoUpload = (event: any) => {
  form.value.photo = event.target.files[0];
};

const fetchLibraries = async () => {
  loading.value = true;
  try {
    const data = await adminAPI.getLibraries();
    libraries.value = data;
  } catch (error) {
    console.error('Error fetching libraries:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    name: '',
    address: '',
    latitude: null,
    longitude: null,
    capacity: 50,
    opening_hours: '08:00 AM - 10:00 PM',
    description: '',
    wifi_password: '',
    parking_available: true,
    is_active: true,
    photo: null
  };
  showModal.value = true;
};

const editLibrary = (library: any) => {
  isEditing.value = true;
  form.value = {
    id: library.id,
    name: library.name,
    address: library.address,
    latitude: library.latitude,
    longitude: library.longitude,
    capacity: library.capacity,
    opening_hours: library.opening_hours,
    description: library.description || '',
    wifi_password: library.wifi_password || '',
    parking_available: !!library.parking_available,
    is_active: !!library.is_active,
    photo: null
  };
  showModal.value = true;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const saveLibrary = async () => {
  saving.value = true;
  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('address', form.value.address);
    if (form.value.latitude) formData.append('latitude', form.value.latitude.toString());
    if (form.value.longitude) formData.append('longitude', form.value.longitude.toString());
    formData.append('capacity', form.value.capacity.toString());
    formData.append('opening_hours', form.value.opening_hours);
    formData.append('description', form.value.description || '');
    formData.append('wifi_password', form.value.wifi_password || '');
    formData.append('parking_available', form.value.parking_available ? '1' : '0');
    formData.append('is_active', form.value.is_active ? '1' : '0');
    if (form.value.photo) formData.append('photo', form.value.photo);

    if (isEditing.value && form.value.id) {
      await adminAPI.updateLibrary(form.value.id, formData);
      showSuccess('Updated!', 'Library updated successfully');
    } else {
      await adminAPI.createLibrary(formData);
      showSuccess('Created!', 'Library created successfully');
    }
    await fetchLibraries();
    showModal.value = false;
  } catch (error: any) {
    console.error('Error saving library:', error);
    showError('Save Failed', error.response?.data?.message || 'An error occurred while saving the library.');
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (library: any) => {
  if (await showConfirm('Delete Library', `Are you sure you want to delete "${library.name}"? This action cannot be undone.`, 'Yes, Delete')) {
    try {
      await adminAPI.deleteLibrary(library.id);
      showSuccess('Deleted!', 'Library deleted successfully');
      await fetchLibraries();
    } catch (error: any) {
      console.error('Error deleting library:', error);
      showError('Delete Failed', error.response?.data?.message || 'An error occurred while deleting the library.');
    }
  }
};

onMounted(() => {
  fetchLibraries();
});
</script>
