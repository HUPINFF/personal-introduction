<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Avatar -->
          <div v-motion :initial="{ opacity: 0, x: -40 }" :visible="{ opacity: 1, x: 0 }" class="flex justify-center">
            <div class="relative w-64 h-64 sm:w-80 sm:h-80">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6" />
              <div class="absolute inset-0 bg-slate-200 rounded-3xl -rotate-3 overflow-hidden flex items-center justify-center">
                <Icon name="uil:user" size="80" class="text-slate-400" />
              </div>
            </div>
          </div>

          <!-- Intro -->
          <div v-motion :initial="{ opacity: 0, x: 40 }" :visible="{ opacity: 1, x: 0 }">
            <h1 class="text-4xl font-bold text-slate-900 mb-4">
              关于 <span class="gradient-text">我</span>
            </h1>
            <p class="text-lg text-primary-600 font-medium mb-4">Hu Pin · 高级前端工程师</p>
            <div class="space-y-4 text-slate-600 leading-relaxed">
              <p>
                我是一名拥有 5 年经验的前端工程师，目前定居北京。
                我擅长使用 Vue.js、React 和 TypeScript 构建复杂的 Web 应用。
              </p>
              <p>
                我相信好的代码不仅是功能的实现，更是用户体验的保障。
                在工作中，我始终追求代码的整洁性、可维护性和性能的最优化。
              </p>
              <p>
                当我不在编码时，你可能会发现我在阅读技术书籍、拍摄城市风景，
                或者在 GitHub 上探索有趣的开源项目。
              </p>
            </div>

            <div class="mt-6 flex gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <SkillShowcase />

    <!-- Personal interests -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="个人兴趣" subtitle="工作之外的我" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="interest in interests" :key="interest.title">
            <div class="text-center">
              <div class="inline-flex p-4 rounded-2xl bg-primary-50 text-primary-600 mb-4">
                <Icon :name="interest.icon" size="28" />
              </div>
              <h3 class="font-semibold text-slate-900 mb-1">{{ interest.title }}</h3>
              <p class="text-sm text-slate-500">{{ interest.description }}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于',
  description: '了解 Hu Pin 的经历和技能',
})

const interests = [
  { icon: 'uil:camera', title: '摄影', description: '用镜头捕捉城市的瞬间' },
  { icon: 'uil:book-open', title: '阅读', description: '技术书籍与科幻小说' },
  { icon: 'uil:headphones', title: '音乐', description: 'Lo-fi & Jazz 是我的最爱' },
  { icon: 'uil:plane', title: '旅行', description: '探索不同的文化与风景' },
]
</script>
