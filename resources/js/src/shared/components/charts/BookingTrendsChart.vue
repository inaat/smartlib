<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
  data: Array<Record<string, any>>;
  xKey?: string;
  yKey?: string;
  label?: string;
  color?: string;
  height?: number;
}>(), {
  xKey: 'label',
  yKey: 'value',
  label: 'Bookings',
  color: '#059669',
  height: 280
});

const activeIndex = ref<number | null>(null);
const tooltipX = ref(0);
const tooltipY = ref(0);

const paddingLeft = 45;
const paddingRight = 30;
const paddingTop = 25;
const paddingBottom = 40;

const chartWidth = 700;
const chartHeight = 260;

const innerWidth = chartWidth - paddingLeft - paddingRight;
const innerHeight = chartHeight - paddingTop - paddingBottom;

// Find max value for Y Axis with headroom
const maxVal = computed(() => {
  if (!props.data || props.data.length === 0) return 5;
  let max = 0;
  props.data.forEach(item => {
    const val = Number(item[props.yKey] || 0);
    if (val > max) max = val;
  });
  if (max === 0) return 5;
  return Math.ceil(max * 1.2);
});

// Grid ticks for Y Axis
const yTicks = computed(() => {
  const max = maxVal.value;
  return [0, Math.round(max * 0.25), Math.round(max * 0.5), Math.round(max * 0.75), max];
});

// Points calculation
const points = computed(() => {
  if (!props.data || props.data.length === 0) return [];
  const max = maxVal.value;
  const count = props.data.length;

  return props.data.map((item, index) => {
    const x = paddingLeft + (count > 1 ? (index * innerWidth) / (count - 1) : innerWidth / 2);
    const val = Number(item[props.yKey] || 0);
    const y = chartHeight - paddingBottom - (val * innerHeight) / max;
    return { x, y, value: val, label: String(item[props.xKey] || '') };
  });
});

