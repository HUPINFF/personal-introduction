export interface ExperienceItem {
  id: string
  type: 'work' | 'education'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string | null
  description: string[]
  icon: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'work',
    title: '高级前端工程师',
    organization: '科技公司 A',
    location: '北京',
    startDate: '2022-03',
    endDate: null,
    description: [
      '负责核心产品的前端架构设计和开发',
      '主导了从 Vue 2 到 Vue 3 的技术栈迁移',
      '搭建了组件库和自动化测试体系',
    ],
    icon: 'uil:briefcase-alt',
  },
  {
    id: 'exp-2',
    type: 'work',
    title: '前端工程师',
    organization: '互联网公司 B',
    location: '上海',
    startDate: '2020-07',
    endDate: '2022-02',
    description: [
      '参与电商平台的前端开发，负责订单模块',
      '使用 React + TypeScript 重构了核心页面',
      '优化页面性能，LCP 提升了 40%',
    ],
    icon: 'uil:briefcase-alt',
  },
  {
    id: 'exp-3',
    type: 'work',
    title: '初级开发工程师',
    organization: '创业公司 C',
    location: '杭州',
    startDate: '2019-03',
    endDate: '2020-06',
    description: [
      '全栈开发，参与产品从 0 到 1 的搭建',
      '使用 Vue + Node.js 开发了 MVP 版本',
    ],
    icon: 'uil:briefcase-alt',
  },
  {
    id: 'edu-1',
    type: 'education',
    title: '计算机科学与技术 本科',
    organization: '某某大学',
    location: '北京',
    startDate: '2015-09',
    endDate: '2019-06',
    description: [
      'GPA 3.8/4.0，校级优秀毕业生',
      '获全国大学生程序设计竞赛银奖',
    ],
    icon: 'uil:graduation-cap',
  },
]
