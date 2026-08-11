<template>
  <div class="bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden text-left font-outfit">
    <!-- Header -->
    <div class="flex items-center space-x-3 mb-5 border-b border-slate-100/80 pb-4 text-left">
      <div class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
        <Armchair class="w-4.5 h-4.5" />
      </div>
      <div>
        <h3 class="text-base font-bold text-slate-800 tracking-tight leading-snug">Active & Upcoming</h3>
        <p class="text-[11px] text-slate-400 font-medium">Your current seat reservations and upcoming sessions.</p>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-if="activeBookings.length === 0" class="text-center py-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
      <div class="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-3.5 shadow-sm">
        <Calendar class="w-5.5 h-5.5 text-slate-400" />
      </div>
      <p class="text-slate-500 text-xs font-semibold">No active reservations at the moment</p>
      <router-link to="/student/libraries" class="text-xs text-blue-600 font-bold hover:text-blue-700 hover:underline mt-2.5 inline-block">
        Book a Study Seat
      </router-link>
    </div>

    <!-- Active bookings list -->
    <div v-else class="space-y-4">
      <div 
        v-for="booking in activeBookings" 
        :key="booking.id" 
        class="p-5 bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md text-left relative group overflow-hidden"
      >
        <!-- Upper Row: Seat & Countdown -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <!-- Seat Icon Block -->
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center relative flex-shrink-0 border shadow-sm"
              :class="booking.status === 'checked_in' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-blue-50 text-blue-600 border-blue-200'"
            >
              <Armchair class="w-5.5 h-5.5" />
            </div>
            
            <!-- Seat details -->
            <div>
              <h4 class="font-bold text-slate-800 text-base">
                Seat {{ booking.seat?.seat_number }}
              </h4>
              <!-- Badge -->
              <span 
                class="inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-1 border"
                :class="booking.status === 'checked_in' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'"
              >
                {{ booking.status === 'checked_in' ? 'Active Now' : 'Upcoming Session' }}
              </span>
            </div>
          </div>

          <!-- Countdown timer -->
          <div class="bg-slate-50/80 border border-slate-100 rounded-xl px-3.5 py-2 text-right">
            <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1 block">
              {{ getTimerLabel(booking) }}
            </span>
            <span 
              class="text-sm font-bold font-mono tracking-tight leading-none" 
              :class="isOverdue(booking) ? 'text-rose-600' : (booking.status === 'checked_in' ? 'text-emerald-600' : 'text-blue-600')"
            >
              {{ getRemainingTime(booking) }}
            </span>
          </div>
        </div>

        <!-- Session ending soon warning -->
        <div 
          v-if="booking.status === 'checked_in' && isEndingSoon(booking)" 
          class="mb-3.5 p-3 bg-rose-50 border border-rose-100 rounded-xl flex items-center text-rose-700 text-xs font-semibold"
        >
          <AlertTriangle class="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" />
          <span>Your session ends in less than 15 minutes!</span>
        </div>

        <!-- Middle Details: Location, Time & Tags -->
        <div class="space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
          <!-- Library Name -->
          <div class="flex items-center">
            <MapPin class="w-3.5 h-3.5 mr-2 text-blue-600" />
            <span class="font-semibold text-slate-700">{{ booking.seat?.library?.name }}</span>
          </div>

          <!-- Booking Time range -->
          <div class="flex items-center">
            <Clock class="w-3.5 h-3.5 mr-2 text-slate-400" />
            <span>{{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}</span>
          </div>

          <!-- Feature badges -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span v-if="booking.seat?.has_computer" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-lg font-semibold">
              <Monitor class="w-3 h-3 mr-1 text-slate-400" /> PC Workspace
            </span>
            <span v-if="booking.seat?.near_window" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-lg font-semibold">
              <Layout class="w-3 h-3 mr-1 text-slate-400" /> Window
            </span>
            <span v-if="booking.seat && (booking.seat.socket_count ?? 0) > 0" class="flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-lg font-semibold">
              <Zap class="w-3 h-3 mr-1 text-slate-400" /> Plug ({{ booking.seat.socket_count }})
            </span>
          </div>
        </div>

        <!-- Lower Row: Dynamic Action Buttons -->
        <div class="mt-4 flex gap-2 pt-3 border-t border-slate-100">
          <button 
            v-if="booking.status === 'booked'"
            @click="handleCheckIn(booking.id)"
            class="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <span>Check In</span>
          </button>
          
          <button 
            v-if="booking.status === 'booked'"
            @click="handleCancel(booking.id)"
            class="flex-1 py-2 px-3 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          >
            Cancel
          </button>

          <button 
            v-if="booking.status === 'checked_in'"
            @click="handleCheckOut(booking.id)"
            class="flex-1 py-2 px-3 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          >
            Check Out
          </button>

          <button 
            v-if="booking.status === 'checked_in'"
            @click="handleExtend(booking)"
            class="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            Extend
          </button>
        </div> 
      </div>
    </div>

    <!-- Seat Extension Modal -->
    <SeatExtensionModal
      :show="extensionModal.show"
      :booking="extensionModal.booking"
      @close="extensionModal.show = false"
      @success="loadBookings"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useApp } from '@/shared/composables/useApp';
import { Calendar, Clock, MapPin, Armchair, Monitor, Zap, Layout, AlertTriangle } from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';
import SeatExtensionModal from '../Seats/SeatExtensionModal.vue';

const { bookings, loadBookings, checkOutSeat, cancelBooking } = useApp();
const router = useRouter();
const { showConfirm, showSuccess } = useSwal();

const now = ref(new Date());
const extensionModal = ref({
  show: false,
  booking: null as any
});
let timer: any = null;

const activeBookings = computed(() => 
  bookings.value
    .filter(b => b.status === 'booked' || b.status === 'checked_in')
    .slice(0, 3)
);

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
    return isOverdue(booking) ? 'Overtime' : 'Remaining';
  }
  return isOverdue(booking) ? 'Expired' : 'Check-in Time Left';
};

const getRemainingTime = (booking: any) => {
  const target = getTargetTime(booking);
  if (!target) return '--:--:--';

  const diff = target.getTime() - now.value.getTime();
  if (diff <= 0) {
    if (booking.status === 'checked_in') {
      const elapsed = Math.abs(diff);
      const h = Math.floor(elapsed / 3600000);
      const m = Math.floor((elapsed % 3600000) / 60000);
      const s = Math.floor((elapsed % 60000) / 1000);
      return `+${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return '00:00:00';
  }

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  
  if (booking.status === 'booked') {
    // For check-in countdown, display HH:MM:SS if there is an hour or more, otherwise MM:SS
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const formatTime = (dateStr: string) => {
  return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const handleCheckIn = (id: number) => {
  router.push({ name: 'student-qr-checkin', query: { booking_id: id.toString() } });
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

const isEndingSoon = (booking: any) => {
  const endTimeStr = booking.scheduled_end_time || booking.endTime;
  if (!endTimeStr) return false;
  const end = new Date(endTimeStr);
  const diffMinutes = (end.getTime() - now.value.getTime()) / 60000;
  return diffMinutes > 0 && diffMinutes <= 15;
};

const handleExtend = (booking: any) => {
  extensionModal.value = {
    show: true,
    booking
  };
};

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
@keyframes pingFast {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping-fast {
  animation: pingFast 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}
</style>
