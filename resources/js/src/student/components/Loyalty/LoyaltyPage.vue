<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Loyalty Program</h1>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" v-if="loyaltyData">
      <!-- Total Points -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-primary-500">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Points</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ loyaltyData.total_points }}</p>
          </div>
          <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Current Tier -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4" :class="tierColorClass">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Current Tier</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ loyaltyData.current_tier }}</p>
          </div>
          <div class="p-3 rounded-full" :class="tierIconBgClass">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="tierIconColorClass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Next Tier Progress -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-blue-500" v-if="loyaltyData.next_tier">
        <div class="flex flex-col h-full justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Next Tier: {{ loyaltyData.next_tier }}</p>
            <div class="flex justify-between items-end mt-1">
               <p class="text-xl font-bold text-gray-900 dark:text-white">{{ loyaltyData.points_to_next_tier }} points needed</p>
               <p class="text-sm text-gray-500">{{ loyaltyData.progress }}%</p>
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: loyaltyData.progress + '%' }"></div>
          </div>
        </div>
      </div>
       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-green-500" v-else>
        <div class="flex items-center justify-between h-full">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">Max Tier Reached!</p>
          </div>
          <div class="p-3 bg-green-100 dark:bg-green-900 rounded-full">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Transactions List -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">Recent Transactions</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" v-if="loyaltyData && loyaltyData.transactions.length > 0">
            <tr v-for="transaction in loyaltyData.transactions" :key="transaction.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(transaction.created_at) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {{ transaction.description }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                      :class="transaction.points > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'">
                  {{ transaction.type }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-right font-medium" 
                  :class="transaction.points > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
                {{ transaction.points > 0 ? '+' : '' }}{{ transaction.points }}
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                No transactions found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { studentAPI } from '@/student/services/studentApi';

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
  if (!loyaltyData.value) return 'border-gray-500';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'border-orange-700';
    case 'Silver': return 'border-gray-400';
    case 'Gold': return 'border-yellow-500';
    case 'Platinum': return 'border-purple-500';
    default: return 'border-gray-500';
  }
});

const tierIconBgClass = computed(() => {
  if (!loyaltyData.value) return 'bg-gray-100 dark:bg-gray-900';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'bg-orange-100 dark:bg-orange-900';
    case 'Silver': return 'bg-gray-100 dark:bg-gray-700';
    case 'Gold': return 'bg-yellow-100 dark:bg-yellow-900';
    case 'Platinum': return 'bg-purple-100 dark:bg-purple-900';
    default: return 'bg-gray-100 dark:bg-gray-900';
  }
});

const tierIconColorClass = computed(() => {
  if (!loyaltyData.value) return 'text-gray-600 dark:text-gray-400';
  switch (loyaltyData.value.current_tier) {
    case 'Bronze': return 'text-orange-700 dark:text-orange-400';
    case 'Silver': return 'text-gray-600 dark:text-gray-300';
    case 'Gold': return 'text-yellow-600 dark:text-yellow-400';
    case 'Platinum': return 'text-purple-600 dark:text-purple-400';
    default: return 'text-gray-600 dark:text-gray-400';
  }
});

onMounted(() => {
  fetchLoyaltyData();
});
</script>
