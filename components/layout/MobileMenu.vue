<template>
  <Teleport to="body">
    <Transition name="menu">
      <div v-if="open" class="fixed inset-0 z-50 md:hidden">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="$emit('close')" />

        <!-- Panel -->
        <div class="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl">
          <div class="flex justify-end p-4">
            <button
              class="p-2 text-slate-600 hover:text-slate-900"
              @click="$emit('close')"
              aria-label="关闭菜单"
            >
              <Icon name="uil:times" size="24" />
            </button>
          </div>

          <nav class="px-6">
            <ul class="space-y-2">
              <li v-for="(link, i) in navLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="block py-3 text-lg font-medium transition-colors duration-200"
                  :class="isActive(link.to) ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'"
                  :style="{ transitionDelay: `${i * 50}ms` }"
                  @click="$emit('close')"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()

const route = useRoute()

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于' },
  { to: '/projects', label: '项目' },
  { to: '/experience', label: '经历' },
  { to: '/contact', label: '联系' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
.menu-enter-active > div:last-child,
.menu-leave-active > div:last-child {
  transition: transform 0.3s ease;
}
.menu-enter-from > div:last-child,
.menu-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>
