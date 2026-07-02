<template>
  <div class="space-y-6 font-outfit">
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading subscription plans...</p>
    </div>
    
    <template v-else>
      <!-- Expired Plan Alert -->
      <div v-if="isPlanExpired" class="bg-rose-50/60 border border-rose-200 p-5 rounded-2xl mb-8 flex items-center shadow-sm text-left">
        <div class="p-3 bg-rose-100 border border-rose-200 rounded-xl text-rose-600 mr-4">
          <AlertTriangle class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-sm font-bold text-rose-800 uppercase tracking-wider">Your subscription has expired</h3>
          <p class="text-xs text-rose-605/90 mt-1">Please select and subscribe to a plan below to resume library and seat booking access.</p>
        </div>
      </div>

      <!-- Current Active Plan Summary -->
      <div v-if="user?.active_subscription" class="bg-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden mb-12 border border-blue-700">
        <div class="absolute -right-10 -top-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -left-10 -bottom-10 w-56 h-56 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
        
        <div class="relative z-10 text-left">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="text-left">
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                Active Subscription
              </div>
              <h2 class="text-3xl font-black tracking-tight mb-2 text-white leading-tight">{{ user.active_subscription.subscription_plan?.name }}</h2>
              <p class="text-blue-100 text-sm max-w-xl mb-5 font-normal leading-relaxed">{{ user.active_subscription.subscription_plan?.description }}</p>
              <div class="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div class="flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl">
                  <Calendar class="w-3.5 h-3.5 mr-2 text-blue-200" />
                  <span>Expires: {{ formatDate(user.active_subscription.expires_at) }}</span>
                </div>
                <div class="flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl">
                  <CreditCard class="w-3.5 h-3.5 mr-2 text-emerald-300" />
                  <span>Paid: Rs. {{ user.active_subscription.amount_paid }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start md:items-end gap-1 bg-white/10 border border-white/15 rounded-2xl p-4 md:p-6 min-w-[140px] text-left md:text-right">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest leading-none">Days Remaining</div>
              <div class="text-4xl font-black text-white mt-1.5 leading-none">{{ calculateRemainingDays(user.active_subscription.expires_at) }}</div>
            </div>
          </div>

          <!-- Current Plan Limits -->
          <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/15">
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Daily Seats</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit || '∞' }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Monthly Seats</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.monthly_seat_bookings_limit || '∞' }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Libraries Access</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.libraries_access_limit || '∞' }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Books Access</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.books_access_limit || '∞' }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Events Limit</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.events_joining_limit || '∞' }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Adv. Booking</div>
              <div class="text-xl font-bold text-white leading-none">
                <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">∞</span>
                <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Today</span>
                <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }}d</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Choose Your Plan Header -->
      <div class="text-left mt-10 mb-8">
        <h2 class="text-2xl font-black text-slate-800 tracking-tight font-outfit">Choose Your Plan</h2>
      </div>

      <!-- All Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-outfit items-stretch mb-12">
        <div 
          v-for="plan in plans" 
          :key="plan.id"
          class="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-100/80 border transition-all duration-300 hover-lift relative text-left flex flex-col justify-between"
          :class="[
            plan.name.toLowerCase().includes('premium') && plan.name.toLowerCase().includes('monthly') ? 'border-[#f97316] ring-4 ring-[#f97316]/5' : 
            plan.name.toLowerCase().includes('premium') ? 'border-[#8b5cf6] ring-4 ring-[#8b5cf6]/5' : 
            'border-slate-200/80'
          ]"
        >
          <!-- Badge overlay -->
          <div 
            v-if="plan.name.toLowerCase().includes('premium') && plan.name.toLowerCase().includes('monthly')" 
            class="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#f97316] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-orange-500/15 border border-orange-400/20 z-10 whitespace-nowrap animate-pulse-slow"
          >
            <span class="text-[10px]">⭐</span>
            <span>Most Popular</span>
          </div>
          <div 
            v-else-if="plan.name.toLowerCase().includes('premium')" 
            class="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-blue-500/15 border border-blue-400/20 z-10 whitespace-nowrap animate-pulse-slow"
          >
            <span class="text-[10px]">👑</span>
            <span>Recommended</span>
          </div>

          <!-- Card Content -->
          <div class="p-8 flex-grow flex flex-col">
            <!-- Header Section (Plan title, Price, bookings) -->
            <div class="text-center w-full mb-6">
              <h3 class="text-sm font-extrabold text-slate-800 tracking-tight uppercase leading-none mb-3.5">{{ plan.name }}</h3>
              
              <div class="flex flex-col items-center justify-center">
                <div class="flex items-baseline justify-center">
                  <span class="text-3xl font-black text-slate-900">PKR {{ formatPrice(plan.price) }}</span>
                  <span class="ml-1 text-slate-400 text-xs font-semibold">
                    {{ 
                      plan.price == 0 ? '/forever' : formatDuration(plan.duration_days)
                    }}
                  </span>
                </div>
                <!-- Bookings Count description -->
                <p class="text-xs font-bold text-slate-500 mt-2.5 leading-none">
                  {{ 
                    plan.monthly_seat_bookings_limit 
                      ? `${plan.monthly_seat_bookings_limit} bookings` 
                      : (plan.daily_seat_bookings_limit ? `${plan.daily_seat_bookings_limit} bookings/day` : 'Unlimited bookings')
                  }}
                </p>
                <!-- Description -->
                <p v-if="plan.description" class="text-xs text-slate-500/80 mt-3 line-clamp-2 max-w-[220px] text-center font-medium leading-relaxed">
                  {{ plan.description }}
                </p>
              </div>
            </div>

            <!-- Features List -->
            <ul class="w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6">
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  {{ plan.daily_seat_bookings_limit ? `${plan.daily_seat_bookings_limit} Daily Seat Bookings` : 'Unlimited Daily Seat Bookings' }}
                </span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  {{ plan.monthly_seat_bookings_limit ? `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings` : 'Unlimited Monthly Seat Bookings' }}
                </span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  {{ plan.libraries_access_limit ? `${plan.libraries_access_limit} Libraries Access` : 'Unlimited Libraries Access' }}
                </span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  {{ plan.books_access_limit ? `${plan.books_access_limit} Books Access` : 'Unlimited Books Access' }}
                </span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  {{ plan.events_joining_limit ? `${plan.events_joining_limit} Events Joining` : 'Unlimited Events Joining' }}
                </span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  <span v-if="plan.advance_booking_days === -1">Unlimited Advance Booking</span>
                  <span v-else-if="plan.advance_booking_days === 0">Same Day Booking Only</span>
                  <span v-else>{{ plan.advance_booking_days }} Days Advance Booking</span>
                </span>
              </li>
              <li v-if="plan.digital_books_access" class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  Digital Books Access
                </span>
              </li>
              <li v-if="plan.priority_booking" class="flex items-start">
                <svg class="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 text-xs text-slate-600 font-bold leading-normal text-left">
                  Priority Seat Booking
                </span>
              </li>
            </ul>
          </div>

          <!-- Button Container -->
          <div class="p-8 pt-0 mt-auto w-full">
            <!-- Current Active Plan Button -->
            <button
              v-if="isCurrentPlan(plan.id) && !isPlanExpired"
              disabled
              class="w-full bg-[#f1f5f9] border border-slate-200 text-slate-400 rounded-xl px-4 py-3.5 text-xs font-black uppercase tracking-wider cursor-default flex items-center justify-center space-x-2"
            >
              <span>Current Plan</span>
            </button>

            <!-- Subscribe/Upgrade Button -->
            <button
              v-else
              @click="subscribe(plan)"
              :disabled="subscribingPlanId !== null || !!user?.pending_order"
              :class="[
                'w-full rounded-xl px-4 py-3.5 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border shadow-sm duration-200',
                user?.pending_order?.plan_id === plan.id
                  ? 'bg-amber-50 text-amber-700 border-amber-300 cursor-not-allowed shadow-none'
                  : (!!user?.pending_order
                      ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed shadow-none'
                      : getPlanBtnClass(plan.name))
              ]"
            >
              <template v-if="subscribingPlanId === plan.id">
                <Loader2 class="w-3.5 h-3.5 animate-spin" />
                <span>Processing...</span>
              </template>
              <template v-else-if="user?.pending_order?.plan_id === plan.id">
                <Clock class="w-3.5 h-3.5 text-amber-500" />
                <span>Pending Approval</span>
              </template>
              <template v-else>
                <span>{{ isCurrentPlan(plan.id) ? 'Renew Now' : 'Upgrade Now' }}</span>
              </template>
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { studentAPI } from '@/student/services/studentApi';
import { useAuth } from '@/shared/composables/useAuth';
import { useRouter } from 'vue-router';
import { 
  Calendar, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle, 
  Loader2, 
  Clock, 
  RefreshCw, 
  Zap 
} from 'lucide-vue-next';

