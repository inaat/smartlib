<template>
  <div class="font-outfit text-left">
    <!-- Header Bar -->
    <div class="p-6 pb-2 flex items-center justify-between">
      <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
        <span class="w-2 h-2 rounded-full bg-blue-600"></span>
        <span>Active Sessions</span>
      </h3>
      <button 
        @click="fetchSessions" 
        :disabled="loading"
        class="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
        title="Refresh sessions"
      >
        <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
      </button>
    </div>

    <!-- Active Device List -->
    <div class="divide-y divide-slate-100 max-h-[380px] overflow-y-auto">
      <div 
        v-for="session in groupedSessions" 
        :key="session.ip_address + session.user_agent" 
        class="p-4 sm:p-5 transition-colors hover:bg-slate-50/50"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center space-x-3.5 min-w-0">
            <div 
              :class="[
                'p-2.5 rounded-2xl shadow-sm flex-shrink-0 border',
                session.is_current ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-slate-100 text-slate-400 border-slate-200/60'
              ]"
            >
              <Monitor v-if="isDesktop(session.user_agent)" class="w-5 h-5" />
              <Smartphone v-else class="w-5 h-5" />
            </div>
            
            <div class="space-y-0.5 min-w-0">
              <div class="flex items-center space-x-2 flex-wrap gap-y-1">
                <span class="text-xs font-semibold text-slate-800 truncate">{{ getDeviceName(session.user_agent) }}</span>
                <span 
                  v-if="session.is_current" 
                  class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold uppercase tracking-wider rounded-full"
                >
                  Current
                </span>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-[11px] text-slate-500 font-medium gap-y-0.5">
                <span class="flex items-center">
                  <Globe class="w-3 h-3 mr-1 text-slate-400" />
                  {{ session.ip_address === '127.0.0.1' || session.ip_address === '::1' ? 'Local System' : (session.ip_address || 'Current IP') }}
                </span>
                <span class="flex items-center">
                  <Clock class="w-3 h-3 mr-1 text-slate-400" />
                  {{ formatDate(session.last_active) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Individual Revoke Button -->
          <button
            v-if="!session.is_current"
            @click="revokeSession(session)"
            :disabled="revoking === (session.ip_address + session.user_agent)"
            class="flex-shrink-0 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:border-rose-200 rounded-xl transition-all border border-rose-100 disabled:opacity-50 flex items-center space-x-1.5 cursor-pointer"
          >
            <LogOut class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">{{ revoking === (session.ip_address + session.user_agent) ? 'Logging out...' : 'Log out' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Global Action Footer -->
    <div class="p-5 bg-slate-50/40 border-t border-slate-100">
      <button
        @click="logoutAll"
        class="w-full py-2.5 px-4 bg-rose-50/70 border border-rose-200 text-rose-700 hover:bg-rose-600 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-2 shadow-sm active:scale-98 cursor-pointer"
      >
        <ShieldAlert class="w-4 h-4" />
        <span>Logout from All Other Devices</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  Monitor, 
  Smartphone, 
  LogOut, 
  RefreshCw, 
  Clock, 
  Globe,
  ShieldAlert
} from 'lucide-vue-next';
import { authAPI } from '@/shared/services/api';
import { format, parseISO } from 'date-fns';
import { useSwal } from '@/shared/composables/useSwal';

const { showSuccess, showError, showConfirm } = useSwal();
const sessions = ref<any[]>([]);

const groupedSessions = computed(() => {
  const groups: any = {};
  
  sessions.value.forEach(session => {
    let ip = (session.ip_address || '').trim();
    if (ip === '::1' || ip === 'localhost') ip = '127.0.0.1';
    
    const ua = (session.user_agent || '').trim();
    const key = `${ip}-${ua}`;
    
    if (!groups[key]) {
      groups[key] = {
        ...session,
        session_ids: [session.id],
        is_current: session.is_current,
        last_active: session.last_used_at || session.created_at
      };
    } else {
      groups[key].session_ids.push(session.id);
      if (session.is_current) groups[key].is_current = true;
      const currentActive = session.last_used_at || session.created_at;
      if (new Date(currentActive) > new Date(groups[key].last_active)) {
        groups[key].last_active = currentActive;
      }
    }
  });

  return Object.values(groups).sort((a: any, b: any) => (b.is_current ? 1 : -1));
});

const loading = ref(false);
const revoking = ref<string | null>(null);

const fetchSessions = async () => {
  loading.value = true;
  try {
    const data = await authAPI.getSessions();
    sessions.value = data;
  } catch (error) {
    console.error('Error fetching sessions:', error);
  } finally {
    loading.value = false;
  }
};

const revokeSession = async (group: any) => {
  const confirmed = await showConfirm(
    'Logout Device?',
    `Are you sure you want to log out from ${getDeviceName(group.user_agent)}?`,
    'Log out'
  );

  if (confirmed) {
    revoking.value = group.ip_address + group.user_agent;
    try {
      await Promise.all(group.session_ids.map((id: number) => authAPI.revokeSession(id)));
      showSuccess('Success', 'Device logged out successfully');
      await fetchSessions();
    } catch (error) {
      showError('Error', 'Failed to log out device');
    } finally {
      revoking.value = null;
    }
  }
};

const logoutAll = async () => {
  const confirmed = await showConfirm(
    'Logout All Other Devices?',
    'This will log you out from all devices except this one. Continue?',
    'Logout All'
  );

  if (confirmed) {
    try {
      await authAPI.logoutAll();
      window.location.href = '/login';
    } catch (error) {
      showError('Error', 'Failed to log out all devices');
    }
  }
};

const isDesktop = (ua: string) => {
  if (!ua) return true;
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const getDeviceName = (ua: string) => {
  if (!ua) return 'Unknown Device';
  
  if (ua.includes('Chrome')) {
    if (ua.includes('Windows')) return 'Chrome on Windows';
    if (ua.includes('Macintosh')) return 'Chrome on macOS';
    if (ua.includes('Linux')) return 'Chrome on Linux';
    if (ua.includes('Android')) return 'Chrome on Android';
    if (ua.includes('iPhone')) return 'Chrome on iPhone';
  }
  
  if (ua.includes('Safari') && !ua.includes('Chrome')) {
    if (ua.includes('iPhone')) return 'Safari on iPhone';
    if (ua.includes('Macintosh')) return 'Safari on macOS';
  }

  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg/')) return 'Microsoft Edge';
  
  return 'Browser Session';
};

const formatDate = (date: string) => {
  if (!date) return 'Just now';
  try {
    return format(parseISO(date), 'MMM dd, HH:mm');
  } catch {
    return 'Just now';
  }
};

onMounted(fetchSessions);
</script>
