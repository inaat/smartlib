<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Super Admin Dashboard</h1>
        <p class="text-gray-500 text-sm">Welcome back! Here's what's happening across all libraries.</p>
      </div>
      <div class="flex items-center space-x-3">
        <div class="relative">
          <select 
            v-model="selectedRange"
            class="appearance-none pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
          >
            <option v-for="range in dateRanges" :key="range.value" :value="range.value">
              {{ range.label }}
            </option>
          </select>
          <Calendar class="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          <ChevronDown class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <div v-for="stat in statsCards" :key="stat.label" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div :class="['p-2.5 rounded-xl', stat.bgClass]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.iconClass]" />
          </div>
          <div v-if="stat.trend" :class="['flex items-center text-xs font-medium px-2 py-1 rounded-full', stat.trend > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600']">
            <TrendingUp v-if="stat.trend > 0" class="w-3 h-3 mr-1" />
            <TrendingDown v-else class="w-3 h-3 mr-1" />
            {{ Math.abs(stat.trend) }}%
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">{{ stat.label }}</p>
          <h3 class="text-2xl font-bold text-gray-900 mt-1">{{ stat.value }}</h3>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent Activity -->
      <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-900">System Activity</h3>
          <button class="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
        </div>
        <div class="p-0">
          <div v-if="loading" class="p-8 flex justify-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
          <div v-else-if="activities.length === 0" class="p-12 text-center">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity class="w-8 h-8 text-gray-300" />
            </div>
            <p class="text-gray-500">No recent activity found</p>
          </div>
          <div v-else class="divide-y divide-gray-50">
            <div v-for="activity in activities" :key="activity.id" class="px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors">
              <div :class="['w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0', activity.bg]">
                <component :is="getActivityIcon(activity.icon)" class="w-5 h-5" :class="activity.iconColor" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">{{ activity.title }}</p>
                <p class="text-xs text-gray-500">{{ activity.time }}</p>
              </div>
              <div class="text-right">
                <span :class="['px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider', activity.statusClass]">
                  {{ activity.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Approvals -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-900">Pending Approvals</h3>
          <span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">{{ pendingUsers.length }}</span>
        </div>
        <div class="p-0">
          <div v-if="loading" class="p-8 flex justify-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
          <div v-else-if="pendingUsers.length === 0" class="p-12 text-center">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck class="w-8 h-8 text-gray-300" />
            </div>
            <p class="text-gray-500">All caught up!</p>
          </div>
          <div v-else class="divide-y divide-gray-50">
            <div v-for="user in pendingUsers" :key="user.id" class="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div class="flex items-center space-x-3 min-w-0">
                <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                  <User class="w-5 h-5 text-indigo-600" />
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-900 truncate">{{ user.name }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ user.email }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button @click="approveUser(user.id)" class="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                  <CheckCircle class="w-5 h-5" />
                </button>
                <button @click="rejectUser(user.id)" class="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                  <XCircle class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div v-if="pendingUsers.length > 0" class="p-4 bg-gray-50 border-t border-gray-50">
            <button @click="router.push({ name: 'superadmin-users' })" class="w-full py-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
              View All Pending
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <button 
        v-for="action in quickActions" 
        :key="action.label" 
        @click="handleAction(action)"
        class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group"
      >
        <div :class="['p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform', action.bg]">
          <component :is="action.icon" :class="['w-6 h-6', action.iconColor]" />
        </div>
        <span class="text-sm font-bold text-gray-700">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { 
  Users, 
  Library, 
  BookOpen, 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Activity,
  UserCheck,
  User,
  CheckCircle,
  XCircle,
  Plus,
  Settings,
  Shield,
  FileText,
  UserPlus,
  ChevronDown
} from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';

const router = useRouter();
const loading = ref(true);
const stats = ref<any>(null);
const pendingUsers = ref<any[]>([]);
const activities = ref<any[]>([]);

const selectedRange = ref('today');
const dateRanges = [
  { label: 'Today', value: 'today' },
  { label: 'This Week', value: 'this_week' },
  { label: 'This Month', value: 'this_month' },
  { label: 'Last Month', value: 'last_month' },
  { label: 'Last 30 Days', value: 'last_30_days' },
  { label: 'This Year', value: 'this_year' },
];

watch(selectedRange, () => {
  fetchDashboardData();
});

const statsCards = computed(() => [
  {
    label: 'Total Students',
    value: stats.value?.total_students || 0,
    icon: Users,
    trend: 12,
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-600'
  },
  {
    label: 'Active Libraries',
    value: stats.value?.active_libraries || 0,
    icon: Library,
    trend: 5,
    bgClass: 'bg-purple-50',
    iconClass: 'text-purple-600'
  },
  {
    label: 'Total Revenue',
    value: `PKR ${stats.value?.total_revenue?.toLocaleString() || 0}`,
    icon: CreditCard,
    trend: stats.value?.revenue_growth || 0,
    bgClass: 'bg-green-50',
    iconClass: 'text-green-600'
  },
  {
    label: 'Active Bookings',
    value: stats.value?.active_bookings || 0,
    icon: BookOpen,
    trend: -2,
    bgClass: 'bg-amber-50',
    iconClass: 'text-amber-600'
  }
]);

const quickActions = [
  { label: 'Add Library', icon: Plus, bg: 'bg-indigo-50', iconColor: 'text-indigo-600', route: 'superadmin-libraries' },
  { label: 'System Settings', icon: Settings, bg: 'bg-gray-50', iconColor: 'text-gray-600', route: 'superadmin-settings' },
  { label: 'Security Audit', icon: Shield, bg: 'bg-red-50', iconColor: 'text-red-600', route: null },
  { label: 'Generate Report', icon: FileText, bg: 'bg-blue-50', iconColor: 'text-blue-600', route: null },
];

const getActivityIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen': return BookOpen;
    case 'UserPlus': return UserPlus;
    case 'Library': return Library;
    case 'Settings': return Settings;
    case 'Shield': return Shield;
    default: return Activity;
  }
};

const fetchDashboardData = async () => {
  try {
    loading.value = true;
    const data = await superadminAPI.getDashboard({ range: selectedRange.value });
    stats.value = data.stats;
    pendingUsers.value = data.pendingUsers || [];
    activities.value = data.recentActivity || [];
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
  } finally {
    loading.value = false;
  }
};

const approveUser = async (userId: string) => {
  try {
    await superadminAPI.approveUser(userId);
    pendingUsers.value = pendingUsers.value.filter(u => u.id !== userId);
    // Refresh stats
    const data = await superadminAPI.getDashboard();
    stats.value = data.stats;
    activities.value = data.recentActivity || [];
  } catch (error) {
    console.error('Failed to approve user:', error);
  }
};

const rejectUser = async (userId: string) => {
  if (confirm('Are you sure you want to reject this user?')) {
    try {
      await superadminAPI.rejectUser(userId);
      pendingUsers.value = pendingUsers.value.filter(u => u.id !== userId);
    } catch (error) {
      console.error('Failed to reject user:', error);
    }
  }
};

const handleAction = (action: any) => {
  if (action.route) {
    router.push({ name: action.route });
  }
};

onMounted(() => {
  fetchDashboardData();
});
</script>
