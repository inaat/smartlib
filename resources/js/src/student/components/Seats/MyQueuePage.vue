<template>
  <div class="space-y-8 pb-12">
    <!-- Header Section -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">My Waitlist</h1>
          <p class="text-gray-500 mt-1">Track your position and estimated wait time for reserved seats</p>
        </div>
      </div>
    </div>

    <!-- Active Waitlist Section -->
    <div class="space-y-6">
      <div v-if="loading" class="flex justify-center py-20">
        <div class="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div v-else-if="queueEntries.length === 0" class="bg-white rounded-3xl p-16 text-center border border-dashed border-gray-200">
        <div class="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock class="w-10 h-10 text-orange-200" />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Waitlist is Empty</h3>
        <p class="text-gray-500 max-w-xs mx-auto mb-8">You haven't joined any seat queues yet. When a seat is ending soon, you can join the waitlist from the library map.</p>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
        >
          Explore Libraries
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div 
          v-for="entry in queueEntries" 
          :key="entry.id"
          class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all group relative overflow-hidden"
        >
          <!-- Progress Indicator -->
          <div class="absolute bottom-0 left-0 h-1.5 bg-orange-100 w-full">
            <div 
              class="h-full bg-orange-500 transition-all duration-1000"
              :style="{ width: getProgressWidth(entry) }"
            ></div>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div class="flex items-start gap-6">
              <div :class="[
                'p-5 rounded-2xl transition-all duration-300',
                entry.status === 'notified' ? 'bg-green-100 text-green-600 animate-pulse' : 'bg-orange-50 text-orange-600'
              ]">
                <Clock class="w-10 h-10" />
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h3 class="font-black text-gray-900 text-2xl">Seat {{ entry.seat?.seat_number }}</h3>
                  <span :class="[
                    'px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight',
                    entry.status === 'notified' ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-700'
                  ]">
                    {{ entry.status === 'notified' ? 'Ready to Check In' : `Position #${entry.queue_position}` }}
                  </span>
                </div>
                <p class="text-gray-500 text-lg flex items-center font-medium">
                  <MapPin class="w-5 h-5 mr-1.5 text-red-400" />
                  {{ entry.seat?.library?.name }} • {{ entry.seat?.floor?.name }}
                </p>
                
                <div v-if="entry.status === 'notified'" class="mt-4 p-3 bg-green-50 rounded-xl border border-green-100 text-green-700 text-xs font-bold flex items-center">
                  <Zap class="w-4 h-4 mr-2" />
                  Seat is now free! You have 10 minutes to check in before your spot is given to the next person.
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:items-end gap-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-50">
              <div class="lg:text-right">
                <p class="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Estimated Wait</p>
                <p class="text-4xl font-black text-gray-800 font-mono tracking-tighter">
                  {{ entry.status === 'notified' ? 'NOW' : formatWaitTime(entry.estimated_wait_time) }}
                </p>
              </div>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-if="entry.status === 'notified'"
                  @click="handleCheckIn(entry.seat_id)"
                  class="flex-1 lg:flex-none px-10 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
                >
                  Check In Now
                </button>
                <button 
                  @click="handleCancel(entry.id)"
                  class="flex-1 lg:flex-none px-10 py-4 bg-white border-2 border-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all active:scale-95"
                >
                  Leave Queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
      <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100">
        <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
          <Bell class="w-5 h-5" />
        </div>
        <h4 class="font-bold text-blue-900 mb-2">Smart Notifications</h4>
        <p class="text-xs text-blue-700 leading-relaxed">We'll notify you via push and SMS as soon as your seat is ready. Make sure you're near the library.</p>
      </div>
      <div class="bg-purple-50 p-6 rounded-3xl border border-purple-100">
        <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
          <Zap class="w-5 h-5" />
        </div>
        <h4 class="font-bold text-purple-900 mb-2">10-Minute Window</h4>
        <p class="text-xs text-purple-700 leading-relaxed">Once notified, you have exactly 10 minutes to check in. If you miss it, the seat goes to the next student.</p>
      </div>
      <div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
        <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
          <Armchair class="w-5 h-5" />
        </div>
        <h4 class="font-bold text-emerald-900 mb-2">Queue Priority</h4>
        <p class="text-xs text-emerald-700 leading-relaxed">Current students cannot extend their bookings if someone is waiting in the queue. Your priority is protected.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { studentAPI } from '@/shared/services/api';
import { Clock, MapPin, Zap, Bell, Armchair } from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';

const router = useRouter();
const { showConfirm, showSuccess, showError } = useSwal();
const loading = ref(true);
const queueEntries = ref<any[]>([]);

const fetchQueue = async () => {
  try {
    loading.value = true;
    queueEntries.value = await studentAPI.getMyQueue();
  } catch (error) {
    console.error('Failed to fetch queue:', error);
  } finally {
    loading.value = false;
  }
};

const formatWaitTime = (minutes: number) => {
  if (minutes <= 0) return 'READY';
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

const getProgressWidth = (entry: any) => {
  if (entry.status === 'notified') return '100%';
  // Dummy progress based on position
  const pos = entry.queue_position;
  if (pos === 1) return '75%';
  if (pos === 2) return '50%';
  return '25%';
};

const handleCheckIn = (seatId: number) => {
  router.push({
    name: 'student-qr-checkin',
    query: { auto_checkin: 'true', seat_id: seatId.toString() }
  });
};

const handleCancel = async (id: number) => {
  const confirmed = await showConfirm(
    'Leave Waitlist?', 
    'Are you sure you want to leave the queue? You will lose your current position.',
    'Yes, Leave'
  );
  
  if (confirmed) {
    try {
      // We don't have a specific leaveQueue API yet, but we can reuse cancelBooking if it's implemented for queue
      // Or just a general queue leave. Let's assume studentAPI.leaveQueue (I'll add it)
      await studentAPI.leaveQueue(id);
      showSuccess('Left Waitlist', 'You have been removed from the queue.');
      fetchQueue();
    } catch (error) {
      showError('Error', 'Failed to leave the queue.');
    }
  }
};

onMounted(fetchQueue);
</script>
