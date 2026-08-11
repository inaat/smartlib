<template>
  <div class="relative inline-block text-left" ref="containerRef">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="toggleOpen"
      class="px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-bold text-slate-600 cursor-pointer shadow-sm outline-none"
    >
      <Calendar class="w-4 h-4 text-slate-500 flex-shrink-0" />
      <span class="whitespace-nowrap font-bold">{{ selectedLabel }}</span>
      <ChevronDown
        class="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
    >
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        @click="selectOption(option.value)"
        :class="[
          'w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer',
          modelValue === option.value
            ? (color === 'emerald' ? 'bg-emerald-50/80 text-emerald-700 font-bold' : 'bg-blue-50/80 text-blue-700 font-bold')
            : 'text-slate-700 hover:bg-slate-50'
        ]"
      >
        <span>{{ option.label }}</span>
        <Check 
          v-if="modelValue === option.value" 
          :class="['w-3.5 h-3.5 flex-shrink-0 ml-2', color === 'emerald' ? 'text-emerald-600' : 'text-blue-600']" 
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Calendar, ChevronDown, Check } from 'lucide-vue-next';

const props = defineProps({
  modelValue: {
    type: String,
    default: 'today'
  },
  color: {
    type: String,
    default: 'blue'
  },
  options: {
    type: Array as () => Array<{ value: string; label: string }>,
    default: () => [
      { value: 'today', label: 'Today' },
      { value: 'yesterday', label: 'Yesterday' },
      { value: 'this_month', label: 'This Month' },
      { value: 'last_month', label: 'Last Month' },
      { value: 'this_year', label: 'This Year' },
      { value: 'custom', label: 'Custom Range' },
      { value: 'all', label: 'All Time' }
    ]
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(() => {
  const match = props.options.find(o => o.value === props.modelValue);
  return match ? match.label : 'Today';
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (val: string) => {
  isOpen.value = false;
  emit('update:modelValue', val);
  emit('change', val);
};

const handleClickOutside = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>
