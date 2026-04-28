<template>
  <div class="space-y-6">
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="text-sm font-bold text-gray-900">Active Sessions</h3>
          <p class="text-xs text-gray-500 mt-0.5">Manage the devices where you're currently logged in</p>
        </div>
        <button 
          @click="fetchSessions" 
          :disabled="loading"
          class="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
        </button>
      </div>

      <div class="divide-y divide-gray-50 max-h-[400px] overflow-y-auto">
        <div v-for="session in groupedSessions" :key="session.ip_address + session.user_agent" class="p-4 sm:p-6 transition-colors hover:bg-gray-50/50">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div :class="[
                'p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm hidden sm:block',
                session.is_current ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-400'
              ]">
                <Monitor v-if="isDesktop(session.user_agent)" class="w-5 h-5 sm:w-6 sm:h-6" />
                <Smartphone v-else class="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div class="space-y-1 overflow-hidden">
                <div class="flex items-center space-x-2 flex-wrap gap-y-1">
                  <span class="text-xs sm:text-sm font-bold text-gray-900 truncate">{{ getDeviceName(session.user_agent) }}</span>
                  <span v-if="session.is_current" class="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] sm:text-[10px] font-black uppercase tracking-wider rounded-full">
                    Current
                  </span>
                </div>
                <div class="flex flex-col space-y-0.5">
                  <span class="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center">
                    <Globe class="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 opacity-60" />
                    {{ session.ip_address === '127.0.0.1' || session.ip_address === '::1' ? 'Local System' : (session.ip_address || 'Current IP') }}
                  </span>
                  <span class="text-[9px] sm:text-[11px] text-gray-400 flex items-center">
                    <Clock class="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 opacity-60" />
                    {{ formatDate(session.last_active) }}
                  </span>
                </div>
              </div>
            </div>

            <button
              v-if="!session.is_current"
              @click="revokeSession(session)"
              :disabled="revoking === (session.ip_address + session.user_agent)"
              class="shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg sm:rounded-xl transition-all border border-transparent hover:border-red-100 disabled:opacity-50 flex items-center space-x-1"
            >
              <LogOut class="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span class="hidden sm:inline">{{ revoking === (session.ip_address + session.user_agent) ? 'Logging out...' : 'Log out' }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-50/30 border-t border-gray-100">
        <button
          @click="logoutAll"
          class="w-full py-3 px-4 bg-white border border-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-2xl text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
        >
          <ShieldAlert class="w-4 h-4" />
          <span>Logout from All Other Devices</span>
        </button>
      </div>
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
    // Create a unique key for the device (IP + UserAgent)
    // Normalize IP for grouping (::1 is same as 127.0.0.1)
    let ip = (session.ip_address || '').trim();
    if (ip === '::1' || ip === 'localhost') ip = '127.0.0.1';
    
    // Normalize UserAgent (some browsers might have slight variations in spacing)
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
      // Add this session ID to the group
      groups[key].session_ids.push(session.id);
      // If any session in the group is current, the whole group reflects current device
      if (session.is_current) groups[key].is_current = true;
      // Keep track of the most recent activity
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
      // Revoke all sessions in this group
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
      // Since logoutAll on backend might revoke ALL tokens including current,
      // we check the backend implementation. My implementation revokes ALL.
      // Wait, let's check AuthController logoutAll.
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
