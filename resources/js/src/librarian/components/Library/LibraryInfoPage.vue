<template>
  <div class="p-6 space-y-6 font-outfit">

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <RefreshCw class="w-10 h-10 text-emerald-600 animate-spin mb-4" />
      <p class="text-slate-400 font-semibold uppercase tracking-wider text-xs animate-pulse">Loading library info...</p>
    </div>

    <template v-else>

      <!-- Hero Banner Card -->
      <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-8 text-white shadow-lg">
        <!-- Decorative shapes -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-16 w-40 h-40 bg-white/5 rounded-full translate-y-1/2"></div>
        <div class="absolute top-8 right-32 w-20 h-20 bg-white/5 rounded-full"></div>

        <div class="relative z-10 flex items-start justify-between">
          <div class="flex items-start space-x-5">
            <!-- Library Photo -->
            <div class="w-20 h-20 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0 shadow-lg">
              <img
                v-if="photoPreview || libraryData.photo_url"
                :src="photoPreview || libraryData.photo_url"
                class="w-full h-full object-cover"
                alt="Library"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <Building2 class="w-8 h-8 text-white/50" />
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold tracking-tight leading-tight">{{ libraryData.name || 'Your Library' }}</h2>
              <div class="flex items-center space-x-2 text-white/70 mt-1.5 text-xs font-medium">
                <MapPin class="w-3.5 h-3.5" />
                <span>{{ libraryData.address || 'No address set' }}</span>
              </div>
            </div>
          </div>
          <button
            @click="saveChanges"
            :disabled="saving"
            class="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-xl transition-all flex items-center space-x-2 disabled:opacity-50 text-xs font-semibold cursor-pointer backdrop-blur-sm shadow-sm"
          >
            <Save v-if="!saving" class="w-4 h-4" />
            <RefreshCw v-else class="w-4 h-4 animate-spin" />
            <span>{{ saving ? 'Saving...' : 'Save Changes' }}</span>
          </button>
        </div>

        <!-- Stats Row -->
        <div class="relative z-10 grid grid-cols-3 gap-4 mt-7">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Total Capacity</p>
            <p class="text-2xl font-bold mt-1">{{ libraryData.total_seats || 0 }}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Current Occupancy</p>
            <p class="text-2xl font-bold mt-1">{{ libraryData.current_occupancy || 0 }}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Occupancy Rate</p>
            <div class="flex items-end space-x-2 mt-1">
              <p class="text-2xl font-bold">{{ occupancyRate }}%</p>
              <div class="flex-1 h-1.5 bg-white/15 rounded-full mb-2 overflow-hidden">
                <div class="h-full bg-emerald-300 rounded-full transition-all duration-500" :style="{ width: occupancyRate + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pill Tab Navigation -->
      <div class="flex items-center space-x-1.5 bg-slate-50 border border-slate-100 p-1.5 rounded-2xl w-max">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="activeTab = tab.value"
          :class="[
            'px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center space-x-2',
            activeTab === tab.value
              ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <component :is="tab.icon" class="w-3.5 h-3.5" />
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab Content Container -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

        <!-- Basic Information Tab -->
        <div v-if="activeTab === 'basic'" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Library Name -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Name</label>
              <input
                v-model="libraryData.name"
                type="text"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Library Photo -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Photo</label>
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 rounded-xl border border-gray-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    v-if="photoPreview || libraryData.photo_url"
                    :src="photoPreview || libraryData.photo_url"
                    class="w-full h-full object-cover"
                    alt="Library preview"
                  />
                  <Building2 v-else class="w-6 h-6 text-slate-300" />
                </div>
                <input
                  type="file"
                  @change="handlePhotoUpload"
                  accept="image/*"
                  class="flex-1 text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                />
              </div>
            </div>

            <!-- Contact Number -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Contact Number</label>
              <input
                v-model="contactInfo.phone"
                type="text"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                v-model="contactInfo.email"
                type="email"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Address -->
            <div class="md:col-span-2">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Address</label>
              <textarea
                v-model="libraryData.address"
                rows="3"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
              ></textarea>
            </div>

            <!-- Website -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Website</label>
              <input
                v-model="contactInfo.website"
                type="url"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                placeholder="https://"
              />
            </div>

            <!-- Coordinates Group -->
            <div class="flex items-end space-x-3">
              <div class="flex-1">
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Latitude</label>
                <input
                  v-model.number="libraryData.latitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  placeholder="e.g. 31.5204"
                />
              </div>
              <div class="flex-1">
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Longitude</label>
                <input
                  v-model.number="libraryData.longitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  placeholder="e.g. 74.3587"
                />
              </div>
              <button
                type="button"
                @click="getCurrentLocation"
                class="px-3 py-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all border border-emerald-100 cursor-pointer flex-shrink-0"
              >
                <MapPin class="w-3.5 h-3.5" />
                <span>Auto-detect</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Operating Hours Tab -->
        <div v-if="activeTab === 'hours'" class="p-6 space-y-3">
          <div
            v-for="day in operatingDays"
            :key="day.day"
            class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all group"
            :class="day.isOpen ? 'bg-white' : 'bg-slate-50/50'"
          >
            <div class="flex items-center space-x-3.5">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="day.isOpen" class="sr-only peer">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
              <span class="font-semibold text-sm text-slate-700 w-24">{{ day.day }}</span>
            </div>
            <div v-if="day.isOpen" class="flex items-center space-x-3">
              <input
                v-model="day.openTime"
                type="time"
                class="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
              />
              <span class="text-slate-300 font-medium text-xs">→</span>
              <input
                v-model="day.closeTime"
                type="time"
                class="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
              />
            </div>
            <span v-else class="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">Closed</span>
          </div>
        </div>

        <!-- Facilities Tab -->
        <div v-if="activeTab === 'facilities'" class="p-6 space-y-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div
              v-for="facility in facilitiesList"
              :key="facility.id"
              @click="facility.available = !facility.available"
              :class="[
                'flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all group',
                facility.available
                  ? 'bg-emerald-50/50 border-emerald-200 text-emerald-700'
                  : 'bg-slate-50/50 border-gray-100 text-slate-400 hover:border-gray-200'
              ]"
            >
              <component :is="facility.icon" :class="['w-5 h-5 transition-colors', facility.available ? 'text-emerald-600' : 'text-slate-300']" />
              <span class="font-semibold text-sm">{{ facility.name }}</span>
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Additional Features</label>
            <textarea
              v-model="specialFeatures"
              rows="4"
              placeholder="List any additional facilities or amenities..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Rules & Policies Tab -->
        <div v-if="activeTab === 'rules'" class="p-6 space-y-5">
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Rules (One per line)</label>
            <textarea
              v-model="rulesText"
              rows="8"
              placeholder="Enter library rules and regulations..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 font-mono resize-none"
            ></textarea>
          </div>
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Cancellation Policy</label>
            <textarea
              v-model="cancellationPolicy"
              rows="4"
              placeholder="Enter cancellation policy..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Settings Tab -->
        <div v-if="activeTab === 'settings'" class="p-6 space-y-4">
          <!-- Toggle Settings -->
          <div v-for="setting in settingsConfig" :key="setting.key" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all">
            <div>
              <h4 class="font-semibold text-sm text-slate-700">{{ setting.label }}</h4>
              <p class="text-xs text-slate-400 mt-0.5">{{ setting.description }}</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="librarySettings[setting.key]" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <!-- Numeric Settings -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Max Booking Duration (hrs)</label>
              <input
                v-model.number="librarySettings.maxBookingDuration"
                type="number"
                min="1"
                max="12"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
              />
            </div>
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Advance Booking Days</label>
              <input
                v-model.number="librarySettings.advanceBookingDays"
                type="number"
                min="1"
                max="30"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
              />
            </div>
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Min Study Minutes for Streak</label>
              <input
                v-model.number="librarySettings.minStudyMinutesForStreak"
                type="number"
                min="0"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
                placeholder="e.g. 60"
              />
            </div>
          </div>

          <!-- Seat Layout Mode -->
          <div class="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 mt-2">
            <h4 class="font-semibold text-sm text-slate-700 mb-4 flex items-center space-x-2">
              <Layout class="w-4 h-4 text-emerald-600" />
              <span>Seat Layout Display Mode</span>
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                @click="libraryData.seat_layout_mode = 'layout'"
                :class="[
                  'p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-4',
                  libraryData.seat_layout_mode === 'layout'
                    ? 'bg-white border-emerald-500 shadow-sm'
                    : 'bg-white/50 border-transparent hover:border-emerald-200'
                ]"
              >
                <div :class="['p-2.5 rounded-lg', libraryData.seat_layout_mode === 'layout' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400']">
                  <Map class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">Layout Mode</p>
                  <p class="text-[11px] text-slate-400 mt-0.5">Visual map with XY positions</p>
                </div>
              </div>

              <div
                @click="libraryData.seat_layout_mode = 'grid'"
                :class="[
                  'p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-4',
                  libraryData.seat_layout_mode === 'grid'
                    ? 'bg-white border-emerald-500 shadow-sm'
                    : 'bg-white/50 border-transparent hover:border-emerald-200'
                ]"
              >
                <div :class="['p-2.5 rounded-lg', libraryData.seat_layout_mode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400']">
                  <Grid class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">Grid View</p>
                  <p class="text-[11px] text-slate-400 mt-0.5">Organized row-by-row list</p>
                </div>
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
  Camera,
  RefreshCw,
  Layout,
  Grid,
  Map,
  Wind,
  Lock,
  Info,
  Clock,
  CheckSquare,
  FileText,
  Settings
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
  longitude: null as number | null,
  seat_layout_mode: 'layout',
  photo: null as string | null,
  photo_url: null as string | null
});

