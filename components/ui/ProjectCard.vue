<template>
  <NuxtLink
    :to="`/projects/${project.id}`"
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0, transition: { delay: delay } }"
    :hover="{ y: -8 }"
    class="group block bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-200/40"
  >
    <!-- Image placeholder -->
    <div class="relative h-48 bg-gradient-to-br from-primary-100 via-purple-100 to-accent-100 overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <Icon :name="getProjectIcon(project.category)" size="48" class="text-primary-300 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3 class="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
        {{ project.title }}
      </h3>
      <p class="text-sm text-slate-500 mb-3 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-1.5">
        <Badge v-for="tag in project.tags.slice(0, 3)" :key="tag">
          {{ tag }}
        </Badge>
        <span v-if="project.tags.length > 3" class="text-xs text-slate-400 self-center ml-1">
          +{{ project.tags.length - 3 }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
  delay?: number
}>()

function getProjectIcon(category: string) {
  const icons: Record<string, string> = {
    '全栈': 'uil:layer-group',
    '前端': 'uil:browser',
    '后端': 'uil:server',
  }
  return icons[category] || 'uil:code-branch'
}
</script>
