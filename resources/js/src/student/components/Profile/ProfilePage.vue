<template>
  <div class="space-y-8 pb-12">
   
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative group">
          <div class="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
            <img 
              v-if="user?.profile_picture" 
              :src="getProfilePictureUrl(user.profile_picture)" 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
            <span v-else>{{ user?.name?.charAt(0).toUpperCase() }}</span>
          </div>
          <button 
            @click="triggerFileInput"
            class="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <Camera class="w-5 h-5" />
          </button>
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept="image/*"
            @change="handleFileChange"
          />
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ user?.name }}</h1>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
            <div class="flex items-center">
              <Mail class="w-4 h-4 mr-2 text-blue-500" />
              {{ user?.email }}
            </div>
            <div class="flex items-center" v-if="user?.phone">
              <Phone class="w-4 h-4 mr-2 text-blue-500" />
              {{ user?.phone }}
            </div>
            <div class="flex items-center">
              <UserIcon class="w-4 h-4 mr-2 text-blue-500" />
              CRN: {{ user?.crn || 'N/A' }}
            </div>
          </div>
          
          <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <span class="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
              {{ user?.ca_level || 'PRC' }} Level
            </span>
            <span class="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-bold border border-purple-100">
              {{ user?.role?.toUpperCase() }}
            </span>
            <span v-if="user?.isApproved" class="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">
              Verified Account
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
     
      <div class="lg:col-span-2 space-y-12">
       
        <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-800">Current & Upcoming Bookings</h2>
          <router-link to="/student/libraries" class="text-sm text-blue-600 font-bold hover:underline">Book New Seat</router-link>
        </div>

        <div v-if="activeBookings.length === 0" class="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200">
          <Armchair class="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p class="text-gray-500">You don't have any active bookings at the moment.</p>
        </div>

        <div v-else class="space-y-4">
          <div 
            v-for="booking in activeBookings" 
            :key="booking.id"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div class="flex items-start gap-4">
                <div class="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Armchair class="w-8 h-8" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 text-lg">Seat {{ booking.seat?.seat_number }}</h3>
                  <p class="text-gray-500 text-sm flex items-center">
                    <MapPin class="w-3.5 h-3.5 mr-1" />
                    {{ booking.seat?.library?.name }}
                  </p>
                  <div class="flex items-center mt-2 text-xs font-bold uppercase tracking-wider">
                    <span :class="[
                      'px-2 py-0.5 rounded',
                      booking.status === 'checked_in' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    ]">
                      {{ booking.status === 'checked_in' ? 'Active Now' : 'Upcoming' }}
                    </span>
                  </div>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span v-if="booking.seat?.has_computer" class="flex items-center text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold">
                      <Monitor class="w-3 h-3 mr-1" /> Computer
                    </span>
                    <span v-if="booking.seat?.near_window" class="flex items-center text-[10px] bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg font-bold">
                      <Layout class="w-3 h-3 mr-1" /> Window
                    </span>
                    <span v-if="booking.seat?.socket_count > 0" class="flex items-center text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-lg font-bold">
                      <Zap class="w-3 h-3 mr-1" /> {{ booking.seat.socket_count }} Sockets
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-end gap-2">
                <div class="text-right">
                  <p class="text-xs text-gray-400 font-bold uppercase">Time Remaining</p>
                  <p class="text-2xl font-black text-gray-800 font-mono">
                    {{ getRemainingTime(booking) }}
                  </p>
                </div>
                <div class="flex gap-2">
                  <button 
                    v-if="booking.status === 'booked'"
                    @click="handleCheckIn(booking.id)"
                    class="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
                  >
                    Check In
                  </button>
                  <button 
                    v-if="booking.status === 'booked'"
                    @click="handleCancel(booking.id)"
                    class="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-colors shadow-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    v-if="booking.status === 'checked_in'"
                    @click="handleCheckOut(booking.id)"
                    class="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-colors shadow-sm"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- Booking History Section -->
        <div class="mt-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-800">Booking History</h2>
          <select v-model="historyFilter" class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Bookings</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div v-if="!filteredHistory || filteredHistory.length === 0" class="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200">
          <Clock class="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p class="text-gray-500">No booking history found.</p>
        </div>

        <div v-else class="space-y-4">
          <div 
            v-for="booking in filteredHistory" 
            :key="booking.id"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start space-x-4 flex-1">
                <div :class="[
                  'p-3 rounded-xl',
                  booking.status === 'checked_out' ? 'bg-green-50' :
                  booking.status === 'cancelled' ? 'bg-red-50' :
                  'bg-gray-50'
                ]">
                  <Armchair :class="[
                    'w-6 h-6',
                    booking.status === 'checked_out' ? 'text-green-600' :
                    booking.status === 'cancelled' ? 'text-red-600' :
                    'text-gray-600'
                  ]" />
                </div>
                
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <h3 class="font-bold text-gray-800">Seat {{ booking.seat?.seat_number }}</h3>
                    <span :class="[
                      'px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider',
                      booking.status === 'checked_out' ? 'bg-green-100 text-green-700' :
                      booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    ]">
                      {{ booking.status.replace('_', ' ') }}
                    </span>
                  </div>
                  
                  <div class="space-y-1 text-sm text-gray-600">
                    <div class="flex items-center">
                      <MapPin class="w-4 h-4 mr-2 text-gray-400" />
                      {{ booking.seat?.library?.name }}
                    </div>
                    <div class="flex items-center">
                      <Clock class="w-4 h-4 mr-2 text-gray-400" />
                      {{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}
                    </div>
                    <div v-if="booking.total_minutes" class="flex items-center">
                      <Zap class="w-4 h-4 mr-2 text-gray-400" />
                      Duration: {{ formatDuration(booking.total_minutes) }}
                    </div>
                  </div>

                  <div v-if="booking.seat" class="flex flex-wrap gap-2 mt-3">
                    <span v-if="booking.seat.has_computer" class="flex items-center text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold">
                      <Monitor class="w-3 h-3 mr-1" /> Computer
                    </span>
                    <span v-if="booking.seat.near_window" class="flex items-center text-[10px] bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg font-bold">
                      <Layout class="w-3 h-3 mr-1" /> Window
                    </span>
                    <span v-if="booking.seat.socket_count > 0" class="flex items-center text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-lg font-bold">
                      <Zap class="w-3 h-3 mr-1" /> {{ booking.seat.socket_count }} Sockets
                    </span>
                  </div>
                </div>
              </div>

              <div class="text-right ml-4">
                <div class="text-xs text-gray-400 mb-1">{{ formatDate(booking.booking_time) }}</div>
                <div v-if="booking.status === 'checked_out' && booking.total_minutes" class="text-sm font-bold text-green-600">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Load More Button -->
          <button 
            v-if="filteredHistory && filteredHistory.length >= 10"
            class="w-full py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors border border-blue-200"
          >
            Load More History
          </button>
        </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-8">
        <!-- Subscription Card -->
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
              <Zap class="w-8 h-8 text-yellow-400" />
              <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                {{ user?.active_subscription ? 'Active Plan' : 'No Active Plan' }}
              </span>
            </div>
            
            <h3 class="text-2xl font-black mb-1">{{ user?.active_subscription?.subscription_plan?.name || 'Basic Access' }}</h3>
            <p class="text-white/60 text-sm mb-8">
              {{ user?.active_subscription ? `Valid until ${formatDate(user.active_subscription.expires_at)}` : 'Subscribe to unlock premium features' }}
            </p>
            
            <div v-if="user?.active_subscription" class="space-y-4 mb-8">
              <div class="flex justify-between text-sm">
                <span class="text-white/60">Book Reservations</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.book_reservations_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.book_reservations_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-white/60">Daily Seat Bookings</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.daily_seat_bookings_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-white/60">Library Access</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.libraries_access_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.libraries_access_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-white/60">Advance Booking</span>
                <span class="font-bold">
                  <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">Unlimited</span>
                  <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Same Day</span>
                  <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }} Days</span>
                </span>
              </div>
            </div>

            <router-link 
              to="/student/subscription" 
              class="block w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              {{ user?.active_subscription ? 'Manage Plan' : 'View Plans' }}
            </router-link>
          </div>
        </div>
 
        <!-- Session Management Section -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <SessionManagement />
        </div>

        <!-- Quick Actions -->
        
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
          @click="goToDashboard"
          class="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all"
        >
          Go to Dashboard
        </button>
      </div>
    </div>

  </div>
 
 
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useApp } from '@/shared/composables/useApp';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { 
  Camera, Mail, Phone, User as UserIcon, Trophy, 
  Armchair, MapPin, Clock, ChevronRight, Zap,
  Bell, Lock, CreditCard, Settings, CheckCircle,
  Monitor, Layout
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { parseISO } from 'date-fns';

const { user, checkAuth } = useAuth();
const router = useRouter();
const { bookings, loadBookings, checkInSeat, checkOutSeat, extendSeatBooking, cancelBooking } = useApp();
const now = ref(new Date());
let timer: any = null;
const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError, showWarning } = useSwal();

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      showWarning('File too large', 'File size must be less than 2MB');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('profile_picture', file);
      
      await studentAPI.updateProfile(formData);
      await checkAuth(); // Refresh user data to show new image
      showSuccess('Updated!', 'Profile picture updated successfully');
    } catch (error) {
      console.error('Failed to update profile picture:', error);
      showError('Update Failed', 'Failed to update profile picture');
    }
  }
};

