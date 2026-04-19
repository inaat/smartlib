<template>
  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="h-full flex flex-col">
      <!-- Logo -->
      <div class="p-6">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Shield class="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Owner Panel
            </h1>
            <p class="text-xs text-gray-500 font-medium tracking-wider uppercase">Administrative Control</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          :class="[
            'flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group',
            $route.name === item.routeName
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
          ]"
          @click="$emit('close')"
        >
          <component
            :is="item.icon"
            :class="[
              'w-5 h-5 mr-3 transition-colors duration-200',
              $route.name === item.routeName ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'
            ]"
          />
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Bottom Profile -->
      <div class="p-4 border-t border-gray-100">
        <div class="flex items-center p-3 rounded-xl bg-gray-50">
          <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border-2 border-white shadow-sm">
            {{ user?.name?.charAt(0) || 'O' }}
          </div>
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-bold text-gray-900 truncate">{{ user?.name }}</p>
            <p class="text-xs text-gray-500 truncate">{{ user?.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { 
  Users, 
  BarChart2, 
  CreditCard, 
  ShoppingBag, 
  Settings, 
  Shield,
  LayoutDashboard
} from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';

const { user } = useAuth();

defineProps<{
  isOpen: boolean;
}>();

defineEmits(['close']);

const navItems = [
  { name: 'Analytics', to: { name: 'owner-analytics' }, routeName: 'owner-analytics', icon: BarChart2 },
  { name: 'SuperAdmins', to: { name: 'owner-superadmins' }, routeName: 'owner-superadmins', icon: Users },
  { name: 'Subscription Plans', to: { name: 'owner-subscription-plans' }, routeName: 'owner-subscription-plans', icon: CreditCard },
  { name: 'Orders', to: { name: 'owner-orders' }, routeName: 'owner-orders', icon: ShoppingBag },
  { name: 'Settings', to: { name: 'owner-settings' }, routeName: 'owner-settings', icon: Settings },
];
</script>
