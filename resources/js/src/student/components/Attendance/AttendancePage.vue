<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Month Stats -->
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group">
        <div class="absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none">
          <Calendar class="w-20 h-20 stroke-1" />
        </div>
        <div class="p-3 bg-emerald-50/65 border border-emerald-100/50 rounded-xl text-emerald-600 relative z-10">
          <Calendar class="w-5.5 h-5.5" />
        </div>
        <div class="relative z-10">
          <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-2">This Month</p>
          <p class="text-3xl font-black text-slate-800 leading-none">
            {{ stats.attendance_this_month || 0 }} 
            <span class="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide">Days</span>
          </p>
        </div>
      </div>

      <!-- Streak Stats -->
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group">
        <div class="absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none">
          <Zap class="w-20 h-20 stroke-1" />
        </div>
        <div class="p-3 bg-orange-50/65 border border-orange-100/50 rounded-xl text-orange-600 relative z-10">
          <Zap class="w-5.5 h-5.5" />
        </div>
        <div class="relative z-10">
          <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-2">Current Streak</p>
          <p class="text-3xl font-black text-slate-800 leading-none">
            {{ stats.current_streak || 0 }} 
            <span class="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide">Days</span>
          </p>
        </div>
      </div>

      <!-- Hours Stats -->
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group">
        <div class="absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none">
          <Clock class="w-20 h-20 stroke-1" />
        </div>
        <div class="p-3 bg-purple-50/65 border border-purple-100/50 rounded-xl text-purple-600 relative z-10">
          <Clock class="w-5.5 h-5.5" />
        </div>
        <div class="relative z-10">
          <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-2">Total Hours</p>
          <p class="text-3xl font-black text-slate-800 leading-none">
            {{ stats.total_hours || 0 }} 
            <span class="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide">Hours</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Calendar + Table Layout -->
    <div class="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 items-start">
      <!-- Calendar Card -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6 text-left">
        <!-- Month Navigation -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <CalendarCheck class="w-5 h-5 text-blue-500" />
            <span class="text-base font-black text-slate-800">{{ calendarTitle }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <button @click="prevMonth" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/50 text-slate-400 hover:text-slate-700 transition-all active:scale-95">
              <ChevronLeft class="w-4 h-4" />
            </button>
            <button @click="nextMonth" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/50 text-slate-400 hover:text-slate-700 transition-all active:scale-95">
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Weekday headers -->
        <div class="grid grid-cols-7 text-center">
          <div v-for="d in ['S','M','T','W','T','F','S']" :key="d + Math.random()"
            class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest py-1">{{ d }}</div>
        </div>

        <!-- Calendar Grid -->
        <div v-if="calendarLoading" class="flex justify-center py-8">
          <div class="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
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
              'mx-auto flex items-center justify-center rounded-full w-9 h-9 text-xs font-extrabold transition-all relative select-none',
              isToday(dateStr)
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 scale-105'
                : info.attended
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50 hover:bg-emerald-100 hover:border-emerald-200'
                  : 'text-slate-300'
            ]"
          >
            {{ parseInt(dateStr.split('-')[2]) }}
            <span
              v-if="info.attended && !isToday(dateStr)"
              class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white"
            ></span>
          </div>
        </div>

        <!-- Footer Stats -->
        <div class="border-t border-slate-100 pt-5 space-y-4">
          <div class="flex items-center justify-between text-xs font-bold">
            <span class="text-slate-400 uppercase tracking-wide">Days attended</span>
            <span class="font-extrabold text-slate-800">{{ calendarData.total_attended }} days</span>
          </div>
          <div class="flex items-center justify-between text-xs font-bold">
            <span class="text-slate-400 uppercase tracking-wide">Attendance rate</span>
            <span class="font-extrabold text-emerald-600">
              {{ calendarData.total_days > 0 ? Math.round((calendarData.total_attended / calendarData.total_days) * 100) : 0 }}%
            </span>
          </div>
          <!-- Progress bar -->
          <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
              :style="{ width: calendarData.total_days > 0 ? `${Math.round((calendarData.total_attended / calendarData.total_days) * 100)}%` : '0%' }"
            ></div>
          </div>
          <!-- Legend -->
          <div class="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
            <div class="flex items-center space-x-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-50 border border-emerald-300"></div>
              <span>Attended</span>
            </div>
            <div class="flex items-center space-x-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <span>Today</span>
            </div>
            <div class="flex items-center space-x-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">
              <div class="w-2.5 h-2.5 rounded-full bg-white border border-slate-200"></div>
              <span>Absent</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Attendance History Table -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/30">
          <div class="text-left">
            <h2 class="text-base font-extrabold text-slate-800">Attendance Logs</h2>
            <p class="text-xs text-slate-400 mt-0.5">A detailed record of your library visits</p>
          </div>
          <button @click="fetchAttendance" class="p-2.5 hover:bg-slate-50 rounded-xl transition-all text-slate-500 hover:text-blue-600 border border-slate-200/50 shadow-sm active:scale-98">
            <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          </button>
        </div>

        <div v-if="loading" class="p-24 flex flex-col items-center justify-center space-y-3">
          <div class="w-9 h-9 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p class="text-slate-400 font-extrabold animate-pulse uppercase tracking-wider text-[10px]">Loading logs...</p>
        </div>

        <div v-else-if="attendance.length === 0" class="p-16 text-center">
          <div class="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400 shadow-inner">
            <FileText class="w-7 h-7" />
          </div>
          <h3 class="text-base font-bold text-slate-800 mb-1">No Attendance Yet</h3>
          <p class="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">Start by booking a seat and checking in. Your attendance will automatically appear here.</p>
          <router-link to="/student/libraries" class="mt-6 inline-flex items-center space-x-1.5 bg-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 rounded-xl font-extrabold shadow-md shadow-blue-500/10 active:scale-98 transition-all uppercase tracking-wider text-[10px]">
            <Armchair class="w-4 h-4" />
            <span>Book Your First Seat</span>
          </router-link>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-black tracking-wider text-slate-400">
                <th class="px-6 py-3.5">Date</th>
                <th class="px-6 py-3.5">Library</th>
                <th class="px-6 py-3.5">Check In</th>
                <th class="px-6 py-3.5">Check Out</th>
                <th class="px-6 py-3.5 text-center">Duration</th>
                <th class="px-6 py-3.5 text-right">Method</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-for="log in attendance" :key="log.id" class="hover:bg-slate-50/30 transition-colors group">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-black text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                      {{ getDay(log.date) }}
                    </div>
                    <div class="text-left">
                      <div class="text-xs font-bold text-slate-800 leading-snug">{{ formatDate(log.date) }}</div>
                      <div class="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 leading-none">{{ getDayName(log.date) }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-left">
                  <div class="text-xs font-bold text-slate-700">{{ log.library?.name || 'N/A' }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center text-[11px] font-extrabold text-emerald-600 bg-emerald-50/60 border border-emerald-100/50 px-2.5 py-1 rounded-lg w-fit">
                    <Clock class="w-3 h-3 mr-1.5" />
                    {{ formatTime(log.check_in_time) }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div v-if="log.check_out_time" class="flex items-center text-[11px] font-extrabold text-red-500 bg-red-50/60 border border-red-100/50 px-2.5 py-1 rounded-lg w-fit">
                    <Clock class="w-3 h-3 mr-1.5" />
                    {{ formatTime(log.check_out_time) }}
                  </div>
                  <div v-else class="flex items-center text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50/50 border border-blue-100/30 px-2.5 py-1 rounded-lg w-fit animate-pulse">
                    Present Now
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="text-xs font-black text-slate-700">{{ log.total_minutes ? formatDuration(log.total_minutes) : '--' }}</div>
                </td>
                <td class="px-6 py-4 text-right">
                  <span :class="[
                    'text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border',
                    log.marked_manually ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                  ]">
                    {{ log.marked_manually ? 'Manual' : 'Auto' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.active\:scale-98:active {
  transform: scale(0.98);
}
</style>
