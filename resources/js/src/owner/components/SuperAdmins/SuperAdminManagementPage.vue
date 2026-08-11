<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Superadmin Management</h1>
        <p class="text-gray-500 mt-1">Add, update, and manage high-level system administrators</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchSuperAdmins"
          :disabled="loading"
          class="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm flex items-center space-x-2 disabled:opacity-50"
          title="Refresh List"
        >
          <RefreshCw :class="['w-5 h-5 text-gray-600', loading ? 'animate-spin' : '']" />
        </button>
        <button
          @click="openCreateModal"
          class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all flex items-center space-x-2 font-semibold"
        >
          <Plus class="w-5 h-5" />
          <span>New Superadmin</span>
        </button>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="p-3 bg-indigo-50 rounded-xl text-indigo-600">
          <ShieldAlert class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Total Superadmins</p>
          <h3 class="text-2xl font-bold text-gray-900">{{ superAdmins.length }}</h3>
        </div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="p-3 bg-green-50 rounded-xl text-green-600">
          <UserCheck class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Active Admins</p>
          <h3 class="text-2xl font-bold text-gray-900">{{ superAdmins.filter(a => a.is_active).length }}</h3>
        </div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="p-3 bg-red-50 rounded-xl text-red-600">
          <UserX class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Disabled Accounts</p>
          <h3 class="text-2xl font-bold text-gray-900">{{ superAdmins.filter(a => !a.is_active).length }}</h3>
        </div>
      </div>
    </div>

    <!-- List Table -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div v-if="loading && superAdmins.length === 0" class="flex flex-col items-center justify-center py-24 space-y-4">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600/20 border-t-indigo-600"></div>
        <p class="text-gray-400 font-medium animate-pulse">Loading amazing admins...</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50/50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Admin Details</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Email</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Created At</th>
              <th class="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="admin in superAdmins" :key="admin.id" class="hover:bg-indigo-50/30 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">
                    {{ admin.name.charAt(0) }}
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-bold text-gray-900">{{ admin.name }}</div>
                    <div class="text-xs text-gray-400">ID: #{{ admin.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center text-sm text-gray-600">
                  <Mail class="w-4 h-4 mr-2 text-gray-400" />
                  {{ admin.email }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-3 py-1 text-xs font-bold rounded-full',
                    admin.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  ]"
                >
                  {{ admin.is_active ? 'Active' : 'Disabled' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ new Date(admin.created_at).toLocaleDateString() }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    @click="editAdmin(admin)" 
                    class="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <Edit2 class="w-4 h-4" />
                  </button>
                  <button 
                    @click="confirmDelete(admin)" 
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    :disabled="admin.id === currentUser?.id"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="superAdmins.length === 0 && !loading">
              <td colspan="5" class="px-6 py-12 text-center">
                <div class="flex flex-col items-center justify-center space-y-3">
                  <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShieldOff class="w-8 h-8 text-gray-300" />
                  </div>
                  <p class="text-gray-500 font-medium">No superadmins found.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Upsert Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
          <h3 class="text-xl font-bold text-white">{{ isEditing ? 'Update Admin' : 'New Superadmin' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X class="w-5 h-5 text-white" />
          </button>
        </div>

        <form @submit.prevent="saveAdmin" class="p-8 space-y-5">
          <!-- Error Alert -->
          <div v-if="errors.general" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl flex items-center mb-4">
            <ShieldAlert class="w-5 h-5 text-red-500 mr-3 shrink-0" />
            <p class="text-sm text-red-700 font-medium">{{ errors.general }}</p>
          </div>

          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Display Name</label>
            <div class="relative">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input
                v-model="form.name"
                @input="clearError('name')"
                type="text"
                required
                class="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                placeholder="e.g. Admin Extraordinaire"
              />
            </div>
            <p v-if="errors.name" class="mt-1 text-xs text-red-600 font-bold">{{ errors.name }}</p>
          </div>

          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input
                v-model="form.email"
                @input="clearError('email')"
                type="email"
                required
                class="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                placeholder="admin@smartlib.com"
              />
            </div>
            <p v-if="errors.email" class="mt-1 text-xs text-red-600 font-bold">{{ errors.email }}</p>
          </div>

          <div v-if="!isEditing || form.password">
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {{ isEditing ? 'Update Password (optional)' : 'Secure Password' }}
            </label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input
                v-model="form.password"
                @input="clearError('password')"
                type="password"
                :required="!isEditing"
                class="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
            <p v-if="errors.password" class="mt-1 text-xs text-red-600 font-bold">{{ errors.password }}</p>
          </div>

          <div v-if="isEditing" class="flex items-center space-x-3 pt-2">
            <button 
              type="button"
              @click="form.is_active = !form.is_active"
              :class="[
                'w-12 h-6 rounded-full relative transition-colors duration-200 outline-none',
                form.is_active ? 'bg-indigo-600' : 'bg-gray-200'
              ]"
            >
              <div :class="['absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200', form.is_active ? 'left-7' : 'left-1']"></div>
            </button>
            <span class="text-sm font-bold text-gray-700">Account Active</span>
          </div>

          <div class="flex items-center space-x-4 pt-4">
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2 shadow-indigo-100"
            >
              <Loader2 v-if="saving" class="w-5 h-5 animate-spin" />
              <span>{{ saving ? 'Processing...' : (isEditing ? 'Save Changes' : 'Create Account') }}</span>
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
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  Mail,
  User,
  ShieldAlert,
  ShieldOff,
  UserCheck,
  UserX,
  Lock,
  Loader2
} from 'lucide-vue-next';
import { ownerAPI } from '@/shared/services/api';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';

const { user: currentUser } = useAuth();
const { showSuccess, showError, showConfirm } = useSwal();
const superAdmins = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const form = ref({
  id: null as number | null,
  name: '',
  email: '',
  password: '',
  is_active: true
});

const errors = ref<any>({});

const clearError = (field: string) => {
  if (errors.value[field]) {
    delete errors.value[field];
  }
  if (errors.value.general) {
    errors.value.general = null;
  }
};

const fetchSuperAdmins = async () => {
  loading.value = true;
  try {
    const data = await ownerAPI.getSuperAdmins();
    superAdmins.value = data;
  } catch (error) {
    console.error('Error fetching superadmins:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  errors.value = {};
  form.value = {
    id: null,
    name: '',
    email: '',
    password: '',
    is_active: true
  };
  showModal.value = true;
};

const editAdmin = (admin: any) => {
  isEditing.value = true;
  errors.value = {};
  form.value = {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    password: '',
    is_active: !!admin.is_active
  };
  showModal.value = true;
};

const saveAdmin = async () => {
  saving.value = true;
  errors.value = {};
  try {
    const payload: any = { ...form.value };
    if (isEditing.value && !payload.password) {
      delete payload.password;
    }
    if (isEditing.value && form.value.id) {
      await ownerAPI.updateSuperAdmin(form.value.id, payload);
      showSuccess('Success', 'Superadmin updated successfully');
    } else {
      await ownerAPI.createSuperAdmin(payload);
      showSuccess('Success', 'Superadmin created successfully');
    }
    await fetchSuperAdmins();
    showModal.value = false;
  } catch (error: any) {
    if (error.response?.status === 422) {
      const backendErrors = error.response.data.errors;
      // Map Laravel errors to our local errors object
      Object.keys(backendErrors).forEach(key => {
        errors.value[key] = backendErrors[key][0];
      });
      errors.value.general = 'Please correct the errors below.';
    } else {
      showError('Error', 'An unexpected error occurred. Please try again.');
    }
    console.error('Error saving superadmin:', error);
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (admin: any) => {
  if (await showConfirm('Delete Superadmin', `Are you sure you want to delete superadmin "${admin.name}"? This action cannot be undone.`, 'Yes, delete')) {
    try {
      await ownerAPI.deleteSuperAdmin(admin.id);
      showSuccess('Deleted', 'Superadmin has been deleted.');
      await fetchSuperAdmins();
    } catch (error) {
      showError('Error', 'Failed to delete superadmin.');
      console.error('Error deleting superadmin:', error);
    }
  }
};

onMounted(() => {
  fetchSuperAdmins();
});
</script>
