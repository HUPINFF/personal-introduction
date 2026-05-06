# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR (http://localhost:3000)
npm run build     # Build for production
npm run generate  # Static site generation (output to .output/public/)
npm run preview   # Preview production build locally
```

## Project Architecture

### Layout Stack
```
app.vue → layouts/default.vue (NavBar + NuxtPage + Footer + ScrollToTop)
```

### Page Routes
| Path | Content |
|---|---|
| `/` | HeroSection, AboutPreview, SkillShowcase, FeaturedProjects, ContactCta |
| `/about` | Bio + SkillShowcase + personal interests |
| `/projects` | Filterable project card grid |
| `/projects/[slug]` | Project detail (lookup by `project.id`) |
| `/experience` | Stats + timeline + education + resume download |
| `/contact` | ContactForm + ContactInfo + SocialLinks |

### Component Organization
```
components/
├── contact/   — ContactForm, ContactInfo
├── layout/    — NavBar, Footer, MobileMenu, ScrollToTop
├── sections/  — HeroSection, SkillShowcase, FeaturedProjects, etc.
└── ui/        — Card, Badge, GradientButton, ProjectCard, etc.
```
Components are auto-imported by filename (no folder prefix) via `pathPrefix: false` in nuxt.config.ts.

### Data Layer
Static TypeScript files in `data/` — edit these to change site content:
- `data/projects.ts` — `Project[]` (6 entries, `featured` flag for homepage)
- `data/experience.ts` — `ExperienceItem[]` (3 work + 1 education)
- `data/skills.ts` — `SkillCategory[]` (4 categories, 19 skills)

Each file exports both the TypeScript interface and the data array.

### Styling & Animation
- **Tailwind CSS** utilities throughout (custom theme in `tailwind.config.ts`)
- **VueUse Motion** (`v-motion` directive) for scroll-triggered entrance animations
- CSS keyframes for decorative floating/gradient/bounce animations
- Page transitions: CSS fade+slide (300ms, `out-in` mode) in `assets/css/main.css`
- `prefers-reduced-motion` support built into global CSS

### Key Nuxt Modules
`@nuxtjs/tailwindcss`, `@vueuse/motion/nuxt`, `@nuxt/icon`, `@nuxt/image`

### Route Rules (SSG/ISR)
- `/`, `/about`, `/projects`, `/experience` — prerendered (static HTML)
- `/contact` — ISR with 60s revalidation

## Notes
- Three Iconify icon collections installed: `uil` (primary), `simple-icons` (brands), `mdi` (material)
- Icons use `uil:` prefix, not `uil:chrome` (use `uil:browser` instead)
- `public/images/` directory does not exist — ProjectCard uses gradient placeholder backgrounds instead of real images
- `composables/useTypewriter.ts` is unused (the `AnimatedText` component has its own inline implementation)
- No API routes in `server/` — fully static site with no backend
