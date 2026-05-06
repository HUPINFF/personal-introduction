<template>
  <section class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="精选项目" subtitle="一些我引以为豪的作品" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          :project="project"
          :delay="i * 100"
        />
      </div>

      <div class="mt-10 text-center">
        <GradientButton tag="NuxtLink" to="/projects">
          <Icon name="uil:grid" size="18" />
          查看全部项目
        </GradientButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects.filter(p => p.featured)
</script>
