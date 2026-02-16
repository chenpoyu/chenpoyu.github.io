<template>
  <q-page class="tech-architecture-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="page-title">{{ $t('techarch.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('techarch.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Dev Tools Section -->
    <section class="devtools-section">
      <div class="container">
        <div class="devtools-card" @click="openDevTools">
          <div class="devtools-content">
            <div class="devtools-icon">
              <q-icon name="construction" size="48px" />
            </div>
            <div class="devtools-text">
              <h3 class="devtools-title">{{ $t('techarch.devtools.title') }}</h3>
              <p class="devtools-description">{{ $t('techarch.devtools.description') }}</p>
            </div>
          </div>
          <q-btn
            :label="$t('techarch.devtools.button')"
            flat
            dense
            icon-right="arrow_forward"
            class="devtools-button"
          />
        </div>
      </div>
    </section>

    <!-- Architecture Showcases -->
    <section class="architecture-section">
      <div class="container">
        <!-- Microservices Architecture -->
        <div class="architecture-card">
          <h2 class="architecture-title">
            <q-icon name="hub" color="primary" size="32px" class="q-mr-sm" />
            {{ $t('techarch.microservices.title') }}
          </h2>
          <p class="architecture-description">{{ $t('techarch.microservices.description') }}</p>

          <div class="mermaid-wrapper">
            <pre class="mermaid">
graph TB
    subgraph "Client Layer"
        Web[Web Application]
        Mobile[Mobile App]
        Admin[Admin Portal]
    end

    subgraph "API Gateway"
        Gateway[API Gateway<br/>Azure API Management]
    end

    subgraph "App Services Layer - Azure"
        App1[App Service 1<br/>User Service]
        App2[App Service 2<br/>Order Service]
        App3[App Service 3<br/>Product Service]
        App4[App Service 4<br/>Payment Service]
    end

    subgraph "Cache Layer"
        Redis[Azure Redis Cache<br/>Session & Data Cache]
    end

    subgraph "Database Layer"
        SQL1[(SQL Server 1<br/>User DB)]
        SQL2[(SQL Server 2<br/>Order DB)]
        SQL3[(SQL Server 3<br/>Product DB)]
    end

    Web --> Gateway
    Mobile --> Gateway
    Admin --> Gateway

    Gateway --> App1
    Gateway --> App2
    Gateway --> App3
    Gateway --> App4

    App1 --> Redis
    App2 --> Redis
    App3 --> Redis
    App4 --> Redis

    App1 --> SQL1
    App2 --> SQL2
    App3 --> SQL3
    App4 --> SQL2

    style Gateway fill:#5E81AC,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style Redis fill:#BF616A,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style SQL1 fill:#88C0D0,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style SQL2 fill:#88C0D0,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style SQL3 fill:#88C0D0,stroke:#4C566A,stroke-width:2px,color:#2E3440
            </pre>
          </div>

          <div class="tech-highlights">
            <h3 class="highlights-title">{{ $t('techarch.highlights') }}</h3>
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in microservicesHighlights" :key="idx">
                <q-icon name="check_circle" color="positive" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- IoT Architecture -->
        <div class="architecture-card">
          <h2 class="architecture-title">
            <q-icon name="sensors" color="secondary" size="32px" class="q-mr-sm" />
            {{ $t('techarch.iot.title') }}
          </h2>
          <p class="architecture-description">{{ $t('techarch.iot.description') }}</p>

          <div class="mermaid-wrapper">
            <pre class="mermaid">
graph TB
    subgraph "IoT Devices"
        Device1[IoT Sensors<br/>Temperature/Humidity]
        Device2[Smart Devices<br/>Controllers]
        Device3[Monitoring Devices<br/>Status Trackers]
    end

    subgraph "AWS API Gateway"
        APIGateway[API Gateway<br/>RESTful APIs]
    end

    subgraph "AWS Lambda Functions"
        Lambda1[Lambda Function 1<br/>Data Validation]
        Lambda2[Lambda Function 2<br/>Data Processing]
        Lambda3[Lambda Function 3<br/>Alert Handler]
    end

    subgraph "AWS Step Functions"
        StepFunc[Step Functions<br/>Workflow Orchestration]
    end

    subgraph "Cache & Storage"
        Redis[Redis Cache<br/>Real-time Data]
        S3[S3 Storage<br/>Historical Data]
    end

    subgraph "Data Layer"
        PostgreSQL[(PostgreSQL<br/>Device State & Business Data)]
    end

    Device1 --> APIGateway
    Device2 --> APIGateway
    Device3 --> APIGateway

    APIGateway --> Lambda1
    Lambda1 --> Lambda2
    Lambda2 --> StepFunc

    StepFunc --> Lambda3
    StepFunc --> Redis
    StepFunc --> PostgreSQL

    Lambda2 --> Redis
    Lambda3 --> PostgreSQL

    StepFunc --> S3

    style APIGateway fill:#5E81AC,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style StepFunc fill:#B48EAD,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style Redis fill:#BF616A,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style Lambda1 fill:#A3BE8C,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style Lambda2 fill:#A3BE8C,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style Lambda3 fill:#A3BE8C,stroke:#4C566A,stroke-width:2px,color:#2E3440
            </pre>
          </div>

          <div class="tech-highlights">
            <h3 class="highlights-title">{{ $t('techarch.highlights') }}</h3>
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in iotHighlights" :key="idx">
                <q-icon name="check_circle" color="positive" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- SSO Architecture -->
        <div class="architecture-card">
          <h2 class="architecture-title">
            <q-icon name="lock" color="accent" size="32px" class="q-mr-sm" />
            {{ $t('techarch.sso.title') }}
          </h2>
          <p class="architecture-description">{{ $t('techarch.sso.description') }}</p>

          <div class="mermaid-wrapper">
            <pre class="mermaid">
