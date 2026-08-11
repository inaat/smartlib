<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Active Waitlist Section -->
    <div class="space-y-4">
      <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
        <div class="animate-spin rounded-full h-10 w-10 border-2 border-emerald-500 border-t-transparent"></div>
        <p class="text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse">Loading queue status...</p>
      </div>

      <div v-else-if="queueEntries.length === 0" class="bg-white rounded-3xl p-14 text-center border border-dashed border-slate-200 shadow-sm">
        <div class="w-16 h-16 bg-slate-50 text-slate-500 rounded-4xl flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
          <Clock class="w-7 h-7" />
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-1">Waitlist is Empty</h3>
        <p class="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">You haven't joined any seat queues yet. When a seat is free soon, you can join the queue to claim the seat!</p>
        <router-link 
          to="/student/libraries" 
          class="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all shadow-sm cursor-pointer"
        >
          Explore Libraries
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div 
          v-for="entry in queueEntries" 
          :key="entry.id"
          :class="[
            'bg-white rounded-3xl p-6 border shadow-sm transition-all duration-300 relative overflow-hidden text-left',
            entry.status === 'notified' ? 'border-emerald-300 ring-2 ring-emerald-500/20 shadow-md' : 'border-slate-100 hover:border-slate-200'
          ]"
        >
          <!-- Top Status Tag -->
          <div class="absolute top-5 right-6 flex items-center gap-2">
            <span 
              v-if="entry.status === 'notified'" 
              class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold uppercase tracking-wider"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              YOUR TURN TO BOOK!
            </span>
            <span 
              v-else 
              class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-bold uppercase tracking-wider"
            >
              Position #{{ entry.queue_position }}
            </span>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <!-- Left Info Area -->
            <div class="flex items-start gap-5 flex-1 min-w-0">
              <div :class="[
                'w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border shadow-sm transition-all',
                entry.status === 'notified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200 animate-bounce' : 'bg-amber-50 text-amber-600 border-amber-200'
              ]">
                <Armchair class="w-7 h-7" />
              </div>
              
              <div class="space-y-1.5 min-w-0">
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-slate-800 text-lg tracking-tight">Seat {{ entry.seat?.seat_number }}</h3>
                  <span class="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100 font-mono">
                    #{{ entry.seat_id }}
                  </span>
                </div>
                
                <p class="text-slate-600 text-xs flex items-center font-medium">
                  <MapPin class="w-3.5 h-3.5 mr-1.5 text-amber-600 flex-shrink-0" />
                  <span>{{ entry.seat?.library?.name }}</span>
                  <span v-if="entry.seat?.floor?.name" class="mx-1.5 text-slate-300">•</span>
                  <span v-if="entry.seat?.floor?.name" class="text-slate-400">{{ entry.seat.floor.name }}</span>
                </p>

                <!-- Priority Claim Alert Banner -->
                <div v-if="entry.status === 'notified'" class="mt-3 p-3.5 bg-emerald-50/90 border border-emerald-200/80 text-emerald-900 text-xs rounded-2xl flex items-start space-x-2.5 shadow-2xs">
                  <Zap class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 animate-pulse" />
                  <div class="leading-relaxed font-medium">
                    <span class="font-bold">You have 5 minutes to reserve this seat!</span>
                    If you do not book within the 5-minute window, your spot will move to the next queued student.
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Countdown & Actions Area -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
              <!-- Live Timer Box -->
              <div :class="[
                'border rounded-2xl px-5 py-3 min-w-[160px] text-center sm:text-left flex flex-col justify-center',
                entry.status === 'notified' ? 'bg-emerald-50/80 border-emerald-200' : 'bg-slate-50/80 border-slate-100'
              ]">
                <span class="text-[10px] font-semibold uppercase tracking-wider block mb-1" :class="entry.status === 'notified' ? 'text-emerald-700' : 'text-slate-400'">
                  {{ entry.status === 'notified' ? 'Time Remaining To Book' : 'Est. Wait Time' }}
                </span>
                <span class="text-2xl font-bold font-mono tracking-tight leading-none" :class="entry.status === 'notified' ? 'text-emerald-600 animate-pulse' : 'text-amber-600'">
                  {{ entry.status === 'notified' ? formatCountdown(entry.claim_remaining_seconds) : formatWaitTime(entry.estimated_wait_time) }}
                </span>
              </div>

              <!-- Action Buttons -->
              <div class="flex sm:flex-row gap-2.5 items-center justify-center sm:justify-start">
                <button 
                  v-if="entry.status === 'notified'"
                  @click="handleBookNow(entry)"
                  class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-emerald-500/10 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Seat Now
                </button>
                <button 
                  @click="handleCancel(entry.id)"
                  class="px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  Leave Queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- System Rules Info Banner -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-100 text-left">
      <div class="bg-amber-50/50 p-5 rounded-2xl border border-amber-100/60">
        <div class="w-9 h-9 bg-amber-100/80 text-amber-600 rounded-xl flex items-center justify-center mb-3">
          <Clock class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-bold text-amber-900 text-xs uppercase tracking-wide mb-1">5-Minute Claim Window</h4>
        <p class="text-[11px] text-amber-800/80 leading-relaxed font-medium">When your queue turn arrives, you get an exclusive 5-minute window to reserve the seat.</p>
      </div>

      <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/60">
        <div class="w-9 h-9 bg-emerald-100/80 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
          <Zap class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-bold text-emerald-900 text-xs uppercase tracking-wide mb-1">15-Minute Check-In</h4>
        <p class="text-[11px] text-emerald-800/80 leading-relaxed font-medium">Once booked, you have 15 minutes to arrive at the library and scan the seat QR code.</p>
      </div>

      <div class="bg-purple-50/50 p-5 rounded-2xl border border-purple-100/60">
        <div class="w-9 h-9 bg-purple-100/80 text-purple-600 rounded-xl flex items-center justify-center mb-3">
          <ShieldCheck class="w-4.5 h-4.5" />
        </div>
        <h4 class="font-bold text-purple-900 text-xs uppercase tracking-wide mb-1">Queue Protection</h4>
        <p class="text-[11px] text-purple-800/80 leading-relaxed font-medium">Outside students cannot steal seats with active waitlists. Your priority line is protected.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { studentAPI } from '@/shared/services/api';
