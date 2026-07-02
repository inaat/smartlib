<template>
  <div class="p-6 space-y-6">
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3">
        <button 
          @click="fetchEvents"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 disabled:opacity-50 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span>{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button 
          @click="openCreateModal"
          class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
        >
          <Plus class="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>
    </div>

    <!-- Create/Edit Event Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="closeModal"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-slate-100 text-left">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
          <div>
            <h3 class="text-base font-bold text-slate-700 tracking-tight leading-none mb-1.5">{{ isEditing ? 'Edit Event' : 'Create New Event' }}</h3>
            <p class="text-[10px] text-slate-400 font-semibold">Configure the event details and scheduling parameters.</p>
          </div>
          <button @click="closeModal" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
            <X class="w-4 h-4" />
          </button>
        </div>

        <form @submit.prevent="submitEvent" class="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Basic Info -->
            <div class="space-y-4">
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Event Title *</label>
                <input v-model="eventForm.title" type="text" required placeholder="e.g., Financial Literacy Workshop" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Type *</label>
                <select v-model="eventForm.type" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none cursor-pointer">
                  <option value="">Select Type</option>
                  <option value="seminar">Seminar</option>
                  <option value="workshop">Workshop</option>
                  <option value="study_group">Study Group</option>
                  <option value="exam_prep">Exam Prep</option>
                  <option value="career_guidance">Career Guidance</option>
                  <option value="networking">Networking</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Venue</label>
                <input v-model="eventForm.venue" type="text" placeholder="e.g., Main Hall, Room 203" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Capacity</label>
                <input v-model="eventForm.capacity" type="number" min="1" placeholder="e.g., 50" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
              </div>
            </div>

            <!-- Date & Time -->
            <div class="space-y-4">
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Date *</label>
                <input v-model="eventForm.date" type="date" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Start Time *</label>
                  <input v-model="eventForm.start_time" type="time" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">End Time *</label>
                  <input v-model="eventForm.end_time" type="time" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none">
                </div>
              </div>
              
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Price (if paid)</label>
                <div class="flex items-center space-x-2 mb-2">
                  <input v-model="eventForm.is_paid" type="checkbox" class="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500">
                  <span class="text-xs font-semibold text-slate-600">Paid Event</span>
                </div>
                <input v-if="eventForm.is_paid" v-model="eventForm.price" type="number" min="0" step="0.01" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none" placeholder="0.00">
              </div>

               <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Event Image</label>
                <input type="file" @change="handleImageUpload" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3.5 file:rounded-xl file:border file:border-slate-200 file:text-[10px] file:font-bold file:uppercase file:tracking-wider file:bg-white file:text-slate-600 hover:file:bg-slate-50 transition-all cursor-pointer file:cursor-pointer mb-3">
                <div v-if="imagePreview || existingImage" class="relative w-full h-36 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                  <img :src="imagePreview || existingImage || undefined" class="w-full h-full object-cover" />
                  <button type="button" @click="removeImage" class="absolute top-2 right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow hover:scale-105 active:scale-95 cursor-pointer" title="Remove Image">
                    <X class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Description</label>
            <textarea v-model="eventForm.description" rows="3" placeholder="Describe the event details, topics, and target audience..." class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none resize-none"></textarea>
          </div>

          <!-- Buttons -->
          <div class="pt-4 flex space-x-3 border-t border-slate-100">
            <button type="button" @click="closeModal" class="flex-1 px-4 py-2.5 text-xs text-slate-550 font-bold bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer">
              Cancel
            </button>
            <button type="submit" :disabled="submitting" class="flex-1 px-4 py-2.5 bg-emerald-600 border border-emerald-700 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-1.5">
              <RefreshCw v-if="submitting" class="w-3.5 h-3.5 animate-spin" />
              <span>{{ submitting ? 'Saving...' : (isEditing ? 'Update Event' : 'Create Event') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Events Grid -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <RefreshCw class="w-8 h-8 text-emerald-600 animate-spin" />
    </div>
    
    <div v-else-if="events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="event in events" 
        :key="event.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all"
      >
        <div class="aspect-video relative overflow-hidden bg-gray-100">
          <img 
            v-if="event.image"
            :src="event.image" 
            :alt="event.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          >
          <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
             <Calendar class="w-12 h-12" />
          </div>
          <div class="absolute top-2 right-2">
            <span :class="[
              'px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm',
              event.is_paid ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'
            ]">
              {{ event.is_paid ? 'Paid' : 'Free' }}
            </span>
          </div>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start mb-2">
             <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">{{ event.type.replace('_', ' ') }}</span>
             <span class="text-xs text-gray-500">{{ formatDate(event.date) }}</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-1 line-clamp-1">{{ event.title }}</h3>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ event.description }}</p>
          
          <div class="flex items-center justify-between pt-3 border-t border-gray-100">
            <div class="text-xs text-gray-500 flex items-center">
              <Users class="w-3 h-3 mr-1" />
              {{ event.registered_count || 0 }} / {{ event.capacity || '∞' }}
            </div>
            <div class="flex items-center space-x-2">
              <button 
                @click="viewDetails(event)" 
                class="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-100"
              >
                Details
              </button>
              <button @click="editEvent(event)" class="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit2 class="w-4 h-4" />
              </button>
              <button @click="deleteEvent(event.id)" class="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Events Empty State -->
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center">
      <Calendar class="w-12 h-12 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900">No events found</h3>
      <p class="text-gray-500">Create your first event to get started</p>
    </div>

    <!-- Event Details & Participants Modal -->
    <div v-if="isDetailsModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div>
            <h2 class="text-2xl font-bold">{{ selectedEvent?.title }}</h2>
            <p class="text-emerald-100 text-sm mt-1">Participants List</p>
          </div>
          <button @click="isDetailsModalOpen = false" class="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-0">
          <div v-if="loadingDetails" class="flex flex-col items-center justify-center py-20 bg-gray-50">
            <RefreshCw class="w-8 h-8 text-emerald-600 animate-spin mb-4" />
            <p class="text-gray-500 font-medium">Loading participants...</p>
          </div>
          
          <template v-else-if="selectedEvent?.registrations?.length">
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                    <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Level</th>
                    <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Registered At</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="reg in selectedEvent.registrations" :key="reg.id" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm mr-3">
                          <img v-if="reg.user?.profile_picture" :src="getProfilePictureUrl(reg.user.profile_picture)" class="w-full h-full object-cover rounded-full" />
                          <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-700 rounded-full text-emerald-700 font-bold text-xs">
                            {{ reg.user?.name?.charAt(0).toUpperCase() || '?' }}
                          </div>
                        </div>
                        <div>
                          <p class="text-sm font-bold text-gray-900">{{ reg.user?.name }}</p>
                          <p class="text-xs text-gray-500">{{ reg.user?.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">
                      {{ reg.user?.ca_level || 'N/A' }}
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500 italic">
                      {{ formatDate(reg.created_at) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>

          <div v-else class="py-20 text-center bg-gray-50">
            <Users class="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900">No participants yet</h3>
            <p class="text-gray-500">When students register, they will appear here.</p>
          </div>
        </div>

        <div class="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center animate-in fade-in">
          <div class="text-sm font-medium text-gray-600">
             Total: <span class="text-emerald-600 font-bold">{{ selectedEvent?.registrations?.length || 0 }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              v-if="selectedEvent?.registrations?.length"
              @click="downloadRegisteredStudentsPDF"
              class="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors text-sm font-bold flex items-center space-x-1.5 cursor-pointer shadow-sm"
            >
              <Download class="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button @click="isDetailsModalOpen = false" class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-bold cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  Plus,
  RefreshCw,
  Edit2,
  Trash2,
  X,
  Calendar,
  Users,
  Download
} from 'lucide-vue-next';
import { librarianAPI } from '@/librarian/services/librarianApi';
import { Event } from '@/shared/types';
import { jsPDF } from 'jspdf';

const events = ref<Event[]>([]);
const loading = ref(false);
const submitting = ref(false);
const isModalOpen = ref(false);
const isEditing = ref(false);
const editingId = ref<number | null>(null);

// Details & Participants
const isDetailsModalOpen = ref(false);
const loadingDetails = ref(false);
const selectedEvent = ref<any>(null);

const viewDetails = async (event: Event) => {
  selectedEvent.value = { ...event };
  isDetailsModalOpen.value = true;
  loadingDetails.value = true;
  try {
    const data = await librarianAPI.getEvent(event.id);
    selectedEvent.value = data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    showError('Error', 'Failed to load participant list');
  } finally {
    loadingDetails.value = false;
  }
};

const downloadRegisteredStudentsPDF = () => {
  if (!selectedEvent.value || !selectedEvent.value.registrations?.length) return;
  
  const doc = new jsPDF();
  const event = selectedEvent.value;
  const registrations = event.registrations;
  
  // Title / Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(4, 120, 87); // Emerald 700
  doc.text("Registered Students List", 14, 20);
  
  // Event details
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  
  doc.text(`Event Title: ${event.title}`, 14, 28);
  doc.text(`Type: ${event.type.replace('_', ' ').toUpperCase()}`, 14, 33);
  doc.text(`Date: ${formatDate(event.date)} | Time: ${event.start_time?.substring(0, 5)} - ${event.end_time?.substring(0, 5)}`, 14, 38);
  doc.text(`Venue: ${event.venue || 'N/A'}`, 14, 43);
  doc.text(`Total Registered: ${registrations.length} / ${event.capacity || 'Unlimited'}`, 14, 48);
  
  // Draw a dividing line
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.line(14, 52, 196, 52);
  
  // Table Headers
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text("Student Name", 16, 59);
  doc.text("CRN", 90, 59);
  doc.text("Level", 140, 59);
  doc.text("Registered At", 165, 59);
  
  doc.line(14, 62, 196, 62);
  
  // Table Rows
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85); // slate-700
  
  let y = 68;
  const pageHeight = doc.internal.pageSize.height;
  
  registrations.forEach((reg: any, index: number) => {
    // Check page overflow
    if (y > pageHeight - 20) {
      doc.addPage();
      y = 20;
      
      // Reprint headers on new page
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(71, 85, 105);
      doc.text("Student Name", 16, y);
      doc.text("CRN", 90, y);
      doc.text("Level", 140, y);
      doc.text("Registered At", 165, y);
      doc.line(14, y + 3, 196, y + 3);
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      y += 9;
    }
    
    const name = reg.user?.name || 'N/A';
    const crn = reg.user?.crn || 'N/A';
    const caLevel = reg.user?.ca_level || 'N/A';
    const regDate = formatDate(reg.created_at);
    
    // Draw row background for alternating colors
    if (index % 2 === 1) {
      doc.setFillColor(248, 250, 252); // slate-50
      doc.rect(14, y - 5, 182, 7, "F");
    }
    
    doc.text(name, 16, y);
    doc.text(crn, 90, y);
    doc.text(caLevel, 140, y);
    doc.text(regDate, 165, y);
    
    y += 7;
  });
  
  // Save the PDF
  const filename = `event-registrations-${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`;
  doc.save(filename);
  showSuccess('Downloaded!', 'Registered students list PDF downloaded.');
};


const eventForm = ref({
  title: '',
  type: '',
  description: '',
  date: '',
  start_time: '',
  end_time: '',
  venue: '',
  capacity: null as number | null,
  is_paid: false,
  price: null as number | null,
  image: null as File | null
});

const imagePreview = ref<string | null>(null);
const existingImage = ref<string | null>(null);

const handleImageUpload = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    eventForm.value.image = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const removeImage = () => {
  eventForm.value.image = null;
  imagePreview.value = null;
  existingImage.value = null;
};

const openCreateModal = () => {
  isEditing.value = false;
  editingId.value = null;
  imagePreview.value = null;
  existingImage.value = null;
  resetForm();
  isModalOpen.value = true;
};

const editEvent = (event: Event) => {
  isEditing.value = true;
  editingId.value = event.id;
  existingImage.value = event.image || null;
  imagePreview.value = null;
  eventForm.value = {
    title: event.title,
    type: event.type,
    description: event.description || '',
    date: event.date || '', // Ensure date format matches input type="date"
    start_time: event.start_time?.substring(0, 5) || '',
    end_time: event.end_time?.substring(0, 5) || '',
    venue: event.venue || '',
    capacity: event.capacity || null,
    is_paid: event.is_paid,
    price: event.price || null,
    image: null
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  imagePreview.value = null;
  existingImage.value = null;
  resetForm();
};

const resetForm = () => {
  eventForm.value = {
    title: '',
    type: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    venue: '',
    capacity: null,
    is_paid: false,
    price: null,
    image: null
  };
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const submitEvent = async () => {
  submitting.value = true;
  try {
    const formData = new FormData();
    formData.append('title', eventForm.value.title);
    formData.append('type', eventForm.value.type);
    formData.append('description', eventForm.value.description);
    formData.append('date', eventForm.value.date);
    formData.append('start_time', eventForm.value.start_time);
    formData.append('end_time', eventForm.value.end_time);
    formData.append('venue', eventForm.value.venue);
    if (eventForm.value.capacity) formData.append('capacity', eventForm.value.capacity.toString());
    formData.append('is_paid', eventForm.value.is_paid ? '1' : '0');
    if (eventForm.value.is_paid && eventForm.value.price) formData.append('price', eventForm.value.price.toString());
    if (eventForm.value.image) formData.append('image', eventForm.value.image);

    if (isEditing.value && editingId.value) {
      await librarianAPI.updateEvent(editingId.value, formData);
      showSuccess('Updated!', 'Event updated successfully');
    } else {
      await librarianAPI.createEvent(formData);
      showSuccess('Created!', 'Event created successfully');
    }
    
    await fetchEvents();
    closeModal();
  } catch (error) {
    console.error('Error saving event:', error);
    showError('Save Failed', 'Failed to save event. Please check the form.');
  } finally {
    submitting.value = false;
  }
};

const deleteEvent = async (id: number) => {
  if (!await showConfirm('Delete Event', 'Are you sure you want to delete this event?', 'Yes, Delete')) return;
  
  try {
    await librarianAPI.deleteEvent(id);
    showSuccess('Deleted!', 'Event deleted successfully');
    await fetchEvents();
  } catch (error) {
    console.error('Error deleting event:', error);
    showError('Delete Failed', 'Failed to delete event.');
  }
};

const fetchEvents = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getEvents();
    events.value = data;
  } catch (error) {
    console.error('Error fetching events:', error);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

onMounted(() => {
  fetchEvents();
});
</script>
