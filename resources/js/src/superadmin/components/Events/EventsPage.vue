<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Event Management</h1>
        <p class="text-gray-600 mt-1">Manage library events across all libraries</p>
      </div>
      <button
        @click="openCreateModal"
        class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
      >
        <span class="text-sm font-medium">Create Event</span>
      </button>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Events List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="event in events" :key="event.id" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-40 bg-gray-100 relative">
          <img v-if="event.image" :src="event.image" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
            <Calendar class="w-12 h-12" />
          </div>
          <div class="absolute top-3 right-3">
            <span :class="['px-2 py-1 rounded-full text-xs font-bold', event.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
              {{ event.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-indigo-600 uppercase">{{ event.type || 'General' }}</span>
            <span class="text-xs text-gray-500">{{ event.library?.name }}</span>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ event.title }}</h3>
          <div class="space-y-2 mb-4">
            <div class="flex items-center text-sm text-gray-600">
              <Calendar class="w-4 h-4 mr-2" />
              {{ formatDate(event.date) }}
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <Clock class="w-4 h-4 mr-2" />
              {{ event.start_time }} - {{ event.end_time }}
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <Users class="w-4 h-4 mr-2" />
              {{ event.registered_count || 0 }} / {{ event.capacity || '∞' }} Registered
            </div>
          </div>
          <div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
            <button @click="editEvent(event)" class="text-sm font-medium text-indigo-600 hover:text-indigo-800">Edit</button>
            <button @click="confirmDelete(event)" class="text-sm font-medium text-red-600 hover:text-red-800">Delete</button>
          </div>
        </div>
      </div>
      <div v-if="events.length === 0" class="col-span-full bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
        No events found. Create your first event to get started.
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 my-8 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Event' : 'Create New Event' }}</h3>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="saveEvent" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
              <input v-model="form.title" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Library</label>
              <select v-model="form.library_id" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input v-model="form.date" type="date" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <input v-model="form.start_time" type="time" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input v-model="form.end_time" type="time" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Venue</label>
              <input v-model="form.venue" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Main Hall" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <input v-model.number="form.capacity" type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 50" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea v-model="form.description" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
              <input type="file" @change="handleImageUpload" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div class="flex items-center space-x-4 pt-6">
              <label class="flex items-center space-x-2">
                <input v-model="form.is_active" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
                <span class="text-sm font-medium text-gray-700">Active</span>
              </label>
              <label class="flex items-center space-x-2">
                <input v-model="form.is_paid" type="checkbox" class="w-4 h-4 text-indigo-600 rounded" />
                <span class="text-sm font-medium text-gray-700">Paid Event</span>
              </label>
            </div>
          </div>

          <div v-if="form.is_paid">
            <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input v-model.number="form.price" type="number" step="0.01" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Event' : 'Create Event') }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Calendar, Clock, Users, X, MapPin } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';

const selectedLibraryId = ref<number | null>(null);
const events = ref<any[]>([]);
const libraries = ref<any[]>([]);
const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

const form = ref({
  id: null as number | null,
  title: '',
  description: '',
  library_id: null as number | null,
  date: '',
  start_time: '',
  end_time: '',
  venue: '',
  capacity: 0,
  type: 'General',
  is_active: true,
  is_paid: false,
  price: 0,
  image: null as File | null
});

const fetchEvents = async () => {
  try {
    const params: any = {};
    if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
    events.value = await superadminAPI.getEvents(params);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

const fetchLibraries = async () => {
  try {
    libraries.value = await superadminAPI.getLibraries();
  } catch (error) {
    console.error('Error fetching libraries:', error);
  }
};

watch(selectedLibraryId, fetchEvents);

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    form.value.image = target.files[0];
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    title: '',
    description: '',
    library_id: selectedLibraryId.value || (libraries.value.length > 0 ? libraries.value[0].id : null),
    date: '',
    start_time: '',
    end_time: '',
    venue: '',
    capacity: 0,
    type: 'General',
    is_active: true,
    is_paid: false,
    price: 0,
    image: null
  };
  showModal.value = true;
};

const editEvent = (event: any) => {
  isEditing.value = true;
  form.value = {
    id: event.id,
    title: event.title,
    description: event.description,
    library_id: event.library_id,
    date: event.date,
    start_time: event.start_time,
    end_time: event.end_time,
    venue: event.venue,
    capacity: event.capacity,
    type: event.type || 'General',
    is_active: event.is_active,
    is_paid: event.is_paid,
    price: event.price,
    image: null
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveEvent = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('description', form.value.description || '');
    formData.append('library_id', form.value.library_id?.toString() || '');
    formData.append('date', form.value.date);
    formData.append('start_time', form.value.start_time);
    formData.append('end_time', form.value.end_time);
    formData.append('venue', form.value.venue || '');
    formData.append('capacity', form.value.capacity.toString());
    formData.append('type', form.value.type);
    formData.append('is_active', form.value.is_active ? '1' : '0');
    formData.append('is_paid', form.value.is_paid ? '1' : '0');
    formData.append('price', form.value.price.toString());
    
    if (form.value.image) formData.append('image', form.value.image);

    if (isEditing.value && form.value.id) {
      formData.append('_method', 'PUT');
      await superadminAPI.updateEvent(form.value.id.toString(), formData as any);
    } else {
      await superadminAPI.createEvent(formData as any);
    }
    await fetchEvents();
    closeModal();
  } catch (error) {
    console.error('Error saving event:', error);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (event: any) => {
  if (confirm('Are you sure you want to delete this event?')) {
    try {
      await superadminAPI.deleteEvent(event.id.toString());
      await fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

onMounted(() => {
  fetchEvents();
  fetchLibraries();
});
</script>
