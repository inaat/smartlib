<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Location Status Banner for Nearby Mode -->
    <div v-if="libraryFilterMode === 'nearby' && locationLoading" class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 flex items-center space-x-4 animate-fade-in text-left">
      <div class="w-10 h-10 bg-blue-100/80 rounded-xl flex items-center justify-center flex-shrink-0">
        <div class="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
      </div>
      <div class="text-left">
        <p class="text-sm font-bold text-blue-900">Detecting your location...</p>
        <p class="text-xs text-blue-600/80 mt-0.5">Please allow browser location access to find nearby libraries</p>
      </div>
    </div>

    <!-- Alert Banner asking for location permission -->
    <div v-else-if="libraryFilterMode === 'nearby' && !locationGranted && !locationLoading" class="bg-gradient-to-r from-amber-50 to-orange-50/80 border border-amber-200/80 rounded-2xl p-5 flex items-center justify-between gap-4 text-left shadow-sm animate-fade-in">
      <div class="flex items-center space-x-3.5 min-w-0">
        <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0">
          <MapPinOff class="w-5 h-5" />
        </div>
        <div class="min-w-0">
          <p class="text-xs font-bold text-amber-900 leading-snug">Location Access Required</p>
          <p class="text-[11px] text-amber-800/90 mt-0.5 leading-normal max-w-2xl">
            Device location access is off or denied. Turn on your location and allow browser access to view libraries near you.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <button
          @click="handleRequestLocation"
          class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center space-x-1.5"
        >
          <Navigation class="w-3.5 h-3.5" />
          <span>Access My Location</span>
        </button>
        <button
          @click="libraryFilterMode = 'all'"
          class="px-4 py-2 bg-white border border-amber-200 text-amber-800 hover:bg-amber-50 rounded-xl text-xs font-semibold transition-all active:scale-98 cursor-pointer"
        >
          Browse All
        </button>
      </div>
    </div>

    <!-- Libraries Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center space-x-3">
        <div class="w-9 h-9 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
          <Navigation class="w-4.5 h-4.5 text-emerald-600" v-if="libraryFilterMode === 'nearby'" />
          <Building2 class="w-4.5 h-4.5 text-emerald-600" v-else />
        </div>
        <div class="text-left">
          <h2 class="text-sm font-bold text-slate-800 leading-none">
            {{ libraryFilterMode === 'nearby' ? 'Nearby Libraries' : 'All Libraries' }}
          </h2>
          <p class="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">
            <template v-if="libraryFilterMode === 'nearby'">
              <template v-if="locationGranted">
                {{ filteredLibraries.length }} {{ filteredLibraries.length === 1 ? 'library' : 'libraries' }} within {{ maxDistance }} km
              </template>
              <template v-else>
                Location required to view nearby libraries
              </template>
            </template>
            <template v-else>
              {{ filteredLibraries.length }} {{ filteredLibraries.length === 1 ? 'library' : 'libraries' }} available
            </template>
          </p>
        </div>
      </div>

      <!-- Toggles (Filter & View) -->
      <div class="flex flex-wrap items-center gap-3">
        <!-- Nearby / All Toggle -->
        <div class="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
          <button
            @click="handleSelectNearbyMode"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
              libraryFilterMode === 'nearby' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            <Navigation class="w-3.5 h-3.5" />
            <span>Nearby</span>
          </button>
          <button
            @click="handleSelectAllMode"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
              libraryFilterMode === 'all' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            <Building2 class="w-3.5 h-3.5" />
            <span>All Libraries</span>
          </button>
        </div>

        <!-- View Toggle (List/Map) -->
        <div class="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
          <button
            @click="viewMode = 'list'"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
              viewMode === 'list' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            <List class="w-3.5 h-3.5" />
            <span>List View</span>
          </button>
          <button
            @click="viewMode = 'map'"
            :class="[
              'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
              viewMode === 'map' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            <MapPin class="w-3.5 h-3.5" />
            <span>Map View</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1 relative group">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="Search libraries by name or location..."
            v-model="searchQuery"
            class="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
          />
        </div>
        
        <div class="relative w-full sm:w-52 group">
          <Filter class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <select
            v-model="filterFacility"
            class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
          >
            <option value="">All Facilities</option>
            <option v-for="facility in allFacilities" :key="facility" :value="facility">{{ facility }}</option>
          </select>
          <ChevronDown class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>

        <!-- Distance Slider (Only in Nearby Mode when Location is Granted) -->
        <div v-if="libraryFilterMode === 'nearby' && locationGranted" class="w-full sm:w-64 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-center">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Distance:</span>
            <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">{{ maxDistance }} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            v-model.number="maxDistance"
            class="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <!-- Main Content State -->
    <div v-if="loadingLibraries || (libraryFilterMode === 'nearby' && locationLoading)" class="flex flex-col items-center justify-center py-20 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">
        {{ locationLoading ? 'Requesting location access...' : 'Loading libraries...' }}
      </p>
    </div>

    <!-- Explicit Empty State for Nearby (When Location is NOT Granted) -->
    <div v-else-if="libraryFilterMode === 'nearby' && !locationGranted" class="bg-white rounded-3xl border border-slate-200/60 p-10 sm:p-14 text-center shadow-sm max-w-xl mx-auto my-6 animate-fade-in">
      <div class="w-20 h-20 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-amber-100 shadow-inner">
        <MapPinOff class="w-9 h-9" />
      </div>
      <h3 class="text-lg font-bold text-slate-800 mb-2">Location Access Required</h3>
      <p class="text-xs text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
        Device location access is currently turned off or denied. To view nearby libraries around your current location, please enable location services and allow browser access.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          @click="handleRequestLocation"
          class="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Navigation class="w-4 h-4" />
          <span>Access My Location</span>
        </button>
        <button
          @click="handleSelectAllMode"
          class="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold active:scale-98 transition-all flex items-center justify-center space-x-2"
        >
          <Building2 class="w-4 h-4" />
          <span>View All Libraries</span>
        </button>
      </div>
    </div>

    <!-- Library List / Map View when Location is Granted or in All mode -->
    <template v-else>
      <div v-if="viewMode === 'list'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LibraryCard v-for="library in filteredLibraries" :key="library.id" :library="library" />
      </div>
      <LibraryMap v-else :libraries="filteredLibraries" />

      <!-- Empty State when 0 libraries match -->
      <div v-if="filteredLibraries.length === 0" class="text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8 animate-fade-in">
        <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
          <MapPin class="w-7 h-7" />
        </div>
        <h3 class="text-base font-semibold text-slate-800 mb-1">No Libraries Found</h3>
        <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed" v-if="libraryFilterMode === 'nearby' && closestLibrary">
          No libraries found within {{ maxDistance }} km. The closest active library is <span class="font-bold text-slate-700">{{ closestLibrary.name }}</span> ({{ closestLibrary.distance_km }} km away).
          Switch to <span class="font-bold text-blue-600 cursor-pointer hover:underline" @click="handleSelectAllMode">"All Libraries"</span> to view it.
        </p>
        <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed" v-else>
          No libraries matched your search criteria.
        </p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useGeolocation } from '@/shared/composables/useGeolocation';
