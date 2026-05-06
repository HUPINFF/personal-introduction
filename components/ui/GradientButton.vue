<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 bg-gradient-to-r from-primary-500 to-accent-500 bg-[length:200%_auto] hover:bg-right-center shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
  >
    <span class="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string
  to?: string
  href?: string
  external?: boolean
}>(), {
  tag: 'button',
  external: false,
})
</script>
