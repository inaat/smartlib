<template>
  <div class="space-y-6">
    <!-- Inline Mini Action Bar for Refresh -->
    <div class="flex justify-end font-outfit">
      <button 
        @click="fetchAnalytics" 
        :disabled="loading"
        class="flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm active:scale-98 transition-all disabled:opacity-50" 
        title="Refresh Data"
      >
        <RefreshCw :class="['w-3.5 h-3.5 text-slate-500', loading ? 'animate-spin' : '']" />
        <span>{{ loading ? 'Refreshing...' : 'Refresh Data' }}</span>
      </button>
    </div>

    <div v-if="loading && !analyticsData" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse">Loading analytics...</p>
    </div>

    <template v-else>
      <!-- Stats Grid (Responsive & Mobile-Optimized) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-outfit">
        <div 
          v-for="stat in statsCards" 
          :key="stat.label" 
          class="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift group text-left flex flex-col justify-between"
        >
          <div class="flex items-center justify-between gap-1.5 mb-1.5">
            <!-- Label -->
            <span class="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-snug">
              {{ stat.label }}
            </span>
            <!-- Icon -->
            <div :class="['p-1.5 sm:p-2.5 rounded-xl border flex-shrink-0', stat.bgClass]">
              <component :is="stat.icon" :class="['w-4 h-4 sm:w-5 sm:h-5', stat.iconClass]" />
            </div>
          </div>

          <!-- Value -->
          <div class="mt-auto">
            <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 leading-tight tracking-tight">
              {{ stat.value }}
            </h3>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Study Trends Chart -->
        <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden font-outfit text-left">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-2.5">
              <div class="p-2 bg-blue-50/60 border border-blue-100/50 rounded-xl text-blue-600">
                <TrendingUp class="w-4.5 h-4.5" />
              </div>
              <h3 class="font-bold text-slate-800 text-sm">Study Frequency (Last 30 Days)</h3>
            </div>
          </div>
          <div class="h-64 flex items-end justify-between space-x-1.5 px-2">
            <div
              v-for="(day, index) in monthlyTrends"
              :key="index"
              class="flex-1 flex flex-col items-center group relative h-full justify-end"
            >
              <div 
                class="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-300 hover:opacity-85 hover:scale-x-105 cursor-pointer"
                :style="{ height: (day.count / maxTrendCount * 100) + '%' }"
              >
                <!-- Tooltip -->
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-800 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg font-medium border border-slate-700">
                  {{ formatDateShort(day.date) }}: {{ day.count }} Bookings
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-5 px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            <span>{{ formatDateShort(monthlyTrends[0]?.date) }}</span>
            <span>{{ formatDateShort(monthlyTrends[monthlyTrends.length - 1]?.date) }}</span>
          </div>
        </div>

        <!-- Favorite Spots -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative font-outfit text-left">
          <div class="px-6 py-5 border-b border-slate-100 flex items-center space-x-2.5 bg-slate-50/30">
            <div class="p-2 bg-purple-50/60 border border-purple-100/50 rounded-xl text-purple-600">
              <MapPin class="w-4.5 h-4.5" />
            </div>
            <h3 class="font-bold text-slate-800 text-sm">Favorite Spots</h3>
          </div>
          <div class="p-5">
            <div v-if="topLibraries.length === 0" class="py-12 text-center">
              <div class="mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 border border-slate-200">
                <LibraryIcon class="w-5 h-5 text-slate-400" />
              </div>
              <p class="text-xs text-slate-400 italic">No library visits yet.</p>
            </div>
            <div v-else class="space-y-3">
              <router-link 
                v-for="lib in topLibraries" 
                :key="lib.id" 
                :to="`/student/libraries/${lib.id}`"
                class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-purple-200 hover:bg-white transition-all duration-300 flex items-center justify-between group cursor-pointer block"
              >
                <div class="flex items-center space-x-3 min-w-0">
                  <div class="w-9 h-9 rounded-xl bg-purple-50/80 border border-purple-100/50 text-purple-600 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-indigo-500 group-hover:text-white transition-all duration-350 flex-shrink-0">
                    <Building2 class="w-4.5 h-4.5" />
                  </div>
                  <div class="min-w-0 text-left">
                    <span class="text-xs font-semibold text-slate-800 block truncate leading-snug">{{ lib.name }}</span>
                    <span class="text-[9px] uppercase font-semibold text-slate-400 tracking-wider leading-none mt-1 block">{{ lib.bookings_count }} Visits</span>
                  </div>
                </div>
                <ChevronRight class="w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity Container -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative font-outfit text-left">
        <div class="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/30">
          <div class="flex items-center space-x-2.5">
            <div class="p-2 bg-emerald-50/60 border border-emerald-100/50 rounded-xl text-emerald-600">
              <Activity class="w-4.5 h-4.5" />
            </div>
            <h3 class="font-bold text-slate-800 text-sm">Recent Activity</h3>
          </div>
          <router-link to="/student/libraries" class="text-[10px] font-semibold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors w-fit">
            Book New Seat
          </router-link>
        </div>

        <!-- Mobile Distinct Cards View (block md:hidden) -->
        <div class="block md:hidden p-3.5 space-y-3 bg-slate-50/60">
          <div v-if="recentBookings.length === 0" class="p-6 text-center text-slate-400 italic text-xs bg-white rounded-xl border border-slate-200/70">
            No recent bookings found.
          </div>
          <div 
            v-for="booking in recentBookings" 
            :key="'mobile-' + booking.id" 
            class="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-2.5"
          >
            <!-- Top Header: Icon + Library Name + Status Pill -->
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center space-x-2.5 min-w-0">
                <div class="w-8 h-8 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Building2 class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold text-slate-800 truncate">{{ booking.library?.name || 'Library' }}</span>
              </div>
              <span :class="['px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border flex-shrink-0 shadow-2xs', getStatusClass(booking.status)]">
                {{ booking.status.replace('_', ' ') }}
              </span>
            </div>
            
            <!-- Bottom Details: Seat Badge + Date -->
            <div class="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
              <div class="flex items-center space-x-1.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Seat:</span>
                <span class="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md text-[10px] border border-slate-200/60">
                  #{{ booking.seat?.seat_number || 'N/A' }}
                </span>
              </div>
              <span class="font-semibold text-slate-400 text-[10px] uppercase tracking-wider">{{ formatDate(booking.created_at) }}</span>
            </div>
          </div>
        </div>

        <!-- Desktop Table View (hidden md:block) -->
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
                <th class="px-6 py-3.5">Library</th>
                <th class="px-6 py-3.5">Seat</th>
                <th class="px-6 py-3.5">Status</th>
                <th class="px-6 py-3.5 text-right">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-if="recentBookings.length === 0">
                <td colspan="4" class="px-6 py-10 text-center text-slate-400 italic text-xs">No recent bookings found.</td>
              </tr>
              <tr v-for="booking in recentBookings" :key="booking.id" class="hover:bg-slate-50/30 transition-colors group">
                <td class="px-6 py-4.5">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300">
                      <Building2 class="w-4.5 h-4.5" />
                    </div>
                    <span class="text-xs font-bold text-slate-800">{{ booking.library?.name }}</span>
                  </div>
                </td>
                <td class="px-6 py-4.5 text-xs font-bold text-slate-600">Seat #{{ booking.seat?.seat_number }}</td>
                <td class="px-6 py-4.5">
                  <span :class="['px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider border', getStatusClass(booking.status)]">
                    {{ booking.status.replace('_', ' ') }}
                  </span>
                </td>
                <td class="px-6 py-4.5 text-xs font-bold text-slate-400 text-right">{{ formatDate(booking.created_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  Library as LibraryIcon, 
  Activity,
  Calendar,
  RefreshCw,
  TrendingUp,
  MapPin,
  Building2,
  ChevronRight,
  Clock,
  BookMarked,
  Flame
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { format } from 'date-fns';

const loading = ref(true);
const analyticsData = ref<any>(null);
const monthlyTrends = ref<any[]>([]);
const topLibraries = ref<any[]>([]);
const recentBookings = ref<any[]>([]);

const statsCards = computed(() => [
  {
    label: 'Total Sessions',
    value: analyticsData.value?.total_bookings || 0,
    icon: Calendar,
    bgClass: 'bg-blue-50/50 border-blue-100/50',
    iconClass: 'text-blue-600'
  },
  {
    label: 'Study Hours',
    value: analyticsData.value?.total_study_hours || 0,
    icon: Clock,
    bgClass: 'bg-purple-50/50 border-purple-100/50',
    iconClass: 'text-purple-600'
  },
  {
    label: 'Active Books',
    value: analyticsData.value?.active_reservations || 0,
    icon: BookMarked,
    bgClass: 'bg-amber-50/50 border-amber-100/50',
    iconClass: 'text-amber-600'
  },
  {
    label: 'Study Streak',
    value: (analyticsData.value?.study_streak || 0) + ' Days',
    icon: Flame,
    bgClass: 'bg-orange-50/50 border-orange-100/50',
    iconClass: 'text-orange-600'
  }
]);

const maxTrendCount = computed(() => {
  if (monthlyTrends.value.length === 0) return 1;
  return Math.max(...monthlyTrends.value.map(d => d.count), 1);
});

const fetchAnalytics = async () => {
  try {
    loading.value = true;
    const data = await studentAPI.getAnalytics();
    analyticsData.value = data.stats;
    monthlyTrends.value = data.monthlyTrends || [];
    topLibraries.value = data.topLibraries || [];
    recentBookings.value = data.recentBookings || [];
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
  } finally {
    loading.value = false;
  }
};

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-100/50';
    case 'active':
    case 'checked_in': return 'bg-blue-50 text-blue-700 border-blue-100/50';
    case 'pending':
    case 'booked': return 'bg-amber-50 text-amber-700 border-amber-100/50';
    case 'cancelled': return 'bg-red-50 text-red-700 border-red-100/50';
    default: return 'bg-slate-50 text-slate-700 border-slate-100/50';
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  return format(new Date(dateStr), 'MMM d, yyyy');
};

const formatDateShort = (dateStr: string) => {
  if (!dateStr) return '';
  return format(new Date(dateStr), 'MMM d');
};

onMounted(() => {
  fetchAnalytics();
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
