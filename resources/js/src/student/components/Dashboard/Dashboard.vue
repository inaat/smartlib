<template>
  <div class="p-6 space-y-6">
    <!-- Welcome Section with Enhanced Design -->
    <div class="bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-2xl text-white p-8 shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
      
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl font-bold mb-2">Welcome back, {{ user?.name }}! 👋</h1>
            <p class="text-blue-100 text-lg">Ready to continue your learning journey?</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Total Bookings -->
          <div class="bg-gradient-to-br from-blue-500/30 to-indigo-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform">
            <div class="flex items-center space-x-2 mb-2">
              <div class="p-2 bg-white/20 rounded-lg">
                <Calendar class="w-4 h-4 text-white" />
              </div>
              <span class="text-sm font-medium text-white/90">Total Bookings</span>
            </div>
            <div class="text-3xl font-bold text-white">{{ bookings.length }}</div>
            <div class="text-xs text-white/70 mt-1">This month</div>
          </div>

          <!-- Hours Today -->
          <div class="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform">
            <div class="flex items-center space-x-2 mb-2">
              <div class="p-2 bg-white/20 rounded-lg">
                <Clock class="w-4 h-4 text-white" />
              </div>
              <span class="text-sm font-medium text-white/90">Hours Today</span>
            </div>
            <div class="text-3xl font-bold text-white">{{ hoursToday }}h</div>
            <div class="text-xs text-white/70 mt-1">Keep it up!</div>
          </div>

          <!-- Reserved Books -->
          <div class="bg-gradient-to-br from-emerald-500/30 to-teal-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform">
            <div class="flex items-center space-x-2 mb-2">
              <div class="p-2 bg-white/20 rounded-lg">
                <BookMarked class="w-4 h-4 text-white" />
              </div>
              <span class="text-sm font-medium text-white/90">Reserved Books</span>
            </div>
            <div class="text-3xl font-bold text-white">{{ reservations.length }}</div>
            <div class="text-xs text-white/70 mt-1">Active reservations</div>
          </div>

          <!-- Available Libraries -->
          <div class="bg-gradient-to-br from-amber-500/30 to-orange-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform">
            <div class="flex items-center space-x-2 mb-2">
              <div class="p-2 bg-white/20 rounded-lg">
                <MapPin class="w-4 h-4 text-white" />
              </div>
              <span class="text-sm font-medium text-white/90">Available Libraries</span>
            </div>
            <div class="text-3xl font-bold text-white">{{ libraries.length }}</div>
            <div class="text-xs text-white/70 mt-1">In your area</div>
          </div>
        </div>
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
            <select class="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
            </select>
          </div>

          <!-- Study Hours Chart -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-gray-600">Weekly Study Hours</span>
              <span class="text-sm font-bold text-blue-600">{{ totalWeeklyHours }}h total</span>
            </div>
            <div class="h-48 flex items-end justify-between space-x-2">
              <div
                v-for="(day, index) in weeklyStudyData"
                :key="index"
                class="flex-1 flex flex-col items-center group"
              >
                <div class="w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative"
                     :style="{ height: (day.hours / Math.max(...weeklyStudyData.map(d => d.hours)) * 100) + '%' }">
                  <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {{ day.hours }}h
                  </div>
                </div>
                <span class="text-xs text-gray-600 mt-2">{{ day.day }}</span>
              </div>
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
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Activity class="w-5 h-5 mr-2 text-blue-600" />
            Recent Activity
          </h2>
          <div class="space-y-3">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div :class="[
                'w-10 h-10 rounded-full flex items-center justify-center',
                activity.type === 'booking' ? 'bg-blue-100' :
                activity.type === 'book' ? 'bg-green-100' :
                activity.type === 'event' ? 'bg-purple-100' :
                'bg-orange-100'
              ]">
                <component :is="activity.icon" :class="[
                  'w-5 h-5',
                  activity.type === 'booking' ? 'text-blue-600' :
                  activity.type === 'book' ? 'text-green-600' :
                  activity.type === 'event' ? 'text-purple-600' :
                  'text-orange-600'
                ]" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                <p class="text-xs text-gray-600">{{ activity.description }}</p>
                <span class="text-xs text-gray-400">{{ activity.time }}</span>
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

        <!-- Achievement Progress -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Trophy class="w-5 h-5 mr-2 text-yellow-600" />
            Achievements
          </h2>
          <div class="space-y-4">
            <div
              v-for="achievement in achievements"
              :key="achievement.id"
              class="relative"
            >
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <component :is="achievement.icon" class="w-4 h-4 text-gray-600" />
                  <span class="text-sm font-medium text-gray-900">{{ achievement.name }}</span>
                </div>
                <span class="text-xs text-gray-600">{{ achievement.progress }}/{{ achievement.target }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all"
                  :style="{ width: (achievement.progress / achievement.target * 100) + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Study Tips -->
        <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <Lightbulb class="w-5 h-5 mr-2 text-purple-600" />
            Study Tip of the Day
          </h3>
          <p class="text-sm text-gray-700 leading-relaxed">
            {{ studyTip }}
          </p>
          <button class="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center">
            Learn more
            <ChevronRight class="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useApp } from '@/shared/composables/useApp';
import { studentAPI } from '@/shared/services/api';
import StatsCard from './StatsCard.vue';
import RecommendationSlider from './RecommendationSlider.vue';
import UpcomingBookings from './UpcomingBookings.vue';
import QuickActions from './QuickActions.vue';
import { 
  BookMarked, 
  Calendar, 
  MapPin, 
  Award,
  Clock,
  Target,
  TrendingUp,
  BarChart3,
  Activity,
  Trophy,
  Lightbulb,
  ChevronRight,
  BookOpen,
  Users
} from 'lucide-vue-next';

const { user } = useAuth();
const { bookings, reservations, libraries, books, events, generateAIRecommendations } = useApp();
const router = useRouter();

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
const hoursToday = ref(0);
const weeklyProgress = ref(0);
const userRank = ref(0);
const totalWeeklyHours = ref(0);
const avgSessionDuration = ref(0);
const totalSessions = ref(0);
const focusScore = ref(0);
const weeklyStudyData = ref<any[]>([]);
const recentActivities = ref<any[]>([]);

// Load dashboard data
const loadDashboardData = async () => {
  try {
    loading.value = true;
    const data = await studentAPI.getDashboard();
    dashboardData.value = data;

    // Update analytics
    if (data.analytics) {
      hoursToday.value = data.analytics.hours_today || 0;
      weeklyProgress.value = data.analytics.weekly_progress || 0;
      totalWeeklyHours.value = data.analytics.weekly_hours || 0;
      avgSessionDuration.value = data.analytics.avg_session_duration || 0;
      totalSessions.value = data.analytics.total_sessions || 0;
      focusScore.value = data.analytics.focus_score || 0;
      weeklyStudyData.value = data.analytics.weekly_study_data || [];
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

const achievements = ref([
  {
    id: 1,
    name: 'Early Bird',
    icon: Clock,
    progress: Math.min(totalSessions.value, 10),
    target: 10,
    description: 'Complete 10 study sessions'
  },
  {
    id: 2,
    name: 'Bookworm',
    icon: BookOpen,
    progress: Math.min(reservations.value.length, 15),
    target: 15,
    description: 'Reserve 15 books'
  }
]);

const studyTip = ref(
  "The Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. After 4 sessions, take a longer 15-30 minute break. This helps maintain focus and prevents burnout."
);

const stats = computed(() => [
  {
    title: 'Total Bookings',
    value: bookings.value.length.toString(),
    icon: Calendar,
    color: 'blue' as const,
    subtitle: 'This month'
  },
  {
    title: 'Reserved Books',
    value: reservations.value.length.toString(),
    icon: BookMarked,
    color: 'teal' as const,
    subtitle: 'Active reservations'
  },
  {
    title: 'Loyalty Points',
    value: (user.value?.loyalty_points || 0).toString(),
    icon: Award,
    color: 'orange' as const,
    subtitle: 'Earned points'
  },
  {
    title: 'Available Libraries',
    value: libraries.value.length.toString(),
    icon: MapPin,
    color: 'green' as const,
    subtitle: 'In your area'
  }
]);

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
