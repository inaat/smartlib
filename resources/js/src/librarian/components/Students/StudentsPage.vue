<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Students</h1>
        <p class="text-gray-600 mt-1">Manage student registrations and profiles</p>
      </div>
      <div class="flex items-center space-x-3">
        <button @click="exportStudents" class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
          <Download class="w-4 h-4" />
          <span class="text-sm font-medium">Export</span>
        </button>
        <button @click="openAddModal" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
          <UserPlus class="w-4 h-4" />
          <span class="text-sm font-medium">Add Student</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div v-for="stat in statsConfig" :key="stat.key" class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">{{ stat.label }}</p>
            <h3 class="text-2xl font-bold text-gray-900 mt-1">{{ stats[stat.key as keyof typeof stats] }}</h3>
          </div>
          <div :class="['p-3 rounded-lg', stat.bgClass]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.iconClass]" />
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div class="flex items-center space-x-4">
        <div class="relative flex-1">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by name, ID, or email..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <select
          v-model="statusFilter"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>

    <!-- Students Grid -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
    <div v-else-if="filteredStudents.length === 0" class="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
      <Users class="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-500">No students found matching your criteria.</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="student in filteredStudents"
        :key="student.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
      >
        <div class="h-24 bg-gradient-to-r from-purple-600 to-indigo-600 relative">
            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="flex space-x-1">
                    <button @click="openEditModal(student)" class="p-1.5 bg-white/20 hover:bg-white/30 rounded text-white backdrop-blur-sm">
                        <Edit2 class="w-4 h-4" />
                    </button>
                    <button @click="confirmDelete(student)" class="p-1.5 bg-red-500/20 hover:bg-red-500/40 rounded text-white backdrop-blur-sm">
                        <Trash2 class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
        <div class="p-6 -mt-12">
          <div class="flex items-start justify-between">
            <div class="w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <img v-if="student.profile_picture" :src="student.profile_picture" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                {{ student.name.charAt(0) }}
              </div>
            </div>
            <span :class="[
              'px-3 py-1 rounded-full text-xs font-medium',
              student.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
            ]">
              {{ student.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>

          <div class="mt-4">
            <h3 class="text-lg font-bold text-gray-900">{{ student.name }}</h3>
            <p class="text-sm text-gray-500">{{ student.crn }}</p>
          </div>

          <div class="mt-4 space-y-2">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <Mail class="w-4 h-4" />
              <span class="truncate">{{ student.email }}</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <Phone class="w-4 h-4" />
              <span>{{ student.phone || 'N/A' }}</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar class="w-4 h-4" />
              <span>Joined {{ formatDate(student.created_at) }}</span>
            </div>
            <div v-if="student.gender" class="flex items-center space-x-2 text-sm text-gray-600">
              <User class="w-4 h-4" />
              <span class="capitalize">{{ student.gender }}</span>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between text-sm">
              <div>
                <p class="text-gray-500">Bookings</p>
                <p class="font-bold text-gray-900">{{ student.seat_bookings_count || 0 }}</p>
              </div>
              <div>
                <p class="text-gray-500">Level</p>
                <p class="font-bold text-gray-900">{{ student.ca_level || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-gray-500">Points</p>
                <p class="font-bold text-purple-600">{{ student.loyalty_points || 0 }}</p>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center space-x-2">
            <button @click="openEditModal(student)" class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              View Profile
            </button>
            <button @click="openBanModal(student)" class="p-2 border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors" title="Ban Student">
              <BanIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Student Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Student' : 'Add New Student' }}</h2>
          <button @click="showModal = false" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <form @submit.prevent="saveStudent" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g. Ahmed Khan"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Student ID (CRN)</label>
              <input
                v-model="form.crn"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="STD-2024-XXX"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">CA Level</label>
              <select
                v-model="form.ca_level"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Level</option>
                <option value="PRC">PRC</option>
                <option value="CAP">CAP</option>
                <option value="Final">Final</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="+92 3XX XXXXXXX"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              v-model="form.gender"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div v-if="!isEditing || changePassword">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              :required="!isEditing"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <div v-if="isEditing" class="flex items-center space-x-2">
              <input type="checkbox" v-model="changePassword" id="changePwd" class="rounded text-purple-600 focus:ring-purple-500" />
              <label for="changePwd" class="text-sm text-gray-600">Change Password</label>
          </div>
          <div v-if="isEditing" class="flex items-center space-x-2">
              <input type="checkbox" v-model="form.is_active" id="isActive" class="rounded text-purple-600 focus:ring-purple-500" />
              <label for="isActive" class="text-sm text-gray-600">Account Active</label>
          </div>

          <div class="pt-4 flex items-center space-x-3">
            <button
              type="button"
              @click="showModal = false"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
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
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold">Ban Student</h2>
            <p class="text-orange-100 text-xs mt-1">Restrict access for {{ banForm.userName }}</p>
          </div>
          <button @click="showBanModal = false" class="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>
        <form @submit.prevent="submitBan" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Duration (Days)</label>
            <input
              v-model="banForm.days"
              type="number"
              min="1"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Leave empty for lifetime ban"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Reason</label>
            <textarea
              v-model="banForm.reason"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter reason for ban"
            ></textarea>
          </div>
          <div class="pt-4 flex items-center space-x-3">
            <button
              type="button"
              @click="showBanModal = false"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="banning"
              class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transition-all disabled:opacity-50"
            >
              {{ banning ? 'Banning...' : 'Confirm Ban' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Users,
  UserCheck,
  Clock,
  TrendingUp,
  Download,
  UserPlus,
  Search,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  X,
  Edit2,
  Trash2,
  Ban as BanIcon
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

const loading = ref(true);
const saving = ref(false);
const searchQuery = ref('');
const statusFilter = ref('all');
const showModal = ref(false);
const isEditing = ref(false);
const changePassword = ref(false);
const currentStudentId = ref<number | null>(null);

const showBanModal = ref(false);
const banning = ref(false);
const banForm = ref({
  userId: null as number | null,
  userName: '',
  days: null as number | null,
  reason: ''
});

const stats = ref({
  total: 0,
  activeToday: 0,
  pending: 0,
  newThisMonth: 0
});

const statsConfig = [
  { key: 'total', label: 'Total Students', icon: Users, bgClass: 'bg-blue-100', iconClass: 'text-blue-600' },
  { key: 'activeToday', label: 'Active Today', icon: UserCheck, bgClass: 'bg-green-100', iconClass: 'text-green-600' },
  { key: 'pending', label: 'Pending Approval', icon: Clock, bgClass: 'bg-orange-100', iconClass: 'text-orange-600' },
  { key: 'newThisMonth', label: 'New This Month', icon: TrendingUp, bgClass: 'bg-purple-100', iconClass: 'text-purple-600' }
];

const students = ref<any[]>([]);

const form = ref({
  name: '',
  email: '',
  phone: '',
  crn: '',
  gender: '',
  ca_level: '',
  password: '',
  is_active: true
});

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError, showWarning } = useSwal();

const fetchStudents = async () => {
  try {
    loading.value = true;
    const [studentsData, statsData] = await Promise.all([
      librarianAPI.getStudents(),
      librarianAPI.getStudentStats()
    ]);
    students.value = studentsData;
    stats.value = statsData;
  } catch (error) {
    console.error('Error fetching students:', error);
    showError('Load Failed', 'Failed to load students');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStudents);

const filteredStudents = computed(() => {
  let filtered = students.value;

  if (statusFilter.value !== 'all') {
    const isActive = statusFilter.value === 'active';
    filtered = filtered.filter(s => s.is_active === isActive);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(query) ||
      (s.crn && s.crn.toLowerCase().includes(query)) ||
      s.email.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const openAddModal = () => {
  isEditing.value = false;
  currentStudentId.value = null;
  form.value = {
    name: '',
    email: '',
    phone: '',
    crn: '',
    gender: '',
    ca_level: '',
    password: '',
    is_active: true
  };
  showModal.value = true;
};

const openEditModal = (student: any) => {
  isEditing.value = true;
  currentStudentId.value = student.id;
  changePassword.value = false;
  form.value = {
    name: student.name,
    email: student.email,
    phone: student.phone || '',
    crn: student.crn || '',
    gender: student.gender || '',
    ca_level: student.ca_level || '',
    password: '',
    is_active: !!student.is_active
  };
  showModal.value = true;
};

const saveStudent = async () => {
  try {
    saving.value = true;
    const payload: any = { ...form.value };
    if (isEditing.value && !changePassword.value) {
      delete payload.password;
    }

    if (isEditing.value && currentStudentId.value) {
      await librarianAPI.updateStudent(currentStudentId.value, payload);
      showSuccess('Updated!', 'Student updated successfully');
    } else {
      await librarianAPI.createStudent(payload);
      showSuccess('Created!', 'Student created successfully');
    }
    showModal.value = false;
    fetchStudents();
  } catch (error: any) {
    console.error('Error saving student:', error);
    const message = error.response?.data?.message || 'Failed to save student';
    showError('Save Failed', message);
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (student: any) => {
  if (await showConfirm('Delete Student', `Are you sure you want to delete ${student.name}?`, 'Yes, Delete')) {
    try {
      await librarianAPI.deleteStudent(student.id);
      showSuccess('Deleted!', 'Student deleted successfully');
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      showError('Delete Failed', 'Failed to delete student');
    }
  }
};

const openBanModal = (student: any) => {
  banForm.value = {
    userId: student.id,
    userName: student.name,
    days: null,
    reason: ''
  };
  showBanModal.value = true;
};

const submitBan = async () => {
  if (!banForm.value.userId) return;
  try {
    banning.value = true;
    await librarianAPI.banStudent(banForm.value.userId, {
      days: banForm.value.days || undefined,
      reason: banForm.value.reason
    });
    showBanModal.value = false;
    showSuccess('Banned', `${banForm.value.userName} has been restricted`);
    fetchStudents();
  } catch (error) {
    showError('Ban Failed', 'Failed to restrict student');
  } finally {
    banning.value = false;
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const exportStudents = () => {
  showWarning('Coming Soon', 'Export functionality coming soon');
};
</script>