const selectedPhoto = ref<File | null>(null);
const photoPreview = ref<string | null>(null);

const handlePhotoUpload = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    selectedPhoto.value = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

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
  advanceBookingDays: 7,
  minStudyMinutesForStreak: 0
});

const tabs = [
  { value: 'basic', label: 'Basic Info', icon: Info },
  { value: 'hours', label: 'Hours', icon: Clock },
  { value: 'facilities', label: 'Facilities', icon: CheckSquare },
  { value: 'rules', label: 'Rules', icon: FileText },
  { value: 'settings', label: 'Settings', icon: Settings }
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
        longitude: data.longitude,
        seat_layout_mode: data.seat_layout_mode || 'layout',
        photo: data.photo,
        photo_url: data.photo_url
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

    const formData = new FormData();
    formData.append('name', libraryData.value.name);
    formData.append('address', libraryData.value.address);
    formData.append('capacity', libraryData.value.capacity.toString());
    if (libraryData.value.latitude) formData.append('latitude', libraryData.value.latitude.toString());
    if (libraryData.value.longitude) formData.append('longitude', libraryData.value.longitude.toString());
    formData.append('seat_layout_mode', libraryData.value.seat_layout_mode);
    formData.append('contact_info', JSON.stringify(contactInfo.value));
    formData.append('operating_days', JSON.stringify(operatingDays.value));
    formData.append('facilities', JSON.stringify(facilitiesList.value.filter(f => f.available).map(f => f.name)));
    formData.append('rules', JSON.stringify({
        general: rulesText.value.split('\n').filter(r => r.trim()),
        cancellation: cancellationPolicy.value
    }));
    formData.append('special_features', JSON.stringify({
        additional: specialFeatures.value,
        settings: librarySettings.value
    }));

    if (selectedPhoto.value) {
      formData.append('photo', selectedPhoto.value);
    }

    await librarianAPI.updateLibraryInfo(formData);
    showSuccess('Saved!', 'Library information updated successfully');

    selectedPhoto.value = null;
    photoPreview.value = null;

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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
