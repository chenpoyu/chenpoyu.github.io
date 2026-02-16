export default {
  techarch: {
    hero: {
      title: '架構設計實踐',
      subtitle: '13 年實戰經驗累積的系統架構設計，涵蓋微服務、物聯網、高併發等核心場景'
    },
    highlights: '核心亮點',
    devtools: {
      title: '開發常用工具',
      description: '個人開發工具集，包含各種實用的開發輔助工具',
      button: '前往工具頁面'
    },
    microservices: {
      title: '微服務架構',
      description: '採用微服務架構設計，實現服務解耦與獨立部署。透過 Azure API Management 統一入口管理，各服務部署於 Azure App Service，使用 Azure Cache for Redis 提供高效能的分散式快取。支援彈性擴展與獨立版本控制。',
      highlights: [
        '服務拆分：依業務領域劃分獨立服務（User、Order、Product、Payment）',
        'API Gateway：Azure API Management 統一入口、路由、鑑權、限流',
        '微服務部署：各服務部署於 Azure App Service，支援獨立擴展',
        '分散式快取：Azure Cache for Redis 提升讀取效能與降低資料庫壓力',
        '資料庫分離：各服務使用獨立的 SQL Server 資料庫',
        '多端支援：支援 Web、Mobile、Admin 等多種客戶端'
      ]
    },
    iot: {
      title: '物聯網架構',
      description: '物聯網系統架構，支援大規模感測器與設備的即時數據處理。採用 AWS Lambda 進行事件驅動處理，AWS Step Functions 協調工作流程，API Gateway 提供 RESTful 介面。透過 Redis Cache 實現高效能快取，使用 PostgreSQL 儲存設備狀態與業務數據，S3 儲存歷史數據。支援彈性擴展與 Serverless 架構。',
      highlights: [
        '設備層：支援大規模 IoT 感測器、智能設備與監控設備接入',
        'API Gateway：AWS API Gateway 提供 RESTful APIs 統一入口',
        'Serverless 處理：AWS Lambda 進行數據驗證、處理與警示處理',
        '工作流編排：AWS Step Functions 協調多個 Lambda 函數的工作流',
        '快取與儲存：Redis 快取即時數據，S3 儲存歷史數據',
        '資料庫：PostgreSQL 儲存設備狀態與業務數據'
      ]
    },
    sso: {
      title: 'SSO 單一登入架構',
      description: '單一登入(SSO)架構設計，整合多個應用系統的身份驗證。使用 OAuth 2.0 + JWT 實現安全的授權機制，支援跨網域認證，用戶只需登入一次即可存取所有整合服務。採用自建認證中心，提供完整的權限管理與稽核功能。',
      highlights: [
        'OAuth 2.0：業界標準的授權協議',
        'JWT Token：無狀態的身份驗證機制',
        '單一登入：一次登入，全站暢通',
        '集中管理：統一的用戶身份與權限管理',
        '安全性：Token 過期機制與刷新策略',
        '跨品牌整合：多品牌會員資料統一管理'
      ]
    },
    highconcurrency: {
      title: '高併發系統設計',
      description: '高併發系統設計，支援大規模並行訪問的多層架構。透過 Azure CDN 加速靜態內容交付，Load Balancer 分散流量，Azure Cache for Redis 提供高效能快取層，後端應用服務支援水平擴展。採用 Message Queue 處理非同步任務，SQL Server 主從架構實現讀寫分離與高可用性。',
      highlights: [
        'CDN 加速：Azure CDN 靜態資源就近分發，降低延遲',
        '負載均衡：Load Balancer 實現流量均勻分配',
        'Redis 集群：Azure Cache for Redis 分散式快取提升效能',
        '應用服務：多個 App Service 實例支援水平擴展',
        '異步處理：Message Queue + Worker 處理耗時任務',
        '資料庫優化：SQL Server 主從架構實現讀寫分離'
      ]
    }
  }
}
