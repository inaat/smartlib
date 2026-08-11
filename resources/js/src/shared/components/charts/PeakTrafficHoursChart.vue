<template>
  <div class="bg-white rounded-3xl shadow-sm border border-slate-100/90 p-6 flex flex-col justify-between font-outfit">
    <!-- Header Area: Standardized Card Header -->
    <div class="flex items-center justify-between mb-4 text-left">
      <div>
        <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
          <Clock class="w-4 h-4 text-emerald-600" />
          <span>Peak Traffic Hours</span>
        </h2>
        <p class="text-[10px] text-slate-400 font-semibold mt-0.5">Footfall & seat bookings distribution across peak hours.</p>
      </div>
    </div>

    <!-- Chart Container -->
    <div class="relative w-full h-64 mt-2">
      <!-- SVG Chart -->
      <svg 
        class="w-full h-full overflow-visible" 
        viewBox="0 0 600 220" 
        preserveAspectRatio="none"
        @mouseleave="hoveredIndex = null"
      >
        <defs>
          <!-- Regular Bar Gradient (Green Theme) -->
          <linearGradient id="regularBarGradGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#ecfdf5" stop-opacity="0.35" />
          </linearGradient>

          <!-- Hovered Regular Bar Gradient -->
          <linearGradient id="regularBarHoverGradGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#34d399" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#d1fae5" stop-opacity="0.5" />
          </linearGradient>

          <!-- Peak Bar Gradient (Rich Vibrant Emerald Green) -->
          <linearGradient id="peakBarGradGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#059669" stop-opacity="1" />
            <stop offset="100%" stop-color="#047857" stop-opacity="0.9" />
          </linearGradient>
        </defs>

        <!-- Horizontal Grid Lines & Y-Axis Labels -->
        <g class="grid-lines">
          <g v-for="(yVal, idx) in yTicks" :key="idx">
            <!-- Line -->
            <line
              x1="35"
              :y1="getY(yVal)"
              x2="590"
              :y2="getY(yVal)"
              stroke="#f1f5f9"
              stroke-width="1.2"
            />
            <!-- Y Label -->
            <text
              x="25"
              :y="getY(yVal) + 4"
              text-anchor="end"
              fill="#94a3b8"
              font-size="11"
              font-weight="500"
              class="font-outfit"
            >
              {{ yVal }}
            </text>
          </g>
        </g>

        <!-- Bars Group -->
        <g class="bars">
          <g
            v-for="(item, index) in chartData"
            :key="index"
            @mouseenter="hoveredIndex = index"
            class="cursor-pointer group"
          >
            <!-- Bar Rect -->
            <rect
              :x="getBarX(index)"
              :y="getBarY(item.bookings)"
              :width="barWidth"
              :height="getBarHeight(item.bookings)"
              rx="9"
              ry="9"
              :fill="isPeak(index) ? 'url(#peakBarGradGreen)' : (hoveredIndex === index ? 'url(#regularBarHoverGradGreen)' : 'url(#regularBarGradGreen)')"
              class="transition-all duration-300"
            />

            <!-- X-Axis Hour Label -->
            <text
              :x="getBarX(index) + barWidth / 2"
              y="212"
              text-anchor="middle"
              :fill="isPeak(index) ? '#047857' : '#94a3b8'"
              :font-weight="isPeak(index) ? '700' : '500'"
              font-size="11"
              class="font-outfit transition-colors"
            >
              {{ item.label }}
            </text>
          </g>
        </g>
      </svg>

      <!-- Floating HTML Tooltip -->
      <transition name="fade">
        <div
          v-if="hoveredIndex !== null && chartData[hoveredIndex]"
          class="absolute z-20 pointer-events-none bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-150 transform -translate-x-1/2 -translate-y-full border border-slate-700/50"
          :style="{
            left: getTooltipLeft(hoveredIndex),
            top: getTooltipTop(hoveredIndex)
          }"
        >
          <div class="font-bold text-emerald-400">{{ chartData[hoveredIndex].fullTime }}</div>
          <div class="text-[11px] text-slate-200">{{ chartData[hoveredIndex].bookings }} Bookings</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Clock } from 'lucide-vue-next';

