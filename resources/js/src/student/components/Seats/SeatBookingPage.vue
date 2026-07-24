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

      <!-- Stats bar -->
      <div class="flex flex-wrap items-center gap-2 bg-slate-50 border border-slate-100 p-1.5 rounded-xl">
        <div class="flex items-center px-3 py-1 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          <div class="w-2.5 h-2.5 rounded-full bg-[#29B072] mr-2"></div>
          <span>Available</span>
        </div>
        <div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
          <div class="w-2.5 h-2.5 rounded-full bg-[#FF9D43] mr-2"></div>
          <span>Occupied</span>
        </div>
        <div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
          <div class="w-2.5 h-2.5 rounded-full bg-[#617DFF] mr-2"></div>
          <span>Reserved</span>
        </div>
        <div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-600 mr-2"></div>
          <span>Selected</span>
        </div>
      </div>
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
          :layout-mode="library?.seat_layout_mode"
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
                {{ getFloorName(selectedSeat.floor_id) }} • {{ getSectionName(selectedSeat.section_id) }}
              </p>
              <p class="text-[10px] text-blue-500 font-medium mt-1.5 uppercase tracking-wide capitalize leading-none">{{ selectedSeat.seat_type }} Seat</p>
            </div>

            <!-- Gender mismatch warning -->
            <div v-if="isGenderMismatch(selectedSeat)" class="p-3 bg-red-50/60 rounded-xl border border-red-100/50 flex items-start space-x-2">
              <UserX class="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
              <p class="text-[11px] text-red-600 font-medium leading-normal">This section is restricted to another gender.</p>
            </div>

            <!-- Academic Level mismatch warning -->
            <div v-if="isLevelMismatch(selectedSeat)" class="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-2">
              <AlertCircle class="w-4.5 h-4.5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p class="text-[11px] text-amber-800 font-medium leading-normal">
                This seat is reserved for {{ getSectionLevelName(selectedSeat.section_id) }} students.
              </p>
            </div>

            <template v-else>
              <div class="space-y-4">
                <div>
                  <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Duration</label>
                  <select v-model="bookingDuration" :disabled="maxAvailableHours === 0" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    <option v-for="opt in durationOptions" :key="opt.value" :value="opt.value">
                      {{ opt.label }}
                    </option>
                  </select>
                </div>

                <!-- Closing time notice / closed error -->
                <div v-if="showClosingTimeNotice" class="p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-start space-x-2">
                  <AlertCircle class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p class="text-[10px] text-amber-800 font-medium leading-normal m-0">
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
                    <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Date</label>
                    <input
                      type="date"
                      v-model="selectedDate"
                      :min="minDate"
                      :max="maxDate"
                      class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Start Time</label>
                    <input
                      type="time"
                      v-model="selectedTime"
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
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { studentAPI } from '@/shared/services/api';
import {
  ChevronRight, Armchair, Clock, Zap,
  CheckCircle, UserX, AlertCircle
} from 'lucide-vue-next';
import SeatLayoutRenderer from '@/shared/components/SeatLayout/SeatLayoutRenderer.vue';
import { useSwal } from '@/shared/composables/useSwal';
import { useGeolocation } from '@/shared/composables/useGeolocation';

const route = useRoute();
const router = useRouter();

const { showError, showSuccess } = useSwal();
const { latitude, longitude } = useGeolocation();

const loading = ref(true);
const submitting = ref(false);
const showSuccessModal = ref(false);

const library = ref<any>(null);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const seats = ref<any[]>([]);
const tables = ref<any[]>([]);

const selectedSeat = ref<any | null>(null);
const bookingDuration = ref(2);

const { user, isTrialActive } = useAuth();

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
  if (newMax > 0 && newDuration > newMax) {
    bookingDuration.value = newMax;
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

const fetchSeats = async () => {
  try {
    const id = parseInt(route.params.libraryId as string);
    const response = await studentAPI.getSeats(id);

    library.value = response.library;
    floors.value = response.floors;
    sections.value = response.sections;
    seats.value = response.seats;
    tables.value = response.tables || [];
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  } finally {
    loading.value = false;
  }
};

const getFloorName = (id: number) => floors.value.find(f => f.id === id)?.name || '';
const getSectionName = (id: number) => sections.value.find(s => s.id === id)?.name || '';

const isGenderMismatch = (seat: any) => {
  const section = sections.value.find(s => s.id === seat.section_id);
  if (!section || !section.gender || section.gender === 'mixed') return false;
  const studentUser = user.value as any;
  if (!studentUser || !studentUser.gender) return true;
  return studentUser.gender !== section.gender;
};

const isLevelMismatch = (seat: any) => {
  const section = sections.value.find(s => s.id === seat.section_id);
  if (!section || !section.academic_level || section.academic_level === 'all') return false;
  const studentUser = user.value as any;
  if (!studentUser || !studentUser.ca_level) return true;
  return studentUser.ca_level !== section.academic_level;
};

const getSectionLevelName = (sectionId: number) => {
  const section = sections.value.find(s => s.id === sectionId);
  return section?.academic_level || 'All Levels';
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

  const startTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
  const endTime = new Date(startTime.getTime() + bookingDuration.value * 60 * 60 * 1000);

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

  if (startTime < openDate || endTime > closeDate) {
    showError('Outside Operation Hours', `This library is only open from ${operatingHour.openTime} to ${operatingHour.closeTime} on ${dayName}s.`);
    return;
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
      scheduled_end_time: formatLocalDatetime(endTime),
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

const goToBookings = () => {
  router.push('/student/my-bookings');
};

onMounted(fetchSeats);
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
