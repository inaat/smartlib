<template>
  <div class="space-y-8 pb-12">
    <!-- Header & Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="md:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between overflow-hidden relative">
        <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10">
          <CalendarCheck class="w-10 h-10 mb-4 text-blue-100" />
          <h1 class="text-3xl font-black mb-1">Attendance</h1>
          <p class="text-blue-100/60 text-xs font-bold uppercase tracking-widest">Your Learning Journey</p>
        </div>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6">
        <div class="p-4 bg-green-50 rounded-2xl text-green-600">
          <Calendar class="w-8 h-8" />
        </div>
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">This Month</p>
          <p class="text-3xl font-black text-gray-900">{{ stats.attendance_this_month || 0 }} <span class="text-sm font-medium text-gray-400">Days</span></p>
        </div>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6">
        <div class="p-4 bg-orange-50 rounded-2xl text-orange-600">
          <Zap class="w-8 h-8" />
        </div>
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Streak</p>
          <p class="text-3xl font-black text-gray-900">{{ stats.current_streak || 0 }} <span class="text-sm font-medium text-gray-400">Days</span></p>
        </div>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6">
        <div class="p-4 bg-purple-50 rounded-2xl text-purple-600">
          <Clock class="w-8 h-8" />
        </div>
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Hours</p>
          <p class="text-3xl font-black text-gray-900">{{ stats.total_hours || 0 }} <span class="text-sm font-medium text-gray-400">Hours</span></p>
        </div>
      </div>
    </div>

    <!-- Calendar + Table Layout -->
    <div class="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 items-start">

      <!-- Calendar Card -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
        <!-- Month Navigation -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <CalendarCheck class="w-5 h-5 text-blue-500" />
            <span class="text-lg font-black text-gray-900">{{ calendarTitle }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <button @click="prevMonth" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
              <ChevronLeft class="w-4 h-4" />
            </button>
            <button @click="nextMonth" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Weekday headers -->
        <div class="grid grid-cols-7 text-center">
          <div v-for="d in ['S','M','T','W','T','F','S']" :key="d + Math.random()"
            class="text-[10px] font-black text-gray-400 uppercase tracking-widest py-1">{{ d }}</div>
        </div>

        <!-- Calendar Grid -->
        <div v-if="calendarLoading" class="flex justify-center py-8">
          <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div v-else class="grid grid-cols-7 gap-y-1.5 text-center">
          <!-- Empty offset for first day of month -->
          <div v-for="n in calendarOffset" :key="'pad' + n"></div>

          <!-- Day cells -->
          <div
            v-for="(info, dateStr) in calendarData.days"
            :key="dateStr"
            :title="info.attended ? `You attended · ${formatDuration(info.total_minutes)}` : 'No attendance'"
            :class="[
              'mx-auto flex items-center justify-center rounded-full w-9 h-9 text-sm font-bold transition-all cursor-default relative select-none',
              isToday(dateStr)
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                : info.attended
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'text-gray-300'
            ]"
          >
            {{ parseInt(dateStr.split('-')[2]) }}
            <span
              v-if="info.attended && !isToday(dateStr)"
              class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"
            ></span>
          </div>
        </div>

        <!-- Footer Stats -->
        <div class="border-t border-gray-50 pt-5 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">Days attended</span>
            <span class="font-black text-gray-900">{{ calendarData.total_attended }} days</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">Attendance rate</span>
            <span class="font-black text-emerald-600">
              {{ calendarData.total_days > 0 ? Math.round((calendarData.total_attended / calendarData.total_days) * 100) : 0 }}%
            </span>
          </div>
          <!-- Progress bar -->
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700"
              :style="{ width: calendarData.total_days > 0 ? `${Math.round((calendarData.total_attended / calendarData.total_days) * 100)}%` : '0%' }"
            ></div>
          </div>
          <!-- Legend -->
          <div class="flex items-center space-x-4 pt-1">
            <div class="flex items-center space-x-1.5 text-xs text-gray-400">
              <div class="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300"></div>
              <span>Attended</span>
            </div>
            <div class="flex items-center space-x-1.5 text-xs text-gray-400">
              <div class="w-3 h-3 rounded-full bg-blue-600"></div>
              <span>Today</span>
            </div>
            <div class="flex items-center space-x-1.5 text-xs text-gray-400">
              <div class="w-3 h-3 rounded-full bg-gray-100 border border-gray-200"></div>
              <span>Absent</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Attendance History Table -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900">Attendance Logs</h2>
            <p class="text-sm text-gray-500">A detailed record of your library visits</p>
          </div>
          <button @click="fetchAttendance" class="p-2 hover:bg-gray-50 rounded-xl transition-all text-gray-500 hover:text-blue-600 border border-gray-100">
            <RefreshCw :class="['w-5 h-5', loading ? 'animate-spin' : '']" />
          </button>
        </div>

        <div v-if="loading" class="p-20 flex flex-col items-center justify-center space-y-4">
          <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p class="text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs">Loading logs...</p>
        </div>

        <div v-else-if="attendance.length === 0" class="p-20 text-center">
          <div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
            <FileText class="w-12 h-12" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No Attendance Yet</h3>
          <p class="text-gray-500 max-w-sm mx-auto">Start by booking a seat and checking in at the library. Your attendance will be automatically marked here.</p>
          <router-link to="/student/libraries" class="mt-8 inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-wider text-xs">
            <Armchair class="w-4 h-4" />
            <span>Book Your First Seat</span>
          </router-link>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-gray-50/50 text-[10px] uppercase font-black tracking-widest text-gray-400">
                <th class="px-8 py-4">Date</th>
                <th class="px-8 py-4">Library</th>
                <th class="px-8 py-4">Check In</th>
                <th class="px-8 py-4">Check Out</th>
                <th class="px-8 py-4 text-center">Duration</th>
                <th class="px-8 py-4 text-right">Method</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="log in attendance" :key="log.id" class="hover:bg-blue-50/30 transition-colors group">
                <td class="px-8 py-5 whitespace-nowrap">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                      {{ getDay(log.date) }}
                    </div>
                    <div>
                      <div class="text-sm font-bold text-gray-900">{{ formatDate(log.date) }}</div>
                      <div class="text-[10px] text-gray-400 uppercase font-bold">{{ getDayName(log.date) }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-8 py-5">
                  <div class="text-sm font-bold text-gray-700">{{ log.library?.name || 'N/A' }}</div>
                </td>
                <td class="px-8 py-5">
                  <div class="flex items-center text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit">
                    <Clock class="w-3 h-3 mr-2" />
                    {{ formatTime(log.check_in_time) }}
                  </div>
                </td>
                <td class="px-8 py-5">
                  <div v-if="log.check_out_time" class="flex items-center text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg w-fit">
                    <Clock class="w-3 h-3 mr-2" />
                    {{ formatTime(log.check_out_time) }}
                  </div>
                  <div v-else class="flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600 animate-pulse">
                    Present Now
                  </div>
                </td>
                <td class="px-8 py-5 text-center">
                  <div class="text-sm font-black text-gray-900">{{ log.total_minutes ? formatDuration(log.total_minutes) : '--' }}</div>
                </td>
                <td class="px-8 py-5 text-right">
                  <span :class="[
                    'text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-md border',
                    log.marked_manually ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                  ]">
                    {{ log.marked_manually ? 'Manual' : 'Auto' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="px-8 py-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
            <div>Showing {{ attendance.length }} records</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import {
  CalendarCheck, Clock, Zap, Calendar,
  RefreshCw, FileText, Armchair,
  ChevronLeft, ChevronRight
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { format, parseISO, isToday as dateFnsIsToday } from 'date-fns';

const loading        = ref(true);
const calendarLoading = ref(false);
const attendance     = ref<any[]>([]);
const stats          = ref<any>({});

// ── Calendar ────────────────────────────────────────────────────────────────
const calViewYear  = ref(new Date().getFullYear());
const calViewMonth = ref(new Date().getMonth() + 1);
const calendarData = ref<{
  year: number; month: number;
  days: Record<string, { attended: boolean; total_minutes: number }>;
  total_attended: number; total_days: number;
}>({ year: 0, month: 0, days: {}, total_attended: 0, total_days: 0 });

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const calendarTitle = computed(() => `${MONTH_NAMES[calViewMonth.value - 1]} ${calViewYear.value}`);
const calendarOffset = computed(() => new Date(calViewYear.value, calViewMonth.value - 1, 1).getDay());

const prevMonth = () => {
  if (calViewMonth.value === 1) { calViewMonth.value = 12; calViewYear.value--; }
  else calViewMonth.value--;
};
const nextMonth = () => {
  if (calViewMonth.value === 12) { calViewMonth.value = 1; calViewYear.value++; }
  else calViewMonth.value++;
};

const fetchCalendar = async () => {
  calendarLoading.value = true;
  try {
    calendarData.value = await studentAPI.getAttendanceCalendar(calViewYear.value, calViewMonth.value);
  } catch (e) { console.error(e); }
  finally { calendarLoading.value = false; }
};

watch([calViewYear, calViewMonth], fetchCalendar);

const isToday = (dateStr: string) => {
  try { return dateFnsIsToday(parseISO(dateStr)); } catch { return false; }
};

// ── Attendance List ──────────────────────────────────────────────────────────
const fetchAttendance = async () => {
  loading.value = true;
  try {
    const response = await studentAPI.getAttendance();
    attendance.value = response.data;
    const statsResponse = await studentAPI.getAttendanceStats();
    stats.value = statsResponse;
  } catch (error) {
    console.error('Failed to fetch attendance:', error);
  } finally {
    loading.value = false;
  }
};

// ── Formatters ────────────────────────────────────────────────────────────────
const formatDate    = (date: string) => format(parseISO(date), 'MMM dd, yyyy');
const getDay        = (date: string) => format(parseISO(date), 'dd');
const getDayName    = (date: string) => format(parseISO(date), 'EEEE');
const formatTime    = (time: string) => {
  if (!time) return '';
  if (time.includes('T')) return format(parseISO(time), 'hh:mm a');
  return format(parseISO(`1970-01-01T${time}`), 'hh:mm a');
};
const formatDuration = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
};

onMounted(() => {
  fetchAttendance();
  fetchCalendar();
});
</script>
