<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Notifications</h1>
        <p class="text-gray-600">Stay updated with your library activities</p>
      </div>
      <button 
        v-if="unreadCount > 0"
        @click="markAllAsRead"
        class="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-medium"
      >
        <CheckCircle class="w-4 h-4" />
        <span>Mark all as read</span>
      </button>
    </div>

    <!-- Notifications List -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div v-if="notifications.length === 0" class="p-12 text-center">
        <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bell class="w-8 h-8 text-gray-300" />
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-1">No notifications yet</h3>
        <p class="text-gray-500">We'll notify you when something important happens.</p>
      </div>

      <div v-else class="divide-y divide-gray-50">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          class="p-6 hover:bg-gray-50/50 transition-colors cursor-pointer group relative"
          :class="{ 'bg-blue-50/20': !notification.is_read }"
          @click="handleNotificationClick(notification)"
        >
          <div class="flex items-start space-x-4">
            <!-- Icon -->
            <div 
              class="p-3 rounded-xl transition-transform group-hover:scale-110"
              :class="getNotificationIconClass(notification.type)"
            >
              <component :is="getNotificationIcon(notification.type)" class="w-5 h-5" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h3 class="font-bold text-gray-900 truncate pr-4">
                  {{ notification.title }}
                </h3>
                <span class="text-xs font-medium text-gray-400 whitespace-nowrap">
                  {{ formatDate(notification.created_at) }}
                </span>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed max-w-2xl">
                {{ notification.message }}
              </p>
            </div>

            <!-- Status Indicator -->
            <div v-if="!notification.is_read" class="mt-1">
              <div class="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  Bell, 
  Calendar, 
  CreditCard, 
  Book, 
  CheckCircle, 
  MessageSquare,
  Clock
} from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'vue-router';

const { notifications, unreadCount, markNotificationAsRead } = useAuth();
const router = useRouter();

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'event': return Calendar;
    case 'subscription': return CreditCard;
    case 'book': return Book;
    case 'booking': return CheckCircle;
    case 'queue': return Clock;
    default: return MessageSquare;
  }
};

const getNotificationIconClass = (type: string) => {
  switch (type) {
    case 'event': return 'bg-purple-100 text-purple-600';
    case 'subscription': return 'bg-green-100 text-green-600';
    case 'book': return 'bg-indigo-100 text-indigo-600';
    case 'booking': return 'bg-blue-100 text-blue-600';
    case 'queue': return 'bg-amber-100 text-amber-600';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const formatDate = (date: string) => {
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  } catch (e) {
    return date;
  }
};

const handleNotificationClick = async (notification: any) => {
  if (!notification.is_read) {
    await markNotificationAsRead(notification.id);
  }
  
  // Navigate based on type
  switch (notification.type) {
    case 'booking':
      router.push('/student/dashboard');
      break;
    case 'event':
      router.push('/student/events');
      break;
    case 'subscription':
      router.push('/student/subscription');
      break;
    case 'queue':
      router.push('/student/dashboard');
      break;
  }
};

const markAllAsRead = async () => {
  const unreadOnes = notifications.value.filter(n => !n.is_read);
  for (const n of unreadOnes) {
    await markNotificationAsRead(n.id);
  }
};
</script>
