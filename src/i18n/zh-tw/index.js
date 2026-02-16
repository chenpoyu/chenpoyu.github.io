import home from './home'
import services from './services'
import techarch from './techarch'

export default {
  failed: '執行失敗',
  success: '執行成功',
  ajax: {
    error: {
      404: '查無資料',
      500: '系統錯誤',
      network: '網路錯誤，請重新連線後重整網頁',
    }
  },

  myname: 'Poyu Chen 陳柏妤',
  footer: 'Copyright © 2026 Poyu Chen. All rights reserved.',

  menu: {
    home: '首頁',
    profile: '關於我',
    work: '服務項目',
    techarch: '技術經驗',
    blog: '部落格',
  },

  dark_mode: '深色模式',

  lang: {
    title: '語言',
    zh_tw: '繁體中文',
    en_us: 'English',
  },

  // Import home page translations
  ...home,

  tech: {
    years_exp: '年經驗'
  },

  skills: {
    title: '技術能力',
    subtitle: '多年實戰經驗累積的全端技術棧',
    categories: [
      { name: '系統架構與設計' },
      { name: '前端與移動開發' },
      { name: '後端開發' },
      { name: '資料庫技術' },
      { name: '雲端與 DevOps' }
    ],
    items: [
      {
        name: 'UML/系統建模',
        description: 'Use Case、類別圖、循序圖、活動圖'
      },
      {
        name: '需求分析',
        description: '利害關係人訪談、需求文件撰寫'
      },
      {
        name: '架構設計',
        description: 'Microservices、DDD'
      },
      {
        name: 'API 設計',
        description: 'RESTful、gRPC、API Gateway'
      },
      {
        name: '資料庫設計',
        description: 'ER Model、正規化、效能優化'
      },
      {
        name: 'Vue.js',
        description: 'SPA/CSR、Composition API、Vite'
      },
      {
        name: 'React',
        description: 'SPA/CSR、Hooks、Redux'
      },
      {
        name: 'iOS/Swift',
        description: 'SwiftUI、UIKit'
      },
      {
        name: 'Flutter',
        description: 'Widget、State Management、Provider'
      },
      {
        name: 'Java/Spring Boot',
        description: 'Spring Cloud、JPA、Security'
      },
      {
        name: '.NET Core/C#',
        description: 'ASP.NET Core、Entity Framework、LINQ'
      },
      {
        name: 'PHP/Laravel',
        description: 'Eloquent ORM、Artisan、Queue'
      },
      {
        name: 'Microservices',
        description: '服務拆分、API Gateway、分散式架構'
      },
      {
        name: 'Message Queue',
        description: 'RabbitMQ、Redis Stream'
      },
      {
        name: 'PostgreSQL',
        description: '進階查詢、效能調校、Partitioning'
      },
      {
        name: 'SQL Server',
        description: 'T-SQL、SSRS、SSIS、Always On'
      },
      {
        name: 'Redis',
        description: 'Cache Strategy、Pub/Sub、Cluster'
      },
      {
        name: 'AWS',
        description: 'EC2、S3、RDS、Lambda、CloudFormation'
      },
      {
        name: 'Azure',
        description: 'App Service、SQL Database、DevOps、Functions'
      },
      {
        name: 'Docker',
        description: 'Multi-stage Build、Compose、Registry'
      },
      {
        name: 'CI/CD',
        description: 'Jenkins、GitLab CI、GitHub Actions'
      }
    ]
  },

  projects: {
    title: '重點專案經歷',
    subtitle: '深度參與的大型系統開發與架構設計',
    luxgen: {
      name: 'LUXGEN 車聯網平台',
      description: '設計並開發大型車聯網系統，整合車輛即時數據、用戶管理與雲端服務，支援數萬台車輛同時連線。',
      tags: '車聯網 / IoT',
      highlights: [
        '架構設計：微服務架構，採用 Spring Cloud 與 API Gateway',
        '即時通訊：WebSocket 實現車輛與平台即時數據傳輸',
        '高併發處理：Redis Cluster + RabbitMQ 處理海量數據',
        '雲端部署：AWS 架構，包含 ELB、Auto Scaling、RDS'
      ]
    },
    parking: {
      name: '智慧停車管理系統',
      description: '開發全方位停車場管理解決方案，整合車牌辨識、支付系統與即時車位監控。',
      tags: '智慧城市',
      highlights: [
        '影像辨識：整合 AI 車牌辨識系統',
        '金流整合：串接多家第三方支付平台',
        '即時監控：WebSocket + Redis Pub/Sub 實現即時車位更新',
        'APP 開發：iOS (Swift) 與 Android 雙平台開發'
      ]
    },
    nitori: {
      name: 'NITORI 宜得利電商系統',
      description: '大型零售電商平台開發，支援高流量訂單處理與庫存管理系統。',
      tags: '電商',
      highlights: [
        '高可用架構：分散式系統設計，支援高併發訂單處理',
        '庫存管理：即時庫存同步機制，避免超賣問題',
        '效能優化：Redis 快取策略，頁面載入時間減少 60%',
        '數據分析：ELK Stack 建置日誌分析與業務報表'
      ]
    },
    charging: {
      name: '電動車充電站管理平台',
      description: '開發充電站營運管理系統，涵蓋充電設備監控、會員管理與計費系統。',
      tags: '綠能 / IoT',
      highlights: [
        'IoT 整合：OCPP 協定整合充電樁設備',
        '計費系統：彈性計費規則引擎，支援多種費率方案',
        '監控面板：Grafana + Prometheus 即時監控充電站狀態',
        '移動應用：React Native 開發跨平台 APP'
      ]
    },
    seven: {
      name: '7-ELEVEN 物流配送系統',
      description: '大型連鎖超商物流管理系統，整合訂單、倉儲與配送路徑優化。',
      tags: '物流',
      highlights: [
        '路徑優化：演算法優化配送路線，降低物流成本 25%',
        '即時追蹤：GPS 整合與即時配送狀態更新',
        'WMS 整合：倉儲管理系統與 PDA 設備整合',
        '大數據分析：預測模型優化庫存配置'
      ]
    },
    unimember: {
      name: '統一集團會員整合平台',
      description: '跨品牌會員系統整合，實現單一會員帳號串接多個子品牌服務。',
      tags: '會員系統',
      highlights: [
        'SSO 單一登入：OAuth 2.0 實現跨平台認證',
        '點數系統：分散式點數交易與兌換機制',
        '會員畫像：大數據分析建立精準行銷模型',
        '安全防護：資安強化，通過 ISO 27001 稽核'
      ]
    },
    government: {
      name: '政府系統標案',
      description: '承接國防部、高公局等政府單位系統開發與維運專案，確保系統穩定與資安合規',
      tags: '政府標案 • 資安合規 • 公文系統',
      highlights: [
        '國防部軍民網公文交換系統',
        '高公局邊坡與隧道管理系統',
        '符合政府資安規範與稽核',
        '系統穩定運行與持續維護'
      ]
    },
    military: {
      name: '軍方資電系統',
      description: '為資電指揮部開發電子簽核表單系統，處理軍方內部文件流程與權限管理',
      tags: '軍方專案 • 電子簽核 • 權限控管',
      highlights: [
        '資電指揮部電子簽核表單系統',
        '多層級權限管理機制',
        '符合軍方資安要求',
        '支援離線與線上雙模式運作'
      ]
    }
  },

  experience: {
    title: '工作經歷',
    subtitle: '13 年技術生涯，從工程師到技術管理者的成長歷程',
    timeline: [
      {
        year: '2022/8 - 現在',
        title: '技術經理 (軟體專案處處長)',
        company: '維宜科技股份有限公司',
        description: '擔任專案軟體處處長，負責管理四個部門（會計帳務、物聯網、會員、人事薪資），總人數最高達 32 人',
        achievements: [
          '負責軟體專案開發，包含政府標案與客製化軟體專案',
          '建立技術標準與開發流程，制定公版開發底層與框架',
          '持續了解執行單位工作內容，提供經驗分享與工具導入',
          '協助同仁提升產值，優化工作流程'
        ]
      },
      {
        year: '2019 - 2025/11',
        title: '技術經理 (專案部部長）',
        company: '越世實業股份有限公司',
        description: '擔任技術部門主管，負責管理與帶領專案開發部門，管理人數最多達 40 人',
        achievements: [
          '承接政府標案、客製化軟體專案、人力外包服務',
          '建立公司技術規範：公版開發底層、文件規格、專案開發流程',
          '主導開發物聯網系統、車聯網系統、電子商務系統',
          '設計系統架構因應高併發、大流量場景'
        ]
      },
      {
        year: '2016/4 - 2019',
        title: '資深工程師',
        company: '越世實業股份有限公司',
        description: '負責 Java 系統架構開發與維護，參與車聯網、電商等核心專案',
        achievements: [
          '負責納智捷車聯網系統架構開發',
          '優化系統效能，處理高併發場景',
          '使用 Spring、Hibernate、MyBatis 等技術',
          '累積系統架構設計與技術選型經驗'
        ]
      },
      {
        year: '2013/4 - 2016/4',
        title: '技術顧問 (Java 工程師)',
        company: '鴻揚科技有限公司',
        description: '擔任外包人力派遣至宏碁 Acer，進行系統的開發與維護',
        achievements: [
          '參與財稅局地方稅系統再造-土地增值稅務服務',
          '55688生活大管家系統建置',
          '外貿協會內部系統維運',
          '使用 Java、Struts2、Spring、Oracle 等技術'
        ]
      }
    ]
  },

  profile: {
    label: '核心優勢：13 年全端技術經驗與 40+ 人團隊管理實戰',
    description: '畢業於國立中興大學資訊管理學系，擁有超過 13 年的軟體開發與技術管理深度經驗。職涯前期深耕 Java 工程師領域，後期晉升為軟體處處長，具備從第一線代碼撰寫到高層技術決策的完整視角。\n\n精通 Java (Spring) 與 .NET Core 雙體系，熟練運用 Vue.js/React、PostgreSQL 與雲端架構 (AWS/Azure)。曾多次設計並維護高併發、大流量系統（如 IoT、車聯網），確保系統在複雜場景下的穩定性。\n\n在帶領 32 至 40 人團隊的過程中，不僅負責進度管控，更專注於「最佳解決方案的評估」。能迅速切入陌生專案並掌握核心問題，提供專業判斷以排除技術障礙，確保資源精準投放。',
    develop: '技術開發',
    leader: '團隊領導',
    teach: '傳承分享',
    label2: '我深信，成功與不成功的企業家之所以不同，有半數原因在於能否堅持下去。',
    label2_from: '── Steve Jobs',
    timeline: {
      title1: '學習第一個程式語言 Java',
      message1: '資訊管理學系開啟程式這條路，藉著熱情寫出許許多多的小程式，也在初入門的學校課程中，接觸了傳統的 JSP Servlet，實作會員系統、購物車、商城下單...，奠定日後踏入資訊業的契機。',
      title2: '開啟網頁工程師之門 PHP',
      message2: '畢業專題做產學合作，利用 PHP、MySQL、HTML、JavaScript、jQuery、CSS 開發比賽報名與抽籤系統。在後來工作後的時間也利用 Laravel 搭配 XAMPP 開發書店系統 Web API 提供給 APP 操作。',
      title3: '五花八門技術修煉 Framework、Database、Server、OS',
      message3: '踏入資訊業界的頭年就是技術練功房，快速提升，接觸 Spring、Struts、Ajax、Hibernate、MyBatis、Crontab、Oracle、SQL Server、PostgreSQL、PL/SQL、Windows Server、Linux、Ubuntu... 透過不同的案子接觸不一樣的技術，提升經驗與能力。',
      title4: '跟上 APP 潮流 Swift',
      message4: '在資訊業界有了點資歷後，希望自己不斷進步，於是自學 Swift 4 開發 iOS APP，練習過程中依照自己的需求實作多個 APP，也因此些作品進而積極爭取到公司 APP 案的機會進行實作，先後開發上架三四個 APP。',
      title5: '跳脫舒適圈！我不寫程式了！',
      message5: '開發、維運、網頁、手機、設計、分析... 專案中的各個過程、角色、狀況都經歷過後，終於得到機會挑戰管理領導領域，並非從此不寫程式，而是要將人適才所用、因材施教，帶領工程師完成專案，給予方向與建議，並分享經驗與協助規劃職涯。',
      title6: '以身作則 Vue.js、.NET Core',
      message6: '開始帶領專案團隊後漸漸與技術有脫節，當面臨問題或是人力吃緊時會出現無法協助的情況，讓我重新正視我自己，於是將管理工作開始釋放出更多空間與權限，讓同仁有機會展現，並將多出的時間加入專案與專研技術，包含 C#、.NET Core、Vue.js、Ruby on Rails、Node.js、Golang、AWS、Azure、CDN、ELK...',
      title7: '轉型專業，提供貢獻',
      message7: '透由接軌更多新的技術後，選擇對於團隊發展最好的方向，讓團隊提供更專業的服務與解決方案，轉型個人價值與量化產值，提高部門與公司利益。',
      title8: '我的未來不是夢',
      message8: '資訊業界深如海廣如天，只有持續精進才能立足，期許未來依然跟上技術的腳步，利用資訊科技提升生活，增加娛樂與便利性。',
    },
    label3: '對任何技能的掌握，都需要一生的刻苦操練。',
    card: {
      title1: '程式語言',
      subtitle1: '',
      message1: '- Java [13+ years exp.] \n- C# / .NET [6+ years exp.] \n- PHP [3+ years exp.] \n- Swift [2+ years exp.] \n- Vue.js [5+ years exp.] \n- React [4+ years exp.] \n- SQL / PL/SQL / T-SQL \n- HTML / CSS \n- JavaScript / TypeScript / jQuery',
      title2: '框架與工具',
      subtitle2: '',
      message2: '- Spring MVC / Spring Boot [13+ years exp.] \n- Hibernate / MyBatis [10+ years exp.] \n- ASP.NET Core [6+ years exp.] \n- Entity Framework Core [6+ years exp.] \n- Laravel [3+ years exp.] \n- Quasar / Vuetify [4+ years exp.]',
      title3: '資料庫',
      subtitle3: '',
      message3: '- PostgreSQL [10+ years exp.] \n- SQL Server [10+ years exp.] \n- Oracle [8+ years exp.] \n- MySQL [8+ years exp.] \n- Redis [5+ years exp.] \n- ElastiCache [3+ years exp.]',
      title4: '其他技術',
      subtitle4: '',
      message4: '- Docker / Kubernetes \n- AWS / Azure \n- Linux / Ubuntu \n- Git / CI/CD \n- RESTful API / gRPC \n- Nginx / Load Balancer \n- ELK Stack \n- Figma / Draw.io',
    }
  },

  ...services,
  ...techarch
}
