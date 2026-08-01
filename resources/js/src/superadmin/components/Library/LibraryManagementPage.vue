<template>
  <div class="space-y-6">
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3">
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
        >
          <Plus class="w-4 h-4" />
          <span>Add Library</span>
        </button>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="relative flex-1 w-full">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by library name or address..."
            class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none placeholder-slate-400"
          />
        </div>
        <select
          v-model="filterStatus"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
        >
          <option value="">All Status</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
        <button
          @click="fetchLibraries"
          :disabled="loading"
          class="p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors cursor-pointer shadow-sm"
          title="Refresh Data"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <!-- Loading and Empty States -->
    <div v-if="loading && libraries.length === 0" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>

    <div v-else-if="filteredLibraries.length === 0" class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
      <Building2 class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <p class="text-xs font-bold text-slate-455 uppercase tracking-widest">No libraries found matching your criteria.</p>
    </div>

    <!-- Library Cards Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="library in filteredLibraries"
        :key="library.id"
        class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
      >
        <!-- Card Header Image -->
        <div class="h-40 bg-slate-50 relative">
          <img
            v-if="library.photo"
            :src="library.photo_url"
            class="w-full h-full object-cover"
            alt="Library cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-purple-50 to-fuchsia-50/30">
            <Building2 class="w-12 h-12 text-purple-300" />
          </div>
          <div class="absolute top-4 right-4">
            <span
              :class="[
                'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border shadow-sm bg-white',
                library.is_active 
                  ? 'bg-green-50/80 border-green-100 text-green-700' 
                  : 'bg-red-50/80 border-red-100 text-red-700'
              ]"
            >
              {{ library.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex items-start justify-between text-left">
              <div>
                <h3 class="text-sm font-bold text-slate-700">{{ library.name }}</h3>
                <p class="text-[10px] text-slate-505 font-medium flex items-center mt-1">
                  <MapPin class="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                  {{ library.address }}
                </p>
              </div>
              <div class="flex items-center space-x-1 px-2 py-0.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-700 text-xs font-bold flex-shrink-0">
                <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{{ library.averageRating || library.average_rating || '0.0' }}</span>
                <span class="text-[10px] text-amber-600/70 font-medium">({{ library.reviewsCount || library.reviews_count || 0 }})</span>
              </div>
            </div>

            <p class="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed text-left">
              {{ library.description || 'No description provided.' }}
            </p>

            <!-- Utilization Rate Progress Bar -->
            <div class="space-y-1 pt-1 text-left">
              <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Occupancy</span>
                <span>{{ getUtilizationPercentage(library) }}%</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  :class="['h-2 rounded-full transition-all duration-500', getProgressBarClass(library)]"
                  :style="{ width: getUtilizationPercentage(library) + '%' }"
                ></div>
              </div>
            </div>

            <!-- Capacity Badges -->
            <div class="grid grid-cols-2 gap-3 my-2 pt-1">
              <div class="p-3 bg-purple-50/50 rounded-xl flex flex-col text-left border border-slate-100">
                <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Total Seats</span>
                <span class="text-base font-black text-purple-700 mt-1">{{ library.totalSeats || library.capacity }}</span>
              </div>
              <div class="p-3 bg-fuchsia-50/40 rounded-xl flex flex-col text-left border border-slate-100">
                <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Available</span>
                <span class="text-base font-black text-fuchsia-700 mt-1">{{ library.availableSeats || 0 }}</span>
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
            <div class="flex items-center space-x-1.5">
              <button
                @click="editLibrary(library)"
                class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm"
                title="Edit Library"
              >
                <Edit2 class="w-4 h-4" />
              </button>
              <button
                @click="confirmDelete(library)"
                class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm"
                title="Delete Library"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <router-link
              :to="'/superadmin/libraries/' + library.id"
              class="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
            >
              <span>Manage Seats</span>
              <ChevronRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal Dialog -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col">
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">{{ isEditing ? 'Edit Library' : 'Add New Library' }}</h2>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="saveLibrary" class="p-6 space-y-4 text-left max-h-[75vh] overflow-y-auto">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Library Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="e.g. Central Library"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Address</label>
            <input
              v-model="form.address"
              type="text"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="Full address of the library"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Latitude</label>
              <input
                v-model.number="form.latitude"
                type="number"
                step="any"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. 31.5204"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Longitude</label>
              <input
                v-model.number="form.longitude"
                type="number"
                step="any"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. 74.3587"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Opening Hours</label>
            <input
              v-model="form.opening_hours"
              type="text"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="e.g. 08:00 AM - 10:00 PM"
            />
          </div>

          <!-- Image Upload Selector -->
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Library Cover Photo</label>
            <div class="flex items-center space-x-4 mt-1">
              <div class="w-12 h-12 rounded-lg border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img 
                  v-if="adminPhotoPreview || form.photo_url" 
                  :src="adminPhotoPreview || form.photo_url" 
                  class="w-full h-full object-cover" 
                  alt="Library preview"
                />
                <Building2 v-else class="w-6 h-6 text-slate-400" />
              </div>
              <input
                type="file"
                @change="handlePhotoUpload"
                accept="image/*"
                class="w-full text-xs text-slate-505 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[11px] file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="Brief description of the library location..."
            ></textarea>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">WiFi Password (Optional)</label>
            <input
              v-model="form.wifi_password"
              type="text"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="Password"
            />
          </div>

          <!-- Checkboxes -->
          <div class="flex items-center space-x-4 pt-1">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" v-model="form.parking_available" id="parking" class="rounded text-purple-655 focus:ring-purple-500 cursor-pointer" />
              <label for="parking" class="text-xs font-bold text-slate-550 cursor-pointer">Parking Available</label>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" v-model="form.is_active" id="isActive" class="rounded text-purple-655 focus:ring-purple-500 cursor-pointer" />
              <label for="isActive" class="text-xs font-bold text-slate-550 cursor-pointer">Library Active</label>
            </label>
          </div>

          <!-- Form Actions Footer -->
          <div class="pt-4 flex items-center space-x-3">
            <button
              type="button"
              @click="showModal = false"
              class="flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              <span v-if="saving">Saving...</span>
              <span v-else>{{ isEditing ? 'Update Library' : 'Create Library' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  Building2, 
  MapPin, 
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  ChevronRight,
  Search,
  Star
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const libraries = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const searchQuery = ref('');
const filterStatus = ref('');

const form = ref({
  id: null as number | null,
  name: '',
  address: '',
  latitude: null as number | null,
  longitude: null as number | null,
  opening_hours: '08:00 AM - 10:00 PM',
  description: '',
  wifi_password: '',
  parking_available: true,
  is_active: true,
  photo: null as File | null,
  photo_url: ''
});

const adminPhotoPreview = ref<string | null>(null);

const handlePhotoUpload = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    form.value.photo = file;
    adminPhotoPreview.value = URL.createObjectURL(file);
  }
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

const filteredLibraries = computed(() => {
  return libraries.value.filter(lib => {
    const matchesSearch = lib.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          lib.address.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = filterStatus.value === '' || 
                          (filterStatus.value === 'active' && lib.is_active) || 
                          (filterStatus.value === 'inactive' && !lib.is_active);
    return matchesSearch && matchesStatus;
  });
});

const getUtilizationPercentage = (lib: any) => {
  const total = lib.totalSeats || lib.capacity || 0;
  if (total <= 0) return 0;
  const occupied = total - (lib.availableSeats || 0);
  return Math.min(100, Math.max(0, Math.round((occupied / total) * 100)));
};

const getProgressBarClass = (lib: any) => {
  const percentage = getUtilizationPercentage(lib);
  if (percentage > 85) return 'bg-red-500';
  if (percentage > 60) return 'bg-amber-500';
  return 'bg-purple-650';
};

const openCreateModal = () => {
  isEditing.value = false;
  adminPhotoPreview.value = null;
  form.value = {
    id: null,
    name: '',
    address: '',
    latitude: null,
    longitude: null,
    opening_hours: '08:00 AM - 10:00 PM',
    description: '',
    wifi_password: '',
    parking_available: true,
    is_active: true,
    photo: null,
    photo_url: ''
  };
  showModal.value = true;
};

const editLibrary = (library: any) => {
  isEditing.value = true;
  adminPhotoPreview.value = null;
  form.value = {
    id: library.id,
    name: library.name,
    address: library.address,
    latitude: library.latitude,
    longitude: library.longitude,
    opening_hours: library.opening_hours,
    description: library.description || '',
    wifi_password: library.wifi_password || '',
    parking_available: !!library.parking_available,
    is_active: !!library.is_active,
    photo: null,
    photo_url: library.photo_url || (library.photo ? '/storage/' + library.photo : '')
  };
  showModal.value = true;
};

const saveLibrary = async () => {
  saving.value = true;
  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('address', form.value.address);
    if (form.value.latitude) formData.append('latitude', form.value.latitude.toString());
    if (form.value.longitude) formData.append('longitude', form.value.longitude.toString());
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

<style scoped>
.text-slate-850 {
  color: #1e293b;
}
.text-slate-550 {
  color: #64748b;
}
.text-slate-455 {
  color: #475569;
}
.text-slate-505 {
  color: #334155;
}
.bg-purple-650 {
  background-color: #8B5CF6;
}
.text-purple-655 {
  color: #7C3AED;
}
.text-red-655 {
  color: #ef4444;
}
</style>
