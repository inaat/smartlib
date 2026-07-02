<template>
  <div class="space-y-5">
    <!-- Welcome Banner (blue bg, text only) -->
    <div class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl text-white px-6 py-5 shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
      <div class="relative z-10">
        <h1 class="text-2xl font-extrabold mb-1">Welcome back, {{ user?.name }}! 👋</h1>
        <p class="text-blue-200 text-sm font-medium">Ready to continue your learning journey? Your library world awaits.</p>
      </div>
    </div>

    <!-- Stat Cards (white, no background color) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Total Bookings -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-blue-50 rounded-lg">
            <Calendar class="w-4 h-4 text-blue-600" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bookings</span>
        </div>
        <div class="text-3xl font-extrabold text-slate-800">{{ checkedInBookingsCount }}</div>
        <div class="text-[10px] text-slate-400 font-medium">Reservations completed this month</div>
      </div>

      <!-- Hours Today -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-purple-50 rounded-lg">
            <Clock class="w-4 h-4 text-purple-600" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Hours Today</span>
        </div>
        <div class="text-3xl font-extrabold text-slate-800">{{ hoursToday }}h</div>
        <div class="text-[10px] text-slate-400 font-medium">Study hours logged in libraries</div>
      </div>

      <!-- Reserved Books -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-emerald-50 rounded-lg">
            <BookMarked class="w-4 h-4 text-emerald-600" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Reserved Books</span>
        </div>
        <div class="text-3xl font-extrabold text-slate-800">{{ reservedBooksCount }}</div>
        <div class="text-[10px] text-slate-400 font-medium">Catalog items ready at desk</div>
      </div>

      <!-- Available Libraries -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-2">
          <div class="p-2 bg-orange-50 rounded-lg">
            <MapPin class="w-4 h-4 text-orange-500" />
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Available Libraries</span>
        </div>
        <div class="text-3xl font-extrabold text-slate-800">{{ libraries.length }}</div>
        <div class="text-[10px] text-slate-400 font-medium">National partner locations</div>
      </div>
    </div>

    <!-- Stats Grid -->

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - AI Recommendations & Study Analytics -->
      <div class="lg:col-span-2 space-y-6">
        <!-- AI Recommendations -->
        <RecommendationSlider 
          :recommendations="recommendations" 
          @action="handleRecommendationAction"
        />

        <!-- Study Analytics -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-900 flex items-center">
              <BarChart3 class="w-5 h-5 mr-2 text-blue-600" />
              Study Analytics
            </h2>
            <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
              <button
                @click="activeTab = 'weekly'"
                :class="[
                  'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300',
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
                  'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300',
                  activeTab === 'monthly' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Monthly
              </button>
            </div>
          </div>

          <!-- Study Hours Chart -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {{ activeTab === 'weekly' ? 'Weekly Study Hours' : 'Monthly Study Hours' }}
              </span>
              <span class="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full shadow-sm">
                {{ chartTotalHours }}h total
              </span>
            </div>
            
            <div class="relative h-48 mb-3">
              <!-- Y-Axis Gridlines -->
              <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div v-for="i in 4" :key="i" class="w-full border-t border-slate-100"></div>
              </div>

              <!-- Bars Container -->
              <div class="absolute inset-0 flex items-end justify-between space-x-3.5 pt-4">
                <div
                  v-for="(item, index) in activeChartData"
                  :key="index"
                  class="flex-1 flex flex-col items-center group h-full justify-end"
                >
                  <!-- Bar -->
                  <div 
                    class="w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-cyan-400 cursor-pointer relative shadow-sm hover:shadow-md group-hover:scale-x-105"
                    :style="{ height: (item.hours / maxChartHours * 100) + '%' }"
                  >
                    <!-- Tooltip -->
                    <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none z-20">
                      {{ item.hours }}h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- X-Axis Labels -->
            <div class="flex justify-between px-2 pt-2 border-t border-slate-100 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              <span v-for="(item, index) in activeChartData" :key="index" class="flex-1 text-center truncate">
                {{ item.label }}
              </span>
            </div>
          </div>

          <!-- Study Stats -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ avgSessionDuration }}h</div>
              <div class="text-xs text-gray-600">Avg. Session</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ totalSessions }}</div>
              <div class="text-xs text-gray-600">Total Sessions</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ focusScore }}%</div>
              <div class="text-xs text-gray-600">Focus Score</div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden">
          <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <Activity class="w-5 h-5 mr-2 text-blue-600" />
            Recent Activity
          </h2>
          <div class="relative pl-6 border-l-2 border-slate-100 space-y-6 ml-3 text-left">
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

              <div class="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200/80 hover:bg-slate-50/80 transition-all hover-lift flex items-start space-x-3.5 relative">
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
                  <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{{ activity.description }}</p>
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
        
        <!-- Upcoming Bookings -->
        <UpcomingBookings />

        <!-- Seat Waiting List (Queue) -->
        <QueueStatus :queues="activeQueues" />

        <!-- Study Target Progress & Streak -->
        <StudyGoal 
          :streak="studyStreak"
          :progress="weeklyProgress"
          :weekly-hours="totalWeeklyHours"
          :hours-today="hoursToday"
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
import RecommendationSlider from './RecommendationSlider.vue';
import UpcomingBookings from './UpcomingBookings.vue';
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
const { bookings, libraries, books, events, generateAIRecommendations } = useApp();
const router = useRouter();

