# Poyu Chen - 專業技術服務形象網站

[![Vue 3](https://img.shields.io/badge/Vue-3.4-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Quasar 2](https://img.shields.io/badge/Quasar-2.14-1976D2?style=flat-square&logo=quasar)](https://quasar.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

> 展示 13 年以上全端開發經驗與技術領導能力的專業形象網站

[English](./README.md) | 繁體中文

## 🎯 專案簡介

這是一個現代化、響應式的個人技術服務網站，用於展示專業技術能力並提供技術諮詢服務的完整資訊。網站特色包含：

- **專業首頁**：展現核心價值與技術能力
- **服務說明**：詳細的技術服務項目介紹
- **技術專長**：完整的技術棧與專案經驗展示
- **職涯歷程**：專業成長時間軸
- **技術經驗**：架構設計模式與系統實作展示

## 🚀 主要功能

### 專業展示
- 清晰現代的 UI 設計與流暢動畫
- 完全響應式設計，支援所有裝置
- 深色模式支援
- 多語言切換 (繁體中文 / English)

### 互動功能
- **數字計數器動畫**：捲動觸發的數字動畫，展示 13+ 年經驗、100+ 專案、40+ 團隊規模及 20+ 技術領域
- **聯絡表單**：整合 Formspree 的表單系統，包含驗證與成功通知
- **流暢滾動**：區塊間平滑導航，提升使用者體驗

### 技術實作展示
- 微服務架構設計
- 物聯網系統架構
- SSO 單一登入實作
- 高併發系統設計

### 效能與最佳實踐
- 基於 Vite 的極速建置系統
- 程式碼分割與延遲載入
- 圖片優化 (WebP 格式與後援)
- SEO 友善的 meta 標籤
- PWA 漸進式網頁應用程式功能

## 🛠️ 技術棧

### 核心框架
- **Vue 3** (v3.4.19) - 使用 Composition API 的漸進式框架
- **Quasar Framework** (v2.14.5) - 高效能 Material Design 元件庫
- **Vue Router** (v4.2.5) - 官方路由解決方案
- **Pinia** (v2.1.7) - 狀態管理 (Vuex 繼任者)
- **Vue I18n** (v9.9.1) - 國際化外掛

### 建置工具
- **Vite** (v5.1.3) - 次世代前端建置工具
- **@quasar/app-vite** (v1.8.4) - Quasar CLI 與 Vite 整合
- **ESLint** (v8.56.0) - 程式碼品質檢查
- **Prettier** (v3.2.5) - 程式碼格式化

### API 與資料
- **Axios** (v1.6.7) - HTTP 客戶端
- **Mermaid** (v10.9.5) - 流程圖與架構圖生成

## 📋 系統需求

開始之前，請確認已安裝：

- **Node.js**: >= 18.18.0
- **npm**: >= 9.0.0 或 **Yarn**: >= 1.22.0
- **Quasar CLI**: `npm install -g @quasar/cli`

## 🔧 安裝步驟

1. **複製專案**
```bash
git clone https://github.com/chenpoyu/chenpoyu.github.io.git
cd chenpoyu.github.io
```

2. **安裝相依套件**
```bash
npm install
# 或
yarn install
```

3. **啟動開發伺服器**
```bash
npm run dev
# 或
quasar dev
```

應用程式將在 `http://localhost:5000` 執行

## 📦 建置與部署

### 正式環境建置
```bash
npm run build
# 或
quasar build
```

建置完成的檔案將在 `dist/spa` 目錄中。

### 不同平台建置
```bash
# PWA (漸進式網頁應用)
quasar build -m pwa

# SSR (伺服器端渲染)
quasar build -m ssr

# Electron (桌面應用程式)
quasar build -m electron

# Capacitor (行動應用程式)
quasar build -m capacitor -T ios
quasar build -m capacitor -T android
```

## 🏗️ 專案結構

```
chenpoyu.github.io/
├── public/              # 靜態資源
│   ├── icons/          # 應用程式圖示與 favicon
│   ├── robots.txt      # 搜尋引擎爬蟲規則
│   └── sitemap.xml     # 網站結構（SEO）
├── src/
│   ├── assets/         # 圖片、字型等資源
│   ├── boot/           # 啟動檔案 (應用程式初始化)
│   │   ├── axios.js    # Axios 設定
│   │   └── i18n.js     # 國際化設定
│   ├── components/     # 可重用的 Vue 元件
│   │   ├── AjaxBar.vue
│   │   └── Language.vue
│   ├── css/            # 全域樣式
│   │   ├── app.scss    # 主樣式表
│   │   └── quasar.variables.scss
│   ├── i18n/           # 翻譯檔案
│   │   ├── index.js
│   │   ├── en-us/      # 英文翻譯
│   │   └── zh-tw/      # 繁體中文翻譯
│   ├── layouts/        # 頁面佈局
│   │   ├── Header.vue
│   │   └── MainLayout.vue
│   ├── pages/          # 頁面元件
│   │   ├── Home.vue    # 首頁
│   │   ├── TechArchitecture.vue  # 技術經驗
│   │   ├── Error404.vue
│   │   ├── portfolio/  # 作品集頁面
│   │   │   └── Portfolio.vue
│   │   ├── profile/    # 關於我頁面
│   │   │   ├── Index.vue
│   │   │   └── Profile.vue
│   │   └── work/       # 服務項目頁面
│   │       ├── Index.vue
│   │       └── Services.vue
│   ├── router/         # Vue Router 設定
│   │   ├── index.js
│   │   └── routes.js
│   ├── stores/         # Pinia stores (狀態管理)
│   │   ├── index.js
│   │   ├── params.js    # 全域參數
│   │   └── store-flag.d.ts
│   ├── utils/          # 工具函式
│   │   └── structuredData.js  # SEO 結構化資料
│   ├── App.vue         # 根元件
│   └── index.template.html
├── index.html          # 入口 HTML 檔案
├── jsconfig.json       # JavaScript/TypeScript 設定
├── package.json        # 專案相依性
├── quasar.config.js    # Quasar 框架設定
└── README.md          # 本檔案
```

## 🎨 核心頁面

### 首頁 (`src/pages/Home.vue`)
- Hero 區塊含專業介紹
- 核心價值展示
- 詳細服務項目與功能
- 技術專長展示含經驗年資
- 專業數據統計
- 多管道聯絡方式

### 關於我 (`src/pages/profile/Profile.vue`)
- 詳細職涯時間軸
- 技術能力分類展示
- 重點專案展示（LUXGEN、NITORI、7-ELEVEN 等）
- 專業成就
- 核心競爭力

### 服務項目 (`src/pages/work/Services.vue`)
- 系統架構設計詳細說明
- 程式開發服務內容
- 團隊管理與培訓
- 合作流程說明
- 實際專案案例
- 聯絡請求

### 技術經驗 (`src/pages/TechArchitecture.vue`)
- 使用 Azure 服務的微服務架構設計
- 採用 AWS Lambda 與 Step Functions 的物聯網架構
- SSO 單一登入實作模式
- 使用 CDN 與快取的高併發系統設計
- 互動式 Mermaid 架構圖視覺化

### 作品集 (`src/pages/portfolio/Portfolio.vue`)
- 教育網站：2-6歲兒童遊樂園、樂齡益智區
- 遊戲作品：媽祖開壇抽獎、坦克大戰、懷舊遊戲合集
- 客製化形象官網：個人與商務形象網站模板
- 動態載入各專案的 OG 縮圖，載入失敗時顯示預設圖示
- JSON-LD 結構化資料（CollectionPage + ItemList）增強搜尋曝光

## 🔒 環境變數

在專案根目錄建立 `.env` 檔案：

```env
# 應用程式設定
VUE_APP_TITLE=Poyu Chen - 技術諮詢服務
VUE_APP_DESCRIPTION=專業技術諮詢與軟體架構服務
```

## 📱 響應式設計

應用程式已針對以下裝置完全優化：

- 桌面 (1920px+)
- 筆電 (1024px - 1919px)
- 平板 (768px - 1023px)
- 手機 (320px - 767px)

## 🎯 效能優化

- **程式碼分割**：自動依路由分割程式碼
- **延遲載入**：元件與路由按需載入
- **圖片優化**：WebP 格式含後援方案
- **快取策略**：Service Worker 離線功能
- **Bundle 分析**：使用 `quasar build --analyze` 檢查檔案大小

## 🧪 開發指南

### 程式碼風格
```bash
# 執行 Linter
npm run lint

# 自動格式化程式碼
npm run format
```

### Commit 規範
遵循 [Conventional Commits](https://www.conventionalcommits.org/)：
```
feat: 新增服務項目區塊
fix: 修復手機版選單問題
docs: 更新 README API 說明
style: 使用 prettier 格式化程式碼
refactor: 重構 store 模組
perf: 優化圖片載入
test: 新增元件單元測試
```

## 🤝 貢獻

歡迎貢獻！請遵循以下步驟：

1. Fork 此專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'feat: add AmazingFeature'`)
4. 推送至分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 👤 作者

**陳柏妤 (Poyu Chen)**

- 專業角色：技術經理 | 解決方案架構師 | 技術顧問
- 經驗：13 年以上全端開發與團隊領導經驗
- Email: chenpoyu1123@gmail.com
- 地點：台灣台北

### 專業領域
- 高併發場景系統架構設計
- 技術團隊建置與管理 (40+ 工程師)
- 全端開發：Java、C#、Vue.js、React
- 雲端基礎架構：AWS、Azure
- 技術諮詢與風險評估

### 重點專案經驗

**車聯網 / 物聯網系統：**
- 納智捷車聯網平台（高併發即時通訊）
- 納智捷充電樁系統（隨插即充、OCPI 協議）
- 中油物聯網能源管理系統
- 萬磁王路邊停車即時資訊服務（20K+ 感測器）

**電商平台：**
- 宜得利電商平台（日本家居品牌）
- 康是美 EC 3.0 平台（美妝保健電商）

**SSO 與會員整合：**
- 統一集團會員系統（多品牌 SSO 整合）

## 🙏 致謝

- **Quasar Framework** - 提供優秀的 Vue.js 框架
- **Vue.js 社群** - 持續支援與創新
- **Mermaid** - 提供強大的流程圖生成工具
- **Material Design** - 設計原則與指引

## 📞 聯絡與支援

技術諮詢或合作機會洽詢：

- **Email**: chenpoyu1123@gmail.com
- **GitHub**: https://github.com/chenpoyu

---

**使用 ❤️ 與 Vue 3 + Quasar Framework 打造**

*最後更新：2026年2月*
