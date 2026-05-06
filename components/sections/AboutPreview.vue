<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="关于我" subtitle="了解我的故事" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Avatar -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0 }"
          class="flex justify-center"
        >
          <div class="relative w-64 h-64 sm:w-80 sm:h-80">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6" />
            <div class="absolute inset-0 bg-slate-200 rounded-3xl -rotate-3 overflow-hidden flex items-center justify-center bg-noise">
              <Icon name="uil:user" size="80" class="text-slate-400" />
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visible="{ opacity: 1, x: 0 }"
        >
          <h3 class="text-2xl font-bold text-slate-900 mb-4">
            你好，我是 <span class="gradient-text">Hu Pin</span>
          </h3>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>
              一名热爱前端开发的工程师，拥有 5 年以上的 Web 开发经验。
              我热衷于使用现代技术栈构建优雅、高性能的用户界面。
            </p>
            <p>
              我的技术旅程始于大学时期的一次网页设计比赛，从此便爱上了将设计变为现实的过程。
              无论是复杂的后台管理系统，还是精致的个人页面，我都力求在每一个细节上做到最好。
            </p>
            <p>
              工作之余，我喜欢探索新技术、参与开源项目、撰写技术博客，
              以及用相机记录生活的美好瞬间。
            </p>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <GradientButton tag="NuxtLink" to="/projects">
              <Icon name="uil:grid" size="18" />
              查看项目
            </GradientButton>
            <GradientButton tag="a" href="/resume.pdf" external>
              <Icon name="uil:file-download" size="18" />
              下载简历
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
