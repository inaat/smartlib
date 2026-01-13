<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Subscription Plans</h1>
    </div>

    <div v-if="isLoading" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
    
    <!-- Expired Plan Alert -->
    <div v-if="isPlanExpired" class="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mb-8 shadow-sm">
      <div class="flex items-center">
        <AlertTriangle class="w-8 h-8 text-red-500 mr-4" />
        <div>
          <h3 class="text-lg font-bold text-red-800">Your plan has expired</h3>
          <p class="text-red-700">Please choose a plan below to continue accessing library services.</p>
        </div>
      </div>
    </div>

    <!-- Current Active Plan Summary -->
    <div v-if="user?.active_subscription" class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div class="relative z-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4">
              Active Subscription
            </div>
            <h2 class="text-3xl font-bold mb-2">{{ user.active_subscription.subscription_plan?.name }}</h2>
            <p class="text-blue-100 mb-4">{{ user.active_subscription.subscription_plan?.description }}</p>
            <div class="flex flex-wrap gap-4 text-sm">
              <div class="flex items-center">
                <Calendar class="w-4 h-4 mr-2 opacity-75" />
                Expires on: {{ formatDate(user.active_subscription.expires_at) }}
              </div>
              <div class="flex items-center">
                <CreditCard class="w-4 h-4 mr-2 opacity-75" />
                Rs. {{ user.active_subscription.amount_paid }} paid
              </div>
            </div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <div class="text-sm opacity-75">Remaining Days</div>
            <div class="text-4xl font-bold">{{ calculateRemainingDays(user.active_subscription.expires_at) }}</div>
          </div>
        </div>

        <!-- Current Plan Limits -->
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8 border-t border-white/20">
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Daily Seats</div>
            <div class="font-bold">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit || '∞' }}</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Monthly Seats</div>
            <div class="font-bold">{{ user.active_subscription.subscription_plan?.monthly_seat_bookings_limit || '∞' }}</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Libraries</div>
            <div class="font-bold">{{ user.active_subscription.subscription_plan?.libraries_access_limit || '∞' }}</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Books</div>
            <div class="font-bold">{{ user.active_subscription.subscription_plan?.books_access_limit || '∞' }}</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Events</div>
            <div class="font-bold">{{ user.active_subscription.subscription_plan?.events_joining_limit || '∞' }}</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 text-center">
            <div class="text-xs opacity-75 mb-1">Adv. Booking</div>
            <div class="font-bold">
              <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">∞</span>
              <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Today</span>
              <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }}d</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All Plans Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="plan in plans" 
        :key="plan.id"
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border transition-transform hover:-translate-y-1"
        :class="[
          isCurrentPlan(plan.id) ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-700'
        ]"
      >
        <div class="p-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ plan.name }}</h3>
          <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm">{{ plan.description }}</p>
          <div class="mt-6 flex items-baseline">
            <span class="text-4xl font-extrabold text-gray-900 dark:text-white">Rs. {{ plan.price }}</span>
            <span class="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/{{ plan.duration_days }} days</span>
          </div>

          <ul class="mt-6 space-y-4">
            <li v-for="(feature, index) in parseFeatures(plan.features)" :key="index" class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">{{ feature }}</p>
            </li>
            
            <!-- Dynamic limits -->
            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                {{ plan.daily_seat_bookings_limit || 'Unlimited' }} Daily Seat Bookings
              </p>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                {{ plan.monthly_seat_bookings_limit || 'Unlimited' }} Monthly Seat Bookings
              </p>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                {{ plan.libraries_access_limit || 'Unlimited' }} Libraries Access
              </p>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                {{ plan.books_access_limit || 'Unlimited' }} Books Access
              </p>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                {{ plan.events_joining_limit || 'Unlimited' }} Events Joining
              </p>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">
                <span v-if="plan.advance_booking_days === -1">Unlimited Advance Booking</span>
                <span v-else-if="plan.advance_booking_days === 0">Same Day Booking Only</span>
                <span v-else>{{ plan.advance_booking_days }} Days Advance Booking</span>
              </p>
            </li>

            <li v-if="plan.priority_booking" class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">Priority Seat Booking</p>
            </li>

            <li v-if="plan.digital_books_access" class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700 dark:text-gray-300">Digital Books Access</p>
            </li>
          </ul>

          <div class="mt-8">
            <button
              v-if="isCurrentPlan(plan.id)"
              disabled
              class="w-full bg-green-600 text-white rounded-lg px-4 py-3 font-semibold cursor-default shadow-md"
            >
              Activated
            </button>
            <button
              v-else-if="hasActiveSubscription"
              disabled
              class="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg px-4 py-3 font-semibold cursor-not-allowed"
            >
              Switch Plan (Contact Support)
            </button>
            <button
              v-else
              @click="subscribe(plan)"
              :disabled="subscribingPlanId !== null"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-3 font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              <span v-if="subscribingPlanId === plan.id">Processing...</span>
              <span v-else>Subscribe Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { studentAPI } from '@/student/services/studentApi';
import { useAuth } from '@/shared/composables/useAuth';
import { useRouter } from 'vue-router';
import { Calendar, CreditCard, AlertTriangle } from 'lucide-vue-next';

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
    await studentAPI.subscribe(plan.id);
    await checkAuth(); // Refresh user to get updated subscription status
    showSuccess('Subscribed!', 'Subscription activated successfully!');
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
