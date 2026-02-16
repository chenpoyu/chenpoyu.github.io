export default {
  servicesPage: {
    hero: {
      title: '專業技術服務',
      subtitle: '13 年實戰經驗，提供全方位技術解決方案'
    },
    items: [
    {
      title: '系統架構設計與諮詢',
      description: '為您的專案打造穩定、高效、可擴展的系統架構，從技術選型到實施方案提供全程指導。',
      icon: 'architecture',
      color: 'primary',
      offerings: [
        {
          name: '高併發系統架構',
          icon: 'speed',
          description: '設計能承受大流量、高併發場景的系統架構，包含負載均衡、快取策略、資料庫優化等。'
        },
        {
          name: '微服務架構設計',
          icon: 'hub',
          description: '規劃與實施微服務架構，提升系統的可維護性、可擴展性與團隊開發效率。'
        },
        {
          name: '雲端架構規劃',
          icon: 'cloud',
          description: '基於 AWS、Azure 的雲端架構設計，包含 IaaS、PaaS、容器化部署策略。'
        },
        {
          name: '系統整合方案',
          icon: 'sync_alt',
          description: '設計跨系統整合方案，包含 API 設計、訊息佇列、資料同步機制。'
        }
      ],
      offeringsTitle: '服務內容',
      benefits: [
        '13 年實戰經驗，經手過物聯網、車聯網、電商等高併發場景',
        '深入理解業務需求，提供符合企業發展的技術方案',
        '注重系統可維護性，避免技術債務累積',
        '提供完整技術文件與架構圖，確保知識傳承'
      ],
      benefitsTitle: '為什麼選擇我',
      cases: [
        '車聯網/物聯網：納智捷車聯網平台、納智捷充電樁系統、中油物聯網能源管理、萬磁王智慧停車',
        '電商平台：宜得利電商平台、康是美 EC 3.0',
        'SSO 會員整合：統一集團多品牌會員系統',
        '政府標案：國防部、高公局、資電指揮部'
      ],
      casesTitle: '實際案例'
    },
    {
      title: '程式開發',
      description: '提供高品質的全端軟體開發服務，從網站到手機應用程式，協助實現您的產品願景。',
      icon: 'code',
      color: 'secondary',
      offerings: [
        {
          name: '全端網站開發',
          icon: 'web',
          description: '使用 Vue.js、React、Java、C# 等技術，開發現代化、高效能的網站應用程式。'
        },
        {
          name: '手機 APP 開發',
          icon: 'phone_iphone',
          description: '開發 iOS 與 Flutter 跨平台手機應用程式，提供原生或跨平台解決方案。'
        },
        {
          name: '系統整合開發',
          icon: 'sync_alt',
          description: '客製化系統開發與整合，包含 API 串接、第三方服務整合、資料交換。'
        },
        {
          name: '程式碼審查',
          icon: 'verified',
          description: '程式碼品質審查與優化建議，提升程式碼可讀性、效能與安全性。'
        }
      ],
      offeringsTitle: '服務內容',
      benefits: [
        '13 年開發經驗，精通多種程式語言與框架',
        '注重程式碼品質與可維護性',
        '遵循業界最佳實踐與設計模式',
        '提供完整技術文件與交接'
      ],
      benefitsTitle: '為什麼選擇我',
      cases: [
        '車聯網/物聯網：納智捷車聯網、納智捷充電樁、中油物聯網、萬磁王停車系統',
        '電商平台：宜得利電商、康是美 EC 3.0、7-11 線上購物',
        'SSO 會員系統：統一集團會員整合',
        '政府標案：多個政府單位系統開發'
      ],
      casesTitle: '實際案例'
    },
    {
      title: '團隊管理與培訓',
      description: '協助企業建立高效的技術團隊，提供人才培育與管理經驗分享。',
      icon: 'groups',
      color: 'accent',
      offerings: [
        {
          name: '團隊組建與管理',
          icon: 'group_add',
          description: '協助規劃團隊結構、帶領技術團隊、建立開發流程與評估標準。'
        },
        {
          name: '人才培養',
          icon: 'school',
          description: '提供技術培訓、職涯輔導、技能提升，協助工程師成長與發展。'
        },
        {
          name: '開發規範建立',
          icon: 'rule',
          description: '建立程式碼規範、文件標準、Git 流程，確保團隊協作順暢。'
        },
        {
          name: '技術文化塑造',
          icon: 'psychology',
          description: '協助建立學習型組織，鼓勵技術分享、知識傳承與持續改進。'
        }
      ],
      offeringsTitle: '服務內容',
      benefits: [
        '曾帶領 40 人技術團隊，豐富的管理實戰經驗',
        '了解不同階段工程師的需求與成長路徑',
        '重視團隊文化與成員發展，激勵團隊士氣',
        '提供實戰經驗分享，協助團隊提升效能'
      ],
      benefitsTitle: '為什麼選擇我',
      cases: [
        '軟體公司技術部門管理',
        '車聯網/物聯網/電商多個大型專案團隊管理',
        '工程師職涯發展輔導與技術培訓',
        '開發流程與技術規範建立'
      ],
      casesTitle: '實際案例'
    }
    ],
    process: {
      title: '合作流程',
      steps: [
        {
          title: '需求溝通',
          description: '深入了解您的專案需求、目標與挑戰，評估時程與資源。'
        },
        {
          title: '方案評估',
          description: '分析現況，提供多種技術方案，包含優缺點分析與成本評估。'
        },
        {
          title: '執行計畫',
          description: '確定合作方式，制定詳細的執行計畫與里程碑。'
        },
        {
          title: '專案實施',
          description: '按計畫執行，定期回報進度，持續溝通與調整。'
        },
        {
          title: '成果交付',
          description: '交付完整的技術文件、程式碼或諮詢報告，確保知識傳承。'
        },
        {
          title: '後續支援',
          description: '提供一定期間的技術支援，協助解決實施後的問題。'
        }
      ]
    },
    cta: {
      title: '準備開始您的專案？',
      description: '無論是技術請詢、系統開發或團隊建置，我都能提供專業協助',
      or: '或是直接 Email 聯繫',
      email_button: 'Email 聯絡'
    }
  }
}
