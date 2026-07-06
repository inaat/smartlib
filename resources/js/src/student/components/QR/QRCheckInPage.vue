<template>
  <div class="max-w-md mx-auto space-y-6 font-outfit p-4">

    <!-- Card -->
    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden text-left">
      <div class="p-6 md:p-8">

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-4">
            <QrCode class="w-8 h-8" />
          </div>
          <h1 class="text-xl font-semibold text-slate-800 tracking-tight leading-none mb-1.5">Scan to Check In</h1>
          <p class="text-xs text-slate-400 font-semibold leading-normal">Please scan the QR code on your seat label.</p>
        </div>

        <!-- Location Status -->
        <div
          class="mb-5 p-4 rounded-2xl flex items-center justify-between cursor-pointer border transition-all"
          :class="locationStatusClass"
          @click="locationError ? getLocation() : null"
        >
          <div class="flex items-center space-x-2.5">
            <MapPin class="w-4 h-4 flex-shrink-0" />
            <span class="font-semibold text-xs uppercase tracking-wider">{{ locationMessage }}</span>
          </div>
          <button v-if="locationError" class="text-[10px] font-semibold uppercase tracking-wider underline">Retry</button>
        </div>

        <!-- Map -->
        <div v-if="locationReady && latitude && longitude" class="mb-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div id="map" class="w-full h-52 bg-slate-50"></div>
          <div class="bg-slate-50/50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between text-[10px] font-medium text-slate-400 uppercase tracking-wider">
            <span>📍 {{ latitude?.toFixed(5) }}, {{ longitude?.toFixed(5) }}</span>
            <button @click="centerMap" class="text-blue-600 hover:text-blue-700 font-semibold">Re-center</button>
          </div>
        </div>

        <!-- QR Reader -->
        <div class="mb-5">
          <div id="reader" class="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[260px]"></div>
          <p v-if="cameraError" class="text-rose-600 text-xs font-semibold text-center mt-2.5 bg-rose-50 border border-rose-100 p-3 rounded-xl">{{ cameraError }}</p>
        </div>

        <!-- Actions -->
        <div v-if="!isScanning && !qrCode" class="space-y-3">
          <button
            @click="startScanner"
            class="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 border border-blue-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-sm hover:shadow hover-lift transition-all duration-200 flex items-center justify-center space-x-2 active:scale-98"
          >
            <Camera class="w-4 h-4" />
            <span>Scan QR Code</span>
          </button>

          <div v-if="bookingId || route.query.auto_checkin" class="relative flex items-center my-2">
            <div class="flex-1 border-t border-slate-100"></div>
            <span class="px-3 text-[9px] uppercase font-medium text-slate-400 tracking-widest leading-none">or</span>
            <div class="flex-1 border-t border-slate-100"></div>
          </div>

          <button
            v-if="bookingId || route.query.auto_checkin"
            @click="performCheckInManual"
            :disabled="isCheckingIn"
            class="w-full py-3.5 px-6 bg-white border border-emerald-300 text-emerald-700 text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-emerald-50/50 hover-lift transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 active:scale-98 shadow-sm"
          >
            <CheckCircle v-if="!isCheckingIn" class="w-4 h-4" />
            <span v-else class="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-605"></span>
            <span>{{ isCheckingIn ? 'Checking In...' : 'Direct Check In' }}</span>
          </button>
        </div>

        <div v-if="qrCode && !isCheckingIn" class="space-y-3 text-center">
          <div class="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-left">
            <p class="font-semibold text-xs uppercase tracking-wider">QR Code Scanned!</p>
            <p class="text-xs font-medium break-all mt-1 text-emerald-700/90 leading-relaxed">{{ qrCode }}</p>
          </div>
          <button
            @click="performCheckInWithScanner"
            :disabled="isCheckingIn"
            class="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-755 text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-sm hover-lift transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 active:scale-98"
          >
            <span>Confirm Check-In</span>
          </button>
          <button @click="resetScanner" class="text-xs font-semibold text-slate-400 uppercase tracking-widest hover:text-slate-500 transition-colors">Scan Again</button>
        </div>

        <!-- Debug toggle -->
        <div class="mt-4 text-center">
          <button @click="showDebug = !showDebug" class="text-[10px] font-medium text-slate-300 hover:text-slate-400 uppercase tracking-widest transition-colors">
            {{ showDebug ? 'Hide Debug' : 'Debug Options' }}
          </button>
        </div>
        <div v-if="showDebug" class="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-3">
          <div>
            <label class="block text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Booking ID</label>
            <input v-model="bookingId" placeholder="Booking ID" class="block w-full p-2 bg-white rounded-xl border border-slate-200 text-xs outline-none" />
          </div>
          <div>
            <label class="block text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Mock QR Value</label>
            <input v-model="qrCode" placeholder="QR Code" class="block w-full p-2 bg-white rounded-xl border border-slate-200 text-xs outline-none" />
          </div>
        </div>

      </div>
    </div>

    <!-- ============================================================ -->
    <!--  Nearby Libraries Panel (shown when student is too far away) -->
    <!-- ============================================================ -->
    <transition name="slide-up">
      <div v-if="showNearbyLibraries" class="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden text-left">

        <div class="px-6 py-5 bg-amber-50/40 border-b border-amber-100/50 flex items-center space-x-3.5">
          <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0">
            <MapPin class="w-5 h-5" />
          </div>
          <div>
            <h3 class="font-semibold text-slate-800 text-sm tracking-tight leading-none mb-1">Not Near Your Library</h3>
            <p class="text-[10px] text-slate-400 font-semibold leading-none">Libraries close to your location:</p>
          </div>
          <button @click="showNearbyLibraries = false" class="ml-auto p-1.5 hover:bg-amber-100/50 border border-transparent hover:border-amber-200 rounded-xl transition-all">
            <X class="w-4 h-4 text-slate-500" />
          </button>
        </div>

        <!-- Loading -->
        <div v-if="loadingNearby" class="p-8 flex flex-col items-center space-y-2">
          <div class="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
          <p class="text-xs font-semibold text-slate-405 uppercase tracking-wider animate-pulse">Finding nearby libraries...</p>
        </div>

        <!-- Empty -->
        <div v-else-if="nearbyLibraries.length === 0" class="p-8 text-center text-slate-455">
          <Navigation class="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p class="text-xs font-medium italic">No libraries found within 50 km radius.</p>
        </div>

        <!-- Library Cards -->
        <div v-else class="divide-y divide-slate-100">
          <div
            v-for="lib in nearbyLibraries"
            :key="lib.id"
            class="flex items-center space-x-4 px-6 py-4 hover:bg-slate-50/30 transition-colors"
          >
            <img
              :src="lib.photo_url"
              :alt="lib.name"
              class="w-14 h-14 rounded-2xl object-cover flex-shrink-0 shadow-sm border border-slate-100"
            />
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-slate-800 text-sm truncate leading-tight">{{ lib.name }}</p>
              <p class="text-[11px] text-slate-400 truncate mt-1 font-medium leading-none">{{ lib.address }}</p>
              <div class="flex items-center space-x-1.5 mt-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-600">
                  <Navigation class="w-2.5 h-2.5 mr-1" />
                  {{ lib.distance_km < 1 ? (lib.distance_km * 1000).toFixed(0) + ' m' : lib.distance_km + ' km' }}
                </span>
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700">
                  Open
                </span>
              </div>
            </div>
            <router-link
              :to="`/student/libraries/${lib.id}/seats`"
              class="flex-shrink-0 p-3 bg-blue-600 hover:bg-blue-700 border border-blue-700 text-white rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center"
              title="Book a Seat"
            >
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>

        <div class="px-6 py-3.5 bg-slate-50/50 border-t border-slate-100">
          <p class="text-[10px] text-slate-400 font-medium uppercase tracking-wider text-center flex items-center justify-center">
            <span>Tap</span>
            <ArrowRight class="w-3.5 h-3.5 mx-1 text-blue-600 bg-blue-50 border border-blue-100 rounded-md p-0.5" />
            <span>to view and book a seat at the library</span>
          </p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { QrCode, MapPin, Camera, CheckCircle, Navigation, ArrowRight, X } from 'lucide-vue-next';
import { studentAPI } from '@/student/services/studentApi';
import { useRouter, useRoute } from 'vue-router';
import { Html5Qrcode } from 'html5-qrcode';
import { useSwal } from '@/shared/composables/useSwal';
import { useApp } from '@/shared/composables/useApp';
import api from '@/shared/services/api';

const router = useRouter();
const route = useRoute();
const { showSuccess, showError, Swal } = useSwal();
const { loadBookings } = useApp();

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
declare const google: any;

const nearbyLibraries = ref<any[]>([]);
const loadingNearby = ref(false);

let html5QrCode: Html5Qrcode | null = null;
let map: any = null;
let marker: any = null;

const locationMessage = computed(() => {
  if (locationError.value) return 'Location Error — tap to retry';
  if (locationReady.value) return 'Location Acquired';
  return 'Getting Location…';
});

const locationStatusClass = computed(() => {
  if (locationError.value) return 'bg-rose-50 border-rose-200 text-rose-700 cursor-pointer';
  if (locationReady.value) return 'bg-emerald-50 border-emerald-200 text-emerald-700';
  return 'bg-amber-50 border-amber-200 text-amber-700';
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
    await loadBookings();
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
