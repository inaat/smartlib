<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-gray-600 mt-1">Welcome back, {{ user?.name }}! Here's what's happening today.</p>
      </div>

    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      <div v-if="loading" class="absolute inset-0 bg-blue bg-opacity-10 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-xl">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
      <!-- Total Bookings Today -->
      <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue bg-opacity-20 rounded-lg">
            <Calendar class="w-6 h-6" />
          </div>
          <span class="text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full">Today</span>
        </div>
        <div class="space-y-1">
          <h3 class="text-2xl font-bold">{{ stats.todayBookings }}</h3>
          <p class="text-blue-100 text-sm">Total Bookings</p>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <TrendingUp class="w-4 h-4 mr-1" />
          <span>Updated live</span>
        </div>
      </div>

      <!-- Active Students -->
      <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue bg-opacity-20 rounded-lg">
            <UserCheck class="w-6 h-6" />
          </div>
          <span class="text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full">Live</span>
        </div>
        <div class="space-y-1">
          <h3 class="text-2xl font-bold">{{ stats.activeStudents }}</h3>
          <p class="text-green-100 text-sm">Active Students</p>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <Users class="w-4 h-4 mr-1" />
          <span>{{ stats.totalSeats }} total seats</span>
        </div>
      </div>

      <!-- Pending Check-ins -->
      <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue bg-opacity-20 rounded-lg">
            <Clock class="w-6 h-6" />
          </div>
          <span class="text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full">Pending</span>
        </div>
        <div class="space-y-1">
          <h3 class="text-2xl font-bold">{{ stats.pendingCheckIns }}</h3>
          <p class="text-orange-100 text-sm">Pending Check-ins</p>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <AlertCircle class="w-4 h-4 mr-1" />
          <span>Awaiting arrival</span>
        </div>
      </div>

      <!-- Available Seats -->
      <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue bg-opacity-20 rounded-lg">
            <Building2 class="w-6 h-6" />
          </div>
          <span class="text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full">Available</span>
        </div>
        <div class="space-y-1">
          <h3 class="text-2xl font-bold">{{ stats.availableSeats }}</h3>
          <p class="text-purple-100 text-sm">Seats Available</p>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <BarChart3 class="w-4 h-4 mr-1" />
          <span>{{ occupancyRate }}% occupancy</span>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent Bookings -->
      <div class="lg:col-span-2 bg-blue rounded-xl shadow-sm border border-gray-200 relative">
        <div v-if="loading" class="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900">Recent Bookings</h2>
            <router-link to="/librarian/bookings" class="text-sm text-purple-600 hover:text-purple-700 font-medium">
              View All →
            </router-link>
          </div>
        </div>
        <div class="p-6">
          <div v-if="recentBookings.length === 0 && !loading" class="text-center py-8 text-gray-500">
            No recent bookings found.
          </div>
          <div class="space-y-4">
            <div
              v-for="booking in recentBookings"
              :key="booking.id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  {{ booking.studentName.charAt(0) }}
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">{{ booking.studentName }}</h4>
                  <p class="text-sm text-gray-500">Seat {{ booking.seatNumber }} • {{ booking.time }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-medium capitalize',
                  booking.status === 'active' ? 'bg-green-100 text-green-700' :
                  booking.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                ]">
                  {{ booking.status }}
                </span>
                <button class="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                  <MoreVertical class="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Alerts -->
      <div class="space-y-6">
        <!-- Alerts -->
        <div class="bg-blue rounded-xl shadow-sm border border-gray-200">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">Alerts</h2>
          </div>
          <div class="p-6 space-y-4">
            <div class="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertCircle class="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h4 class="text-sm font-medium text-red-900">Overdue Check-ins</h4>
                <p class="text-xs text-red-700 mt-1">{{ stats.overdueCheckIns }} students haven't checked in</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertCircle class="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 class="text-sm font-medium text-yellow-900">Maintenance Due</h4>
                <p class="text-xs text-yellow-700 mt-1">{{ stats.maintenanceSeats }} seats need maintenance</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <AlertCircle class="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 class="text-sm font-medium text-blue-900">Event Today</h4>
                <p class="text-xs text-blue-700 mt-1">Study Workshop at 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Occupancy Chart -->
        <div class="bg-blue rounded-xl shadow-sm border border-gray-200">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">Occupancy Rate</h2>
          </div>
          <div class="p-6">
            <div class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block text-purple-600">
                    {{ occupancyRate }}%
                  </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-gray-600">
                    {{ stats.activeStudents }}/{{ stats.totalSeats }}
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-purple-100">
                <div
                  :style="{ width: occupancyRate + '%' }"
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500"
                ></div>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Peak Hours</span>
                <span class="font-medium text-gray-900">2:00 PM - 6:00 PM</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Avg. Duration</span>
                <span class="font-medium text-gray-900">3.5 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Today's Schedule -->
    <div class="bg-blue rounded-xl shadow-sm border border-gray-200 relative">
      <div v-if="loading" class="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900">Upcoming Schedule</h2>
          <div class="flex items-center space-x-2">
            <button class="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              All
            </button>
            <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              Events
            </button>
            <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              Maintenance
            </button>
          </div>
        </div>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="event in todaySchedule"
            :key="event.id"
            class="p-4 border-l-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            :class="event.color"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-gray-500">{{ event.time }}</span>
              <component :is="event.icon" class="w-4 h-4 text-gray-600" />
            </div>
            <h4 class="font-medium text-gray-900">{{ event.title }}</h4>
            <p class="text-sm text-gray-600 mt-1">{{ event.description }}</p>
            <div v-if="event.joinedCount !== undefined" class="mt-2 flex items-center text-xs text-gray-500">
               <Users class="w-3 h-3 mr-1" />
               <span>{{ event.joinedCount }} joined</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import {
  Calendar,
  UserCheck,
  Clock,
  Building2,
  TrendingUp,
  Users,
  AlertCircle,
  BarChart3,
  MoreVertical,
  BookOpen,
  Settings,
  Coffee
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { format } from 'date-fns';

const { user } = useAuth();
const loading = ref(true);

const stats = ref({
  todayBookings: 0,
  activeStudents: 0,
  pendingCheckIns: 0,
  overdueCheckIns: 0,
  availableSeats: 0,
  totalSeats: 0,
  totalBooks: 0,
  totalEvents: 0,
  maintenanceSeats: 0
});

const recentBookings = ref([]);
const upcomingEvents = ref([]);

const occupancyRate = computed(() => {
  if (!stats.value.totalSeats) return 0;
  return Math.round((stats.value.activeStudents / stats.value.totalSeats) * 100);
});

const fetchDashboardData = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getDashboard();
    
    // Map stats
    stats.value = {
      todayBookings: data.stats.today_bookings,
      activeStudents: data.stats.active_bookings,
      pendingCheckIns: data.stats.pending_bookings,
      overdueCheckIns: data.stats.overdue_bookings,
      availableSeats: data.stats.available_seats,
      totalSeats: data.stats.total_seats,
      totalBooks: data.stats.total_books,
      totalEvents: data.stats.total_events,
      maintenanceSeats: data.stats.maintenance_seats
    };

    // Map recent bookings
    recentBookings.value = data.recentBookings.map((b: any) => ({
      id: b.id,
      studentName: b.user?.name || 'Unknown',
      seatNumber: b.seat?.seat_number || 'N/A',
      time: `${formatTime(b.booking_time)} - ${formatTime(b.scheduled_end_time)}`,
      status: b.status === 'checked_in' ? 'active' : (b.status === 'booked' ? 'pending' : b.status)
    }));

    // Map upcoming events
    upcomingEvents.value = data.upcomingEvents.map((e: any) => {
      const date = new Date(e.start_time);
      const isToday = new Date().toDateString() === date.toDateString();
      const timeStr = format(date, 'hh:mm a');
      
      return {
        id: e.id,
        time: isToday ? timeStr : `${format(date, 'MMM d')} • ${timeStr}`,
        title: e.title,
        description: e.description || e.location || 'No details provided',
        joinedCount: e.joined_count,
        icon: BookOpen,
        color: 'border-purple-500'
      };
    });

  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  } finally {
    loading.value = false;
  }
};

const formatTime = (dateString: string) => {
  if (!dateString) return 'N/A';
  return format(new Date(dateString), 'hh:mm a');
};

onMounted(() => {
  fetchDashboardData();
});

const todaySchedule = computed(() => {
  const schedule = [
    {
      id: 'open',
      time: '08:00 AM',
      title: 'Library Opens',
      description: 'Regular opening hours',
      icon: Building2,
      color: 'border-blue-500',
      joinedCount: undefined
    },
    ...upcomingEvents.value
  ];
  return schedule;
});
</script>
