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
      
      <div class="flex items-center space-x-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Available</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Occupied</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
          <span class="text-xs font-medium text-gray-600">In Queue</span>
        </div>
        <div class="flex items-center px-3 py-1">
          <div class="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
          <span class="text-xs font-medium text-gray-600">Selected</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Main Content: Seat Map -->
      <div class="lg:col-span-3 space-y-6">
        <!-- Floor & Section Selectors -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex flex-col space-y-6">
            <!-- Floors -->
            <div>
              <label class="text-sm font-semibold text-gray-700 mb-3 block">Floor</label>
              <div class="flex flex-wrap gap-2">
                <button 
                  @click="selectedFloor = null; selectedSection = null"
                  :class="[
                    'px-6 py-2 rounded-xl text-sm font-bold transition-all',
                    selectedFloor === null 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  All Floors
                </button>
                <button 
                  v-for="floor in floors" 
                  :key="floor.id"
                  @click="selectedFloor = floor.id; selectedSection = null"
                  :class="[
                    'px-6 py-2 rounded-xl text-sm font-bold transition-all',
                    selectedFloor === floor.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  {{ floor.name }}
                </button>
              </div>
            </div>

            <!-- Sections -->
            <div v-if="filteredSections.length || selectedFloor">
              <label class="text-sm font-semibold text-gray-700 mb-3 block">Section</label>
              <div class="flex flex-wrap gap-2">
                <button 
                  @click="selectedSection = null"
                  :class="[
                    'px-4 py-2 rounded-lg text-xs font-bold transition-all border',
                    selectedSection === null 
                      ? 'bg-blue-50 border-blue-200 text-blue-700' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                  ]"
                >
                  All Sections
                </button>
                <button 
                  v-for="section in filteredSections" 
                  :key="section.id"
                  @click="selectedSection = section.id"
                  :class="[
                    'px-4 py-2 rounded-lg text-xs font-bold transition-all border',
                    selectedSection === section.id 
                      ? 'bg-blue-50 border-blue-200 text-blue-700' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                  ]"
                >
                  {{ section.name }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Seat Grid (Grouped) -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
          <!-- Feature Legend -->
          <div class="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-50">
            <div class="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <Monitor class="w-3.5 h-3.5 mr-1.5 text-blue-500/50" /> Computer
            </div>
            <div class="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <Wind class="w-3.5 h-3.5 mr-1.5 text-yellow-600/50" /> Near Window
            </div>
            <div class="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <Zap class="w-3.5 h-3.5 mr-1.5 text-green-500/50" /> Power Socket
            </div>
          </div>

          <div v-if="Object.keys(groupedSeats).length > 0" class="space-y-12">
            <div v-for="(sections, floorName) in groupedSeats" :key="floorName" class="space-y-8">
              <div class="flex items-center space-x-4">
                <div class="h-px flex-1 bg-gray-100"></div>
                <h3 class="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{{ floorName }}</h3>
                <div class="h-px flex-1 bg-gray-100"></div>
              </div>

              <div v-for="(seats, sectionName) in sections" :key="sectionName" class="space-y-4">
                <div class="flex items-center justify-between px-2">
                  <h4 class="text-xs font-bold text-blue-600 flex items-center">
                    <Layout class="w-3.5 h-3.5 mr-2" />
                    {{ sectionName }}
                  </h4>
                  <span class="text-[10px] text-gray-400 font-medium">{{ seats.length }} Total Seats</span>
                </div>

                <!-- Mode 1: Grid View (Detailed List) -->
                <div v-if="library?.seat_layout_mode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button 
                    v-for="seat in seats" 
                    :key="seat.id"
                    @click="toggleSeatSelection(seat)"
                    :class="[
                      'p-4 rounded-xl flex items-center justify-between transition-all border group relative',
                      selectedSeat?.id === seat.id 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                        : (seat.status === 'available' 
                            ? 'bg-white hover:bg-green-50 border-gray-100 hover:border-green-200' 
                            : 'bg-gray-50 border-transparent text-gray-400 opacity-80')
                    ]"
                  >
                    <div class="flex items-center space-x-3">
                      <div :class="['p-2 rounded-lg', selectedSeat?.id === seat.id ? 'bg-white/20' : 'bg-gray-100 text-gray-400']">
                        <Armchair class="w-4 h-4" />
                      </div>
                      <div class="text-left">
                        <p class="font-bold text-sm">Seat {{ seat.seat_number }}</p>
                        <p class="text-[10px] opacity-70">{{ seat.seat_type }}</p>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="flex space-x-1 mr-2">
                        <Monitor v-if="seat.has_computer" class="w-3 h-3 opacity-50" />
                        <Zap v-if="seat.socket_count > 0" class="w-3 h-3 opacity-50" />
                      </div>
                      <span :class="[
                        'text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md',
                        selectedSeat?.id === seat.id 
                          ? 'bg-white/20 text-white' 
                          : (seat.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500')
                      ]">
                        {{ seat.status }}
                      </span>
                    </div>
                  </button>
                </div>

                <!-- Mode 2: Student Layout (Visual Map) -->
                <div v-else class="relative bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-100 overflow-hidden" :style="{ height: '500px' }">
                  <!-- Empty Layout Placeholder -->
                  <div v-if="!seats.some(s => s.position_x || s.position_y)" class="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <Layout class="w-12 h-12 mb-3 opacity-20" />
                    <p class="text-xs font-medium">Layout coordinates not set</p>
                    <p class="text-[10px] opacity-60">Displaying in auto-grid fallback</p>
                    <div class="grid grid-cols-6 sm:grid-cols-10 gap-2 mt-6">
                        <div v-for="seat in seats" :key="seat.id + '-fallback'" class="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[10px] font-bold">
                            {{ seat.seat_number }}
                        </div>
                    </div>
                  </div>

                  <!-- Interactive Seat Map (No padding to match librarian offsets) -->
                  <div v-else class="absolute inset-0">
                    <button 
                      v-for="seat in seats" 
                      :key="seat.id"
                      @click="toggleSeatSelection(seat)"
                      :class="[
                        'absolute w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center transition-all transform hover:scale-110 group',
                        selectedSeat?.id === seat.id 
                          ? 'bg-blue-600 text-white shadow-lg z-20 scale-110 border-2 border-white' 
                          : (seat.status === 'available' 
                              ? 'bg-white text-green-600 hover:bg-green-50 border-2 border-green-100 hover:border-green-200 shadow-sm' 
                              : 'bg-gray-100 text-gray-400 border-2 border-transparent grayscale opacity-60')
                      ]"
                      :style="{ 
                        left: seat.position_x + 'px', 
                        top: seat.position_y + 'px' 
                      }"
                    >
                      <!-- Feature Indicators (Mini) -->
                      <div class="absolute top-1 right-1 flex flex-col items-end space-y-0.5 pointer-events-none">
                        <div v-if="seat.has_computer" class="w-1.5 h-1.5 rounded-full bg-blue-400 border border-white"></div>
                        <div v-if="seat.near_window" class="w-1.5 h-1.5 rounded-full bg-yellow-400 border border-white"></div>
                        <div v-if="seat.socket_count > 0" class="w-1.5 h-1.5 rounded-full bg-green-400 border border-white"></div>
                      </div>

                      <Armchair class="w-5 h-5 mb-0.5" />
                      <span class="text-[10px] font-black">{{ seat.seat_number }}</span>
                      
                      <!-- Enhanced Tooltip -->
                      <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-2xl border border-white/10 z-30 whitespace-nowrap">
                        <div class="flex items-center justify-between gap-4 mb-1">
                          <span class="font-bold">{{ seat.seat_type }}</span>
                          <span :class="seat.status === 'available' ? 'text-green-400' : 'text-gray-400'">{{ seat.status }}</span>
                        </div>
                        <div class="flex flex-col gap-1 text-gray-400">
                          <div v-if="seat.has_computer" class="flex items-center"><Monitor class="w-3 h-3 mr-1 text-blue-400" /> Computer</div>
                          <div v-if="seat.near_window" class="flex items-center"><Wind class="w-3 h-3 mr-1 text-yellow-400" /> Window Side</div>
                          <div v-if="seat.socket_count > 0" class="flex items-center"><Zap class="w-3 h-3 mr-1 text-green-400" /> {{ seat.socket_count }} Sockets</div>
                        </div>
                        <div class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="flex flex-col items-center justify-center py-20 text-gray-400">
            <Armchair class="w-16 h-16 mb-4 opacity-20" />
            <p>No seats found matching your criteria</p>
          </div>
        </div>
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
            </div>

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
                <div v-if="selectedSeat.remaining_minutes > 15" class="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Currently Occupied</p>
                    <p class="text-sm text-gray-700">Ends in: {{ Math.floor(selectedSeat.remaining_minutes / 60) }}h {{ Math.floor(selectedSeat.remaining_minutes % 60) }}m</p>
                    <p class="text-[10px] text-gray-400 mt-2 font-medium italic">Queue opens when 10 mins remain</p>
                </div>
                <div v-else-if="selectedSeat.remaining_minutes > 10" class="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                    <p class="text-xs text-orange-700 font-medium font-bold uppercase tracking-wider mb-2">Session Ending Soon</p>
                    <p class="text-sm text-gray-700">Ends in: {{ Math.floor(selectedSeat.remaining_minutes / 60) }}h {{ Math.floor(selectedSeat.remaining_minutes % 60) }}m</p>
                    <p class="text-[10px] text-orange-600 mt-2 font-medium italic">Queue opens in {{ selectedSeat.remaining_minutes - 10 }} mins</p>
                </div>
                <template v-else>
                    <div class="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                        <p class="text-xs text-orange-700 font-medium font-bold">Session Ending Soon!</p>
                        <p class="text-[10px] text-orange-600 mt-1">You can now join the queue to claim this seat next.</p>
                    </div>
                    <button 
                        @click="joinQueue"
                        :disabled="submitting"
                        class="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                        <Clock v-if="!submitting" class="w-4 h-4" />
                        <span v-else class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        <span>{{ submitting ? 'Joining...' : 'Join Waiting List' }}</span>
                    </button>
                </template>
              </div>
            </div>
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
          @click="goToProfile"
          class="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all"
        >
          Go to My Profile
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
  CheckCircle, Info, AlertCircle, Monitor, Layout, Wind
} from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const loading = ref(true);
const submitting = ref(false);
const showSuccessModal = ref(false);

