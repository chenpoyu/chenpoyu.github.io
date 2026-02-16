import { defineStore } from 'pinia'

export const useParamsStore = defineStore('params', {
  state: () => ({
    isLoading: false,
    languages: [
      {
        title: '中文',
        short: 'zh-tw',
        icon: 'img:icons/flag_zh-tw.svg'
      },
      {
        title: 'English',
        short: 'en-us',
        icon: 'img:icons/flag_en-us.svg'
      }
    ],
    menus: [
      {
        title: 'menu.home',
        caption: '',
        icon: 'home',
        to: '/',
        open: '_self'
      },
      {
        title: 'menu.profile',
        caption: '',
        icon: 'person',
        to: '/profile',
        open: '_self'
      },
      {
        title: 'menu.work',
        caption: '',
        icon: 'work',
        to: '/work',
        open: '_self'
      },
      {
        title: 'menu.techarch',
        caption: '',
        icon: 'architecture',
        to: '/tech-architecture',
        open: '_self'
      },
      {
        title: 'menu.blog',
        caption: '',
        icon: 'article',
        to: 'https://chenpoyu.github.io/my-blog/',
        open: '_self'
      }
    ]
  }),

  getters: {
    getLoading: (state) => state.isLoading,
    getLanguages: (state) => state.languages,
    getMenus: (state) => state.menus
  },

  actions: {
    setLoading(val) {
      this.isLoading = val
    }
  }
})