const props = defineProps<{
  data?: Array<{ hour: number; label: string; fullTime: string; bookings: number }>;
  totalBookings?: number;
}>();

const hoveredIndex = ref<number | null>(null);

// Default realistic peak hour distribution if empty
const defaultData = [
  { hour: 8, label: '8a', fullTime: '8:00 AM', bookings: 45 },
  { hour: 9, label: '9a', fullTime: '9:00 AM', bookings: 80 },
  { hour: 10, label: '10a', fullTime: '10:00 AM', bookings: 135 },
  { hour: 11, label: '11a', fullTime: '11:00 AM', bookings: 165 },
  { hour: 12, label: '12p', fullTime: '12:00 PM', bookings: 210 },
  { hour: 13, label: '1p', fullTime: '1:00 PM', bookings: 190 },
  { hour: 14, label: '2p', fullTime: '2:00 PM', bookings: 245 },
  { hour: 15, label: '3p', fullTime: '3:00 PM', bookings: 310 },
  { hour: 16, label: '4p', fullTime: '4:00 PM', bookings: 375 },
  { hour: 17, label: '5p', fullTime: '5:00 PM', bookings: 420 },
  { hour: 18, label: '6p', fullTime: '6:00 PM', bookings: 350 },
  { hour: 19, label: '7p', fullTime: '7:00 PM', bookings: 250 },
  { hour: 20, label: '8p', fullTime: '8:00 PM', bookings: 140 },
];

const chartData = computed(() => {
  if (props.data && props.data.length > 0) {
    return props.data;
  }
  return defaultData;
});

const maxVal = computed(() => {
  const max = Math.max(...chartData.value.map(d => d.bookings), 0);
  if (max === 0) return 10;
  if (max <= 5) return 5;
  if (max <= 10) return 10;
  if (max <= 50) return Math.ceil(max / 5) * 5;
  if (max <= 100) return Math.ceil(max / 10) * 10;
  return Math.ceil(max / 50) * 50;
});

const yTicks = computed(() => {
  const max = maxVal.value;
  const step = max / 4;
  return [0, Math.round(step), Math.round(step * 2), Math.round(step * 3), max];
});

const peakIndex = computed(() => {
  let maxIdx = 0;
  let maxB = -1;
  chartData.value.forEach((item, idx) => {
    if (item.bookings > maxB) {
      maxB = item.bookings;
      maxIdx = idx;
    }
  });
  return maxIdx;
});

const isPeak = (index: number) => index === peakIndex.value && (chartData.value[index]?.bookings || 0) > 0;

// SVG Coordinates
const chartTop = 20;
const chartBottom = 190;
const chartHeight = chartBottom - chartTop;

const getY = (val: number) => {
  const ratio = val / maxVal.value;
  return chartBottom - ratio * chartHeight;
};

const barWidth = 18;

const getBarX = (index: number) => {
  const totalBars = chartData.value.length;
  const availableWidth = 590 - 40;
  const gap = (availableWidth - totalBars * barWidth) / (totalBars + 1);
  return 40 + gap + index * (barWidth + gap);
};

const getBarY = (val: number) => {
  const h = getBarHeight(val);
  return chartBottom - h;
};

const getBarHeight = (val: number) => {
  if (val <= 0) return 4;
  const ratio = val / maxVal.value;
  return Math.max(ratio * chartHeight, 4);
};

const getTooltipLeft = (index: number) => {
  const x = getBarX(index) + barWidth / 2;
  return `${(x / 600) * 100}%`;
};

const getTooltipTop = (index: number) => {
  const item = chartData.value[index];
  const y = getBarY(item ? item.bookings : 0);
  return `${(y / 220) * 100 - 4}%`;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
