<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Librarian Management</h1>
        <p class="text-gray-600 mt-1">Manage library staff and their assignments</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchLibrarians"
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
          <span class="text-sm font-medium">Add Librarian</span>
        </button>
      </div>
    </div>

    <!-- Librarians Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div v-if="loading && librarians.length === 0" class="flex items-center justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>

      <table v-else class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Librarian</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Library</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="librarian in librarians" :key="librarian.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  {{ librarian.name.charAt(0) }}
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ librarian.name }}</div>
                  <div class="text-xs text-gray-500">CRN: {{ librarian.crn }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div v-if="librarian.library" class="flex items-center text-sm text-gray-900">
                <Building2 class="w-4 h-4 mr-2 text-gray-400" />
                {{ librarian.library.name }}
              </div>
              <div v-else class="text-sm text-red-500 italic flex items-center">
                <AlertCircle class="w-4 h-4 mr-2" />
                Unassigned
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ librarian.email }}</div>
              <div class="text-xs text-gray-500">{{ librarian.phone || 'No phone' }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full',
                  librarian.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                ]"
              >
                {{ librarian.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="editLibrarian(librarian)" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
              <button @click="confirmDelete(librarian)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
          <tr v-if="librarians.length === 0 && !loading">
            <td colspan="5" class="px-6 py-12 text-center text-gray-500">
              No librarians found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div class="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Librarian' : 'Add New Librarian' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="saveLibrarian" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>

          <div v-if="!isEditing">
            <label class="block text-sm font-medium text-gray-700 mb-1">CRN / Staff ID</label>
            <input
              v-model="form.crn"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. LIB001"
            />
          </div>

          <div v-if="!isEditing">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Min. 8 characters"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Assign Library</label>
            <select
              v-model="form.library_id"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option :value="null">Select a Library</option>
              <option v-for="library in libraries" :key="library.id" :value="library.id">
                {{ library.name }}
              </option>
            </select>
          </div>

          <div class="flex items-center space-x-3 pt-6 border-t border-gray-100">
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <span v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              <span>{{ saving ? 'Saving...' : (isEditing ? 'Update Librarian' : 'Create Librarian') }}</span>
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
import { ref, onMounted } from 'vue';
import { 
  User, 
  Building2, 
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  AlertCircle,
  Mail,
  Shield
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

const librarians = ref<any[]>([]);
const libraries = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  email: '',
  crn: '',
  password: '',
  library_id: null as number | null,
  status: 'approved'
});

const fetchLibrarians = async () => {
  loading.value = true;
  try {
    const data = await adminAPI.getLibrarians();
    librarians.value = data;
  } catch (error) {
    console.error('Error fetching librarians:', error);
  } finally {
    loading.value = false;
  }
};

const fetchLibraries = async () => {
  try {
    const data = await adminAPI.getLibraries();
    libraries.value = data;
  } catch (error) {
    console.error('Error fetching libraries:', error);
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    name: '',
    email: '',
    crn: '',
    password: '',
    library_id: libraries.value[0]?.id || null,
    status: 'approved'
  };
  showModal.value = true;
};

const editLibrarian = (librarian: any) => {
  isEditing.value = true;
  form.value = {
    id: librarian.id,
    name: librarian.name,
    email: librarian.email,
    crn: librarian.crn,
    password: '',
    library_id: librarian.library_id,
    status: librarian.status
  };
  showModal.value = true;
};

const saveLibrarian = async () => {
  saving.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await adminAPI.updateLibrarian(form.value.id, form.value);
    } else {
      await adminAPI.createLibrarian(form.value);
    }
    await fetchLibrarians();
    showModal.value = false;
  } catch (error) {
    console.error('Error saving librarian:', error);
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (librarian: any) => {
  if (confirm(`Are you sure you want to delete librarian "${librarian.name}"?`)) {
    try {
      await adminAPI.deleteLibrarian(librarian.id);
      await fetchLibrarians();
    } catch (error) {
      console.error('Error deleting librarian:', error);
    }
  }
};

onMounted(() => {
  fetchLibrarians();
  fetchLibraries();
});
</script>
