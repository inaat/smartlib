<template>
  <div class="p-6 space-y-6 font-outfit">


    <!-- Filters -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by student, book title, or ISBN..."
            class="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs font-semibold text-slate-600 bg-white shadow-sm"
          />
        </div>
        <div class="w-full md:w-48">
          <select
            v-model="statusFilter"
            class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs font-bold text-slate-655 bg-white shadow-sm cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="collected">Collected</option>
            <option value="pending_return">Pending Return</option>
            <option value="returned">Returned</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Reservations Table -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-100 text-left">
          <thead class="bg-gray-50/50">
            <tr>
              <th class="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">Book Details</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">Student info</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">Date Logs</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">Status</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr v-if="loading" class="animate-pulse">
              <td colspan="5" class="px-6 py-12 text-center text-slate-400 text-xs font-semibold">Loading reservations...</td>
            </tr>
            <tr v-else-if="filteredReservations.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-slate-400 text-xs font-semibold">No reservations found matching your criteria.</td>
            </tr>
            <tr v-for="reservation in filteredReservations" :key="reservation.id" class="hover:bg-slate-50/50 transition-colors">
              <!-- Book Details -->
              <td class="px-6 py-4">
                <div class="flex items-center text-left">
                  <div class="h-12 w-9 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 overflow-hidden mr-3.5 shadow-sm">
                    <img v-if="reservation.book?.cover_url" :src="reservation.book.cover_url" class="h-full w-full object-cover" />
                    <BookIcon v-else class="h-full w-full p-2.5 text-slate-400" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-slate-700">{{ reservation.book?.title }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">ISBN: {{ reservation.book?.isbn }}</div>
                  </div>
                </div>
              </td>
              <!-- Student Info -->
              <td class="px-6 py-4">
                <div class="flex items-center text-left">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                    <img v-if="reservation.user?.profile_picture" :src="getProfilePictureUrl(reservation.user.profile_picture)" class="w-full h-full object-cover rounded-lg" />
                    <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm">
                      {{ reservation.user?.name?.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div class="text-left ml-3">
                    <div class="text-sm font-medium text-slate-700">{{ reservation.user?.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">ID: {{ reservation.user?.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>
              <!-- Date Logs -->
              <td class="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                <div class="text-slate-500">Reserved: <span class="text-slate-700 font-bold">{{ formatDate(reservation.created_at) }}</span></div>
                <div class="mt-1" :class="getDueDateColor(reservation.due_date)">
                  Due Date: <span class="font-bold">{{ formatDate(reservation.due_date) }}</span>
                </div>
              </td>
              <!-- Status Badge -->
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border',
                    getStatusColor(reservation.status)
                  ]"
                >
                  {{ formatStatus(reservation.status) }}
                </span>
              </td>
              <!-- Actions -->
              <td class="px-6 py-4 whitespace-nowrap text-right text-xs font-bold">
                <div v-if="reservation.status === 'pending'" class="flex justify-end gap-2">
                  <button
                    @click="approveReservation(reservation)"
                    :disabled="processing === reservation.id"
                    class="px-2.5 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Approve
                  </button>
                  <button
                    @click="rejectReservation(reservation)"
                    :disabled="processing === reservation.id"
                    class="px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Reject
                  </button>
                </div>
                <button
                  v-else-if="reservation.status === 'pending_return'"
                  @click="approveReturn(reservation)"
                  :disabled="processing === reservation.id"
                  class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {{ processing === reservation.id ? 'Processing...' : 'Approve Return' }}
                </button>
                <span v-else class="text-slate-400 font-normal">-</span>
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
  Book as BookIcon
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

const approveReservation = async (reservation: any) => {
  if (!await showConfirm('Approve Reservation', `Approve reservation request for "${reservation.book?.title}" from ${reservation.user?.name}?`, 'Yes, Approve')) return;

  processing.value = reservation.id;
  try {
    await librarianAPI.approveReservation(reservation.id);
    showSuccess('Approved', 'Book reservation request has been approved.');
    await fetchReservations();
  } catch (error: any) {
    console.error('Error approving reservation:', error);
    showError('Approval Failed', error.response?.data?.message || 'Failed to approve reservation.');
  } finally {
    processing.value = null;
  }
};

const rejectReservation = async (reservation: any) => {
  if (!await showConfirm('Reject Reservation', `Are you sure you want to reject reservation request for "${reservation.book?.title}" from ${reservation.user?.name}?`, 'Yes, Reject')) return;

  processing.value = reservation.id;
  try {
    await librarianAPI.rejectReservation(reservation.id);
    showSuccess('Rejected', 'Book reservation request has been rejected.');
    await fetchReservations();
  } catch (error: any) {
    console.error('Error rejecting reservation:', error);
    showError('Rejection Failed', error.response?.data?.message || 'Failed to reject reservation.');
  } finally {
    processing.value = null;
  }
};

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
  if (!dueDate) return 'text-slate-400';
  const due = new Date(dueDate);
  const now = new Date();
  if (due < now) return 'text-red-600 font-bold';
  return 'text-slate-400';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-amber-50 text-amber-700 border-amber-100/60';
    case 'approved': return 'bg-blue-50 text-blue-700 border-blue-100/60';
    case 'rejected': return 'bg-rose-50 text-rose-700 border-rose-100/60';
    case 'collected': return 'bg-emerald-50 text-emerald-700 border-emerald-100/60';
    case 'pending_return': return 'bg-orange-50 text-orange-700 border-orange-100/60';
    case 'returned': return 'bg-green-50 text-green-700 border-green-100/60';
    case 'overdue': return 'bg-rose-50 text-rose-700 border-rose-200';
    default: return 'bg-slate-50 text-slate-600 border-slate-100';
  }
};

const formatStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

onMounted(() => {
  fetchReservations();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
