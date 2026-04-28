<template>
  <div class="p-6 space-y-6 bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 tracking-tight">Student Management</h1>
        <p class="text-gray-500 mt-1">Manage all registered students, their subscriptions and library assignments</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchUsers"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center space-x-2 shadow-sm disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4 text-gray-500', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-semibold text-gray-700">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-md hover:shadow-lg"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-semibold">Add Student</span>
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Total Students</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ users.length }}</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-xl">
            <Users class="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-green-600 font-medium">
          <TrendingUp class="w-3 h-3 mr-1" />
          <span>{{ newThisMonth }} new this month</span>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Active Plans</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ activeSubscriptionsCount }}</p>
          </div>
          <div class="p-3 bg-green-50 rounded-xl">
            <CreditCard class="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-gray-500">
          <span>{{ Math.round((activeSubscriptionsCount / (users.length || 1)) * 100) }}% conversion rate</span>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Pending Approval</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ pendingCount }}</p>
          </div>
          <div class="p-3 bg-amber-50 rounded-xl">
            <Clock class="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-amber-600 font-medium">
          <span>Requires attention</span>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Total Bookings</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ totalBookings }}</p>
          </div>
          <div class="p-3 bg-purple-50 rounded-xl">
            <Calendar class="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-gray-500">
          <span>Across all libraries</span>
        </div>
      </div>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name, email, or CRN..."
          class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
        />
      </div>
      <div class="flex items-center gap-3">
        <select
          v-model="filterLibrary"
          class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
        >
          <option value="">All Libraries</option>
          <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
        </select>
        <select
          v-model="filterStatus"
          class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
        >
          <option value="">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="suspended">Suspended</option>
          <option value="banned">Banned</option>
        </select>
      </div>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div v-if="loading && users.length === 0" class="flex flex-col items-center justify-center py-24">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
        <p class="text-gray-500 font-medium">Loading students...</p>
      </div>

      <div v-else-if="filteredUsers.length === 0" class="flex flex-col items-center justify-center py-24">
        <div class="p-4 bg-gray-50 rounded-full mb-4">
          <Search class="w-8 h-8 text-gray-300" />
        </div>
        <p class="text-gray-500 font-medium">No students found matching your criteria</p>
        <button @click="resetFilters" class="mt-2 text-indigo-600 hover:underline text-sm font-semibold">Clear all filters</button>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-100">
          <thead>
            <tr class="bg-gray-50/50">
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">CRN & Level</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Subscription</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-50">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50/80 transition-colors group">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="relative">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm">
                      {{ user.name.charAt(0) }}
                    </div>
                    <div v-if="user.is_active" class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-bold text-gray-900">{{ user.name }}</div>
                    <div class="text-xs text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ user.crn }}</div>
                <div class="text-xs text-gray-500">{{ user.ca_level || 'No Level' }}</div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <div v-if="user.active_subscription" class="flex flex-col">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
                    {{ user.active_subscription.subscription_plan?.name }}
                  </span>
                  <span class="text-[10px] text-gray-500 mt-1">Expires: {{ formatDate(user.active_subscription.expires_at) }}</span>
                </div>
                <div v-else class="text-xs text-gray-400">No active plan</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button
                  @click.stop="cycleUserStatus(user)"
                  :disabled="statusUpdating === user.id"
                  :class="[
                    'px-2.5 py-1 inline-flex text-[10px] leading-4 font-bold uppercase tracking-wider rounded-full shadow-sm hover:opacity-80 transition-all disabled:opacity-50 cursor-pointer border-none',
                    user.status === 'approved' ? 'bg-green-100 text-green-700' : 
                    user.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                    user.status === 'suspended' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  ]"
                >
                  <RefreshCw v-if="statusUpdating === user.id" class="w-2.5 h-2.5 animate-spin mr-1" />
                  {{ user.status }}
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex items-center justify-end space-x-2 transition-opacity">
                  <button 
                    v-if="user.status === 'pending'"
                    @click="approveUser(user)" 
                    class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Approve Student"
                  >
                    <UserCheck class="w-4 h-4" />
                  </button>
                  <button 
                    @click="editUser(user)" 
                    class="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Edit Student"
                  >
                    <Edit2 class="w-4 h-4" />
                  </button>
                  <button 
                    @click="openBanModal(user)" 
                    class="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    title="Ban Student"
                  >
                    <Ban class="w-4 h-4" />
                  </button>
                  <button 
                    @click="confirmDelete(user)" 
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
    <div v-if="showModal" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold">{{ isEditing ? 'Edit Student' : 'Add New Student' }}</h3>
            <p class="text-indigo-100 text-xs mt-1">{{ isEditing ? 'Update student profile information' : 'Register a new student in the system' }}</p>
          </div>
          <button @click="showModal = false" class="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>

        <form @submit.prevent="saveUser" class="p-8 space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="e.g. John Doe"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="john@example.com"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">CRN / Student ID</label>
              <input
                v-model="form.crn"
                type="number"
                required
                placeholder="e.g. 12345"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">CA Level</label>
              <select
                v-model="form.ca_level"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select Level</option>
                <option value="PRC">PRC</option>
                <option value="CAF">CAF</option>
                <option value="Final">Final</option>
              </select>
            </div>
          </div>

          <div v-if="!isEditing" class="space-y-1.5">
            <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              placeholder="Minimum 8 characters"
              class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Account Status</label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="suspended">Suspended</option>
                <option value="banned">Banned</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Gender</label>
              <select
                v-model="form.gender"
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div class="flex items-center space-x-4 pt-6">
            <button
              type="button"
              @click="showModal = false"
              class="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <RefreshCw v-if="saving" class="w-4 h-4 animate-spin" />
              <span>{{ saving ? 'Saving...' : (isEditing ? 'Update Student' : 'Create Student') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- Ban Modal -->
    <div v-if="showBanModal" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="px-8 py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold">Ban Student</h3>
            <p class="text-orange-100 text-xs mt-1">Restrict {{ banForm.userName }} from accessing libraries</p>
          </div>
          <button @click="showBanModal = false" class="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>

        <form @submit.prevent="submitBan" class="p-8 space-y-5">
          <div class="space-y-1.5">
            <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Ban Duration (Days)</label>
            <input
              v-model="banForm.days"
              type="number"
              min="1"
              placeholder="Leave empty for lifetime ban"
              class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
            />
          </div>
          
          <div class="space-y-1.5">
            <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Reason</label>
            <textarea
              v-model="banForm.reason"
              rows="3"
              placeholder="Reason for banning"
              class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none resize-none"
            ></textarea>
          </div>

          <div class="flex items-center space-x-4 pt-4">
            <button
              type="button"
              @click="showBanModal = false"
              class="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="banning"
              class="flex-1 px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 font-bold shadow-lg shadow-red-200 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <RefreshCw v-if="banning" class="w-4 h-4 animate-spin" />
              <span>{{ banning ? 'Banning...' : 'Confirm Ban' }}</span>
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
  Library as LibraryIcon,
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
    // Optionally refetch users if API injects ban info into user object
  } catch (error) {
    console.error('Error banning user:', error);
    alert('Failed to ban user.');
  } finally {
    banning.value = false;
  }
};

const unbanUser = async (user: any) => {
  if (!confirm(`Are you sure you want to unban ${user.name}?`)) return;
  try {
    await adminAPI.unbanUser(user.id);
    alert(`User ${user.name} unbanned successfully.`);
  } catch (error) {
    console.error('Error unbanning user:', error);
  }
};

const saveUser = async () => {
  saving.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await adminAPI.updateUser(form.value.id, form.value);
    } else {
      await adminAPI.createUser(form.value);
    }
    await fetchUsers();
    showModal.value = false;
  } catch (error) {
    console.error('Error saving student:', error);
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
    console.error('Error cycling status:', error);
  } finally {
    statusUpdating.value = null;
  }
};

const confirmDelete = async (user: any) => {
  if (confirm(`Are you sure you want to delete student "${user.name}"? This action cannot be undone.`)) {
    try {
      await adminAPI.deleteUser(user.id);
      await fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  filterLibrary.value = '';
  filterStatus.value = '';
};

const formatDate = (date: string) => {
  if (!date) return 'N/A';
  try {
    return format(parseISO(date), 'MMM dd, yyyy');
  } catch {
    return 'Invalid Date';
  }
};

onMounted(() => {
  fetchUsers();
  fetchLibraries();
});
</script>
