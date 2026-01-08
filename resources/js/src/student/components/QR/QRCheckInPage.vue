<template>
  <div class="p-6 max-w-md mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div class="p-6">
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <QrCode class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Scan to Check In</h1>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Please scan the QR code located on your seat.</p>
        </div>

        <!-- Location Status -->
        <div class="mb-6 p-4 rounded-lg" :class="locationStatusClass" @click="locationError ? getLocation() : null">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <MapPin class="w-5 h-5 mr-2" />
              <span class="font-medium">{{ locationMessage }}</span>
            </div>
            <button v-if="locationError" class="text-xs underline">Retry</button>
          </div>
          <p v-if="locationError" class="text-sm mt-1 opacity-90">{{ locationError }}</p>
        </div>

        <!-- Google Map Display -->
        <div v-if="locationReady && latitude && longitude" class="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <div id="map" class="w-full h-64"></div>
          <div class="bg-white p-3 text-xs text-gray-600">
            <div class="flex items-center justify-between">
              <span>📍 Lat: {{ latitude.toFixed(6) }}, Lng: {{ longitude.toFixed(6) }}</span>
              <button @click="centerMap" class="text-blue-600 hover:text-blue-700 font-medium">Re-center</button>
            </div>
          </div>
        </div>

        <!-- QR Scanner Container -->
        <div class="mb-6">
            <div id="reader" class="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 min-h-[300px]"></div>
            <p v-if="cameraError" class="text-red-500 text-sm text-center mt-2">{{ cameraError }}</p>
        </div>

        <!-- Hidden Inputs for Debugging -->
        <div v-if="showDebug" class="mb-4 p-4 bg-gray-100 rounded text-xs">
            <p>Debug Mode</p>
            <input v-model="bookingId" placeholder="Booking ID" class="block w-full mb-2 p-1" />
            <input v-model="qrCode" placeholder="QR Code" class="block w-full p-1" />
        </div>

        <div v-if="!isScanning && !qrCode" class="text-center">
            <button
              @click="startScanner"
              class="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <Camera class="w-5 h-5" />
              <span>Start Camera</span>
            </button>
        </div>

        <div v-if="qrCode && !isCheckingIn" class="text-center space-y-4">
            <div class="p-4 bg-green-50 text-green-700 rounded-lg">
                <p class="font-bold">QR Code Scanned!</p>
                <p class="text-xs break-all">{{ qrCode }}</p>
            </div>
            <button
              @click="performCheckIn"
              :disabled="isCheckingIn"
              class="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span v-if="isCheckingIn" class="animate-spin rounded-full h-5 h-5 border-b-2 border-white"></span>
              <span>{{ isCheckingIn ? 'Verifying...' : 'Confirm Check-In' }}</span>
            </button>
            <button @click="resetScanner" class="text-sm text-gray-500 underline">Scan Again</button>
        </div>
        
        <div class="mt-4 text-center">
            <button @click="showDebug = !showDebug" class="text-xs text-gray-300 hover:text-gray-500">
                {{ showDebug ? 'Hide Debug' : 'Debug' }}
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { QrCode, MapPin, Camera } from 'lucide-vue-next';
import { studentAPI } from '@/student/services/studentApi';
import { useRouter, useRoute } from 'vue-router';
import { Html5Qrcode } from 'html5-qrcode';

const router = useRouter();
const route = useRoute();

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

let html5QrCode: Html5Qrcode | null = null;
let map: google.maps.Map | null = null;
let marker: google.maps.Marker | null = null;

const locationMessage = computed(() => {
  if (locationError.value) return 'Location Error';
  if (locationReady.value) return 'Location Verified';
  return 'Getting Location...';
});

const locationStatusClass = computed(() => {
 if (locationError.value) return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 cursor-pointer';
  if (locationReady.value) return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200';
  return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200';
});

