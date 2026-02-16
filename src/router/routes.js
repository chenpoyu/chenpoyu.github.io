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
          title: '架構設計實踐 - 技術架構展示',
          description: '展示微服務架構、物聯網系統、SSO單一登入、高併發系統等實際架構設計經驗。',
          keywords: '微服務架構,物聯網,IoT,SSO,高併發,系統設計,技術架構'
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
