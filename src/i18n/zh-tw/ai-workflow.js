export default {
  aiWorkflowPage: {
    hero: {
      eyebrow: 'Vibe Coding + SDD',
      title: 'AI 放進作品開發與系統翻新',
      subtitle: '不同模型放在不同位置，作品開發追求成形速度，系統翻新重視落地穩定。',
      description: '先用 SDD 把規格、情境、資料結構與驗收條件寫清楚，再進入 vibe coding。作品集開發時，由 Claude Code Opus 負責架構設計、頁面拆解與節奏規劃，再交給 GPT 往下開發。客戶系統翻新時，先由 GPT 盤點現況與規劃，再交給 Claude Code Sonnet 重構，最後再用 GPT 檢查與驗證。',
      panelLabel: '工作方式',
      panelTitle: '不是把工作丟給 AI，而是把 AI 排進工序。',
      panelBody: '模型各自處理擅長的環節，但規格、取捨、風格與最後責任不外包。這樣留下來的才是成品，不是生成痕跡。',
      signatureLabel: '核心觀點',
      signatureText: '真正拉開差異的，不是模型名字，而是規格、節奏與最後判斷有沒有被留住。',
      primaryCta: '查看工作流',
      secondaryCta: '看實際作品'
    },

    highlights: [
      {
        value: 'Vibe Coding + SDD',
        label: '起手式',
        caption: '先把規格寫清楚，再放大探索，不是先讓 AI 猜。'
      },
      {
        value: 'Claude Opus → GPT',
        label: '作品集節奏',
        caption: '先想架構與頁面，再把功能和細節往下寫實。'
      },
      {
        value: 'GPT → Sonnet → GPT',
        label: '翻新案節奏',
        caption: '先盤點，再重構，最後再做驗證與補洞。'
      },
      {
        value: '作品與案子並行',
        label: '實戰背景',
        caption: '這套方法同時跑在作品集開發與客戶系統整理上。'
      }
    ],

    story: {
      eyebrow: 'How I Work',
      title: 'AI 不是代工，而是工作流中的一段工序',
      subtitle: '重點不在模型參與了多少，而在每一輪該放大什麼、又該由誰收斂。作品開發和翻新案都一樣。',
      quote: '模型能加快逼近答案的速度，真正把答案做成熟，仍然要回到人的判斷。',
      chapters: [
        {
          title: '先把需求寫成規格，不讓模型直接從一句話開猜',
          description: '先整理使用者、頁面目標、資料結構、限制條件與驗收方式。這一步比較像 SDD，不是為了寫文件，而是讓後面每一輪生成都有準心。',
          bullets: [
            '把 user flow、區塊層級與互動拆成 AI 能接手的粒度',
            '先定義不能做錯的商業邊界、資料限制與工程條件',
            '把語氣、視覺感、命名方式整理成可重用的上下文'
          ]
        },
        {
          title: '再進入 vibe coding，快速把畫面、互動和功能做出來',
          description: '當規格夠清楚，vibe coding 才真的有用。這時讓模型快速展開版型、段落、互動與元件骨架，把空白畫面推進到能討論、能比較的狀態。',
          bullets: [
            '快速產出頁面雛形、組件骨架與文案方向',
            '針對不同題型測試互動腳本、畫面節奏與命名方式',
            '先把可以打開、可以跑的版本做出來，再進下一輪收斂'
          ]
        },
        {
          title: 'AI 做完第一輪，再回來整理架構與可維護性',
          description: '生成結果不能直接當完成品。真正的工作，是把命名、狀態、元件邊界、i18n、SEO 與可讀性重新收乾淨，讓它變成養得起的程式。',
          bullets: [
            '重整資訊架構、元件責任與資料流',
            '補上 RWD、可近用性、效能與搜尋語意',
            '把看起來很會寫但其實不合理的生成內容刪掉或重寫'
          ]
        },
        {
          title: '最後再把速度換成交付品質，而不是換成技術債',
          description: '最後一段通常不是再丟 prompt，而是驗證這個東西打開後順不順、交出去穩不穩、之後改起來痛不痛。這一段沒有捷徑。',
          bullets: [
            '用人工 QA 與真實裝置檢查體驗斷點',
            '補齊 metadata、structured data、瀏覽器與部署細節',
            '保留能繼續疊代的結構，而不是一次性漂亮成品'
          ]
        }
      ]
    },

    practice: {
      eyebrow: 'Two Tracks',
      title: '同樣用 AI，作品集開發和系統翻新走的是兩條不同路線',
      subtitle: '不是所有事情都交給同一個模型。題型不同，模型位置就不同。下面這兩條，是目前最常用的節奏。',
      closingLabel: '想保留的手感',
      tracks: [
        {
          eyebrow: 'Portfolio Build',
          title: '作品集開發，把 AI 放在一起推進的節奏裡',
          subtitle: '這一類專案比較像從無到有做作品。先把結構想清楚，再一路把功能、畫面與互動堆出來，才能保留實驗感和節奏感。',
          phases: [
            {
              name: '先寫規格與場景',
              model: 'SDD / 先定義邊界',
              detail: '先把頁面目標、使用情境、資料結構、設計語氣與驗收方式寫成規格，讓後面不是瞎聊，而是有一份可以一直回頭對照的基準。'
            },
            {
              name: '架構設計與規劃',
              model: 'Claude Code Opus',
              detail: '這一輪由 Claude Code Opus 整理資訊架構、拆區塊、想元件邊界與開發順序，特別適合把模糊靈感整理成可執行的藍圖。'
            },
            {
              name: '功能開發與往下實作',
              model: 'GPT',
              detail: '架構底定後，交給 GPT 一路往下開發功能、補互動、修樣式與整理細節。這時比較像 pair programming，邊做邊修、邊做邊收。'
            }
          ],
          closing: '這條線最重要的不是快，而是快的同時還能保留作品的味道。畫面、文案與互動最後還是要回到人的判斷。'
        },
        {
          eyebrow: 'System Refresh',
          title: '系統翻新時，先盤點，再重構，最後驗證',
          subtitle: '翻新案不是從零開始做漂亮頁面，而是要先看清楚舊系統現在長什麼樣、卡在哪裡、哪些東西能救、哪些地方不能亂動。',
          phases: [
            {
              name: '先規劃與盤點現況',
              model: 'GPT',
              detail: '先用 GPT 協助盤點模組、資料流、耦合點、風險與改造順序，把原本散亂的系統現況整理成能討論的改造清單。'
            },
            {
              name: '進入重構與整理',
              model: 'Claude Code Sonnet',
              detail: '盤點完成後，交給 Claude Code Sonnet 往重構方向推進，特別適合整理舊程式、拆責任、移除重複與把結構拉回可維護狀態。'
            },
            {
              name: '最後做檢查與驗證',
              model: 'GPT',
              detail: '收尾時再用 GPT 回頭看邏輯、檢查遺漏、比對風險與做驗證清單，確保這次翻新不是只把程式變漂亮，而是真的更穩。'
            }
          ],
          closing: '翻新案最怕的是改得很勤快，但沒有真的變穩。所以最後一輪一定留給檢查與驗證，讓模型補視角，不代替責任。'
        }
      ]
    },

    workflow: {
      eyebrow: 'Daily Rhythm',
      title: '不管走哪一條線，底層節奏其實都差不多',
      subtitle: '差別在模型分工，但底層節奏其實很一致：先定義，再展開，然後收斂，最後驗證。',
      codaLabel: '這套節奏的重點',
      codaText: '重點不是每一步都要用 AI，而是讓 AI 在最有價值的位置出手。這樣做，作品才有溫度，系統翻新也不會變成另一種混亂。',
      steps: [
        {
          title: '把規格先立起來',
          summary: '先把需求、受眾、情境、資料與限制講清楚。沒有這一步，後面的 prompt 多半只是把模糊放大。',
          tools: 'SDD、需求拆解、資訊架構、驗收條件',
          outcome: '得到一份可以反覆對照的開發基準'
        },
        {
          title: '讓對的模型先把路打開',
          summary: '作品集時先做架構與藍圖，翻新案時先做盤點與改造順序。先把路線理順，再往下衝，速度才不會亂掉。',
          tools: 'Claude Code Opus、GPT、Claude Code Sonnet',
          outcome: '把模糊題目整理成真的可以動手做的方向'
        },
        {
          title: '一路往下做，邊做邊收',
          summary: '用 GPT 把功能、樣式、互動與細節持續往下推，但不是照單全收，而是邊做邊修、邊看結構有沒有歪掉。',
          tools: 'GPT、差異比對、錯誤訊息、逐步驗證',
          outcome: '把開發速度拉起來，同時把可維護性留住'
        },
        {
          title: '重構、整理、把語氣收回來',
          summary: '這一輪重整命名、拆元件、收文案、修節奏，讓最後留下來的東西更像成品，不像模型拼出來的草稿。',
          tools: '重構、命名調整、文案收斂、i18n、SEO',
          outcome: '畫面與程式都更像完整作品，而不是生成拼裝'
        },
        {
          title: '回頭做驗證與上線檢查',
          summary: '最後補齊 RWD、metadata、structured data、瀏覽器驗證與交付細節，確保這不是看起來完成，而是真的能交。',
          tools: '手動 QA、GPT 驗證、SEO 檢查、部署測試',
          outcome: '把模型帶來的速度，換成真的能交付的完成度'
        }
      ]
    },

    principles: {
      eyebrow: 'Ground Rules',
      title: '這套流程有幾個不能鬆掉的底線',
      subtitle: '如果沒有這幾條底線，AI 只是把模糊放大，把技術債提早預支。',
      featureLabel: '最重要的一句話',
      featureText: '模型可以參與很多輪，但方向盤不能放手。作品最後的味道、翻新後的穩定性，最後都還是人的責任。',
      items: [
        {
          title: '先展開，再收斂',
          description: '先讓 AI 多開幾條路，但不直接拿第一個答案交差。真正的價值在後面的取捨。'
        },
        {
          title: 'Prompt 不是咒語，規格才是核心',
          description: '好用的 prompt 不是靠話術，是靠前面有沒有把需求、邊界與成功條件定清楚。'
        },
        {
          title: '每一輪輸出都要能驗證',
          description: '不管是文案、流程還是程式碼，都要能被比對、被修正、被測試，不然只是堆幻覺。'
        },
        {
          title: '風格、商業語境與責任不能外包',
          description: 'AI 可以給候選答案，但最後要不要留、要怎麼講、會不會害後續維護變痛，還是得自己判斷。'
        }
      ]
    },

    portfolio: {
      eyebrow: 'Selected Work',
      title: '精選作品',
      subtitle: '教育產品、互動遊戲與品牌網站的實作案例。',
      noteLabel: '怎麼看這一區',
      noteText: '下面這些作品可以當成不同題型下的實作紀錄。教育產品、互動遊戲、品牌網站，模型的幫助不一樣，但最後都得回到可打開、可使用、可交付的成品。',
      groups: {
        educationalWebsites: {
          title: '教育 / 認知訓練網站',
          subtitle: '這類專案需要大量內容變化、互動節奏與細緻的引導。AI 可以把題型與內容展開，但體驗整合一定要自己收。',
          items: [
            {
              title: '2-6歲兒童遊樂園',
              description: '針對幼兒設計的 9 款互動學習遊戲，包含顏色配對、動物翻翻樂、數字氣球與成就系統。',
              aiRole: 'AI 協助拆規則、展開關卡文案與語音互動方向，再把節奏、導覽和學習流程收成一致。',
              impact: '把原本只是幾個遊戲點子，拉成一個能持續遊玩、能被家長理解的兒童學習產品。',
              tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'Web Speech API'],
              image: 'https://chenpoyu.github.io/games-kids-playground/og-image.png',
              url: 'https://chenpoyu.github.io/games-kids-playground/',
              status: 'live'
            },
            {
              title: 'SilverVibe — 銀髮族益智護照平台',
              description: '專為 70 歲以上長輩打造的認知訓練平台，涵蓋 16 款益智遊戲、語音朗讀與無障礙細節。',
              aiRole: 'AI 協助展開遊戲方向、提示語與文案草稿，再根據高齡使用者的閱讀節奏與無障礙需求一輪輪修。',
              impact: '讓大量內容生成不會犧牲實際可用性，特別是在字級、語音與操作負擔上更穩。',
              tags: ['React 19', 'Vite', 'SCSS', 'Web Speech API', 'Web Audio API', 'WCAG 2.1 AA'],
              image: 'https://chenpoyu.github.io/games-sliver-vibe/og-banner.svg',
              url: 'https://chenpoyu.github.io/games-sliver-vibe/',
              status: 'live'
            }
          ]
        },
        games: {
          title: '互動遊戲與主題專案',
          subtitle: '遊戲最適合拿來驗證 vibe coding 的速度，但真正決定成不成立的，還是節奏、回饋和操作手感。',
          items: [
            {
              title: '丙午年媽祖開壇抽獎',
              description: '融合五行命理與廟會風格的互動抽獎系統，包含四輪抽獎流程、卡牌翻轉與火焰粒子背景。',
              aiRole: '先讓 AI 展開敘事語氣、抽獎橋段與視覺氛圍，再把儀式感、動線與畫面節奏對齊。',
              impact: '把題材、文案與互動包裝成一個更有記憶點的體驗，而不是普通抽獎頁。',
              tags: ['React 19', 'Vite', 'Framer Motion', 'SASS'],
              image: 'https://chenpoyu.github.io/games-lottery/og-image.png',
              url: 'https://chenpoyu.github.io/games-lottery/',
              status: 'live'
            },
            {
              title: '坦克大戰',
              description: '經典坦克遊戲的網頁重製版，支援桌機鍵盤與手機觸控，具備 AI 敵軍、關卡與 8-bit 音效。',
              aiRole: 'AI 協助推演關卡節奏、操作提示與技術方向，再回頭處理碰撞、控制與整體遊玩手感。',
              impact: '更快把經典玩法推到可操作、可重玩的狀態，同時保留真正影響體驗的手感調整。',
              tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'RWD'],
              image: 'https://chenpoyu.github.io/games-tank-battle/og-image.png',
              url: 'https://chenpoyu.github.io/games-tank-battle/',
              status: 'live'
            },
            {
              title: '懷舊遊戲合集網站',
              description: '整合多款經典網頁遊戲的平台，預計包含排行榜、成就系統與統一的遊戲入口體驗。',
              aiRole: '先讓 AI 協助規劃資訊架構、遊戲清單與內容骨架，再判斷哪些玩法值得真的做下去。',
              impact: '把零散靈感整理成能持續擴充的產品方向，不只是湊一頁合集。',
              tags: ['React', 'Canvas', 'LocalStorage', 'RWD', 'Web Audio'],
              image: '',
              url: '',
              status: 'wip'
            }
          ]
        },
        customWebsites: {
          title: '品牌網站與商務頁面',
          subtitle: '品牌型專案最能看出 AI 和人的分工。AI 可以加速 sitemap、段落與版型方向，但品牌語氣與商務節奏不能外包。',
          items: [
            {
              title: '個人品牌官網（本站）',
              description: '使用 Quasar + Vue 3 建置的個人網站，整合多語系、深色模式、SEO 與技術敘事。',
              aiRole: 'AI 協助整理版面方向、雙語初稿與區塊結構，再把內容收成更貼近實際工作方式的敘事。',
              impact: '讓個人網站不是履歷延伸，而是真的能說清楚工作方法與交付方式。',
              tags: ['Vue 3', 'Quasar', 'i18n', 'Dark Mode'],
              image: 'https://chenpoyu.github.io/images/og-site.png',
              url: '/',
              status: 'live'
            },
            {
              title: '客製化個人形象官網',
              description: '為獨立工作者規劃的形象網站方向，涵蓋服務介紹、作品內容、見證與聯絡轉換流程。',
              aiRole: '先用 AI 生出頁面架構、文案骨架與 SEO 切角，再根據目標受眾把說服節奏重新整理。',
              impact: '在提案與概念驗證階段，更快做出有商業語境的版本給客戶看。',
              tags: ['Vue 3', 'Quasar', 'SCSS', 'RWD', 'SEO'],
              image: '',
              url: '',
              status: 'wip'
            },
            {
              title: '客製化商務官網',
              description: '針對教育機構與中小企業的商務網站方向，整合課程介紹、品牌資訊與轉換頁面。',
              aiRole: '先用 AI 擴張 sitemap、功能模組與文案段落，再判斷哪些內容值得留，哪些要轉成真正可用的商務流程。',
              impact: '縮短從需求訪談到可展示提案的距離，讓產品輪廓更早被看見。',
              tags: ['Vue 3', 'Quasar', 'CMS', 'i18n', 'RWD'],
              image: '',
              url: '',
              status: 'wip'
            }
          ]
        }
      }
    },

    seo: {
      collectionName: 'AI 開發工作流 - Poyu Chen 陳柏妤',
      description: '展示 AI 如何放進作品開發與系統翻新的真實工作流，包含 Vibe Coding、SDD、多模型分工，以及實際作品案例。',
      breadcrumbName: 'AI 開發工作流'
    },

    labels: {
      aiRole: 'AI 介入方式',
      impact: '交付價值',
      tools: '協作工具',
      outcome: '這一步的產出'
    },

    status: {
      live: '已上線',
      coming: '規劃中',
      wip: '持續迭代'
    },

    cta: {
      visit: '查看作品',
      source: '原始碼',
      comingSoon: '即將公開'
    }
  }
}
