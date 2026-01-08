<template>
  <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <div class="p-2 bg-indigo-50 rounded-lg">
        <Library class="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h3 class="text-sm font-semibold text-gray-900">Select Library</h3>
        <p class="text-xs text-gray-500">Manage data for a specific library</p>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <select
        :value="modelValue === null ? '' : modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value === '' ? null : Number(($event.target as HTMLSelectElement).value))"
        class="min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      >
        <option value="">All Libraries</option>
        <option v-for="lib in libraries" :key="lib.id" :value="lib.id">
          {{ lib.name }}
        </option>
      </select>
      <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Library } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';

defineProps<{
  modelValue: number | null;
}>();

defineEmits(['update:modelValue']);

const libraries = ref<any[]>([]);
const loading = ref(false);

const fetchLibraries = async () => {
  loading.value = true;
  try {
    libraries.value = await superadminAPI.getLibraries();
  } catch (error) {
    console.error('Error fetching libraries:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchLibraries);
</script>
