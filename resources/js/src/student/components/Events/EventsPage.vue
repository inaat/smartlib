<template>
  <div class="p-6 space-y-6 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">Discover and join library events</p>
      </div>
      <button 
        @click="fetchEvents"
        :disabled="loading"
        class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
      >
        <RefreshCw :class="['w-4 h-4 text-gray-600 dark:text-gray-300', loading ? 'animate-spin' : '']" />
        <span class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
      </button>
    </div>

    <!-- Events Grid -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <RefreshCw class="w-8 h-8 text-blue-600 animate-spin" />
    </div>
    
    <div v-else-if="events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="event in events" 
        :key="event.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-md transition-all"
      >
        <div class="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img 
            v-if="event.image"
            :src="event.image" 
            :alt="event.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          >
          <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400">
             <Calendar class="w-12 h-12" />
          </div>
          <div class="absolute top-2 right-2">
            <span :class="[
              'px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm',
              event.is_paid ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'
            ]">
              {{ event.is_paid ? (event.price ? `$${event.price}` : 'Paid') : 'Free' }}
            </span>
          </div>
        </div>
        <div class="p-5">
          <div class="flex justify-between items-start mb-3">
             <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{{ event.type.replace('_', ' ') }}</span>
             <div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Calendar class="w-3 h-3 mr-1" />
                {{ formatDate(event.date) }}
             </div>
          </div>
          
          <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 line-clamp-1">{{ event.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{{ event.description }}</p>
          
          <div class="space-y-2 mb-4">
             <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock class="w-4 h-4 mr-2" />
                {{ formatTime(event.start_time) }} - {{ formatTime(event.end_time) }}
             </div>
             <div v-if="event.venue" class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin class="w-4 h-4 mr-2" />
                {{ event.venue }}
             </div>
          </div>

          <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
             <div class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
              <Users class="w-3 h-3 mr-1" />
              {{ event.registered_count || 0 }} / {{ event.capacity || '∞' }}
            </div>

            <button 
              v-if="event.is_registered"
              disabled
              class="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center space-x-1 cursor-default"
            >
              <CheckCircle class="w-4 h-4" />
              <span>Joined</span>
            </button>

            <button 
              v-else
              @click="joinEvent(event)"
              :disabled="joiningId === event.id || (event.capacity && (event.registered_count || 0) >= event.capacity)"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <span v-if="joiningId === event.id" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ (event.capacity && (event.registered_count || 0) >= event.capacity) ? 'Full' : 'Join Event' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 py-20 text-center">
      <Calendar class="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">No upcoming events</h3>
      <p class="text-gray-500 dark:text-gray-400">Check back later for new events</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  RefreshCw,
  CheckCircle
} from 'lucide-vue-next';
import { studentAPI } from '@/student/services/studentApi';
import { Event } from '@/shared/types';

interface ExtendedEvent extends Event {
  is_registered?: boolean;
}

const events = ref<ExtendedEvent[]>([]);
const loading = ref(false);
const joiningId = ref<number | null>(null);

const fetchEvents = async () => {
  loading.value = true;
  try {
    const data = await studentAPI.getEvents();
    events.value = data;
  } catch (error) {
    console.error('Error fetching events:', error);
  } finally {
    loading.value = false;
  }
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const joinEvent = async (event: ExtendedEvent) => {
  if (!await showConfirm('Join Event', `Are you sure you want to join "${event.title}"?`, 'Yes, Join')) return;

  joiningId.value = event.id;
  try {
    await studentAPI.registerForEvent(event.id.toString());
    // Optimistic update or refresh
    await fetchEvents();
    showSuccess('Joined!', 'Successfully registered for the event!');
  } catch (error: any) {
    console.error('Error joining event:', error);
    showError('Join Failed', error.message || 'Failed to join event.');
  } finally {
    joiningId.value = null;
  }
};

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

const formatTime = (timeString?: string) => {
  if (!timeString) return '';
  return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
};

onMounted(() => {
  fetchEvents();
});
</script>
