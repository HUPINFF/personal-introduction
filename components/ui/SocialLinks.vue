<template>
  <div class="flex items-center gap-4" :class="size === 'sm' ? 'gap-3' : 'gap-4'">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-400 hover:text-primary-500 transition-colors duration-200"
      :aria-label="link.name"
    >
      <Icon :name="link.icon" :size="size === 'sm' ? 18 : 22" />
    </a>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md'
}>(), {
  size: 'md',
})

const links = [
  { name: 'GitHub', icon: 'simple-icons:github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'simple-icons:twitter', url: 'https://twitter.com' },
  { name: 'Email', icon: 'simple-icons:gmail', url: 'mailto:hello@example.com' },
]
</script>