sequenceDiagram
    participant User as User Browser
    participant App as Business App
    participant SSO as SSO Server
    participant Auth as Auth Service
    participant DB as User Database

    User->>App: 1. Access Protected Resource
    App->>App: 2. Check Session
    App->>SSO: 3. Redirect to SSO Login

    SSO->>User: 4. Display Login Page
    User->>SSO: 5. Submit Credentials

    SSO->>Auth: 6. Validate Credentials
    Auth->>DB: 7. Query User Info
    DB->>Auth: 8. Return User Data
    Auth->>SSO: 9. Authentication Result

    SSO->>SSO: 10. Generate Token (JWT)
    SSO->>User: 11. Set SSO Cookie
    SSO->>App: 12. Redirect with Token

    App->>Auth: 13. Verify Token
    Auth->>App: 14. Token Valid

    App->>App: 15. Create Session
    App->>User: 16. Grant Access

    Note over User,DB: Single sign-on complete / Access granted to all integrated apps

    User->>App: 17. Access Another App
    App->>SSO: 18. Check SSO Cookie
    SSO->>App: 19. Return Valid Token
    App->>User: 20. Direct Access (No Login)
            </pre>
          </div>

          <div class="tech-highlights">
            <h3 class="highlights-title">{{ $t('techarch.highlights') }}</h3>
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in ssoHighlights" :key="idx">
                <q-icon name="check_circle" color="positive" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- High Concurrency System -->
        <div class="architecture-card">
          <h2 class="architecture-title">
            <q-icon name="speed" color="warning" size="32px" class="q-mr-sm" />
            {{ $t('techarch.highconcurrency.title') }}
          </h2>
          <p class="architecture-description">{{ $t('techarch.highconcurrency.description') }}</p>

          <div class="mermaid-wrapper">
            <pre class="mermaid">
graph TB
    subgraph "CDN Layer"
        CDN[Azure CDN<br/>Static Resources]
    end

    subgraph "Load Balancer"
        LB[Load Balancer<br/>Traffic Distribution]
    end

    subgraph "API Gateway"
        Gateway[API Gateway<br/>Rate Limiting & Auth]
    end

    subgraph "Cache Layer"
        Redis[Redis Cluster<br/>Distributed Cache]
    end

    subgraph "App Service Layer"
        App1[App Service 1]
        App2[App Service 2]
        App3[App Service 3]
        App4[App Service 4]
    end

    subgraph "Message Queue"
        MQ[Message Queue<br/>Redis Queue]
        Worker1[Worker 1]
        Worker2[Worker 2]
    end

    subgraph "Database Layer"
        Master[(SQL Server Master<br/>Write Operations)]
        Slave1[(SQL Server Slave 1<br/>Read Operations)]
        Slave2[(SQL Server Slave 2<br/>Read Operations)]
    end

    User[High Traffic Users<br/>100k+ concurrent]

    User --> CDN
    User --> LB

    LB --> Gateway
    Gateway --> App1
    Gateway --> App2
    Gateway --> App3
    Gateway --> App4

    App1 --> Redis
    App2 --> Redis
    App3 --> Redis
    App4 --> Redis

    App1 --> Master
    App2 --> Master
    App3 --> Slave1
    App4 --> Slave2

    Master --> Slave1
    Master --> Slave2

    App1 --> MQ
    App2 --> MQ
    MQ --> Worker1
    MQ --> Worker2

    Worker1 --> Master
    Worker2 --> Master

    style CDN fill:#8FBCBB,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style Gateway fill:#5E81AC,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style LB fill:#B48EAD,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style Redis fill:#BF616A,stroke:#4C566A,stroke-width:2px,color:#ECEFF4
    style Master fill:#88C0D0,stroke:#4C566A,stroke-width:2px,color:#2E3440
    style MQ fill:#EBCB8B,stroke:#4C566A,stroke-width:2px,color:#2E3440
            </pre>
          </div>

          <div class="tech-highlights">
            <h3 class="highlights-title">{{ $t('techarch.highlights') }}</h3>
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in highconcurrencyHighlights" :key="idx">
                <q-icon name="check_circle" color="positive" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import mermaid from 'mermaid'

