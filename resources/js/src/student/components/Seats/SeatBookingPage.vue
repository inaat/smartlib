<template>
  <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4 font-outfit">
    <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading seat layout...</p>
  </div>

  <div v-else class="space-y-6 font-outfit">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
      <div>
        <div class="flex items-center text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1.5">
          <router-link to="/student/libraries" class="hover:text-blue-650 transition-colors">Libraries</router-link>
          <ChevronRight class="w-3.5 h-3.5 mx-1 text-slate-300" />
          <span class="text-slate-500">{{ library?.name }}</span>
        </div>
        <h1 class="text-xl font-bold text-slate-800 leading-none">Select Your Seat</h1>
      </div>

      <!-- Premium Seat Status Legend -->
      <SeatStatusLegend />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Main Content: Seat Map -->
      <div class="lg:col-span-3">
        <SeatLayoutRenderer
          :seats="seats"
          :floors="floors"
          :sections="sections"
          :tables="tables"
          :selected-seat="selectedSeat"
          :seat-clickable="true"
          :draggable="false"
          :layout-mode="effectiveLayoutMode"
          :tables-per-row="4"
          :table-capacity="globalTableCapacity"
          :show-legend="false"
          @seat-click="handleSeatClick"
        />
      </div>

      <!-- Sidebar: Booking Summary -->
      <div class="space-y-6">
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 sticky top-24 text-left">
          <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-5">Booking Summary</h3>

          <div v-if="selectedSeat" class="space-y-5">
            <div class="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <div class="flex items-center mb-1.5">
                <Armchair class="w-4.5 h-4.5 text-blue-600 mr-2" />
                <span class="font-bold text-blue-900 text-sm">Seat {{ selectedSeat.seat_number }}</span>
              </div>
              <p class="text-[10px] text-blue-600/90 font-semibold uppercase tracking-wide leading-none">
                {{ getSeatLocationSummary(selectedSeat) }}
              </p>
            </div>

            <!-- Approved Override Banner -->
            <div v-if="getSeatOverrideStatus(selectedSeat.id) === 'approved'" class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center space-x-2">
              <CheckCircle class="w-4.5 h-4.5 text-emerald-600 flex-shrink-0" />
              <p class="text-[11px] text-emerald-900 font-bold leading-tight m-0">
                Override Request Approved! You can now reserve this seat for today.
              </p>
            </div>

            <!-- Gender mismatch warning (Strict restriction - No override allowed) -->
            <div v-if="isGenderMismatch(selectedSeat)" class="p-3.5 bg-red-50 rounded-xl border border-red-100 flex items-start space-x-2.5">
              <UserX class="w-4.5 h-4.5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-xs text-red-700 font-bold leading-tight">Gender Restriction</p>
                <p class="text-[11px] text-red-600 font-medium leading-normal mt-0.5 m-0">This section is restricted to another gender.
                  
                </p>
              </div>
            </div>

            <!-- Academic Level mismatch warning (Only shown if gender matches!) -->
            <div v-else-if="isLevelMismatch(selectedSeat)" class="p-4 rounded-2xl border space-y-3"
              :class="[
                getSeatOverrideStatus(selectedSeat.id) === 'pending' ? 'bg-amber-50/90 border-amber-200/60' :
                getSeatOverrideStatus(selectedSeat.id) === 'rejected' ? 'bg-rose-50/90 border-rose-200/60' :
                'bg-amber-50/90 border-amber-200/60'
              ]"
            >
              <div class="flex items-start space-x-2">
                <AlertCircle class="w-4.5 h-4.5 flex-shrink-0 mt-0.5"
                  :class="[
                    getSeatOverrideStatus(selectedSeat.id) === 'rejected' ? 'text-rose-600' : 'text-amber-600'
                  ]"
                />
                <div>
                  <p class="text-xs font-medium leading-normal m-0"
                    :class="[
                      getSeatOverrideStatus(selectedSeat.id) === 'rejected' ? 'text-rose-900' : 'text-amber-900'
                    ]"
                  >
                    This seat is restricted to <span class="font-bold uppercase" :class="[getSeatOverrideStatus(selectedSeat.id) === 'rejected' ? 'text-rose-800' : 'text-amber-800']">{{ getSectionLevelName(selectedSeat) }}</span> students.
                  </p>

                  <p v-if="getSeatOverrideStatus(selectedSeat.id) === 'pending'" class="text-[11px] font-bold text-amber-700 mt-1 m-0">
                    ⏳ Request Pending: Your request is currently under librarian review.
                  </p>
                  <p v-else-if="getSeatOverrideStatus(selectedSeat.id) === 'rejected'" class="text-[11px] font-bold text-rose-700 mt-1 m-0">
                    ❌ Request Rejected: The librarian rejected your override request for this seat.
                  </p>
                  <p v-else-if="userOverrideRequests.length > 0" class="text-[11px] font-bold text-amber-800 mt-1 m-0">
                     You have already submitted an override request ({{ userOverrideRequests[0]?.seat?.seat_number || userOverrideRequests[0]?.seat_id }}).
                  </p>
                </div>
              </div>

              <!-- Button for New Request ONLY when user has NOT submitted ANY request today -->
              <button 
                v-if="userOverrideRequests.length === 0"
                @click="sendOverrideRequest"
                :disabled="submitting"
                class="w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-amber-600/10 flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 active:scale-98"
              >
                <span v-if="submitting" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <ShieldAlert v-else class="w-4 h-4" />
                <span>{{ submitting ? 'Submitting Request...' : 'Request Override' }}</span>
              </button>
            </div>

            <template v-else-if="!isGenderMismatch(selectedSeat)">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Duration</label>
                    <button 
                      type="button"
                      @click="toggleCustomDuration"
                      class="text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider underline cursor-pointer"
                    >
                      {{ isCustomDuration ? '← Presets' : '+ Custom Time' }}
                    </button>
                  </div>

                  <!-- Preset Select Dropdown -->
                  <select 
                    v-if="!isCustomDuration"
                    v-model="bookingDuration" 
                    @change="handleDurationChange"
                    :disabled="maxAvailableHours === 0" 
                    class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option v-for="opt in durationOptions" :key="opt.value" :value="opt.value">
                      {{ opt.label }}
                    </option>
                    <option value="custom">Custom Time</option>
                  </select>

                  <!-- Custom Hours & Minutes Controls -->
                  <div v-else class="space-y-2.5 p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                    <div class="grid grid-cols-2 gap-2.5">
                      <div>
                        <label class="text-[9.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Hours</label>
                        <div class="relative">
                          <input 
                            type="number" 
                            v-model.number="customHours" 
                            min="0" 
                            :max="maxHoursAllowed" 
                            @input="updateCustomDuration"
                            class="w-full p-2 pr-7 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center shadow-2xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            placeholder="0"
                          />
                          <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400 pointer-events-none">hrs</span>
                        </div>
                      </div>
                      <div>
                        <label class="text-[9.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Minutes</label>
                        <div class="relative">
                          <input 
                            type="number" 
                            v-model.number="customMinutes" 
                            min="0" 
                            max="59" 
                            step="5"
                            @input="updateCustomDuration"
                            class="w-full p-2 pr-7 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center shadow-2xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            placeholder="0"
                          />
                          <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400 pointer-events-none">mins</span>
                        </div>
                      </div>
                    </div>

                    <!-- Quick Preset Short-cuts -->
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <button 
                        type="button" 
                        @click="customHours = 0; customMinutes = 30; updateCustomDuration();"
                        class="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        30m
                      </button>
                      <button 
                        type="button" 
                        @click="customHours = 1; customMinutes = 30; updateCustomDuration();"
                        class="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        1h 30m
                      </button>
                      <button 
                        type="button" 
                        @click="customHours = 3; customMinutes = 0; updateCustomDuration();"
                        class="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        3h
                      </button>
                      <button 
                        type="button" 
                        @click="customHours = Math.floor(maxAvailableHours); customMinutes = Math.round((maxAvailableHours - Math.floor(maxAvailableHours)) * 60); updateCustomDuration();"
                        class="px-2 py-0.5 rounded-lg bg-blue-50 border border-blue-200 text-[9.5px] font-bold text-blue-700 hover:bg-blue-100 cursor-pointer ml-auto"
                      >
                        Max Until Close
                      </button>
                    </div>

                    <!-- Computed Total Display -->
                    <div class="text-[11px] font-bold text-blue-900 bg-white p-2 rounded-xl border border-blue-100 flex items-center justify-between shadow-2xs">
                      <span class="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Total Duration:</span>
                      <span class="text-blue-700 font-bold">{{ formatHours(typeof bookingDuration === 'number' ? bookingDuration : 1) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Closing time notice / closed error -->
                <div v-if="showClosingTimeNotice" class="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start space-x-2">
                  <AlertCircle class="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <p class="text-[10px] text-slate-800 font-medium leading-normal m-0">
                    You can book this seat for a maximum of {{ formatHours(maxAvailableHours) }} because the library closes at {{ formatTimeOnly(libraryClosingTime) }}.
                  </p>
                </div>

                <div v-if="maxAvailableHours === 0" class="p-3 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-2">
                  <AlertCircle class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <p class="text-[10px] text-red-650 font-medium leading-normal m-0">
                    The library is closed during the selected start time. Please choose another date or time.
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      v-model="selectedDate"
                      :min="minDate"
                      :max="maxDate"
                      @change="onDateChange"
                      class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Start Time</span>
                      <span v-if="!isManualTime && selectedDate === minDate" class="text-[8.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-tight flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live
                      </span>
                    </label>
                    <input
                      type="time"
                      v-model="selectedTime"
                      @change="onTimeInputChange"
                      class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100">
                <button
                  v-if="selectedSeat.status === 'available'"
                  @click="confirmBooking"
                  :disabled="submitting || maxAvailableHours === 0"
                  class="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1.5"
                >
                  <span v-if="submitting" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>{{ submitting ? 'Confirming...' : 'Confirm Booking' }}</span>
                </button>

                <div v-else class="space-y-3">
                  <div class="p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -mr-8 -mt-8"></div>
                    <p class="text-[9px] font-bold uppercase tracking-widest mb-2.5 leading-none text-amber-600">Free Soon</p>
                    <div class="flex items-center justify-center space-x-1.5 mb-3.5 leading-none">
                      <Clock class="w-4.5 h-4.5 text-orange-500" />
                      <p class="text-xl font-black text-slate-800 leading-none">
                        {{ Math.floor(selectedSeat.remaining_minutes / 60) }}h {{ Math.floor(selectedSeat.remaining_minutes % 60) }}m
                      </p>
                    </div>
                    
                    <div class="space-y-3">
                      <div class="p-2.5 bg-orange-50 border border-orange-100 rounded-xl text-center leading-normal">
                        <p class="text-[9px] text-orange-700 font-semibold uppercase tracking-wider">Waitlist Active</p>
                        <p class="text-[8.5px] text-orange-655 font-medium uppercase mt-0.5 tracking-tighter">Claim spot to secure this seat next</p>
                      </div>
                      
                      <button
                        @click="joinQueue"
                        :disabled="submitting"
                        class="w-full py-2.5 bg-orange-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-orange-500/10 hover:bg-orange-600 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Zap v-if="!submitting" class="w-4 h-4 text-white fill-current" />
                        <span v-else class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>{{ submitting ? 'Claiming...' : 'Claim Priority Spot' }}</span>
                      </button>

                      <button 
                        @click="router.push('/student/my-queue')"
                        class="text-[9px] text-blue-600 font-semibold hover:underline uppercase tracking-tight w-full text-center mt-1 block leading-none"
                      >
                        View My Waitlists →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <div v-else class="text-center py-10">
            <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400 shadow-inner">
              <Armchair class="w-6 h-6" />
            </div>
            <p class="text-xs text-slate-400 max-w-[180px] mx-auto leading-normal">Please select a seat from the map to continue</p>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 text-left">
          <div class="flex items-center mb-2">
            <Zap class="w-4.5 h-4.5 text-orange-600 mr-2 fill-current" />
            <h4 class="font-semibold text-orange-900 text-xs uppercase tracking-wide">Quick Tip</h4>
          </div>
          <p class="text-[11px] text-orange-800/90 leading-relaxed font-semibold">
            Seats near windows are popular in the morning. Group study areas require all members to check in within 15 minutes.
          </p>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-fade-in">
        <div class="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle class="w-8 h-8" />
        </div>
        <h2 class="text-lg font-semibold text-slate-800 mb-1">Booking Confirmed!</h2>
        <p class="text-xs text-slate-400 mb-6 leading-relaxed">Your seat has been reserved. Please check in within 15 minutes of your start time.</p>
        <button
          @click="goToBookings"
          class="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all"
        >
          View My Bookings
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { studentAPI } from '@/shared/services/api';
import {
  ChevronRight, Armchair, Clock, Zap,
  CheckCircle, UserX, AlertCircle, ShieldAlert
} from 'lucide-vue-next';
import SeatLayoutRenderer from '@/shared/components/SeatLayout/SeatLayoutRenderer.vue';
import SeatStatusLegend from '@/shared/components/SeatLayout/SeatStatusLegend.vue';
import { useSwal } from '@/shared/composables/useSwal';
import { useGeolocation } from '@/shared/composables/useGeolocation';

const route = useRoute();
const router = useRouter();

const { showError, showSuccess, showConfirm } = useSwal();
const { latitude, longitude } = useGeolocation();

const loading = ref(true);
const submitting = ref(false);

const library = ref<any>(null);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const seats = ref<any[]>([]);
const tables = ref<any[]>([]);

const globalTableCapacity = ref<number>(4);

const loadGlobalTableCapacity = () => {
  try {
    if (library.value?.table_capacity) {
      globalTableCapacity.value = library.value.table_capacity;
      return;
    }
    const saved = localStorage.getItem('smartlib_global_table_capacity') || localStorage.getItem('smartlib_table_capacity');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if ([2, 4, 6, 8, 10, 12, 14, 16].includes(parsed)) {
        globalTableCapacity.value = parsed;
      }
    }
  } catch (e) {}
};

watch(() => library.value, (newLib) => {
  if (newLib?.table_capacity) {
    globalTableCapacity.value = newLib.table_capacity;
    try {
      localStorage.setItem('smartlib_global_table_capacity', newLib.table_capacity.toString());
    } catch (e) {}
  }
}, { deep: true, immediate: true });

onMounted(() => {
  loadGlobalTableCapacity();
  window.addEventListener('storage', loadGlobalTableCapacity);
  window.addEventListener('smartlib_table_capacity_changed', loadGlobalTableCapacity);
});

const effectiveLayoutMode = computed(() => {
  return localStorage.getItem('smartlib_active_layout_mode') || library.value?.seat_layout_mode || 'tables';
});
const showSuccessModal = ref(false);

const selectedSeat = ref<any | null>(null);
const bookingDuration = ref<number | string>(2);
const isCustomDuration = ref(false);
const customHours = ref<number>(1);
const customMinutes = ref<number>(0);

const maxHoursAllowed = computed(() => {
  return Math.max(0, Math.floor(maxAvailableHours.value));
});

const handleDurationChange = (e: Event) => {
  const val = (e.target as HTMLSelectElement).value;
  if (val === 'custom') {
    isCustomDuration.value = true;
    updateCustomDuration();
  } else {
    isCustomDuration.value = false;
  }
};

const toggleCustomDuration = () => {
  isCustomDuration.value = !isCustomDuration.value;
  if (isCustomDuration.value) {
    const total = typeof bookingDuration.value === 'number' ? bookingDuration.value : (parseFloat(String(bookingDuration.value)) || 1);
    customHours.value = Math.floor(total);
    customMinutes.value = Math.round((total - customHours.value) * 60);
    updateCustomDuration();
  } else {
    bookingDuration.value = 1;
  }
};

const updateCustomDuration = () => {
  let h = typeof customHours.value === 'number' && !isNaN(customHours.value) ? customHours.value : 0;
  let m = typeof customMinutes.value === 'number' && !isNaN(customMinutes.value) ? customMinutes.value : 0;

  if (h < 0) h = 0;
  if (m < 0) m = 0;
  if (m > 59) m = 59;

  let total = h + (m / 60);

  if (maxAvailableHours.value > 0 && total > maxAvailableHours.value) {
    total = maxAvailableHours.value;
    h = Math.floor(total);
    m = Math.round((total - h) * 60);
    customHours.value = h;
    customMinutes.value = m;
  }

  if (total <= 0) {
    total = 0.25;
  }

  bookingDuration.value = total;
};

const { user, isTrialActive } = useAuth();

const now = ref(new Date());
let timer: any = null;
const isManualTime = ref(false);

const toLocalDateStr = (d: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const toLocalTimeStr = (d: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const selectedDate = ref(toLocalDateStr(new Date()));
const selectedTime = ref(toLocalTimeStr(new Date()));

const updateLiveTime = () => {
  now.value = new Date();
  const todayStr = toLocalDateStr(now.value);
  const currentTimeStr = toLocalTimeStr(now.value);

  if (selectedDate.value === todayStr) {
    if (!isManualTime.value || selectedTime.value < currentTimeStr) {
      isManualTime.value = false;
      selectedTime.value = currentTimeStr;
    }
  } else if (selectedDate.value < todayStr) {
    selectedDate.value = todayStr;
    selectedTime.value = currentTimeStr;
    isManualTime.value = false;
  }
};

const resetToCurrentTime = () => {
  isManualTime.value = false;
  selectedDate.value = toLocalDateStr(new Date());
  selectedTime.value = toLocalTimeStr(new Date());
  updateLiveTime();
};

const onDateChange = () => {
  const todayStr = toLocalDateStr(new Date());
  if (selectedDate.value < todayStr) {
    selectedDate.value = todayStr;
  }
  if (selectedDate.value === todayStr) {
    const currentTimeStr = toLocalTimeStr(new Date());
    if (selectedTime.value <= currentTimeStr) {
      isManualTime.value = false;
      selectedTime.value = currentTimeStr;
    } else {
      isManualTime.value = true;
    }
  } else {
    isManualTime.value = true;
  }
};

const onTimeInputChange = () => {
  const todayStr = toLocalDateStr(new Date());
  const currentTimeStr = toLocalTimeStr(new Date());

  if (selectedDate.value === todayStr) {
    if (selectedTime.value <= currentTimeStr) {
      isManualTime.value = false;
      selectedTime.value = currentTimeStr;
    } else {
      isManualTime.value = true;
    }
  } else {
    isManualTime.value = true;
  }
};

const libraryClosingTime = computed(() => {
  if (!library.value?.operating_days) return null;
  const startTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[startTime.getDay()];
  const operatingHour = library.value.operating_days.find((d: any) => d.day === dayName);
  if (!operatingHour || !operatingHour.isOpen) return null;

  const [closeH, closeM] = operatingHour.closeTime.split(':').map(Number);
  const closeDate = new Date(startTime);
  closeDate.setHours(closeH, closeM, 0, 0);

  const [openH, openM] = operatingHour.openTime.split(':').map(Number);
  const openDate = new Date(startTime);
  openDate.setHours(openH, openM, 0, 0);

  if (closeDate <= openDate) {
    closeDate.setDate(closeDate.getDate() + 1);
  }
  return closeDate;
});

const maxAvailableHours = computed(() => {
  if (!library.value?.operating_days) return 8; // fallback limit
  const startTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[startTime.getDay()];

  const operatingHour = library.value.operating_days.find((d: any) => d.day === dayName);
  if (!operatingHour || !operatingHour.isOpen) return 0;

  const [closeH, closeM] = operatingHour.closeTime.split(':').map(Number);
  const closeDate = new Date(startTime);
  closeDate.setHours(closeH, closeM, 0, 0);

  const [openH, openM] = operatingHour.openTime.split(':').map(Number);
  const openDate = new Date(startTime);
  openDate.setHours(openH, openM, 0, 0);

  if (closeDate <= openDate) {
    closeDate.setDate(closeDate.getDate() + 1);
  }

  if (startTime < openDate || startTime >= closeDate) {
    return 0;
  }

  const diffMs = closeDate.getTime() - startTime.getTime();
  return Math.max(0, diffMs / (3600 * 1000));
});

const durationOptions = computed(() => {
  const max = maxAvailableHours.value;
  const standard = [
    { label: '1 Hour', value: 1 },
    { label: '2 Hours', value: 2 },
    { label: '4 Hours', value: 4 },
    { label: '8 Hours', value: 8 }
  ];

  const filtered = standard.filter(opt => opt.value <= max);

  if (max > 0 && !standard.some(opt => opt.value === max)) {
    const hours = Math.floor(max);
    const mins = Math.round((max - hours) * 60);
    let label = '';
    if (hours > 0) {
      label = `${hours} Hour${hours > 1 ? 's' : ''}`;
      if (mins > 0) label += ` ${mins} Min`;
    } else {
      label = `${mins} Min`;
    }
    filtered.push({ label: `${label} (Max until Close)`, value: max });
  }

  return filtered.sort((a, b) => a.value - b.value);
});

const showClosingTimeNotice = computed(() => {
  return maxAvailableHours.value > 0 && maxAvailableHours.value < 8;
});

const formatHours = (hours: number) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (h > 0) {
    return `${h} hour${h > 1 ? 's' : ''}${m > 0 ? ` ${m} minutes` : ''}`;
  }
  return `${m} minutes`;
};

const formatTimeOnly = (date: Date | null) => {
  if (!date) return '';
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

watch([maxAvailableHours, bookingDuration], ([newMax, newDuration]) => {
  const numDur = typeof newDuration === 'number' ? newDuration : (parseFloat(String(newDuration)) || 0);
  if (newMax > 0 && numDur > newMax) {
    bookingDuration.value = newMax;
    if (isCustomDuration.value) {
      customHours.value = Math.floor(newMax);
      customMinutes.value = Math.round((newMax - customHours.value) * 60);
    }
  }
});

const minDate = computed(() => toLocalDateStr(new Date()));

const maxDate = computed(() => {
  const today = new Date();
  if (!user.value) return toLocalDateStr(today);

  let allowedDays = 0;

  if (user.value.active_subscription?.subscription_plan) {
    const planDays = user.value.active_subscription.subscription_plan.advance_booking_days;
    if (planDays === -1) {
      const nextYear = new Date(today);
      nextYear.setFullYear(today.getFullYear() + 1);
      return toLocalDateStr(nextYear);
    }
    allowedDays = planDays;
  } else if (isTrialActive.value) {
    allowedDays = 0;
  }

  const max = new Date(today);
  max.setDate(today.getDate() + allowedDays);
  return toLocalDateStr(max);
});

const userOverrideRequests = ref<any[]>([]);

const fetchSeats = async (isSilent = false) => {
  if (!isSilent) loading.value = true;
  try {
    const id = parseInt(route.params.libraryId as string);
    const response = await studentAPI.getSeats(id);

    library.value = response.library;
    floors.value = response.floors;
    sections.value = response.sections;
    seats.value = response.seats;
    tables.value = response.tables || [];

    try {
      const overrides = await studentAPI.getStudentOverrideRequests();
      userOverrideRequests.value = overrides || [];
    } catch (oErr) {
      console.error('Error fetching student override requests:', oErr);
    }
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  } finally {
    if (!isSilent) loading.value = false;
  }
};

const getSeatOverrideStatus = (seatId: number) => {
  const req = userOverrideRequests.value.find((r: any) => r.seat_id === seatId);
  return req ? req.status : null; // 'pending' | 'approved' | 'rejected' | null
};

const getFloorName = (seatOrId: any) => {
  if (!seatOrId) return floors.value[0]?.name || '1st Floor';
  const floorId = typeof seatOrId === 'object' ? seatOrId.floor_id : seatOrId;
  if (floorId) {
    const found = floors.value.find(f => f.id === floorId);
    if (found) return found.name;
  }
  if (typeof seatOrId === 'object' && seatOrId.section_id) {
    const sec = sections.value.find(s => s.id === seatOrId.section_id);
    if (sec && sec.floor_id) {
      const found = floors.value.find(f => f.id === sec.floor_id);
      if (found) return found.name;
    }
  }
  return floors.value[0]?.name || '1st Floor';
};
const getSectionName = (id: number) => sections.value.find(s => s.id === id)?.name || '';
const getSubsectionName = (seat: any) => {
  if (!seat?.subsection_id) return '';
  const section = sections.value.find(s => s.id === seat.section_id);
  const sub = section?.subsections?.find((s: any) => s.id === seat.subsection_id);
  return sub ? sub.name : '';
};

const isGenderMismatch = (seat: any) => {
  const section = sections.value.find(s => s.id === seat.section_id);
  if (!section) return false;

  const sub = section.subsections?.find((s: any) => s.id === seat.subsection_id);

  let secGender = (sub?.gender && sub.gender !== 'mixed')
    ? String(sub.gender).toLowerCase().trim()
    : (section.gender && section.gender !== 'mixed')
      ? String(section.gender).toLowerCase().trim()
      : 'mixed';

  const combinedName = `${section.name || ''} ${sub?.name || ''}`.toLowerCase();
  if (combinedName.includes('girls') || combinedName.includes('girl') || combinedName.includes('female') || combinedName.includes('women')) {
    secGender = 'female';
  } else if (combinedName.includes('boys') || combinedName.includes('boy') || combinedName.includes('male') || combinedName.includes('men')) {
    secGender = 'male';
  }

  if (secGender === 'mixed' || secGender === 'all') return false;

  const studentUser = user.value as any;
  const rawGender = studentUser?.gender || 'male';
  const userGender = String(rawGender).toLowerCase().trim();

  const isMaleSection = ['male', 'boys', 'boy', 'men'].includes(secGender);
  const isFemaleSection = ['female', 'girls', 'girl', 'women'].includes(secGender);

  const isMaleUser = ['male', 'boys', 'boy', 'men'].includes(userGender);
  const isFemaleUser = ['female', 'girls', 'girl', 'women'].includes(userGender);

  if (isMaleSection && !isMaleUser) return true;
  if (isFemaleSection && !isFemaleUser) return true;

  return false;
};

const isLevelMismatch = (seat: any) => {
  if (!seat) return false;

  // If student has an approved override request for this seat for today, unlock it!
  if (getSeatOverrideStatus(seat.id) === 'approved') {
    return false;
  }

  const section = sections.value.find(s => s.id === seat.section_id);
  const sub = section?.subsections?.find((s: any) => s.id === seat.subsection_id);
  
  const requiredLevel = (sub?.academic_level && sub.academic_level !== 'all')
    ? sub.academic_level
    : (section?.academic_level !== 'all' ? section?.academic_level : null);

  if (!requiredLevel) return false;
  const studentUser = user.value as any;
  if (!studentUser || !studentUser.ca_level) return true;
  return studentUser.ca_level !== requiredLevel;
};

const getSectionLevelName = (seat: any) => {
  if (!seat) return 'All Levels';
  const section = sections.value.find(s => s.id === seat.section_id);
  const sub = section?.subsections?.find((s: any) => s.id === seat.subsection_id);
  if (sub?.academic_level && sub.academic_level !== 'all') return sub.academic_level;
  return section?.academic_level || 'All Levels';
};

const getSeatLocationSummary = (seat: any) => {
  if (!seat) return '';
  const floorName = getFloorName(seat);
  const secName = getSectionName(seat.section_id);
  const subName = getSubsectionName(seat);
  const levelName = getSectionLevelName(seat);

  const parts = [floorName, secName];

  if (subName) {
    parts.push(subName);
  }

  if (levelName && levelName.toLowerCase() !== 'all levels') {
    const isLevelInSub = subName && subName.toLowerCase().includes(levelName.toLowerCase());
    const isLevelInSec = secName && secName.toLowerCase().includes(levelName.toLowerCase());
    
    if (!isLevelInSub && !isLevelInSec) {
      parts.push(levelName);
    }
  }

  return parts.filter(Boolean).join(' • ');
};

const handleSeatClick = (seat: any) => {
  if (seat.status !== 'available' && seat.status !== 'free_soon') {
    showError('Seat Unavailable', 'You can only select seats that are Available or Free Soon.');
    return;
  }
  selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
};

const confirmBooking = async () => {
  if (!selectedSeat.value) return;

  const confirmNow = new Date();
  const todayStr = toLocalDateStr(confirmNow);
  const currentTimeStr = toLocalTimeStr(confirmNow);

  let startTime: Date;

  if (selectedDate.value === todayStr) {
    const chosenTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
    if (!isManualTime.value || chosenTime.getTime() <= confirmNow.getTime() + 60000) {
      startTime = confirmNow;
      selectedTime.value = currentTimeStr;
      isManualTime.value = false;
    } else {
      startTime = chosenTime;
    }
  } else if (selectedDate.value < todayStr) {
    selectedDate.value = todayStr;
    selectedTime.value = currentTimeStr;
    isManualTime.value = false;
    startTime = confirmNow;
  } else {
    startTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
  }

  if (startTime.getTime() < confirmNow.getTime() - 60000) {
    startTime = confirmNow;
    selectedDate.value = todayStr;
    selectedTime.value = currentTimeStr;
    isManualTime.value = false;
  }

  const durationInHours = typeof bookingDuration.value === 'number' ? bookingDuration.value : (parseFloat(String(bookingDuration.value)) || 1);
  const endTime = new Date(startTime.getTime() + durationInHours * 60 * 60 * 1000);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[startTime.getDay()];

  const operatingHour = library.value?.operating_days?.find((d: any) => d.day === dayName);

  if (!operatingHour || !operatingHour.isOpen) {
    showError('Library Closed', `The library is closed on ${dayName}s. Please select another day.`);
    return;
  }

  const [openH, openM] = operatingHour.openTime.split(':').map(Number);
  const [closeH, closeM] = operatingHour.closeTime.split(':').map(Number);

  const openDate = new Date(startTime);
  openDate.setHours(openH, openM, 0, 0);

  const closeDate = new Date(startTime);
  closeDate.setHours(closeH, closeM, 0, 0);

  if (closeDate <= openDate) {
    closeDate.setDate(closeDate.getDate() + 1);
  }

  if (startTime < openDate || startTime >= closeDate) {
    showError('Outside Operation Hours', `This library is only open from ${operatingHour.openTime} to ${operatingHour.closeTime} on ${dayName}s.`);
    return;
  }

  // If endTime exceeds library closing time, adjust actualEndTime to closeDate
  let actualEndTime = endTime;
  if (actualEndTime > closeDate) {
    actualEndTime = closeDate;
  }

  submitting.value = true;
  try {
    const formatLocalDatetime = (d: Date) => {
      const pad = (n: number) => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    await studentAPI.createBooking({
      seat_id: selectedSeat.value.id,
      library_id: library.value.id,
      booking_time: formatLocalDatetime(startTime),
      scheduled_end_time: formatLocalDatetime(actualEndTime),
      latitude: latitude.value,
      longitude: longitude.value,
    });

    showSuccessModal.value = true;
  } catch (error: any) {
    console.error('Booking failed:', error);
    if (error.response?.status === 403 && error.response?.data?.restricted) {
      const data = error.response.data;
      if (data.can_request_override) {
        const confirmRequest = await showConfirm(
          'Seat Restricted',
          `${data.message} Since all seats for your level (${data.user_level}) are currently occupied, you can submit an override request to the librarian.`,
          'Request Override'
        );
        if (confirmRequest) {
          submitting.value = true;
          try {
            await studentAPI.requestOverride(selectedSeat.value.id);
            showSuccess('Request Sent', 'Your override request has been submitted to the librarian for approval.');
          } catch (reqErr: any) {
            showError('Request Failed', reqErr.response?.data?.message || 'Failed to submit override request.');
          } finally {
            submitting.value = false;
          }
        }
      } else {
        showError('Seat Restricted', `${data.message} You cannot request an override because there are still available seats assigned to your level (${data.user_level}).`);
      }
      return;
    }
    const errorMessage = error.response?.data?.message || error.message || 'Failed to create booking. Please try again.';
    showError('Booking Failed', errorMessage);
  } finally {
    submitting.value = false;
  }
};

const joinQueue = async () => {
  if (!selectedSeat.value) return;

  submitting.value = true;
  try {
    const response = await studentAPI.joinQueue(selectedSeat.value.id);
    showSuccess('Queue Joined', `You are at position #${response.position} in the queue. We'll notify you when the seat is free.`);
    selectedSeat.value = null;
    fetchSeats();
  } catch (error: any) {
    console.error('Queue joining failed:', error);
    if (error.response?.status === 403 && error.response?.data?.restricted) {
      const data = error.response.data;
      if (data.can_request_override) {
        const confirmRequest = await showConfirm(
          'Seat Restricted',
          `${data.message} Since all seats for your level (${data.user_level}) are currently occupied, you can submit an override request to the librarian.`,
          'Request Override'
        );
        if (confirmRequest) {
          submitting.value = true;
          try {
            await studentAPI.requestOverride(selectedSeat.value.id);
            showSuccess('Request Sent', 'Your override request has been submitted to the librarian for approval.');
          } catch (reqErr: any) {
            showError('Request Failed', reqErr.response?.data?.message || 'Failed to submit override request.');
          } finally {
            submitting.value = false;
          }
        }
      } else {
        showError('Seat Restricted', `${data.message} You cannot request an override because there are still available seats assigned to your level (${data.user_level}).`);
      }
      return;
    }
    const errorMessage = error.response?.data?.message || error.message || 'Could not join the queue.';
    showError('Queue Error', errorMessage);
  } finally {
    submitting.value = false;
  }
};

const sendOverrideRequest = async () => {
  if (!selectedSeat.value) return;
  submitting.value = true;
  try {
    await studentAPI.requestOverride(selectedSeat.value.id);
    showSuccess('Override Request Sent!', 'Your request has been submitted to the librarian for approval.');
    const overrides = await studentAPI.getStudentOverrideRequests();
    userOverrideRequests.value = overrides || [];
  } catch (reqErr: any) {
    showError('Request Failed', reqErr.response?.data?.message || 'Failed to submit override request.');
  } finally {
    submitting.value = false;
  }
};

const goToBookings = () => {
  router.push('/student/my-bookings');
};

let seatsPollTimer: any = null;

onMounted(() => {
  fetchSeats();
  timer = setInterval(() => {
    updateLiveTime();
  }, 1000);
  seatsPollTimer = setInterval(() => {
    fetchSeats(true);
  }, 5000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
  if (seatsPollTimer) clearInterval(seatsPollTimer);
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

.bg-blue-600 {
  background-color: #2563eb;
}
.bg-blue-600:hover {
  background-color: #1d4ed8;
}
.text-indigo-800 {
  color: #312e81;
}
.text-orange-800 {
  color: #c2410c;
}
.text-red-600 {
  color: #dc2626;
}

.active\:scale-98:active {
  transform: scale(0.98);
}
.scale-102 {
  transform: scale(1.02);
}
</style>
