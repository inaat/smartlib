<template>
  <div v-if="queues.length > 0" class="bg-white rounded-xl shadow-sm border border-orange-200 p-6">
    <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
      <Users class="w-5 h-5 mr-2 text-orange-600" />
      Seat Waiting List
    </h2>
    
    <div class="space-y-4">
      <div 
        v-for="queue in queues" 
        :key="queue.id" 
        class="p-4 bg-orange-50 rounded-xl border border-orange-100 group transition-all hover:shadow-md"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="p-2 bg-white rounded-lg shadow-sm mr-3">
              <Armchair class="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 class="font-bold text-gray-800 text-sm">
                Seat {{ queue.seat?.seat_number }}
              </h3>
              <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                {{ queue.seat?.library?.name }}
              </p>
            </div>
          </div>
          <div class="text-right">
            <div :class="[
              'px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-1 inline-block',
              queue.status === 'notified' ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-orange-100 text-orange-700'
            ]">
              {{ queue.status === 'notified' ? 'Seat Ready!' : `Pos #${queue.queue_position}` }}
            </div>
            <p v-if="queue.status === 'notified'" class="text-[9px] text-green-600 font-bold">Expires in 5-Minutes</p>
          </div>
        </div>
        
        <div v-if="queue.status === 'notified'" class="mt-4">
          <router-link 
            :to="{ name: 'student-qr-checkin', query: { booking_id: 'auto' } }"
            class="w-full py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center"
          >
            Check In Now
          </router-link>
        </div>
        <div v-else class="mt-4 flex items-center justify-between text-[10px] text-gray-500 italic">
          <span>Joined {{ formatTime(queue.joined_at) }}</span>
          <span class="text-orange-600 font-bold">Estimated wait: ~15m</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Users, Armchair } from 'lucide-vue-next';

defineProps<{
  queues: any[]
}>();

const formatTime = (dateStr: string) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>
