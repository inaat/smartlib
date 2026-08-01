<template>
  <div class="space-y-6">
    <!-- Tab Switcher and Controls Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit">
        <button
          @click="activeView = 'analytics'"
          :class="[
            'px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2',
            activeView === 'analytics'
              ? 'bg-white text-purple-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <BarChart3 class="w-4 h-4" />
          <span>Analytics</span>
        </button>
        <button
          @click="activeView = 'reports'"
          :class="[
            'px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2',
            activeView === 'reports'
              ? 'bg-white text-purple-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <FileBarChart class="w-4 h-4" />
          <span>Reports</span>
        </button>
      </div>

      <!-- Time Range Controls for Analytics (Aligned on Same Line) -->
      <div v-if="activeView === 'analytics'" class="flex items-center space-x-3 sm:ml-auto">
        <select 
          v-model="selectedTrendRange" 
          class="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 bg-white text-xs font-semibold text-slate-600 cursor-pointer shadow-sm appearance-none pr-8 relative"
        >
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
        
        <button 
          @click="fetchAnalytics" 
          :disabled="loading"
          class="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all cursor-pointer shadow-sm flex items-center justify-center disabled:opacity-50"
          title="Refresh Data"
        >
          <RefreshCw :class="['w-4 h-4 text-slate-500', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <!-- Analytics View -->
    <div v-if="activeView === 'analytics'" class="space-y-6">

      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="stat in statsCards" 
          :key="stat.label" 
          class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between"
        >
          <div class="text-left">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ stat.label }}</p>
            <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ stat.value }}</h3>
          </div>
          <div :class="['p-3.5 rounded-xl bg-slate-50', stat.iconClass]">
            <component :is="stat.icon" class="w-5 h-5" />
          </div>
        </div>
      </div>

      <!-- Charts and Top Libraries Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Booking Trends Card -->
        <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-6 text-left">
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Booking Trends</h3>
            <select
              v-model="selectedTrendRange"
              class="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          
          <div class="h-64 flex items-end justify-between space-x-1.5 px-2">
            <div
              v-for="(day, index) in monthlyBookings"
              :key="index"
              class="flex-1 flex flex-col items-center group relative h-full justify-end"
            >
              <!-- Bar fill with gradient -->
              <div 
                class="w-full bg-gradient-to-t from-purple-600 to-fuchsia-600 rounded-t-lg transition-all duration-300 hover:from-purple-700 hover:to-fuchsia-700 cursor-pointer shadow-sm"
                :style="{ height: (day.count / maxBookingCount * 100) + '%' }"
              >
                <!-- Hover Tooltip overlay -->
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-25 shadow-md font-bold">
                  {{ day.date }}: {{ day.count }} bookings
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2">
            <span>{{ monthlyBookings[0]?.date }}</span>
            <span>{{ monthlyBookings[Math.floor(monthlyBookings.length / 2)]?.date }}</span>
            <span>{{ monthlyBookings[monthlyBookings.length - 1]?.date }}</span>
          </div>
        </div>

        <!-- Top Libraries Side Panel -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between">
          <div class="px-6 py-5 border-b border-slate-50 text-left">
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Top Libraries</h3>
          </div>
          <div class="flex-1 flex flex-col justify-center min-h-[200px]">
            <div v-if="topLibraries.length === 0" class="p-8 text-center text-slate-400 font-medium">
              <Building2 class="w-8 h-8 text-slate-350 mx-auto mb-2" />
              <span>No data available</span>
            </div>
            <div v-else class="divide-y divide-slate-50 flex-1">
              <div 
                v-for="library in topLibraries" 
                :key="library.id" 
                class="px-6 py-4.5 flex items-center justify-between hover:bg-slate-50/30 transition-colors"
              >
                <div class="flex items-center space-x-3.5">
                  <div class="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Building2 class="w-4 h-4 text-purple-600" />
                  </div>
                  <span class="text-xs font-bold text-slate-750">{{ library.name }}</span>
                </div>
                <span class="text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-100/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {{ library.seat_bookings_count }} Bookings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gender & Academic Level Booking Analytics Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        
        <!-- Gender-wise Booking Donut Chart -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2">
                <Users class="w-4 h-4 text-purple-600" />
                <span>Gender-Wise Bookings</span>
              </h3>
              <span class="text-xs text-slate-400 font-semibold">Selected Range</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Distribution of seat bookings by student & section gender.</p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4">
            <!-- SVG Donut Chart -->
            <div class="relative w-36 h-36 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#f8fafc"
                  stroke-width="12"
                />
                <circle
                  v-for="(seg, idx) in genderDonutSegments"
                  :key="idx"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  :stroke="seg.color"
                  stroke-width="12"
                  :stroke-dasharray="seg.strokeDasharray"
                  :stroke-dashoffset="seg.strokeDashoffset"
                  stroke-linecap="round"
                  class="transition-all duration-500"
                />
              </svg>
              <div class="absolute flex flex-col items-center justify-center">
                <span class="text-3xl font-black text-slate-800 tracking-tight">{{ genderTotal }}</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5">Bookings</span>
              </div>
            </div>

            <!-- Legend -->
            <div class="space-y-3.5 text-left w-full sm:w-auto">
              <!-- Male -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-50"></span>
                  <span class="text-xs font-bold text-slate-600">Boys / Male</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-extrabold text-slate-800 mr-1.5">{{ genderStats.male }}</span>
                  <span class="text-[10px] text-slate-400 font-bold">({{ genderTotal ? Math.round((genderStats.male / genderTotal) * 100) : 0 }}%)</span>
                </div>
              </div>

              <!-- Female -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-50"></span>
                  <span class="text-xs font-bold text-slate-600">Girls / Female</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-extrabold text-slate-800 mr-1.5">{{ genderStats.female }}</span>
                  <span class="text-[10px] text-slate-400 font-bold">({{ genderTotal ? Math.round((genderStats.female / genderTotal) * 100) : 0 }}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Level-wise Booking Chart -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap class="w-4 h-4 text-purple-600" />
                <span>Level-Wise Bookings</span>
              </h3>
              <span class="text-xs text-slate-400 font-semibold">Selected Range</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Breakdown of bookings by academic level (PRC, CAF, Final Year).</p>
          </div>

          <div class="space-y-4 flex-1 flex flex-col justify-center">
            <div
              v-for="lvl in levelBars"
              :key="lvl.name"
              class="flex items-center space-x-3"
            >
              <span class="text-[11px] font-bold text-slate-600 w-24 uppercase tracking-wider truncate">{{ lvl.name }}</span>
              <div class="flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative">
                <div
                  :class="['h-full bg-gradient-to-r transition-all duration-500', lvl.color]"
                  :style="{ width: lvl.percentage + '%' }"
                ></div>
                <span class="absolute inset-y-0 right-3 flex items-center text-[10px] font-extrabold text-slate-700">
                  {{ lvl.count }} Bookings ({{ lvl.percentage }}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent System Activity Table -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="px-6 py-5 border-b border-slate-50 text-left">
          <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Recent System Activity</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-100">
            <thead class="bg-gray-50/50">
              <tr>
                <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">User</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Library</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Seat</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Status</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50 bg-white">
              <tr 
                v-for="booking in recentBookings" 
                :key="booking.id" 
                class="hover:bg-slate-50/50 transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center text-xs font-bold">
                      {{ booking.user?.name?.charAt(0).toUpperCase() }}
                    </div>
                    <span class="text-xs font-bold text-slate-700">{{ booking.user?.name }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600">
                  {{ booking.library?.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600">
                  Seat {{ booking.seat?.seat_number }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-left">
                  <span :class="[
                    'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border',
                    getStatusClass(booking.status)
                  ]">
                    {{ booking.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-left text-xs text-slate-500 font-medium">
                  {{ formatDate(booking.created_at) }}
                </td>
              </tr>
              <tr v-if="recentBookings.length === 0 && !loading">
                <td colspan="5" class="px-6 py-12 text-center text-slate-400 font-medium">
                  No recent activity records available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Reports View -->
    <div v-if="activeView === 'reports'">
      <ReportsPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, defineAsyncComponent } from 'vue';
import { 
  Users, 
  BookOpen, 
  Building2,
  RefreshCw,
  Calendar,
  BarChart3,
  FileBarChart,
  GraduationCap
} from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import { format } from 'date-fns';

// Lazy-load ReportsPage to avoid loading its heavy code unless the Reports tab is active
const ReportsPage = defineAsyncComponent(() => import('@/superadmin/components/Reports/ReportsPage.vue'));

const activeView = ref<'analytics' | 'reports'>('analytics');
const loading = ref(true);
const analyticsData = ref<any>(null);
const monthlyBookings = ref<any[]>([]);
const topLibraries = ref<any[]>([]);
const recentBookings = ref<any[]>([]);

const genderStats = ref({
  male: 0,
  female: 0,
  mixed: 0,
  total: 0
});

const levelStats = ref({
  PRC: 0,
  CAF: 0,
  Final: 0,
  all: 0,
  total: 0
});

const genderTotal = computed(() => (genderStats.value.male + genderStats.value.female));

const genderDonutSegments = computed(() => {
  const total = genderTotal.value;
  if (total === 0) return [];
  const segments = [];
  let accumulated = 0;

  if (genderStats.value.male > 0) {
    const len = (genderStats.value.male / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#9333ea',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += genderStats.value.male;
  }

  if (genderStats.value.female > 0) {
    const len = (genderStats.value.female / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#d946ef',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += genderStats.value.female;
  }

  return segments;
});

const levelTotal = computed(() => (levelStats.value.PRC + levelStats.value.CAF + levelStats.value.Final));

const levelBars = computed(() => {
  const total = levelTotal.value || 1;
  return [
    { name: 'PRC Level', count: levelStats.value.PRC, percentage: Math.round((levelStats.value.PRC / total) * 100), color: 'from-purple-600 to-purple-400' },
    { name: 'CAF Level', count: levelStats.value.CAF, percentage: Math.round((levelStats.value.CAF / total) * 100), color: 'from-amber-500 to-amber-400' },
    { name: 'Final Level', count: levelStats.value.Final, percentage: Math.round((levelStats.value.Final / total) * 100), color: 'from-emerald-600 to-emerald-400' }
  ];
});

const selectedTrendRange = ref('month');

const statsCards = computed(() => [
  {
    label: 'Total Users',
    value: analyticsData.value?.total_users || 0,
    icon: Users,
    iconClass: 'text-blue-600'
  },
  {
    label: 'Total Bookings',
    value: analyticsData.value?.total_bookings || 0,
    icon: BookOpen,
    iconClass: 'text-purple-600'
  },
  {
    label: 'Active Libraries',
    value: analyticsData.value?.total_libraries || 0,
    icon: Building2,
    iconClass: 'text-amber-600'
  }
]);

const maxBookingCount = computed(() => {
  if (monthlyBookings.value.length === 0) return 1;
  return Math.max(...monthlyBookings.value.map(d => d.count), 1);
});

const fetchAnalytics = async () => {
  try {
    loading.value = true;
    const data = await superadminAPI.getAnalytics({ range: selectedTrendRange.value });
    analyticsData.value = data.analytics;
    monthlyBookings.value = data.monthlyBookings || [];
    topLibraries.value = data.topLibraries || [];
    recentBookings.value = data.recentBookings || [];
    genderStats.value = data.genderStats || { male: 0, female: 0, mixed: 0, total: 0 };
    levelStats.value = data.levelStats || { PRC: 0, CAF: 0, Final: 0, all: 0, total: 0 };
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
  } finally {
    loading.value = false;
  }
};

watch(selectedTrendRange, () => {
  fetchAnalytics();
});

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-green-50 border-green-100 text-green-700';
    case 'active':
    case 'checked_in': return 'bg-blue-50 border-blue-100 text-blue-700';
    case 'pending':
    case 'booked': return 'bg-amber-55 border-amber-100 text-amber-700';
    case 'cancelled': return 'bg-red-50 border-red-100 text-red-700';
    default: return 'bg-slate-50 border-slate-200 text-slate-500';
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  return format(new Date(dateStr), 'MMM d, h:mm a');
};

onMounted(() => {
  fetchAnalytics();
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
.text-slate-750 {
  color: #334155;
}
.text-red-655 {
  color: #ef4444;
}
.text-purple-750 {
  color: #6d28d9;
}
</style>
