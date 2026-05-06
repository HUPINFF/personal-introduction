<template>
  <div class="pt-24">
    <div v-if="project" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Back link -->
      <NuxtLink
        to="/projects"
        class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors mb-8"
      >
        <Icon name="uil:arrow-left" size="16" />
        返回项目列表
      </NuxtLink>

      <!-- Hero image -->
      <div
        class="h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-primary-100 via-purple-100 to-accent-100 flex items-center justify-center mb-10"
        v-motion :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0 }"
      >
        <Icon :name="getIcon(project.category)" size="64" class="text-primary-300" />
      </div>

      <!-- Content -->
      <div v-motion :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <Badge>{{ project.category }}</Badge>
          <span v-for="tag in project.tags" :key="tag">
            <Badge>{{ tag }}</Badge>
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ project.title }}</h1>
        <p class="text-slate-600 leading-relaxed mb-8 whitespace-pre-line">{{ project.longDescription }}</p>

        <!-- Links -->
        <div class="flex flex-wrap gap-4">
          <GradientButton v-if="project.liveUrl" :href="project.liveUrl" external>
            <Icon name="uil:external-link-alt" size="18" />
            在线演示
          </GradientButton>
          <GradientButton v-if="project.githubUrl" :href="project.githubUrl" external>
            <Icon name="uil:github" size="18" />
            源代码
          </GradientButton>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="text-center py-32">
      <Icon name="uil:file-alt" size="48" class="text-slate-300 mx-auto mb-4" />
      <h2 class="text-xl text-slate-500">项目未找到</h2>
      <NuxtLink to="/projects" class="text-primary-600 hover:underline mt-2 inline-block">返回项目列表</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.slug))

if (project.value) {
  useSeoMeta({
    title: project.value.title,
    description: project.value.description,
  })
}

function getIcon(category: string) {
  const icons: Record<string, string> = {
    '全栈': 'uil:layer-group',
    '前端': 'uil:browser',
    '后端': 'uil:server',
  }
  return icons[category] || 'uil:code-branch'
}
</script>
