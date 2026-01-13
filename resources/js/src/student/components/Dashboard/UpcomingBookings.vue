<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
      <Calendar class="w-5 h-5 mr-2 text-blue-600" />
      Active & Upcoming
    </h2>
    
    <div v-if="activeBookings.length === 0" class="text-center py-8">
      <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
        <Calendar class="w-6 h-6 text-gray-300" />
      </div>
      <p class="text-gray-500 text-sm">No active bookings</p>
      <router-link to="/student/libraries" class="text-xs text-blue-600 hover:underline mt-2 inline-block">Book a seat now</router-link>
    </div>

    <div v-else class="space-y-4">
      <div 
        v-for="booking in activeBookings" 
        :key="booking.id" 
        class="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group"
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center">
            <div class="p-2 bg-white rounded-lg shadow-sm mr-3 group-hover:text-blue-600">
              <Armchair class="w-4 h-4" />
            </div>
            <div>
              <h3 class="font-bold text-gray-800 text-sm">
                Seat {{ booking.seat?.seat_number }}
              </h3>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                {{ booking.status === 'checked_in' ? 'Active Now' : 'Reserved' }}
              </p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[10px] text-gray-400 font-bold uppercase">Remaining</p>
            <p class="text-sm font-black text-blue-600 font-mono">{{ getRemainingTime(booking) }}</p>
          </div>
        </div>
        
        <div class="space-y-2 text-xs text-gray-600">
          <div class="flex items-center">
            <MapPin class="w-3.5 h-3.5 mr-2 text-gray-400" />
            {{ booking.seat?.library?.name }}
          </div>
          <div class="flex items-center">
            <Clock class="w-3.5 h-3.5 mr-2 text-gray-400" />
            {{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}
          </div>
          <div class="flex flex-wrap gap-2 mt-1">
            <span v-if="booking.seat?.has_computer" class="flex items-center text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md">
              <Monitor class="w-2.5 h-2.5 mr-1" /> PC
            </span>
            <span v-if="booking.seat?.near_window" class="flex items-center text-[9px] bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded-md">
              <Layout class="w-2.5 h-2.5 mr-1" /> Window
            </span>
            <span v-if="booking.seat?.socket_count > 0" class="flex items-center text-[9px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded-md">
              <Zap class="w-2.5 h-2.5 mr-1" /> {{ booking.seat.socket_count }} Sockets
            </span>
          </div>
        </div>
        
        <div class="mt-4 flex gap-2">
          <button 
            v-if="booking.status === 'booked'"
            @click="handleCheckIn(booking.id)"
            class="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Check In
          </button>
          <button 
            v-if="booking.status === 'booked'"
            @click="handleCancel(booking.id)"
            class="flex-1 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button 
            v-if="booking.status === 'checked_in'"
            @click="handleCheckOut(booking.id)"
            class="flex-1 py-2 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useApp } from '@/shared/composables/useApp';
import { Calendar, Clock, MapPin, Armchair, Monitor, Zap, Layout } from 'lucide-vue-next';

const { bookings, loadBookings, checkInSeat, checkOutSeat, extendSeatBooking, cancelBooking } = useApp();
const now = ref(new Date());
let timer: any = null;



const activeBookings = computed(() => 
  bookings.value
    .filter(b => b.status === 'booked' || b.status === 'checked_in')
    .slice(0, 3)
);





const getRemainingTime = (booking: any) => {
  const end = new Date(booking.scheduled_end_time);
  const diff = end.getTime() - now.value.getTime();
  
  if (diff <= 0) return '00:00:00';
  
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const formatTime = (dateStr: string) => {
  return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess } = useSwal();

const handleCheckIn = async (id: number) => {
  if (await showConfirm('Check In', 'Check in to this seat?', 'Yes, Check In')) {
    await checkInSeat(id, 'MOCK_QR');
    await loadBookings();
    showSuccess('Checked In', 'You have successfully checked in.');
  }
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
    showSuccess('Cancelled', 'Booking cancelled successfully.');
  }
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
