<template>
  <div v-if="isLoading" class="min-h-screen bg-slate-50 flex items-center justify-center font-outfit">
    <div class="text-center">
      <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Loading...</p>
    </div>
  </div>

  <!-- Redesigned Maintenance Mode Screen (Role-themed on clean white UI) -->
  <div v-else-if="isMaintenanceActive" class="min-h-screen bg-slate-50/70 flex items-center justify-center p-4 font-outfit antialiased text-slate-800">
    <div class="text-center max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl relative overflow-hidden">
      
      <!-- Icon Container -->
      <div 
        :class="[
          'w-20 h-20 rounded-2xl border flex items-center justify-center mx-auto mb-6 relative shadow-xs',
          isLibrarian ? 'bg-emerald-50 border-emerald-100/80 text-emerald-600' : 'bg-blue-50 border-blue-100/80 text-blue-600'
        ]"
      >
        <Wrench class="w-10 h-10 animate-bounce-slow" />
        <div 
          :class="[
            'absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs',
            isLibrarian ? 'bg-emerald-600' : 'bg-blue-600'
          ]"
        >
          <Timer class="w-3.5 h-3.5 animate-spin-slow" />
        </div>
      </div>

      <!-- Maintenance Badge -->
      <div 
        :class="[
          'inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider mb-4',
          isLibrarian ? 'bg-emerald-50 border-emerald-200/80 text-emerald-700' : 'bg-blue-50 border-blue-200/80 text-blue-700'
        ]"
      >
        <span :class="['w-2 h-2 rounded-full animate-pulse', isLibrarian ? 'bg-emerald-600' : 'bg-blue-600']"></span>
        <span>Maintenance Mode Active</span>
      </div>

      <!-- Title & Subtitle -->
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
        System Under Maintenance
      </h2>
      <p :class="['font-semibold text-sm sm:text-base mb-4', isLibrarian ? 'text-emerald-600' : 'text-blue-600']">
        We'll be back soon!
      </p>
      
      <!-- Description -->
      <p class="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-normal max-w-md mx-auto">
        <span class="font-bold text-slate-800">{{ appName }}</span> is currently undergoing scheduled system updates to improve performance and feature stability. Access for {{ isLibrarian ? 'librarians' : 'students' }} is temporarily paused.
      </p>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button
          @click="checkMaintenanceStatus"
          :disabled="isCheckingStatus"
          :class="[
            'w-full text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50',
            isLibrarian ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
          ]"
        >
          <RefreshCw :class="['w-4 h-4', isCheckingStatus ? 'animate-spin' : '']" />
          <span>{{ isCheckingStatus ? 'Checking Status...' : 'Refresh System Status' }}</span>
        </button>

        <button
          v-if="user"
          @click="handleLogout"
          class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-5 rounded-xl border border-slate-200/70 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <LogOut class="w-4 h-4 text-slate-500" />
          <span>Log Out</span>
        </button>

        <router-link
          v-else
          to="/login"
          :class="[
            'inline-block text-xs font-semibold transition-colors pt-2',
            isLibrarian ? 'text-slate-400 hover:text-emerald-600' : 'text-slate-400 hover:text-blue-600'
          ]"
        >
          Administrator Sign In →
        </router-link>
      </div>

    </div>
  </div>

  <!-- Account Pending Approval Screen -->
  <div v-else-if="user && !user.isApproved" class="min-h-screen bg-slate-50/70 flex items-center justify-center p-4 font-outfit antialiased">
    <div class="text-center max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden">
      <div class="w-16 h-16 bg-amber-50 border border-amber-200/60 rounded-2xl flex items-center justify-center mx-auto mb-5 text-amber-600 shadow-sm">
        <Clock class="w-8 h-8" />
      </div>
      <h2 class="text-xl font-bold text-slate-800 tracking-tight mb-2">Account Pending Approval</h2>
      <p class="text-slate-500 text-xs leading-relaxed mb-6 font-normal">
        Your account <span class="font-semibold text-slate-700">({{ user.email }})</span> has been created and is currently waiting for administrator or librarian approval.
      </p>
      
      <div class="space-y-3">
        <button
          @click="refreshPage"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <RefreshCw class="w-4 h-4" />
          <span>Check Approval Status</span>
        </button>

        <button
          @click="handleLogout"
          class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 px-5 rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <LogOut class="w-4 h-4 text-slate-500" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  </div>

  <router-view v-else />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { useSettings } from '@/shared/composables/useSettings';
import { Clock, RefreshCw, LogOut, Wrench, Timer } from 'lucide-vue-next';

const { user, isLoading, logout } = useAuth();
const { appName, maintenanceMode, fetchPublicSettings } = useSettings();
const isCheckingStatus = ref(false);
let maintenanceCheckInterval: any = null;

const isLibrarian = computed(() => {
  return user.value?.role === 'librarian';
});

const isNonAdminUser = computed(() => {
  if (!user.value) return false;
  return !['super_admin', 'admin', 'owner'].includes(user.value.role);
});

const isMaintenanceActive = computed(() => {
  if (!maintenanceMode.value) return false;
  
  // If user is logged in as student or librarian
  if (user.value && isNonAdminUser.value) {
    return true;
  }
  
  // If user is not logged in and not on login route
  const currentPath = window.location.pathname;
  if (!user.value && currentPath !== '/login') {
    return true;
  }
  
  return false;
});

onMounted(() => {
  fetchPublicSettings();
  maintenanceCheckInterval = setInterval(() => {
    fetchPublicSettings();
  }, 10000);
});

onUnmounted(() => {
  if (maintenanceCheckInterval) {
    clearInterval(maintenanceCheckInterval);
  }
});

const checkMaintenanceStatus = async () => {
  isCheckingStatus.value = true;
  try {
    await fetchPublicSettings();
  } catch (error) {
    console.error('Failed to check maintenance status:', error);
  } finally {
    isCheckingStatus.value = false;
  }
};

const refreshPage = () => {
  window.location.reload();
};

const handleLogout = async () => {
  await logout();
  window.location.href = '/login';
};
</script>

<style scoped>
@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-bounce-slow {
  animation: bounceSlow 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spinSlow 8s linear infinite;
}
</style>