import { Clock, MapPin, Zap, Armchair, ShieldCheck } from 'lucide-vue-next';
import { useSwal } from '@/shared/composables/useSwal';

const router = useRouter();
const { showConfirm, showSuccess, showError } = useSwal();
const loading = ref(true);
const queueEntries = ref<any[]>([]);
let timerInterval: any = null;

const fetchQueue = async () => {
  try {
    loading.value = true;
    const data = await studentAPI.getMyQueue();
    queueEntries.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch queue:', error);
    queueEntries.value = [];
  } finally {
    loading.value = false;
  }
};

const updateTimers = () => {
  queueEntries.value.forEach(entry => {
    if (entry.status === 'notified' && entry.claim_remaining_seconds !== undefined) {
      if (entry.claim_remaining_seconds > 0) {
        entry.claim_remaining_seconds -= 1;
      } else {
        // Window expired - refresh queue to update turn
        fetchQueue();
      }
    }
  });
};

const formatCountdown = (seconds?: any) => {
  const totalSecs = Math.max(0, Math.round(Number(seconds) || 0));
  if (totalSecs <= 0) return '00:00';
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const formatWaitTime = (minutes: any) => {
  const mins = Math.round(Number(minutes) || 0);
  if (mins <= 0) return 'SOON';
  if (mins < 60) return `${mins} mins`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
};

const handleBookNow = (entry: any) => {
  if (entry.seat?.library_id) {
    router.push({
      path: `/student/libraries/${entry.seat.library_id}/seats`,
      query: { seat_id: entry.seat_id.toString() }
    });
  } else {
    router.push('/student/libraries');
  }
};

const handleCancel = async (id: number) => {
  const confirmed = await showConfirm(
    'Leave Queue?', 
    'Are you sure you want to leave the waitlist? You will lose your current priority spot.',
    'Yes, Leave'
  );
  
  if (confirmed) {
    try {
      await studentAPI.leaveQueue(id);
      showSuccess('Left Queue', 'You have been removed from the queue.');
      await fetchQueue();
    } catch (error) {
      showError('Error', 'Failed to leave the queue.');
    }
  }
};

onMounted(() => {
  fetchQueue();
  timerInterval = setInterval(updateTimers, 1000);
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.active\:scale-98:active {
  transform: scale(0.98);
}
</style>
