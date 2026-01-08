<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Events Management</h1>
        <p class="text-gray-600 mt-1">Organize and manage library events</p>
      </div>
      <div class="flex items-center space-x-3">
        <button 
          @click="fetchEvents"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button 
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Create Event</span>
        </button>
      </div>
    </div>

    <!-- Create/Edit Event Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <h2 class="text-2xl font-bold text-gray-900">{{ isEditing ? 'Edit Event' : 'Create New Event' }}</h2>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="submitEvent" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Basic Info -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Event Title *</label>
                <input v-model="eventForm.title" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                <select v-model="eventForm.type" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
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
                <label class="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                <input v-model="eventForm.venue" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                <input v-model="eventForm.capacity" type="number" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
            </div>

            <!-- Date & Time -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                <input v-model="eventForm.date" type="date" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                  <input v-model="eventForm.start_time" type="time" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">End Time *</label>
                  <input v-model="eventForm.end_time" type="time" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Price (if paid)</label>
                <div class="flex items-center space-x-2">
                  <input v-model="eventForm.is_paid" type="checkbox" class="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500">
                  <span class="text-sm text-gray-700">Paid Event</span>
                </div>
                <input v-if="eventForm.is_paid" v-model="eventForm.price" type="number" min="0" step="0.01" class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="0.00">
              </div>

               <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
                <input type="file" @change="handleImageUpload" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100">
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea v-model="eventForm.description" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
          </div>

          <div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
            <button type="button" @click="closeModal" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button type="submit" :disabled="submitting" class="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2">
              <RefreshCw v-if="submitting" class="w-4 h-4 animate-spin" />
              <span>{{ submitting ? 'Saving...' : (isEditing ? 'Update Event' : 'Create Event') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Events Grid -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <RefreshCw class="w-8 h-8 text-purple-600 animate-spin" />
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
             <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">{{ event.type.replace('_', ' ') }}</span>
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

    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center">
      <Calendar class="w-12 h-12 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900">No events found</h3>
      <p class="text-gray-500">Create your first event to get started</p>
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
  Users
} from 'lucide-vue-next';
import { librarianAPI } from '@/librarian/services/librarianApi';
import { Event } from '@/shared/types';

const events = ref<Event[]>([]);
const loading = ref(false);
const submitting = ref(false);
const isModalOpen = ref(false);
const isEditing = ref(false);
const editingId = ref<number | null>(null);

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

const handleImageUpload = (event: any) => {
  eventForm.value.image = event.target.files[0];
};

const openCreateModal = () => {
  isEditing.value = false;
  editingId.value = null;
  resetForm();
  isModalOpen.value = true;
};

const editEvent = (event: Event) => {
  isEditing.value = true;
  editingId.value = event.id;
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
    } else {
      await librarianAPI.createEvent(formData);
    }
    
    await fetchEvents();
    closeModal();
  } catch (error) {
    console.error('Error saving event:', error);
    alert('Failed to save event. Please check the form.');
  } finally {
    submitting.value = false;
  }
};

const deleteEvent = async (id: number) => {
  if (!confirm('Are you sure you want to delete this event?')) return;
  
  try {
    await librarianAPI.deleteEvent(id);
    await fetchEvents();
  } catch (error) {
    console.error('Error deleting event:', error);
    alert('Failed to delete event.');
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

onMounted(() => {
  fetchEvents();
});
</script>
