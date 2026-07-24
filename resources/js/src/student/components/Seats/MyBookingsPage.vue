<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Action Row -->
    <div class="flex justify-end">
      <router-link 
        to="/student/libraries" 
        class="inline-flex items-center px-4 py-2.5 bg-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 active:scale-98 transition-all uppercase tracking-wider"
      >
        <Plus class="w-4.5 h-4.5 mr-1.5" />
        Book New Seat
      </router-link>
    </div>

    <!-- Active Bookings Section -->
    <div class="space-y-4">
      <div class="flex items-center justify-between px-1">
        <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center">
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
          class="bg-white rounded-3xl p-6 border border-slate-100/60 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-350 group relative overflow-hidden text-left"
        >
          <!-- Active Now floating badge -->
          <div class="absolute top-4 right-4 flex items-center gap-2">
            <span v-if="booking.status === 'checked_in'" class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Active Now
            </span>
            <span v-else class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Upcoming Session
            </span>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <!-- Left Info Area -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-5 flex-1 min-w-0">
              <!-- Chair Icon Wrapper with gradient glow -->
              <div :class="[
                'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-inner',
                booking.status === 'checked_in' 
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 border border-emerald-100/70' 
                  : 'bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 border border-blue-100/70 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white'
              ]">
                <Armchair class="w-7 h-7" />
              </div>

              <!-- Main details -->
              <div class="space-y-1.5 min-w-0">
                <div class="flex items-center gap-2.5">
                  <h3 class="font-bold text-slate-800 text-xl tracking-tight">Seat {{ booking.seat?.seat_number }}</h3>
                  <span class="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100/70 font-mono">
                    #{{ booking.id }}
                  </span>
                </div>
                
                <p class="text-slate-500 text-xs flex items-center font-semibold">
                  <MapPin class="w-4 h-4 mr-1 text-slate-400" />
                  {{ booking.seat?.library?.name }}
                </p>

                <!-- Amenities list -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span v-if="booking.seat?.has_computer" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold">
                    <Monitor class="w-3.5 h-3.5 mr-1 text-slate-450" /> PC Included
                  </span>
                  <span v-if="booking.seat?.near_window" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold">
                    <Layout class="w-3.5 h-3.5 mr-1 text-slate-450" /> Window
                  </span>
                  <span v-if="booking.seat && booking.seat.socket_count > 0" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold">
                    <Zap class="w-3.5 h-3.5 mr-1 text-slate-450" /> {{ booking.seat.socket_count }} Plug
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Countdown & Actions Area -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-5 flex-shrink-0 border-t lg:border-t-0 pt-5 lg:pt-0 border-slate-50">
              <!-- Styled Countdown Box -->
              <div class="bg-slate-50/70 border border-slate-100/80 rounded-2xl px-5 py-3.5 min-w-[160px] text-center sm:text-left flex flex-col justify-center">
                <p 
                  class="text-[9px] font-bold uppercase tracking-widest mb-1.5" 
                  :class="isOverdue(booking) ? 'text-red-550' : 'text-slate-400'"
                >
                  {{ getTimerLabel(booking) }}
                </p>
                <p 
                  class="text-2xl font-black font-mono tracking-tight leading-none" 
                  :class="isOverdue(booking) ? 'text-red-550' : 'text-slate-800'"
                >
                  {{ getRemainingTime(booking) }}
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="flex sm:flex-col lg:flex-row gap-2.5 justify-center sm:justify-start min-w-[140px]">
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCheckIn(booking.id)"
                  class="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold active:scale-98 transition-all uppercase tracking-wider text-center"
                >
                  Check In
                </button>
                <button 
                  v-if="booking.status === 'booked'"
                  @click="handleCancel(booking.id)"
                  class="flex-1 px-5 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold hover:bg-slate-50 active:scale-98 transition-all uppercase tracking-wider text-center"
                >
                  Cancel
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleCheckOut(booking.id)"
                  class="flex-1 px-5 py-3 bg-rose-50 text-rose-600 border border-rose-100/60 rounded-xl text-xs font-bold hover:bg-rose-100/60 active:scale-98 transition-all uppercase tracking-wider text-center whitespace-nowrap"
                >
                  Check Out
                </button>
                <button 
                  v-if="booking.status === 'checked_in'"
                  @click="handleExtend(booking)"
                  class="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold active:scale-98 transition-all uppercase tracking-wider text-center whitespace-nowrap"
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
        <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center px-1">
          <History class="w-4 h-4 mr-2 text-purple-600" />
          Booking History
        </h2>
        <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit">
          <button 
            v-for="filter in ['all', 'completed', 'cancelled']" 
            :key="filter"
            @click="historyFilter = filter as any"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all',
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

      <div v-else class="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400">
              <th class="px-6 py-3.5">Seat</th>
              <th class="px-6 py-3.5">Library</th>
              <th class="px-6 py-3.5">Date</th>
              <th class="px-6 py-3.5">Scheduled Time</th>
              <th class="px-6 py-3.5 text-center">Duration</th>
              <th class="px-6 py-3.5 text-right">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="booking in filteredHistory" :key="booking.id" class="hover:bg-slate-50/30 transition-colors group">
              <!-- Seat Info -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3">
                  <div :class="[
                    'w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all duration-300',
                    booking.status === 'checked_out' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                    booking.status === 'cancelled' ? 'bg-red-50 border-red-100 text-red-600' :
                    'bg-slate-50 border-slate-100 text-slate-500'
                  ]">
                    <Armchair class="w-4 h-4" />
                  </div>
                  <div class="text-left">
                    <div class="text-xs font-bold text-slate-800 leading-snug">Seat {{ booking.seat?.seat_number }}</div>
                    <div class="text-[9px] text-slate-400 font-bold uppercase mt-0.5 leading-none">ID #{{ booking.id }}</div>
                  </div>
                </div>
              </td>
              <!-- Library -->
              <td class="px-6 py-4 text-left whitespace-nowrap">
                <div class="text-xs font-bold text-slate-700 flex items-center">
                  <MapPin class="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                  {{ booking.seat?.library?.name || 'N/A' }}
                </div>
              </td>
              <!-- Date -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center text-xs font-bold text-slate-700">
                  <Calendar class="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                  {{ formatDate(booking.booking_time) }}
                </div>
              </td>
              <!-- Time Window -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center text-xs font-semibold text-slate-500">
                  <Clock class="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                  {{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}
                </div>
              </td>
              <!-- Duration -->
              <td class="px-6 py-4 text-center whitespace-nowrap">
                <div v-if="booking.total_minutes" class="flex items-center justify-center text-xs font-bold text-blue-600">
                  <Zap class="w-3.5 h-3.5 mr-1 text-blue-500" />
                  {{ formatDuration(booking.total_minutes) }}
                </div>
                <div v-else class="text-xs text-slate-400">--</div>
              </td>
              <!-- Status -->
              <td class="px-6 py-4 text-right whitespace-nowrap">
                <span :class="[
                  'text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border',
                  booking.status === 'checked_out' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                  booking.status === 'cancelled' ? 'bg-red-50 text-red-700 border-red-100' :
                  'bg-slate-50 text-slate-700 border-slate-100'
                ]">
                  {{ booking.status.replace('_', ' ') }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Load More Button -->
      <div class="mt-8 text-center" v-if="filteredHistory && filteredHistory.length >= 10">
        <button class="px-8 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all border border-slate-200/80 active:scale-98 shadow-sm">
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
