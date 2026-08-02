<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden font-outfit">
    <!-- Google Map Div -->
    <div id="libraries-map" class="h-[420px] bg-slate-100 relative"></div>

    <!-- Library List -->
    <div class="p-6">
      <h3 class="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">
        Libraries on Map ({{ libraries.length }})
      </h3>
      <div class="space-y-3">
        <div v-for="(library, index) in libraries" :key="library.id" class="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl transition-colors text-left">
          <div class="flex items-center space-x-3.5 min-w-0">
            <button
              @click="focusLibrary(library)"
              class="w-6.5 h-6.5 bg-red-500 hover:bg-red-650 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm transition-transform active:scale-95 flex-shrink-0"
              title="Click to focus on map"
            >
              {{ index + 1 }}
            </button>
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-semibold text-xs text-slate-800 truncate" :title="library.name">{{ library.name }}</h4>
                <span v-if="library.distance_km !== undefined && library.distance_km !== null" class="text-[9px] font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 px-1.5 py-0.5 rounded-lg flex-shrink-0">
                  {{ library.distance_km < 1.0 ? 'Near' : library.distance_km.toFixed(1) + ' km' }}
                </span>
              </div>
              <div class="flex items-center space-x-4 text-[11px] text-slate-400 font-semibold mt-1">
                <div class="flex items-center">
                  <Users class="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>{{ library.availableSeats }}/{{ library.totalSeats }} Seats</span>
                </div>
                <div class="flex items-center">
                  <Clock class="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>{{ library.openingHours || 'Hours spec' }}</span>
                </div>
              </div>
            </div>
          </div>
          <router-link 
            :to="`/student/libraries/${library.id}`"
            class="bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-98 flex-shrink-0"
          >
            Select
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useGeolocation } from '@/shared/composables/useGeolocation';
import { Users, Clock } from 'lucide-vue-next';

declare const L: any;

const props = defineProps<{
  libraries: any[];
}>();

const { latitude, longitude } = useGeolocation();

let map: any = null;
let markers: any[] = [];
let userMarker: any = null;

const loadLeafletScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof L !== 'undefined') { resolve(); return; }
    
    // Load Leaflet CSS if not present
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Leaflet map engine'));
    document.head.appendChild(script);
  });
};

const initMap = async () => {
  try {
    await loadLeafletScript();
  } catch (error) {
    console.error("Failed to load Leaflet:", error);
    return;
  }

  const mapElement = document.getElementById('libraries-map');
  if (!mapElement) return;

  // Center on user location or first library or default Lahore
  let centerLat = 31.5204;
  let centerLng = 74.3587;

  if (latitude.value && longitude.value) {
    centerLat = latitude.value;
    centerLng = longitude.value;
  } else if (props.libraries.length > 0 && props.libraries[0].latitude && props.libraries[0].longitude) {
    centerLat = Number(props.libraries[0].latitude);
    centerLng = Number(props.libraries[0].longitude);
  }

  if (map) {
    map.remove();
    map = null;
  }

  map = L.map('libraries-map').setView([centerLat, centerLng], latitude.value && longitude.value ? 12 : 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  updateUserMarker();
  updateLibraryMarkers();
};

const updateUserMarker = () => {
  if (!map || typeof L === 'undefined') return;

  if (userMarker) {
    map.removeLayer(userMarker);
    userMarker = null;
  }

  if (latitude.value && longitude.value) {
    const userIcon = L.divIcon({
      className: 'custom-user-pin',
      html: `<div style="background-color: #3b82f6; width: 16px; height: 16px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 10px rgba(59,130,246,0.6);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    userMarker = L.marker([latitude.value, longitude.value], { icon: userIcon })
      .bindPopup('<b>Your Current Location</b>')
      .addTo(map);
  }
};

const updateLibraryMarkers = () => {
  if (!map || typeof L === 'undefined') return;

  // Clear existing markers
  markers.forEach(m => map.removeLayer(m.layer));
  markers = [];

  const latLngBounds = L.latLngBounds([]);
  let hasValidCoords = false;

  props.libraries.forEach((library, index) => {
    if (!library.latitude || !library.longitude) return;

    const lat = Number(library.latitude);
    const lng = Number(library.longitude);
    latLngBounds.extend([lat, lng]);
    hasValidCoords = true;

    const customIcon = L.divIcon({
      className: 'custom-library-pin',
      html: `<div style="background-color: #ef4444; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; border: 2px solid #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">${index + 1}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const infoContent = `
      <div style="padding: 6px 8px; font-family: 'Outfit', sans-serif; text-align: left; max-width: 200px;">
        <h4 style="margin: 0 0 3px 0; font-weight: 700; color: #1e293b; font-size: 13px;">${library.name}</h4>
        <p style="margin: 0 0 6px 0; color: #64748b; font-size: 10px; line-height: 1.2;">${library.address || ''}</p>
        <div style="display: flex; gap: 8px; margin-bottom: 6px; font-size: 10px; color: #475569; font-weight: 500;">
          <span>👤 ${library.availableSeats}/${library.totalSeats} free</span>
        </div>
        <a href="#/student/libraries/${library.id}" style="display: block; text-align: center; background: #ef4444; color: #ffffff; padding: 5px 10px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 10px;">Select Library</a>
      </div>
    `;

    const markerLayer = L.marker([lat, lng], { icon: customIcon })
      .bindPopup(infoContent)
      .addTo(map);

    markers.push({
      libraryId: library.id,
      layer: markerLayer,
      lat,
      lng
    });
  });

  if (hasValidCoords && props.libraries.length > 1) {
    map.fitBounds(latLngBounds, { padding: [30, 30] });
  }
};

const focusLibrary = (library: any) => {
  if (!map) return;
  const item = markers.find(m => m.libraryId === library.id);
  if (item) {
    map.setView([item.lat, item.lng], 15);
    item.layer.openPopup();
  }
};

watch(() => props.libraries, () => {
  updateLibraryMarkers();
}, { deep: true });

watch([latitude, longitude], () => {
  updateUserMarker();
});

onMounted(() => {
  initMap();
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
.active\:scale-95:active {
  transform: scale(0.95);
}
</style>
