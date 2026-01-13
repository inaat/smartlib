<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Reserved Books</h1>
        <p class="text-gray-600 mt-1">Manage student book reservations and returns</p>
      </div>
      <div class="flex gap-2">
        <button
          @click="fetchReservations"
          class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          title="Refresh"
        >
          <RefreshCw class="w-5 h-5" :class="{ 'animate-spin': loading }" />
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by student, book title, or ISBN..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div class="w-full md:w-48">
          <select
            v-model="statusFilter"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="reserved">Reserved</option>
            <option value="pending_return">Pending Return</option>
            <option value="returned">Returned</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Reservations Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-if="loading" class="animate-pulse">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">Loading reservations...</td>
            </tr>
            <tr v-else-if="filteredReservations.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">No reservations found matching your criteria.</td>
            </tr>
            <tr v-for="reservation in filteredReservations" :key="reservation.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-10 w-8 bg-gray-100 rounded flex-shrink-0 overflow-hidden mr-3">
                    <img v-if="reservation.book?.cover_url" :src="reservation.book.cover_url" class="h-full w-full object-cover" />
                    <BookIcon v-else class="h-full w-full p-2 text-gray-400" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ reservation.book?.title }}</div>
                    <div class="text-xs text-gray-500">ISBN: {{ reservation.book?.isbn }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs mr-3">
                    {{ reservation.user?.name?.charAt(0) }}
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ reservation.user?.name }}</div>
                    <div class="text-xs text-gray-500">{{ reservation.user?.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-xs text-gray-900">Reserved: {{ formatDate(reservation.created_at) }}</div>
                <div class="text-xs" :class="getDueDateColor(reservation.due_date)">
                  Due: {{ formatDate(reservation.due_date) }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    getStatusColor(reservation.status)
                  ]"
                >
                  {{ formatStatus(reservation.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  v-if="reservation.status === 'pending_return'"
                  @click="approveReturn(reservation)"
                  :disabled="processing === reservation.id"
                  class="text-green-600 hover:text-green-900 font-bold disabled:opacity-50"
                >
                  {{ processing === reservation.id ? 'Processing...' : 'Approve Return' }}
                </button>
                <span v-else class="text-gray-400">-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { 
  Search, 
  RefreshCw, 
  Book as BookIcon,
  CheckCircle
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const reservations = ref<any[]>([]);
const loading = ref(true);
const processing = ref<number | null>(null);
const searchQuery = ref('');
const statusFilter = ref('all');

const fetchReservations = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getReservedBooks();
    reservations.value = data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
  } finally {
    loading.value = false;
  }
};

const filteredReservations = computed(() => {
  return reservations.value.filter(res => {
    const matchesSearch = !searchQuery.value || 
      res.book?.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      res.book?.isbn?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      res.user?.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesStatus = statusFilter.value === 'all' || res.status === statusFilter.value;
    
    return matchesSearch && matchesStatus;
  });
});

const approveReturn = async (reservation: any) => {
  if (!await showConfirm('Approve Return', `Confirm return for "${reservation.book?.title}" from ${reservation.user?.name}?`, 'Yes, Approve')) return;

  processing.value = reservation.id;
  try {
    await librarianAPI.approveReturn(reservation.id);
    showSuccess('Return Approved', 'Book has been marked as returned and is now available.');
    await fetchReservations();
  } catch (error: any) {
    console.error('Error approving return:', error);
    showError('Approval Failed', error.response?.data?.message || 'Failed to approve return.');
  } finally {
    processing.value = null;
  }
};

const formatDate = (date: string) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const getDueDateColor = (dueDate: string) => {
  if (!dueDate) return 'text-gray-500';
  const due = new Date(dueDate);
  const now = new Date();
  if (due < now) return 'text-red-600 font-bold';
  return 'text-gray-500';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'reserved': return 'bg-blue-100 text-blue-800';
    case 'pending_return': return 'bg-orange-100 text-orange-800';
    case 'returned': return 'bg-green-100 text-green-800';
    case 'overdue': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const formatStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

onMounted(() => {
  fetchReservations();
});
</script>
