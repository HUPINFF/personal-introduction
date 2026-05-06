<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="工作经历" subtitle="我的职业旅程" />

      <!-- Timeline -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Center line (desktop) -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300" />

        <div class="space-y-8">
          <TimelineItem
            v-for="(item, i) in experiences"
            :key="item.id"
            :item="item"
            :index="i"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data/experience'
</script>
