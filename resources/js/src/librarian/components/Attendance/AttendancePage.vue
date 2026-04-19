<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Attendance</h1>
        <p class="text-gray-600 mt-1">Monitor and manage student attendance</p>
      </div>
      <div class="flex items-center space-x-3">
        <div class="relative">
          <CalendarIcon class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="selectedDate"
            type="date"
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            @change="fetchAttendance"
          />
        </div>
        <button
          @click="showMarkModal = true"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <UserPlus class="w-4 h-4" />
          <span>Mark Attendance</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 font-medium">Total Today</p>
            <h3 class="text-2xl font-bold text-gray-900 mt-1">{{ stats.total_today }}</h3>
          </div>
          <div class="p-3 bg-purple-50 rounded-lg">
            <Users class="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 font-medium">Currently Present</p>
            <h3 class="text-2xl font-bold text-green-600 mt-1">{{ stats.currently_present }}</h3>
          </div>
          <div class="p-3 bg-green-50 rounded-lg">
            <UserCheck class="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 font-medium">Avg. Duration</p>
            <h3 class="text-2xl font-bold text-blue-600 mt-1">{{ stats.avg_minutes }} min</h3>
          </div>
          <div class="p-3 bg-blue-50 rounded-lg">
            <Clock class="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </div>

    <!-- Attendance Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
        <div class="flex items-center space-x-4">
          <div class="relative">
            <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search student or CRN..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64 text-sm"
              @input="debounceSearch"
            />
          </div>
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-sm"
            @change="fetchAttendance"
          >
            <option value="all">All Status</option>
            <option value="present">Currently Present</option>
            <option value="left">Already Left</option>
          </select>
        </div>
      </div>

      <div v-if="loading" class="p-12 flex justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
      <div v-else-if="attendance.length === 0" class="p-12 text-center text-gray-500">
        No attendance records found for this date.
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">CRN</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Check In</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Check Out</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Method</th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="record in attendance" :key="record.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
                    {{ record.user?.name?.charAt(0) }}
                  </div>
                  <span class="font-medium text-gray-900">{{ record.user?.name }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ record.user?.crn }}</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-medium">{{ formatTime(record.check_in_time) }}</td>
              <td class="px-6 py-4 text-sm text-gray-900 font-medium">
                <span v-if="record.check_out_time">{{ formatTime(record.check_out_time) }}</span>
                <span v-else class="text-green-600 flex items-center space-x-1">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Present</span>
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">
                {{ record.total_minutes ? record.total_minutes + ' min' : '-' }}
              </td>
              <td class="px-6 py-4">
                <span :class="[
                  'px-2 py-1 rounded-full text-[10px] font-bold uppercase',
                  record.marked_manually ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                ]">
                  {{ record.marked_manually ? 'Manual' : 'System' }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <button
                  v-if="!record.check_out_time"
                  @click="handleManualCheckOut(record.user.crn)"
                  class="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Check Out
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="pagination.total > 0" class="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Showing <span class="font-medium">{{ pagination.from }}</span> to <span class="font-medium">{{ pagination.to }}</span> of <span class="font-medium">{{ pagination.total }}</span> results
          </div>
          <div class="flex items-center space-x-2">
            <button
              @click="changePage(pagination.current_page - 1)"
              :disabled="pagination.current_page === 1"
              class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              Previous
            </button>
            <button
              @click="changePage(pagination.current_page + 1)"
              :disabled="pagination.current_page === pagination.last_page"
              class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mark Attendance Modal -->
    <div v-if="showMarkModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in duration-200">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h3 class="text-xl font-bold">Mark Attendance</h3>
          <button @click="showMarkModal = false" class="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Student CRN</label>
            <input
              v-model="markForm.crn"
              type="text"
              placeholder="Enter student CRN..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              @keyup.enter="handleMarkAttendance"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <button
              @click="markForm.type = 'check_in'; handleMarkAttendance()"
              :disabled="marking"
              class="flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-purple-600 hover:bg-purple-50 group"
              :class="markForm.type === 'check_in' ? 'border-purple-600 bg-purple-50' : 'border-gray-100'"
            >
              <UserCheck class="w-8 h-8 mb-2 text-gray-400 group-hover:text-purple-600" />
              <span class="font-bold text-gray-700 group-hover:text-purple-700">Check In</span>
            </button>
            <button
              @click="markForm.type = 'check_out'; handleMarkAttendance()"
              :disabled="marking"
              class="flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-blue-600 hover:bg-blue-50 group"
              :class="markForm.type === 'check_out' ? 'border-blue-600 bg-blue-50' : 'border-gray-100'"
            >
              <LogOut class="w-8 h-8 mb-2 text-gray-400 group-hover:text-blue-600" />
              <span class="font-bold text-gray-700 group-hover:text-blue-700">Check Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  Users,
  UserCheck,
  Clock,
  Search,
  Calendar as CalendarIcon,
  UserPlus,
  X,
  LogOut
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { format } from 'date-fns';
import { useSwal } from '@/shared/composables/useSwal';

const { showSuccess, showError } = useSwal();

const loading = ref(false);
const marking = ref(false);
const attendance = ref([]);
const stats = ref({
  total_today: 0,
  currently_present: 0,
  avg_minutes: 0
});

const selectedDate = ref(format(new Date(), 'yyyy-MM-dd'));
const searchQuery = ref('');
const statusFilter = ref('all');
const showMarkModal = ref(false);

const markForm = ref({
  crn: '',
  type: 'check_in'
});

const pagination = ref({
  current_page: 1,
  last_page: 1,
  total: 0,
  from: 0,
  to: 0
});

const fetchAttendance = async (page = 1) => {
  loading.value = true;
  try {
    const response = await librarianAPI.getAttendance({
      page,
      date: selectedDate.value,
      search: searchQuery.value,
      status: statusFilter.value === 'all' ? null : statusFilter.value
    });
    attendance.value = response.data;
    pagination.value = {
      current_page: response.current_page,
      last_page: response.last_page,
      total: response.total,
      from: response.from,
      to: response.to
    };
    await fetchStats();
  } catch (error) {
    console.error('Error fetching attendance:', error);
  } finally {
    loading.value = false;
  }
};

const fetchStats = async () => {
  try {
    stats.value = await librarianAPI.getAttendanceStats({ date: selectedDate.value });
  } catch (error) {
    console.error('Error fetching attendance stats:', error);
  }
};

let searchTimeout: any = null;
const debounceSearch = () => {
  if (searchTimeout) clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    fetchAttendance(1);
  }, 500);
};

const changePage = (page: number) => {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchAttendance(page);
  }
};

const handleMarkAttendance = async () => {
  if (!markForm.value.crn) {
    showError('Error', 'Please enter a student CRN');
    return;
  }

  marking.value = true;
  try {
    await librarianAPI.markAttendance(markForm.value);
    showSuccess('Success', `Student ${markForm.value.type === 'check_in' ? 'checked in' : 'checked out'} successfully`);
    markForm.value.crn = '';
    showMarkModal.value = false;
    fetchAttendance();
  } catch (error: any) {
    showError('Error', error.response?.data?.message || 'Failed to mark attendance');
  } finally {
    marking.value = false;
  }
};

const handleManualCheckOut = (crn: string) => {
  markForm.value.crn = crn;
  markForm.value.type = 'check_out';
  handleMarkAttendance();
};

const formatTime = (time: string) => {
  if (!time) return '-';
  try {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    return format(date, 'hh:mm a');
  } catch (e) {
    return time;
  }
};

onMounted(() => {
  fetchAttendance();
});
</script>
