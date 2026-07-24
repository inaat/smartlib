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
import { ref, onMounted, watch } from 'vue';
import { useGeolocation } from '@/shared/composables/useGeolocation';
import { Users, Clock } from 'lucide-vue-next';

declare const google: any;

const props = defineProps<{
  libraries: any[];
}>();

const { latitude, longitude } = useGeolocation();

let map: any = null;
let markers: any[] = [];
let userMarker: any = null;
let activeInfoWindow: any = null;

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

const initMap = async () => {
  try {
    await loadGoogleMapsScript();
  } catch (error) {
    console.error("Failed to load Google Maps:", error);
    return;
  }

  const mapElement = document.getElementById('libraries-map');
  if (!mapElement) return;

  // Center on user location or first library
  let center = { lat: 28.6139, lng: 77.2090 };
  if (latitude.value && longitude.value) {
    center = { lat: latitude.value, lng: longitude.value };
  } else if (props.libraries.length > 0 && props.libraries[0].latitude && props.libraries[0].longitude) {
    center = { lat: Number(props.libraries[0].latitude), lng: Number(props.libraries[0].longitude) };
  }

  map = new google.maps.Map(mapElement, {
    center,
    zoom: latitude.value && longitude.value ? 12 : 10,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  updateUserMarker();
  updateLibraryMarkers();
};

const updateUserMarker = () => {
  if (!map) return;

  if (userMarker) {
    userMarker.setMap(null);
    userMarker = null;
  }

  if (latitude.value && longitude.value) {
    userMarker = new google.maps.Marker({
      position: { lat: latitude.value, lng: longitude.value },
      map,
      title: 'Your Location',
      icon: {
        path: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1c0-.55-.45-1-1-1s-1 .45-1 1v2.06C6.83 4.52 3.52 7.83 3.06 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2.06c.46 4.17 3.77 7.48 7.94 7.94V23c0 .55.45 1 1 1s1-.45 1-1v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23c.55 0 1-.45 1-1s-.45-1-1-1h-2.06zM12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z', // GPS location target icon
        fillColor: '#3b82f6',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 1.5,
        scale: 1,
        anchor: new google.maps.Point(12, 12),
      },
    });
  }
};

const updateLibraryMarkers = () => {
  if (!map) return;

  // Clear existing markers
  markers.forEach(m => m.setMap(null));
  markers = [];

  const bounds = new google.maps.LatLngBounds();
  let hasValidCoords = false;

  props.libraries.forEach((library, index) => {
    if (!library.latitude || !library.longitude) return;

    const position = { lat: Number(library.latitude), lng: Number(library.longitude) };
    bounds.extend(position);
    hasValidCoords = true;

    // Create custom pin marker
    const marker = new google.maps.Marker({
      position,
      map,
      title: library.name,
      label: {
        text: (index + 1).toString(),
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '11px',
      },
      icon: {
        path: 'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z', // Solid location teardrop pin
        fillColor: '#ef4444',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 1.5,
        scale: 1.3,
        anchor: new google.maps.Point(12, 22),
        labelOrigin: new google.maps.Point(12, 9),
      },
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

    const infoWindow = new google.maps.InfoWindow({
      content: infoContent,
    });

    marker.addListener('click', () => {
      openInfoWindow(infoWindow, marker, position);
    });

    // Attach library id to marker for lookup
    marker.libraryId = library.id;
    marker.infoWindow = infoWindow;
    markers.push(marker);
  });

  if (hasValidCoords && props.libraries.length > 1) {
    map.fitBounds(bounds);
  }
};

const openInfoWindow = (infoWindow: any, marker: any, position: any) => {
  if (activeInfoWindow) {
    activeInfoWindow.close();
  }
  infoWindow.open(map, marker);
  activeInfoWindow = infoWindow;
  map.panTo(position);
};

const focusLibrary = (library: any) => {
  if (!map) return;
  const marker = markers.find(m => m.libraryId === library.id);
  if (marker) {
    openInfoWindow(marker.infoWindow, marker, marker.getPosition());
    map.setZoom(14);
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
