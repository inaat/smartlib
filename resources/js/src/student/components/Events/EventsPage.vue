<template>
  <div class="space-y-6 pb-12 font-outfit text-left">
    <!-- Refresh Action Row -->
    <div class="flex justify-end">
      <button 
        @click="fetchEvents"
        :disabled="loading"
        class="flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm active:scale-98 transition-all disabled:opacity-50"
      >
        <RefreshCw :class="['w-3.5 h-3.5 text-slate-500', loading ? 'animate-spin' : '']" />
        <span>{{ loading ? 'Refreshing...' : 'Refresh Events' }}</span>
      </button>
    </div>

    <!-- Events Grid -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading events...</p>
    </div>
    
    <div v-else-if="events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="event in events" 
        :key="event.id"
        class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:border-slate-200/80 transition-all duration-350 group flex flex-col h-full relative"
      >
        <div class="aspect-video relative overflow-hidden bg-slate-50 rounded-t-2xl border-b border-slate-100 flex items-center justify-center">
          <img 
            v-if="event.image"
            :src="event.image" 
            :alt="event.title"
            class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          >
          <div v-else class="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400">
             <Calendar class="w-10 h-10 stroke-1" />
          </div>
          <!-- Paid/Free Badge -->
          <div class="absolute top-3 right-3">
            <span :class="[
              'px-2.5 py-1 rounded-lg text-[9px] font-semibold uppercase tracking-wider shadow-sm border',
              event.is_paid ? 'bg-amber-500 text-white border-amber-400/20' : 'bg-emerald-500 text-white border-emerald-400/20'
            ]">
              {{ event.is_paid ? (event.price ? `Rs. ${event.price}` : 'Paid') : 'Free' }}
            </span>
          </div>
        </div>
        
        <div class="p-5 flex-1 flex flex-col">
          <div class="flex justify-between items-start mb-3">
             <span class="inline-block text-[9px] font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded uppercase tracking-wider">
               {{ event.type.replace('_', ' ') }}
             </span>
             <div class="flex items-center text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                <Calendar class="w-3.5 h-3.5 mr-1" />
                {{ formatDate(event.date) }}
             </div>
          </div>
          
          <h3 class="font-semibold text-slate-800 text-base mb-1.5 leading-snug group-hover:text-blue-600 transition-colors line-clamp-1" :title="event.title">{{ event.title }}</h3>
          <p class="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">{{ event.description }}</p>
          
          <div class="space-y-2 mb-4">
             <div class="flex items-center text-xs text-slate-600 font-semibold">
                <Clock class="w-4 h-4 mr-2 text-slate-400" />
                {{ formatTime(event.start_time) }} - {{ formatTime(event.end_time) }}
             </div>
             <div v-if="event.venue" class="flex items-center text-xs text-slate-600 font-semibold">
                <MapPin class="w-4 h-4 mr-2 text-slate-400" />
                {{ event.venue }}
             </div>
          </div>

          <!-- Capacity Bar -->
          <div class="mt-auto pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <div class="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase tracking-wide">
              <span>Attendees</span>
              <span>{{ event.registered_count || 0 }} / {{ event.capacity || 'Unlimited' }}</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                class="bg-blue-600 h-full rounded-full transition-all duration-700" 
                :style="{ width: event.capacity ? `${Math.min(100, Math.round(((event.registered_count || 0) / event.capacity) * 100))}%` : '0%' }"
              ></div>
            </div>
          </div>

          <div class="pt-4 mt-3 flex items-center justify-between gap-3">
            <template v-if="event.is_registered">
              <div class="flex flex-col space-y-2 w-full">
                <button 
                  disabled
                  class="w-full py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 cursor-default leading-none"
                >
                  <CheckCircle class="w-4 h-4" />
                  <span>Already Registered</span>
                </button>
                <button 
                  @click="viewPass(event)"
                  class="w-full py-2 bg-white border border-blue-200 text-blue-600 hover:bg-blue-50/50 rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-2 active:scale-98 shadow-sm leading-none"
                >
                  <Printer class="w-4 h-4 text-blue-500" />
                  <span>View Pass</span>
                </button>
              </div>
            </template>

            <button 
              v-else
              @click="joinEvent(event)"
              :disabled="joiningId === event.id || isRegistrationClosed(event) || (event.capacity !== undefined && (event.registered_count || 0) >= event.capacity)"
              class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:border-slate-200/50 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/10 active:scale-98 transition-all flex items-center justify-center space-x-2 leading-none"
            >
              <span v-if="joiningId === event.id" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ getButtonText(event) }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-slate-100 rounded-2xl border border-dashed border-slate-200/80 p-8">
      <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
        <Calendar class="w-7 h-7" />
      </div>
      <h3 class="text-base font-semibold text-slate-800 mb-1">No upcoming events</h3>
      <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">Check back later for newly scheduled workshops and seminars.</p>
    </div>

    <!-- Premium Digital Event Pass Modal -->
    <div v-if="isPassModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div class="max-w-md w-full bg-slate-100 rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative flex flex-col my-8">
        
        <!-- Top Header Controls -->
        <div class="p-5 flex items-center justify-between border-b border-slate-200/80 bg-slate-50">
          <span class="text-xs font-semibold uppercase tracking-widest text-slate-500">Digital Event Pass</span>
          <button @click="closePassModal" class="p-2 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- The Pass Container (captured by html2canvas) -->
        <div class="p-6 flex justify-center bg-slate-100/50">
          <div ref="passRef" class="w-full max-w-sm bg-white rounded-[24px] border border-slate-200/80 shadow-lg overflow-hidden relative flex flex-col font-outfit text-slate-800" style="width: 360px;">
            
            <!-- Top Header (Library Info & Logo) -->
            <div class="p-5 bg-gradient-to-r from-blue-600 to-blue-700 border-b border-blue-700/20 flex items-center space-x-3 text-white">
              <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img v-if="selectedPassEvent?.library?.photo" :src="selectedPassEvent.library.photo" class="w-full h-full object-cover" />
                <BookOpen v-else class="w-5 h-5 text-white" />
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="text-sm font-bold uppercase tracking-[0.15em] text-white">GATE PASS</h4>
              </div>
            </div>

            <!-- Main Body (Event details) -->
            <div class="p-5 space-y-4">
              <div class="space-y-1">
                <span class="inline-block text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-150 uppercase tracking-widest">
                  {{ selectedPassEvent?.type?.replace('_', ' ') || 'Workshop' }}
                </span>
                <h3 class="text-lg font-semibold leading-tight text-slate-900 tracking-tight line-clamp-2">
                  {{ selectedPassEvent?.title }}
                </h3>
              </div>

              <!-- Ticket Specs -->
              <div class="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                <div>
                  <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Date</span>
                  <p class="text-[11px] font-semibold text-slate-800 mt-0.5">{{ selectedPassEvent ? formatDate(selectedPassEvent.date) : '' }}</p>
                </div>
                <div>
                  <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Time</span>
                  <p class="text-[11px] font-semibold text-slate-800 mt-0.5">{{ selectedPassEvent ? formatTime(selectedPassEvent.start_time) : '' }}</p>
                </div>
                <div>
                  <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Venue</span>
                  <p class="text-[11px] font-semibold text-slate-800 mt-0.5 truncate">{{ selectedPassEvent?.venue || 'Main Hall' }}</p>
                </div>
                <div>
                  <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Seat</span>
                  <p class="text-[11px] font-semibold text-blue-600 mt-0.5">General Admission</p>
                </div>
              </div>
            </div>

            <!-- Tear-off Separator -->
            <div class="relative flex items-center justify-between px-3">
              <!-- Left Notch (matches container background) -->
              <div class="w-6 h-6 rounded-full bg-slate-100 border border-slate-200/80 -ml-6 z-10"></div>
              <!-- Dashed Line -->
              <div class="w-full border-t-2 border-dashed border-slate-200"></div>
              <!-- Right Notch (matches container background) -->
              <div class="w-6 h-6 rounded-full bg-slate-100 border border-slate-200/80 -mr-6 z-10"></div>
            </div>

            <!-- Bottom Stub (Attendee & QR Code) -->
            <div class="p-5 flex items-center justify-between space-x-4 bg-slate-50/50">
              <!-- Attendee Bio -->
              <div class="min-w-0 flex-1 space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex-shrink-0">
                    <img :src="studentPhotoUrl" class="w-full h-full object-cover">
                  </div>
                  <div class="min-w-0">
                    <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Attendee</span>
                    <h5 class="text-xs font-semibold truncate text-slate-900 leading-snug">{{ user?.name }}</h5>
                    <p class="text-[9px] text-blue-600 font-semibold uppercase mt-0.5">Verified</p>
                  </div>
                </div>

                <div>
                  <span class="text-[8px] font-medium text-slate-400 uppercase tracking-widest">Student CRN</span>
                  <p class="text-[11px] font-mono font-bold text-slate-700 mt-0.5">{{ user?.crn || 'N/A' }}</p>
                </div>
              </div>

              <!-- Ticket QR Code -->
              <div class="flex-shrink-0 flex flex-col items-center space-y-1">
                <div class="p-1.5 bg-white rounded-xl shadow-md border border-slate-200">
                  <img :src="qrCodeUrl" class="w-24 h-24" />
                </div>
                <span class="text-[7px] font-mono font-bold text-slate-400 tracking-wider">PASS-{{ selectedPassEvent?.id }}-{{ user?.id }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Download & Print Actions -->
        <div class="p-5 border-t border-slate-200 bg-slate-50 grid grid-cols-2 gap-3">
          <button 
            @click="downloadPassImage" 
            :disabled="downloading"
            class="py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-semibold transition-all border border-slate-200 flex items-center justify-center space-x-1.5 active:scale-95 disabled:opacity-50"
          >
            <Download class="w-3.5 h-3.5" />
            <span>Image</span>
          </button>
          
          <button 
            @click="downloadPassPDF" 
            :disabled="downloading"
            class="py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-semibold transition-all border border-slate-200 flex items-center justify-center space-x-1.5 active:scale-95 disabled:opacity-50"
          >
            <FileText class="w-3.5 h-3.5 text-blue-600" />
            <span>PDF</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import {
  Calendar,
  Clock,
  MapPin,
  RefreshCw,
  CheckCircle,
  X,
  Download,
  FileText,
  BookOpen
} from 'lucide-vue-next';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import { studentAPI } from '@/student/services/studentApi';
import { Event } from '@/shared/types';
import { useSwal } from '@/shared/composables/useSwal';
import { useAuth } from '@/shared/composables/useAuth';

interface ExtendedEvent extends Event {
  is_registered?: boolean;
}

const events = ref<ExtendedEvent[]>([]);
const loading = ref(false);
const joiningId = ref<number | null>(null);

const { showConfirm, showSuccess, showError } = useSwal();
const { user } = useAuth();

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

const joinEvent = async (event: ExtendedEvent) => {
  if (!await showConfirm('Join Event', `Are you sure you want to join "${event.title}"?`, 'Yes, Join')) return;

  joiningId.value = event.id;
  try {
    await studentAPI.registerForEvent(event.id.toString());
    await fetchEvents();
    showSuccess('Joined!', 'Successfully registered for the event!');
  } catch (error: any) {
    console.error('Error joining event:', error);
    showError('Join Failed', error.message || 'Failed to join event.');
  } finally {
    joiningId.value = null;
  }
};

const isRegistrationClosed = (event: ExtendedEvent) => {
  if (!event.date) return false;
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const localTodayStr = `${year}-${month}-${day}`;
  return localTodayStr >= event.date;
};

const getButtonText = (event: ExtendedEvent) => {
  if (isRegistrationClosed(event)) {
    return 'Registration Closed';
  }
  if (event.capacity !== undefined && (event.registered_count || 0) >= event.capacity) {
    return 'Registration Seat is Full';
  }
  return 'Join Event';
};

const isPassModalOpen = ref(false);
const selectedPassEvent = ref<ExtendedEvent | null>(null);
const downloading = ref(false);
const passRef = ref<HTMLElement | null>(null);

const viewPass = (event: ExtendedEvent) => {
  selectedPassEvent.value = event;
  isPassModalOpen.value = true;
};

const closePassModal = () => {
  isPassModalOpen.value = false;
  selectedPassEvent.value = null;
};

// Computed property for student photo URL
const studentPhotoUrl = computed(() => {
  if (!user.value) return 'https://ui-avatars.com/api/?name=Student';
  const rawPhoto = user.value.profile_picture;
  return rawPhoto 
    ? (rawPhoto.startsWith('http') ? rawPhoto : `/storage/${rawPhoto}`)
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.value.name)}`;
});

// Computed property for dynamic QR code URL (generates a secure payload using event and student details)
const qrCodeUrl = computed(() => {
  if (!selectedPassEvent.value || !user.value) return '';
  const payload = JSON.stringify({
    ticket_id: `PASS-${selectedPassEvent.value.id}-${user.value.id}`,
    event_id: selectedPassEvent.value.id,
    user_id: user.value.id,
    name: user.value.name,
    crn: user.value.crn
  });
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(payload)}&bgcolor=ffffff&color=000000`;
});

