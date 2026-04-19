<template>
  <div v-if="isLoading" class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-gray-600">Loading...</p>
    </div>
  </div>
  <div v-else-if="user && !user.isApproved" class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center max-w-md mx-auto p-6">
      <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Account Pending Approval</h2>
      <p class="text-gray-600 mb-4">
        Your account is waiting for admin approval. You'll receive an email once approved.
      </p>
      <button
        @click="refreshPage"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Check Status
      </button>
    </div>
  </div>
  <router-view v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { useSettings } from '@/shared/composables/useSettings';

const { user, isLoading } = useAuth();
const { fetchPublicSettings } = useSettings();

onMounted(() => {
  fetchPublicSettings();
});

const refreshPage = () => {
  window.location.reload();
};
</script>
