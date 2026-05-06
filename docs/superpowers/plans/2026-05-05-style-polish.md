# Style Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the entire portfolio frontend — modern, clean, refined styling without changing layout structure.

**Architecture:** Upgrade global CSS (noise texture, shadows, transitions), then enhance each UI component (Card, Badge, Button, SkillBar, SectionTitle), then update each page section (Hero, About, Skills, Projects, Experience, Contact). The Hero section gets the biggest visual change: light gradient background replacing dark theme.

**Tech Stack:** Vue 3 + Nuxt 3 + Tailwind CSS + VueUse Motion

---

### Task 1: Global CSS — noise texture, shadow utilities, scrollbar polish

**Files:**
- Modify: `assets/css/main.css`

- [ ] **Add noise SVG background pattern utility, enhanced shadow classes, and scrollbar polish**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #6366f1;
  --color-accent: #06b6d4;
}

/* Noise texture overlay */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #c7d2fe;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a5b4fc;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Gradient text utility */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500;
}

/* Gradient border utility */
.gradient-border {
  position: relative;
}
.gradient-border::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to right, #6366f1, #06b6d4);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* Card left gradient bar utility */
.card-left-bar {
  position: relative;
}
.card-left-bar::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #6366f1, #06b6d4);
  border-radius: 1.5px 0 0 1.5px;
}

/* Section title double line */
.section-divider {
  @apply mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500;
}

