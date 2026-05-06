<template>
  <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0 }">
    <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
      <span class="gradient-text">{{ title }}</span>
    </h2>
    <p v-if="subtitle" class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
      {{ subtitle }}
    </p>
    <div class="flex flex-col items-center gap-1">
      <div class="section-divider h-1 w-20" />
      <div class="section-divider h-0.5 w-12 opacity-60" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