// Line path
const linePath = computed(() => {
  const pts = points.value;
  if (pts.length === 0) return '';
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

  return pts.reduce((acc, point, idx) => {
    if (idx === 0) return `M ${point.x} ${point.y}`;
    const prev = pts[idx - 1];
    const cp1x = prev.x + (point.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (point.x - prev.x) / 2;
    const cp2y = point.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, '');
});

// Area fill path
const areaPath = computed(() => {
  const line = linePath.value;
  if (!line) return '';
  const pts = points.value;
  if (pts.length === 0) return '';
  const firstPt = pts[0];
  const lastPt = pts[pts.length - 1];
  const bottomY = chartHeight - paddingBottom;
  return `${line} L ${lastPt.x} ${bottomY} L ${firstPt.x} ${bottomY} Z`;
});

const handleMouseMove = (event: MouseEvent) => {
  if (!props.data || props.data.length === 0) return;
  const svg = event.currentTarget as SVGSVGElement;
  const rect = svg.getBoundingClientRect();
  const clientX = event.clientX - rect.left;

  const scaleX = chartWidth / rect.width;
  const svgX = clientX * scaleX;

  let nearestIdx = 0;
  let minDist = Infinity;

  const pts = points.value;
  for (let i = 0; i < pts.length; i++) {
    const dist = Math.abs(pts[i].x - svgX);
    if (dist < minDist) {
      minDist = dist;
      nearestIdx = i;
    }
  }

  activeIndex.value = nearestIdx;
  if (pts[nearestIdx]) {
    tooltipX.value = pts[nearestIdx].x;
    tooltipY.value = pts[nearestIdx].y;
  }
};

const handleTouchMove = (event: TouchEvent) => {
  if (!props.data || props.data.length === 0 || !event.touches[0]) return;
  const svg = event.currentTarget as SVGSVGElement;
  const rect = svg.getBoundingClientRect();
  const clientX = event.touches[0].clientX - rect.left;

  const scaleX = chartWidth / rect.width;
  const svgX = clientX * scaleX;

  let nearestIdx = 0;
  let minDist = Infinity;

  const pts = points.value;
  for (let i = 0; i < pts.length; i++) {
    const dist = Math.abs(pts[i].x - svgX);
    if (dist < minDist) {
      minDist = dist;
      nearestIdx = i;
    }
  }

  activeIndex.value = nearestIdx;
  if (pts[nearestIdx]) {
    tooltipX.value = pts[nearestIdx].x;
    tooltipY.value = pts[nearestIdx].y;
  }
};

const handleMouseLeave = () => {
  activeIndex.value = null;
};
</script>

<template>
  <div class="relative w-full font-outfit select-none">
    <div v-if="!data || data.length === 0" class="h-64 flex items-center justify-center text-slate-400 text-xs italic">
      No booking trend data for this period
    </div>
    <div v-else class="relative w-full">
      <svg
        viewBox="0 0 700 260"
        class="w-full h-auto overflow-visible cursor-crosshair touch-none"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @touchstart.passive="handleTouchMove"
        @touchmove.passive="handleTouchMove"
        @touchend="handleMouseLeave"
      >
        <defs>
          <linearGradient id="smartAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="color" stop-opacity="0.14" />
            <stop offset="100%" :stop-color="color" stop-opacity="0.0" />
          </linearGradient>
        </defs>

        <!-- Horizontal gridlines -->
        <line
          v-for="(tick, idx) in yTicks"
          :key="idx"
          :x1="paddingLeft"
          :y1="chartHeight - paddingBottom - (tick * innerHeight) / maxVal"
          :x2="chartWidth - paddingRight"
          :y2="chartHeight - paddingBottom - (tick * innerHeight) / maxVal"
          stroke="#f1f5f9"
          stroke-width="1"
          stroke-dasharray="4 4"
        />

        <!-- Bottom axis baseline line -->
        <line
          :x1="paddingLeft"
          :y1="chartHeight - paddingBottom"
          :x2="chartWidth - paddingRight"
          :y2="chartHeight - paddingBottom"
          stroke="#e2e8f0"
          stroke-width="1"
        />

        <!-- Left Y Axis Labels -->
        <text
          v-for="(tick, idx) in yTicks"
          :key="'lbl-y-' + idx"
          :x="paddingLeft - 10"
          :y="chartHeight - paddingBottom - (tick * innerHeight) / maxVal + 4"
          text-anchor="end"
          font-size="9.5"
          fill="#64748b"
          font-weight="500"
        >
          {{ tick }}
        </text>

        <!-- X Axis Labels -->
        <text
          v-for="(pt, idx) in points.filter((_, i) => i % Math.max(1, Math.floor(points.length / 8)) === 0 || i === points.length - 1)"
          :key="'lbl-x-' + idx"
          :x="pt.x"
          :y="chartHeight - paddingBottom + 20"
          text-anchor="middle"
          font-size="9.5"
          fill="#64748b"
          font-weight="500"
        >
          {{ pt.label }}
        </text>

        <!-- Area Fill -->
        <path
          v-if="areaPath"
          :d="areaPath"
          fill="url(#smartAreaGrad)"
        />

        <!-- Fine Line Stroke (Thin & Sleek) -->
        <path
          v-if="linePath"
          :d="linePath"
          fill="none"
          :stroke="color"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="transition-all duration-300"
        />

        <!-- Active Hover Guide Line and Single Dot -->
        <g v-if="activeIndex !== null && points[activeIndex]">
          <!-- Vertical guide line -->
          <line
            :x1="tooltipX"
            :y1="paddingTop"
            :x2="tooltipX"
            :y2="chartHeight - paddingBottom"
            stroke="#cbd5e1"
            stroke-width="1.2"
            stroke-dasharray="3 3"
          />

          <!-- Single Highlighted Dot on Hover -->
          <circle
            :cx="tooltipX"
            :cy="points[activeIndex].y"
            r="3.5"
            :fill="color"
            stroke="#ffffff"
            stroke-width="1.8"
            class="shadow"
          />
        </g>
      </svg>

      <!-- Custom HTML Overlay Tooltip -->
      <div
        v-if="activeIndex !== null && points[activeIndex]"
        class="absolute z-50 rounded-xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg pointer-events-none transition-all duration-150 text-left"
        :style="{
          left: (tooltipX / chartWidth * 100) > 70 ? 'auto' : `${(tooltipX / chartWidth * 100)}%`,
          right: (tooltipX / chartWidth * 100) > 70 ? `${100 - (tooltipX / chartWidth * 100)}%` : 'auto',
          top: '12px'
        }"
      >
        <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
          {{ points[activeIndex].label }}
        </p>
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: color }"></span>
          <span class="text-xs font-semibold text-slate-700">
            {{ points[activeIndex].value }} {{ label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