const checkedInBookingsCount = computed(() => {
  return bookings.value.filter(b => b.check_in_time !== null && b.check_in_time !== undefined).length;
});

// Automatically reload dashboard data when bookings change (e.g. check in, check out, cancel, extend)
watch(bookings, () => {
  loadDashboardData();
}, { deep: true });

const activeChartData = computed(() => {
  if (activeTab.value === 'weekly') {
    return weeklyStudyData.value.map(d => ({
      label: d.day,
      hours: d.hours
    }));
  } else {
    return monthlyStudyData.value.map(d => ({
      label: d.month,
      hours: d.hours
    }));
  }
});

const maxChartHours = computed(() => {
  if (activeChartData.value.length === 0) return 1;
  return Math.max(...activeChartData.value.map(d => d.hours), 1);
});

const chartTotalHours = computed(() => {
  const sum = activeChartData.value.reduce((acc, curr) => acc + curr.hours, 0);
  return Math.round(sum * 10) / 10;
});

const handleRecommendationAction = (recommendation: any) => {
  switch (recommendation.type) {
    case 'seat':
      router.push('/student/libraries');
      break;
    case 'book':
      router.push('/student/books');
      break;
    case 'event':
      router.push('/student/events');
      break;
  }
};

// Dashboard data from API
const dashboardData = ref<any>(null);
const loading = ref(true);

// Study metrics - will be populated from API
const studyStreak = ref(0);
const hoursToday = ref(0);
const weeklyProgress = ref(0);
const userRank = ref(0);
const totalWeeklyHours = ref(0);
const avgSessionDuration = ref(0);
const totalSessions = ref(0);
const focusScore = ref(0);
const reservedBooksCount = ref(0);
const weeklyStudyData = ref<any[]>([]);
const monthlyStudyData = ref<any[]>([]);
const activeTab = ref<'weekly' | 'monthly'>('weekly');
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
      totalWeeklyHours.value = data.analytics.weekly_hours || 0;
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

// Removed achievements and studyTip as they are no longer used on the dashboard

const recommendations = computed(() => {
  const aiRecs = user.value?.id ? generateAIRecommendations(user.value.id) : [];
  
  const mappedRecs = aiRecs.slice(0, 3).map(rec => {
    if (rec.type === 'time_slot') {
      return {
        type: 'seat' as const,
        title: rec.title,
        description: rec.description,
        action: 'Book Now',
        time: rec.data?.recommendedTime || '',
        location: rec.data?.libraryName || 'ICAP Library'
      };
    } else if (rec.type === 'book') {
      return {
        type: 'book' as const,
        title: rec.title,
        description: rec.description,
        action: 'Reserve',
        author: rec.data?.author || 'Unknown'
      };
    } else {
      return {
        type: 'event' as const,
        title: rec.title,
        description: rec.description,
        action: 'Register',
        date: rec.data?.date || ''
      };
    }
  });

  if (mappedRecs.length === 0) {
    const defaultRecs: any[] = [];
    if (books.value.length > 0) {
      const latestBook = books.value[0];
      defaultRecs.push({
        type: 'book',
        title: 'New Book Available',
        description: `${latestBook.title} is now available for pickup.`,
        action: 'Reserve',
        author: latestBook.author || 'Unknown Author'
      });
    }
    if (events.value.length > 0) {
      const upcomingEvent = events.value[0];
      defaultRecs.push({
        type: 'event',
        title: upcomingEvent.title || 'Upcoming Event',
        description: upcomingEvent.description || 'Join us for this event.',
        action: 'Register',
        date: upcomingEvent.event_date ? new Date(upcomingEvent.event_date).toLocaleDateString() : ''
      });
    }
    if (libraries.value.length > 0) {
      defaultRecs.push({
        type: 'seat',
        title: 'Book a Study Seat',
        description: `Visit ${libraries.value[0].name} and secure your spot for productive studying.`,
        action: 'Book Now',
        location: libraries.value[0].name
      });
    }
    return defaultRecs;
  }

  return mappedRecs;
});

onMounted(() => {
  loadDashboardData();
});
</script>
