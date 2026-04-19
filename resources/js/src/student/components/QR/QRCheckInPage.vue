<template>
  <div class="p-4 max-w-md mx-auto space-y-4">

    <!-- Card -->
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="p-6">

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <QrCode class="w-8 h-8 text-blue-600" />
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Scan to Check In</h1>
          <p class="text-gray-500 mt-1 text-sm">Please scan the QR code on your seat.</p>
        </div>

        <!-- Location Status -->
        <div
          class="mb-5 p-4 rounded-xl flex items-center justify-between cursor-pointer"
          :class="locationStatusClass"
          @click="locationError ? getLocation() : null"
        >
          <div class="flex items-center space-x-2">
            <MapPin class="w-5 h-5 flex-shrink-0" />
            <span class="font-semibold text-sm">{{ locationMessage }}</span>
          </div>
          <button v-if="locationError" class="text-xs underline font-bold">Retry</button>
        </div>

        <!-- Map -->
        <div v-if="locationReady && latitude && longitude" class="mb-5 rounded-xl overflow-hidden border border-gray-200">
          <div id="map" class="w-full h-52"></div>
          <div class="bg-gray-50 px-3 py-2 flex items-center justify-between text-xs text-gray-500">
            <span>📍 {{ latitude?.toFixed(5) }}, {{ longitude?.toFixed(5) }}</span>
            <button @click="centerMap" class="text-blue-600 font-semibold">Re-center</button>
          </div>
        </div>

        <!-- QR Reader -->
        <div class="mb-5">
          <div id="reader" class="rounded-xl overflow-hidden bg-gray-100 min-h-[260px]"></div>
          <p v-if="cameraError" class="text-red-500 text-sm text-center mt-2">{{ cameraError }}</p>
        </div>

        <!-- Actions -->
        <div v-if="!isScanning && !qrCode" class="space-y-3">
          <button
            @click="startScanner"
            class="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow transition-all flex items-center justify-center space-x-2"
          >
            <Camera class="w-5 h-5" />
            <span>Scan QR Code</span>
          </button>

          <div v-if="bookingId" class="relative flex items-center my-1">
            <div class="flex-1 border-t border-gray-200"></div>
            <span class="px-3 text-[10px] uppercase font-bold text-gray-400 tracking-widest">or</span>
            <div class="flex-1 border-t border-gray-200"></div>
          </div>

          <button
            v-if="bookingId"
            @click="performCheckInManual"
            :disabled="isCheckingIn"
            class="w-full py-3.5 px-6 bg-white border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <CheckCircle v-if="!isCheckingIn" class="w-5 h-5" />
            <span v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></span>
            <span>{{ isCheckingIn ? 'Checking In...' : 'Direct Check In' }}</span>
          </button>
        </div>

        <div v-if="qrCode && !isCheckingIn" class="space-y-3 text-center">
          <div class="p-4 bg-green-50 text-green-700 rounded-xl">
            <p class="font-bold text-sm">QR Code Scanned!</p>
            <p class="text-xs break-all mt-1 opacity-70">{{ qrCode }}</p>
          </div>
          <button
            @click="performCheckInWithScanner"
            :disabled="isCheckingIn"
            class="w-full py-3.5 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>Confirm Check-In</span>
          </button>
          <button @click="resetScanner" class="text-sm text-gray-400 underline">Scan Again</button>
        </div>

        <!-- Debug toggle -->
        <div class="mt-4 text-center">
          <button @click="showDebug = !showDebug" class="text-xs text-gray-300 hover:text-gray-500">
            {{ showDebug ? 'Hide Debug' : 'Debug' }}
          </button>
        </div>
        <div v-if="showDebug" class="mt-3 p-4 bg-gray-100 rounded-xl text-xs space-y-2">
          <input v-model="bookingId" placeholder="Booking ID" class="block w-full p-2 rounded border" />
          <input v-model="qrCode" placeholder="QR Code" class="block w-full p-2 rounded border" />
        </div>

      </div>
    </div>

    <!-- ============================================================ -->
    <!--  Nearby Libraries Panel (shown when student is too far away) -->
    <!-- ============================================================ -->
    <transition name="slide-up">
      <div v-if="showNearbyLibraries" class="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div class="px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100 flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <MapPin class="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 class="font-bold text-gray-900 text-sm">You're Not Near Your Library</h3>
            <p class="text-xs text-gray-500 mt-0.5">Here are libraries close to your current location:</p>
          </div>
          <button @click="showNearbyLibraries = false" class="ml-auto p-1 hover:bg-amber-100 rounded-full transition">
            <X class="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <!-- Loading -->
        <div v-if="loadingNearby" class="p-6 flex flex-col items-center space-y-2">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p class="text-sm text-gray-500">Finding nearby libraries...</p>
        </div>

        <!-- Empty -->
        <div v-else-if="nearbyLibraries.length === 0" class="p-6 text-center text-sm text-gray-500">
          <Navigation class="w-10 h-10 text-gray-300 mx-auto mb-2" />
          No libraries found within 50 km of your location.
        </div>

        <!-- Library Cards -->
        <div v-else class="divide-y divide-gray-50">
          <div
            v-for="lib in nearbyLibraries"
            :key="lib.id"
            class="flex items-center space-x-4 px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            <img
              :src="lib.photo_url"
              :alt="lib.name"
              class="w-14 h-14 rounded-xl object-cover flex-shrink-0 shadow-sm"
            />
            <div class="flex-1 min-w-0">
              <p class="font-bold text-gray-900 text-sm truncate">{{ lib.name }}</p>
              <p class="text-xs text-gray-400 truncate mt-0.5">{{ lib.address }}</p>
              <div class="flex items-center space-x-1 mt-1.5">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600">
                  <Navigation class="w-3 h-3 mr-1" />
                  {{ lib.distance_km < 1 ? (lib.distance_km * 1000).toFixed(0) + ' m' : lib.distance_km + ' km' }}
                </span>
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-600">
                  Open
                </span>
              </div>
            </div>
            <a
              :href="`https://www.google.com/maps/dir/?api=1&destination=${lib.latitude},${lib.longitude}`"
              target="_blank"
              class="flex-shrink-0 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              title="Get Directions"
            >
              <Navigation class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <p class="text-xs text-gray-400 text-center">Tap <Navigation class="w-3 h-3 inline text-blue-600" /> to get directions from your current location.</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { QrCode, MapPin, Camera, CheckCircle, Navigation, X } from 'lucide-vue-next';
