<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Active Waitlist Section -->
    <div class="space-y-4">
      <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
        <div class="animate-spin rounded-full h-10 w-10 border-2 border-orange-500 border-t-transparent"></div>
        <p class="text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse">Loading waitlist...</p>
      </div>

      <div v-else-if="queueEntries.length === 0" class="bg-slate-100 rounded-2xl p-16 text-center border border-dashed border-slate-200/80">
        <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
          <Clock class="w-7 h-7" />
        </div>
        <h3 class="text-base font-semibold text-slate-800 mb-1">Waitlist is Empty</h3>
        <p class="text-xs text-slate-400 max-w-xs mx-auto mb-6 leading-relaxed">You haven't joined any seat queues yet. When a seat is ending soon, you can join the waitlist from the library map.</p>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:opacity-90 active:scale-98 transition-all uppercase tracking-wider"
        >
          Explore Libraries
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div 
          v-for="entry in queueEntries" 
          :key="entry.id"
          class="bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 group relative overflow-hidden text-left"
        >
          <!-- Progress Indicator -->
          <div class="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
            <div 
              class="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-1000"
              :style="{ width: getProgressWidth(entry) }"
            ></div>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div :class="[
                'p-4 rounded-xl border flex-shrink-0 transition-all duration-300',
                entry.status === 'notified' ? 'bg-green-50 border-green-200 text-green-600 animate-pulse' : 'bg-orange-50/60 border-orange-100 text-orange-600'
              ]">
                <Clock class="w-8 h-8" />
              </div>
              <div class="space-y-1 min-w-0">
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold text-slate-800 text-lg">Seat {{ entry.seat?.seat_number }}</h3>
                  <span :class="[
                    'px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wide border',
                    entry.status === 'notified' ? 'bg-green-100 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                  ]">
                    {{ entry.status === 'notified' ? 'Ready' : `Pos #${entry.queue_position}` }}
                  </span>
                </div>
                <p class="text-slate-500 text-xs flex items-center font-semibold">
                  <MapPin class="w-4 h-4 mr-1 text-slate-400" />
                  {{ entry.seat?.library?.name }} • {{ entry.seat?.floor?.name }}
                </p>
                
                <div v-if="entry.status === 'notified'" class="mt-3 p-3 bg-green-50/60 border border-green-100 text-green-700 text-[11px] font-medium rounded-xl flex items-center leading-relaxed">
                  <Zap class="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                  Seat is now free! You have 10 minutes to check in before your spot is given to the next person.
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:items-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-50 flex-shrink-0">
              <div class="lg:text-right">
                <p class="text-[9px] font-semibold uppercase tracking-widest mb-1 text-slate-400">Estimated Wait</p>
                <p class="text-3xl font-black text-slate-800 font-mono tracking-tight leading-none">
                  {{ entry.status === 'notified' ? 'NOW' : formatWaitTime(entry.estimated_wait_time) }}
                </p>
              </div>
              <div class="flex flex-wrap gap-2.5">
                <button 
                  v-if="entry.status === 'notified'"
                  @click="handleCheckIn(entry.seat_id)"
                  class="flex-1 lg:flex-none px-6 py-2 bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-emerald-500/10 hover:bg-emerald-600 active:scale-98 transition-all"
                >
                  Check In Now
                </button>
                <button 
                  @click="handleCancel(entry.id)"
                  class="flex-1 lg:flex-none px-6 py-2 bg-white border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-500 rounded-xl text-xs font-semibold active:scale-98 transition-all"
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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
      <div class="bg-blue-50/40 p-5 rounded-2xl border border-blue-100/50 text-left">
        <div class="w-9 h-9 bg-blue-100/60 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3">
          <Bell class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-semibold text-blue-900 text-xs uppercase tracking-wide mb-1.5">Smart Notifications</h4>
        <p class="text-[11px] text-blue-700/90 leading-relaxed font-semibold">We'll notify you via push and SMS as soon as your seat is ready. Make sure you're near the library.</p>
      </div>
      <div class="bg-purple-50/40 p-5 rounded-2xl border border-purple-100/50 text-left">
        <div class="w-9 h-9 bg-purple-100/60 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-3">
          <Zap class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-semibold text-purple-900 text-xs uppercase tracking-wide mb-1.5">10-Minute Window</h4>
        <p class="text-[11px] text-purple-700/90 leading-relaxed font-semibold">Once notified, you have exactly 10 minutes to check in. If you miss it, the seat goes to the next student.</p>
      </div>
      <div class="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100/50 text-left">
        <div class="w-9 h-9 bg-emerald-100/60 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
          <Armchair class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-semibold text-emerald-900 text-xs uppercase tracking-wide mb-1.5">Queue Priority</h4>
        <p class="text-[11px] text-emerald-700/90 leading-relaxed font-semibold">Current students cannot extend their bookings if someone is waiting in the queue. Your priority is protected.</p>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
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
.scale-102 {
  transform: scale(1.02);
}
</style>
