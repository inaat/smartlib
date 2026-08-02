<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 flex items-center">
        <Settings class="w-8 h-8 mr-3 text-indigo-600" />
        System Settings
      </h1>
      <p class="text-gray-500 mt-2">Update global application name and branding logo.</p>
    </div>

    <div class="grid grid-cols-1 gap-8">
      <!-- General Branding -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-50 bg-gray-50/50">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <Layout class="w-5 h-5 mr-2 text-indigo-500" />
            General Branding
          </h2>
        </div>
        
        <form @submit.prevent="saveSettings" class="p-8 space-y-8">
          <!-- App Name -->
          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700 uppercase tracking-wider">Application Name</label>
            <input
              v-model="form.app_name"
              type="text"
              placeholder="e.g. SmartLib"
              class="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none text-lg"
            />
            <p class="text-xs text-gray-400">This name will be used across the entire application and email communications.</p>
          </div>

          <!-- App Logo -->
          <div class="space-y-4">
            <label class="text-sm font-bold text-gray-700 uppercase tracking-wider">Application Logo</label>
            
            <div class="flex items-start space-x-6">
              <div class="relative group">
                <div class="w-32 h-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-indigo-300">
                  <img v-if="previewLogo || form.current_logo" :src="(previewLogo || form.current_logo) || undefined" class="w-full h-full object-contain p-2" />
                  <Image v-else class="w-10 h-10 text-gray-300" />
                </div>
              </div>
              
              <div class="flex-1 space-y-4">
                <div class="flex items-center space-x-3">
                  <label class="cursor-pointer px-5 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 font-bold transition-all shadow-sm flex items-center">
                    <Upload class="w-4 h-4 mr-2" />
                    Upload New Logo
                    <input type="file" @change="onFileChange" class="hidden" accept="image/*" />
                  </label>
                  <button v-if="previewLogo" @click="clearFile" type="button" class="px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium">
                    Cancel
                  </button>
                </div>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Recommended: Transparent PNG or SVG. Max size 2MB.<br/>
                  Ideal aspect ratio is square or rectangle (horizontal).
                </p>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="pt-6 border-t border-gray-50 flex justify-end">
            <button
              type="submit"
              :disabled="saving"
              class="px-8 py-3.5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-100 transition-all disabled:opacity-50 flex items-center space-x-3"
            >
              <Save v-if="!saving" class="w-5 h-5" />
              <RefreshCw v-else class="w-5 h-5 animate-spin" />
              <span>{{ saving ? 'Saving Changes...' : 'Save All Changes' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Settings, Layout, Image, Upload, Save, RefreshCw } from 'lucide-vue-next';
import { ownerAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const saving = ref(false);
const previewLogo = ref<string | null>(null);
const logoFile = ref<File | null>(null);
const { showSuccess, showError } = useSwal();

const form = ref({
  app_name: '',
  current_logo: null as string | null
});

const fetchSettings = async () => {
  try {
    const data = await ownerAPI.getSettings();
    form.value.app_name = data.app_name;
    form.value.current_logo = data.app_logo;
  } catch (error) {
    console.error('Error fetching settings:', error);
  }
};

onMounted(fetchSettings);

const onFileChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
    logoFile.value = file;
    previewLogo.value = URL.createObjectURL(file);
  }
};

const clearFile = () => {
  logoFile.value = null;
  previewLogo.value = null;
};

const saveSettings = async () => {
  saving.value = true;
  try {
    const formData = new FormData();
    formData.append('app_name', form.value.app_name);
    if (logoFile.value) {
      formData.append('app_logo', logoFile.value);
    }

    await ownerAPI.updateSettings(formData);
    clearFile();
    await fetchSettings();
    showSuccess('Settings updated successfully!');
  } catch (error: any) {
    console.error('Error updating settings:', error);
    const message = error.response?.data?.message || 'Failed to update settings.';
    const errors = error.response?.data?.errors;
    const errorText = errors ? Object.values(errors).flat().join('\n') : '';
    showError(message, errorText);
  } finally {
    saving.value = false;
  }
};
</script>
