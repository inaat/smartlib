<template>
  <div class="bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left">
    <!-- Header -->
    <div class="flex items-center space-x-3 mb-5 border-b border-slate-100/80 pb-4 text-left">
      <div class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
        <Zap class="w-4.5 h-4.5" />
      </div>
      <div>
        <h3 class="text-base font-bold text-slate-800 tracking-tight leading-snug">Quick Actions</h3>
        <p class="text-[11px] text-slate-400 font-medium">Shortcuts to discover libraries, books & events.</p>
      </div>
    </div>

    <!-- Clean, Decent Actions Grid -->
    <div class="grid grid-cols-2 gap-3">
      <router-link
        v-for="(action, index) in actions"
        :key="index"
        :to="action.link"
        class="group block relative"
      >
        <div 
          class="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-blue-200/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full min-h-[105px] text-left"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-200/70 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 flex items-center justify-center shadow-2xs">
                <component :is="action.icon" class="w-4.5 h-4.5" />
              </div>
              <ChevronRight class="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
            <h4 class="font-bold text-slate-800 text-xs tracking-tight group-hover:text-blue-600 transition-colors">{{ action.title }}</h4>
            <p class="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">{{ action.description }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, BookOpen, Calendar, User, Zap, ChevronRight } from 'lucide-vue-next';

const actions = [
  {
    title: 'Find Library',
    description: 'Locate partner study spaces',
    icon: MapPin,
    link: '/student/libraries'
  },
  {
    title: 'Browse Books',
    description: 'Search & request physical books',
    icon: BookOpen,
    link: '/student/books'
  },
  {
    title: 'View Events',
    description: 'Check academic seminars',
    icon: Calendar,
    link: '/student/events'
  },
  {
    title: 'My Profile',
    description: 'Manage details & settings',
    icon: User,
    link: '/student/profile'
  }
];
</script>
