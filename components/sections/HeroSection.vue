<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
    <!-- Decorative blurred circles -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl" />
    <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/15 rounded-full blur-3xl" />
    <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-300/15 rounded-full blur-3xl" />

    <!-- Geometric decorations -->
    <div class="absolute top-20 left-10 w-8 h-8 border-2 border-primary-300/40 rounded-lg rotate-45 animate-float" />
    <div class="absolute bottom-40 right-20 w-6 h-6 border-2 border-accent-300/40 rounded-full animate-float-slow" />
    <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-primary-400/30 rounded animate-float" style="animation-delay: 3s" />
    <div class="absolute bottom-1/3 left-1/5 w-5 h-5 bg-accent-400/30 rounded-full animate-float-slow" style="animation-delay: 2s" />
    <div class="absolute top-1/3 left-1/3 w-px h-32 bg-gradient-to-b from-primary-300/0 via-primary-300/40 to-primary-300/0 rotate-45" />
    <div class="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-accent-300/0 via-accent-300/40 to-accent-300/0 -rotate-12" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <!-- Greeting -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="mb-6"
      >
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-slate-600 text-sm border border-white/50 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          在线
        </span>
      </div>

      <!-- Name -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        class="mb-4"
      >
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
          Hi, I'm
          <span class="gradient-text bg-gradient-to-r from-primary-600 via-purple-500 to-cyan-600">Hu Pin</span>
        </h1>
      </div>

      <!-- Role typewriter -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
        class="text-xl sm:text-2xl text-slate-500 mb-4 h-8"
      >
        <AnimatedText :words="['Web Developer', 'UI Designer', 'Problem Solver']" />
      </div>

      <!-- Description -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 700 } }"
        class="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10"
      >
        热爱创造优雅、高性能的 Web 应用。专注于前端开发与用户体验。
      </p>

      <!-- CTA buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 800 } }"
        class="flex flex-wrap justify-center gap-4"
      >
        <GradientButton tag="NuxtLink" to="/projects">
          <Icon name="uil:eye" size="18" />
          查看项目
        </GradientButton>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-300 shadow-sm"
        >
          <Icon name="uil:envelope" size="18" />
          联系我
        </NuxtLink>
      </div>

      <!-- Scroll indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { delay: 1200 } }"
        class="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div class="flex flex-col items-center gap-2 text-slate-300">
          <span class="text-xs">向下滚动</span>
          <Icon name="uil:arrow-down" size="20" class="animate-bounce-slow" />
        </div>
      </div>
    </div>
  </section>
</template>
