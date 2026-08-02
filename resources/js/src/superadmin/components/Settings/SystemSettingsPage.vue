<template>
  <div class="space-y-6">
    <!-- Top Action Bar Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
      <div class="text-left">
        <h2 class="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <Sliders class="w-5 h-5 text-purple-600" />
          System Settings & Governance
        </h2>
        <p class="text-xs text-slate-500 font-normal mt-0.5">Configure global rules, booking limits, inventory parameters, and security policies.</p>
      </div>

      <div class="flex items-center space-x-3">
        <button
          @click="fetchSettings"
          :disabled="loading"
          class="px-3.5 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer"
          title="Reload Settings"
        >
          <RefreshCw :class="['w-4 h-4 text-slate-500', loading ? 'animate-spin' : '']" />
          <span>{{ loading ? 'Loading...' : 'Refresh' }}</span>
        </button>

        <button
          @click="resetToDefaults"
          :disabled="resetting || loading"
          class="px-3.5 py-2 bg-rose-50 border border-rose-200/60 text-rose-700 hover:bg-rose-100 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer"
          title="Reset all system settings back to default values"
        >
          <RotateCcw :class="['w-4 h-4 text-rose-600', resetting ? 'animate-spin' : '']" />
          <span>{{ resetting ? 'Resetting...' : 'Reset Defaults' }}</span>
        </button>

        <button
          @click="saveAllSettings"
          :disabled="saving || loading"
          class="px-5 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
        >
          <Save v-if="!saving" class="w-4 h-4" />
          <RefreshCw v-else class="w-4 h-4 animate-spin" />
          <span>{{ saving ? 'Saving...' : 'Save All Changes' }}</span>
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
      <div class="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin mb-4"></div>
      <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Loading System Settings...</p>
    </div>

    <!-- Main Layout Grid -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      <!-- Category Navigation Sidebar -->
      <div class="lg:col-span-1 space-y-2">
        <button
          v-for="groupKey in groupKeys"
          :key="groupKey"
          @click="activeGroup = groupKey"
          :class="[
            'w-full text-left px-4 py-3.5 rounded-2xl transition-all flex items-center space-x-3 font-bold text-xs cursor-pointer border',
            activeGroup === groupKey 
              ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/10' 
              : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-100 hover:border-slate-200'
          ]"
        >
          <component 
            :is="getGroupIcon(groupKey)" 
            :class="['w-4 h-4', activeGroup === groupKey ? 'text-white' : 'text-purple-600']" 
          />
          <span class="capitalize">{{ formatGroupName(groupKey) }}</span>
        </button>
      </div>

      <!-- Settings Form Card -->
      <div class="lg:col-span-3">
        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between">
          
          <!-- Card Header -->
          <div class="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between text-left">
            <div class="flex items-center space-x-3">
              <div class="p-2.5 bg-purple-50 border border-purple-100 rounded-xl text-purple-600">
                <component :is="getGroupIcon(activeGroup)" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider">{{ formatGroupName(activeGroup) }} Settings</h3>
                <p class="text-xs text-slate-500 mt-0.5 font-normal">Configure and manage parameters for {{ formatGroupName(activeGroup).toLowerCase() }}.</p>
              </div>
            </div>
          </div>

          <!-- Card Body: Settings Rows -->
          <div class="p-8 space-y-6 divide-y divide-slate-100">
            <div 
              v-for="(setting, index) in settingsGroups[activeGroup]" 
              :key="setting.key" 
              :class="['grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-left', index > 0 ? 'pt-6' : '']"
            >
              <!-- Setting Metadata Info -->
              <div class="md:col-span-1 pr-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  {{ setting.label }}
                </label>
                <p class="text-[11px] text-slate-500 leading-relaxed font-normal">{{ setting.description }}</p>
              </div>

              <!-- Setting Input Control -->
              <div class="md:col-span-2">
                
                <!-- Boolean Switch Control -->
                <div v-if="setting.type === 'boolean'" class="flex items-center space-x-3">
                  <button
                    type="button"
                    @click="toggleBoolean(setting)"
                    :class="[
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2',
                      isTrue(setting.value) ? 'bg-purple-600' : 'bg-slate-200'
                    ]"
                  >
                    <span
                      aria-hidden="true"
                      :class="[
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        isTrue(setting.value) ? 'translate-x-5' : 'translate-x-0'
                      ]"
                    />
                  </button>
                  <span :class="['text-xs font-bold', isTrue(setting.value) ? 'text-purple-700' : 'text-slate-500']">
                    {{ isTrue(setting.value) ? 'Enabled' : 'Disabled' }}
                  </span>
                </div>

                <!-- Number Input Control -->
                <div v-else-if="setting.type === 'number'" class="relative max-w-xs">
                  <input
                    v-model="setting.value"
                    type="number"
                    class="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-bold text-slate-700"
                  />
                </div>

                <!-- Textarea Control -->
                <textarea
                  v-else-if="setting.type === 'textarea'"
                  v-model="setting.value"
                  rows="3"
                  class="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-semibold text-slate-700 resize-none"
                ></textarea>

                <!-- Color Picker Control -->
                <div v-else-if="setting.type === 'color'" class="flex items-center space-x-3 max-w-xs">
                  <input
                    v-model="setting.value"
                    type="color"
                    class="h-9 w-14 p-1 bg-white border border-slate-200 rounded-xl cursor-pointer"
                  />
                  <input
                    v-model="setting.value"
                    type="text"
                    class="flex-1 px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-mono font-bold text-slate-700"
                  />
                </div>

                <!-- Default Text Input Control -->
                <input
                  v-else
                  v-model="setting.value"
                  type="text"
                  class="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-semibold text-slate-700"
                />
              </div>
            </div>
          </div>

          <!-- Card Footer Save Button -->
          <div class="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Unsaved changes persist locally until saved
            </span>
            <button
              @click="saveAllSettings"
              :disabled="saving"
              class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2 cursor-pointer"
            >
              <Save v-if="!saving" class="w-4 h-4" />
              <RefreshCw v-else class="w-4 h-4 animate-spin" />
              <span>{{ saving ? 'Saving...' : 'Save Settings' }}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  Save, 
  RefreshCw, 
  Globe, 
  Palette, 
  Calendar, 
  ShieldCheck,
  Bell,
  Sliders,
  RotateCcw,
  BookOpen
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showSuccess, showError, showConfirm } = useSwal();

