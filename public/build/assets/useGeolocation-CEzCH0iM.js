import { M as readonly, r as ref } from "./main-BGbL_8Ba.js";
const latitude = ref(null);
const longitude = ref(null);
const locationGranted = ref(false);
const locationLoading = ref(false);
const locationError = ref(null);
const permissionRequested = ref(false);
let watchId = null;
const cached = localStorage.getItem("smartlib_geolocation");
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
  }
}
function saveToCache() {
  if (latitude.value !== null && longitude.value !== null) {
    localStorage.setItem("smartlib_geolocation", JSON.stringify({
      lat: latitude.value,
      lng: longitude.value,
      ts: Date.now()
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
      timeout: 15e3,
      maximumAge: 0
    }
  );
}
function stopWatching() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
function requestLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      locationError.value = "Geolocation is not supported by your browser.";
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
            locationError.value = "Location permission was denied. Please enable it in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            locationError.value = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            locationError.value = "Location request timed out. Please try again.";
            break;
          default:
            locationError.value = "An unknown error occurred while fetching location.";
        }
        resolve(null);
      },
      {
        enableHighAccuracy: false,
        timeout: 1e4,
        maximumAge: 3e5
        // 5 minutes cache
      }
    );
  });
}
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
    },
    {
      enableHighAccuracy: false,
      timeout: 8e3,
      maximumAge: 6e4
    }
  );
}
if (typeof window !== "undefined" && navigator.permissions && navigator.permissions.query) {
  navigator.permissions.query({ name: "geolocation" }).then((status) => {
    if (status.state === "granted") {
      requestLocation();
    } else if (status.state === "denied") {
      locationGranted.value = false;
      locationError.value = "Location access is denied. Please turn on location in your device and browser settings.";
    }
    status.onchange = () => {
      if (status.state === "granted") {
        requestLocation();
      } else if (status.state === "denied") {
        locationGranted.value = false;
        locationError.value = "Location access is denied. Please turn on location in your device and browser settings.";
      }
    };
  }).catch(() => {
  });
}
function useGeolocation() {
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
    stopWatching
  };
}
export {
  useGeolocation as u
};
