<template>
  <div class="bg-white rounded-3xl border border-slate-200/60 hover:border-slate-300/80 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 hover-lift flex flex-col group h-full relative overflow-hidden font-outfit text-left">
    <!-- Cover Image Header -->
    <div class="h-44 bg-slate-100 relative overflow-hidden border-b border-slate-100 flex-shrink-0">
      <img 
        v-if="library.photo_url" 
        :src="library.photo_url" 
        class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
        alt="Library cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 text-slate-300">
        <Building2 class="w-12 h-12 stroke-1" />
      </div>
      
      <!-- Open/Closed Tag (top right) -->
      <div class="absolute top-3 right-3 z-10">
        <span 
          :class="[
            'px-2.5 py-1 rounded-xl text-[9px] font-semibold uppercase tracking-wider shadow-sm border leading-none block backdrop-blur-md',
            isOpen 
              ? 'bg-emerald-500/90 text-white border-emerald-400/20' 
              : 'bg-rose-500/90 text-white border-rose-400/20'
          ]"
        >
          {{ isOpen ? 'Open' : 'Closed' }}
        </span>
      </div>

      <!-- Rating Badge (bottom left overlay) -->
      <div v-if="library.average_rating" class="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white px-2 py-1 rounded-lg text-[10px] font-semibold flex items-center space-x-1 border border-white/10 shadow-sm">
        <span class="text-amber-400">★</span>
        <span>{{ library.average_rating.toFixed(1) }}</span>
      </div>
    </div>

    <!-- Body Info -->
    <div class="p-5 flex-grow flex flex-col justify-between min-w-0">
      <div class="space-y-4">
        <!-- Name & Address -->
        <div class="flex items-start justify-between gap-2.5">
          <div class="min-w-0">
            <h3 class="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug truncate" :title="library.name">
              {{ library.name }}
            </h3>
            <div class="flex items-center text-xs text-slate-400 font-semibold mt-1 truncate" :title="library.address">
              <MapPin class="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
              <span class="truncate">{{ library.address }}</span>
            </div>
          </div>
          <span v-if="library.distance_km !== undefined && library.distance_km !== null" class="text-[10px] font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded-lg flex-shrink-0 leading-none self-start">
            {{ formatDistance(library.distance_km) }}
          </span>
        </div>

        <!-- Opening Hours -->
        <div class="flex items-center text-xs text-slate-500 font-semibold">
          <Clock class="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
          <span>{{ library.openingHours || 'Hours not specified' }}</span>
        </div>

        <!-- Availability Progress -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div class="flex items-center min-w-0">
            <Users class="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
            <span class="text-xs text-slate-500 font-medium truncate">
              {{ library.availableSeats }} / {{ library.totalSeats }} seats free
            </span>
          </div>
          <span :class="['text-[9px] font-semibold px-2.5 py-0.5 rounded-lg border shadow-sm flex-shrink-0 leading-none', getAvailabilityColor()]">
            {{ Math.round(availabilityPercentage) }}% free
          </span>
        </div>

        <!-- Facilities preview -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          <div 
            v-for="facility in (library.facilities || []).slice(0, 3)" 
            :key="facility" 
            class="flex items-center bg-slate-50 border border-slate-100/50 text-slate-500 text-[10px] font-medium px-2 py-0.5 rounded-lg"
          >
            <component :is="getFacilityIcon(facility)" class="w-3 h-3 text-slate-400" v-if="getFacilityIcon(facility)" />
            <span class="ml-1 leading-none">{{ facility }}</span>
          </div>
          <span v-if="(library.facilities || []).length > 3" class="text-[9px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg">
            +{{ library.facilities.length - 3 }} more
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="pt-5 mt-5 border-t border-slate-100 flex-shrink-0">
        <div class="flex space-x-2.5">
          <router-link
            :to="`/student/libraries/${library.id}/seats`"
            class="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all flex items-center justify-center leading-none text-center"
          >
            Book Seat
          </router-link>
          <router-link
            :to="`/student/libraries/${library.id}`"
            class="flex-1 py-2 px-3 bg-white border border-slate-350 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center justify-center leading-none text-center"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MapPin, Clock, Users, Wifi, Car, Building2 } from 'lucide-vue-next';

const props = defineProps<{
  library: any;
}>();

const formatDistance = (distanceKm?: number) => {
  if (distanceKm === undefined || distanceKm === null) return '';
  if (distanceKm < 1.0) return 'Near';
  return `${distanceKm} km`;
};

const availabilityPercentage = computed(() => {
  if (!props.library.totalSeats || props.library.totalSeats === 0) return 0;
  return (props.library.availableSeats / props.library.totalSeats) * 100;
});

const getAvailabilityColor = () => {
  if (availabilityPercentage.value > 50) return 'text-green-700 bg-green-50 border-green-100';
  if (availabilityPercentage.value > 20) return 'text-orange-700 bg-orange-50 border-orange-100';
  return 'text-red-700 bg-red-50 border-red-100';
};

const getFacilityIcon = (facility: string) => {
  switch (facility.toLowerCase()) {
    case 'wifi': return Wifi;
    case 'parking': return Car;
    default: return null;
  }
};

const isOpen = computed(() => {
  if (!props.library.openingHours) return false;
  
  try {
    const parts = props.library.openingHours.split('-');
    if (parts.length !== 2) return true;
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const parseTime = (timeStr: string) => {
      const match = timeStr.trim().match(/^(\d+):(\d+)\s*(AM|PM)$/i);
      if (!match) return null;
      let hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const ampm = match[3].toUpperCase();
      
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      
      return hours * 60 + minutes;
    };
    
    const startMinutes = parseTime(parts[0]);
    const endMinutes = parseTime(parts[1]);
    
    if (startMinutes === null || endMinutes === null) return true;
    
    if (startMinutes <= endMinutes) {
      return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
    } else {
      // Over midnight case
      return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
    }
  } catch (e) {
    return true;
  }
});
</script>

<style scoped>
.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}
.active\:scale-98:active {
  transform: scale(0.98);
}
</style>
