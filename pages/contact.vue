<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">
          联系 <span class="gradient-text">我</span>
        </h1>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          有问题、想法，或者只是想打个招呼？随时联系我！
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Form -->
          <div class="lg:col-span-3" v-motion :initial="{ opacity: 0, x: -40 }" :visible="{ opacity: 1, x: 0 }">
            <ContactForm />
          </div>

          <!-- Info -->
          <div class="lg:col-span-2" v-motion :initial="{ opacity: 0, x: 40 }" :visible="{ opacity: 1, x: 0 }">
            <ContactInfo />

            <div class="mt-8">
              <Card>
                <div class="text-center">
                  <h4 class="text-sm font-medium text-slate-400 mb-3">关注我</h4>
                  <SocialLinks />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '联系',
  description: '联系 Hu Pin',
})
</script>