const downloadPassImage = async () => {
  if (!passRef.value || downloading.value) return;
  downloading.value = true;
  try {
    const opt = {
      scale: 2, // Capture at 2x resolution for high quality
      useCORS: true, // Allow cross-origin images (like QR server & avatar api)
      backgroundColor: null,
      logging: false
    };
    
    // Slight delay to ensure images are loaded
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const canvas = await html2canvas(passRef.value, opt);
    const imgData = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `event-pass-${selectedPassEvent.value?.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
    link.click();
    showSuccess('Success', 'Event pass image downloaded!');
  } catch (error) {
    console.error('Error rendering ticket image:', error);
    showError('Error', 'Failed to generate ticket image.');
  } finally {
    downloading.value = false;
  }
};

const downloadPassPDF = async () => {
  if (!passRef.value || downloading.value) return;
  downloading.value = true;
  try {
    const opt = {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false
    };
    
    await new Promise(resolve => setTimeout(resolve, 300));
    const canvas = await html2canvas(passRef.value, opt);
    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF with fitting proportions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width + 40, canvas.height + 40]
    });
    
    pdf.addImage(imgData, 'PNG', 20, 20, canvas.width, canvas.height);
    pdf.save(`event-pass-${selectedPassEvent.value?.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`);
    showSuccess('Success', 'Event pass PDF downloaded!');
  } catch (error) {
    console.error('Error rendering ticket PDF:', error);
    showError('Error', 'Failed to generate ticket PDF.');
  } finally {
    downloading.value = false;
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.active\:scale-98:active {
  transform: scale(0.98);
}

.bg-blue-600 {
  background-color: #2563eb;
}
.bg-blue-600:hover {
  background-color: #1d4ed8;
}
.text-slate-600 {
  color: #475569;
}
</style>
