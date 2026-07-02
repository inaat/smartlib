<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden relative group">
    <!-- Background glow decoration -->
    <div class="absolute -right-16 -top-16 w-36 h-36 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors duration-500"></div>
    
    <div class="relative z-10 flex flex-col space-y-5">
      <!-- Title -->
      <div class="flex items-center justify-between">
        <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center">
          <Target class="w-4 h-4 mr-2 text-blue-600" />
          Weekly Target Progress
        </h2>
        <span class="text-xs bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-full border border-blue-100">
          Goal: 20 hrs
        </span>
      </div>

      <!-- Main Progress Display -->
      <div class="flex items-center space-x-6">
        <!-- SVG Circular Progress Indicator -->
        <div class="relative flex items-center justify-center flex-shrink-0">
          <svg class="w-24 h-24 transform -rotate-90">
            <!-- Background circle -->
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#e2e8f0"
              stroke-width="7"
              fill="transparent"
            />
            <!-- Progress circle with gradient -->
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="url(#blueGradient)"
              stroke-width="8"
              fill="transparent"
              :stroke-dasharray="251.2"
              :stroke-dashoffset="dashOffset"
              stroke-linecap="round"
              class="transition-all duration-1000 ease-out"
            />
            <!-- Gradients -->
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2563eb" />
                <stop offset="100%" stop-color="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <!-- Center Text -->
          <div class="absolute flex flex-col items-center justify-center">
            <span class="text-lg font-black text-slate-800">{{ progress }}%</span>
            <span class="text-[9px] text-slate-400 font-bold uppercase">Done</span>
          </div>
        </div>

        <!-- Progress Details -->
        <div class="flex-1 space-y-3.5">
          <!-- Total Hours -->
          <div>
            <div class="flex justify-between items-baseline mb-1">
              <span class="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Studied</span>
              <span class="text-sm font-black text-slate-700">{{ formattedWeeklyHours }}h</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                class="bg-blue-600 h-full rounded-full transition-all duration-1000"
                :style="{ width: `${progress ?? 0}%` }"
              ></div>
            </div>
          </div>

          <!-- Streak Display -->
          <div class="flex items-center justify-between p-2.5 bg-gradient-to-r from-orange-50/50 to-amber-50/30 border border-orange-100/50 rounded-xl">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg bg-orange-100/80 flex items-center justify-center text-orange-600 animate-pulse-slow">
                <Flame class="w-4.5 h-4.5 text-orange-600 fill-current" />
              </div>
              <div class="text-left">
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide leading-none">Daily Streak</p>
                <p class="text-xs font-extrabold text-orange-700 mt-1 leading-none">{{ streak ?? 0 }} Days active</p>
              </div>
            </div>
            <span v-if="(streak ?? 0) >= 3" class="text-[9px] font-bold text-orange-600 bg-orange-100/50 px-2 py-0.5 rounded border border-orange-200">
              On Fire!
            </span>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
        <!-- Studied Today -->
        <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
          <div class="flex items-center space-x-1.5 text-slate-400 mb-1">
            <Clock class="w-3.5 h-3.5 text-slate-400" />
            <span class="text-[9px] font-bold uppercase tracking-wider leading-none">Studied Today</span>
          </div>
          <span class="text-sm font-extrabold text-slate-700">{{ formattedHoursToday }} hrs</span>
        </div>

        <!-- Remaining to target -->
        <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
          <div class="flex items-center space-x-1.5 text-slate-400 mb-1">
            <TrendingUp class="w-3.5 h-3.5 text-slate-400" />
            <span class="text-[9px] font-bold uppercase tracking-wider leading-none">Remaining</span>
          </div>
          <span class="text-sm font-extrabold text-slate-700">{{ formattedRemainingHours }} hrs</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Target, Clock, TrendingUp, Flame } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  streak?: number;
  progress?: number; // percentage
  weeklyHours?: number;
  hoursToday?: number;
}>(), {
  streak: 0,
  progress: 0,
  weeklyHours: 0,
  hoursToday: 0
});

// SVG circular math
const dashOffset = computed(() => {
  const percent = Math.min(100, Math.max(0, props.progress ?? 0));
  const circumference = 251.2; // 2 * Math.PI * 40
  return circumference - (percent / 100) * circumference;
});

// Formatted hours
const formattedWeeklyHours = computed(() => {
  const hrs = props.weeklyHours ?? 0;
  return hrs.toFixed(1);
});

const formattedHoursToday = computed(() => {
  const hrs = props.hoursToday ?? 0;
  return hrs.toFixed(1);
});

const formattedRemainingHours = computed(() => {
  const hrs = props.weeklyHours ?? 0;
  return Math.max(0, 20 - hrs).toFixed(1);
});
</script>

<style scoped>
@keyframes pulseSlow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.95;
  }
}
.animate-pulse-slow {
  animation: pulseSlow 2s infinite ease-in-out;
}
</style>
