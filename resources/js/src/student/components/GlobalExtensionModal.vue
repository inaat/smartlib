<template>
  <div v-if="showExtensionModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
    <div class="bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl transform transition-all scale-100 border border-blue-100">
      <div class="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <Clock class="w-12 h-12" />
      </div>
      <h2 class="text-3xl font-semibold text-gray-800 mb-3 text-center">{{ isExpired ? "Time's Up!" : "Session Ending Soon" }}</h2>
      <p class="text-gray-500 mb-6 text-center leading-relaxed">
        Your session for Seat {{ expiredBooking?.seat?.seat_number }} {{ isExpired ? 'has ended' : 'will end in 15 minutes' }}.
      </p>

      <div v-if="!isExpired" class="p-4 bg-orange-50 rounded-xl border border-orange-100 mb-8 text-center">
        <p class="text-[10px] text-orange-700 font-semibold uppercase tracking-widest leading-tight">
          Extension Lock Notice
        </p>
        <p class="text-xs text-orange-600 mt-1">
          You must extend now. Within 10 minutes of expiry, priority shifts to the seat queue.
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-8">
        <button 
          v-for="mins in [30, 60, 120, 240]" 
          :key="mins"
          @click="selectedExtension = mins"
          :class="[
            'py-4 rounded-2xl font-semibold transition-all border-2',
            selectedExtension === mins 
              ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' 
              : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'
          ]"
        >
          +{{ mins >= 60 ? (mins/60) + 'h' : mins + 'm' }}
        </button>
      </div>

      <div class="flex flex-col gap-3">
        <button 
          @click="handleExtend"
          :disabled="extending"
          class="w-full bg-blue-600 text-white py-5 rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 disabled:opacity-50"
        >
          {{ extending ? 'Extending...' : 'Extend Session' }}
        </button>
        <button 
          @click="closeModal"
          class="w-full bg-white text-gray-400 py-4 rounded-2xl font-medium hover:text-gray-600 transition-all"
        >
          No thanks, I'm done
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useApp } from '@/shared/composables/useApp';
import { Clock } from 'lucide-vue-next';

const { showExtensionModal, expiredBooking, extendSeatBooking } = useApp();
const selectedExtension = ref(60);
const extending = ref(false);

const isExpired = computed(() => {
  if (!expiredBooking.value) return false;
  return new Date(expiredBooking.value.scheduled_end_time) <= new Date();
});

import { useSwal } from '@/shared/composables/useSwal';
const { showError } = useSwal();

const handleExtend = async () => {
  if (!expiredBooking.value) return;
  
  extending.value = true;
  try {
    const success = await extendSeatBooking(expiredBooking.value.id, selectedExtension.value);
    if (success) {
      showExtensionModal.value = false;
      expiredBooking.value = null;
    } else {
      showError('Extension Failed', 'Could not extend booking. The seat might be reserved by someone else.');
    }
  } catch (error) {
    console.error('Extension error:', error);
  } finally {
    extending.value = false;
  }
};

const closeModal = () => {
  showExtensionModal.value = false;
  expiredBooking.value = null;
};
</script>
