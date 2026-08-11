<template>
  <div class="space-y-6">
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3">
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer animate-in fade-in duration-200"
        >
          <Plus class="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Events List Grid -->
    <div v-if="loading && events.length === 0" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
    <div v-else-if="events.length === 0" class="text-center py-12 px-4 bg-white rounded-2xl border border-dashed border-slate-200 flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4">
        <Calendar class="w-8 h-8 text-purple-600 animate-pulse" />
      </div>
      <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
        {{ selectedLibrary ? `No Events for ${selectedLibrary.name}` : 'No Events Found' }}
      </h3>
      <p class="text-xs text-slate-500 font-medium max-w-sm mb-6">
        {{ selectedLibrary 
          ? `No events have been created for ${selectedLibrary.name} yet.` 
          : 'No events created across any library yet. Create your first event to get started.' }}
      </p>
      <button
        @click="openCreateModal"
        class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
      >
        <Plus class="w-4 h-4" />
        <span>{{ selectedLibrary ? `Create Event for ${selectedLibrary.name}` : 'Create Event' }}</span>
      </button>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="event in events" 
        :key="event.id" 
        class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group"
      >
        <!-- Card Cover -->
        <div class="h-40 bg-slate-50 relative overflow-hidden">
          <img 
            v-if="event.image" 
            :src="event.image" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-purple-50 to-fuchsia-50/20">
            <Calendar class="w-12 h-12 text-purple-300" />
          </div>
          <!-- Status Tag -->
          <div class="absolute top-3 right-3">
            <span :class="[
              'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border shadow-sm bg-white',
              event.is_active 
                ? 'bg-green-50 border-green-100 text-green-700' 
                : 'bg-red-50 border-red-100 text-red-700'
            ]">
              {{ event.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between text-left">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span class="text-purple-750 font-extrabold">{{ event.type || 'General' }}</span>
              <span class="flex items-center font-bold">
                <Building2 class="w-3.5 h-3.5 mr-1 text-slate-450" />
                {{ event.library?.name }}
              </span>
            </div>
            
            <h3 class="text-sm font-bold text-slate-700 group-hover:text-purple-700 transition-colors">{{ event.title }}</h3>
            
            <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {{ event.description || 'No description provided.' }}
            </p>

            <div class="space-y-2 pt-2">
              <div class="flex items-center text-xs font-semibold text-slate-550">
                <Calendar class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                {{ formatDate(event.date) }}
              </div>
              <div class="flex items-center text-xs font-semibold text-slate-550">
                <Clock class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                {{ event.start_time }} - {{ event.end_time }}
              </div>
              <div class="flex items-center text-xs font-semibold text-slate-550">
                <Users class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                {{ event.registered_count || 0 }} / {{ event.capacity || '∞' }} Registered
              </div>
              <div v-if="event.is_paid" class="flex items-center text-xs font-bold text-slate-655 mt-1">
                <span class="px-2 py-0.5 rounded bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-extrabold uppercase">Paid</span>
                <span class="ml-2 text-slate-700 font-extrabold">Rs. {{ event.price }}</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-slate-100">
            <button 
              @click="editEvent(event)" 
              class="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm text-xs font-bold"
            >
              Edit
            </button>
            <button 
              @click="confirmDelete(event)" 
              class="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm text-xs font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal Dialog -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col">
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">{{ isEditing ? 'Edit Event' : 'Create New Event' }}</h2>
          <button @click="closeModal" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="saveEvent" class="p-6 space-y-4 text-left max-h-[75vh] overflow-y-auto">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Event Title</label>
            <input 
              v-model="form.title" 
              type="text" 
              required 
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="e.g. Workshop on CA"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Library Venue</label>
            <select 
              v-model="form.library_id" 
              required 
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
            >
              <option :value="null" disabled>-- Select Library Venue --</option>
              <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Specific Room/Venue</label>
              <input 
                v-model="form.venue" 
                type="text" 
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. Main Hall"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Event Category</label>
              <select
                v-model="form.type"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="General">General</option>
                <option value="Seminar">Seminar</option>
                <option value="Workshop">Workshop</option>
                <option value="Guest Lecture">Guest Lecture</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2">
            <div class="col-span-1">
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Date</label>
              <input 
                v-model="form.date" 
                type="date" 
                required 
                class="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Start</label>
              <input 
                v-model="form.start_time" 
                type="time" 
                required 
                class="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">End</label>
              <input 
                v-model="form.end_time" 
                type="time" 
                required 
                class="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Capacity Limit</label>
              <input 
                v-model.number="form.capacity" 
                type="number" 
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. 50"
              />
            </div>
            <div class="flex items-center space-x-4 pt-6 justify-center">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input v-model="form.is_active" type="checkbox" class="rounded text-purple-600 focus:ring-purple-500 cursor-pointer" />
                <span class="text-xs font-bold text-slate-550 cursor-pointer">Active</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input v-model="form.is_paid" type="checkbox" class="rounded text-purple-600 focus:ring-purple-500 cursor-pointer" />
                <span class="text-xs font-bold text-slate-550 cursor-pointer">Paid</span>
              </label>
            </div>
          </div>

          <div v-if="form.is_paid">
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Ticket Price (Rs.)</label>
            <input 
              v-model.number="form.price" 
              type="number" 
              step="0.01" 
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Event Image Cover</label>
            <input 
              type="file" 
              @change="handleImageUpload" 
              accept="image/*" 
              class="w-full text-xs text-slate-505 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[11px] file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer" 
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Description</label>
            <textarea 
              v-model="form.description" 
              rows="3" 
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none"
              placeholder="Brief description of the event details..."
            ></textarea>
          </div>

          <!-- Form Actions Footer -->
          <div class="pt-4 flex items-center space-x-3 border-t border-slate-100">
            <button
              type="button"
              @click="closeModal"
              class="flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              <span>{{ loading ? 'Saving...' : (isEditing ? 'Update Event' : 'Create Event') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { Calendar, Clock, Users, X, Building2, Plus } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const selectedLibraryId = ref<number | null>(null);
const events = ref<any[]>([]);
const libraries = ref<any[]>([]);
const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

const selectedLibrary = computed(() => {
  if (!selectedLibraryId.value) return null;
  return libraries.value.find((l: any) => Number(l.id) === Number(selectedLibraryId.value)) || null;
});

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
  loading.value = true;
  try {
    const params: any = {};
    if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
    events.value = await superadminAPI.getEvents(params);
  } catch (error) {
    console.error('Error fetching events:', error);
  } finally {
    loading.value = false;
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
  const initialLibId = selectedLibraryId.value ? Number(selectedLibraryId.value) : (libraries.value.length > 0 ? libraries.value[0].id : null);
  form.value = {
    id: null,
    title: '',
    description: '',
    library_id: initialLibId,
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
    library_id: event.library_id ? Number(event.library_id) : null,
    date: event.date ? event.date.substring(0, 10) : '',
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
  if (!form.value.library_id) {
    showError('Library Required', 'Please select a library venue for this event.');
    return;
  }

  loading.value = true;
  try {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('description', form.value.description || '');
    formData.append('library_id', form.value.library_id.toString());
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
      await superadminAPI.updateEvent(form.value.id.toString(), formData as any);
      showSuccess('Updated!', 'Event updated successfully.');
    } else {
      await superadminAPI.createEvent(formData as any);
      showSuccess('Created!', 'Event created successfully.');
    }
    await fetchEvents();
    closeModal();
  } catch (error: any) {
    console.error('Error saving event:', error);
    const errData = error.response?.data;
    let msg = 'Failed to save event details.';
    if (errData?.errors) {
      msg = Object.values(errData.errors).flat().join(' ');
    } else if (errData?.message) {
      msg = errData.message;
    }
    showError('Save Failed', msg);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (event: any) => {
  if (await showConfirm('Delete Event', `Are you sure you want to delete "${event.title}"?`, 'Yes, Delete')) {
    try {
      await superadminAPI.deleteEvent(event.id.toString());
      showSuccess('Deleted!', 'Event deleted successfully.');
      await fetchEvents();
    } catch (error: any) {
      console.error('Error deleting event:', error);
      showError('Delete Failed', error.response?.data?.message || 'Could not delete event.');
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

<style scoped>
.text-slate-850 {
  color: #1e293b;
}
.text-slate-550 {
  color: #64748b;
}
.text-slate-455 {
  color: #475569;
}
.text-slate-505 {
  color: #334155;
}
.text-slate-655 {
  color: #475569;
}
.text-red-655 {
  color: #ef4444;
}
.text-purple-750 {
  color: #6d28d9;
}
</style>
