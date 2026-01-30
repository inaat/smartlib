<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Library Information</h1>
        <p class="text-gray-600 mt-1">Manage library details and settings</p>
      </div>
      <button 
        @click="saveChanges"
        :disabled="saving"
        class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2 disabled:opacity-50"
      >
        <Save v-if="!saving" class="w-4 h-4" />
        <RefreshCw v-else class="w-4 h-4 animate-spin" />
        <span class="text-sm font-medium">{{ saving ? 'Saving...' : 'Save Changes' }}</span>
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>

    <template v-else>
        <!-- Library Overview Card -->
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-2">{{ libraryData.name }}</h2>
              <div class="flex items-center space-x-2 text-purple-100 mb-4">
                <MapPin class="w-4 h-4" />
                <span>{{ libraryData.address }}</span>
              </div>
              <div class="grid grid-cols-3 gap-6 mt-6">
                <div>
                  <p class="text-purple-200 text-sm">Total Capacity</p>
                  <p class="text-3xl font-bold mt-1">{{ libraryData.total_seats || 0 }}</p>
                </div>
                <div>
                  <p class="text-purple-200 text-sm">Current Occupancy</p>
                  <p class="text-3xl font-bold mt-1">{{ libraryData.current_occupancy || 0 }}</p>
                </div>
                <div>
                  <p class="text-purple-200 text-sm">Occupancy Rate</p>
                  <p class="text-3xl font-bold mt-1">{{ occupancyRate }}%</p>
                </div>
              </div>
            </div>
            <div class="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
              <Building2 class="w-12 h-12" />
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="border-b border-gray-200 bg-gray-50/50">
            <div class="flex space-x-8 px-6">
              <button
                v-for="tab in tabs"
                :key="tab.value"
                @click="activeTab = tab.value"
                :class="[
                  'py-4 px-2 border-b-2 font-medium text-sm transition-all relative',
                  activeTab === tab.value
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
              >
                {{ tab.label }}
                <div v-if="activeTab === tab.value" class="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
              </button>
            </div>
          </div>

          <!-- Basic Information Tab -->
          <div v-if="activeTab === 'basic'" class="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Library Name</label>
                <input
                  v-model="libraryData.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input
                  v-model="contactInfo.phone"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  v-model="libraryData.address"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  v-model="contactInfo.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  v-model="contactInfo.website"
                  type="url"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                <input
                  v-model.number="libraryData.latitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="e.g. 31.5204"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                <input
                  v-model.number="libraryData.longitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="e.g. 74.3587"
                />
              </div>
              <div class="md:col-span-2 flex justify-end">
                <button 
                  type="button"
                  @click="getCurrentLocation"
                  class="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
                >
                  <MapPin class="w-4 h-4" />
                  <span>Use Current Location</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Operating Hours Tab -->
          <div v-if="activeTab === 'hours'" class="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div class="space-y-4">
              <div
                v-for="day in operatingDays"
                :key="day.day"
                class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-all"
              >
                <div class="flex items-center space-x-3 flex-1">
                  <input
                    type="checkbox"
                    v-model="day.isOpen"
                    class="w-5 h-5 text-purple-600 rounded-lg focus:ring-purple-500 border-gray-300"
                  />
                  <span class="font-semibold text-gray-900 w-24">{{ day.day }}</span>
                </div>
                <div v-if="day.isOpen" class="flex items-center space-x-3">
                  <input
                    v-model="day.openTime"
                    type="time"
                    class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                  <span class="text-gray-400 font-medium">to</span>
                  <input
                    v-model="day.closeTime"
                    type="time"
                    class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                </div>
                <span v-else class="text-gray-400 font-medium italic">Closed</span>
              </div>
            </div>
          </div>

          <!-- Facilities Tab -->
          <div v-if="activeTab === 'facilities'" class="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                v-for="facility in facilitiesList"
                :key="facility.id"
                class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-white transition-all group"
              >
                <input
                  type="checkbox"
                  v-model="facility.available"
                  class="w-5 h-5 text-purple-600 rounded-lg focus:ring-purple-500 border-gray-300"
                />
                <component :is="facility.icon" class="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                <span class="font-medium text-gray-700">{{ facility.name }}</span>
              </div>
            </div>

            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Additional Features</label>
              <textarea
                v-model="specialFeatures"
                rows="4"
                placeholder="List any additional facilities or amenities..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
            </div>
          </div>

          <!-- Rules & Policies Tab -->
          <div v-if="activeTab === 'rules'" class="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Library Rules (One per line)</label>
              <textarea
                v-model="rulesText"
                rows="8"
                placeholder="Enter library rules and regulations..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-mono text-sm"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Cancellation Policy</label>
              <textarea
                v-model="cancellationPolicy"
                rows="4"
                placeholder="Enter cancellation policy..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
            </div>
          </div>

          <!-- Settings Tab -->
          <div v-if="activeTab === 'settings'" class="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div class="space-y-4">
              <div v-for="setting in settingsConfig" :key="setting.key" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <h4 class="font-semibold text-gray-900">{{ setting.label }}</h4>
                  <p class="text-sm text-gray-500">{{ setting.description }}</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="librarySettings[setting.key]" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Maximum Booking Duration (hours)</label>
                    <input
                      v-model.number="librarySettings.maxBookingDuration"
                      type="number"
                      min="1"
                      max="12"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                  </div>

                  <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Advance Booking Days</label>
                    <input
                      v-model.number="librarySettings.advanceBookingDays"
                      type="number"
                      min="1"
                      max="30"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { useRouter } from 'vue-router';