const loading = ref(true);
const saving = ref(false);
const resetting = ref(false);
const activeGroup = ref('general');
const settingsGroups = ref<Record<string, any[]>>({});

const groupKeys = computed(() => Object.keys(settingsGroups.value));

const fetchSettings = async () => {
  loading.value = true;
  try {
    const data = await adminAPI.getSettings();
    settingsGroups.value = data;
    if (groupKeys.value.length > 0 && !groupKeys.value.includes(activeGroup.value)) {
      activeGroup.value = groupKeys.value[0];
    }
  } catch (error) {
    console.error('Error fetching settings:', error);
    showError('Error', 'Failed to load system settings');
  } finally {
    loading.value = false;
  }
};

const saveAllSettings = async () => {
  saving.value = true;
  try {
    const allSettings = Object.values(settingsGroups.value).flat();
    await adminAPI.updateSettings(allSettings);
    showSuccess('Settings Saved!', 'All system settings have been updated successfully.');
  } catch (error) {
    console.error('Error saving settings:', error);
    showError('Save Failed', 'Failed to update system settings. Please try again.');
  } finally {
    saving.value = false;
  }
};

const resetToDefaults = async () => {
  const confirmed = await showConfirm(
    'Reset All System Settings?',
    'This will restore all system settings, rules, limits, and configurations back to default values. Are you sure?',
    'Yes, Reset to Defaults'
  );

  if (!confirmed) return;

  resetting.value = true;
  try {
    const res = await adminAPI.resetSettings();
    settingsGroups.value = res.settings;
    if (groupKeys.value.length > 0 && !groupKeys.value.includes(activeGroup.value)) {
      activeGroup.value = groupKeys.value[0];
    }
    showSuccess('Reset Completed!', 'System settings have been reset to default values.');
  } catch (error) {
    console.error('Error resetting settings:', error);
    showError('Reset Failed', 'Could not reset system settings to defaults.');
  } finally {
    resetting.value = false;
  }
};

const isTrue = (val: any) => {
  return val === 'true' || val === true || val === 1 || val === '1';
};

const toggleBoolean = (setting: any) => {
  setting.value = isTrue(setting.value) ? 'false' : 'true';
};

const formatGroupName = (group: string) => {
  switch (group.toLowerCase()) {
    case 'general': return 'General System';
    case 'booking': return 'Seat Booking';
    case 'inventory': return 'Library & Books';
    case 'notifications': return 'Notifications';
    case 'security': return 'Security & Access';
    case 'appearance': return 'Appearance';
    default: return group;
  }
};

const getGroupIcon = (group: string) => {
  switch (group.toLowerCase()) {
    case 'general': return Globe;
    case 'booking': return Calendar;
    case 'inventory': return BookOpen;
    case 'notifications': return Bell;
    case 'security': return ShieldCheck;
    case 'appearance': return Palette;
    default: return Sliders;
  }
};

onMounted(fetchSettings);
</script>
