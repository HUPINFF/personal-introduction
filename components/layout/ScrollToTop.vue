<template>
  <Transition name="fade">
    <button
      v-if="visible"
      class="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl transition-shadow"
      @click="scrollToTop"
      aria-label="回到顶部"
    >
      <Icon name="uil:arrow-up" size="20" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const handleScroll = () => {
    visible.value = window.scrollY > 400
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
