<template>
  <div v-if="recommendations.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
    <div class="text-gray-500">No recommendations available</div>
  </div>
  <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-800">AI Recommendations</h2>
      <div class="flex items-center space-x-2">
        <!-- Slide indicators -->
        <div class="flex space-x-1">
          <button
            v-for="(_, index) in recommendations"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          />
        </div>
        
        <!-- Navigation buttons -->
        <div class="flex space-x-1 ml-4">
          <button
            @click="goToPrevious"
            class="p-1 rounded-full hover:bg-gray-100 transition-colors"
            :disabled="recommendations.length <= 1"
          >
            <ChevronLeft class="w-4 h-4 text-gray-600" />
          </button>
          <button
            @click="goToNext"
            class="p-1 rounded-full hover:bg-gray-100 transition-colors"
            :disabled="recommendations.length <= 1"
          >
            <ChevronRight class="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>

    <!-- Slider Container -->
    <div class="relative overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(recommendation, index) in recommendations" :key="index" class="w-full flex-shrink-0 p-6">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div :class="['inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3', getTypeColor(recommendation.type)]">
                {{ recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1) }} Recommendation
              </div>
              
              <h3 class="font-semibold text-gray-800 text-lg mb-2">
                {{ recommendation.title }}
              </h3>
              
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ recommendation.description }}
              </p>
              
              <div class="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                <div v-if="recommendation.time" class="flex items-center">
                  <Clock class="w-4 h-4 mr-1" />
                  {{ recommendation.time }}
                </div>
                <div v-if="recommendation.location" class="flex items-center">
                  <MapPin class="w-4 h-4 mr-1" />
                  {{ recommendation.location }}
                </div>
                <div v-if="recommendation.author" class="flex items-center">
                  <User class="w-4 h-4 mr-1" />
                  {{ recommendation.author }}
                </div>
                <div v-if="recommendation.date" class="flex items-center">
                  <Calendar class="w-4 h-4 mr-1" />
                  {{ recommendation.date }}
                </div>
              </div>
            </div>
            
            <button 
              @click="emit('action', recommendation)"
              :class="['px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105', getButtonColor(recommendation.type)]"
            >
              {{ recommendation.action }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="px-6 pb-4">
      <div class="w-full bg-gray-200 rounded-full h-1">
        <div 
          class="bg-blue-600 h-1 rounded-full transition-all duration-500 ease-in-out"
          :style="{ width: `${((currentIndex + 1) / recommendations.length) * 100}%` }"
        />
      </div>
      <div class="flex justify-between text-xs text-gray-500 mt-1">
        <span>{{ currentIndex + 1 }} of {{ recommendations.length }}</span>
        <span>{{ isAutoPlaying ? 'Auto-playing' : 'Paused' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Calendar } from 'lucide-vue-next';

interface Recommendation {
  type: 'seat' | 'book' | 'event';
  title: string;
  description: string;
  action: string;
  time?: string;
  location?: string;
  author?: string;
  date?: string;
}

const props = defineProps<{
  recommendations: Recommendation[];
}>();

const emit = defineEmits<{
  (e: 'action', recommendation: Recommendation): void;
}>();

const currentIndex = ref(0);
const isAutoPlaying = ref(true);
let interval: any = null;
let resumeTimeout: any = null;

const startAutoPlay = () => {
  if (props.recommendations.length <= 1) return;
  interval = setInterval(() => {
    currentIndex.value = currentIndex.value === props.recommendations.length - 1 ? 0 : currentIndex.value + 1;
  }, 5000);
};

const stopAutoPlay = () => {
  if (interval) clearInterval(interval);
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  isAutoPlaying.value = false;
  if (resumeTimeout) clearTimeout(resumeTimeout);
  resumeTimeout = setTimeout(() => {
    isAutoPlaying.value = true;
  }, 10000);
};

const goToPrevious = () => {
  const newIndex = currentIndex.value === 0 ? props.recommendations.length - 1 : currentIndex.value - 1;
  goToSlide(newIndex);
};

const goToNext = () => {
  const newIndex = currentIndex.value === props.recommendations.length - 1 ? 0 : currentIndex.value + 1;
  goToSlide(newIndex);
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'seat': return 'bg-blue-50 border-blue-200 text-blue-800';
    case 'book': return 'bg-teal-50 border-teal-200 text-teal-800';
    case 'event': return 'bg-orange-50 border-orange-200 text-orange-800';
    default: return 'bg-gray-50 border-gray-200 text-gray-800';
  }
};

const getButtonColor = (type: string) => {
  switch (type) {
    case 'seat': return 'bg-blue-600 hover:bg-blue-700';
    case 'book': return 'bg-teal-600 hover:bg-teal-700';
    case 'event': return 'bg-orange-600 hover:bg-orange-700';
    default: return 'bg-gray-600 hover:bg-gray-700';
  }
};

onMounted(() => {
  if (isAutoPlaying.value) startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
  if (resumeTimeout) clearTimeout(resumeTimeout);
});

watch(isAutoPlaying, (newVal) => {
  if (newVal) startAutoPlay();
  else stopAutoPlay();
});
</script>