import { studentAPI } from '@/student/services/studentApi';
import { useRouter, useRoute } from 'vue-router';
import { Html5Qrcode } from 'html5-qrcode';
import { useSwal } from '@/shared/composables/useSwal';
import api from '@/shared/services/api';

const router = useRouter();
const route = useRoute();
const { showSuccess, showError, Swal } = useSwal();

const bookingId = ref('');
const qrCode = ref('');
const isCheckingIn = ref(false);
const isScanning = ref(false);
const latitude = ref<number | null>(null);
const longitude = ref<number | null>(null);
const locationError = ref<string | null>(null);
const locationReady = ref(false);
const showDebug = ref(false);
const cameraError = ref<string | null>(null);

// Nearby libraries state
const showNearbyLibraries = ref(false);
const nearbyLibraries = ref<any[]>([]);
const loadingNearby = ref(false);

let html5QrCode: Html5Qrcode | null = null;
let map: google.maps.Map | null = null;
let marker: google.maps.Marker | null = null;

const locationMessage = computed(() => {
  if (locationError.value) return 'Location Error — tap to retry';
  if (locationReady.value) return 'Location Acquired';
  return 'Getting Location…';
});

const locationStatusClass = computed(() => {
  if (locationError.value) return 'bg-red-100 text-red-700 cursor-pointer';
  if (locationReady.value) return 'bg-green-100 text-green-700';
  return 'bg-yellow-100 text-yellow-700';
});

// ─── Google Maps ────────────────────────────────────────────────────────────
const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof google !== 'undefined' && google.maps) { resolve(); return; }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });
};

const initializeMap = async () => {
  if (!latitude.value || !longitude.value) return;
  try { await loadGoogleMapsScript(); } catch { return; }
  await nextTick();
  const position = { lat: latitude.value, lng: longitude.value };
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: position, zoom: 16,
    mapTypeControl: false, streetViewControl: false, fullscreenControl: true,
  });
  marker = new google.maps.Marker({ position, map, title: 'Your Location', animation: google.maps.Animation.DROP });
};

const centerMap = () => {
  if (map && latitude.value && longitude.value) {
    const position = { lat: latitude.value, lng: longitude.value };
    map.setCenter(position);
    marker?.setPosition(position);
  }
};