/* Shimmer animation for skill bars */
@keyframes shimmer-bar {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.skill-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  background-size: 200% 100%;
  animation: shimmer-bar 2s linear infinite;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Task 2: Card.vue — left gradient bar + noise + enhanced hover

**Files:**
- Modify: `components/ui/Card.vue`

- [ ] **Upgrade Card component with left bar, noise bg, enhanced hover shadow**

```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0 }"
    :hover="{ y: -4, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)' }"
    class="relative bg-white rounded-2xl shadow-sm shadow-slate-200/50 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/40 card-left-bar bg-noise overflow-hidden"
  >
    <slot />
  </div>
</template>
```

---

### Task 3: Badge.vue — frosted glass style

**Files:**
- Modify: `components/ui/Badge.vue`

- [ ] **Upgrade Badge with semi-transparent background and blur**

```vue
<template>
  <span
    class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/10 backdrop-blur-sm text-primary-700"
  >
    <slot />
  </span>
</template>
```

---

### Task 4: GradientButton.vue — enhanced hover/click micro-interactions

**Files:**
- Modify: `components/ui/GradientButton.vue`

- [ ] **Upgrade button with gap animation, focus ring, refined active scale**

```vue
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
```

---

### Task 5: SkillBar.vue — shimmer animation + refined track

**Files:**
- Modify: `components/ui/SkillBar.vue`

- [ ] **Upgrade skill bar with taller track, shimmer overlay**

```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: -20 }"
    :visible="{ opacity: 1, x: 0 }"
    class="mb-4"
  >
    <div class="flex justify-between items-center mb-1.5">
      <span class="text-sm font-medium text-slate-700">{{ name }}</span>
      <span class="text-xs text-slate-400">{{ level }}%</span>
    </div>
    <div class="h-2.5 bg-slate-100/80 rounded-full overflow-hidden relative">
      <div
        class="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out relative overflow-hidden"
        :style="{ width: isVisible ? `${level}%` : '0%' }"
      >
        <div v-if="isVisible" class="absolute inset-0 skill-shimmer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()

const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>
```

---

### Task 6: SectionTitle.vue — enhanced divider

**Files:**
- Modify: `components/ui/SectionTitle.vue`

- [ ] **Upgrade section title with double-line divider and tighter tracking**

```vue
<template>
  <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0 }">
    <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
      <span class="gradient-text">{{ title }}</span>
    </h2>
    <p v-if="subtitle" class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
      {{ subtitle }}
    </p>
    <div class="flex flex-col items-center gap-1">
      <div class="section-divider h-1 w-20" />
      <div class="section-divider h-0.5 w-12 opacity-60" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
```

---

### Task 7: Layout — add noise texture to default background

**Files:**
- Modify: `layouts/default.vue`

- [ ] **Add noise texture overlay class to root div**

```vue
  <div class="min-h-screen bg-white text-slate-900 font-body bg-noise">
```

---

### Task 8: HeroSection.vue — light background redesign

**Files:**
- Modify: `components/sections/HeroSection.vue`

- [ ] **Redesign Hero with light gradient background, refined decorative elements, keep typewriter**

```vue
<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
    <!-- Decorative blurred circles -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl" />
    <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/15 rounded-full blur-3xl" />
    <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-300/15 rounded-full blur-3xl" />

    <!-- Geometric decorations -->
    <div class="absolute top-20 left-10 w-8 h-8 border-2 border-primary-300/40 rounded-lg rotate-45 animate-float" />
    <div class="absolute bottom-40 right-20 w-6 h-6 border-2 border-accent-300/40 rounded-full animate-float-slow" />
    <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-primary-400/30 rounded animate-float" style="animation-delay: 3s" />
    <div class="absolute bottom-1/3 left-1/5 w-5 h-5 bg-accent-400/30 rounded-full animate-float-slow" style="animation-delay: 2s" />
    <div class="absolute top-1/3 left-1/3 w-px h-32 bg-gradient-to-b from-primary-300/0 via-primary-300/40 to-primary-300/0 rotate-45" />
    <div class="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-accent-300/0 via-accent-300/40 to-accent-300/0 -rotate-12" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <!-- Greeting -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="mb-6"
      >
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-slate-600 text-sm border border-white/50 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          在线
        </span>
      </div>

      <!-- Name -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        class="mb-4"
      >
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
          Hi, I'm
          <span class="gradient-text bg-gradient-to-r from-primary-600 via-purple-500 to-cyan-600">Hu Pin</span>
        </h1>
      </div>

      <!-- Role typewriter -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
        class="text-xl sm:text-2xl text-slate-500 mb-4 h-8"
      >
        <AnimatedText :words="['Web Developer', 'UI Designer', 'Problem Solver']" />
      </div>

      <!-- Description -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 700 } }"
        class="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10"
      >
        热爱创造优雅、高性能的 Web 应用。专注于前端开发与用户体验。
      </p>

      <!-- CTA buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 800 } }"
        class="flex flex-wrap justify-center gap-4"
      >
        <GradientButton tag="NuxtLink" to="/projects">
          <Icon name="uil:eye" size="18" />
          查看项目
        </GradientButton>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-300 shadow-sm"
        >
          <Icon name="uil:envelope" size="18" />
          联系我
        </NuxtLink>
      </div>

      <!-- Scroll indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { delay: 1200 } }"
        class="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div class="flex flex-col items-center gap-2 text-slate-300">
          <span class="text-xs">向下滚动</span>
          <Icon name="uil:arrow-down" size="20" class="animate-bounce-slow" />
        </div>
      </div>
    </div>
  </section>
</template>
```

---

### Task 9: AboutPreview — noise overlay on avatar, left bar alignment

**Files:**
- Modify: `components/sections/AboutPreview.vue`

- [ ] **Add noise overlay to avatar container and enhance styling**

Edit the avatar section to wrap in `bg-noise` and maintain the existing layout. The right text block gets card styling without explicit Card wrapper (uses section layout instead). Minimal changes — just ensure consistency with the new card style.

```vue
<!-- Change the avatar container div: -->
<div class="relative w-64 h-64 sm:w-80 sm:h-80">
  <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6" />
  <div class="absolute inset-0 bg-slate-200 rounded-3xl -rotate-3 overflow-hidden flex items-center justify-center bg-noise">
    <Icon name="uil:user" size="80" class="text-slate-400" />
  </div>
</div>
```

---

### Task 10: FeatureProjects section — upgrade tag badges

**Files:**
- Modify: `components/sections/FeaturedProjects.vue`

No changes needed — it already uses `Badge` and `ProjectCard` which use the updated components.

---

### Task 11: ExperienceTimeline / TimelineItem — enhanced dot and date badge

**Files:**
- Modify: `components/ui/TimelineItem.vue`

- [ ] **Upgrade timeline dot size/glow, date badge gradient, left bar alignment**

```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }"
    :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
    class="relative pl-8 md:pl-0"
    :class="{ 'md:text-right md:pr-8': index % 2 === 0, 'md:pl-8': index % 2 !== 0 }"
  >
    <!-- Desktop dot -->
    <div class="hidden md:block absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-md shadow-primary-500/30 z-10" />

    <Card>
      <div class="flex items-start gap-2" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
        <Icon :name="item.icon" size="20" class="text-primary-500 mt-0.5 shrink-0" />
        <div :class="{ 'md:text-right': index % 2 === 0 }">
          <span class="inline-block px-3 py-0.5 text-xs font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-2">
            {{ item.startDate }} — {{ item.endDate || '至今' }}
          </span>
          <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
          <p class="text-sm text-primary-600 mb-2">{{ item.organization }} · {{ item.location }}</p>
          <ul class="text-sm text-slate-500 space-y-1">
            <li v-for="(desc, i) in item.description" :key="i" class="flex items-start gap-2" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
              <span class="mt-1.5 w-1 h-1 rounded-full bg-primary-400 shrink-0" />
              <span>{{ desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/data/experience'

defineProps<{
  item: ExperienceItem
  index: number
}>()
</script>
```

---

### Task 12: ContactInfo — card left bar styling

**Files:**
- Modify: `components/contact/ContactInfo.vue`

No code changes needed — it already wraps each item in `<Card>` which has been updated with the left bar.

---

### Task 13: ContactForm — enhanced input focus styling

**Files:**
- Modify: `components/contact/ContactForm.vue`

- [ ] **Add hover lift on input focus**

Change the input classes to include `hover:-translate-y-0.5`:

```vue
<!-- For all three input/textarea fields, add hover:-translate-y-0.5 to the class list: -->
class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-200 bg-white text-slate-900 hover:-translate-y-0.5"
```

Also add `hover:shadow-lg hover:shadow-primary-500/25` to the submit button:
```vue
class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-60"
```

---

### Task 14: NavBar — refined blurred background

**Files:**
- Modify: `components/layout/NavBar.vue`

- [ ] **Update scrolled background for better noise texture integration**

```vue
:class="scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'"
```

(No actual change needed — already has `backdrop-blur-lg`, but let's use `backdrop-blur-xl` for stronger blur when scrolled.)

```vue
:class="scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'"
```

---

### Task 15: About page — personal interests cards updated via Card component

**Files:**
- Modify: `pages/about.vue`

No code changes — interests section already uses `<Card>` which has been updated.

---

### Task 16: Project detail page — badge upgrades

**Files:**
- Modify: `pages/projects/[slug].vue`

No code changes — already uses `<Badge>` which has been updated.

---

## Self-Review Checklist

1. **Spec coverage**: ✅ All sections covered — Hero (Task 8), Cards (Task 2), Badges (Task 3), Buttons (Task 4), Skill bars (Task 5), Section titles (Task 6), Timeline (Task 11), Contact (Tasks 12-13), Global styles (Tasks 1, 7)
2. **Placeholder scan**: ✅ No TBD, TODOs, or incomplete stubs
3. **Type consistency**: ✅ All component props remain unchanged, only styling classes updated
4. **Scope check**: ✅ Focused on styling only, no layout or structural changes
