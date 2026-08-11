<template>
  <div class="p-6 space-y-6 font-outfit">
    <!-- Welcome Header Banner -->
    <div class="bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 rounded-2xl text-white px-6 py-5 shadow-sm relative overflow-hidden">
      <!-- Abstract Graphic Overlays -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -ml-24 -mb-24"></div>
      <div class="relative z-10 flex items-center justify-between">
        <div class="text-left">
          <span class="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase bg-white/10 px-2.5 py-0.5 rounded-full">Librarian Workspace</span>
          <h1 class="text-2xl font-bold mt-2 mb-1 tracking-tight">{{ greeting }}, {{ user?.name }}! 👋</h1>
          <p class="text-emerald-100/90 text-xs font-normal">Space occupancy, seat reservations, and catalog overview today.</p>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-xl">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
      
      <!-- Total Bookings Today -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="p-2 bg-blue-50/60 rounded-lg text-blue-600">
              <Calendar class="w-5 h-5" />
            </div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Bookings Today</span>
          </div>
          <span class="text-xs font-semibold bg-blue-55/60 text-blue-700 px-2 py-0.5 rounded-full">Today</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ stats.todayBookings }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Total seat reservations</div>
      </div>

      <!-- Active Students -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="p-2 bg-emerald-50/60 rounded-lg text-emerald-600">
              <UserCheck class="w-5 h-5" />
            </div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Students</span>
          </div>
          <span class="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full flex items-center">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span> Live
          </span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ stats.activeStudents }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">{{ stats.totalSeats }} Library Seats</div>
      </div>

      <!-- Pending Check-ins -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="p-2 bg-orange-50/60 rounded-lg text-orange-600">
              <Clock class="w-5 h-5" />
            </div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Arrivals</span>
          </div>
          <span class="text-xs font-semibold bg-orange-55/60 text-orange-700 px-2 py-0.5 rounded-full">Arrivals</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ stats.pendingCheckIns }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Awaiting Check-in</div>
      </div>

      <!-- Pending Complaints -->
      <div 
        @click="$router.push('/librarian/support')"
        class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md hover:border-red-100 transition-all cursor-pointer group"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="p-2 bg-rose-50/60 rounded-lg text-rose-600 group-hover:scale-105 transition-transform">
              <MessageSquare class="w-5 h-5" />
            </div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Complaints</span>
          </div>
          <span v-if="stats.pending_tickets > 0" class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-450 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span v-else class="text-xs font-semibold bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full">None</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ stats.pending_tickets }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left group-hover:text-rose-600 transition-colors">Needs Attention</div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent Bookings -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 relative">
        <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
        </div>
        <div class="p-6 border-b border-gray-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <h2 class="text-lg font-bold text-slate-700">Recent Activity</h2>
            </div>
            <router-link to="/librarian/bookings" class="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center">
              View All <span class="ml-1">→</span>
            </router-link>
          </div>
        </div>
        <div class="p-6">
          <div v-if="recentBookings.length === 0 && !loading" class="text-center py-8 text-slate-400 text-sm">
            No recent bookings found.
          </div>
          <div class="space-y-3">
            <div
              v-for="booking in recentBookings"
              :key="booking.id"
              class="flex items-center justify-between p-4 bg-slate-50 border border-slate-100/60 rounded-2xl hover:border-slate-200/80 hover:bg-slate-100/30 transition-all flex items-start space-x-3.5"
            >
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                  <img v-if="booking.profilePicture" :src="getProfilePictureUrl(booking.profilePicture)" class="w-full h-full object-cover rounded-xl" />
                  <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-600 font-bold text-sm">
                    {{ booking.studentName.charAt(0).toUpperCase() }}
                  </div>
                </div>
                <div class="text-left">
                  <h4 class="font-bold text-slate-700 text-sm">{{ booking.studentName }}</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5 font-semibold">Seat {{ booking.seatNumber }} • {{ booking.time }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <span :class="[
                  'px-2.5 py-1 rounded-full text-[10px] font-bold capitalize tracking-wide border',
                  booking.status === 'active' ? 'bg-green-50 text-green-700 border-green-100' :
                  booking.status === 'pending' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                  'bg-slate-50 text-slate-500 border border-slate-200'
                ]">
                  {{ booking.status === 'active' ? 'Live' : booking.status }}
                </span>
                <button class="p-1.5 hover:bg-slate-200/60 rounded-lg transition-colors text-slate-400 hover:text-slate-600">
                  <MoreVertical class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Alerts -->
      <div class="space-y-6">
        <!-- System Alerts -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
          <div class="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 class="text-lg font-bold text-slate-700">System Alerts</h2>
            <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">Live Status</span>
          </div>
          <div class="p-6 space-y-3.5">
            <!-- Overstay Alert -->
            <div 
              @click="$router.push({ name: 'librarian-live-map' })"
              class="flex items-start space-x-3 p-3.5 bg-rose-50/60 border border-rose-100 rounded-2xl cursor-pointer hover:bg-rose-50 transition-all group"
            >
              <AlertTriangle class="w-4.5 h-4.5 text-rose-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 class="text-xs font-bold text-rose-900 uppercase tracking-wider">Overstay Alerts</h4>
                <p class="text-[11px] text-rose-700 mt-0.5 font-medium leading-relaxed">
                  {{ stats.overstay_count }} students currently in overstay or serious overstay.
                </p>
              </div>
            </div>

            <!-- Pending Level Overrides -->
            <div 
              @click="$router.push({ path: '/librarian/bookings', query: { tab: 'override_requests' } })"
              class="flex items-start space-x-3 p-3.5 bg-amber-50/60 border border-amber-100 rounded-2xl cursor-pointer hover:bg-amber-50 transition-all group"
            >
              <ShieldAlert class="w-4.5 h-4.5 text-amber-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 class="text-xs font-bold text-amber-900 uppercase tracking-wider">Level Override Requests</h4>
                <p class="text-[11px] text-amber-700 mt-0.5 font-medium leading-relaxed">
                  {{ stats.pending_overrides }} student override requests awaiting librarian approval.
                </p>
              </div>
            </div>

            <!-- Pending Support Complaints -->
            <div 
              @click="$router.push('/librarian/support')"
              class="flex items-start space-x-3 p-3.5 bg-purple-50/60 border border-purple-100 rounded-2xl cursor-pointer hover:bg-purple-50 transition-all group"
            >
              <MessageSquare class="w-4.5 h-4.5 text-purple-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 class="text-xs font-bold text-purple-900 uppercase tracking-wider">Helpdesk Tickets</h4>
                <p class="text-[11px] text-purple-700 mt-0.5 font-medium leading-relaxed">
                  {{ stats.pending_tickets }} student support tickets need attention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Occupancy Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="p-6 border-b border-gray-100 text-left">
            <h2 class="text-lg font-bold text-slate-700">Library Occupancy</h2>
          </div>
          <div class="p-6">
            <div class="relative pt-1 text-left">
              <div class="flex mb-2 items-center justify-between text-xs font-bold">
                <div>
                  <span class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold">
                    {{ occupancyRate }}% Occupied
                  </span>
                </div>
                <div class="text-right text-slate-500 font-semibold">
                  {{ stats.activeStudents }} / {{ stats.totalSeats }} Seats
                </div>
              </div>
              <div class="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-slate-100">
                <div
                  :style="{ width: occupancyRate + '%' }"
                  class="shadow-sm flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-emerald-600 to-teal-650 transition-all duration-500 rounded-full"
                ></div>
              </div>
            </div>
            <div class="mt-4 space-y-2 pt-2 border-t border-slate-100">
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-500">Peak Hours Today</span>
                <span class="font-bold text-gray-700 bg-slate-100 px-2 py-0.5 rounded-lg">2:00 PM - 6:00 PM</span>
              </div>
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-500">Avg. Study Duration</span>
                <span class="font-bold text-gray-700 bg-slate-100 px-2 py-0.5 rounded-lg">3.5 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Workspace Operations -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 relative text-left">
      <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
      <div class="p-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-700">Librarian Operations & Quick Tools</h2>
          <p class="text-[11px] text-slate-400 font-medium mt-0.5">Quick access to essential library management features</p>
        </div>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <router-link
            :to="{ name: 'librarian-live-map' }"
            class="p-5 bg-emerald-50/40 hover:bg-emerald-50/90 border border-emerald-100/80 rounded-2xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100/80 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live View
                </span>
                <MapPin class="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Live Seat Map</h4>
              <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Real-time seat occupancy & layout monitor across all floors.</p>
            </div>
            <div class="mt-4 flex items-center text-xs font-bold text-emerald-700">
              <span>Open Seat Map</span>
              <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </router-link>

          <router-link
            to="/librarian/attendance"
            class="p-5 bg-blue-50/40 hover:bg-blue-50/90 border border-blue-100/80 rounded-2xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-0.5 bg-blue-100/80 text-blue-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Today's Logs
                </span>
                <UserCheck class="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Student Attendance</h4>
              <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Track student check-in times, check-outs, and active durations.</p>
            </div>
            <div class="mt-4 flex items-center text-xs font-bold text-blue-700">
              <span>View Attendance</span>
              <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </router-link>

          <router-link
            to="/librarian/sections"
            class="p-5 bg-amber-50/40 hover:bg-amber-50/90 border border-amber-100/80 rounded-2xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-0.5 bg-amber-100/80 text-amber-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  QR Cards
                </span>
                <Printer class="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Print QR Codes</h4>
              <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Print subsection QR codes with seat names & academic levels.</p>
            </div>
            <div class="mt-4 flex items-center text-xs font-bold text-amber-700">
              <span>Print Cards</span>
              <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </router-link>

          <router-link
            to="/librarian/support"
            class="p-5 bg-rose-50/40 hover:bg-rose-50/90 border border-rose-100/80 rounded-2xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-0.5 bg-rose-100/80 text-rose-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Helpdesk
                </span>
                <MessageSquare class="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Student Complaints</h4>
              <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Review and resolve reported seat or library issues.</p>
            </div>
            <div class="mt-4 flex items-center text-xs font-bold text-rose-700">
              <span>Manage Helpdesk</span>
              <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import {
  Calendar,
  UserCheck,
  Clock,
  MoreVertical,
  BookOpen,
  MessageSquare,
  MapPin,
  Printer,
  AlertTriangle,
  ShieldAlert
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { format } from 'date-fns';

const { user } = useAuth();
const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 17) {
    return 'Good afternoon';
  } else if (hour < 21) {
    return 'Good evening';
  } else {
    return 'Welcome back';
  }
});
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
  maintenanceSeats: 0,
  pending_tickets: 0,
  pending_overrides: 0,
  overstay_count: 0
});