// ─── Geolocation ────────────────────────────────────────────────────────────
const getLocation = (): Promise<void> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      locationError.value = 'Geolocation is not supported by your browser';
      resolve(); return;
    }
    locationError.value = null;
    locationReady.value = false;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        latitude.value = pos.coords.latitude;
        longitude.value = pos.coords.longitude;
        locationReady.value = true;
        locationError.value = null;
        nextTick(() => initializeMap());
        resolve();
      },
      (err) => {
        const msgs: Record<number, string> = {
          1: 'Please allow location access in your browser settings.',
          2: 'Location information is unavailable.',
          3: 'Location request timed out.',
        };
        locationError.value = msgs[err.code] ?? 'Unable to get location.';
        locationReady.value = false;
        resolve();
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 60000 }
    );
  });
};

// ─── Nearby Libraries ────────────────────────────────────────────────────────
const fetchNearbyLibraries = async () => {
  if (!latitude.value || !longitude.value) return;
  loadingNearby.value = true;
  showNearbyLibraries.value = true;
  try {
    const response = await api.get('/student/libraries/nearby', {
      params: { lat: latitude.value, lng: longitude.value, radius_km: 50 }
    });
    nearbyLibraries.value = response.data;
  } catch (e) {
    console.error('Failed to fetch nearby libraries:', e);
    nearbyLibraries.value = [];
  } finally {
    loadingNearby.value = false;
  }
};

// ─── QR Scanner ─────────────────────────────────────────────────────────────
const startScanner = async () => {
  cameraError.value = null;
  if (!locationReady.value) await getLocation();
  isScanning.value = true;
  qrCode.value = '';
  await nextTick();
  try {
    if (html5QrCode) {
      try { await html5QrCode.stop(); html5QrCode.clear(); } catch {}
    }
    html5QrCode = new Html5Qrcode('reader');
    await html5QrCode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => { qrCode.value = decodedText; stopScanner(); },
      () => {}
    );
  } catch (err: any) {
    cameraError.value = `Camera Error: ${err?.message || 'Unknown'}. Ensure permissions are granted (HTTPS required).`;
    isScanning.value = false;
  }
};

const stopScanner = async () => {
  if (html5QrCode && isScanning.value) {
    try { await html5QrCode.stop(); html5QrCode.clear(); isScanning.value = false; } catch {}
  }
};

const resetScanner = () => { qrCode.value = ''; startScanner(); };

// ─── Check-In ────────────────────────────────────────────────────────────────
const performCheckIn = async (code: string = '') => {
  const idToSend = bookingId.value || 'auto';

  if (!latitude.value || !longitude.value) {
    showError('Location Missing', 'Location data is missing. Retrying…');
    await getLocation();
    if (!latitude.value || !longitude.value) {
      showError('Location Error', 'Unable to get location. Please enable location services and try again.');
      return;
    }
  }

  isCheckingIn.value = true;
  try {
    await studentAPI.checkIn(idToSend, code || qrCode.value, latitude.value, longitude.value);
    showSuccess('Checked In!', 'Welcome to the library. Enjoy your session!');
    router.push('/student/dashboard');
  } catch (error: any) {
    console.error('Check-in failed:', error);
    const msg: string = error.message || error.response?.data?.message || 'Check-in failed';

    // Detect distance-related errors and show nearby libraries
    const isTooFar = /too far|distance|location|proximity|range|meters/i.test(msg);
    if (isTooFar) {
      const result = await Swal.fire({
        icon: 'error',
        title: 'Check-in Failed',
        text: msg,
        showCancelButton: true,
        confirmButtonText: 'Show Nearby Library',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#9ca3af'
      });
      
      if (result.isConfirmed) {
        await fetchNearbyLibraries();
      }
    } else {
      showError('Check-in Failed', msg);
    }
  } finally {
    isCheckingIn.value = false;
  }
};

const performCheckInManual = async () => await performCheckIn('DIRECT_CHECKIN');
const performCheckInWithScanner = async () => await performCheckIn(qrCode.value);

// ─── Lifecycle ───────────────────────────────────────────────────────────────
onMounted(() => {
  getLocation();
  if (route.query.booking_id) bookingId.value = route.query.booking_id as string;
});

onUnmounted(() => stopScanner());
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.35s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
