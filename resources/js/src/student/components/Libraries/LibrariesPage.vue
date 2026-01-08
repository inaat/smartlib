<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Libraries</h1>
        <p class="text-gray-600 mt-1">Find and book seats at ICAP libraries</p>
      </div>
      
      <div class="flex items-center space-x-2">
        <button
          @click="viewMode = 'list'"
          :class="[
            'p-2 rounded-lg transition-colors',
            viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <List class="w-5 h-5" />
        </button>
        <button
          @click="viewMode = 'map'"
          :class="[
            'p-2 rounded-lg transition-colors',
            viewMode === 'map' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <MapPin class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search libraries..."
            v-model="searchQuery"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div class="relative">
          <Filter class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            v-model="filterFacility"
            class="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Facilities</option>
            <option v-for="facility in allFacilities" :key="facility" :value="facility">{{ facility }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-if="viewMode === 'list'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LibraryCard v-for="library in filteredLibraries" :key="library.id" :library="library" />
    </div>
    <LibraryMap v-else :libraries="filteredLibraries" />

    <div v-if="filteredLibraries.length === 0" class="text-center py-12">
      <MapPin class="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-800 mb-2">No libraries found</h3>
      <p class="text-gray-600">Try adjusting your search or filters</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useApp } from '@/shared/composables/useApp';
import LibraryCard from './LibraryCard.vue';
import LibraryMap from './LibraryMap.vue';
import { Search, Filter, MapPin, List } from 'lucide-vue-next';

const { libraries, searchQuery, loadLibraries } = useApp();
const viewMode = ref<'list' | 'map'>('list');
const filterFacility = ref('');

onMounted(() => {
  if (libraries.value.length === 0) {
    loadLibraries();
  }
});

const filteredLibraries = computed(() => {
  return libraries.value.filter(library => {
    const search = searchQuery.value?.toLowerCase() || '';
    const matchesSearch = library.name.toLowerCase().includes(search) ||
                         library.address.toLowerCase().includes(search);
    const facilities = library.facilities || [];
    const matchesFacility = !filterFacility.value || facilities.includes(filterFacility.value);
    return matchesSearch && matchesFacility;
  });
});

const allFacilities = computed(() => {
  return Array.from(
    new Set(libraries.value.flatMap(lib => lib.facilities || []))
  );
});
</script>
