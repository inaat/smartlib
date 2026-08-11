<template>
  <div class="space-y-6">
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3">
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer animate-in fade-in duration-200"
        >
          <Plus class="w-4 h-4" />
          <span>Add Librarian</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Librarians</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ stats.total }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-purple-50 text-purple-600">
          <Users class="w-5 h-5" />
        </div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Staff</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ stats.approved }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-green-50 text-green-600">
          <UserCheck class="w-5 h-5" />
        </div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Unassigned</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ stats.unassigned }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-amber-50 text-amber-600">
          <AlertCircle class="w-5 h-5" />
        </div>
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
            placeholder="Search by name, email, or staff ID..."
            class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none placeholder-slate-400"
          />
        </div>
        <select
          v-model="filterLibrary"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
        >
          <option value="">All Libraries</option>
          <option v-for="lib in libraries" :key="lib.id" :value="lib.id">
            {{ lib.name }}
          </option>
          <option value="unassigned">Unassigned Only</option>
        </select>
        <button
          @click="fetchLibrarians"
          :disabled="loading"
          class="p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors cursor-pointer shadow-sm"
          title="Refresh Data"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <!-- Librarians Table List -->
    <div v-if="loading && librarians.length === 0" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
    <div v-else-if="filteredLibrarians.length === 0" class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
      <Users class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <p class="text-xs font-bold text-slate-455 uppercase tracking-widest">No librarians found matching your criteria.</p>
    </div>
    <div v-else class="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-100">
          <thead class="bg-gray-50/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Librarian</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Assigned Library</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Contact Info</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Status</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr 
              v-for="librarian in filteredLibrarians" 
              :key="librarian.id"
              class="hover:bg-slate-50/50 transition-colors"
            >
              <!-- Librarian Initial Avatar & Name -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3.5">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 font-bold text-sm">
                    {{ librarian.name.charAt(0).toUpperCase() }}
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-medium text-slate-700">{{ librarian.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">Staff ID: {{ librarian.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>

              <!-- Assigned Library -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div v-if="librarian.library" class="flex items-center text-xs font-semibold text-slate-655">
                  <Building2 class="w-4 h-4 mr-2 text-slate-400" />
                  {{ librarian.library.name }}
                </div>
                <div v-else class="text-xs text-red-500 italic flex items-center">
                  <AlertCircle class="w-4 h-4 mr-2" />
                  Unassigned
                </div>
              </td>

              <!-- Contact Info -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div class="text-xs font-normal text-slate-555 flex items-center">
                  <Mail class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  {{ librarian.email }}
                </div>
                <div class="text-xs font-normal text-slate-555 flex items-center mt-1">
                  <Phone class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  {{ librarian.phone || 'No phone' }}
                </div>
              </td>

              <!-- Status Badge -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <span :class="[
                  'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border',
                  librarian.status === 'approved' 
                    ? 'bg-green-50 border-green-100 text-green-700' 
                    : 'bg-red-50 border-red-100 text-red-700'
                ]">
                  {{ librarian.status === 'approved' ? 'Active' : 'Inactive' }}
                </span>
              </td>

              <!-- Actions -->
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    @click="editLibrarian(librarian)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm"
                    title="Edit Librarian"
                  >
                    <Edit2 class="w-4 h-4" />
                  </button>
                  <button 
                    @click="confirmDelete(librarian)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-750 transition-all cursor-pointer shadow-sm"
                    title="Delete Librarian"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col">
        <!-- Modal Header -->
        <div class="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between text-left flex-shrink-0">
          <h2 class="text-lg font-bold text-slate-800">{{ isEditing ? 'Edit Librarian' : 'Add New Librarian' }}</h2>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="saveLibrarian" class="p-5 md:p-6 space-y-4 text-left overflow-y-auto flex-1">
          <!-- Full Name -->
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="e.g. John Doe"
            />
          </div>

          <!-- Email & Phone Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Contact Number</label>
              <input
                v-model="form.phone"
                type="text"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. +92 300 1234567"
              />
            </div>
          </div>

          <!-- Staff ID & Password Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Staff ID (Auto-Assigned)</label>
              <input
                v-model="form.crn"
                type="text"
                disabled
                readonly
                class="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none text-xs font-bold text-slate-500 bg-slate-100 cursor-not-allowed shadow-inner"
                placeholder="Auto-generated (e.g. 1001)"
              />
            </div>

            <div v-if="!isEditing">
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Password</label>
              <input
                v-model="form.password"
                type="password"
                required
                minlength="8"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="Min. 8 characters"
              />
            </div>
          </div>

          <!-- Library & Status Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Assign Library</label>
              <select
                v-model="form.library_id"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option :value="null">Select a Library</option>
                <option v-for="library in libraries" :key="library.id" :value="library.id">
                  {{ library.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Account Status</label>
              <select
                v-model="form.status"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="approved">Active</option>
                <option value="suspended">Inactive</option>
              </select>
            </div>
          </div>

          <!-- Form Actions Footer -->
          <div class="pt-4 flex items-center space-x-3 border-t border-slate-100 flex-shrink-0">
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
              <span v-else>{{ isEditing ? 'Update Librarian' : 'Create Librarian' }}</span>
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
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  AlertCircle,
  Mail,
  Phone,
  Search,
  Users,
  UserCheck
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const librarians = ref<any[]>([]);
const libraries = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const searchQuery = ref('');
const filterLibrary = ref('');

const form = ref({
  id: null as number | null,
  name: '',
  email: '',
  phone: '',
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

const filteredLibrarians = computed(() => {
  return librarians.value.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          l.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          (l.crn && l.crn.toLowerCase().includes(searchQuery.value.toLowerCase()));
                          
    let matchesLibrary = true;
    if (filterLibrary.value === 'unassigned') {
      matchesLibrary = !l.library_id;
    } else if (filterLibrary.value !== '') {
      matchesLibrary = l.library_id === Number(filterLibrary.value);
    }
    
    return matchesSearch && matchesLibrary;
  });
});

const stats = computed(() => {
  const total = librarians.value.length;
  const approved = librarians.value.filter(l => l.status === 'approved').length;
  const unassigned = librarians.value.filter(l => !l.library_id).length;
  return { total, approved, unassigned };
});

const generateNextStaffId = () => {
  const existingNums = librarians.value
    .map(l => parseInt(l.crn, 10))
    .filter(num => !isNaN(num));

  const maxNum = existingNums.length > 0 ? Math.max(...existingNums) : 1000;
  return (maxNum >= 1000 ? maxNum + 1 : 1001).toString();
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    name: '',
    email: '',
    phone: '',
    crn: generateNextStaffId(),
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
    phone: librarian.phone || '',
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
    const payload: any = { ...form.value };
    // Remove empty password on edit (backend doesn't require it for updates)
    if (isEditing.value && !payload.password) {
      delete payload.password;
    }

    if (isEditing.value && form.value.id) {
      await adminAPI.updateLibrarian(form.value.id, payload);
      showSuccess('Updated!', 'Librarian details updated successfully');
    } else {
      await adminAPI.createLibrarian(payload);
      showSuccess('Created!', 'New librarian account created successfully');
    }
    await fetchLibrarians();
    showModal.value = false;
  } catch (error: any) {
    console.error('Error saving librarian:', error);
    const errData = error.response?.data;
    let msg = 'Failed to save librarian details.';
    if (errData?.errors) {
      msg = Object.values(errData.errors).flat().join(' ');
    } else if (errData?.message) {
      msg = errData.message;
    }
    showError('Save Failed', msg);
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (librarian: any) => {
  if (await showConfirm('Delete Librarian', `Are you sure you want to delete librarian "${librarian.name}"?`, 'Yes, Delete')) {
    try {
      await adminAPI.deleteLibrarian(librarian.id);
      showSuccess('Deleted!', 'Librarian account deleted successfully.');
      await fetchLibrarians();
    } catch (error: any) {
      console.error('Error deleting librarian:', error);
      showError('Delete Failed', error.response?.data?.message || 'Could not delete librarian.');
    }
  }
};

onMounted(() => {
  fetchLibrarians();
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
.text-slate-655 {
  color: #475569;
}
.text-red-655 {
  color: #ef4444;
}
.text-yellow-750 {
  color: #a16207;
}
</style>
