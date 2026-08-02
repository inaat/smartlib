<template>
  <div class="space-y-6 font-outfit">
    <!-- Inline Action Bar -->
    <div class="flex justify-end items-center space-x-3 font-outfit" v-if="notifications.length > 0">
      <button 
        v-if="unreadCount > 0"
        @click="markAllAsRead"
        class="flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm active:scale-98 transition-all"
      >
        <CheckCircle class="w-3.5 h-3.5 text-slate-500" />
        <span>Mark all as read</span>
      </button>
      <button 
        @click="clearAll"
        class="flex items-center space-x-2 px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-semibold border border-red-100 shadow-sm active:scale-98 transition-all"
      >
        <Trash2 class="w-3.5 h-3.5" />
        <span>Clear all</span>
      </button>
    </div>

    <!-- Notifications List -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div v-if="notifications.length === 0" class="p-12 sm:p-16 text-center font-outfit">
        <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Bell class="w-5 h-5 text-slate-400" />
        </div>
        <h3 class="text-sm font-semibold text-slate-800 mb-1">No notifications yet</h3>
        <p class="text-xs text-slate-400 font-medium">We'll notify you when something important happens.</p>
      </div>

      <div v-else class="divide-y divide-slate-100">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          class="p-4 sm:p-6 hover:bg-slate-50/50 transition-colors cursor-pointer group relative flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-left"
          :class="{ 'bg-blue-50/20': !notification.is_read }"
          @click="handleNotificationClick(notification)"
        >
          <div class="flex items-start space-x-3.5 flex-1 min-w-0">
            <!-- Icon -->
            <div 
              class="p-2.5 rounded-xl border flex-shrink-0 transition-transform group-hover:scale-105"
              :class="getNotificationIconClass(notification.type)"
            >
              <component :is="getNotificationIcon(notification.type)" class="w-4 h-4" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0 pr-2">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                <h3 class="text-xs font-bold text-slate-800 break-words" :class="{ 'text-blue-900': !notification.is_read }">
                  {{ notification.title }}
                </h3>
                <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex-shrink-0">
                  {{ formatDate(notification.created_at) }}
                </span>
              </div>
              <p class="text-xs text-slate-500 font-medium leading-relaxed break-words max-w-3xl">
                {{ notification.message }}
              </p>
            </div>
          </div>

          <!-- Action Buttons / Status Indicator -->
          <div class="flex items-center justify-end space-x-1.5 sm:ml-4 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100/60" @click.stop>
            <!-- Mark as Read button (if unread) -->
            <button
              v-if="!notification.is_read"
              @click="markAsRead(notification.id)"
              class="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              title="Mark as read"
            >
              <Check class="w-4 h-4" />
            </button>
            
            <!-- Clear/Delete button -->
            <button
              @click="deleteSingle(notification.id)"
              class="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              title="Delete notification"
            >
              <Trash2 class="w-4 h-4" />
            </button>
            
            <!-- Status Blue Dot -->
            <div v-if="!notification.is_read" class="w-2.5 h-2.5 bg-blue-600 rounded-full ml-1"></div>
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
  Clock,
  Trash2,
  Check
} from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'vue-router';

const { 
  notifications, 
  unreadCount, 
  markNotificationAsRead,
  markAllNotificationsAsRead,
  clearAllNotifications,
  deleteNotification
} = useAuth();

const { showConfirm } = useSwal();
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
  await markAllNotificationsAsRead();
};

const clearAll = async () => {
  const confirmed = await showConfirm(
    'Clear All Notifications',
    'Are you sure you want to permanently clear all notifications?',
    'Yes, clear all'
  );
  if (confirmed) {
    await clearAllNotifications();
  }
};

const markAsRead = async (id: number | string) => {
  await markNotificationAsRead(id);
};

const deleteSingle = async (id: number | string) => {
  await deleteNotification(id);
};
</script>
