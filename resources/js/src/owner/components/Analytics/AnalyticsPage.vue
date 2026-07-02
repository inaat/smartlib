<template>
  <div class="p-6 space-y-8 pb-20">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">System Performance</h1>
        <p class="text-gray-500 mt-1">Cross-library analytics and revenue insights</p>
      </div>
      <button
        @click="fetchAnalytics"
        :disabled="loading"
        class="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
        title="Refresh"
      >
        <RefreshCw :class="['w-5 h-5 text-gray-600', loading ? 'animate-spin' : '']" />
      </button>
    </div>

    <!-- Loading Skeleton -->
    <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <div v-for="i in 10" :key="i" class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-pulse h-36"></div>
    </div>

    <!-- Primary Stats: Revenue + Subscriptions -->
    <div v-else class="space-y-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="stat in primaryStats"
          :key="stat.label"
          class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative z-10 flex flex-col justify-between h-full">
            <div class="flex items-center justify-between mb-4">
              <div :class="['p-3 rounded-2xl', stat.color]">
                <component :is="stat.icon" class="w-6 h-6" />
              </div>
            </div>
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ stat.label }}</p>
              <div class="flex items-baseline space-x-1 mt-1">
                <span v-if="stat.prefix" class="text-lg font-bold text-gray-500">{{ stat.prefix }}</span>
                <h3 class="text-3xl font-black text-gray-900">{{ stat.value }}</h3>
                <span v-if="stat.suffix" class="text-sm text-gray-400 font-bold ml-1">{{ stat.suffix }}</span>
              </div>
            </div>
          </div>
          <div :class="['absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 transition-transform duration-500 group-hover:scale-150', stat.bgCircle]"></div>
        </div>
      </div>

      <!-- Secondary Stats: Counts Grid -->
      <div>
        <h2 class="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
          <BarChart3 class="w-5 h-5 text-indigo-500" />
          Platform Overview
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="count in countStats"
            :key="count.label"
            class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div :class="['p-3 rounded-xl mb-3', count.color]">
              <component :is="count.icon" class="w-5 h-5" />
            </div>
            <h3 class="text-2xl font-black text-gray-900">{{ count.value }}</h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{{ count.label }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom: Revenue Chart + Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Revenue Chart -->
        <div class="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900">Revenue Growth</h3>
              <p class="text-sm text-gray-500">Monthly subscription earnings across all libraries</p>
            </div>
          </div>

          <div class="h-56 flex items-end justify-around px-4 pb-4 border-b border-gray-50">
            <template v-if="revenueData.length > 0">
              <div
                v-for="(month, idx) in revenueData"
                :key="idx"
                class="flex flex-col items-center group relative"
                :style="{ width: `${Math.floor(100 / revenueData.length)}%`, maxWidth: '64px' }"
              >
                <div
                  :style="{ height: `${Math.max(4, (month.total / maxRevenue) * 100)}%` }"
                  class="w-8 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-500 hover:from-indigo-500 hover:to-purple-400 cursor-pointer min-h-[4px]"
                ></div>
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  Rs. {{ month.total.toLocaleString() }}
                </div>
                <span class="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{{ month.month.substring(0, 3) }}</span>
              </div>
            </template>
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
              No revenue data yet
            </div>
          </div>
        </div>

        <!-- Real-time Activity -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Recent Bookings</h3>
          <div class="space-y-5">
            <div v-for="booking in recentBookings" :key="booking.id" class="flex items-start space-x-4">
              <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                <UserIcon class="w-5 h-5 text-gray-400" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-gray-900 truncate">{{ booking.user?.name }}</p>
                <p class="text-xs text-gray-500 truncate">Booked at <span class="text-indigo-600 font-medium">{{ booking.library?.name }}</span></p>
              </div>
              <span class="text-[10px] font-bold text-gray-400 uppercase shrink-0">{{ formatTimeAgo(booking.created_at) }}</span>
            </div>
            <div v-if="recentBookings.length === 0" class="text-center py-6 text-gray-400 text-sm font-medium">
              No recent bookings.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import {
  BarChart3,
  Building2,
  Users,
  CreditCard,
  RefreshCw,
  UserIcon,
  ShieldCheck,
  BookOpen,
  Calendar,
  Armchair,
  Landmark,
  DollarSign,
} from 'lucide-vue-next';
import { ownerAPI } from '@/shared/services/api';

const loading = ref(false);
const rawData = ref<any>(null);

const primaryStats = computed(() => {
  const o = rawData.value?.overview || {};
  return [
    {
      label: 'Total Revenue',
      value: Number(o.total_revenue || 0).toLocaleString(),
      prefix: 'Rs.',
      icon: DollarSign,
      color: 'bg-green-50 text-green-600',
      bgCircle: 'bg-green-600',
    },
    {
      label: 'Active Subscriptions',
      value: o.active_subscriptions ?? '0',
      suffix: 'Plans',
      icon: CreditCard,
      color: 'bg-blue-50 text-blue-600',
      bgCircle: 'bg-blue-600',
    },
    {
      label: 'Total Students',
      value: o.total_students ?? '0',
      suffix: 'Users',
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600',
      bgCircle: 'bg-indigo-600',
    },
  ];
});

const countStats = computed(() => {
  const o = rawData.value?.overview || {};
  return [
    { label: 'SuperAdmins', value: o.total_superadmins ?? '0', icon: ShieldCheck, color: 'bg-purple-50 text-purple-600' },
    { label: 'Librarians',  value: o.total_librarians  ?? '0', icon: Landmark,    color: 'bg-cyan-50 text-cyan-600' },
    { label: 'Libraries',   value: o.total_libraries   ?? '0', icon: Building2,   color: 'bg-orange-50 text-orange-600' },
    { label: 'Seats',       value: o.total_seats       ?? '0', icon: Armchair,    color: 'bg-pink-50 text-pink-600' },
    { label: 'Books',       value: o.total_books       ?? '0', icon: BookOpen,    color: 'bg-yellow-50 text-yellow-600' },
    { label: "Today's Bookings", value: o.bookings_today ?? '0', icon: Calendar, color: 'bg-teal-50 text-teal-600' },
  ];
});

const revenueData    = computed(() => rawData.value?.monthly_revenue || []);
const recentBookings = computed(() => rawData.value?.recent_bookings  || []);

const maxRevenue = computed(() => {
  if (revenueData.value.length === 0) return 1;
  return Math.max(...revenueData.value.map((d: any) => d.total), 1);
});

const fetchAnalytics = async () => {
  loading.value = true;
  try {
    rawData.value = await ownerAPI.getAnalytics();
  } catch (error) {
    console.error('Error fetching analytics:', error);
  } finally {
    loading.value = false;
  }
};

const formatTimeAgo = (dateStr: string) => {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000);
  if (diff < 1)    return 'now';
  if (diff < 60)   return `${diff}m`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h`;
  return `${Math.floor(diff / 1440)}d`;
};

onMounted(fetchAnalytics);
</script>
