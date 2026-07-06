<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Top Action Header -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3 w-full sm:w-auto">
        <!-- Date Selector -->
        <div class="relative flex-1 sm:flex-none">
          <CalendarIcon class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            v-model="selectedDate"
            type="date"
            class="w-full sm:w-auto pl-9 pr-4 py-2 border border-slate-200 focus:border-slate-350 bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-slate-100 text-xs font-semibold text-slate-600 shadow-sm cursor-pointer transition-all outline-none"
            @change="() => fetchAttendance(1)"
          />
        </div>
        <button
          @click="showMarkModal = true"
          class="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 border border-emerald-700 hover:bg-emerald-750 text-white rounded-xl transition-all flex items-center justify-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
        >
          <UserPlus class="w-4 h-4" />
          <span>Mark Attendance</span>
        </button>
      </div>
    </div>

    <!-- Stats Overview Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
      
      <!-- Total Attendance today -->
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between">
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Total Entries Today</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-2.5 leading-none">{{ stats.total_today }}</h3>
        </div>
        <div class="p-3 bg-blue-50 border border-blue-100/50 text-blue-600 rounded-xl">
          <Users class="w-5 h-5" />
        </div>
      </div>

      <!-- Currently inside the library -->
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between">
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Currently Present</p>
          <h3 class="text-2xl font-bold text-green-600 mt-2.5 leading-none">{{ stats.currently_present }}</h3>
        </div>
        <div class="p-3 bg-green-50 border border-green-100/50 text-green-600 rounded-xl">
          <UserCheck class="w-5 h-5" />
        </div>
      </div>

      <!-- Average duration inside -->
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between">
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Avg. Session Duration</p>
          <h3 class="text-2xl font-bold text-emerald-600 mt-2.5 leading-none">{{ stats.avg_minutes }} min</h3>
        </div>
        <div class="p-3 bg-emerald-50 border border-emerald-100/50 text-emerald-600 rounded-xl">
          <Clock class="w-5 h-5" />
        </div>
      </div>
    </div>

    <!-- Search Filters Panel -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100/80 p-4">
      <div class="flex flex-col md:flex-row md:items-center gap-3">
        <!-- Search field input -->
        <div class="flex-1 relative">
          <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by student name or CRN card code..."
            class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-slate-300 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all outline-none"
            @input="debounceSearch"
          />
        </div>
        <!-- Status filter select -->
        <div class="flex items-center gap-3">
          <select
            v-model="statusFilter"
            class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 cursor-pointer transition-all outline-none"
            @change="() => fetchAttendance(1)"
          >
            <option value="all">All Session States</option>
            <option value="present">Currently Present</option>
            <option value="left">Already Left</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Records Table Container -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden">
      
      <div v-if="loading" class="p-16 flex flex-col items-center justify-center">
        <RefreshCw class="w-7 h-7 text-emerald-600 animate-spin mb-3" />
        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Loading attendance sheet...</p>
      </div>

      <div v-else-if="attendance.length === 0" class="p-16 text-center flex flex-col items-center justify-center">
        <Users class="w-8 h-8 text-slate-300 mb-4" />
        <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">No Records Found</h3>
        <p class="text-xs text-slate-400 font-semibold max-w-xs leading-relaxed">There are no attendance check logs matching this date or search filters.</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-100">
          <thead class="bg-gray-50/50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Student</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Check In</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Check Out</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Duration</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Mark Type</th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr v-for="record in attendance" :key="record.id" class="hover:bg-slate-50/50 transition-colors">
              
              <!-- Student Profile Column -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3.5 text-left">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                    <img v-if="record.user?.profile_picture" :src="getProfilePictureUrl(record.user.profile_picture)" class="w-full h-full object-cover rounded-lg" />
                    <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-700 rounded-lg text-emerald-700 font-bold text-sm">
                      {{ record.user?.name?.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-medium text-slate-700">{{ record.user?.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">CRN: {{ record.user?.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-green-600">{{ formatTime(record.check_in_time) }}</td>
              
              <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-red-600">
                <span v-if="record.check_out_time">{{ formatTime(record.check_out_time) }}</span>
                <span v-else class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[9px] font-semibold uppercase tracking-wider">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Present</span>
                </span>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-550">
                {{ record.total_minutes ? record.total_minutes + ' min' : '-' }}
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <span :class="[
                  'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border',
                  record.marked_manually ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-blue-50 border-blue-200 text-blue-700'
                ]">
                  {{ record.marked_manually ? 'Manual' : 'System' }}
                </span>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <button
                  v-if="!record.check_out_time"
                  @click="handleManualCheckOut(record.user.crn)"
                  class="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250/30 rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Check Out
                </button>
                <span v-else class="text-xs text-slate-400 font-semibold">-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Block -->
      <div v-if="pagination.total > 0" class="bg-slate-50/50 px-6 py-4 border-t border-slate-100">
        <div class="flex items-center justify-between">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Showing <span class="text-slate-700 font-bold">{{ pagination.from }}</span> to <span class="text-slate-700 font-bold">{{ pagination.to }}</span> of <span class="text-slate-700 font-bold">{{ pagination.total }}</span> entries
          </div>
          <div class="flex items-center space-x-1.5">
            <button
              @click="changePage(pagination.current_page - 1)"
              :disabled="pagination.current_page === 1"
              class="px-3.5 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-550 font-bold hover:bg-slate-50 transition-colors disabled:opacity-50 text-xs cursor-pointer shadow-sm"
            >
              Previous
            </button>
            <button
              v-for="page in pagination.last_page"
              :key="page"
              @click="changePage(page)"
              :class="[
                'w-8.5 h-8.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm',
                pagination.current_page === page
                  ? 'bg-emerald-700 text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              ]"
            >
              {{ page }}
            </button>
            <button
              @click="changePage(pagination.current_page + 1)"
              :disabled="pagination.current_page === pagination.last_page"
              class="px-3.5 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-550 font-bold hover:bg-slate-50 transition-colors disabled:opacity-50 text-xs cursor-pointer shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mark Attendance Modal Dialog -->
    <div v-if="showMarkModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" @click="showMarkModal = false"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-slate-100 text-left animate-in duration-200">
        
        <!-- Header -->
        <div class="p-6 border-b border-slate-55 flex justify-between items-center bg-slate-50/20">
          <div>
            <h3 class="text-base font-bold text-slate-700 tracking-tight leading-none mb-1.5">Mark Attendance</h3>
            <p class="text-[10px] text-slate-400 font-semibold">Enter card details to log inside-library scans.</p>
          </div>
          <button @click="showMarkModal = false" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-150 transition-colors cursor-pointer">
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Body Form -->
        <div class="p-6 space-y-5 text-left">
          <div>
            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Student CRN *</label>
            <input
              v-model="markForm.crn"
              type="number"
              placeholder="e.g., 20261204"
              class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
              @keyup.enter="handleMarkAttendance"
            />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <button
              @click="markForm.type = 'check_in'; handleMarkAttendance()"
              :disabled="marking"
              class="flex flex-col items-center justify-center p-4 border rounded-xl hover:border-emerald-600 hover:bg-emerald-50/50 group cursor-pointer transition-all"
              :class="markForm.type === 'check_in' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-150'"
            >
              <UserCheck class="w-6 h-6 mb-2 text-slate-400 group-hover:text-emerald-600" />
              <span class="text-xs font-bold text-slate-600 group-hover:text-emerald-600">Check In</span>
            </button>
            <button
              @click="markForm.type = 'check_out'; handleMarkAttendance()"
              :disabled="marking"
              class="flex flex-col items-center justify-center p-4 border rounded-xl hover:border-blue-600 hover:bg-blue-50/50 group cursor-pointer transition-all"
              :class="markForm.type === 'check_out' ? 'border-blue-600 bg-blue-50' : 'border-slate-150'"
            >
              <LogOut class="w-6 h-6 mb-2 text-slate-400 group-hover:text-blue-600" />
              <span class="text-xs font-bold text-slate-600 group-hover:text-blue-600">Check Out</span>
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
const attendance = ref<any[]>([]);
const stats = ref({
  total_today: 0,
  currently_present: 0,
  avg_minutes: 0
});

const selectedDate = ref(format(new Date(), 'yyyy-MM-dd'));
const searchQuery = ref('');
const statusFilter = ref('all');
const showMarkModal = ref(false);

const markForm = ref<{
  crn: string;
  type: 'check_in' | 'check_out';
}>({
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

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

onMounted(() => {
  fetchAttendance();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.animate-fade-in {
  animation: fade-in 0.22s ease-out;
}

.animate-in {
  animation: animate-in 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
