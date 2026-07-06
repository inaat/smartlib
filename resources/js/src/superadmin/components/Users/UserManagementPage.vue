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
          <span>Add Student</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Students</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ users.length }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-purple-50 text-purple-600">
          <Users class="w-5 h-5" />
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Plans</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ activeSubscriptionsCount }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-green-50 text-green-600">
          <CreditCard class="w-5 h-5" />
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Pending</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ pendingCount }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-amber-50 text-amber-600">
          <Clock class="w-5 h-5" />
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Bookings</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ totalBookings }}</h3>
        </div>
        <div class="p-3.5 rounded-xl bg-blue-50 text-blue-600">
          <Calendar class="w-5 h-5" />
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
            placeholder="Search by name, ID, or email..."
            class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none placeholder-slate-400"
          />
        </div>
        <select
          v-model="filterLibrary"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
        >
          <option value="">All Libraries</option>
          <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
        </select>
        <select
          v-model="filterStatus"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
        >
          <option value="">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="suspended">Suspended</option>
          <option value="banned">Banned</option>
        </select>
        <button
          @click="fetchUsers"
          :disabled="loading"
          class="p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors cursor-pointer shadow-sm"
          title="Refresh Data"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <!-- Students Table List -->
    <div v-if="loading && users.length === 0" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
    <div v-else-if="filteredUsers.length === 0" class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
      <Users class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <p class="text-xs font-bold text-slate-455 uppercase tracking-widest">No students found matching your criteria.</p>
    </div>
    <div v-else class="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-100">
          <thead class="bg-gray-50/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Student</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">CRN & Level</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Subscription</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Status</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr 
              v-for="user in filteredUsers" 
              :key="user.id"
              class="hover:bg-slate-50/50 transition-colors"
            >
              <!-- Student Initial Avatar & Name -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3.5">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 font-bold text-sm">
                    {{ user.name.charAt(0).toUpperCase() }}
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-medium text-slate-700">{{ user.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">{{ user.email }}</div>
                  </div>
                </div>
              </td>

              <!-- CRN & CA Level -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div class="text-xs font-bold text-slate-700">CRN: {{ user.crn || 'N/A' }}</div>
                <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">Level: {{ user.ca_level || 'No Level' }}</div>
              </td>

              <!-- Subscription -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div v-if="user.active_subscription" class="flex flex-col">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-100">
                    {{ user.active_subscription.subscription_plan?.name }}
                  </span>
                  <span class="text-[9px] text-slate-400 mt-1">Expires: {{ formatDate(user.active_subscription.expires_at) }}</span>
                </div>
                <div v-else class="text-xs text-slate-400 italic">No active plan</div>
              </td>

              <!-- Status Badge -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <button
                  @click.stop="cycleUserStatus(user)"
                  :disabled="statusUpdating === user.id"
                  :class="[
                    'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border transition-all disabled:opacity-50 cursor-pointer bg-white',
                    user.status === 'approved' ? 'bg-green-50 border-green-100 text-green-700' : 
                    user.status === 'pending' ? 'bg-amber-55 border-amber-100 text-amber-700' : 
                    user.status === 'suspended' ? 'bg-orange-50 border-orange-100 text-orange-700' : 'bg-red-50 border-red-100 text-red-700'
                  ]"
                >
                  <RefreshCw v-if="statusUpdating === user.id" class="w-2.5 h-2.5 animate-spin mr-1 inline-block" />
                  {{ user.status }}
                </button>
              </td>

              <!-- Actions -->
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    v-if="user.status === 'pending'"
                    @click="approveUser(user)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-green-700 hover:text-green-800 transition-all cursor-pointer shadow-sm"
                    title="Approve Student"
                  >
                    <UserCheck class="w-4 h-4" />
                  </button>
                  <button 
                    @click="editUser(user)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm"
                    title="Edit Student"
                  >
                    <Edit2 class="w-4 h-4" />
                  </button>
                  <button 
                    @click="openBanModal(user)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-orange-750 hover:text-orange-800 transition-all cursor-pointer shadow-sm"
                    title="Ban Student"
                  >
                    <Ban class="w-4 h-4" />
                  </button>
                  <button 
                    @click="confirmDelete(user)" 
                    class="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm"
                    title="Delete Student"
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
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col">
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">{{ isEditing ? 'Edit Student' : 'Add New Student' }}</h2>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="saveUser" class="p-6 space-y-4 text-left">
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

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Student ID (CRN)</label>
              <input
                v-model="form.crn"
                type="text"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. 12345"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">CA Level</label>
              <select
                v-model="form.ca_level"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="">Select Level</option>
                <option value="PRC">PRC</option>
                <option value="CAF">CAF</option>
                <option value="Final">Final</option>
              </select>
            </div>
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

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Account Status</label>
              <select
                v-model="form.status"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="suspended">Suspended</option>
                <option value="banned">Banned</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Gender</label>
              <select
                v-model="form.gender"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
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
              <span v-else>{{ isEditing ? 'Update Student' : 'Create Student' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Ban Modal -->
    <div v-if="showBanModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col">
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">Ban Student</h2>
          <button @click="showBanModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="submitBan" class="p-6 space-y-4 text-left">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Restrict Access For</label>
            <p class="text-xs text-slate-500 mt-1 mb-2 font-medium">Student: {{ banForm.userName }}</p>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Ban Duration (Days)</label>
            <input
              v-model="banForm.days"
              type="number"
              min="1"
              placeholder="Leave empty for lifetime ban"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
            />
          </div>
          
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Reason</label>
            <textarea
              v-model="banForm.reason"
              rows="3"
              placeholder="Reason for banning"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none"
            ></textarea>
          </div>

          <div class="pt-4 flex items-center space-x-3">
            <button
              type="button"
              @click="showBanModal = false"
              class="flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="banning"
              class="flex-1 px-4 py-2.5 bg-red-655 hover:bg-red-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              <span v-if="banning">Banning...</span>
              <span v-else>Confirm Ban</span>
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
  Users, 
  UserCheck, 
  RefreshCw, 
  Search, 
  X, 
  Edit2, 
  Trash2,
  Clock,
  CreditCard,
  Plus,
  TrendingUp,
  Calendar,
  Ban
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';
import { format, isSameMonth, parseISO } from 'date-fns';

const users = ref<any[]>([]);
const libraries = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const statusUpdating = ref<number | null>(null);

const showBanModal = ref(false);
const banning = ref(false);
const banForm = ref({
  userId: null as number | null,
  userName: '',
  days: null as number | null,
  reason: ''
});

const searchQuery = ref('');
const filterLibrary = ref('');
const filterStatus = ref('');

const form = ref({
  id: null as number | null,
  name: '',
  email: '',
  crn: '',
  ca_level: '',
  gender: '',
  password: '',
  status: 'approved',
  library_id: null as number | null,
  role: 'student'
});

const activeSubscriptionsCount = computed(() => {
  return users.value.filter(u => u.active_subscription).length;
});

const pendingCount = computed(() => {
  return users.value.filter(u => u.status === 'pending').length;
});

const totalBookings = computed(() => {
  return users.value.reduce((acc, u) => acc + (u.bookings_count || 0), 0);
});

const newThisMonth = computed(() => {
  const now = new Date();
  return users.value.filter(u => {
    try {
      return isSameMonth(parseISO(u.created_at), now);
    } catch {
      return false;
    }
  }).length;
});

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = !searchQuery.value || 
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (user.crn && user.crn.toLowerCase().includes(searchQuery.value.toLowerCase()));
    
    const matchesLibrary = !filterLibrary.value || user.library_id === Number(filterLibrary.value);
    const matchesStatus = !filterStatus.value || user.status === filterStatus.value;
    
    return matchesSearch && matchesLibrary && matchesStatus;
  });
});

