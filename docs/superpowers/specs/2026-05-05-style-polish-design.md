# Style Polish Design

## Overview

Visual upgrade of the personal portfolio site — modern, clean, and refined.
Keep all existing page layouts and component structure; enhance styling, animation, and visual hierarchy.

## Global Visual Foundation

- **Background texture**: SVG noise pattern overlay (very low opacity) on all `bg-white` / `bg-slate-50` sections to add subtle grain
- **Shadow system**: Card default `shadow-sm` (slate tint) → hover `shadow-xl` (primary tint). Nav: `shadow-sm + backdrop-blur-xl`. Buttons: `shadow-md` → hover `shadow-lg`
- **Border radius**: Cards `rounded-2xl`, buttons `rounded-xl`, inputs `rounded-xl` (consistent)
- **Typography**: SectionTitle titles get `tracking-tight`, subtitles change from `text-slate-500` to `text-slate-400`

## UI Component Upgrades

### Card.vue
- 3px gradient vertical bar on left side: `from-primary-500 to-accent-500`, clipped with `rounded-l-2xl`
- Noise texture overlay on background
- Hover: `y: -4` + `shadow-xl shadow-primary-200/40`
- Internal padding `p-6` → `p-7`

### GradientButton.vue
- Hover: icon gap expands `gap-2` → `gap-3`
- Click: `active:scale-[0.97]`
- Focus: `ring-2 ring-primary-300 ring-offset-2`

### Badge.vue
- Semi-transparent: `bg-primary-500/10 backdrop-blur-sm`
- Font: `font-semibold`

### SkillBar.vue
- Track: `h-2.5 bg-slate-100/80`
- Fill bar: add shimmer animation on fill
- Percentage text: subtle number transition

### SectionTitle.vue
- Bottom decoration: double line (top `h-1`, bottom `h-0.5`, gap `4px`)
- Increased spacing between title and subtitle

## Page Sections

### Hero (index)
- Background: `bg-gradient-to-br from-primary-50 via-white to-accent-50`
- Decorative: large blurred gradient circles + geometric line decorations (replacing current ParticleBg with a lighter variant)
- Gradient text preserved with higher contrast
- Online badge: light frosted glass style
- Keep AnimatedText typewriter

### AboutPreview
- Avatar container: noise overlay, decorative border with float animation
- Left decorative bar aligned with text block

### SkillShowcase
- Category cards get left gradient bar
- Skill bars get shimmer animation

### FeaturedProjects / ProjectCard
- Card image area: decorative geometric dots, hover icon rotation more pronounced
- Tags use upgraded Badge component

### ExperienceTimeline / TimelineItem
- Timeline dot: `w-4 h-4` → `w-5 h-5` + `shadow-md shadow-primary-500/30` glow
- Date badge: gradient background
- Left decorative bar alignment

### Contact
- ContactInfo cards: left gradient bar
- Form inputs: hover `-translate-y-0.5` + enhanced focus ring
- Submit button: icon animation on hover

## Implementation Order

1. Global CSS (noise texture, shadow utilities, typography)
2. UI component upgrades (Card, Badge, GradientButton, SkillBar, SectionTitle)
3. Hero section redesign (light background + decorative elements)
4. Section-level updates (AboutPreview, SkillShowcase, Projects, Experience, Contact)
5. Final review and polish