interface RecentBooking {
  id: any;
  studentName: string;
  profilePicture?: string;
  seatNumber: string | number;
  time: string;
  status: string;
}

interface UpcomingEvent {
  id: any;
  time: string;
  title: string;
  description: string;
  joinedCount?: number;
  icon: any;
  color: string;
}

const recentBookings = ref<RecentBooking[]>([]);
const upcomingEvents = ref<UpcomingEvent[]>([]);

const occupancyRate = computed(() => {
  if (!stats.value.totalSeats) return 0;
  return Math.round((stats.value.activeStudents / stats.value.totalSeats) * 100);
});

const fetchDashboardData = async (isSilent = false) => {
  if (!isSilent) loading.value = true;
  try {
    const data = await librarianAPI.getDashboard();
    
    // Map stats including pending complaints (tickets)
    stats.value = {
      todayBookings: data.stats.today_bookings || 0,
      activeStudents: data.stats.active_bookings || 0,
      pendingCheckIns: data.stats.pending_bookings || 0,
      overdueCheckIns: data.stats.overdue_bookings || 0,
      availableSeats: data.stats.available_seats || 0,
      totalSeats: data.stats.total_seats || 0,
      totalBooks: data.stats.total_books || 0,
      totalEvents: data.stats.total_events || 0,
      maintenanceSeats: data.stats.maintenance_seats || 0,
      pending_tickets: data.stats.pending_tickets || 0,
      pending_overrides: data.stats.pending_overrides || 0,
      overstay_count: data.stats.overstay_count || 0
    };

    // Map recent bookings (Auto-limit to 7 latest activities)
    recentBookings.value = (data.recentBookings || []).slice(0, 7).map((b: any) => ({
      id: b.id,
      studentName: b.user?.name || 'Unknown',
      profilePicture: b.user?.profile_picture,
      seatNumber: b.seat?.seat_number || 'N/A',
      time: `${formatTime(b.booking_time)} - ${formatTime(b.scheduled_end_time)}`,
      status: b.status === 'checked_in' ? 'active' : (b.status === 'booked' ? 'pending' : b.status)
    }));

    // Map upcoming events
    upcomingEvents.value = (data.upcomingEvents || []).map((e: any) => {
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
        color: 'border-l-emerald-500'
      };
    });

  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  } finally {
    if (!isSilent) loading.value = false;
  }
};

const formatTime = (dateString: string) => {
  if (!dateString) return 'N/A';
  return format(new Date(dateString), 'hh:mm a');
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

let pollDashboardTimer: any = null;

onMounted(() => {
  fetchDashboardData();
  pollDashboardTimer = setInterval(() => {
    fetchDashboardData(true);
  }, 5000);
});

onUnmounted(() => {
  if (pollDashboardTimer) clearInterval(pollDashboardTimer);
});


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