const library = ref<any>(null);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const seats = ref<any[]>([]);

const selectedFloor = ref<number | null>(null);
const selectedSection = ref<number | null>(null);
const selectedSeat = ref<any | null>(null);
const bookingDuration = ref(2);

const { user, isTrialActive } = useAuth();

const selectedDate = ref(new Date().toISOString().split('T')[0]);
const selectedTime = ref(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

const minDate = computed(() => new Date().toISOString().split('T')[0]);

const maxDate = computed(() => {
  const today = new Date();
  
  // Default to today if no user info
  if (!user.value) return today.toISOString().split('T')[0];

  let allowedDays = 0;

  if (user.value.active_subscription?.subscription_plan) {
    const planDays = user.value.active_subscription.subscription_plan.advance_booking_days;
    
    if (planDays === -1) {
      // Unlimited, set to 1 year ahead
      const nextYear = new Date(today);
      nextYear.setFullYear(today.getFullYear() + 1);
      return nextYear.toISOString().split('T')[0];
    }
    
    allowedDays = planDays;
  } else if (isTrialActive.value) {
    // Trial users can only book for today
    allowedDays = 0;
  }

  const max = new Date(today);
  max.setDate(today.getDate() + allowedDays);
  return max.toISOString().split('T')[0];
});

const currentTime = computed(() => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});

