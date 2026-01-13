<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Seat Bookings</h1>
        <p class="text-gray-600 mt-1">Manage and monitor all seat bookings</p>
      </div>
      <div class="flex items-center space-x-3">
        <div class="relative">
          <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search student or ID..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64"
            @input="debounceSearch"
          />
        </div>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div class="flex items-center space-x-2">
        <button
          v-for="tab in filterTabs"
          :key="tab.value"
          @click="setFilter(tab.value)"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            activeFilter === tab.value
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          {{ tab.label }}
          <span v-if="stats[tab.value] !== undefined" :class="[
            'ml-2 px-2 py-0.5 rounded-full text-xs',
            activeFilter === tab.value ? 'bg-purple-200' : 'bg-gray-200'
          ]">
            {{ stats[tab.value] }}
          </span>
        </button>
      </div>
    </div>

    <!-- Bookings Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div v-if="loading" class="p-12 flex justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
      <div v-else-if="bookings.length === 0" class="p-12 text-center text-gray-500">
        No bookings found.
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Student
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Seat
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date & Time
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Check-in/out
              </th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="booking in bookings"
              :key="booking.id"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {{ booking.user?.name?.charAt(0) }}
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">{{ booking.user?.name }}</div>
                    <div class="text-sm text-gray-500">{{ booking.user?.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center space-x-2">
                  <MapPin class="w-4 h-4 text-gray-400" />
                  <span class="font-medium text-gray-900">{{ booking.seat?.seat_number }}</span>
                  <span class="text-xs text-gray-500">({{ booking.seat?.floor?.name }})</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ formatDate(booking.booking_time) }}</div>
                <div class="text-sm text-gray-500">
                  {{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}
                </div>
              </td>
              <td class="px-6 py-4">
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-medium capitalize',
                  getStatusClass(booking.status)
                ]">
                  {{ formatStatus(booking.status) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div v-if="booking.check_in_time" class="text-xs text-gray-600">
                  <div class="flex items-center space-x-1">
                    <CheckCircle class="w-3 h-3 text-green-500" />
                    <span>In: {{ formatTime(booking.check_in_time) }}</span>
                  </div>
                  <div v-if="booking.check_out_time" class="flex items-center space-x-1 mt-1">
                    <LogOut class="w-3 h-3 text-blue-500" />
                    <span>Out: {{ formatTime(booking.check_out_time) }}</span>
                  </div>
                </div>
                <div v-else class="text-sm text-gray-400 italic">Not checked in</div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button
                    v-if="booking.status === 'booked'"
                    @click="handleCheckIn(booking.id)"
                    class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Check In"
                  >
                    <UserCheck class="w-4 h-4" />
                  </button>
                  <button
                    v-if="booking.status === 'checked_in'"
                    @click="handleCheckOut(booking.id)"
                    class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Check Out"
                  >
                    <LogOut class="w-4 h-4" />
                  </button>
                  <button
                    v-if="['booked', 'checked_in'].includes(booking.status)"
                    @click="handleCancel(booking.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Cancel Booking"
                  >
                    <XCircle class="w-4 h-4" />
                  </button>
                  <button
                    @click="viewBookingDetails(booking.id)"
                    class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <Eye class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="pagination.total > 0" class="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Showing <span class="font-medium">{{ pagination.from }}</span> to <span class="font-medium">{{ pagination.to }}</span> of <span class="font-medium">{{ pagination.total }}</span> results
          </div>
          <div class="flex items-center space-x-2">
            <button
              @click="changePage(pagination.current_page - 1)"
              :disabled="pagination.current_page === 1"
              class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              Previous
            </button>
            <button
              v-for="page in pagination.last_page"
              :key="page"
              @click="changePage(page)"
              :class="[
                'px-3 py-1 rounded-lg transition-all',
                pagination.current_page === page
                  ? 'bg-purple-600 text-white'
                  : 'border border-gray-300 hover:bg-white'
              ]"
            >
              {{ page }}
            </button>
            <button
              @click="changePage(pagination.current_page + 1)"
              :disabled="pagination.current_page === pagination.last_page"
              class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              Next
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
  Plus,
  Search,
  MapPin,
  CheckCircle,
  UserCheck,
  LogOut,
  Eye,
  XCircle
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { format } from 'date-fns';

const loading = ref(false);
const bookings = ref([]);
const stats = ref({
  all: 0,
  active: 0,
  pending: 0,
  completed: 0,
  cancelled: 0
});
const activeFilter = ref('all');
const searchQuery = ref('');
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

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

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
    case 'checked_in': return 'bg-green-100 text-green-700';
    case 'booked': return 'bg-orange-100 text-orange-700';
    case 'checked_out': return 'bg-blue-100 text-blue-700';
    case 'cancelled': return 'bg-red-100 text-red-700';
    case 'no_show': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const viewBookingDetails = (id: number) => {
  console.log('View details for booking:', id);
};

onMounted(() => {
  fetchBookings();
  fetchStats();
});
</script>