import {
  Building2,
  MapPin,
  Save,
  Wifi,
  Coffee,
  Printer,
  BookOpen,
  Zap,
  Wind,
  Lock,
  Camera,
  RefreshCw
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError, showWarning } = useSwal();

const { user } = useAuth();
const router = useRouter();

const loading = ref(true);
const saving = ref(false);
const activeTab = ref('basic');

const libraryData = ref({
  name: '',
  address: '',
  capacity: 0,
  total_seats: 0,
  current_occupancy: 0,
  latitude: null as number | null,
  longitude: null as number | null
});

const contactInfo = ref({
  phone: '',
  email: '',
  website: ''
});

const operatingDays = ref([
  { day: 'Monday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Tuesday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Wednesday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Thursday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Friday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Saturday', isOpen: true, openTime: '09:00', closeTime: '20:00' },
  { day: 'Sunday', isOpen: false, openTime: '', closeTime: '' }
]);

const facilitiesList = ref([
  { id: 1, name: 'WiFi', icon: Wifi, available: true },
  { id: 2, name: 'Cafeteria', icon: Coffee, available: false },
  { id: 3, name: 'Printer', icon: Printer, available: true },
  { id: 4, name: 'Reading Room', icon: BookOpen, available: true },
  { id: 5, name: 'Power Outlets', icon: Zap, available: true },
  { id: 6, name: 'Air Conditioning', icon: Wind, available: true },
  { id: 7, name: 'Lockers', icon: Lock, available: false },
  { id: 8, name: 'CCTV', icon: Camera, available: true }
]);

const specialFeatures = ref('');
const rulesText = ref('');
const cancellationPolicy = ref('');

const librarySettings = ref({
  allowBookings: true,
  requireApproval: false,
  allowExtensions: true,
  sendReminders: true,
  maxBookingDuration: 4,
  advanceBookingDays: 7
});

const tabs = [
  { value: 'basic', label: 'Basic Information' },
  { value: 'hours', label: 'Operating Hours' },
  { value: 'facilities', label: 'Facilities' },
  { value: 'rules', label: 'Rules & Policies' },
  { value: 'settings', label: 'Settings' }
];

const settingsConfig = [
  { key: 'allowBookings', label: 'Allow Bookings', description: 'Enable students to book seats' },
  { key: 'requireApproval', label: 'Require Approval', description: 'Bookings need librarian approval' },
  { key: 'allowExtensions', label: 'Allow Extensions', description: 'Students can extend their bookings' },
  { key: 'sendReminders', label: 'Send Reminders', description: 'Send booking reminder notifications' }
];

const occupancyRate = computed(() => {
  if (!libraryData.value.total_seats) return 0;
  return Math.round((libraryData.value.current_occupancy / libraryData.value.total_seats) * 100);
});

// ... (rest of the code remains the same until getCurrentLocation)

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    showWarning('Not Supported', 'Geolocation is not supported by your browser');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      libraryData.value.latitude = position.coords.latitude;
      libraryData.value.longitude = position.coords.longitude;
    },
    (error) => {
      console.error('Error getting location:', error);
      showError('Location Error', 'Unable to retrieve your location. Please enter manually.');
    }
  );
};

const fetchLibraryInfo = async () => {
  try {
    loading.value = true;
    const data = await librarianAPI.getLibraryInfo();
    
    libraryData.value = {
        name: data.name,
        address: data.address,
        capacity: data.capacity,
        total_seats: data.total_seats,
        current_occupancy: data.current_occupancy,
        latitude: data.latitude,
        longitude: data.longitude
    };

    // Auto-fill location if missing
    if (!data.latitude || !data.longitude) {
        getCurrentLocation();
    }

    if (data.contact_info) {
        contactInfo.value = { ...contactInfo.value, ...data.contact_info };
    }

    if (data.operating_days && Array.isArray(data.operating_days)) {
        operatingDays.value = data.operating_days;
    }

    if (data.facilities && Array.isArray(data.facilities)) {
        facilitiesList.value.forEach(f => {
            f.available = data.facilities.includes(f.name);
        });
    }

    specialFeatures.value = data.special_features?.additional || '';
    
    if (data.rules) {
        rulesText.value = Array.isArray(data.rules.general) ? data.rules.general.join('\n') : '';
        cancellationPolicy.value = data.rules.cancellation || '';
    }

    if (data.special_features?.settings) {
        librarySettings.value = { ...librarySettings.value, ...data.special_features.settings };
    }

  } catch (error) {
    console.error('Error fetching library info:', error);
    showError('Load Failed', 'Failed to load library information');
  } finally {
    loading.value = false;
  }
};

const saveChanges = async () => {
  try {
    saving.value = true;
    
    const payload = {
        name: libraryData.value.name,
        address: libraryData.value.address,
        capacity: libraryData.value.capacity,
        latitude: libraryData.value.latitude,
        longitude: libraryData.value.longitude,
        contact_info: contactInfo.value,
        operating_days: operatingDays.value,
        facilities: facilitiesList.value.filter(f => f.available).map(f => f.name),
        rules: {
            general: rulesText.value.split('\n').filter(r => r.trim()),
            cancellation: cancellationPolicy.value
        },
        special_features: {
            additional: specialFeatures.value,
            settings: librarySettings.value
        }
    };

    await librarianAPI.updateLibraryInfo(payload);
    showSuccess('Saved!', 'Library information updated successfully');
    fetchLibraryInfo();
  } catch (error) {
    console.error('Error updating library info:', error);
    showError('Save Failed', 'Failed to update library information');
  } finally {
    saving.value = false;
  }
};

onMounted(fetchLibraryInfo);
</script>
