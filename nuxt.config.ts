export default defineNuxtConfig({
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s | Hu Pin',
      htmlAttrs: { lang: 'zh-CN' },
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  icon: {
    serverBundle: 'local',
  },
  image: {
    format: ['webp', 'avif'],
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/projects': { prerender: true },
    '/experience': { prerender: true },
    '/contact': { isr: 60 },
  },
  compatibilityDate: '2025-04-01',
})
