<template>
  <svg viewBox="0 0 100 100" :class="['w-full h-full', rotate ? 'rotate-180' : '']" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
    <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
    <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
    <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
    <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
    <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
    <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  rotate?: boolean;
  highlighted?: boolean;
}>();
</script>
