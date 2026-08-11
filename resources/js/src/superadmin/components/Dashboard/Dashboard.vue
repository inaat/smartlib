<template>
  <div class="space-y-6 text-slate-700">
    <!-- Welcome Header Banner -->
    <div 
      class="rounded-2xl text-white px-6 py-5 shadow-sm relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-850"
      style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4338ca 100%)"
    >
      <!-- Abstract Graphic Overlays -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -ml-24 -mb-24"></div>
      
      <div class="relative z-10 flex items-center justify-between">
        <div class="text-left">
          <span class="text-[10px] font-semibold tracking-wider text-purple-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full">Super Admin Workspace</span>
          <h1 class="text-2xl font-bold mt-2 mb-1 tracking-tight">
            Welcome back, <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 font-extrabold" style="background-image: linear-gradient(to right, #fcd34d, #fef08a, #fcd34d); -webkit-background-clip: text; background-clip: text;">{{ user?.name }}</span>! 👋
          </h1>
          <p class="text-purple-100/90 text-xs font-normal">Global seat utilization, student registration reviews, and settings management today.</p>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="stat in statsCards" 
        :key="stat.label" 
        class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group text-left"
      >
        <div class="flex items-center justify-between mb-4">
          <div :class="['p-3 rounded-xl transition-transform group-hover:scale-105 duration-300 bg-slate-50', stat.iconClass]">
            <component :is="stat.icon" class="w-5 h-5" />
          </div>
          <div v-if="stat.trend" :class="['flex items-center text-[9px] font-extrabold px-2 py-0.5 rounded-full border', stat.trend > 0 ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700']">
            <TrendingUp v-if="stat.trend > 0" class="w-2.5 h-2.5 mr-1" />
            <TrendingDown v-else class="w-2.5 h-2.5 mr-1" />
            {{ Math.abs(stat.trend) }}%
          </div>
        </div>
        <div>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ stat.label }}</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5 tracking-tight">{{ stat.value }}</h3>
        </div>
      </div>
    </div>

    <!-- Main Content Layout Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent System Activity Timeline -->
      <div class="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div class="px-6 py-5 border-b border-slate-50 bg-slate-50/20 flex items-center justify-between text-left">
          <div>
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">System Activity Feed</h3>
          </div>
          <button @click="router.push({ name: 'superadmin-analytics' })" class="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer">
            View Analytics
            <ArrowUpRight class="w-3.5 h-3.5" />
          </button>
        </div>
        <div class="p-6 flex-1 text-left">
          <div v-if="loading" class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
          <div v-else-if="activities.length === 0" class="text-center py-12">
            <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Activity class="w-8 h-8 text-slate-300 animate-pulse" />
            </div>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider">No recent activity logged</p>
          </div>
          <div v-else class="relative border-l-2 border-slate-100 ml-4 space-y-6">
            <div v-for="activity in activities" :key="activity.id" class="relative pl-6 group">
              <!-- Timeline Dot -->
              <div :class="['absolute -left-3 top-0.5 w-6 h-6 rounded-lg flex items-center justify-center border-4 border-white shadow-sm transition-transform group-hover:scale-105 duration-200', activity.bg]">
                <component :is="getActivityIcon(activity.icon)" class="w-2.5 h-2.5" :class="activity.iconColor" />
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50/50 hover:bg-slate-100/50 p-4 rounded-xl transition-all border border-transparent hover:border-slate-100">
                <div>
                  <p class="text-xs font-bold text-slate-700">{{ activity.title }}</p>
                  <p class="text-[10px] text-slate-400 mt-1 flex items-center gap-1.5 font-semibold">
                    <Clock class="w-3.5 h-3.5" />
                    {{ activity.time }}
                  </p>
                </div>
                <div class="flex items-center">
                  <span :class="['px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border bg-white', activity.statusClass]">
                    {{ activity.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Approvals Widget & Live Utilization -->
      <div class="space-y-6">
        <!-- Live Library Utilization Progress -->
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="px-6 py-5 border-b border-slate-50 bg-slate-50/20 text-left">
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Library Utilization</h3>
          </div>
          <div class="p-6 text-left">
            <div v-if="loading" class="flex justify-center py-6">
              <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
            </div>
            <div v-else-if="librariesList.length === 0" class="text-center py-4 text-slate-400 text-xs font-bold uppercase">
              No libraries configured
            </div>
            <div v-else class="space-y-4">
              <div v-for="lib in librariesList" :key="lib.id" class="space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-700">{{ lib.name }}</span>
                  <span class="text-slate-400 font-bold">{{ lib.totalSeats - lib.availableSeats }} / {{ lib.totalSeats }} Seats</span>
                </div>
                <div class="w-full bg-slate-50 rounded-full h-2 border border-slate-100">
                  <div 
                    :class="['h-2 rounded-full transition-all duration-500', getProgressBarClass(lib)]" 
                    :style="{ width: getUtilizationPercentage(lib) + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Approvals -->
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="px-6 py-5 border-b border-slate-50 bg-slate-50/20 flex items-center justify-between text-left">
            <div>
              <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Pending Approvals</h3>
            </div>
            <span class="bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">{{ pendingUsers.length }}</span>
          </div>
          <div class="p-0">
            <div v-if="loading" class="p-8 flex justify-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
            <div v-else-if="pendingUsers.length === 0" class="p-12 text-center">
              <div class="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <UserCheck class="w-8 h-8 text-slate-300" />
              </div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-wider">All students approved!</p>
            </div>
            <div v-else class="divide-y divide-slate-50 max-h-[320px] overflow-y-auto">
              <div v-for="user in pendingUsers" :key="user.id" class="px-6 py-4 flex items-center justify-between hover:bg-slate-50/30 transition-colors">
                <div class="flex items-center space-x-3 min-w-0">
                  <div class="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 font-bold flex items-center justify-center flex-shrink-0 border border-purple-200 text-xs">
                    {{ user.name.charAt(0).toUpperCase() }}
                  </div>
                  <div class="min-w-0 text-left">
                    <p class="text-xs font-bold text-slate-700 truncate">{{ user.name }}</p>
                    <p class="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{{ user.email }}</p>
                  </div>
                </div>
                <div class="flex items-center space-x-1.5 flex-shrink-0">
                  <button @click="approveUser(user.id)" class="p-1.5 text-green-700 bg-white border border-slate-200 hover:bg-green-50 rounded-lg shadow-sm transition-all cursor-pointer" title="Approve Student">
                    <CheckCircle class="w-4 h-4" />
                  </button>
                  <button @click="rejectUser(user.id)" class="p-1.5 text-red-655 bg-white border border-slate-200 hover:bg-red-50 rounded-lg shadow-sm transition-all cursor-pointer" title="Reject Student">
                    <XCircle class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div v-if="pendingUsers.length > 0" class="p-4 bg-slate-50/50 border-t border-slate-100">
              <button @click="router.push({ name: 'superadmin-users' })" class="w-full py-2.5 text-xs font-bold text-purple-700 bg-white border border-slate-200 rounded-xl hover:shadow-sm transition-all text-center cursor-pointer">
                View All Student Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions Control Panel -->
    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 text-left">
      <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Quick Administrator Actions</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          v-for="action in quickActions" 
          :key="action.label" 
          @click="handleAction(action)"
          class="flex flex-col items-center justify-center p-6 bg-slate-50/40 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
        >
          <div :class="['p-3 rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300', action.bg]">
            <component :is="action.icon" :class="['w-5 h-5', action.iconColor]" />
          </div>
          <span class="text-xs font-bold text-slate-750">{{ action.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { 
  Users, 
  Library, 
  BookOpen, 
  TrendingUp, 
  TrendingDown,
  Activity,
  UserCheck,
  CheckCircle,
  XCircle,
  Plus,
  Settings,
  Shield,
  UserPlus,
  LifeBuoy,
  ArrowUpRight,
  Clock,
  Ban
} from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import { useAuth } from '@/shared/composables/useAuth';

const router = useRouter();
const { user } = useAuth();
const loading = ref(true);
const stats = ref<any>(null);
const pendingUsers = ref<any[]>([]);
const activities = ref<any[]>([]);
const librariesList = ref<any[]>([]);

const statsCards = computed(() => [
  {
    label: 'Total Students',
    value: stats.value?.total_students || 0,
    icon: Users,
    trend: 12,
    iconClass: 'text-blue-600'
  },
  {
    label: 'Active Libraries',
    value: stats.value?.active_libraries || 0,
    icon: Library,
    trend: 5,
    iconClass: 'text-purple-600'
  },
  {
    label: 'Active Bookings',
    value: stats.value?.active_bookings || 0,
    icon: BookOpen,
    trend: -2,
    iconClass: 'text-amber-600'
  },
  {
    label: 'System Complaints',
    value: stats.value?.pending_tickets || 0,
    icon: LifeBuoy,
    iconClass: 'text-red-655'
  }
]);

const quickActions = [
  { label: 'Add Library', icon: Plus, bg: 'bg-purple-50', iconColor: 'text-purple-600', route: 'superadmin-libraries' },
  { label: 'System Settings', icon: Settings, bg: 'bg-slate-50', iconColor: 'text-slate-600', route: 'superadmin-settings' },
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

const getUtilizationPercentage = (lib: any) => {
  const total = lib.totalSeats || 0;
  if (total <= 0) return 0;
  return Math.round(((total - lib.availableSeats) / total) * 100);
};

const getProgressBarClass = (lib: any) => {
  const percentage = getUtilizationPercentage(lib);
  if (percentage > 85) return 'bg-red-500';
  if (percentage > 60) return 'bg-amber-500';
  return 'bg-purple-600';
};

const fetchDashboardData = async (isSilent = false) => {
  try {
    if (!isSilent) loading.value = true;
    const [data, libs] = await Promise.all([
      superadminAPI.getDashboard({ range: 'today' }),
      superadminAPI.getLibraries()
    ]);
    stats.value = data.stats;
    pendingUsers.value = data.pendingUsers || [];
    activities.value = data.recentActivity || [];
    librariesList.value = libs || [];
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
  } finally {
    if (!isSilent) loading.value = false;
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

let pollSuperAdminTimer: any = null;

onMounted(() => {
  fetchDashboardData();
  pollSuperAdminTimer = setInterval(() => {
    fetchDashboardData(true);
  }, 5000);
});

onUnmounted(() => {
  if (pollSuperAdminTimer) clearInterval(pollSuperAdminTimer);
});
</script>

<style scoped>
.text-slate-850 {
  color: #1e293b;
}
.text-slate-550 {
  color: #64748b;
}
.text-slate-455 {
  color: #475569;
}
.text-slate-505 {
  color: #334155;
}
.text-slate-750 {
  color: #475569;
}
.bg-indigo-650 {
  background-color: #4f46e5;
}
.text-red-655 {
  color: #ef4444;
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.bg-amber-250 {
  --tw-gradient-from: #fcd34d;
  --tw-gradient-to: rgba(252, 211, 77, 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.yellow-250 {
  color: #fef08a;
}
</style>