// Booking history filter
const historyFilter = ref<'all' | 'completed' | 'cancelled'>('all');
const showSuccessModal = ref(false);

const activeBookings = computed(() => {
  return bookings.value.filter(b => 
    b.status === 'booked' || b.status === 'checked_in'
  ).sort((a, b) => new Date(a.booking_time).getTime() - new Date(b.booking_time).getTime());
});

const filteredHistory = computed(() => {
  const pastBookings = bookings.value.filter(b => 
    b.status === 'checked_out' || b.status === 'cancelled' || b.status === 'expired'
  );
  
  if (historyFilter.value === 'all') {
    return pastBookings;
  } else if (historyFilter.value === 'completed') {
    return pastBookings.filter(b => b.status === 'checked_out');
  } else if (historyFilter.value === 'cancelled') {
    return pastBookings.filter(b => b.status === 'cancelled' || b.status === 'expired');
  }
  
  return pastBookings;
});





const getRemainingTime = (booking: any) => {
  const endTimeStr = booking.scheduled_end_time || booking.end_time || booking.endTime;
  if (!endTimeStr) return '00:00:00';
  
  try {
    // parseISO handles ISO 8601 strings (like those returned by Laravel) accurately
    const end = parseISO(endTimeStr);
    if (isNaN(end.getTime())) return '00:00:00';
    
    // Compare with current time
    const diff = end.getTime() - now.value.getTime();
    
    if (diff <= 0) return '00:00:00';
    
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  } catch (e) {
    return '00:00:00';
  }
};

const formatDate = (date: string | undefined) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const formatTime = (date: string | undefined) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });
};

const handleCheckIn = (id: number) => {
  router.push({ 
    name: 'student-qr-checkin', 
    query: { booking_id: id.toString() } 
  });
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

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

const goToDashboard = () => {
  showSuccessModal.value = false;
  router.push('/student/dashboard');
};

onMounted(async () => {
  await loadBookings();
  timer = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
