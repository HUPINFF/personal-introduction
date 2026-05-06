<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          HP
        </NuxtLink>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="relative text-sm font-medium transition-colors duration-200 py-2 group"
              :class="isActive(link.to) ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'"
            >
              {{ link.label }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 transition-transform duration-300"
                :class="isActive(link.to) ? 'scale-x-100' : 'group-hover:scale-x-100'"
              />
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 text-slate-600 hover:text-slate-900"
          @click="mobileOpen = true"
          aria-label="打开菜单"
        >
          <Icon name="uil:bars" size="24" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <MobileMenu :open="mobileOpen" @close="mobileOpen = false" />
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于' },
  { to: '/projects', label: '项目' },
  { to: '/experience', label: '经历' },
  { to: '/contact', label: '联系' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const headerRef = ref(null)

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
