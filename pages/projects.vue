<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">
          我的 <span class="gradient-text">项目</span>
        </h1>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          这里展示了我参与和开发的一些项目，涵盖前端、全栈和后端开发。
        </p>

        <!-- Filter tabs -->
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="cat in ['全部', ...categories]"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeCategory === cat
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects grid -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransitionGroup
          name="grid"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProjectCard
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            :project="project"
            :delay="i * 100"
          />
        </TransitionGroup>

        <div v-if="filteredProjects.length === 0" class="text-center py-20 text-slate-400">
          <Icon name="uil:search-alt" size="48" class="mx-auto mb-4" />
          <p>该分类暂无项目</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '项目',
  description: 'Hu Pin 的项目作品集',
})

import { projects } from '~/data/projects'

const activeCategory = ref('全部')

const categories = computed(() => {
  return [...new Set(projects.map(p => p.category))]
})

const filteredProjects = computed(() => {
  if (activeCategory.value === '全部') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.grid-enter-active,
.grid-leave-active {
  transition: all 0.3s ease;
}
.grid-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
