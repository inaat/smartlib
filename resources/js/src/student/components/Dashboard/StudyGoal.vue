<template>
  <div class="bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden relative font-outfit text-left">
    <div class="relative z-10 flex flex-col space-y-5">
      <!-- Title & Header controls -->
      <div class="flex items-center justify-between gap-4 border-b border-slate-100/80 pb-4">
        <div class="flex items-center space-x-3 text-left">
          <div class="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Target class="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-800 tracking-tight leading-snug">Target Progress</h3>
            <p class="text-[11px] text-slate-400 font-medium">Track your study goals and streak progress.</p>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <!-- Mode Switcher (Weekly / Monthly) -->
          <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
            <button
              @click="activeGoalTab = 'weekly'"
              :class="[
                'px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all duration-200 cursor-pointer',
                activeGoalTab === 'weekly'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              ]"
            >
              Weekly
            </button>
            <button
              @click="activeGoalTab = 'monthly'"
              :class="[
                'px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all duration-200 cursor-pointer',
                activeGoalTab === 'monthly'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              ]"
            >
              Monthly
            </button>
          </div>

          <!-- Edit Goal Button -->
          <button
            @click="openGoalModal"
            class="p-1.5 bg-slate-50 border border-slate-200/80 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors cursor-pointer"
            title="Set Target Goals"
          >
            <Settings2 class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Main Progress Box (Clean White / Slate Theme) -->
      <div class="bg-slate-50/70 border border-slate-100 rounded-2xl p-5 relative overflow-hidden">
        <div class="flex flex-col sm:flex-row items-center gap-5">
          <!-- SVG Circular Progress Ring -->
          <div class="relative flex items-center justify-center flex-shrink-0">
            <svg class="w-20 h-20 transform -rotate-90">
              <!-- Background circle -->
              <circle
                cx="40"
                cy="40"
                r="33"
                stroke="#e2e8f0"
                stroke-width="6"
                fill="transparent"
              />
              <!-- Progress circle -->
              <circle
                cx="40"
                cy="40"
                r="33"
                stroke="url(#indigoBlueGradient)"
                stroke-width="6"
                fill="transparent"
                :stroke-dasharray="207.3"
                :stroke-dashoffset="dashOffset"
                stroke-linecap="round"
                class="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="indigoBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="100%" stop-color="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <!-- Center Percentage Text -->
            <div class="absolute flex flex-col items-center justify-center text-center">
              <span class="text-base font-black tracking-tight text-slate-800 leading-none">{{ currentProgress }}%</span>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Done</span>
            </div>
          </div>

          <!-- Progress Details -->
          <div class="flex-1 min-w-0 w-full space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {{ activeGoalTab === 'weekly' ? 'Weekly Target' : 'Monthly Target' }}
              </span>
              <span class="text-[11px] font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                Goal: {{ activeGoalTab === 'weekly' ? weeklyGoal : monthlyGoal }}h
              </span>
            </div>

            <div class="flex items-baseline space-x-1.5">
              <span class="text-2xl font-extrabold text-slate-800 tracking-tight leading-none">{{ currentHours }}</span>
              <span class="text-xs text-slate-400 font-medium">/ {{ activeGoalTab === 'weekly' ? weeklyGoal : monthlyGoal }} hrs studied</span>
            </div>

            <!-- Clean Progress Bar -->
            <div class="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
              <div 
                class="bg-indigo-500 h-full rounded-full transition-all duration-1000"
                :style="{ width: `${currentProgress}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Daily Streak Card -->
      <div class="bg-orange-50/60 border border-orange-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
        <div class="flex items-center space-x-3 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
            <Flame class="w-4.5 h-4.5 fill-current" />
          </div>
          <div class="min-w-0 text-left">
            <div class="flex items-center space-x-2">
              <h4 class="text-xs font-bold text-slate-800 tracking-tight">{{ streak ?? 0 }} Days Active Streak</h4>
              <span v-if="(streak ?? 0) >= 3" class="text-[9px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md border border-orange-200 uppercase tracking-wider">
                🔥 On Fire!
              </span>
            </div>
            <p class="text-[11px] text-slate-500 font-medium truncate mt-0.5">Keep learning daily to increase your streak count.</p>
          </div>
        </div>
      </div>

      <!-- 3 Metrics Grid -->
      <div class="grid grid-cols-3 gap-3 pt-1">
        <!-- Studied Today -->
        <div class="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left">
          <div class="flex items-center space-x-1.5 text-slate-400 mb-1">
            <Clock class="w-3.5 h-3.5 text-blue-500" />
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today</span>
          </div>
          <span class="text-base font-extrabold text-slate-800 tracking-tight">{{ formattedHoursToday }}h</span>
        </div>

        <!-- Target Goal -->
        <div class="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left">
          <div class="flex items-center space-x-1.5 text-slate-400 mb-1">
            <Target class="w-3.5 h-3.5 text-indigo-500" />
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target</span>
          </div>
          <span class="text-base font-extrabold text-slate-800 tracking-tight">{{ activeGoalTab === 'weekly' ? weeklyGoal : monthlyGoal }}h</span>
        </div>

        <!-- Remaining -->
        <div class="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left">
          <div class="flex items-center space-x-1.5 text-slate-400 mb-1">
            <TrendingUp class="w-3.5 h-3.5 text-emerald-500" />
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Remaining</span>
          </div>
          <span class="text-base font-extrabold text-slate-800 tracking-tight">{{ formattedRemainingHours }}h</span>
        </div>
      </div>
    </div>

    <!-- Set Study Goals Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in font-outfit">
        <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100 p-6 space-y-6 text-left">
          <!-- Modal Header -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex items-center space-x-3">
              <div class="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 flex items-center justify-center shadow-2xs">
                <Target class="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-800 leading-tight">Set Study Target Goals</h3>
                <p class="text-[11px] font-medium text-slate-400">Customize your target hours</p>
              </div>
            </div>
            <button @click="showModal = false" class="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Goal Inputs Form -->
          <div class="space-y-5">
            <!-- Weekly Goal Field -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Weekly Target Goal (Hours)
                </label>
                <span v-if="![10, 15, 20, 30, 40].includes(tempWeeklyGoal)" class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                  Custom: {{ tempWeeklyGoal }}h
                </span>
              </div>
              <input
                v-model.number="tempWeeklyGoal"
                type="number"
                min="1"
                max="168"
                placeholder="Enter custom hours (e.g. 25)"
                class="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
              <p class="text-[10px] font-medium text-slate-400 mt-1">Type custom goal hours or click a preset below:</p>
              <!-- Presets -->
              <div class="flex items-center space-x-2 mt-2 flex-wrap gap-y-1">
                <span class="text-[10px] font-semibold text-slate-400">Presets:</span>
                <button
                  v-for="preset in [10, 15, 20, 30, 40]"
                  :key="preset"
                  type="button"
                  @click="tempWeeklyGoal = preset"
                  :class="[
                    'px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer',
                    tempWeeklyGoal === preset ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  ]"
                >
                  {{ preset }}h
                </button>
              </div>
            </div>

            <!-- Monthly Goal Field -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Monthly Target Goal (Hours)
                </label>
                <span v-if="![40, 60, 80, 100, 120].includes(tempMonthlyGoal)" class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                  Custom: {{ tempMonthlyGoal }}h
                </span>
              </div>
              <input
                v-model.number="tempMonthlyGoal"
                type="number"
                min="1"
                max="720"
                placeholder="Enter custom hours (e.g. 90)"
                class="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
              <p class="text-[10px] font-medium text-slate-400 mt-1">Type custom goal hours or click a preset below:</p>
              <!-- Presets -->
              <div class="flex items-center space-x-2 mt-2 flex-wrap gap-y-1">
                <span class="text-[10px] font-semibold text-slate-400">Presets:</span>
                <button
                  v-for="preset in [40, 60, 80, 100, 120]"
                  :key="preset"
                  type="button"
                  @click="tempMonthlyGoal = preset"
                  :class="[
                    'px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer',
                    tempMonthlyGoal === preset ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  ]"
                >
                  {{ preset }}h
                </button>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="saveGoals"
              :disabled="saving"
              class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center space-x-1.5 disabled:opacity-50"
            >
              <RefreshCw v-if="saving" class="w-3.5 h-3.5 animate-spin" />
              <span>{{ saving ? 'Saving...' : 'Save Target Goals' }}</span>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Target, Clock, TrendingUp, Flame, Settings2, X, RefreshCw } from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showSuccess, showError } = useSwal();

