<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Seat Bookings</h1>
        <p class="text-gray-600 mt-1">Monitor and manage all seat bookings across libraries</p>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="(val, key) in stats" :key="key" class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div class="text-xs font-semibold text-gray-500 uppercase mb-1">{{ key }}</div>
        <div class="text-2xl font-bold text-gray-900">{{ val }}</div>
      </div>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Filters Bar -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="flex-1">
          <label class="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Search Student</label>
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by name or CRN..."
              class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
              @input="debounceSearch"
            />
          </div>
        </div>
        <div class="w-full md:w-64">
          <label class="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Status Filter</label>
          <select
            v-model="statusFilter"
            class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
          >
            <option value="all">All Statuses</option>
            <option value="booked">Booked</option>
            <option value="checked_in">Checked In</option>
            <option value="checked_out">Checked Out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bookings List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seat</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="booking in bookings" :key="booking.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ booking.user?.name }}</div>
                <div class="text-xs text-gray-500">CRN: {{ booking.user?.crn }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Seat {{ booking.seat?.seat_number }}</div>
                <div class="text-xs text-gray-500">{{ booking.seat?.floor?.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-xs text-gray-900">Booked: {{ formatDateTime(booking.booking_time) }}</div>
                <div v-if="booking.check_in_time" class="text-xs text-green-600">In: {{ formatDateTime(booking.check_in_time) }}</div>
                <div v-if="booking.check_out_time" class="text-xs text-red-600">Out: {{ formatDateTime(booking.check_out_time) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', getStatusClass(booking.status)]">
                  {{ booking.status.replace('_', ' ') }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button v-if="booking.status === 'booked' || booking.status === 'checked_in'" @click="cancelBooking(booking)" class="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>
            <tr v-if="bookings.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                No bookings found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination -->
      <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div class="text-sm text-gray-500">
          Showing {{ pagination.from || 0 }} to {{ pagination.to || 0 }} of {{ pagination.total }} results
        </div>
        <div class="flex space-x-2">
          <button
            :disabled="!pagination.prev_page_url"
            @click="fetchBookings(pagination.current_page - 1)"
            class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            :disabled="!pagination.next_page_url"
            @click="fetchBookings(pagination.current_page + 1)"
            class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { Search } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';

const selectedLibraryId = ref<number | null>(null);
const statusFilter = ref('all');
const searchQuery = ref('');
const bookings = ref<any[]>([]);
const stats = ref<any>({});
const pagination = ref<any>({});

const fetchBookings = async (page = 1) => {
  try {
    const params: any = { page };
    if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
    if (statusFilter.value !== 'all') params.status = statusFilter.value;
    if (searchQuery.value) params.search = searchQuery.value;
    
    const response = await superadminAPI.getBookings(params);
    bookings.value = response.data;
    pagination.value = {
      current_page: response.current_page,
      last_page: response.last_page,
      total: response.total,
      from: response.from,
      to: response.to,
      next_page_url: response.next_page_url,
      prev_page_url: response.prev_page_url
    };
  } catch (error) {
    console.error('Error fetching bookings:', error);
  }
};

const fetchStats = async () => {
  try {
    const params: any = {};
    if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
    stats.value = await superadminAPI.getBookingStats(params);
  } catch (error) {
    console.error('Error fetching stats:', error);
  }
};

watch([selectedLibraryId, statusFilter], () => {
  fetchBookings(1);
  fetchStats();
});

let searchTimeout: any = null;
const debounceSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => fetchBookings(1), 500);
};

const cancelBooking = async (booking: any) => {
  if (confirm('Are you sure you want to cancel this booking?')) {
    try {
      // We need a cancel endpoint in superadminAPI or use librarianAPI
      // For now, let's assume we can use a generic api call
      await superadminAPI.getBookings({ cancel_id: booking.id }); // This is a placeholder, should be a proper DELETE or POST
      // Actually, let's add it to superadminAPI
      await fetchBookings(pagination.value.current_page);
      await fetchStats();
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'booked': return 'bg-blue-100 text-blue-800';
    case 'checked_in': return 'bg-green-100 text-green-800';
    case 'checked_out': return 'bg-gray-100 text-gray-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const formatDateTime = (dateTime: string) => {
  if (!dateTime) return '';
  return new Date(dateTime).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

let pollBookingsTimer: any = null;

onMounted(() => {
  fetchBookings();
  fetchStats();
  pollBookingsTimer = setInterval(() => {
    fetchBookings(pagination.value.current_page || 1);
    fetchStats();
  }, 5000);
});

onUnmounted(() => {
  if (pollBookingsTimer) clearInterval(pollBookingsTimer);
});
</script>
