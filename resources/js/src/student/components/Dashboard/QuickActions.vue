<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
    <div class="grid grid-cols-2 gap-3">
      <router-link
        v-for="(action, index) in actions"
        :key="index"
        :to="action.link"
        class="group block"
      >
        <div class="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors group-hover:shadow-sm">
          <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors', action.color]">
            <component :is="action.icon" class="w-4 h-4 text-white" />
          </div>
          <h3 class="font-medium text-gray-800 text-sm">{{ action.title }}</h3>
          <p class="text-xs text-gray-500 mt-1">{{ action.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, BookOpen, Calendar, User } from 'lucide-vue-next';

const actions = [
  {
    title: 'Find Library',
    description: 'Locate nearby libraries',
    icon: MapPin,
    link: '/student/libraries',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    title: 'Browse Books',
    description: 'Search for books',
    icon: BookOpen,
    link: '/student/books',
    color: 'bg-teal-500 hover:bg-teal-600'
  },
  {
    title: 'View Events',
    description: 'Check upcoming events',
    icon: Calendar,
    link: '/student/events',
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    title: 'My Profile',
    description: 'Manage your account',
    icon: User,
    link: '/student/profile',
    color: 'bg-green-500 hover:bg-green-600'
  }
];
</script>
