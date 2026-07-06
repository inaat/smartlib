<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <!-- Map Placeholder -->
    <div class="h-96 bg-blue-50/60 relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <MapPin class="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h3 class="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
          <p class="text-gray-500">Map integration would be implemented here</p>
          <p class="text-sm text-gray-400 mt-1">Using Google Maps or similar service</p>
        </div>
      </div>
      
      <!-- Mock map pins -->
      <div
        v-for="(library, index) in libraries"
        :key="library.id"
        class="absolute bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg cursor-pointer hover:bg-blue-700 transition-colors"
        :style="{
          left: `${20 + index * 25}%`,
          top: `${30 + index * 15}%`
        }"
        :title="library.name"
      >
        {{ index + 1 }}
      </div>
    </div>

    <!-- Library List -->
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">
        Libraries on Map ({{ libraries.length }})
      </h3>
      <div class="space-y-3">
        <div v-for="(library, index) in libraries" :key="library.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {{ index + 1 }}
            </div>
            <div>
              <h4 class="font-medium text-gray-800">{{ library.name }}</h4>
              <div class="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <div class="flex items-center">
                  <Users class="w-3 h-3 mr-1" />
                  {{ library.availableSeats }}/{{ library.totalSeats }}
                </div>
                <div class="flex items-center">
                  <Clock class="w-3 h-3 mr-1" />
                  {{ library.openingHours }}
                </div>
              </div>
            </div>
          </div>
          <router-link 
            :to="`/student/libraries/${library.id}`"
            class="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Select
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Library } from '@/shared/types';
import { MapPin, Users, Clock } from 'lucide-vue-next';

defineProps<{
  libraries: Library[];
}>();
</script>
