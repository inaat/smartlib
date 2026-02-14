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

            <div v-if="event.is_registered" class="flex flex-col space-y-2">
              <button 
                disabled
                class="w-full px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 cursor-default"
              >
                <CheckCircle class="w-4 h-4" />
                <span>Joined</span>
              </button>
              <button 
                @click="printPass(event)"
                class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <Printer class="w-4 h-4" />
                <span>Print Pass</span>
              </button>
            </div>

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
  CheckCircle,
  Printer
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
import { useAuth } from '@/shared/composables/useAuth';

const { showConfirm, showSuccess, showError } = useSwal();
const { user } = useAuth();

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

const printPass = (event: ExtendedEvent) => {
  if (!user.value) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const studentName = user.value.name;
  const rawPhoto = user.value.profile_photo || user.value.profile_picture;
  const studentPhoto = rawPhoto 
    ? (rawPhoto.startsWith('http') ? rawPhoto : `/storage/${rawPhoto}`)
    : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(studentName);
  const eventName = event.title;
  const eventVenue = event.venue || 'TBA';
  const eventTime = `${formatDate(event.date)} @ ${formatTime(event.start_time)} - ${formatTime(event.end_time)}`;

  printWindow.document.write(`
    <html>
      <head>
        <title>Event Pass - ${eventName}</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <style>
          @media print {
            @page { margin: 0; }
            body { margin: 1cm; }
            .no-print { display: none; }
          }
          .ticket-gradient {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          }
        </style>
      </head>
      <body class="bg-gray-50 font-sans">
        <div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="ticket-gradient p-8 text-white text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
            </div>
            <h1 class="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-80">Official Entry Pass</h1>
            <h2 class="text-2xl font-bold leading-tight">${eventName}</h2>
          </div>
          
          <div class="p-8 space-y-6">
            <div class="flex items-center space-x-6">
              <div class="relative">
                <div class="w-24 h-24 rounded-2xl overflow-hidden border-4 border-blue-50 shadow-inner">
                  <img src="${studentPhoto}" class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Attendee</p>
                <h3 class="text-xl font-bold text-gray-900">${studentName}</h3>
                <p class="text-sm text-blue-600 font-medium">Verified Student</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-dashed border-gray-200">
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Venue</p>
                <p class="text-sm font-bold text-gray-800">${eventVenue}</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Time</p>
                <p class="text-sm font-bold text-gray-800">${eventTime}</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100">
                <div class="w-full h-12 bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_4px)] opacity-20 mb-2"></div>
                <p class="text-[10px] font-mono text-gray-400">EVT-${event.id}-${user.value.id}-${Date.now().toString().slice(-6)}</p>
            </div>
          </div>
          
          <div class="bg-gray-900 p-4 text-center">
            <p class="text-[10px] text-gray-400">Please present this pass at the entrance.</p>
          </div>
        </div>
        
        <div class="no-print mt-8 text-center">
          <button onclick="window.print()" class="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            Confirm Print
          </button>
        </div>
      </body>
    </html>
  `);

  printWindow.document.close();
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
