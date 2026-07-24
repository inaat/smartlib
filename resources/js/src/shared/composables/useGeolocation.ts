import { ref, readonly } from 'vue';

// Module-level singleton state so all components share the same location
const latitude = ref<number | null>(null);
const longitude = ref<number | null>(null);
const locationGranted = ref(false);
const locationLoading = ref(false);
const locationError = ref<string | null>(null);
const permissionRequested = ref(false);
let watchId: number | null = null;

// Restore from localStorage on module load
const cached = localStorage.getItem('smartlib_geolocation');
if (cached) {
  try {
    const parsed = JSON.parse(cached);
    if (parsed.lat && parsed.lng) {
      latitude.value = parsed.lat;
      longitude.value = parsed.lng;
      locationGranted.value = true;
      startWatching();
    }
  } catch {
    // ignore corrupt cache
  }
}

function saveToCache() {
  if (latitude.value !== null && longitude.value !== null) {
    localStorage.setItem('smartlib_geolocation', JSON.stringify({
      lat: latitude.value,
      lng: longitude.value,
      ts: Date.now(),
    }));
  }
}

function startWatching() {
  if (watchId !== null || !navigator.geolocation) return;

  watchId = navigator.geolocation.watchPosition(
    (position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      locationGranted.value = true;
      locationLoading.value = false;
      locationError.value = null;
      saveToCache();
    },
    (error) => {
      console.warn("Geolocation watch error:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
}

function stopWatching() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}

function requestLocation(): Promise<{ lat: number; lng: number } | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      locationError.value = 'Geolocation is not supported by your browser.';
      resolve(null);
      return;
    }

    locationLoading.value = true;
    locationError.value = null;
    permissionRequested.value = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude.value = position.coords.latitude;
        longitude.value = position.coords.longitude;
        locationGranted.value = true;
        locationLoading.value = false;
        locationError.value = null;
        saveToCache();
        startWatching();
        resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => {
        locationLoading.value = false;
        locationGranted.value = false;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            locationError.value = 'Location permission was denied. Please enable it in your browser settings.';
            break;
          case error.POSITION_UNAVAILABLE:
            locationError.value = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            locationError.value = 'Location request timed out. Please try again.';
            break;
          default:
            locationError.value = 'An unknown error occurred while fetching location.';
        }
        resolve(null);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes cache
      }
    );
  });
}

/**
 * Refresh location silently in the background.
 * Unlike requestLocation, this won't set loading state and won't reject.
 */
function refreshLocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      locationGranted.value = true;
      locationError.value = null;
      saveToCache();
      startWatching();
    },
    () => {
      // silent fail on background refresh
    },
    {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 60000,
    }
  );
}

export function useGeolocation() {
  return {
    latitude: readonly(latitude),
    longitude: readonly(longitude),
    locationGranted: readonly(locationGranted),
    locationLoading: readonly(locationLoading),
    locationError: readonly(locationError),
    permissionRequested: readonly(permissionRequested),
    requestLocation,
    refreshLocation,
    startWatching,
    stopWatching,
  };
}
