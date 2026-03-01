export default {
  portfolioPage: {
    hero: {
      title: '作品集',
      subtitle: '精選的互動小遊戲、形象網頁與客製化專案，展現多元技術實力'
    },

    sections: {
      educationalWebsites: {
        title: '🎓 教育 / 益智網站',
        subtitle: '完整的教育學習與益智訓練網站',
        items: [
          {
            title: '2-6歲兒童遊樂園',
            description: '專為2-6歲兒童設計的9款互動學習遊戲，包含顏色配對、動物翻翻樂、數字氣球等。支援多學員系統、學習路徑地圖與成就徽章。',
            tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'Web Speech API'],
            image: 'https://chenpoyu.github.io/games-kids-playground/og-image.png',
            url: 'https://chenpoyu.github.io/games-kids-playground/',
            status: 'live'
          },
          {
            title: 'SilverVibe — 銀髮族益智護照平台',
            description: '專為 70 歲以上長輩打造的純前端認知訓練遊戲平台，涵蓋 16 款益智遊戲（記憶力、注意力、邏輯、語言、手眼協調、身心調適）。具備護照風格 UI、語音朗讀輔助、隱形行為追蹤與 WCAG 2.1 AA 無障礙合規。',
            tags: ['React 19', 'Vite', 'SCSS', 'Web Speech API', 'Web Audio API', 'WCAG 2.1 AA'],
            image: 'https://chenpoyu.github.io/games-sliver-vibe/og-banner.svg',
            url: 'https://chenpoyu.github.io/games-sliver-vibe/',
            status: 'live'
          }
        ]
      },

      games: {
        title: '🎮 遊戲作品集',
        subtitle: '懷舊經典與特色主題遊戲作品',
        items: [
          {
            title: '丙午年媽祖開壇抽獎',
            description: '結合五行命理與廟會風格的互動抽獎系統，具備四輪抽獎流程、命理鑑定語、火焰粒子背景與卡牌翻轉動畫。',
            tags: ['React 19', 'Vite', 'Framer Motion', 'SASS'],
            image: 'https://chenpoyu.github.io/games-lottery/og-image.png',
            url: 'https://chenpoyu.github.io/games-lottery/',
            status: 'live'
          },
          {
            title: '坦克大戰',
            description: '經典坦克大戰的網頁重製版，支援桌機鍵盤與手機觸控操作。具備響應式畫布、AI 敵軍、關卡系統和 8-bit 音效。',
            tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'RWD'],
            image: 'https://chenpoyu.github.io/games-tank-battle/og-image.png',
            url: 'https://chenpoyu.github.io/games-tank-battle/',
            status: 'live'
          },
          {
            title: '懷舊遊戲合集網站',
            description: '整合多款經典網頁遊戲的完整平台，包含記憶翻牌、打字速度測試、貪食蛇等經典遊戲。支援遊戲選單、分數排行榜與成就系統。',
            tags: ['React', 'Canvas', 'LocalStorage', 'RWD', 'Web Audio'],
            image: '',
            url: '',
            status: 'wip'
          }
        ]
      },

      customWebsites: {
        title: '🌐 客製化形象官網',
        subtitle: '為個人與企業量身打造的專業形象網站',
        items: [
          {
            title: '個人品牌官網（本站）',
            description: '您正在瀏覽的這個網站！使用 Quasar + Vue 3 打造，支援深色模式與多語系。',
            tags: ['Vue 3', 'Quasar', 'i18n', 'Dark Mode'],
            image: 'https://chenpoyu.github.io/images/og-site.png',
            url: '/',
            status: 'live'
          },
          {
            title: '客製化個人形象官網',
            description: '為獨立工作者打造的精練形象網站，具備作品集展示、服務介紹、客戶見證、聯絡表單等完整功能。支援響應式設計與 SEO 優化。',
            tags: ['Vue 3', 'Quasar', 'SCSS', 'RWD', 'SEO'],
            image: '',
            url: '',
            status: 'wip'
          },
          {
            title: '客製化商務官網',
            description: '為教育機構設計的商務形象網站，提供課程介紹、師資展示、線上報名、活動訊息等完整商業功能。支援多語系與後台管理系統。',
            tags: ['Vue 3', 'Quasar', 'CMS', 'i18n', 'RWD'],
            image: '',
            url: '',
            status: 'wip'
          }
        ]
      }
    },

    status: {
      live: '已上線',
      coming: '即將推出',
      wip: '籌備中'
    },

    cta: {
      visit: '前往瀏覽',
      source: '原始碼',
      comingSoon: '敬請期待'
    }
  }
}