const { user, checkAuth, isPlanExpired } = useAuth();
const router = useRouter();

const plans = ref<any[]>([]);
const isLoading = ref(true);
const subscribingPlanId = ref<number | null>(null);

const hasActiveSubscription = computed(() => {
  return !!user.value?.active_subscription;
});

const isCurrentPlan = (planId: number) => {
  return user.value?.active_subscription?.subscription_plan_id === planId;
};

const formatPrice = (price: any) => {
  const val = Number(price);
  if (isNaN(val)) return price;
  return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const formatDuration = (days: number) => {
  if (!days) return '';
  if (days === 30) return '/per month';
  if (days === 90) return '/3 months';
  if (days === 180) return '/6 months';
  if (days === 365) return '/12 months';
  return `/ ${days} days`;
};

const getPlanBtnClass = (planName: string) => {
  const name = planName.toLowerCase();
  if (name.includes('premium') && name.includes('monthly')) {
    return 'bg-[#f97316] hover:bg-[#ea580c] border-[#f97316] text-white hover:shadow-md hover-lift active:scale-98';
  } else if (name.includes('premium')) {
    return 'bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:opacity-95 border-transparent text-white hover:shadow-md hover-lift active:scale-98';
  } else if (name.includes('annual') || name.includes('yearly')) {
    return 'bg-[#2563eb] hover:bg-[#1d4ed8] border-[#2563eb] text-white hover:shadow-md hover-lift active:scale-98';
  }
  return 'bg-[#f1f5f9] hover:bg-[#e2e8f0] border-slate-200 text-slate-700 active:scale-98';
};

const parseFeatures = (features: any) => {
  if (Array.isArray(features)) return features;
  if (typeof features === 'string') {
      try {
          return JSON.parse(features);
      } catch (e) {
          return [features];
      }
  }
  return [];
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const calculateRemainingDays = (expiryDate: string) => {
  if (!expiryDate) return 0;
  const diff = new Date(expiryDate).getTime() - new Date().getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.max(0, days);
};

const fetchPlans = async () => {
  try {
    isLoading.value = true;
    plans.value = await studentAPI.getSubscriptionPlans();
  } catch (error) {
    console.error('Error fetching plans:', error);
  } finally {
    isLoading.value = false;
  }
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const subscribe = async (plan: any) => {
  if (!await showConfirm('Confirm Subscription', `Are you sure you want to subscribe to the ${plan.name} plan for Rs. ${plan.price}?`, 'Yes, Subscribe')) {
    return;
  }

  try {
    subscribingPlanId.value = plan.id;
    const response = await studentAPI.subscribe(plan.id);
    await checkAuth(); // Refresh user to get updated subscription status
    showSuccess('Request Sent!', response.message || 'Subscription request submitted successfully!');
  } catch (error: any) {
    console.error('Subscription error:', error);
    showError('Subscription Failed', error.message || 'Failed to subscribe. Please try again.');
  } finally {
    subscribingPlanId.value = null;
  }
};

onMounted(() => {
  fetchPlans();
});
</script>

<style scoped>
.hover-lift {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
