x <template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">System Analytics</h1>
        <p class="text-gray-500 text-sm">Comprehensive insights across all libraries and users.</p>
      </div>
      <div class="flex items-center space-x-3">
        <button @click="fetchAnalytics" class="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors" title="Refresh Data">
          <RefreshCw :class="['w-5 h-5', loading ? 'animate-spin' : '']" />
        </button>

      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <div v-for="stat in statsCards" :key="stat.label" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div :class="['p-2.5 rounded-xl', stat.bgClass]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.iconClass]" />
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">{{ stat.label }}</p>
          <h3 class="text-2xl font-bold text-gray-900 mt-1">{{ stat.value }}</h3>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Booking Trends -->
      <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="font-bold text-gray-900">Booking Trends (Last 30 Days)</h3>
        </div>
        <div class="h-64 flex items-end justify-between space-x-1">
          <div
            v-for="(day, index) in monthlyBookings"
            :key="index"
            class="flex-1 flex flex-col items-center group relative"
          >
            <div 
              class="w-full bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-600"
              :style="{ height: (day.count / maxBookingCount * 100) + '%' }"
            >
              <!-- Tooltip -->
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {{ day.date }}: {{ day.count }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4 text-[10px] text-gray-400">
          <span>{{ monthlyBookings[0]?.date }}</span>
          <span>{{ monthlyBookings[Math.floor(monthlyBookings.length / 2)]?.date }}</span>
          <span>{{ monthlyBookings[monthlyBookings.length - 1]?.date }}</span>
        </div>
      </div>

      <!-- Top Libraries -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-50">
          <h3 class="font-bold text-gray-900">Top Libraries</h3>
        </div>
        <div class="p-0">
          <div v-if="topLibraries.length === 0" class="p-8 text-center text-gray-500">
            No data available
          </div>
          <div v-else class="divide-y divide-gray-50">
            <div v-for="library in topLibraries" :key="library.id" class="px-6 py-4 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <Library class="w-4 h-4 text-indigo-600" />
                </div>
                <span class="text-sm font-medium text-gray-900">{{ library.name }}</span>
              </div>
              <span class="text-sm font-bold text-indigo-600">{{ library.seat_bookings_count }} bookings</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-900">Recent System Activity</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th class="px-6 py-4 font-semibold">User</th>
              <th class="px-6 py-4 font-semibold">Library</th>
              <th class="px-6 py-4 font-semibold">Seat</th>
              <th class="px-6 py-4 font-semibold">Status</th>
              <th class="px-6 py-4 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="booking in recentBookings" :key="booking.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                    {{ booking.user?.name?.charAt(0) }}
                  </div>
                  <span class="text-sm font-medium text-gray-900">{{ booking.user?.name }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ booking.library?.name }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">Seat {{ booking.seat?.seat_number }}</td>
              <td class="px-6 py-4">
                <span :class="['px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider', getStatusClass(booking.status)]">
                  {{ booking.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ formatDate(booking.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  Users, 
  Library, 
  BookOpen, 
  CreditCard, 
  Activity,
  Calendar,

  RefreshCw,
  TrendingUp,
  TrendingDown,
  Book,
  Monitor
} from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import { format } from 'date-fns';

const loading = ref(true);
const analyticsData = ref<any>(null);
const monthlyBookings = ref<any[]>([]);
const topLibraries = ref<any[]>([]);
const recentBookings = ref<any[]>([]);

const statsCards = computed(() => [
  {
    label: 'Total Users',
    value: analyticsData.value?.total_users || 0,
    icon: Users,
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-600'
  },
  {
    label: 'Total Bookings',
    value: analyticsData.value?.total_bookings || 0,
    icon: BookOpen,
    bgClass: 'bg-purple-50',
    iconClass: 'text-purple-600'
  },
  {
    label: 'Active Libraries',
    value: analyticsData.value?.total_libraries || 0,
    icon: Library,
    bgClass: 'bg-amber-50',
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
    const data = await superadminAPI.getAnalytics();
    analyticsData.value = data.analytics;
    monthlyBookings.value = data.monthlyBookings || [];
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
    case 'completed': return 'bg-green-100 text-green-700';
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
  return format(new Date(dateStr), 'MMM d, h:mm a');
};

onMounted(() => {
  fetchAnalytics();
});
</script>
