<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }"
    :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
    class="relative pl-8 md:pl-0"
    :class="{ 'md:text-right md:pr-8': index % 2 === 0, 'md:pl-8': index % 2 !== 0 }"
  >
    <!-- Desktop dot -->
    <div class="hidden md:block absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-md shadow-primary-500/30 z-10" />

    <Card>
      <div class="flex items-start gap-2" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
        <Icon :name="item.icon" size="20" class="text-primary-500 mt-0.5 shrink-0" />
        <div :class="{ 'md:text-right': index % 2 === 0 }">
          <span class="inline-block px-3 py-0.5 text-xs font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-2">
            {{ item.startDate }} — {{ item.endDate || '至今' }}
          </span>
          <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
          <p class="text-sm text-primary-600 mb-2">{{ item.organization }} · {{ item.location }}</p>
          <ul class="text-sm text-slate-500 space-y-1">
            <li v-for="(desc, i) in item.description" :key="i" class="flex items-start gap-2" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
              <span class="mt-1.5 w-1 h-1 rounded-full bg-primary-400 shrink-0" />
              <span>{{ desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/data/experience'

defineProps<{
  item: ExperienceItem
  index: number
}>()
</script>
