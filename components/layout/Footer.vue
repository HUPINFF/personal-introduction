<template>
  <footer class="bg-slate-900 text-slate-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="text-xl font-bold text-white mb-3">Hu Pin</h3>
          <p class="text-sm leading-relaxed">
            前端开发者，热爱创造优雅的 Web 应用。
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">社交</h4>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 hover:text-white transition-colors"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="22" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Hu Pin. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { to: '/about', label: '关于我' },
  { to: '/projects', label: '我的项目' },
  { to: '/experience', label: '工作经历' },
  { to: '/contact', label: '联系我' },
]

const socialLinks = [
  { name: 'GitHub', icon: 'simple-icons:github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'simple-icons:twitter', url: 'https://twitter.com' },
  { name: 'Email', icon: 'simple-icons:gmail', url: 'mailto:hello@example.com' },
]
</script>
