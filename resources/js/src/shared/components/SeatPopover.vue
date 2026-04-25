<template>
  <div :class="[
    'absolute left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] transition-all duration-300',
    position === 'top' ? 'bottom-[110%]' : 'top-[110%]'
  ]">
    <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
      <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
      <div :class="['w-2 h-2 rounded-full', statusDot]"></div>
    </div>
    <div class="p-4 space-y-4">
      <div class="flex items-center space-x-3">
        <div :class="['w-10 h-10 rounded-xl flex items-center justify-center border transition-colors', isAvailable ? 'bg-green-50 text-green-600 border-green-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100']">
          <User class="w-5 h-5" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-bold text-gray-900 truncate">{{ occupancyLabel }}</p>
          <p class="text-xs font-medium text-gray-500">
            {{ displayTimeLeft !== null ? displayTimeLeft + ' mins left' : (isAvailable ? 'Ready for booking' : 'Currently Unavailable') }}
          </p>
        </div>
      </div>

      <!-- Amenities Section -->
      <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
        <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.has_computer ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-400']">
          <Monitor class="w-4 h-4 mb-1" />
          <span class="text-[8px] font-black uppercase tracking-tighter">PC</span>
        </div>
        <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.near_window ? 'bg-sky-50 text-sky-600' : 'bg-gray-50 text-gray-400']">
          <Layout class="w-4 h-4 mb-1" />
          <span class="text-[8px] font-black uppercase tracking-tighter">Window</span>
        </div>
        <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.socket_count > 0 ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-400']">
          <Zap class="w-4 h-4 mb-1" />
          <span class="text-[8px] font-black uppercase tracking-tighter">{{ seat.socket_count }} Slots</span>
        </div>
      </div>

      <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2 flex items-center justify-between">
        <span>{{ sectionName }}</span>
        <span class="capitalize">{{ seat.seat_type }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 
  User, 
  Monitor, 
  Layout, 
  Zap 
} from 'lucide-vue-next';

const props = defineProps<{
  seat: any;
  sectionName: string;
  position: 'top' | 'bottom';
}>();

const isAvailable = computed(() => props.seat.status === 'available');

const occupancyLabel = computed(() => {
  if (props.seat.current_booking?.user_name) return props.seat.current_booking.user_name;
  if (isAvailable.value) return 'Available';
  if (props.seat.status === 'maintenance') return 'Under Maintenance';
  return 'Occupied';
});

const displayTimeLeft = computed(() => {
  // Check librarian panel path first
  if (props.seat.current_booking?.minutes_left !== undefined && props.seat.current_booking?.minutes_left !== null) {
     return props.seat.current_booking.minutes_left;
  }
  // Check student panel path
  if (props.seat.remaining_minutes !== undefined && props.seat.remaining_minutes !== null) {
     return props.seat.remaining_minutes;
  }
  return null;
});

const statusDot = computed(() => {
  const map: Record<string, string> = {
    available: 'bg-[#29B072]',
    occupied: 'bg-[#FF9D43]',
    reserved: 'bg-[#617DFF]',
    overstay: 'bg-[#F4D339]',
    serious_overstay: 'bg-[#E95252]',
    maintenance: 'bg-[#9CA3AF]'
  };
  return map[props.seat?.status] || 'bg-gray-400';
});
</script>


