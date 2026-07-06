<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md" @click.self="closeModal">
    <div class="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in text-left relative overflow-hidden font-outfit">
      <!-- Glow effect background decoration -->
      <div class="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl"></div>

      <!-- Header -->
      <div class="flex items-center justify-between mb-6 relative z-10">
        <div>
          <h3 class="text-xl font-bold text-slate-800">Extend Session</h3>
          <p class="text-xs text-slate-400 mt-1">Adjust and preview your session extension</p>
        </div>
        <button @click="closeModal" class="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Content -->
      <div class="flex flex-col items-center mb-6 relative z-10">
        <!-- Elegant Header Icon instead of Timer -->
        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100/60 shadow-inner">
          <Clock class="w-8 h-8" />
        </div>

        <!-- Seat & Library details banner -->
        <div class="w-full bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex items-center gap-3.5 mb-6">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Armchair class="w-5 h-5" />
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="text-xs font-semibold text-slate-700">Seat {{ booking?.seat?.seat_number }}</h4>
            <p class="text-[10px] text-slate-400 font-semibold truncate">{{ booking?.seat?.library?.name }}</p>
          </div>
          <!-- Close time badge -->
          <div v-if="libraryClosingTime" class="text-right flex-shrink-0">
            <p class="text-[9px] font-semibold uppercase tracking-wider text-slate-400">Library Closes</p>
            <p class="text-xs font-semibold text-slate-650">{{ formatTimeOnly(libraryClosingTime) }}</p>
          </div>
        </div>

        <!-- Validation warnings -->
        <div v-if="isExtensionRestricted" class="w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl mb-6 flex gap-3 text-left">
          <AlertCircle class="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
          <div>
            <h5 class="text-xs font-semibold text-rose-800">Extension Locked</h5>
            <p class="text-[10.5px] text-rose-600 mt-1 leading-relaxed">
              Cannot extend booking with less than 10 minutes remaining. Priority is shifted to the queue.
            </p>
          </div>
        </div>

        <div v-else-if="maxExtensionMinutes < 10 || isLibraryClosingSoon" class="w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl mb-6 flex gap-3 text-left">
          <AlertTriangle class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h5 class="text-xs font-semibold text-amber-800">Closing Soon</h5>
            <p class="text-[10.5px] text-amber-600 mt-1 leading-relaxed">
              Cannot extend: The library is closing in less than 10 minutes.
            </p>
          </div>
        </div>

        <!-- Interactive controls if allowed -->
        <div v-if="isExtensionAllowed" class="w-full space-y-6 text-left">
          <!-- Quick Add Buttons -->
          <div>
            <label class="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mb-2.5">Quick Add Extension</label>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="btn in quickOptions"
                :key="btn.value"
                @click="setDuration(btn.value)"
                :disabled="btn.value > maxExtensionMinutes"
                :class="[
                  'py-3 rounded-xl font-semibold text-xs transition-all border flex flex-col items-center justify-center gap-0.5',
                  extensionDuration === btn.value
                    ? 'bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/15 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200 hover:bg-slate-100/60 disabled:opacity-40 disabled:cursor-not-allowed'
                ]"
              >
                <span>{{ btn.label }}</span>
              </button>
            </div>
          </div>

          <!-- Custom Duration Slider / Input -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Custom Duration</label>
              <div class="flex items-center gap-1.5">
                <input
                  type="number"
                  v-model.number="extensionDuration"
                  :min="10"
                  :max="maxExtensionMinutes"
                  class="w-16 text-center py-1 px-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-750 focus:outline-none focus:border-blue-500 font-mono"
                />
                <span class="text-[10px] font-medium text-slate-400">min</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-[10px] font-semibold text-slate-450 font-mono">10m</span>
              <input
                type="range"
                v-model.number="extensionDuration"
                :min="10"
                :max="maxExtensionMinutes"
                class="flex-1 accent-blue-600 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer"
              />
              <span class="text-[10px] font-semibold text-slate-450 font-mono">{{ maxExtensionMinutes }}m</span>
            </div>
          </div>

          <!-- Live Preview Card -->
          <div class="bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4.5 space-y-3">
            <h5 class="text-[9.5px] font-semibold text-blue-500 uppercase tracking-widest">Time Extension Preview</h5>
            <div class="grid grid-cols-3 items-center text-center gap-1">
              <div>
                <p class="text-[9px] text-slate-400 font-semibold uppercase mb-0.5">Current End</p>
                <p class="text-xs font-semibold text-slate-700 font-mono">{{ formatTimeOnly(currentEndTime) }}</p>
              </div>
              <div class="flex flex-col items-center">
                <ArrowRight class="w-4 h-4 text-blue-400" />
                <span class="text-[10px] font-bold text-blue-650 mt-0.5 bg-blue-50 px-2 py-0.5 rounded-md font-mono">
                  {{ formatAddedTime }}
                </span>
              </div>
              <div>
                <p class="text-[9px] text-slate-400 font-semibold uppercase mb-0.5">New End Time</p>
                <p class="text-xs font-black text-slate-800 font-mono">{{ formatTimeOnly(newEndTime) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Action Buttons -->
      <div class="flex gap-4 relative z-10 pt-2 border-t border-slate-100">
        <button
          @click="closeModal"
          class="flex-1 py-3.5 rounded-xl font-semibold text-slate-550 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all text-xs"
        >
          Cancel
        </button>
        <button
          @click="handleConfirm"
          :disabled="!isExtensionAllowed || loading"
          class="flex-1 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 transition-all text-xs flex items-center justify-center space-x-1.5"
        >
          <span v-if="loading" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>Confirm Extension</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useApp } from '@/shared/composables/useApp';
import { useSwal } from '@/shared/composables/useSwal';
import { X, Armchair, AlertCircle, AlertTriangle, ArrowRight, Clock } from 'lucide-vue-next';

const props = defineProps<{
  show: boolean;
  booking: any;
}>();

const emit = defineEmits(['close', 'success']);

const { extendSeatBooking } = useApp();
const { showSuccess, showError } = useSwal();

const now = ref(new Date());
let timer: any = null;
const loading = ref(false);
const extensionDuration = ref(30);

const quickOptions = [
  { label: '+15 Min', value: 15 },
  { label: '+30 Min', value: 30 },
  { label: '+1 Hour', value: 60 }
];

const setDuration = (val: number) => {
  extensionDuration.value = Math.min(val, maxExtensionMinutes.value);
};

const currentEndTime = computed(() => {
  if (!props.booking) return null;
  const timeStr = props.booking.scheduled_end_time || props.booking.endTime;
  return timeStr ? new Date(timeStr.replace(' ', 'T')) : null;
});

const getDayName = (date: Date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

const parseOpeningHoursStr = (openingHoursStr: string, baseDate: Date): Date | null => {
  if (!openingHoursStr) return null;
  const parts = openingHoursStr.split('-');
  if (parts.length < 2) return null;
  const closePart = parts[1].trim(); // e.g. "10:00 PM"
  
  const match = closePart.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const ampm = match[3].toUpperCase();
  
  if (ampm === 'PM' && h < 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  
  const closingDate = new Date(baseDate);
  closingDate.setHours(h, m, 0, 0);
  return closingDate;
};

const libraryClosingTime = computed(() => {
  if (!props.booking?.seat?.library) return null;
  const library = props.booking.seat.library;
  const end = currentEndTime.value;
  if (!end) return null;

  const dayName = getDayName(end);
  const opHours = library.operating_hours || library.operatingHours || [];
  const opHour = opHours.find((oh: any) => oh.day_of_week === dayName && oh.is_open);
  
  let closingDate: Date | null = null;
  if (opHour && opHour.close_time) {
    const [h, m, s] = opHour.close_time.split(':').map(Number);
    closingDate = new Date(end);
    closingDate.setHours(h, m, s || 0, 0);
  } else if (library.opening_hours) {
    closingDate = parseOpeningHoursStr(library.opening_hours, end);
  }

  if (closingDate) {
    if (closingDate.getTime() < end.getTime()) {
      // If closing time is set to less than the end time (e.g. closing after midnight),
      // it belongs to the next day.
      closingDate.setDate(closingDate.getDate() + 1);
    }
  }
  return closingDate;
});

const maxExtensionMinutes = computed(() => {
  const end = currentEndTime.value;
  const close = libraryClosingTime.value;
  if (!end || !close) return 1440; // 24 hours fallback
  const diffMs = close.getTime() - end.getTime();
  return Math.max(0, Math.floor(diffMs / 60000));
});

const remainingMinutes = computed(() => {
  const end = currentEndTime.value;
  if (!end) return 0;
  return Math.max(0, (end.getTime() - now.value.getTime()) / 60000);
});

const totalSessionMinutes = computed(() => {
  if (!props.booking) return 120;
  const start = new Date(props.booking.booking_time);
  const end = currentEndTime.value;
  if (!start || !end) return 120;
  return Math.max(1, (end.getTime() - start.getTime()) / 60000);
});

const percentageRemaining = computed(() => {
  if (totalSessionMinutes.value <= 0) return 0;
  return Math.min(100, Math.max(0, (remainingMinutes.value / totalSessionMinutes.value) * 100));
});

const isExtensionRestricted = computed(() => {
  return remainingMinutes.value < 10;
});

const isLibraryClosingSoon = computed(() => {
  const close = libraryClosingTime.value;
  if (!close) return false;
  const diffMs = close.getTime() - now.value.getTime();
  return (diffMs / 60000) < 10;
});

const isExtensionAllowed = computed(() => {
  return !isExtensionRestricted.value && maxExtensionMinutes.value >= 10 && !isLibraryClosingSoon.value;
});

const newEndTime = computed(() => {
  const end = currentEndTime.value;
  if (!end) return null;
  const extended = new Date(end.getTime());
  extended.setMinutes(extended.getMinutes() + (extensionDuration.value || 0));
  return extended;
});

const formatAddedTime = computed(() => {
  const mins = extensionDuration.value;
  if (mins < 60) return `+${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `+${h}h ${m}m` : `+${h}h`;
});

const formatRemainingTime = computed(() => {
  const end = currentEndTime.value;
  if (!end) return '00:00:00';
  const diffMs = end.getTime() - now.value.getTime();
  if (diffMs <= 0) return '00:00:00';

  const h = Math.floor(diffMs / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);
  const s = Math.floor((diffMs % 60000) / 1000);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
});

const formatTimeOnly = (date: Date | null) => {
  if (!date) return '--';
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const closeModal = () => {
  emit('close');
};

const handleConfirm = async () => {
  if (!props.booking || !isExtensionAllowed.value) return;

  loading.value = true;
  try {
    const success = await extendSeatBooking(props.booking.id, extensionDuration.value);
    if (success) {
      showSuccess('Session Extended!', `Your session has been extended by ${formatAddedTime.value}.`);
      emit('success');
      closeModal();
    }
  } catch (error: any) {
    showError(
      'Extension Failed',
      error.response?.data?.message || 'Could not extend session. The seat might be booked by someone else.'
    );
  } finally {
    loading.value = false;
  }
};

// Monitor max extension and auto clamp
watch(maxExtensionMinutes, (newMax) => {
  if (extensionDuration.value > newMax) {
    extensionDuration.value = Math.max(10, newMax);
  }
});

// Watch extensionDuration and clamp dynamically so it cannot exceed the max extension limit
watch(extensionDuration, (newVal) => {
  if (typeof newVal === 'number' && !isNaN(newVal)) {
    if (newVal > maxExtensionMinutes.value) {
      extensionDuration.value = maxExtensionMinutes.value;
    }
  }
});

// Watch booking prop to reset input duration when booking changes
watch(() => props.booking, () => {
  extensionDuration.value = Math.min(30, maxExtensionMinutes.value);
}, { immediate: true });

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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

input[type="range"]::-webkit-slider-thumb {
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
}
</style>