const props = withDefaults(defineProps<{
  streak?: number;
  weeklyHours?: number;
  weeklyGoal?: number;
  weeklyProgress?: number;
  monthlyHours?: number;
  monthlyGoal?: number;
  monthlyProgress?: number;
  hoursToday?: number;
}>(), {
  streak: 0,
  weeklyHours: 0,
  weeklyGoal: 20,
  weeklyProgress: 0,
  monthlyHours: 0,
  monthlyGoal: 80,
  monthlyProgress: 0,
  hoursToday: 0
});

const emit = defineEmits(['goals-updated']);

const activeGoalTab = ref<'weekly' | 'monthly'>('weekly');
const showModal = ref(false);
const saving = ref(false);

const tempWeeklyGoal = ref(20);
const tempMonthlyGoal = ref(80);

const openGoalModal = () => {
  tempWeeklyGoal.value = props.weeklyGoal || 20;
  tempMonthlyGoal.value = props.monthlyGoal || 80;
  showModal.value = true;
};

const saveGoals = async () => {
  if (tempWeeklyGoal.value < 1 || tempMonthlyGoal.value < 1) {
    showError('Invalid Goal', 'Please enter a goal of at least 1 hour.');
    return;
  }

  try {
    saving.value = true;
    await studentAPI.updateStudyGoals({
      weekly_goal_hours: tempWeeklyGoal.value,
      monthly_goal_hours: tempMonthlyGoal.value
    });
    showSuccess('Goals Saved!', 'Your weekly and monthly study targets have been updated.');
    showModal.value = false;
    emit('goals-updated');
  } catch (err: any) {
    console.error('Failed to update study goals:', err);
    showError('Update Failed', err.response?.data?.message || 'Failed to update study goals');
  } finally {
    saving.value = false;
  }
};

const currentProgress = computed(() => {
  if (activeGoalTab.value === 'weekly') {
    return props.weeklyProgress ?? 0;
  }
  return props.monthlyProgress ?? 0;
});

const currentHours = computed(() => {
  if (activeGoalTab.value === 'weekly') {
    return (props.weeklyHours ?? 0).toFixed(1);
  }
  return (props.monthlyHours ?? 0).toFixed(1);
});

// SVG circular math (radius 33 -> 2 * PI * 33 = 207.3)
const dashOffset = computed(() => {
  const percent = Math.min(100, Math.max(0, currentProgress.value));
  const circumference = 207.3;
  return circumference - (percent / 100) * circumference;
});

const formattedHoursToday = computed(() => {
  const hrs = props.hoursToday ?? 0;
  return hrs.toFixed(1);
});

const formattedRemainingHours = computed(() => {
  if (activeGoalTab.value === 'weekly') {
    const goal = props.weeklyGoal ?? 20;
    const done = props.weeklyHours ?? 0;
    return Math.max(0, goal - done).toFixed(1);
  } else {
    const goal = props.monthlyGoal ?? 80;
    const done = props.monthlyHours ?? 0;
    return Math.max(0, goal - done).toFixed(1);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
