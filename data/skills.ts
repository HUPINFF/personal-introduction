export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: '前端开发',
    icon: 'uil:browser',
    skills: [
      { name: 'Vue.js / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    title: '后端开发',
    icon: 'uil:server',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Go', level: 70 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: '开发工具',
    icon: 'uil:setting',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux', level: 82 },
      { name: 'CI/CD', level: 78 },
    ],
  },
  {
    title: '设计',
    icon: 'uil:palette',
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Photoshop', level: 70 },
      { name: 'Illustrator', level: 65 },
    ],
  },
]
