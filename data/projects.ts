export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: '电商管理后台',
    description: '基于 Vue 3 的电商后台管理系统，涵盖订单、商品、用户管理',
    longDescription:
      '一套完整的电商后台管理系统，使用 Vue 3 + TypeScript + Element Plus 构建。实现了订单管理、商品管理、用户管理、数据统计等核心模块。采用 Pinia 进行状态管理，通过 Vite 进行构建优化，首屏加载时间减少了 60%。',
    category: '全栈',
    tags: ['Vue 3', 'TypeScript', 'Element Plus', 'Pinia', 'Vite'],
    image: '/images/projects/ecommerce.jpg',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce-admin',
    featured: true,
  },
  {
    id: 'proj-2',
    title: '实时协作白板',
    description: '支持多人实时协作的在线白板工具，基于 WebSocket',
    longDescription:
      '一款支持多人实时协作的在线白板工具。使用 React + Canvas API 实现绘图功能，通过 WebSocket 实现实时同步。支持画笔、形状、文字、图片等多种元素，具备撤销/重做、图层管理等功能。',
    category: '前端',
    tags: ['React', 'Canvas', 'WebSocket', 'Node.js'],
    image: '/images/projects/whiteboard.jpg',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/collaborative-whiteboard',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'AI 智能客服',
    description: '基于 NLP 的智能客服机器人，支持多轮对话和知识库管理',
    longDescription:
      '基于 NLP 技术的智能客服系统，集成知识库管理、多轮对话、意图识别等功能。后端使用 Python + FastAPI 构建，前端使用 Vue 3 开发管理界面。已服务超过 500 家企业客户。',
    category: '全栈',
    tags: ['Python', 'FastAPI', 'Vue 3', 'NLP', 'Docker'],
    image: '/images/projects/ai-chatbot.jpg',
    liveUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 'proj-4',
    title: '个人博客系统',
    description: '支持 Markdown 的静态博客，集成评论和搜索功能',
    longDescription:
      '基于 Next.js 构建的静态博客系统，支持 Markdown 写作、标签分类、全文搜索。集成 Giscus 评论系统，使用 Tailwind CSS 实现暗色模式。Lighthouse 评分 98 分。',
    category: '前端',
    tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
    image: '/images/projects/blog.jpg',
    githubUrl: 'https://github.com/example/blog',
    featured: false,
  },
  {
    id: 'proj-5',
    title: '微服务网关',
    description: '基于 Go 的 API 网关，支持限流、熔断、服务发现',
    longDescription:
      '使用 Go 语言开发的高性能 API 网关，支持动态路由、负载均衡、限流熔断、链路追踪等功能。基于 etcd 实现服务发现，单机 QPS 达到 10 万+。',
    category: '后端',
    tags: ['Go', 'etcd', 'Docker', 'K8s'],
    image: '/images/projects/gateway.jpg',
    githubUrl: 'https://github.com/example/api-gateway',
    featured: false,
  },
  {
    id: 'proj-6',
    title: '数据可视化大屏',
    description: '企业级数据可视化大屏展示系统，实时数据刷新',
    longDescription:
      '面向企业管理层的大数据可视化展示系统。使用 ECharts + Vue 3 实现丰富的图表类型，支持实时数据刷新和多屏联动。适配 4K/8K 大屏显示。',
    category: '前端',
    tags: ['Vue 3', 'ECharts', 'WebSocket', 'DataV'],
    image: '/images/projects/datav.jpg',
    liveUrl: 'https://demo.example.com',
    featured: false,
  },
]
