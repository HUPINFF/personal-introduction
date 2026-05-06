<template>
  <div class="min-h-screen bg-white text-slate-900 font-body bg-noise">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Hu Pin',
  description: '个人简历与作品集',
  ogDescription: '个人简历与作品集',
})
</script>
