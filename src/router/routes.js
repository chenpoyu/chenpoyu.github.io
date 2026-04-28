const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Home.vue'),
        meta: {
          title: 'Poyu Chen 陳柏妤 - 資深全端架構師 / 技術團隊領導者',
          description: '13+ 年開發經驗 • 車聯網/物聯網專家 • 電商平台與 SSO 架構師 • 團隊領導',
          keywords: '陳柏妤,Poyu Chen,全端架構師,系統架構設計,車聯網,物聯網,電商平台,SSO,Java,Spring Boot,.NET Core,Vue.js,React'
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/profile/Profile.vue'),
        meta: {
          title: '關於我 - Poyu Chen 陳柏妤',
          description: '13年技術生涯，從工程師到技術管理者的成長歷程。專精 Java、.NET Core、Vue.js、React 等技術棧。',
          keywords: '個人簡介,技術經歷,職涯發展,技術能力,全端開發'
        }
      },
      {
        path: '/work',
        name: 'work',
        component: () => import('pages/work/Services.vue'),
        meta: {
          title: '服務項目 - 技術諮詢與開發服務',
          description: '提供系統架構設計、程式開發、團隊管理等專業技術服務。實際案例包含納智捷車聯網、康是美電商、統一集團會員系統等。',
          keywords: '技術諮詢,系統架構,程式開發,團隊管理,技術服務,軟體外包'
        }
      },
      {
        path: '/tech-architecture',
        name: 'tech-architecture',
        component: () => import('pages/TechArchitecture.vue'),
        meta: {
          title: '架構案例 - Poyu Chen 陳柏妤 | 跨系統整合・SSO・高流量平台',
          description: '聚焦跨系統整合、會員身分治理、車聯網/物聯網事件流與高流量平台等架構案例，說明我如何做技術判斷與設計收斂。',
          keywords: '架構案例,系統架構,跨系統整合,SSO,會員整合,物聯網,車聯網,高流量平台,技術判斷,系統設計'
        }
      },
      {
        path: '/ai-workflow',
        alias: '/portfolio',
        name: 'ai-workflow',
        component: () => import('pages/ai-workflow/AiWorkflow.vue'),
        meta: {
          title: 'AI 開發工作流 - Poyu Chen 陳柏妤 | Vibe Coding ・ AI 協作 ・ 上線作品',
          description: '說明我如何把 AI 導入真實開發流程，從需求拆解、原型生成、程式修正到上線驗證，並以教育網站、互動遊戲與品牌網站作為實戰案例。',
          keywords: 'AI 工作流,AI 開發,Vibe Coding,Prompt Engineering,作品案例,互動遊戲,教育網站,品牌官網,Vue.js,React,Quasar,Poyu Chen,陳柏妤',
          ogImage: 'https://chenpoyu.github.io/images/portfolio/og-portfolio.png',
          ogImageWidth: '1200',
          ogImageHeight: '630',
          canonical: 'https://chenpoyu.github.io/#/ai-workflow'
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
