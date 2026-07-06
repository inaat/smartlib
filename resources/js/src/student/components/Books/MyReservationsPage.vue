<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading reservations...</p>
    </div>

    <!-- Reservations List -->
    <div v-else-if="reservations.length > 0" class="space-y-4 text-left animate-fade-in">
      <div
        v-for="reservation in reservations"
        :key="reservation.id"
        class="bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 p-5 flex flex-col md:flex-row items-start md:items-center gap-6"
      >
        <!-- Book Cover -->
        <div class="w-20 h-28 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner">
          <img
            v-if="reservation.book?.cover_url"
            :src="reservation.book.cover_url"
            :alt="reservation.book.title"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50">
            <BookIcon class="w-7 h-7 stroke-1" />
          </div>
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div class="text-left">
              <h3 class="font-semibold text-slate-800 text-base leading-snug line-clamp-1" :title="reservation.book?.title">{{ reservation.book?.title }}</h3>
              <p class="text-xs text-slate-400 font-semibold mt-1">by {{ reservation.book?.author }}</p>
            </div>
            <span
              :class="[
                'px-2.5 py-0.5 rounded-lg text-[9px] font-semibold uppercase tracking-wider border w-fit leading-none',
                getStatusColor(reservation.status)
              ]"
            >
              {{ formatStatus(reservation.status) }}
            </span>
          </div>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-500">
            <div class="flex items-center">
              <Calendar class="w-4 h-4 mr-2 text-slate-400" />
              <span>Reserved: {{ formatDate(reservation.created_at) }}</span>
            </div>
            <div class="flex items-center">
              <Clock class="w-4 h-4 mr-2 text-slate-400" />
              <span>Due: {{ formatDate(reservation.due_date) }}</span>
            </div>
            <div class="flex items-center">
              <AlertCircle class="w-4 h-4 mr-2 flex-shrink-0" :class="getDaysRemainingColor(reservation.due_date)" />
              <span class="font-semibold uppercase tracking-wide text-[10px]" :class="getDaysRemainingColor(reservation.due_date)">
                {{ getDaysRemaining(reservation.due_date) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col gap-2 w-full md:w-auto flex-shrink-0">
          <!-- Pick Up Action -->
          <button
            v-if="reservation.status === 'approved'"
            @click="pickUpBook(reservation)"
            :disabled="pickingUp === reservation.id"
            class="px-5 py-2.5 bg-emerald-500 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-emerald-500/10 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50"
          >
            <span v-if="pickingUp === reservation.id" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>Pick Up Book</span>
          </button>

          <!-- Return Action -->
          <button
            v-if="reservation.status === 'collected' || reservation.status === 'overdue'"
            @click="returnBook(reservation)"
            :disabled="returning === reservation.id"
            class="px-5 py-2.5 bg-blue-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/10 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50"
          >
            <span v-if="returning === reservation.id" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>Return Book</span>
          </button>

          <div v-else-if="reservation.status === 'pending_return'" class="text-center text-xs text-slate-400 font-semibold uppercase tracking-wide bg-slate-50 border border-slate-100/50 rounded-xl px-4 py-2">
            Pending Approval
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-slate-100 rounded-2xl border border-dashed border-slate-200/80 p-8 font-outfit">
      <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
        <BookOpen class="w-7 h-7 text-slate-400" />
      </div>
      <h3 class="text-base font-semibold text-slate-800 mb-1">No active reservations</h3>
      <p class="text-xs text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed">You haven't reserved any books yet. Check out our catalog to reserve one.</p>
      <router-link
        to="/student/books"
        class="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 active:scale-98 hover:opacity-95 transition-all uppercase tracking-wider"
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
const pickingUp = ref<number | null>(null);

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

const pickUpBook = async (reservation: any) => {
  if (!await showConfirm('Pick Up Book', `Confirm that you are picking up "${reservation.book?.title}"?`, 'Confirm Pickup')) return;

  pickingUp.value = reservation.id;
  try {
    await studentAPI.pickUpBook(reservation.id);
    showSuccess('Enjoy!', 'Book status updated to collected. Please return it by the due date.');
    await fetchReservations();
  } catch (error: any) {
    console.error('Error picking up book:', error);
    showError('Action Failed', error.response?.data?.message || 'Failed to update status.');
  } finally {
    pickingUp.value = null;
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
  if (!dueDate) return 'text-slate-400';
  const due = new Date(dueDate);
  const now = new Date();
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'text-red-650';
  if (diffDays <= 2) return 'text-orange-655';
  return 'text-green-655';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-amber-50 text-amber-600 border-amber-100';
    case 'approved': return 'bg-blue-50 text-blue-755 border-blue-100';
    case 'rejected': return 'bg-red-50 text-red-755 border-red-100';
    case 'collected': return 'bg-emerald-50 text-emerald-755 border-emerald-100';
    case 'pending_return': return 'bg-orange-50 text-orange-755 border-orange-100';
    case 'returned': return 'bg-slate-50 text-slate-500 border-slate-100';
    case 'overdue': return 'bg-red-50 text-red-755 border-red-100';
    default: return 'bg-slate-50 text-slate-700 border-slate-100';
  }
};

const formatStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.active\:scale-98:active {
  transform: scale(0.98);
}
.text-blue-755 {
  color: #1e40af;
}
.text-emerald-755 {
  color: #065f46;
}
.text-orange-755 {
  color: #9a3412;
}
.text-red-755 {
  color: #991b1b;
}
.text-slate-600 {
  color: #475569;
}
.text-red-655 {
  color: #dc2626;
}
</style>
