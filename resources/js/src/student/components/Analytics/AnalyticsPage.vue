<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">My Analytics</h1>
        <p class="text-gray-500 text-sm">Track your study progress and library activity.</p>
      </div>
      <div class="flex items-center space-x-3">
        <button 
          @click="fetchAnalytics" 
          :disabled="loading"
          class="p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl transition-all disabled:opacity-50" 
          title="Refresh Data"
        >
          <RefreshCw :class="['w-5 h-5', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <div v-if="loading && !analyticsData" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <template v-else>
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="stat in statsCards" :key="stat.label" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
          <div class="absolute top-0 right-0 p-4 -mr-4 -mt-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <component :is="stat.icon" class="w-24 h-24" />
          </div>
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div :class="['p-3 rounded-2xl', stat.bgClass]">
              <component :is="stat.icon" :class="['w-6 h-6', stat.iconClass]" />
            </div>
          </div>
          <div class="relative z-10">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ stat.label }}</p>
            <h3 class="text-3xl font-black text-gray-900 mt-1">{{ stat.value }}</h3>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Study Trends Chart -->
        <div class="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 relative overflow-hidden">
           <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-3">
               <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <TrendingUp class="w-5 h-5" />
               </div>
               <h3 class="font-bold text-gray-900">Study Frequency (Last 30 Days)</h3>
            </div>
          </div>
          <div class="h-64 flex items-end justify-between space-x-2">
            <div
              v-for="(day, index) in monthlyTrends"
              :key="index"
              class="flex-1 flex flex-col items-center group relative h-full justify-end"
            >
              <div 
                class="w-full bg-blue-500/80 rounded-t-lg transition-all group-hover:bg-blue-600 hover:scale-x-110"
                :style="{ height: (day.count / maxTrendCount * 100) + '%' }"
              >
                <!-- Tooltip -->
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-xl">
                  {{ formatDateShort(day.date) }}: {{ day.count }} Bookings
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-6 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>{{ formatDateShort(monthlyTrends[0]?.date) }}</span>
            <span>{{ formatDateShort(monthlyTrends[monthlyTrends.length - 1]?.date) }}</span>
          </div>
        </div>

        <!-- Top Libraries -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          <div class="px-8 py-6 border-b border-gray-50 flex items-center space-x-3">
             <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
                <MapPin class="w-5 h-5" />
             </div>
             <h3 class="font-bold text-gray-900">Favorite Spots</h3>
          </div>
          <div class="p-4">
            <div v-if="topLibraries.length === 0" class="p-8 text-center">
              <div class="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <LibraryIcon class="w-8 h-8 text-gray-300" />
              </div>
              <p class="text-sm text-gray-400 italic">No library visits yet.</p>
            </div>
            <div v-else class="space-y-3">
              <div v-for="lib in topLibraries" :key="lib.id" class="p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-purple-200 hover:bg-white transition-all flex items-center justify-between group">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Building2 class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-sm font-bold text-gray-900 block">{{ lib.name }}</span>
                    <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{{ lib.bookings_count }} Visits</span>
                  </div>
                </div>
                <ChevronRight class="w-4 h-4 text-gray-300 group-hover:text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity Table -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        <div class="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
          <div class="flex items-center space-x-3">
              <div class="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Activity class="w-5 h-5" />
              </div>
              <h3 class="font-bold text-gray-900">Recent Activity</h3>
          </div>
          <router-link to="/student/libraries" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest">Book New Seat</router-link>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <th class="px-8 py-4">Library</th>
                <th class="px-8 py-4">Seat</th>
                <th class="px-8 py-4">Status</th>
                <th class="px-8 py-4 text-right">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-if="recentBookings.length === 0">
                <td colspan="4" class="px-8 py-12 text-center text-gray-400 italic text-sm">No recent bookings found.</td>
              </tr>
              <tr v-for="booking in recentBookings" :key="booking.id" class="hover:bg-gray-50/50 transition-colors group">
                <td class="px-8 py-5">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-all">
                      <Building2 class="w-4 h-4" />
                    </div>
                    <span class="text-sm font-bold text-gray-900">{{ booking.library?.name }}</span>
                  </div>
                </td>
                <td class="px-8 py-5 text-sm font-medium text-gray-600">Seat #{{ booking.seat?.seat_number }}</td>
                <td class="px-8 py-5">
                  <span :class="['px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest', getStatusClass(booking.status)]">
                    {{ booking.status.replace('_', ' ') }}
                  </span>
                </td>
                <td class="px-8 py-5 text-sm font-bold text-gray-400 text-right">{{ formatDate(booking.created_at) }}</td>
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
  Users, 
  Library as LibraryIcon, 
  BookOpen, 
  CreditCard, 
  Activity,
  Calendar,
  RefreshCw,
  TrendingUp,
  MapPin,
  Building2,
  ChevronRight,
  Clock,
  Trophy,
  BookMarked
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
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-600'
  },
  {
    label: 'Study Hours',
    value: analyticsData.value?.total_study_hours || 0,
    icon: Clock,
    bgClass: 'bg-purple-50',
    iconClass: 'text-purple-600'
  },
  {
    label: 'Active Books',
    value: analyticsData.value?.active_reservations || 0,
    icon: BookMarked,
    bgClass: 'bg-amber-50',
    iconClass: 'text-amber-600'
  },
  {
    label: 'Loyalty Points',
    value: analyticsData.value?.loyalty_points || 0,
    icon: Trophy,
    bgClass: 'bg-emerald-50',
    iconClass: 'text-emerald-600'
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
    case 'completed': return 'bg-emerald-100 text-emerald-700';
    case 'active':
    case 'checked_in': return 'bg-blue-100 text-blue-700';
    case 'pending':
    case 'booked': return 'bg-amber-100 text-amber-700';
    case 'cancelled': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
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
