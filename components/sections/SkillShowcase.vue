<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="专业技能" subtitle="多年积累的技术栈和专业能力" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(category, cIdx) in skillCategories" :key="category.title">
          <Card>
            <div class="flex items-center gap-3 mb-5">
              <Icon :name="category.icon" size="24" class="text-primary-500" />
              <h3 class="text-lg font-semibold text-slate-900">{{ category.title }}</h3>
            </div>
            <SkillBar
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
            />
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '~/data/skills'
</script>
