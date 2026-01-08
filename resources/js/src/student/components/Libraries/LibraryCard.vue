<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <!-- Header -->
    <div class="p-6 pb-4">
      <div class="flex items-start justify-between mb-3">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">{{ library.name }}</h3>
          <div class="flex items-center text-gray-600 text-sm mt-1">
            <MapPin class="w-4 h-4 mr-1" />
            {{ library.address }}
          </div>
        </div>
        <span v-if="library.distance" class="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {{ library.distance }}km
        </span>
      </div>

      <!-- Opening Hours -->
      <div class="flex items-center text-gray-600 text-sm mb-4">
        <Clock class="w-4 h-4 mr-1" />
        {{ library.openingHours }}
      </div>

      <!-- Availability -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <Users class="w-4 h-4 mr-2 text-gray-600" />
          <span class="text-sm text-gray-600">
            {{ library.availableSeats }} of {{ library.totalSeats }} seats available
          </span>
        </div>
        <span :class="['text-xs font-medium px-2 py-1 rounded-full', getAvailabilityColor()]">
          {{ Math.round(availabilityPercentage) }}% available
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        <div v-for="facility in (library.facilities || []).slice(0, 4)" :key="facility" class="flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
          <component :is="getFacilityIcon(facility)" class="w-4 h-4" v-if="getFacilityIcon(facility)" />
          <span class="ml-1">{{ facility }}</span>
        </div>
        <span v-if="library.facilities.length > 4" class="text-xs text-gray-500 px-2 py-1">
          +{{ library.facilities.length - 4 }} more
        </span>
      </div>
    </div>

    <!-- Actions -->
    <div class="px-6 pb-6 pt-2 border-t border-gray-100">
      <div class="flex space-x-3">
        <router-link
          :to="`/student/libraries/${library.id}/seats`"
          class="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
        >
          Book Seat
        </router-link>
        <router-link
          :to="`/student/libraries/${library.id}`"
          class="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Library } from '@/shared/types';
import { MapPin, Clock, Users, Wifi, Car } from 'lucide-vue-next';

const props = defineProps<{
  library: Library;
}>();

const availabilityPercentage = computed(() => {
  if (!props.library.totalSeats || props.library.totalSeats === 0) return 0;
  return (props.library.availableSeats / props.library.totalSeats) * 100;
});

const getAvailabilityColor = () => {
  if (availabilityPercentage.value > 50) return 'text-green-600 bg-green-100';
  if (availabilityPercentage.value > 20) return 'text-orange-600 bg-orange-100';
  return 'text-red-600 bg-red-100';
};

const getFacilityIcon = (facility: string) => {
  switch (facility.toLowerCase()) {
    case 'wifi': return Wifi;
    case 'parking': return Car;
    default: return null;
  }
};
</script>
