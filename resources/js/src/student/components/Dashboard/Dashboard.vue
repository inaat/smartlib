<template>
  <div class="space-y-5">
    <!-- Welcome Banner (blue bg, text only) -->
    <div class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl text-white px-6 py-5 shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
      <div class="relative z-10 flex items-center justify-between">
        <div class="text-left">
          <span class="text-[10px] font-semibold tracking-wider text-blue-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full">Student Workspace</span>
          <h1 class="text-2xl font-bold mt-2 mb-1 tracking-tight">Welcome back, {{ user?.name }}! 👋</h1>
          <p class="text-blue-100/90 text-xs font-normal">Ready to continue your learning journey? Your library world awaits.</p>
        </div>
      </div>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-outfit">
      <!-- Total Bookings -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-blue-50/60 rounded-lg text-blue-600">
            <Calendar class="w-5 h-5" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bookings</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ checkedInBookingsCount }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Completed this month</div>
      </div>

      <!-- Hours Today -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-purple-50/60 rounded-lg text-purple-600">
            <Clock class="w-5 h-5" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Hours Today</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ hoursToday }}h</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Logged in libraries</div>
      </div>

      <!-- Reserved Books -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-emerald-50/60 rounded-lg text-emerald-600">
            <BookMarked class="w-5 h-5" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Reserved Books</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ reservedBooksCount }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Items ready at desk</div>
      </div>

      <!-- Available Libraries -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-orange-50/60 rounded-lg text-orange-600">
            <MapPin class="w-5 h-5" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Libraries</span>
        </div>
        <div class="text-3xl font-bold text-slate-700 text-left tracking-tight">{{ libraries.length }}</div>
        <div class="text-[10px] text-slate-400 font-medium text-left uppercase">Partner locations</div>
      </div>
    </div>

    <!-- Stats Grid -->

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - Study Analytics & Recent Activity -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Study Analytics -->
        <div class="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left">
          <!-- Header -->
          <div class="flex items-center justify-between gap-4 mb-5 border-b border-slate-100/80 pb-4">
            <div class="flex items-center space-x-3 text-left">
              <div class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <BarChart3 class="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-800 tracking-tight leading-snug">Study Analytics</h3>
                <p class="text-[11px] text-slate-400 font-medium">Your weekly and monthly study session breakdown.</p>
              </div>
            </div>
            <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
              <button
                @click="activeTab = 'weekly'"
                :class="[
                  'px-3 py-1 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer',
                  activeTab === 'weekly' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Weekly
              </button>
              <button
                @click="activeTab = 'monthly'"
                :class="[
                  'px-3 py-1 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer',
                  activeTab === 'monthly' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Monthly
              </button>
            </div>
          </div>

          <!-- Study Hours Chart (Matching Librarian Panel) -->
          <div class="pt-2">
            <BookingTrendsChart 
              :data="activeChartData" 
              x-key="label" 
              y-key="value" 
              label="Hours" 
              color="#2563eb"
            />
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left">
          <!-- Header -->
          <div class="flex items-center space-x-3 mb-5 border-b border-slate-100/80 pb-4 text-left">
            <div class="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Activity class="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-800 tracking-tight leading-snug">Recent Activity</h3>
              <p class="text-[11px] text-slate-400 font-medium">Latest bookings, check-ins, and library activities.</p>
            </div>
          </div>

          <div class="relative pl-6 border-l-2 border-slate-100 space-y-5 ml-3 text-left">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="relative group"
            >
              <!-- Timeline indicator circle -->
              <span 
                class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-10 transition-colors duration-300"
                :class="[
                  activity.type === 'booking' ? 'bg-blue-600 group-hover:bg-blue-500' :
                  activity.type === 'book' ? 'bg-emerald-600 group-hover:bg-emerald-500' :
                  activity.type === 'event' ? 'bg-purple-600 group-hover:bg-purple-500' :
                  'bg-orange-500 group-hover:bg-orange-400'
                ]"
              ></span>

              <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-2xl hover:border-slate-200/80 hover:bg-slate-50 transition-all flex items-start space-x-3.5 relative">
                <div :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border',
                  activity.type === 'booking' ? 'bg-blue-50/50 border-blue-100 text-blue-600' :
                  activity.type === 'book' ? 'bg-emerald-50/50 border-emerald-100 text-emerald-600' :
                  activity.type === 'event' ? 'bg-purple-50/50 border-purple-100 text-purple-600' :
                  'bg-orange-50/50 border-orange-100 text-orange-600'
                ]">
                  <component :is="activity.icon" class="w-4.5 h-4.5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-slate-800">{{ activity.title }}</p>
                  <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-medium">{{ activity.description }}</p>
                </div>
                <div class="text-[10px] font-semibold text-slate-400 text-right whitespace-nowrap self-start">
                  {{ activity.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Quick Actions & Upcoming -->
      <div class="space-y-6">
        <!-- Quick Actions -->
        <QuickActions />

        <!-- Seat Waiting List (Queue) -->
        <QueueStatus :queues="activeQueues" />

        <!-- Study Target Progress & Streak -->
        <StudyGoal 
          :streak="studyStreak"
          :weekly-hours="totalWeeklyHours"
          :weekly-goal="weeklyGoal"
          :weekly-progress="weeklyProgress"
          :monthly-hours="totalMonthlyHours"
          :monthly-goal="monthlyGoal"
          :monthly-progress="monthlyProgress"
          :hours-today="hoursToday"
          @goals-updated="loadDashboardData"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useApp } from '@/shared/composables/useApp';
import { studentAPI } from '@/shared/services/api';
import BookingTrendsChart from '@/shared/components/charts/BookingTrendsChart.vue';
import QueueStatus from './QueueStatus.vue';
import QuickActions from './QuickActions.vue';
import StudyGoal from './StudyGoal.vue';
import { 
  BookMarked, 
  Calendar, 
  MapPin, 
  Clock,
  BarChart3,
  Activity
} from 'lucide-vue-next';

const { user } = useAuth();
const { bookings, libraries, books, events } = useApp();
const router = useRouter();

const checkedInBookingsCount = computed(() => {
  return bookings.value.filter(b => b.check_in_time !== null && b.check_in_time !== undefined).length;
});

// Study Analytics refs
const activeTab = ref<'weekly' | 'monthly'>('weekly');
const weeklyStudyData = ref<any[]>([]);
const monthlyStudyData = ref<any[]>([]);

const activeChartData = computed(() => {
  if (activeTab.value === 'weekly') {
    return weeklyStudyData.value.map(d => ({
      label: d.day,
      value: d.hours
    }));
  } else {
    return monthlyStudyData.value.map(d => ({
      label: d.month,
      value: d.hours
    }));
  }
});

const maxChartHours = computed(() => {
  if (activeChartData.value.length === 0) return 1;
  return Math.max(...activeChartData.value.map(d => d.value), 1);
});

const chartTotalHours = computed(() => {
  const sum = activeChartData.value.reduce((acc, curr) => acc + curr.value, 0);
  return Math.round(sum * 10) / 10;
});

// Dashboard data from API
const dashboardData = ref<any>(null);
const loading = ref(true);

// Study metrics - will be populated from API
const studyStreak = ref(0);
const hoursToday = ref(0);
const weeklyProgress = ref(0);
const weeklyGoal = ref(20);
const totalWeeklyHours = ref(0);
const monthlyProgress = ref(0);
const monthlyGoal = ref(80);
const totalMonthlyHours = ref(0);
const userRank = ref(0);
const avgSessionDuration = ref(0);
const totalSessions = ref(0);
const focusScore = ref(0);
const reservedBooksCount = ref(0);
const recentActivities = ref<any[]>([]);
const activeQueues = ref<any[]>([]);

// Load dashboard data
const loadDashboardData = async () => {
  try {
    loading.value = true;
    const data = await studentAPI.getDashboard();
    dashboardData.value = data;

    // Update stats
    if (data.stats) {
      reservedBooksCount.value = data.stats.active_reservations || 0;
    }

    // Update analytics
    if (data.analytics) {
      studyStreak.value = data.analytics.study_streak || 0;
      hoursToday.value = data.analytics.hours_today || 0;
      weeklyProgress.value = data.analytics.weekly_progress || 0;
      weeklyGoal.value = data.analytics.weekly_goal || 20;
      totalWeeklyHours.value = data.analytics.weekly_hours || 0;
      monthlyProgress.value = data.analytics.monthly_progress || 0;
      monthlyGoal.value = data.analytics.monthly_goal || 80;
      totalMonthlyHours.value = data.analytics.monthly_hours || 0;
      avgSessionDuration.value = data.analytics.avg_session_duration || 0;
      totalSessions.value = data.analytics.total_sessions || 0;
      focusScore.value = data.analytics.focus_score || 0;
      weeklyStudyData.value = data.analytics.weekly_study_data || [];
      monthlyStudyData.value = data.analytics.monthly_study_data || [];
    }

    if (data.active_queue) {
      activeQueues.value = data.active_queue;
    }

    // Map recent activity
    if (data.recent_activity) {
      recentActivities.value = data.recent_activity.map((activity: any) => {
        if (activity.type === 'booking') {
          return {
            id: activity.data.id,
            type: 'booking',
            icon: Calendar,
            title: 'Seat Booked',
            description: `Seat ${activity.data.seat?.seat_number} at ${activity.data.seat?.library?.name || 'Library'}`,
            time: formatTimeAgo(activity.created_at)
          };
        } else if (activity.type === 'reservation') {
          return {
            id: activity.data.id,
            type: 'book',
            icon: BookMarked,
            title: 'Book Reserved',
            description: activity.data.book?.title || 'Book',
            time: formatTimeAgo(activity.created_at)
          };
        }
        return null;
      }).filter(Boolean);
    }

    // Calculate user rank (simplified - could be from backend)
    userRank.value = Math.max(1, Math.floor(Math.random() * 50));
  } catch (error) {
    console.error('Failed to load dashboard data:', error);
  } finally {
    loading.value = false;
  }
};

const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};

onMounted(() => {
  loadDashboardData();
});
</script>