const fetchUsers = async () => {
  loading.value = true;
  try {
    const data = await adminAPI.getUsers();
    users.value = data;
  } catch (error) {
    console.error('Error fetching users:', error);
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
    ca_level: '',
    gender: '',
    password: '',
    status: 'approved',
    library_id: null,
    role: 'student'
  };
  showModal.value = true;
};

const editUser = (user: any) => {
  isEditing.value = true;
  form.value = {
    id: user.id,
    name: user.name,
    email: user.email,
    crn: user.crn || '',
    ca_level: user.ca_level || '',
    gender: user.gender || '',
    password: '',
    status: user.status,
    library_id: user.library_id,
    role: 'student'
  };
  showModal.value = true;
};

const openBanModal = (user: any) => {
  banForm.value = {
    userId: user.id,
    userName: user.name,
    days: null,
    reason: ''
  };
  showBanModal.value = true;
};

const submitBan = async () => {
  if (!banForm.value.userId) return;
  banning.value = true;
  try {
    await adminAPI.banUser(banForm.value.userId, {
      days: banForm.value.days || undefined,
      reason: banForm.value.reason
    });
    showBanModal.value = false;
    alert(`User ${banForm.value.userName} banned successfully.`);
    await fetchUsers();
  } catch (error) {
    console.error('Error banning user:', error);
    alert('Failed to ban user.');
  } finally {
    banning.value = false;
  }
};

const saveUser = async () => {
  saving.value = true;
  try {
    const payload: any = { ...form.value };
    if (!payload.ca_level) delete payload.ca_level;
    if (!payload.crn) delete payload.crn;
    if (!payload.gender) delete payload.gender;
    if (isEditing.value && !payload.password) {
      delete payload.password;
    }

    if (isEditing.value && form.value.id) {
      await adminAPI.updateUser(form.value.id, payload);
    } else {
      await adminAPI.createUser(payload);
    }
    await fetchUsers();
    showModal.value = false;
  } catch (error: any) {
    console.error('Error saving student:', error);
    const errData = error.response?.data;
    if (errData?.errors) {
      const messages = Object.values(errData.errors).flat().join('\n');
      alert(messages);
    } else if (errData?.message) {
      alert(errData.message);
    }
  } finally {
    saving.value = false;
  }
};

const approveUser = async (user: any) => {
  try {
    await adminAPI.approveUser(user.id);
    await fetchUsers();
  } catch (error) {
    console.error('Error approving user:', error);
  }
};

const cycleUserStatus = async (user: any) => {
  if (statusUpdating.value) return;
  
  const statuses = ['approved', 'suspended', 'banned', 'pending'];
  const currentIndex = statuses.indexOf(user.status);
  const nextStatus = statuses[(currentIndex + 1) % statuses.length];
  
  statusUpdating.value = user.id;
  try {
    await adminAPI.updateUser(user.id, { status: nextStatus });
    user.status = nextStatus;
  } catch (error) {
    console.error('Error updating status:', error);
  } finally {
    statusUpdating.value = null;
  }
};

const confirmDelete = async (user: any) => {
  if (confirm(`Are you sure you want to delete student "${user.name}"?`)) {
    try {
      await adminAPI.deleteUser(user.id);
      await fetchUsers();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'N/A';
  try {
    return format(parseISO(dateStr), 'MMM dd, yyyy');
  } catch {
    return dateStr;
  }
};

onMounted(() => {
  fetchUsers();
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
</style>
