<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">
          我的 <span class="gradient-text">经历</span>
        </h1>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          从大学到职场，每一步都是成长。
        </p>

        <div class="flex justify-center gap-8 flex-wrap">
          <div class="text-center" v-for="stat in stats" :key="stat.label">
            <div class="text-3xl font-bold gradient-text">{{ stat.value }}</div>
            <div class="text-sm text-slate-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <ExperienceTimeline />

    <!-- Education -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="教育背景" subtitle="学术经历" />

        <div class="max-w-3xl mx-auto">
          <TimelineItem
            v-for="(edu, i) in education"
            :key="edu.id"
            :item="edu"
            :index="i"
          />
        </div>

        <div class="mt-10 text-center">
          <GradientButton tag="a" href="/resume.pdf" external>
            <Icon name="uil:file-download" size="18" />
            下载完整简历
          </GradientButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '经历',
  description: 'Hu Pin 的工作经历和教育背景',
})

import { experiences } from '~/data/experience'

const education = experiences.filter(e => e.type === 'education')

const stats = [
  { value: '5+', label: '年经验' },
  { value: '20+', label: '完成项目' },
  { value: '15+', label: '技术栈' },
  { value: '10+', label: '合作客户' },
]
</script>
