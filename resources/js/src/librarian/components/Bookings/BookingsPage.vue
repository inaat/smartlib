<template>
  <div class="p-6 space-y-6 font-outfit">
    <!-- Search and Filters in One Line -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <!-- Search bar -->
        <div class="relative flex-1 w-full text-left">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search student by name or ID..."
            class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400"
            @input="debounceSearch"
          />
        </div>
        <!-- Status filter select dropdown -->
        <select
          v-model="activeFilter"
          @change="fetchBookings(1)"
          class="w-full md:w-56 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
        >
          <option value="all">All Bookings ({{ stats.all || 0 }})</option>
          <option value="active">Active ({{ stats.active || 0 }})</option>
          <option value="pending">Pending ({{ stats.pending || 0 }})</option>
          <option value="completed">Completed ({{ stats.completed || 0 }})</option>
          <option value="cancelled">Cancelled ({{ stats.cancelled || 0 }})</option>
        </select>
      </div>
    </div>

    <!-- Bookings Table Container -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div v-if="loading" class="p-16 flex flex-col items-center justify-center">
        <RefreshCw class="w-10 h-10 text-emerald-600 animate-spin mb-4" />
        <p class="text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse">Loading reservations...</p>
      </div>
      <div v-else-if="bookings.length === 0" class="p-16 text-center text-slate-400">
        <Search class="w-10 h-10 text-slate-200 mx-auto mb-4" />
        <p class="text-xs font-bold uppercase tracking-widest text-slate-400">No bookings found</p>
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-100">
          <thead class="bg-gray-50/50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Student
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Seat & Floor
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Date & Time
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Activity Logs
              </th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr
              v-for="booking in bookings"
              :key="booking.id"
              class="hover:bg-slate-50/50 transition-colors"
            >
              <!-- Student Profile Column -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3.5">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                    <img 
                      v-if="booking.user?.profile_picture" 
                      :src="getProfilePictureUrl(booking.user.profile_picture)" 
                      class="w-full h-full object-cover rounded-lg" 
                    />
                    <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm">
                      {{ booking.user?.name?.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-medium text-slate-700">{{ booking.user?.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">ID: {{ booking.user?.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>

              <!-- Seat & Floor Location Column -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div class="flex items-center space-x-2 text-xs font-semibold text-slate-600">
                  <MapPin class="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span class="font-semibold text-slate-800">Seat {{ booking.seat?.seat_number }}</span>
                  <span class="text-[10px] text-slate-400 font-semibold bg-slate-50 px-2 py-0.5 border border-gray-200 rounded-md">
                    {{ booking.seat?.floor?.name }}
                  </span>
                </div>
              </td>

              <!-- Date & Time Window Column -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div class="text-xs font-semibold text-slate-800">{{ formatDate(booking.booking_time) }}</div>
                <div class="text-[10px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                  {{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}
                </div>
              </td>

              <!-- Status Column -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <span :class="[
                  'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border',
                  getStatusClass(booking.status)
                ]">
                  {{ formatStatus(booking.status) }}
                </span>
              </td>

              <!-- Check-In/Out Activity Logs Column -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div v-if="booking.check_in_time" class="text-[10px] font-semibold text-slate-500 space-y-1">
                  <div class="flex items-center space-x-1.5 text-green-700">
                    <CheckCircle class="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span>In: {{ formatTime(booking.check_in_time) }}</span>
                  </div>
                  <div v-if="booking.check_out_time" class="flex items-center space-x-1.5 text-blue-700">
                    <LogOut class="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span>Out: {{ formatTime(booking.check_out_time) }}</span>
                  </div>
                </div>
                <div v-else class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider italic">No activity logged</div>
              </td>

              <!-- Actions Column -->
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button
                    v-if="booking.status === 'booked'"
                    @click="handleCheckIn(booking.id)"
                    class="p-2 bg-green-50 border border-green-200/50 hover:bg-green-100 rounded-lg text-green-600 hover:text-green-700 transition-all cursor-pointer shadow-sm"
                    title="Confirm Check In"
                  >
                    <UserCheck class="w-4 h-4" />
                  </button>
                  <button
                    v-if="booking.status === 'checked_in'"
                    @click="handleCheckOut(booking.id)"
                    class="p-2 bg-blue-50 border border-blue-200/50 hover:bg-blue-100 rounded-lg text-blue-600 hover:text-blue-700 transition-all cursor-pointer shadow-sm"
                    title="Confirm Check Out"
                  >
                    <LogOut class="w-4 h-4" />
                  </button>
                  <button
                    v-if="['booked', 'checked_in'].includes(booking.status)"
                    @click="handleCancel(booking.id)"
                    class="p-2 bg-red-50 border border-red-200 rounded-lg text-red-600 hover:bg-red-100 transition-all cursor-pointer shadow-sm"
                    title="Cancel Booking"
                  >
                    <XCircle class="w-4 h-4" />
                  </button>
                  <button
                    @click="viewBookingDetails(booking)"
                    class="p-2 bg-white border border-gray-200 hover:bg-slate-50 rounded-lg text-emerald-700 hover:text-emerald-800 transition-all cursor-pointer shadow-sm"
                    title="View Details Dialog"
                  >
                    <Eye class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Booking Details Dialog -->
    <div v-if="selectedBooking" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200">
        <!-- Dialog Header -->
        <div class="p-6 border-b border-gray-100 flex items-center justify-between text-left">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0">
              <Calendar class="w-5 h-5" />
            </div>
            <div>
              <h2 class="text-base font-bold text-slate-800 leading-snug">Booking Details</h2>
              <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Booking identification #{{ selectedBooking.id }}</p>
            </div>
          </div>
          <button @click="selectedBooking = null" class="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <!-- Dialog Body Content -->
        <div class="p-6 space-y-5 text-left font-outfit text-slate-700">
          <!-- Student Profile Details -->
          <div class="flex items-center space-x-3.5 pb-4 border-b border-gray-100">
            <div class="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
              <img v-if="selectedBooking.user?.profile_picture" :src="getProfilePictureUrl(selectedBooking.user.profile_picture)" class="w-full h-full object-cover rounded-xl" />
              <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-600 font-bold text-base">
                {{ selectedBooking.user?.name?.charAt(0).toUpperCase() }}
              </div>
            </div>
            <div>
              <h4 class="font-bold text-slate-700 text-sm leading-snug">{{ selectedBooking.user?.name || 'N/A' }}</h4>
              <p class="text-[11px] text-slate-400 font-semibold mt-0.5">{{ selectedBooking.user?.email || 'N/A' }}</p>
              <p class="text-[10px] text-slate-400 font-semibold tracking-wider mt-0.5 uppercase">ID: {{ selectedBooking.user?.crn || 'N/A' }}</p>
            </div>
          </div>

          <!-- Seat Assignment Details -->
          <div class="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
            <div>
              <span class="text-slate-400 font-semibold block text-[9px] uppercase tracking-wider">Seat Assigned</span>
              <span class="font-bold text-slate-700 text-sm">Seat {{ selectedBooking.seat?.seat_number || 'N/A' }}</span>
            </div>
            <div>
              <span class="text-slate-400 font-semibold block text-[9px] uppercase tracking-wider">Location</span>
              <span class="font-semibold text-slate-700 text-xs">{{ selectedBooking.seat?.floor?.name || 'N/A' }}</span>
            </div>
          </div>

          <!-- Reservation Dates & Hours -->
          <div class="pb-4 border-b border-gray-100 space-y-2">
            <div>
              <span class="text-slate-400 font-semibold block text-[9px] uppercase tracking-wider">Reservation Date</span>
              <span class="font-semibold text-slate-700 text-xs">{{ formatDate(selectedBooking.booking_time) }}</span>
            </div>
            <div>
              <span class="text-slate-400 font-semibold block text-[9px] uppercase tracking-wider">Scheduled Window</span>
              <span class="font-semibold text-slate-700 text-xs">
                {{ formatTime(selectedBooking.booking_time) }} - {{ formatTime(selectedBooking.scheduled_end_time) }}
              </span>
            </div>
          </div>

          <!-- Check-in Activity & Status Timings -->
          <div class="space-y-2.5 pb-1">
            <span class="text-slate-400 font-semibold block text-[9px] uppercase tracking-wider">Status & Timings</span>
            <div>
              <span :class="[
                'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white',
                selectedBooking.status === 'checked_in' ? 'bg-green-50 text-green-700 border-green-200' :
                selectedBooking.status === 'booked' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                selectedBooking.status === 'checked_out' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                selectedBooking.status === 'cancelled' ? 'bg-red-50 text-red-700 border-red-200' :
                'bg-slate-50 border-slate-200 text-slate-500'
              ]">
                {{ formatStatus(selectedBooking.status) }}
              </span>
            </div>
            <div class="text-[11px] text-slate-500 font-semibold space-y-1.5 pt-1">
              <p v-if="selectedBooking.check_in_time">Checked In: <span class="font-bold text-slate-700">{{ formatTime(selectedBooking.check_in_time) }}</span></p>
              <p v-if="selectedBooking.check_out_time">Checked Out: <span class="font-bold text-slate-700">{{ formatTime(selectedBooking.check_out_time) }}</span></p>
            </div>
          </div>

          <!-- Quick Action buttons in Details -->
          <div class="pt-4 flex items-center space-x-3 border-t border-gray-100">
            <button
              v-if="selectedBooking.status === 'booked'"
              @click="handleCheckIn(selectedBooking.id); selectedBooking = null"
              class="flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
            >
              Check In Student
            </button>
            <button
              v-if="selectedBooking.status === 'checked_in'"
              @click="handleCheckOut(selectedBooking.id); selectedBooking = null"
              class="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-750 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
            >
              Check Out Student
            </button>
            <button
              type="button"
              @click="selectedBooking = null"
              class="flex-1 px-4 py-2.5 border border-slate-200 text-slate-505 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer text-center"
            >
              Close Details
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
  Search,
  MapPin,
  CheckCircle,
  UserCheck,
  LogOut,
  Eye,
  XCircle,
  X,
  Calendar,
  RefreshCw
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { format } from 'date-fns';
import { useSwal } from '@/shared/composables/useSwal';

const { showError, showSuccess, showConfirm } = useSwal();

interface BookingStats {
  [key: string]: number;
  all: number;
  active: number;
  pending: number;
  completed: number;
  cancelled: number;
}

interface Booking {
  id: number;
  user?: {
    name?: string;
    profile_picture?: string;
    crn?: string;
    email?: string;
  };
  seat?: {
    seat_number?: string | number;
    floor?: {
      name?: string;
    };
  };
  booking_time: string;
  scheduled_end_time: string;
  status: string;
  check_in_time?: string;
  check_out_time?: string;
}

const loading = ref(false);
const bookings = ref<Booking[]>([]);
const stats = ref<BookingStats>({
  all: 0,
  active: 0,
  pending: 0,
  completed: 0,
  cancelled: 0
});
const activeFilter = ref('all');
const searchQuery = ref('');
const selectedBooking = ref<any>(null);
const pagination = ref({
  current_page: 1,
  last_page: 1,
  total: 0,
  from: 0,
  to: 0
});

const filterTabs = [
  { label: 'All Bookings', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' }
];

const fetchBookings = async (page = 1) => {
  loading.value = true;
  try {
    const response = await librarianAPI.getBookings({
      page,
      status: activeFilter.value,
      search: searchQuery.value
    });
    bookings.value = response.data;
    pagination.value = {
      current_page: response.current_page,
      last_page: response.last_page,
      total: response.total,
      from: response.from,
      to: response.to
    };
  } catch (error) {
    console.error('Error fetching bookings:', error);
  } finally {
    loading.value = false;
  }
};

const fetchStats = async () => {
  try {
    stats.value = await librarianAPI.getBookingStats();
  } catch (error) {
    console.error('Error fetching booking stats:', error);
  }
};

const setFilter = (filter: string) => {
  activeFilter.value = filter;
  fetchBookings(1);
};

let searchTimeout: any = null;
const debounceSearch = () => {
  if (searchTimeout) clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    fetchBookings(1);
  }, 500);
};

const changePage = (page: number) => {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchBookings(page);
  }
};

