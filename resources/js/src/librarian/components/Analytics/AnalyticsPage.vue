<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <p class="text-gray-600 mt-1">Comprehensive insights into library performance</p>
      </div>
      <div class="flex items-center space-x-3">
        <select v-model="timeRange" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue-100 rounded-lg">
            <Users class="w-6 h-6 text-blue-600" />
          </div>
          <span class="text-green-600 text-sm font-medium flex items-center">
            <TrendingUp class="w-4 h-4 mr-1" />
            +12%
          </span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ stats.total_bookings }}</h3>
        <p class="text-sm text-gray-600 mt-1">Total Bookings</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-green-100 rounded-lg">
            <Calendar class="w-6 h-6 text-green-600" />
          </div>
          <span class="text-green-600 text-sm font-medium flex items-center">
            <TrendingUp class="w-4 h-4 mr-1" />
            +8%
          </span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ stats.completed_bookings }}</h3>
        <p class="text-sm text-gray-600 mt-1">Completed Sessions</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-purple-100 rounded-lg">
            <Clock class="w-6 h-6 text-purple-600" />
          </div>
          <span class="text-green-600 text-sm font-medium flex items-center">
            <TrendingUp class="w-4 h-4 mr-1" />
            +15%
          </span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ stats.avg_session_duration }}h</h3>
        <p class="text-sm text-gray-600 mt-1">Avg. Duration</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-orange-100 rounded-lg">
            <BarChart3 class="w-6 h-6 text-orange-600" />
          </div>
          <span class="text-green-600 text-sm font-medium flex items-center">
            <TrendingUp class="w-4 h-4 mr-1" />
            +5%
          </span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ stats.occupancy_rate }}%</h3>
        <p class="text-sm text-gray-600 mt-1">Avg. Occupancy</p>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Booking Trends -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Booking Trends</h2>
        <div class="h-64 flex items-end justify-between space-x-2">
          <div
            v-for="(day, index) in bookingTrends"
            :key="index"
            class="flex-1 flex flex-col items-center"
          >
            <div class="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all hover:opacity-80"
                 :style="{ height: (day.value / Math.max(...bookingTrends.map(d => d.value)) * 100) + '%' }">
            </div>
            <span class="text-xs text-gray-600 mt-2">{{ day.label }}</span>
          </div>
        </div>
      </div>

      <!-- Peak Hours -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Peak Hours</h2>
        <div class="space-y-3">
          <div
            v-for="hour in peakHours"
            :key="hour.time"
            class="flex items-center space-x-3"
          >
            <span class="text-sm font-medium text-gray-700 w-20">{{ hour.time }}</span>
            <div class="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-end pr-3 transition-all"
                :style="{ width: hour.percentage + '%' }"
              >
                <span class="text-xs font-medium text-white">{{ hour.bookings }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Student Activity & Popular Seats -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Top Students -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">Top Active Students</h2>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div
              v-for="(student, index) in topStudents"
              :key="student.id"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">{{ student.name }}</h4>
                  <p class="text-sm text-gray-500">{{ student.hours }} hours studied</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <Award class="w-5 h-5 text-yellow-500" />
                <span class="text-sm font-medium text-gray-900">{{ student.points }} pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Popular Seats -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">Most Popular Seats</h2>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div
              v-for="seat in popularSeats"
              :key="seat.number"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div class="flex items-center space-x-3">
                <div class="p-2 bg-purple-100 rounded-lg">
                  <MapPin class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">Seat {{ seat.number }}</h4>
                  <p class="text-sm text-gray-500">{{ seat.bookings }} bookings</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-gray-900">{{ seat.utilization }}%</p>
                <p class="text-xs text-gray-500">utilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Revenue & Statistics -->
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import {
  Users,
  Calendar,
  Clock,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Download,
  Award,
  MapPin,
  DollarSign,
  XCircle,
  Star
} from 'lucide-vue-next';
import { librarianAPI } from '@/librarian/services/librarianApi';

const loading = ref(false);
const timeRange = ref('week');
const stats = ref({
  total_bookings: 0,
  active_bookings: 0,
  completed_bookings: 0,
  completion_rate: 0,
  no_show_rate: 0,
  avg_session_duration: 0,
  total_seats: 0,
  available_seats: 0,
  occupancy_rate: 0,
  total_books: 0,
  digital_books: 0,
  physical_books: 0,
  total_events: 0,
  upcoming_events: 0,
  past_events: 0
});

const bookingTrends = ref([]);
const peakHours = ref([]);
const topStudents = ref([]); // Need to add backend support for this
const popularSeats = ref([]); // Need to add backend support for this

const fetchAnalytics = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getAnalytics(timeRange.value);
    stats.value = data.stats;
    
    // Map daily trends
    bookingTrends.value = data.dailyTrends.map((d: any) => ({
      label: d.day,
      value: d.bookings
    }));

    // Map peak hours
    const maxBookings = Math.max(...data.popularTimeSlots.map((s: any) => s.bookings), 1);
    peakHours.value = data.popularTimeSlots.map((s: any) => ({
      time: formatTime(s.time),
      bookings: s.bookings,
      percentage: Math.round((s.bookings / maxBookings) * 100)
    }));

    // Map top students
    topStudents.value = data.topStudents;

    // Map popular seats
    popularSeats.value = data.popularSeats;

  } catch (error) {
    console.error('Error fetching analytics:', error);
  } finally {
    loading.value = false;
  }
};

const formatTime = (timeStr: string) => {
  const [hours] = timeStr.split(':');
  const h = parseInt(hours);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:00 ${ampm}`;
};

watch(timeRange, () => {
  fetchAnalytics();
});

onMounted(() => {
  fetchAnalytics();
});
</script>
