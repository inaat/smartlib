<template>
  <div class="space-y-6 font-outfit">
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading loyalty info...</p>
    </div>

    <template v-else-if="loyaltyData">
      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total Points -->
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group">
          <div class="absolute -right-6 -top-6 text-slate-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none">
            <Coins class="w-24 h-24 stroke-1 text-slate-100" />
          </div>
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div class="p-3 bg-blue-50 border border-blue-200/60 rounded-xl text-blue-600">
              <Coins class="w-5 h-5" />
            </div>
          </div>
          <div class="relative z-10">
            <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">Total Points Balance</p>
            <h3 class="text-3xl font-bold text-slate-800 mt-2.5 leading-none">{{ loyaltyData.total_points }}</h3>
          </div>
        </div>

        <!-- Current Tier -->
        <div class="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group" :class="[tierColorClass]">
          <div class="absolute -right-6 -top-6 text-slate-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none">
            <Award class="w-24 h-24 stroke-1 text-slate-100" />
          </div>
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div class="p-3 rounded-xl border" :class="[tierIconBgClass]">
              <Award class="w-5 h-5" :class="[tierIconColorClass]" />
            </div>
            <div class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-500">
              Current Rank
            </div>
          </div>
          <div class="relative z-10">
            <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">Membership Tier</p>
            <h3 class="text-3xl font-black text-slate-800 mt-2.5 leading-none">{{ loyaltyData.current_tier }}</h3>
          </div>
        </div>

        <!-- Next Tier Progress -->
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group">
          <div class="flex flex-col h-full justify-between relative z-10">
            <div v-if="loyaltyData.next_tier">
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-indigo-50 border border-indigo-200/60 rounded-xl text-indigo-600">
                  <Sparkles class="w-5 h-5 animate-pulse" />
                </div>
                <div class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-indigo-50 border border-indigo-200 text-indigo-700">
                  Next: {{ loyaltyData.next_tier }}
                </div>
              </div>
              <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">Progress to Next Tier</p>
              <div class="flex justify-between items-baseline mt-2.5">
                <h4 class="text-lg font-bold text-slate-700 tracking-tight leading-none">{{ loyaltyData.points_to_next_tier }} <span class="text-[11px] font-medium text-slate-400 uppercase tracking-wide">pts to go</span></h4>
                <span class="text-xs font-bold text-indigo-600 leading-none">{{ loyaltyData.progress }}%</span>
              </div>
              <div class="w-full bg-slate-100 border border-slate-200/50 rounded-full h-2 mt-3.5 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500" :style="{ width: loyaltyData.progress + '%' }"></div>
              </div>
            </div>
            
            <div v-else class="flex flex-col items-center justify-center py-4 text-center">
              <div class="p-3 bg-emerald-50 border border-emerald-200/60 rounded-xl text-emerald-600 mb-2">
                <Award class="w-6 h-6 animate-bounce" />
              </div>
              <h4 class="text-sm font-semibold text-slate-800">Max Rank Attained</h4>
              <p class="text-[11px] text-slate-400 mt-1">You are at the highest library VIP tier!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Transactions List -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left font-outfit">
        <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
          <div class="flex items-center space-x-2.5">
            <div class="p-2 bg-slate-100 border border-slate-200/60 rounded-xl text-slate-600">
              <History class="w-4 h-4" />
            </div>
            <h3 class="font-semibold text-slate-800 text-sm">Recent Transactions</h3>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-100">
            <thead class="bg-slate-50/40">
              <tr>
                <th scope="col" class="px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Date & Time</th>
                <th scope="col" class="px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Description</th>
                <th scope="col" class="px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Type</th>
                <th scope="col" class="px-6 py-3.5 text-right text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Points</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white" v-if="loyaltyData.transactions.length > 0">
              <tr v-for="transaction in loyaltyData.transactions" :key="transaction.id" class="hover:bg-slate-50/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-xs font-semibold text-slate-500">
                  {{ formatDate(transaction.created_at) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-xs font-semibold text-slate-700">
                  {{ transaction.description }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-xs">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider" 
                        :class="transaction.points > 0 
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' 
                          : 'bg-rose-50 border border-rose-200 text-rose-700'">
                    {{ transaction.type }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-xs text-right font-bold" 
                    :class="transaction.points > 0 ? 'text-emerald-600' : 'text-rose-600'">
                  {{ transaction.points > 0 ? '+' : '' }}{{ transaction.points }}
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4" class="px-6 py-12 text-center">
                  <div class="mx-auto w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-3">
                    <History class="w-4 h-4 text-slate-400" />
                  </div>
                  <p class="text-xs text-slate-400 italic">No points transactions recorded yet.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { studentAPI } from '@/student/services/studentApi';
import { 
  Coins, 
  Award, 
  Sparkles, 
  History 
} from 'lucide-vue-next';

const loyaltyData = ref<any>(null);
const isLoading = ref(true);

const fetchLoyaltyData = async () => {
  try {
    isLoading.value = true;
    loyaltyData.value = await studentAPI.getLoyaltyTransactions();
  } catch (error) {
    console.error('Error fetching loyalty data:', error);
  } finally {
    isLoading.value = false;
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const tierColorClass = computed(() => {
  if (!loyaltyData.value) return 'border-slate-100';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'border-amber-600/35 shadow-amber-50/10';
    case 'Silver': return 'border-slate-400 shadow-slate-50/10';
    case 'Gold': return 'border-yellow-400/40 shadow-yellow-50/10';
    case 'Platinum': return 'border-indigo-400/40 shadow-indigo-50/10';
    default: return 'border-slate-200/80';
  }
});

const tierIconBgClass = computed(() => {
  if (!loyaltyData.value) return 'bg-slate-50 border border-slate-200 text-slate-400';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'bg-amber-50 border border-amber-100 text-amber-600';
    case 'Silver': return 'bg-slate-100 border border-slate-200 text-slate-500';
    case 'Gold': return 'bg-yellow-50 border border-yellow-200 text-yellow-600';
    case 'Platinum': return 'bg-indigo-50 border border-indigo-200 text-indigo-600';
    default: return 'bg-slate-50 border border-slate-200 text-slate-400';
  }
});

const tierIconColorClass = computed(() => {
  if (!loyaltyData.value) return 'text-slate-400';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'text-amber-600';
    case 'Silver': return 'text-slate-600';
    case 'Gold': return 'text-yellow-600';
    case 'Platinum': return 'text-indigo-600';
    default: return 'text-slate-400';
  }
});

onMounted(() => {
  fetchLoyaltyData();
});
</script>

<style scoped>
.hover-lift {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