const handleCheckIn = async (id: number) => {
  if (!await showConfirm('Check In', 'Are you sure you want to check in this student?', 'Yes, Check In')) return;
  try {
    await librarianAPI.checkInBooking(id);
    showSuccess('Checked In', 'Student checked in successfully.');
    await fetchBookings(pagination.value.current_page);
    await fetchStats();
  } catch (error) {
    console.error('Error checking in:', error);
    showError('Failed', 'Failed to check in. Please try again.');
  }
};

const handleCheckOut = async (id: number) => {
  if (!await showConfirm('Check Out', 'Are you sure you want to check out this student?', 'Yes, Check Out')) return;
  try {
    await librarianAPI.checkOutBooking(id);
    showSuccess('Checked Out', 'Student checked out successfully.');
    await fetchBookings(pagination.value.current_page);
    await fetchStats();
  } catch (error) {
    console.error('Error checking out:', error);
    showError('Failed', 'Failed to check out. Please try again.');
  }
};

const handleCancel = async (id: number) => {
  if (!await showConfirm('Cancel Booking', 'Are you sure you want to cancel this booking?', 'Yes, Cancel')) return;
  try {
    await librarianAPI.cancelBooking(id);
    showSuccess('Cancelled', 'Booking cancelled successfully.');
    await fetchBookings(pagination.value.current_page);
    await fetchStats();
  } catch (error) {
    console.error('Error cancelling booking:', error);
    showError('Failed', 'Failed to cancel booking. Please try again.');
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return format(new Date(dateString), 'MMM dd, yyyy');
};

const formatTime = (dateString: string) => {
  if (!dateString) return 'N/A';
  return format(new Date(dateString), 'hh:mm a');
};

const formatStatus = (status: string) => {
  if (status === 'checked_in') return 'Active';
  if (status === 'booked') return 'Pending';
  if (status === 'checked_out') return 'Completed';
  return status;
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'checked_in': return 'bg-green-50 border-green-200 text-green-700';
    case 'booked': return 'bg-orange-50 border-orange-100 text-orange-700';
    case 'checked_out': return 'bg-blue-50 border-blue-100 text-blue-700';
    case 'cancelled': return 'bg-red-50 border-red-200 text-red-700';
    case 'no_show': return 'bg-gray-50 border-slate-200 text-gray-550';
    default: return 'bg-gray-50 border-slate-200 text-gray-550';
  }
};

const viewBookingDetails = (booking: any) => {
  selectedBooking.value = booking;
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

onMounted(() => {
  fetchBookings();
  fetchStats();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.text-slate-550 {
  color: #64748b;
}
.w-8\.5 {
  width: 2.125rem;
}
.h-8\.5 {
  height: 2.125rem;
}
</style>
