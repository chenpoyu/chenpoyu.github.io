export default {
  techarch: {
    hero: {
      eyebrow: 'Architecture Cases',
      title: '不能出錯的核心系統，往往就是需要介入的地方',
      titleLines: ['不能出錯的核心系統，', '往往就是需要介入的地方'],
      subtitle: '像會員整合、零售營運平台、車聯網服務這類牽動多個系統與部門的核心平台，通常就是我會介入的範圍。',
      description: '這些案子真正麻煩的，通常不是技術本身，而是邊界容易失焦、資料流容易失控、上線壓力又高。通常得先把結構整理清楚，團隊後續才推得動。',
      note: '如果你需要的是先看出風險、再把系統收斂成可交付形狀的人，下面三個場域就是最接近的例子。',
      badges: ['Architecture Advisory', 'System Integration', 'Delivery-Critical Design'],
      proof: [
        {
          title: '介入時機',
          description: '跨系統整合開始卡住，或案子已經逼近上線，但底層結構還撐不住。'
        },
        {
          title: '處理重點',
          description: '先把系統責任、資料流、整合方式和高風險路徑切清楚。'
        },
        {
          title: '合作結果',
          description: '讓團隊不是只拿到一張圖，而是真的有一套能持續交付的結構。'
        }
      ],
      panelEyebrow: '常見工作範圍',
      panelTitle: '三種最常介入的核心平台',
      panelNote: '先看場域，再看每一類系統裡通常會先收斂哪些事情。',
      panelPoints: ['系統邊界與責任重新切清楚', '資料流、整合方式與高風險路徑先穩住', '把架構判斷變成團隊能執行的拆解方案'],
      primaryCta: '查看服務方式',
      secondaryCta: '查看 AI 工作流'
    },
    positioning: {
      eyebrow: 'When Teams Usually Call Me In',
      title: '通常是在這幾種情況下，團隊會需要這類介入',
      titleLines: ['通常是在這幾種情況下，團隊會需要這類介入'],
      subtitle: '不是系統剛開始做的時候，而是已經開始複雜、風險上來、又需要有人把整體重新整理的時候。',
      items: [
        {
          title: '系統已經能跑，但越做越亂',
          description: '服務、資料流與責任分界都已經存在，可是每次加功能都越來越難，團隊開始不知道該先動哪裡。'
        },
        {
          title: '跨團隊或跨系統整合開始卡住',
          description: '會員、訂單、設備事件或營運流程彼此牽動之後，問題已經不是單一 API，而是整體怎麼重新切清楚。'
        },
        {
          title: '準備上線或擴張，但結構還不夠穩',
          description: '這時候要處理的不是再補幾支功能，而是先把高風險路徑、邊界與整合方式收斂下來。'
        }
      ]
    },
    casesIntro: {
      eyebrow: 'Case Studies',
      title: '三個最貼近實際處理經驗的系統場域',
      titleLines: ['三個最貼近實際處理經驗的系統場域'],
      subtitle: '先看圖，再看我處理的重點、設計判斷，以及最後帶來的改變。'
    },
    cases: {
      iotPlatform: {
        kicker: 'Automotive / Connected Service',
        title: '車聯網事件處理與遠端服務平台',
        heroFit: '適合處理設備事件、告警、即時狀態與歷史資料分流的系統。',
        summary: '這類系統真正難的不是接資料，而是把事件流、規則、通知與資料落地拆清楚。',
        contextTitle: '常見狀況',
        context: '設備狀態、告警、歷史資料與營運流程混在一起時，問題通常會越修越亂。',
        roleTitle: '處理重點',
        role: '先整理事件流、責任邊界、資料儲存方式，以及營運端如何接上這套平台。',
        decisionsTitle: '關鍵設計判斷',
        decisions: [
          '將設備接入、API 處理、流程編排與資料儲存拆成不同責任層',
          '用 AWS Step Functions 處理多步驟流程，而不是把流程硬寫進單一 API',
          '用 Redis、PostgreSQL 與 S3 分別處理即時狀態、主資料與歷史資料'
        ],
        outcomesTitle: '最後帶來的改變',
        outcomes: [
          '事件處理路徑更清楚，異常排查與規則調整成本下降',
          '新增設備類型或通知規則時，不需要重寫整個資料流程',
          '營運與技術團隊都能從同一套資料邏輯理解系統狀態'
        ],
        stackTitle: '關鍵模組',
        stack: ['API Gateway', 'Backend API', 'AWS Step Functions', 'Redis', 'PostgreSQL', 'AWS S3'],
        diagramTitle: '系統結構',
        diagramCaption: '重點是把 API、流程編排、即時狀態與歷史資料拆開，不讓所有問題卡在同一層。'
      },
      memberIdentity: {
        kicker: 'Identity / Membership Platform',
        title: '多品牌會員中心與 SSO 整合平台',
        heroFit: '適合處理跨品牌帳號、Token、權限規則與會員中心整合。',
        summary: '這類系統最難的不是登入頁，而是 Gateway、JWT 驗證、Redis 狀態與會員資料如何配合得穩。',
        contextTitle: '常見狀況',
        context: '會員資料散落、權限不一致、Token 流程混亂時，使用體驗與營運治理都會一起失控。',
        roleTitle: '處理重點',
        role: '處理 Gateway 的 JWT 驗證、Redis 狀態搭配、會員資料流向，以及跨品牌整合方式。',
        decisionsTitle: '關鍵設計判斷',
        decisions: [
          '把 Gateway 驗證 JWT 與後端會員資料查詢切開，避免授權邏輯四散',
          '用 Redis 搭配登入狀態與驗證資訊，減少每次請求都重做整套處理',
          '把跨品牌登入建立在同一套驗證邏輯上，而不是各品牌各自補同步機制'
        ],
        outcomesTitle: '最後帶來的改變',
        outcomes: [
          '會員在不同品牌之間的登入體驗更一致，整合成本下降',
          '後續新增品牌或新服務時，可以沿用同一套身分治理模型',
          '技術與營運都能更清楚掌握會員資料、權限與登入路徑'
        ],
        stackTitle: '關鍵模組',
        stack: ['API Gateway', 'JWT Validation', 'Redis', 'Member API', 'Member DB', 'Cross-brand Integration'],
        diagramTitle: '系統結構',
        diagramCaption: '把 Gateway 驗證、Redis 狀態與會員資料查詢拆清楚，整合才不會越做越亂。'
      },
      commerceScale: {
        kicker: 'Retail Commerce / Operations',
        title: '零售電商營運與訂單支撐平台',
        heroFit: '適合處理訂單、會員、庫存、活動與高流量營運流程。',
        summary: '這類平台最重要的不是把服務拆很多，而是先把 Gateway、Redis、API 與 Job 的工作方式整理好。',
        contextTitle: '常見狀況',
        context: '當訂單、商品、會員與活動流量同時存在時，只要資料路徑沒拆清楚，效能問題很快會變成交付問題。',
        roleTitle: '處理重點',
        role: '先判斷哪些流程走即時 API、哪些資料交給 Redis、哪些工作交給 Job，再決定服務邊界。',
        decisionsTitle: '關鍵設計判斷',
        decisions: [
          '把 Gateway、API、Redis 與排程 Job 的責任切清楚，避免所有工作都塞進同一層',
          '對高讀取資料先做 Redis 快取，減少 PostgreSQL 壓力',
          '把批次或延後處理工作交給 Job，而不是塞進即時訂單流程'
        ],
        outcomesTitle: '最後帶來的改變',
        outcomes: [
          '流量高峰時，前台體驗與後台處理可以分開承壓',
          '新活動、新模組與新服務比較容易加進既有平台',
          '效能優化不再只是局部修補，而是可以沿著結構持續優化'
        ],
        stackTitle: '關鍵模組',
        stack: ['CDN', 'API Gateway', 'Backend API', 'Redis', 'PostgreSQL', 'Scheduled Job'],
        diagramTitle: '系統結構',
        diagramCaption: '先把即時 API、Redis 快取與 Job 工作拆開，平台才有辦法穩定撐住流量。'
      }
    },
    capability: {
      eyebrow: 'Technical Judgment',
      title: '通常會直接介入的技術判斷',
      titleLines: ['通常會直接介入的技術判斷'],
      subtitle: '這些不是工具清單，而是複雜系統裡最容易讓專案卡住、也最需要有人先判斷清楚的地方。',
      items: [
        {
          title: '系統邊界與責任切分',
          description: '知道哪些功能應該放在同一個服務，哪些流程應該拆開，能直接影響後續擴充性與維運成本。'
        },
        {
          title: '跨系統資料流與整合治理',
          description: '不只串 API，而是把資料來源、同步時機、權限邏輯與錯誤處理設計成可追蹤、可治理的流程。'
        },
        {
          title: '高風險路徑的穩定性判斷',
          description: '對登入、交易、設備事件與高流量路徑，能先看出哪裡最容易出事，並優先設計保護機制。'
        },
        {
          title: '把架構設計轉成團隊可執行方案',
          description: '我在意的不只是架構方向，而是如何讓工程團隊能接續開發、營運能理解、後續也能持續擴充。'
        }
      ]
    },
    closing: {
      eyebrow: 'Next Step',
      title: '複雜系統真正缺的，通常不只是工程人力',
      description: '更常缺的是能把邊界、整合、風險順序與交付節奏一起整理清楚的技術角色。這也正是最常需要補上的位置。',
      primaryCta: '查看服務項目',
      secondaryCta: '直接聯絡我'
    }
  }
}