export default defineComponent({
  name: 'TechArchitecture',

  setup() {
    const { tm } = useI18n()

    const microservicesHighlights = computed(() => tm('techarch.microservices.highlights'))
    const iotHighlights = computed(() => tm('techarch.iot.highlights'))
    const ssoHighlights = computed(() => tm('techarch.sso.highlights'))
    const highconcurrencyHighlights = computed(() => tm('techarch.highconcurrency.highlights'))

    onMounted(() => {
      // Initialize Mermaid
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis'
        },
        sequence: {
          diagramMarginX: 50,
          diagramMarginY: 10,
          actorMargin: 50,
          width: 150,
          height: 65,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
          mirrorActors: true,
          useMaxWidth: true
        }
      })

      // Wait for DOM to be ready and render all mermaid diagrams
      setTimeout(() => {
        mermaid.run()
      }, 100)
    })

    const openDevTools = () => {
      window.open('https://chenpoyu.github.io/tools', '_blank')
    }

    return {
      microservicesHighlights,
      iotHighlights,
      ssoHighlights,
      highconcurrencyHighlights,
      openDevTools
    }
  }
})
</script>

<style lang="scss" scoped>
.tech-architecture-page {
  min-height: 100vh;

  .hero-section {
    background: linear-gradient(135deg, #1a3a52 0%, #1a4d6d 50%, #2d5f7d 100%);
    padding: 6rem 0 4rem;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 50%, rgba(201, 162, 109, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(139, 111, 71, 0.08) 0%, transparent 50%);
      pointer-events: none;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      letter-spacing: -0.5px;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .page-subtitle {
      font-size: 1.3rem;
      opacity: 0.95;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      font-weight: 300;
      letter-spacing: 0.3px;

      @media (max-width: 600px) {
        font-size: 1.1rem;
      }
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .devtools-section {
    padding: 2rem 0;
    background: transparent;

    .devtools-card {
      background: linear-gradient(135deg, #6b543f 0%, #8b6f47 50%, #a68759 100%);
      border-radius: 12px;
      padding: 2rem 2.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 24px rgba(107, 84, 63, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);

      &:hover {
        transform: translateX(8px);
        box-shadow: 0 8px 32px rgba(107, 84, 63, 0.35), 0 4px 12px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.25);
      }

      .devtools-content {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex: 1;
      }

      .devtools-icon {
        flex-shrink: 0;
        opacity: 0.9;
      }

      .devtools-text {
        flex: 1;
      }

      .devtools-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        color: white;
      }

      .devtools-description {
        font-size: 0.95rem;
        margin: 0;
        opacity: 0.9;
        line-height: 1.4;
      }

      .devtools-button {
        color: white;
        font-weight: 500;
        font-size: 1rem;
        flex-shrink: 0;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;

        .devtools-content {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .devtools-button {
          align-self: flex-end;
        }
      }
    }
  }

  .architecture-section {
    padding: 4rem 0;
    background: linear-gradient(to bottom, #f5f3f0 0%, #ede8e3 100%);

    .architecture-card {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      margin-bottom: 3rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.04);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 12px 32px rgba(0, 0, 0, 0.12);
      }

      .architecture-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        color: #2c3e50;
      }

      .architecture-description {
        font-size: 1.1rem;
        color: #5a6c7d;
        margin-bottom: 2rem;
        line-height: 1.8;
      }

      .mermaid-wrapper {
        background: #f5f5f5;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        overflow-x: auto;
        border: 2px solid #e0e0e0;

        .mermaid {
          display: flex;
          justify-content: center;
          min-height: 400px;
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          font-family: inherit;
        }
      }

      .tech-highlights {
        .highlights-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .highlights-list {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.8rem;
            font-size: 1.05rem;
            color: #4a5568;

            .q-icon {
              margin-right: 0.8rem;
              margin-top: 0.2rem;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
}

// Dark mode support
body.body--dark {
  .tech-architecture-page {
    .hero-section {
      background: linear-gradient(135deg, #0f1e2d 0%, #1a3a52 50%, #1a4d6d 100%);

      &::before {
        background: radial-gradient(circle at 20% 50%, rgba(201, 162, 109, 0.12) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(139, 111, 71, 0.12) 0%, transparent 50%);
      }
    }

    .devtools-section {
      .devtools-card {
        background: linear-gradient(135deg, #4a3829 0%, #5c4732 50%, #6b543f 100%);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .devtools-title,
        .devtools-description,
        .devtools-button {
          color: #e2e8f0;
        }

        .devtools-icon {
          opacity: 0.9;
        }
      }
    }

    .architecture-section {
      background: linear-gradient(to bottom, #1a1410 0%, #2c2416 100%);

      .architecture-card {
        background: #2c2416;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(201, 162, 109, 0.08);

        &:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        .architecture-title {
          color: #ffffff;
        }

        .architecture-description {
          color: #b0b0b0;
        }

        .mermaid-wrapper {
          background: #e8e3dc;
          border-color: #6b5d4f;
        }

        .tech-highlights {
          .highlights-title {
            color: #ffffff;
          }

          .highlights-list li {
            color: #d0d0d0;
          }
        }
      }
    }
  }
}
</style>
