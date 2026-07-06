<template>
  <div class="space-y-6 pb-12 font-outfit">
    <!-- Action Row (List/Map view toggles) -->
    <div class="flex justify-end">
      <div class="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
        <button
          @click="viewMode = 'list'"
          :class="[
            'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
            viewMode === 'list' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
          ]"
        >
          <List class="w-3.5 h-3.5" />
          <span>List View</span>
        </button>
        <button
          @click="viewMode = 'map'"
          :class="[
            'px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5',
            viewMode === 'map' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400 hover:text-slate-700'
          ]"
        >
          <MapPin class="w-3.5 h-3.5" />
          <span>Map View</span>
        </button>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1 relative group">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="Search libraries by name or location..."
            v-model="searchQuery"
            class="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
          />
        </div>
        
        <div class="relative min-w-[180px] group">
          <Filter class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <select
            v-model="filterFacility"
            class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
          >
            <option value="">All Facilities</option>
            <option v-for="facility in allFacilities" :key="facility" :value="facility">{{ facility }}</option>
          </select>
          <ChevronDown class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-if="viewMode === 'list'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LibraryCard v-for="library in filteredLibraries" :key="library.id" :library="library" />
    </div>
    <LibraryMap v-else :libraries="filteredLibraries" />

    <!-- Empty State -->
    <div v-if="filteredLibraries.length === 0" class="text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8">
      <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
        <MapPin class="w-7 h-7" />
      </div>
      <h3 class="text-base font-semibold text-slate-800 mb-1">No libraries found</h3>
      <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">Try adjusting your search query or choosing another facility filter.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useApp } from '@/shared/composables/useApp';
import LibraryCard from './LibraryCard.vue';
import LibraryMap from './LibraryMap.vue';
import { Search, Filter, MapPin, List, ChevronDown } from 'lucide-vue-next';

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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.active\:scale-98:active {
  transform: scale(0.98);
}
</style>