// Initialize Google Map
const initializeMap = async () => {
  if (!latitude.value || !longitude.value) return;

  // Ensure Google Maps is loaded
  try {
    await loadGoogleMapsScript();
  } catch (e) {
    console.error('Failed to load Google Maps:', e);
    return;
  }

  await nextTick();

  const position = { lat: latitude.value, lng: longitude.value };

  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: position,
    zoom: 16,
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Your Location',
    animation: google.maps.Animation.DROP,
  });
};

// Re-center map to current location
const centerMap = () => {
  if (map && latitude.value && longitude.value) {
    const position = { lat: latitude.value, lng: longitude.value };
    map.setCenter(position);
    if (marker) {
      marker.setPosition(position);
    }
  }
};

// Load Google Maps script
const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof google !== 'undefined' && google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });
};

const getLocation = ():Promise<void> => {
  return new Promise((resolve) => {
      if (!navigator.geolocation) {
        locationError.value = 'Geolocation is not supported by your browser';
        resolve();
        return;
      }

      locationError.value = null;
      locationReady.value = false;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          locationReady.value = true;
          locationError.value = null;
          // Initialize map after getting location
          nextTick(() => initializeMap());
          resolve();
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              locationError.value = "Please allow location access in your browser settings.";
              break;
            case error.POSITION_UNAVAILABLE:
              locationError.value = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              locationError.value = "Location request timed out.";
              break;
            default:
              locationError.value = "Unable to get location.";
              break;
          }
          locationReady.value = false;
          resolve();
        },
        { 
          enableHighAccuracy: true, 
          timeout: 30000,
          maximumAge: 60000
        }
      );
  });
};

const startScanner = async () => {
    cameraError.value = null;
    
    // Try to get location if not ready
    if (!locationReady.value) {
        await getLocation();
    }

    isScanning.value = true;
    qrCode.value = '';

    await nextTick();

    try {
        // If instance exists, clear it first
        if (html5QrCode) {
            try {
                await html5QrCode.stop();
                html5QrCode.clear();
            } catch (e) {
                // Ignore stop errors
            }
        }

        html5QrCode = new Html5Qrcode("reader");
        
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        
        await html5QrCode.start(
            { facingMode: "environment" },
            config,
            (decodedText, decodedResult) => {
                qrCode.value = decodedText;
                stopScanner();
            },
            (errorMessage) => {
                // parse error, ignore it.
            }
        );
    } catch (err: any) {
        console.error("Error starting scanner", err);
        cameraError.value = `Camera Error: ${err?.message || 'Unknown error'}. Please ensure permissions are granted and you are using HTTPS.`;
        isScanning.value = false;
    }
};

const stopScanner = async () => {
    if (html5QrCode && isScanning.value) {
        try {
            await html5QrCode.stop();
            html5QrCode.clear();
            isScanning.value = false;
        } catch (err) {
            console.error("Failed to stop scanner", err);
        }
    }
};

const resetScanner = () => {
    qrCode.value = '';
    startScanner();
};

const performCheckIn = async () => {
  if (!bookingId.value) {
    alert('Booking ID missing. Please go back to your profile.');
    return;
  }

  if (!latitude.value || !longitude.value) {
    alert('Location data is missing. Retrying...');
    await getLocation();
    if (!latitude.value || !longitude.value) {
      alert('Unable to get location. Please enable location services and try again.');
      return;
    }
  }

  try {
    isCheckingIn.value = true;
    await studentAPI.checkIn(bookingId.value, qrCode.value, latitude.value, longitude.value);
    alert('Check-in successful! Welcome to the library.');
    router.push('/student/dashboard');
  } catch (error: any) {
    console.error('Check-in failed:', error);
    alert(error.message || 'Check-in failed');
  } finally {
    isCheckingIn.value = false;
  }
};

onMounted(() => {
  getLocation();
  if (route.query.booking_id) {
    bookingId.value = route.query.booking_id as string;
  }
});

onUnmounted(() => {
    stopScanner();
});
</script>
