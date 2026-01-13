<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">My Reservations</h1>
        <p class="text-gray-600 mt-1">Manage your reserved books and due dates</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Reservations List -->
    <div v-else-if="reservations.length > 0" class="space-y-4">
      <div
        v-for="reservation in reservations"
        :key="reservation.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-start md:items-center gap-6"
      >
        <!-- Book Cover -->
        <div class="w-full md:w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <img
            v-if="reservation.book?.cover_url"
            :src="reservation.book.cover_url"
            :alt="reservation.book.title"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
            <BookIcon class="w-8 h-8" />
          </div>
        </div>

        <!-- Details -->
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-bold text-lg text-gray-900">{{ reservation.book?.title }}</h3>
              <p class="text-gray-500">{{ reservation.book?.author }}</p>
            </div>
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
                getStatusColor(reservation.status)
              ]"
            >
              {{ formatStatus(reservation.status) }}
            </span>
          </div>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div class="flex items-center text-gray-600">
              <Calendar class="w-4 h-4 mr-2 text-gray-400" />
              Reserved: {{ formatDate(reservation.created_at) }}
            </div>
            <div class="flex items-center text-gray-600">
              <Clock class="w-4 h-4 mr-2 text-gray-400" />
              Due: {{ formatDate(reservation.due_date) }}
            </div>
            <div class="flex items-center">
              <AlertCircle class="w-4 h-4 mr-2" :class="getDaysRemainingColor(reservation.due_date)" />
              <span :class="getDaysRemainingColor(reservation.due_date)">
                {{ getDaysRemaining(reservation.due_date) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col gap-2 w-full md:w-auto">
          <button
            v-if="reservation.status === 'reserved'"
            @click="returnBook(reservation)"
            :disabled="returning === reservation.id"
            class="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <span v-if="returning === reservation.id" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
            Return Book
          </button>
          <div v-else-if="reservation.status === 'pending_return'" class="text-center text-sm text-gray-500 italic">
            Waiting for approval
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
      <BookOpen class="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-800 mb-2">No active reservations</h3>
      <p class="text-gray-600 mb-6">You haven't reserved any books yet.</p>
      <router-link
        to="/student/books"
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
      >
        Browse Catalog
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  Book as BookIcon, 
  BookOpen, 
  Calendar, 
  Clock, 
  AlertCircle 
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const reservations = ref<any[]>([]);
const loading = ref(true);
const returning = ref<number | null>(null);

const fetchReservations = async () => {
  loading.value = true;
  try {
    const data = await studentAPI.getMyReservations();
    reservations.value = data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
  } finally {
    loading.value = false;
  }
};

const returnBook = async (reservation: any) => {
  if (!await showConfirm('Return Book', `Are you sure you want to return "${reservation.book?.title}"?`, 'Yes, Return')) return;

  returning.value = reservation.id;
  try {
    await studentAPI.returnBook(reservation.id);
    showSuccess('Return Requested', 'Your return request has been submitted. Please wait for librarian approval.');
    await fetchReservations();
  } catch (error: any) {
    console.error('Error returning book:', error);
    showError('Return Failed', error.response?.data?.message || 'Failed to submit return request.');
  } finally {
    returning.value = null;
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

const getDaysRemaining = (dueDate: string) => {
  if (!dueDate) return 'N/A';
  const due = new Date(dueDate);
  const now = new Date();
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return `Overdue by ${Math.abs(diffDays)} days`;
  if (diffDays === 0) return 'Due today';
  return `${diffDays} days remaining`;
};

const getDaysRemainingColor = (dueDate: string) => {
  if (!dueDate) return 'text-gray-500';
  const due = new Date(dueDate);
  const now = new Date();
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'text-red-600 font-bold';
  if (diffDays <= 2) return 'text-orange-600 font-bold';
  return 'text-green-600';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'reserved': return 'bg-blue-100 text-blue-700';
    case 'pending_return': return 'bg-orange-100 text-orange-700';
    case 'returned': return 'bg-green-100 text-green-700';
    case 'overdue': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const formatStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

onMounted(() => {
  fetchReservations();
});
</script>
