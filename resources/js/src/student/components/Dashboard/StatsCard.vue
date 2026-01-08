<template>
  <div :class="[bgColorClasses[color], 'rounded-xl p-6 border border-gray-200']">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-gray-600 text-sm font-medium">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ value }}</p>
        <p v-if="subtitle" class="text-gray-500 text-xs mt-1">{{ subtitle }}</p>
      </div>
      <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', colorClasses[color]]">
        <component :is="icon" class="w-6 h-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
  title: string;
  value: string;
  icon: Component;
  color: 'blue' | 'teal' | 'orange' | 'green';
  subtitle?: string;
}>();

const colorClasses = {
  blue: 'bg-blue-500 text-white',
  teal: 'bg-teal-500 text-white',
  orange: 'bg-orange-500 text-white',
  green: 'bg-green-500 text-white'
};

const bgColorClasses = {
  blue: 'bg-blue-50',
  teal: 'bg-teal-50',
  orange: 'bg-orange-50',
  green: 'bg-green-50'
};
</script>
