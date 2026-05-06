<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: -20 }"
    :visible="{ opacity: 1, x: 0 }"
    class="mb-4"
  >
    <div class="flex justify-between items-center mb-1.5">
      <span class="text-sm font-medium text-slate-700">{{ name }}</span>
      <span class="text-xs text-slate-400">{{ level }}%</span>
    </div>
    <div class="h-2.5 bg-slate-100/80 rounded-full overflow-hidden relative">
      <div
        class="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out relative overflow-hidden"
        :style="{ width: isVisible ? `${level}%` : '0%' }"
      >
        <div v-if="isVisible" class="absolute inset-0 skill-shimmer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()

const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>
