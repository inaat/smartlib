<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Action Row -->
    <div class="flex justify-end">
      <router-link 
        to="/student/libraries" 
        class="inline-flex items-center px-4 py-2.5 bg-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-blue-500/10 active:scale-98 transition-all uppercase tracking-wider"
      >
        <Plus class="w-4.5 h-4.5 mr-1.5" />
        Book New Seat
      </router-link>
    </div>

    <!-- Active Bookings Section -->
    <div class="space-y-4">
      <div class="flex items-center justify-between px-1">
        <h2 class="text-sm font-extrabold text-slate-700 uppercase tracking-wider flex items-center">
          <Clock class="w-4 h-4 mr-2 text-blue-600" />
          Current & Upcoming
        </h2>
      </div>

      <div v-if="activeBookings.length === 0" class="bg-slate-100 rounded-2xl p-16 text-center border border-dashed border-slate-200/80">
        <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
          <Armchair class="w-7 h-7" />
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-1">No Active Bookings</h3>
        <p class="text-xs text-slate-400 max-w-xs mx-auto mb-6 leading-relaxed">You don't have any active seat reservations at the moment. Find a library to book your spot!</p>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:opacity-90 active:scale-98 transition-all uppercase tracking-wider"
        >
          Explore Libraries
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div 
          v-for="booking in activeBookings" 
          :key="booking.id"
          class="bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 group relative overflow-hidden text-left"
        >
          <!-- Status Banner for Active now -->
          <div v-if="booking.status === 'checked_in'" class="absolute top-0 right-0 px-3.5 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[9px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm border border-emerald-400/20">
            Active Now
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div :class="[
                'p-4 rounded-xl border flex-shrink-0 transition-all duration-300',
                booking.status === 'checked_in' ? 'bg-emerald-50/60 border-emerald-100 text-emerald-600' : 'bg-blue-50/60 border-blue-100 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:border-blue-500'
              ]">
                <Armchair class="w-8 h-8" />
              </div>
              <div class="space-y-1 min-w-0">
                <div class="flex items-center gap-2">
                  <h3 class="font-extrabold text-slate-800 text-lg">Seat {{ booking.seat?.seat_number }}</h3>
                  <span :class="[
                    'px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wide border',
                    booking.status === 'checked_in' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-blue-50 text-blue-700 border-blue-100'
                  ]">
                    #{{ booking.id }}
                  </span>
                </div>
                <p class="text-slate-500 text-xs flex items-center font-semibold">
                  <MapPin class="w-4 h-4 mr-1 text-slate-400" />
                  {{ booking.seat?.library?.name }}
                </p>
                <div class="flex flex-wrap gap-1.5 pt-2">
                  <span v-if="booking.seat?.has_computer" class="flex items-center text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-lg font-bold">
                    <Monitor class="w-3.5 h-3.5 mr-1" /> PC Included
                  </span>
                  <span v-if="booking.seat?.near_window" class="flex items-center text-[10px] bg-yellow-50 text-yellow-700 border border-yellow-100/50 px-2.5 py-1 rounded-lg font-bold">
                    <Layout class="w-3.5 h-3.5 mr-1" /> Near Window
                  </span>
                  <span v-if="booking.seat && booking.seat.socket_count > 0" class="flex items-center text-[10px] bg-green-50 text-green-700 border border-green-100/50 px-2.5 py-1 rounded-lg font-bold">
                    <Zap class="w-3.5 h-3.5 mr-1" /> {{ booking.seat.socket_count }} Socket
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:items-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-50 flex-shrink-0">
              <div class="lg:text-right">
                <p class="text-[9px] font-extrabold uppercase tracking-widest mb-1" :class="isOverdue(booking) ? 'text-red-550' : 'text-slate-400'">{{ getTimerLabel(booking) }}</p>
                <p class="text-3xl font-black font-mono tracking-tight leading-none" :class="isOverdue(booking) ? 'text-red-500' : 'text-slate-800'">
                  {{ getRemainingTime(booking) }}
                </p>
              </div>
              <div class="flex flex-wrap gap-2.5">
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCheckIn(booking.id)"
                  class="flex-1 lg:flex-none px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-emerald-500/10 hover:opacity-95 active:scale-98 transition-all"
                >
                  Check In
                </button>
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCancel(booking.id)"
                  class="flex-1 lg:flex-none px-5 py-2 bg-white border border-red-200 text-red-500 rounded-xl text-xs font-bold hover:bg-red-50 active:scale-98 transition-all"
                >
                  Cancel
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleCheckOut(booking.id)"
                  class="flex-1 lg:flex-none px-5 py-2 bg-red-500 text-white rounded-xl text-xs font-extrabold shadow-md shadow-orange-500/10 hover:opacity-95 active:scale-98 transition-all whitespace-nowrap"
                >
                  Check Out
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleExtend(booking)"
                  class="flex-1 lg:flex-none px-5 py-2 bg-green-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-indigo-500/10 hover:opacity-95 active:scale-98 transition-all whitespace-nowrap"
                >
                  Extend Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seat Extension Modal -->
    <SeatExtensionModal
      :show="extendModal.show"
      :booking="extendModal.booking"
      @close="extendModal.show = false"
      @success="loadBookings"
    />

    <!-- Booking History Section -->
    <div class="pt-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 class="text-sm font-extrabold text-slate-700 uppercase tracking-wider flex items-center px-1">
          <History class="w-4 h-4 mr-2 text-purple-600" />
          Booking History
        </h2>
        <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit">
          <button 
            v-for="filter in ['all', 'completed', 'cancelled']" 
            :key="filter"
            @click="historyFilter = filter as any"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide transition-all',
              historyFilter === filter ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div v-if="!filteredHistory || filteredHistory.length === 0" class="bg-slate-50/30 rounded-2xl p-16 text-center border border-slate-100">
        <Clock class="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">No past bookings found.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="booking in filteredHistory" 
          :key="booking.id"
          class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group text-left"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div :class="[
                'p-2.5 rounded-xl border',
                booking.status === 'checked_out' ? 'bg-emerald-50/50 border-emerald-100 text-emerald-600' :
                booking.status === 'cancelled' ? 'bg-red-50/50 border-red-100 text-red-600' :
                'bg-slate-50 border-slate-100 text-slate-500'
              ]">
                <Armchair class="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm">Seat {{ booking.seat?.seat_number }}</h3>
                <p class="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5">ID #{{ booking.id }}</p>
              </div>
            </div>
            <span :class="[
              'px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border',
              booking.status === 'checked_out' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
              booking.status === 'cancelled' ? 'bg-red-50 text-red-700 border-red-100' :
              'bg-slate-50 text-slate-700 border-slate-100'
            ]">
              {{ booking.status.replace('_', ' ') }}
            </span>
          </div>
          
          <div class="space-y-2.5 pt-3.5 border-t border-slate-50 text-xs text-slate-500">
            <div class="flex items-center">
              <MapPin class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
              <span class="font-semibold truncate">{{ booking.seat?.library?.name }}</span>
            </div>
            <div class="flex items-center">
              <Calendar class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
              <span class="font-semibold">{{ formatDate(booking.booking_time) }}</span>
            </div>
            <div class="flex items-center">
              <Clock class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
              <span class="font-semibold">{{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}</span>
            </div>
            <div v-if="booking.total_minutes" class="flex items-center text-blue-600 font-bold pt-1.5 border-t border-slate-50/50">
              <Zap class="w-4 h-4 mr-2 text-blue-500" />
              Duration: {{ formatDuration(booking.total_minutes) }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Load More Button -->
      <div class="mt-8 text-center" v-if="filteredHistory && filteredHistory.length >= 10">
        <button class="px-8 py-3 text-xs font-black text-slate-600 hover:bg-slate-50 rounded-xl transition-all border border-slate-200/80 active:scale-98 shadow-sm">
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
  History, Plus, Calendar
} from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';
import SeatExtensionModal from './SeatExtensionModal.vue';

const router = useRouter();
const { bookings, loadBookings, checkOutSeat, cancelBooking } = useApp();
const { showConfirm, showSuccess } = useSwal();

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
  if (booking.status === 'checked_in') {
    const timeStr = booking.scheduled_end_time || booking.endTime;
    if (!timeStr) return null;
    try {
      const normalized = timeStr.includes('T') ? timeStr : timeStr.replace(' ', 'T');
      const d = new Date(normalized);
      return isNaN(d.getTime()) ? null : d;
    } catch { return null; }
  }

  // For 'booked' state, countdown is the 15-minute check-in window from the booking start time
  const timeStr = booking.booking_time || booking.startTime;
  if (!timeStr) return null;
  try {
    const normalized = timeStr.includes('T') ? timeStr : timeStr.replace(' ', 'T');
    const d = new Date(normalized);
    if (isNaN(d.getTime())) return null;
    // The check-in window expires 15 minutes after the booking start time
    return new Date(d.getTime() + 15 * 60 * 1000);
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
  return isOverdue(booking) ? 'Expired' : 'Check-in Time Left';
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
    return '00:00';
  }
  
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  
  if (booking.status === 'booked') {
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
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

const extendModal = ref({
  show: false,
  booking: null as any,
});

const handleExtend = (booking: any) => {
  extendModal.value = { show: true, booking };
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
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

.bg-indigo-600 {
  background-color: #4f46e5;
}
.bg-indigo-600:hover {
  background-color: #4338ca;
}
.shadow-indigo-500\/15 {
  box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.15);
}
</style>
