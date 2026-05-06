<template>
  <section class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-purple-600 to-accent-500 p-12 sm:p-16 text-center"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div class="relative z-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">让我们一起合作</h2>
          <p class="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            正在寻找新的机会？或者只是想聊一聊？我随时欢迎！
          </p>
          <GradientButton tag="NuxtLink" to="/contact" class="!bg-white !text-primary-600 hover:!text-white !shadow-xl">
            <Icon name="uil:envelope" size="18" />
            联系我
          </GradientButton>
        </div>
      </div>
    </div>
  </section>
</template>
