<template>
  <div class="p-6 space-y-6">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>

    <!-- Library Details -->
    <div v-else-if="library">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-4">
          <router-link
            to="/superadmin/libraries"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft class="w-5 h-5 text-gray-600" />
          </router-link>
          <div>
            <h1 class="text-3xl font-bold text-gray-900">{{ library.name }}</h1>
            <p class="text-gray-600 mt-1">Library Details & Statistics</p>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <span
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              library.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            ]"
          >
            {{ library.is_active ? 'Active' : 'Inactive' }}
          </span>
        </div>
      </div>

      <!-- Library Info Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-purple-50 to-fuchsia-50 relative">
          <img
            v-if="library.photo"
            :src="library.photo_url"
            class="w-full h-full object-cover"
            alt="Library cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center">
            <Building2 class="w-16 h-16 text-purple-300" />
          </div>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-sm font-medium text-gray-500 mb-1">Address</h3>
              <p class="text-gray-900 flex items-start">
                <MapPin class="w-4 h-4 mr-2 mt-1 text-gray-400" />
                {{ library.address }}
              </p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500 mb-1">Opening Hours</h3>
              <p class="text-gray-900 flex items-center">
                <Clock class="w-4 h-4 mr-2 text-gray-400" />
                {{ library.opening_hours }}
              </p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500 mb-1">Total Capacity</h3>
              <p class="text-gray-900 flex items-center">
                <Users class="w-4 h-4 mr-2 text-gray-400" />
                {{ library.capacity }} seats
              </p>
            </div>
            <div v-if="library.wifi_password">
              <h3 class="text-sm font-medium text-gray-500 mb-1">WiFi Password</h3>
              <p class="text-gray-900 flex items-center">
                <Wifi class="w-4 h-4 mr-2 text-gray-400" />
                {{ library.wifi_password }}
              </p>
            </div>
            <div v-if="library.description" class="md:col-span-2">
              <h3 class="text-sm font-medium text-gray-500 mb-1">Description</h3>
              <p class="text-gray-900">{{ library.description }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200">
            <div v-if="library.parking_available" class="flex items-center text-sm text-gray-600">
              <Car class="w-4 h-4 mr-2 text-green-600" />
              Parking Available
            </div>
            <div v-if="library.latitude && library.longitude" class="flex items-center text-sm text-gray-600">
              <MapPin class="w-4 h-4 mr-2 text-purple-600" />
              {{ library.latitude }}, {{ library.longitude }}
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-600">Total Seats</h3>
            <div class="p-2 bg-blue-100 rounded-lg">
              <Users class="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">{{ library.totalSeats || library.capacity }}</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-600">Available</h3>
            <div class="p-2 bg-green-100 rounded-lg">
              <CheckCircle class="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p class="text-3xl font-bold text-green-600">{{ library.availableSeats || 0 }}</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-600">Occupied</h3>
            <div class="p-2 bg-orange-100 rounded-lg">
              <UserCheck class="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p class="text-3xl font-bold text-orange-600">{{ (library.totalSeats || library.capacity) - (library.availableSeats || 0) }}</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-600">Occupancy Rate</h3>
            <div class="p-2 bg-purple-100 rounded-lg">
              <TrendingUp class="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <p class="text-3xl font-bold text-purple-600">
            {{ library.totalSeats ? Math.round(((library.totalSeats - (library.availableSeats || 0)) / library.totalSeats) * 100) : 0 }}%
          </p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center">
      <AlertCircle class="w-12 h-12 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900">Library not found</h3>
      <p class="text-gray-500 mt-2">The library you're looking for doesn't exist.</p>
      <router-link
        to="/superadmin/libraries"
        class="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Libraries
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  Building2,
  MapPin,
  Clock,
  Users,
  Wifi,
  Car,
  ArrowLeft,
  CheckCircle,
  UserCheck,
  TrendingUp,
  AlertCircle
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

const route = useRoute();
const library = ref<any>(null);
const loading = ref(true);

const fetchLibrary = async () => {
  loading.value = true;
  try {
    const libraries = await adminAPI.getLibraries();
    library.value = libraries.find((lib: any) => lib.id === parseInt(route.params.id as string));
  } catch (error) {
    console.error('Error fetching library:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchLibrary();
});
</script>
