<template>
  <div v-if="loading" class="flex items-center justify-center min-h-[400px]">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>

  <div v-else class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center text-sm text-gray-500 mb-1">
          <router-link to="/student/libraries" class="hover:text-blue-600">Libraries</router-link>
          <ChevronRight class="w-4 h-4 mx-1" />
          <span>{{ library?.name }}</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Select Your Seat</h1>
      </div>

      <!-- Stats bar -->
      <div class="flex items-center space-x-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-[#29B072] mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Available</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-[#FF9D43] mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Occupied</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-[#617DFF] mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Reserved</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Selected</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Main Content: Seat Map -->
      <div class="lg:col-span-3">
        <SeatMap
          :seats="seats"
          :floors="floors"
          :sections="sections"
          :selected-seat="selectedSeat"
          :seat-clickable="true"
          :draggable="false"
          :layout-mode="library?.seat_layout_mode"
          @seat-click="handleSeatClick"
        />
      </div>

      <!-- Sidebar: Booking Summary -->
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
          <h3 class="text-lg font-bold text-gray-800 mb-6">Booking Summary</h3>

          <div v-if="selectedSeat" class="space-y-6">
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div class="flex items-center mb-2">
                <Armchair class="w-5 h-5 text-blue-600 mr-2" />
                <span class="font-bold text-blue-900">Seat {{ selectedSeat.seat_number }}</span>
              </div>
              <p class="text-xs text-blue-700">
                {{ getFloorName(selectedSeat.floor_id) }} • {{ getSectionName(selectedSeat.section_id) }}
              </p>
              <p class="text-xs text-blue-600 mt-1 capitalize">{{ selectedSeat.seat_type }}</p>
            </div>

            <!-- Gender mismatch warning -->
            <div v-if="isGenderMismatch(selectedSeat)" class="p-3 bg-red-50 rounded-xl border border-red-100 flex items-center space-x-2">
              <UserX class="w-4 h-4 text-red-500 flex-shrink-0" />
              <p class="text-xs text-red-600 font-medium">This section is restricted to another gender.</p>
            </div>

            <template v-else>
              <div class="space-y-4">
                <div>
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Duration</label>
                  <select v-model="bookingDuration" class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option :value="1">1 Hour</option>
                    <option :value="2">2 Hours</option>
                    <option :value="4">4 Hours</option>
                    <option :value="8">8 Hours</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Date</label>
                    <input
                      type="date"
                      v-model="selectedDate"
                      :min="minDate"
                      :max="maxDate"
                      class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Start Time</label>
                    <input
                      type="time"
                      v-model="selectedTime"
                      class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div class="pt-6 border-t border-gray-100">
                <button
                  v-if="selectedSeat.status === 'available'"
                  @click="confirmBooking"
                  :disabled="submitting"
                  class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ submitting ? 'Processing...' : 'Confirm Booking' }}
                </button>

                <div v-else class="space-y-4">
                  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-100 text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -mr-8 -mt-8"></div>
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">Seat Occupied</p>
                    <div class="flex items-center justify-center space-x-2 mb-4">
                      <Clock class="w-5 h-5 text-orange-500" />
                      <p class="text-2xl font-black text-gray-800">
                        {{ Math.floor(selectedSeat.remaining_minutes / 60) }}h {{ Math.floor(selectedSeat.remaining_minutes % 60) }}m
                      </p>
                    </div>
                    
                    <div class="space-y-3">
                      <div class="p-3 bg-orange-100 rounded-xl border border-orange-200 mb-4">
                        <p class="text-xs text-orange-800 font-black uppercase tracking-widest">Waitlist Active</p>
                        <p class="text-[10px] text-orange-700 font-medium uppercase">Join now to secure this seat next</p>
                      </div>
                      
                      <button
                        @click="joinQueue"
                        :disabled="submitting"
                        class="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 active:scale-95"
                      >
                        <Zap v-if="!submitting" class="w-5 h-5" />
                        <span v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                        <span>{{ submitting ? 'Joining...' : 'Claim Priority Spot' }}</span>
                      </button>

                      <button 
                        @click="router.push('/student/my-queue')"
                        class="text-[10px] text-blue-600 font-bold hover:underline uppercase tracking-tighter w-full text-center mt-2"
                      >
                        View My Active Waitlists →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <div v-else class="text-center py-12">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Armchair class="w-8 h-8 text-gray-300" />
            </div>
            <p class="text-sm text-gray-500">Please select a seat from the map to continue</p>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-100">
          <div class="flex items-center mb-3">
            <Zap class="w-5 h-5 text-orange-600 mr-2" />
            <h4 class="font-bold text-orange-900 text-sm">Quick Tip</h4>
          </div>
          <p class="text-xs text-orange-800 leading-relaxed">
            Seats near windows are popular in the morning. Group study areas require all members to check in within 15 minutes.
          </p>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all scale-100">
        <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle class="w-10 h-10" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p class="text-gray-600 mb-8">Your seat has been reserved. Please check in within 15 minutes of your start time.</p>
        <button
          @click="goToBookings"
          class="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all"
        >
          View My Bookings
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { studentAPI } from '@/shared/services/api';
import {
  ChevronRight, Armchair, Clock, Zap,
  CheckCircle, UserX
} from 'lucide-vue-next';
import SeatMap from '@/shared/components/SeatMap.vue';

const route = useRoute();
const router = useRouter();

const loading = ref(true);
const submitting = ref(false);
const showSuccessModal = ref(false);

const library = ref<any>(null);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const seats = ref<any[]>([]);

const selectedSeat = ref<any | null>(null);
const bookingDuration = ref(2);

const { user, isTrialActive } = useAuth();

const selectedDate = ref(new Date().toISOString().split('T')[0]);
const selectedTime = ref(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

const minDate = computed(() => new Date().toISOString().split('T')[0]);

const maxDate = computed(() => {
  const today = new Date();
  if (!user.value) return today.toISOString().split('T')[0];

  let allowedDays = 0;

  if (user.value.active_subscription?.subscription_plan) {
    const planDays = user.value.active_subscription.subscription_plan.advance_booking_days;
    if (planDays === -1) {
      const nextYear = new Date(today);
      nextYear.setFullYear(today.getFullYear() + 1);
      return nextYear.toISOString().split('T')[0];
    }
    allowedDays = planDays;
  } else if (isTrialActive.value) {
    allowedDays = 0;
  }

  const max = new Date(today);
  max.setDate(today.getDate() + allowedDays);
  return max.toISOString().split('T')[0];
});

const fetchSeats = async () => {
  try {
    const id = parseInt(route.params.libraryId as string);
    const response = await studentAPI.getSeats(id);

    library.value = response.library;
    floors.value = response.floors;
    sections.value = response.sections;
    seats.value = response.seats;
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
  if (!user.value || !user.value.gender) return true;
  return user.value.gender !== section.gender;
};

const handleSeatClick = (seat: any) => {
  // Toggle selection — clicking the same seat deselects it
  selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showError, showSuccess } = useSwal();

const confirmBooking = async () => {
  if (!selectedSeat.value) return;

  // Validate library hours
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
    await studentAPI.createBooking({
      seat_id: selectedSeat.value.id,
      library_id: library.value.id,
      booking_time: startTime.toISOString(),
      scheduled_end_time: endTime.toISOString(),
      start_time: selectedTime.value,
      end_time: endTime.toTimeString().split(' ')[0].substring(0, 5),
      date: selectedDate.value
    });

    showSuccessModal.value = true;
  } catch (error: any) {
    console.error('Booking failed:', error);
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
