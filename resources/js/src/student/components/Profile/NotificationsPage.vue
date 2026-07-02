<template>
  <div class="space-y-6 font-outfit">
    <!-- Inline Action Bar -->
    <div class="flex justify-end font-outfit" v-if="unreadCount > 0">
      <button 
        @click="markAllAsRead"
        class="flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-200 shadow-sm active:scale-98 transition-all"
      >
        <CheckCircle class="w-3.5 h-3.5 text-slate-500" />
        <span>Mark all as read</span>
      </button>
    </div>

    <!-- Notifications List -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div v-if="notifications.length === 0" class="p-16 text-center font-outfit">
        <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Bell class="w-5 h-5 text-slate-400" />
        </div>
        <h3 class="text-sm font-bold text-slate-800 mb-1">No notifications yet</h3>
        <p class="text-xs text-slate-400 font-semibold">We'll notify you when something important happens.</p>
      </div>

      <div v-else class="divide-y divide-slate-100/60">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          class="p-6 hover:bg-slate-50/50 transition-colors cursor-pointer group relative flex items-start justify-between"
          :class="{ 'bg-blue-50/15': !notification.is_read }"
          @click="handleNotificationClick(notification)"
        >
          <div class="flex items-start space-x-4 flex-1 text-left">
            <!-- Icon -->
            <div 
              class="p-2.5 rounded-xl border transition-transform group-hover:scale-105"
              :class="getNotificationIconClass(notification.type)"
            >
              <component :is="getNotificationIcon(notification.type)" class="w-4 h-4" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex items-center justify-between mb-1.5">
                <h3 class="text-xs font-black text-slate-800 truncate" :class="{ 'text-blue-900': !notification.is_read }">
                  {{ notification.title }}
                </h3>
                <span class="text-[10px] font-bold text-slate-400 whitespace-nowrap ml-3 uppercase tracking-wider">
                  {{ formatDate(notification.created_at) }}
                </span>
              </div>
              <p class="text-xs text-slate-500 font-semibold leading-relaxed max-w-3xl">
                {{ notification.message }}
              </p>
            </div>
          </div>

          <!-- Status Indicator -->
          <div v-if="!notification.is_read" class="pl-2 mt-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
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
    case 'event': return 'bg-purple-50 border border-purple-200 text-purple-600';
    case 'subscription': return 'bg-emerald-50 border border-emerald-300 text-emerald-700';
    case 'book': return 'bg-indigo-50 border border-indigo-200 text-indigo-600';
    case 'booking': return 'bg-blue-50 border border-blue-200 text-blue-600';
    case 'queue': return 'bg-amber-50 border border-amber-200 text-amber-605';
    default: return 'bg-slate-50 border border-slate-200 text-slate-500';
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