import { studentAPI } from '@/shared/services/api';
import LibraryCard from './LibraryCard.vue';
import LibraryMap from './LibraryMap.vue';
import { Search, Filter, MapPin, List, ChevronDown, Navigation, MapPinOff, Building2 } from 'lucide-vue-next';

const { latitude, longitude, locationGranted, locationLoading, requestLocation } = useGeolocation();

const viewMode = ref<'list' | 'map'>('list');
const libraryFilterMode = ref<'nearby' | 'all'>('nearby');
const filterFacility = ref('');
const searchQuery = ref('');
const loadingLibraries = ref(false);
const libraries = ref<any[]>([]);
const maxDistance = ref(50); // Default search radius in km

const handleRequestLocation = async () => {
  await requestLocation();
  await fetchLibraries();
};

const handleSelectNearbyMode = async () => {
  libraryFilterMode.value = 'nearby';
  if (!locationGranted.value) {
    await requestLocation();
  }
  await fetchLibraries();
};

const handleSelectAllMode = () => {
  libraryFilterMode.value = 'all';
  fetchLibraries();
};

const fetchLibraries = async () => {
  loadingLibraries.value = true;
  try {
    let data;
    if (locationGranted.value && latitude.value && longitude.value) {
      data = await studentAPI.getNearbyLibraries(latitude.value, longitude.value);
    } else {
      data = await studentAPI.getLibraries();
    }
    libraries.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to load libraries:', error);
    libraries.value = [];
  } finally {
    loadingLibraries.value = false;
  }
};

