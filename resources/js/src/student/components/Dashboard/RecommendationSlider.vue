<template>
  <div v-if="recommendations.length === 0" class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center font-outfit">
    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">No recommendations available</div>
  </div>
  <div v-else class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden font-outfit text-left">
    <!-- Header -->
    <div class="px-6 py-4.5 border-b border-slate-100 flex items-center justify-between">
      <div class="flex items-center space-x-2.5">
        <div class="p-2  text-orange-500 ">
          <Sparkles class="w-4 h-4" />
        </div>
        <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wider">Recommendations</h2>
      </div>
      <div class="flex items-center space-x-2">
        <!-- Slide indicators -->
        <div class="flex space-x-1.5">
          <button
            v-for="(_, index) in recommendations"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-1.5 h-1.5 rounded-full transition-all duration-300',
              index === currentIndex ? 'bg-blue-600 w-4' : 'bg-slate-200 hover:bg-slate-300'
            ]"
          />
        </div>
        
        <!-- Navigation buttons -->
        <div class="flex space-x-1 ml-3.5">
          <button
            @click="goToPrevious"
            class="p-1.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-40"
            :disabled="recommendations.length <= 1"
            title="Previous Slide"
          >
            <ChevronLeft class="w-3.5 h-3.5 text-slate-600" />
          </button>
          <button
            @click="goToNext"
            class="p-1.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-40"
            :disabled="recommendations.length <= 1"
            title="Next Slide"
          >
            <ChevronRight class="w-3.5 h-3.5 text-slate-600" />
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
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div class="flex-1">
              <div :class="['inline-flex px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider mb-3 border', getTypeColor(recommendation.type)]">
                {{ recommendation.type }} Recommendation
              </div>
              
              <h3 class="font-bold text-slate-800 text-base mb-2 tracking-tight leading-snug">
                {{ recommendation.title }}
              </h3>
              
              <p class="text-xs text-slate-500 mb-4.5 leading-relaxed font-normal max-w-xl">
                {{ recommendation.description }}
              </p>
              
              <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold text-slate-400">
                <div v-if="recommendation.time" class="flex items-center">
                  <Clock class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{{ recommendation.time }}</span>
                </div>
                <div v-if="recommendation.location" class="flex items-center">
                  <MapPin class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{{ recommendation.location }}</span>
                </div>
                <div v-if="recommendation.author" class="flex items-center">
                  <User class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{{ recommendation.author }}</span>
                </div>
                <div v-if="recommendation.date" class="flex items-center">
                  <Calendar class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{{ recommendation.date }}</span>
                </div>
              </div>
            </div>
            
            <div class="flex-shrink-0 text-left md:text-right">
              <button 
                @click="emit('action', recommendation)"
                :class="['px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover-lift active:scale-98 shadow-sm', getButtonColor(recommendation.type)]"
              >
                {{ recommendation.action }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="px-6 pb-4">
      <div class="w-full bg-slate-100 border border-slate-200/50 rounded-full h-1 overflow-hidden">
        <div 
          class="bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out"
          :style="{ width: `${((currentIndex + 1) / recommendations.length) * 100}%` }"
        />
      </div>
      <div class="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-2 leading-none">
        <span>{{ currentIndex + 1 }} of {{ recommendations.length }}</span>
        <span>{{ isAutoPlaying ? 'Auto-playing' : 'Paused' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Calendar, Sparkles } from 'lucide-vue-next';

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
    case 'seat': return 'bg-blue-50 border-blue-100 text-blue-700';
    case 'book': return 'bg-teal-50 border-teal-100 text-teal-700';
    case 'event': return 'bg-amber-50 border-amber-100 text-amber-700';
    default: return 'bg-slate-50 border-slate-100 text-slate-700';
  }
};

const getButtonColor = (type: string) => {
  switch (type) {
    case 'seat': return 'bg-blue-600 hover:bg-blue-700 border border-blue-700';
    case 'book': return 'bg-teal-600 hover:bg-teal-700 border border-teal-700';
    case 'event': return 'bg-amber-600 hover:bg-amber-700 border border-amber-700';
    default: return 'bg-slate-600 hover:bg-slate-700 border border-slate-700';
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

<style scoped>
.hover-lift {
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
  transform: translateY(-2px);
}
</style>
