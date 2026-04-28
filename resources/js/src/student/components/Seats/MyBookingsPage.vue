<template>
  <div class="space-y-8 pb-12">
    <!-- Header Section -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">My Bookings</h1>
          <p class="text-gray-500 mt-1">Manage your active and past seat reservations</p>
        </div>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
        >
          <Plus class="w-5 h-5 mr-2" />
          Book New Seat
        </router-link>
      </div>
    </div>

    <!-- Active Bookings Section -->
    <div class="space-y-6">
      <div class="flex items-center justify-between px-2">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
          <Clock class="w-5 h-5 mr-2 text-blue-500" />
          Current & Upcoming
        </h2>
      </div>

      <div v-if="activeBookings.length === 0" class="bg-white rounded-3xl p-16 text-center border border-dashed border-gray-200">
        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Armchair class="w-10 h-10 text-gray-200" />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">No Active Bookings</h3>
        <p class="text-gray-500 max-w-xs mx-auto mb-8">You don't have any active seat reservations at the moment. Find a library to book your spot!</p>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
        >
          Explore Libraries
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div 
          v-for="booking in activeBookings" 
          :key="booking.id"
          class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden"
        >
          <!-- Status Banner for Active now -->
          <div v-if="booking.status === 'checked_in'" class="absolute top-0 right-0 px-4 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm">
            Active Now
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div class="flex items-start gap-6">
              <div :class="[
                'p-5 rounded-2xl transition-all duration-300',
                booking.status === 'checked_in' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              ]">
                <Armchair class="w-10 h-10" />
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h3 class="font-black text-gray-900 text-2xl">Seat {{ booking.seat?.seat_number }}</h3>
                  <span :class="[
                    'px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter',
                    booking.status === 'checked_in' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  ]">
                    #{{ booking.id }}
                  </span>
                </div>
                <p class="text-gray-500 text-lg flex items-center font-medium">
                  <MapPin class="w-5 h-5 mr-1.5 text-red-400" />
                  {{ booking.seat?.library?.name }}
                </p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span v-if="booking.seat?.has_computer" class="flex items-center text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl font-bold">
                    <Monitor class="w-4 h-4 mr-1.5" /> Computer Available
                  </span>
                  <span v-if="booking.seat?.near_window" class="flex items-center text-xs bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-xl font-bold">
                    <Layout class="w-4 h-4 mr-1.5" /> Near Window
                  </span>
                  <span v-if="booking.seat?.socket_count > 0" class="flex items-center text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-xl font-bold">
                    <Zap class="w-4 h-4 mr-1.5" /> {{ booking.seat.socket_count }} Power Outlets
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:items-end gap-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-50">
              <div class="lg:text-right">
                <p class="text-xs font-black uppercase tracking-widest mb-1" :class="isOverdue(booking) ? 'text-red-400' : 'text-gray-400'">{{ getTimerLabel(booking) }}</p>
                <p class="text-4xl font-black font-mono tracking-tighter" :class="isOverdue(booking) ? 'text-red-500' : 'text-gray-800'">
                  {{ getRemainingTime(booking) }}
                </p>
              </div>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCheckIn(booking.id)"
                  class="flex-1 lg:flex-none px-8 py-3 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
                >
                  Check In
                </button>
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCancel(booking.id)"
                  class="flex-1 lg:flex-none px-8 py-3 bg-white border-2 border-red-100 text-red-600 rounded-2xl font-bold hover:bg-red-50 transition-all active:scale-95"
                >
                  Cancel
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleCheckOut(booking.id)"
                  class="flex-1 lg:flex-none px-8 py-3 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 active:scale-95"
                >
                  Check Out
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleExtend(booking)"
                  class="flex-1 lg:flex-none px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 whitespace-nowrap"
                >
                  Extend Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Extend Session Modal -->
    <div v-if="extendModal.show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="extendModal.show = false">
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-black text-gray-900">Extend Session</h3>
            <p class="text-sm text-gray-500 mt-1">How long would you like to extend?</p>
          </div>
          <button @click="extendModal.show = false" class="p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Duration selector -->
        <div class="grid grid-cols-3 gap-3 mb-6">
          <button
            v-for="opt in extendOptions"
            :key="opt.value"
            @click="extendModal.selectedMinutes = opt.value"
            :class="[
              'py-3 rounded-2xl font-bold text-sm transition-all border-2',
              extendModal.selectedMinutes === opt.value
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 scale-105'
                : 'bg-gray-50 text-gray-700 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50'
            ]"
          >
            {{ opt.label }}
          </button>
        </div>

        <!-- Preview new end time -->
        <div v-if="extendModal.booking" class="mb-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
          <p class="text-xs text-indigo-500 font-black uppercase tracking-widest mb-1">New Session End</p>
          <p class="text-lg font-black text-indigo-800">
            {{ getNewEndTime(extendModal.booking, extendModal.selectedMinutes) }}
          </p>
        </div>

        <div class="flex gap-3">
          <button
            @click="extendModal.show = false"
            class="flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            @click="confirmExtend"
            :disabled="extendModal.loading"
            class="flex-1 py-3 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ extendModal.loading ? 'Extending...' : 'Confirm' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Booking History Section -->
    <div class="pt-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 class="text-xl font-bold text-gray-800 flex items-center px-2">
          <History class="w-5 h-5 mr-2 text-purple-500" />
          Booking History
        </h2>
        <div class="flex items-center gap-2 bg-gray-100 p-1 rounded-2xl">
          <button 
            v-for="filter in ['all', 'completed', 'cancelled']" 
            :key="filter"
            @click="historyFilter = filter as any"
            :class="[
              'px-6 py-2 rounded-xl text-xs font-bold capitalize transition-all',
              historyFilter === filter ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div v-if="!filteredHistory || filteredHistory.length === 0" class="bg-white rounded-3xl p-16 text-center border border-gray-100">
        <Clock class="w-16 h-16 text-gray-200 mx-auto mb-4" />
        <p class="text-gray-500 font-medium">No past bookings found.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="booking in filteredHistory" 
          :key="booking.id"
          class="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 hover:shadow-md transition-all group"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div :class="[
                'p-3 rounded-xl',
                booking.status === 'checked_out' ? 'bg-green-50 text-green-600' :
                booking.status === 'cancelled' ? 'bg-red-50 text-red-600' :
                'bg-gray-50 text-gray-600'
              ]">
                <Armchair class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-gray-800">Seat {{ booking.seat?.seat_number }}</h3>
                <p class="text-[10px] text-gray-400 font-black uppercase">ID #{{ booking.id }}</p>
              </div>
            </div>
            <span :class="[
              'px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider',
              booking.status === 'checked_out' ? 'bg-green-100 text-green-700' :
              booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
              'bg-gray-100 text-gray-700'
            ]">
              {{ booking.status.replace('_', ' ') }}
            </span>
          </div>
          
          <div class="space-y-3 pt-3 border-t border-gray-50 text-sm text-gray-600">
            <div class="flex items-center">
              <MapPin class="w-4 h-4 mr-2.5 text-gray-400" />
              <span class="font-medium">{{ booking.seat?.library?.name }}</span>
            </div>
            <div class="flex items-center">
              <Calendar class="w-4 h-4 mr-2.5 text-gray-400" />
              <span class="font-medium">{{ formatDate(booking.booking_time) }}</span>
            </div>
            <div class="flex items-center">
              <Clock class="w-4 h-4 mr-2.5 text-gray-400" />
              <span class="font-medium">{{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}</span>
            </div>
            <div v-if="booking.total_minutes" class="flex items-center text-blue-600 font-bold">
              <Zap class="w-4 h-4 mr-2.5" />
              Duration: {{ formatDuration(booking.total_minutes) }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Load More Button -->
      <div class="mt-12 text-center" v-if="filteredHistory && filteredHistory.length >= 10">
        <button class="px-12 py-4 text-sm font-black text-gray-700 hover:bg-gray-50 rounded-2xl transition-all border-2 border-gray-100">
          Load More History
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useApp } from '@/shared/composables/useApp';
import { 
  Armchair, MapPin, Clock, Zap, Monitor, Layout, 
  History, Plus, Calendar, ChevronRight
} from 'lucide-vue-next';
import { parseISO } from 'date-fns';
import { useSwal } from '@/shared/composables/useSwal';

const router = useRouter();
const { bookings, loadBookings, checkOutSeat, cancelBooking, extendSeatBooking } = useApp();
const { showConfirm, showSuccess, showError } = useSwal();

const now = ref(new Date());
let timer: any = null;
const historyFilter = ref<'all' | 'completed' | 'cancelled'>('all');

const activeBookings = computed(() => {
  return bookings.value.filter(b => 
    b.status === 'booked' || b.status === 'checked_in'
  ).sort((a, b) => new Date(a.booking_time).getTime() - new Date(b.booking_time).getTime());
});

const filteredHistory = computed(() => {
  const pastBookings = bookings.value.filter(b => 
    b.status === 'checked_out' || b.status === 'cancelled' || b.status === 'expired'
  ).sort((a, b) => new Date(b.booking_time).getTime() - new Date(a.booking_time).getTime());
  
  if (historyFilter.value === 'all') return pastBookings;
  if (historyFilter.value === 'completed') return pastBookings.filter(b => b.status === 'checked_out');
  if (historyFilter.value === 'cancelled') return pastBookings.filter(b => b.status === 'cancelled' || b.status === 'expired');
  
  return pastBookings;
});

const getTargetTime = (booking: any): Date | null => {
  const timeStr = booking.status === 'checked_in'
    ? (booking.scheduled_end_time || booking.endTime)
    : (booking.booking_time || booking.startTime);
  if (!timeStr) return null;
  try {
    const normalized = timeStr.includes('T') ? timeStr : timeStr.replace(' ', 'T');
    const d = new Date(normalized);
    return isNaN(d.getTime()) ? null : d;
  } catch { return null; }
};

const isOverdue = (booking: any): boolean => {
  const t = getTargetTime(booking);
  if (!t) return false;
  return t.getTime() <= now.value.getTime();
};

const getTimerLabel = (booking: any): string => {
  if (booking.status === 'checked_in') {
    return isOverdue(booking) ? 'Session Overtime' : 'Session Ends In';
  }
  return isOverdue(booking) ? 'Session Started' : 'Starts In';
};

const getRemainingTime = (booking: any) => {
  const target = getTargetTime(booking);
  if (!target) return '--:--:--';
  
  const diff = target.getTime() - now.value.getTime();
  if (diff <= 0) {
    // Show elapsed time for checked_in overtime
    if (booking.status === 'checked_in') {
      const elapsed = Math.abs(diff);
      const h = Math.floor(elapsed / 3600000);
      const m = Math.floor((elapsed % 3600000) / 60000);
      const s = Math.floor((elapsed % 60000) / 1000);
      return `+${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return '--:--:--';
  }
  
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const formatDate = (date: string | undefined) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const formatTime = (date: string | undefined) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });
};

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

const handleCheckIn = (id: number) => {
  router.push({ 
    name: 'student-qr-checkin', 
    query: { booking_id: id.toString() } 
  });
};

const handleCheckOut = async (id: number) => {
  if (await showConfirm('Check Out', 'Check out from this seat?', 'Yes, Check Out')) {
    await checkOutSeat(id);
    await loadBookings();
    showSuccess('Checked Out', 'You have successfully checked out.');
  }
};

const handleCancel = async (id: number) => {
  if (await showConfirm('Cancel Booking', 'Are you sure you want to cancel this booking?', 'Yes, Cancel')) {
    await cancelBooking(id);
    await loadBookings();
    showSuccess('Cancelled', 'Booking cancelled successfully.');
  }
};

const canExtend = (booking: any) => {
  const endTimeStr = booking.scheduled_end_time || booking.endTime;
  if (!endTimeStr) return false;
  const end = new Date(endTimeStr);
  const diffMinutes = (end.getTime() - now.value.getTime()) / 60000;
  // Rule: Can extend only if more than 10 minutes remain
  return diffMinutes >= 10;
};

const extendOptions = [
  { label: '5 min',  value: 5  },
  { label: '10 min', value: 10 },
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '45 min', value: 45 },
  { label: '1 hour', value: 60 },
];

const extendModal = ref({
  show: false,
  booking: null as any,
  selectedMinutes: 30,
  loading: false,
});

const getNewEndTime = (booking: any, addMinutes: number) => {
  const endStr = booking.scheduled_end_time || booking.endTime;
  if (!endStr) return '--';
  const end = new Date(endStr);
  end.setMinutes(end.getMinutes() + addMinutes);
  return end.toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit', hour12: true });
};

const handleExtend = (booking: any) => {
  extendModal.value = { show: true, booking, selectedMinutes: 30, loading: false };
};

const confirmExtend = async () => {
  const { booking, selectedMinutes } = extendModal.value;
  extendModal.value.loading = true;
  try {
    const success = await extendSeatBooking(booking.id, selectedMinutes);
    if (success) {
      extendModal.value.show = false;
      await loadBookings();
      showSuccess('Extended!', `Your session has been extended by ${selectedMinutes < 60 ? selectedMinutes + ' minutes' : '1 hour'}.`);
    }
  } catch (error: any) {
    showError('Extension Failed', error.response?.data?.message || 'Could not extend session. The seat might be booked by someone else or library is closing.');
  } finally {
    extendModal.value.loading = false;
  }
};

onMounted(async () => {
  await loadBookings();
  timer = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