// Watch for location status or filter mode changes to reload libraries
watch([() => locationGranted.value, () => libraryFilterMode.value], () => {
  fetchLibraries();
});

onMounted(async () => {
  // If starting in nearby mode and location is not granted yet, automatically request location access
  if (libraryFilterMode.value === 'nearby' && !locationGranted.value) {
    await requestLocation();
  }
  await fetchLibraries();
});

// Client-side distance calculation using spherical law of cosines (matches SQL Haversine)
const deg2rad = (deg: number) => deg * (Math.PI / 180);
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const phi1 = deg2rad(lat1);
  const phi2 = deg2rad(lat2);
  const deltaLambda = deg2rad(lon2 - lon1);
  const val = Math.cos(phi1) * Math.cos(phi2) * Math.cos(deltaLambda) + Math.sin(phi1) * Math.sin(phi2);
  const clamped = Math.max(-1, Math.min(1, val));
  return R * Math.acos(clamped);
};

const filteredLibraries = computed(() => {
  // CRITICAL: Without location ON/granted in Nearby mode, return zero libraries!
  if (libraryFilterMode.value === 'nearby' && !locationGranted.value) {
    return [];
  }

  // 1. Map libraries to compute distance_km reactively on the client side using live coordinates
  let list = libraries.value.map(library => {
    if (locationGranted.value && latitude.value && longitude.value && library.latitude && library.longitude) {
      const dist = calculateDistance(latitude.value, longitude.value, Number(library.latitude), Number(library.longitude));
      return {
        ...library,
        distance_km: Number(dist.toFixed(2))
      };
    }
    return library;
  });

  // 2. Sort by distance if in nearby mode and location is granted
  if (libraryFilterMode.value === 'nearby' && locationGranted.value) {
    list.sort((a, b) => {
      const distA = a.distance_km ?? Infinity;
      const distB = b.distance_km ?? Infinity;
      return distA - distB;
    });
  }

  // 3. Filter by distance, search, and facility
  return list.filter(library => {
    if (libraryFilterMode.value === 'nearby' && locationGranted.value) {
      if (library.distance_km === undefined || library.distance_km === null || library.distance_km > maxDistance.value) {
        return false;
      }
    }
    const search = searchQuery.value?.toLowerCase() || '';
    const name = library.name?.toLowerCase() || '';
    const address = library.address?.toLowerCase() || '';
    const matchesSearch = name.includes(search) || address.includes(search);
    const facilities = library.facilities || [];
    const matchesFacility = !filterFacility.value || facilities.includes(filterFacility.value);
    return matchesSearch && matchesFacility;
  });
});

const closestLibrary = computed(() => {
  const sortedActive = libraries.value
    .map(library => {
      if (locationGranted.value && latitude.value && longitude.value && library.latitude && library.longitude) {
        const dist = calculateDistance(latitude.value, longitude.value, Number(library.latitude), Number(library.longitude));
        return { ...library, distance_km: Number(dist.toFixed(2)) };
      }
      return library;
    })
    .filter(lib => lib.distance_km !== undefined && lib.distance_km !== null)
    .sort((a, b) => (a.distance_km ?? Infinity) - (b.distance_km ?? Infinity));

  return sortedActive.length > 0 ? sortedActive[0] : null;
});

const allFacilities = computed(() => {
  return Array.from(
    new Set(libraries.value.flatMap((lib: any) => lib.facilities || []))
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.active\:scale-98:active {
  transform: scale(0.98);
}
</style>
