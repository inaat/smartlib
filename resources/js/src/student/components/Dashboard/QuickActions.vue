<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden">
    <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center">
      <Zap class="w-4 h-4 mr-2 text-blue-600 fill-current" />
      Quick Actions
    </h2>
    <div class="grid grid-cols-2 gap-3.5">
      <router-link
        v-for="(action, index) in actions"
        :key="index"
        :to="action.link"
        class="group block relative"
      >
        <div 
          class="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200/80 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-slate-100/60 flex flex-col justify-between h-full min-h-[110px] text-left"
        >
          <div>
            <div :class="['w-9 h-9 rounded-xl flex items-center justify-center mb-3.5 shadow-sm text-white bg-gradient-to-br', action.gradient]">
              <component :is="action.icon" class="w-4.5 h-4.5" />
            </div>
            <h3 class="font-bold text-slate-800 text-xs tracking-wide">{{ action.title }}</h3>
            <p class="text-[10px] text-slate-400 font-medium mt-1 leading-normal">{{ action.description }}</p>
          </div>
          
          <!-- Hover slide arrow -->
          <div class="flex justify-end mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            <ArrowRight class="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, BookOpen, Calendar, User, Zap, ArrowRight } from 'lucide-vue-next';

const actions = [
  {
    title: 'Find Library',
    description: 'Locate partner study spaces',
    icon: MapPin,
    link: '/student/libraries',
    gradient: 'from-blue-600 to-cyan-500 shadow-blue-500/10'
  },
  {
    title: 'Browse Books',
    description: 'Search & request physical books',
    icon: BookOpen,
    link: '/student/books',
    gradient: 'from-emerald-600 to-teal-500 shadow-emerald-500/10'
  },
  {
    title: 'View Events',
    description: 'Check academic seminars',
    icon: Calendar,
    link: '/student/events',
    gradient: 'from-purple-600 to-indigo-500 shadow-purple-500/10'
  },
  {
    title: 'My Profile',
    description: 'Manage details & settings',
    icon: User,
    link: '/student/profile',
    gradient: 'from-orange-500 to-amber-500 shadow-orange-500/10'
  }
];
</script>
