<template>
  <div v-if="showExtensionModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
    <div class="bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl transform transition-all scale-100 border border-blue-100">
      <div class="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <Clock class="w-12 h-12" />
      </div>
      <h2 class="text-3xl font-black text-gray-800 mb-3 text-center">{{ isExpired ? "Time's Up!" : "Session Ending Soon" }}</h2>
      <p class="text-gray-500 mb-10 text-center leading-relaxed">
        Your session for <strong>Seat {{ expiredBooking?.seat?.seat_number }}</strong> {{ isExpired ? 'has ended' : 'will end in 5 minutes' }}. Would you like to extend your stay?
      </p>
      
      <div class="grid grid-cols-2 gap-4 mb-8">
        <button 
          v-for="mins in [30, 60, 120, 240]" 
          :key="mins"
          @click="selectedExtension = mins"
          :class="[
            'py-4 rounded-2xl font-bold transition-all border-2',
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
          class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 disabled:opacity-50"
        >
          {{ extending ? 'Extending...' : 'Extend Session' }}
        </button>
        <button 
          @click="closeModal"
          class="w-full bg-white text-gray-400 py-4 rounded-2xl font-bold hover:text-gray-600 transition-all"
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

const handleExtend = async () => {
  if (!expiredBooking.value) return;
  
  extending.value = true;
  try {
    const success = await extendSeatBooking(expiredBooking.value.id, selectedExtension.value);
    if (success) {
      showExtensionModal.value = false;
      expiredBooking.value = null;
    } else {
      alert('Could not extend booking. The seat might be reserved by someone else.');
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