const filteredSections = computed(() => {
  if (!selectedFloor.value) return sections.value;
  return sections.value.filter(s => s.floor_id === selectedFloor.value);
});

const filteredSeats = computed(() => {
  let filtered = seats.value;
  if (selectedFloor.value) {
    filtered = filtered.filter(s => s.floor_id === selectedFloor.value);
  }
  if (selectedSection.value) {
    filtered = filtered.filter(s => s.section_id === selectedSection.value);
  }
  return filtered;
});

const groupedSeats = computed(() => {
  const groups: any = {};
  filteredSeats.value.forEach(seat => {
    const floorName = getFloorName(seat.floor_id) || 'Unknown Floor';
    const sectionName = getSectionName(seat.section_id) || 'No Section';
    if (!groups[floorName]) groups[floorName] = {};
    if (!groups[floorName][sectionName]) groups[floorName][sectionName] = [];
    groups[floorName][sectionName].push(seat);
  });
  return groups;
});

const fetchSeats = async () => {
  try {
    const id = parseInt(route.params.libraryId as string);
    const response = await studentAPI.getSeats(id);
    
    library.value = response.library;
    floors.value = response.floors;
    sections.value = response.sections;
    seats.value = response.seats;

    // Default to All Floors and All Sections (null)
    selectedFloor.value = null;
    selectedSection.value = null;
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  } finally {
    loading.value = false;
  }
};

const toggleSeatSelection = (seat: any) => {
  selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
};

const getFloorName = (id: number) => floors.value.find(f => f.id === id)?.name || '';
const getSectionName = (id: number) => sections.value.find(s => s.id === id)?.name || '';

import { useSwal } from '@/shared/composables/useSwal';
const { showError, showSuccess } = useSwal();

const confirmBooking = async () => {
  if (!selectedSeat.value) return;
  
  submitting.value = true;
  try {
    const startTime = new Date(`${selectedDate.value}T${selectedTime.value}`);
    const endTime = new Date(startTime.getTime() + bookingDuration.value * 60 * 60 * 1000);
    
    await studentAPI.createBooking({
      seat_id: selectedSeat.value.id,
      library_id: library.value.id,
      booking_time: startTime.toISOString(),
      scheduled_end_time: endTime.toISOString(),
      // Backend might expect these too
      start_time: selectedTime.value,
      end_time: endTime.toTimeString().split(' ')[0].substring(0, 5),
      date: selectedDate.value
    });
    
    showSuccessModal.value = true;
  } catch (error: any) {
    console.error('Booking failed:', error);
    showError('Booking Failed', error.message || 'Failed to create booking. Please try again.');
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
    showError('Queue Error', error.message || 'Could not join the queue.');
  } finally {
    submitting.value = false;
  }
};

const goToProfile = () => {
  router.push('/student/profile');
};

onMounted(fetchSeats);
</script>
