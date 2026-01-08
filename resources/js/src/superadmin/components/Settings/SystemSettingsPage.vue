<template>
  <div class="p-6 space-y-6 bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 tracking-tight">System Settings</h1>
        <p class="text-gray-500 mt-1">Configure global application parameters and appearance</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchSettings"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center space-x-2 shadow-sm disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4 text-gray-500', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-semibold text-gray-700">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button
          @click="saveAllSettings"
          :disabled="saving || loading"
          class="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50"
        >
          <Save v-if="!saving" class="w-4 h-4" />
          <RefreshCw v-else class="w-4 h-4 animate-spin" />
          <span class="text-sm font-semibold">{{ saving ? 'Saving Changes...' : 'Save All Changes' }}</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p class="text-gray-500 font-medium">Loading system settings...</p>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Sidebar Navigation -->
      <div class="lg:col-span-1 space-y-2">
        <button
          v-for="(_, key) in settingsGroups"
          :key="key"
          @click="activeGroup = key"
          :class="[
            'w-full text-left px-4 py-3 rounded-xl transition-all flex items-center space-x-3 font-medium',
            activeGroup === key 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
          ]"
        >
          <component :is="getGroupIcon(key)" class="w-5 h-5" />
          <span class="capitalize">{{ key }} Settings</span>
        </button>
      </div>

      <!-- Settings Content -->
      <div class="lg:col-span-3">
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="px-8 py-6 border-b border-gray-50 bg-gray-50/30">
            <h3 class="text-xl font-bold text-gray-900 capitalize">{{ activeGroup }} Configuration</h3>
            <p class="text-gray-500 text-sm mt-1">Manage {{ activeGroup }} related system parameters</p>
          </div>

          <div class="p-8 space-y-8">
            <div v-for="setting in settingsGroups[activeGroup]" :key="setting.key" class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div class="md:col-span-1">
                <label class="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-1">
                  {{ setting.label }}
                </label>
                <p class="text-xs text-gray-500 leading-relaxed">{{ setting.description }}</p>
              </div>

              <div class="md:col-span-2">
                <!-- Boolean Type -->
                <div v-if="setting.type === 'boolean'" class="flex items-center">
                  <button
                    @click="toggleBoolean(setting)"
                    :class="[
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
                      setting.value === 'true' || setting.value === true ? 'bg-indigo-600' : 'bg-gray-200'
                    ]"
                  >
                    <span
                      aria-hidden="true"
                      :class="[
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        setting.value === 'true' || setting.value === true ? 'translate-x-5' : 'translate-x-0'
                      ]"
                    />
                  </button>
                  <span class="ml-3 text-sm font-medium text-gray-900">
                    {{ (setting.value === 'true' || setting.value === true) ? 'Enabled' : 'Disabled' }}
                  </span>
                </div>

                <!-- Color Type -->
                <div v-else-if="setting.type === 'color'" class="flex items-center space-x-3">
                  <input
                    v-model="setting.value"
                    type="color"
                    class="h-10 w-20 p-1 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer"
                  />
                  <input
                    v-model="setting.value"
                    type="text"
                    class="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none text-sm font-mono"
                  />
                </div>

                <!-- Number Type -->
                <input
                  v-else-if="setting.type === 'number'"
                  v-model="setting.value"
                  type="number"
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                />

                <!-- Textarea Type -->
                <textarea
                  v-else-if="setting.type === 'textarea'"
                  v-model="setting.value"
                  rows="4"
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                ></textarea>

                <!-- Default Text Type -->
                <input
                  v-else
                  v-model="setting.value"
                  type="text"
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div class="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex justify-end">
            <button
              @click="saveAllSettings"
              :disabled="saving"
              class="px-8 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 flex items-center space-x-2"
            >
              <Save v-if="!saving" class="w-5 h-5" />
              <RefreshCw v-else class="w-5 h-5 animate-spin" />
              <span>{{ saving ? 'Saving Changes...' : 'Save Changes' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  Save, 
  RefreshCw, 
  Globe, 
  Palette, 
  Calendar, 
  ShieldCheck,
  Bell,
  Mail,
  Database
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

const loading = ref(true);
const saving = ref(false);
const activeGroup = ref('general');
const settingsGroups = ref<Record<string, any[]>>({});

const fetchSettings = async () => {
  loading.value = true;
  try {
    const data = await adminAPI.getSettings();
    settingsGroups.value = data;
    // Set active group to first available if current doesn't exist
    if (!settingsGroups.value[activeGroup.value]) {
      activeGroup.value = Object.keys(settingsGroups.value)[0] || 'general';
    }
  } catch (error) {
    console.error('Error fetching settings:', error);
  } finally {
    loading.value = false;
  }
};

const saveAllSettings = async () => {
  saving.value = true;
  try {
    // Flatten all settings from all groups
    const allSettings = Object.values(settingsGroups.value).flat();
    await adminAPI.updateSettings(allSettings);
    alert('System settings updated successfully!');
  } catch (error) {
    console.error('Error saving settings:', error);
    alert('Failed to save settings. Please try again.');
  } finally {
    saving.value = false;
  }
};

const toggleBoolean = (setting: any) => {
  const current = setting.value === 'true' || setting.value === true;
  setting.value = !current;
};

const getGroupIcon = (group: string) => {
  switch (group.toLowerCase()) {
    case 'general': return Globe;
    case 'appearance': return Palette;
    case 'booking': return Calendar;
    case 'security': return ShieldCheck;
    case 'notifications': return Bell;
    case 'email': return Mail;
    default: return Database;
  }
};

onMounted(() => {
  fetchSettings();
});
</script>
