<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page class="services-page">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('servicesPage.hero.title') }}</h1>
        <p class="page-subtitle">
          {{ $t('servicesPage.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="services-detail">
      <div class="container">
        <q-card
          v-for="(service, index) in services"
          :key="index"
          class="service-detail-card"
          flat
          bordered
        >
          <q-card-section class="row">
            <div class="col-md-3 col-12 text-center service-icon-section">
              <q-avatar size="120px" :color="service.color" text-color="white">
                <q-icon :name="service.icon" size="64px" />
              </q-avatar>
            </div>
            <div class="col-md-9 col-12">
              <h2 class="service-detail-title">{{ service.title }}</h2>
              <p class="service-detail-description">{{ service.description }}</p>

              <div class="service-offerings">
                <h3 class="offerings-title">{{ service.offeringsTitle }}</h3>
                <div class="row q-col-gutter-md">
                  <div
                    v-for="(offering, idx) in service.offerings"
                    :key="idx"
                    class="col-md-6 col-12"
                  >
                    <q-card flat bordered class="offering-card">
                      <q-card-section>
                        <div class="row items-center q-mb-sm">
                          <q-icon :name="offering.icon" color="primary" size="24px" class="q-mr-sm" />
                          <span class="offering-name">{{ offering.name }}</span>
                        </div>
                        <p class="offering-description">{{ offering.description }}</p>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>

              <div class="service-benefits q-mt-md">
                <h3 class="benefits-title">{{ service.benefitsTitle }}</h3>
                <ul class="benefits-list">
                  <li v-for="(benefit, idx) in service.benefits" :key="idx">
                    <q-icon name="check_circle" color="positive" size="20px" />
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <div class="service-cases q-mt-md" v-if="service.cases">
                <h3 class="cases-title">{{ service.casesTitle }}</h3>
                <div class="cases-grid">
                  <q-chip
                    v-for="(caseItem, idx) in service.cases"
                    :key="idx"
                    :color="service.color"
                    text-color="white"
                    icon="business"
                  >
                    {{ caseItem }}
                  </q-chip>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">{{ $t('servicesPage.process.title') }}</h2>
        <div class="process-timeline">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="process-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-header text-center q-mb-xl">
          <h2 class="cta-title">{{ $t('servicesPage.cta.title') }}</h2>
          <p class="cta-description">
            {{ $t('servicesPage.cta.description') }}
          </p>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-container">
          <ContactForm formspree-id="xnjbapdg" />
        </div>

        <!-- Alternative Contact -->
        <div class="text-center q-mt-xl">
          <p class="alternative-text">{{ $t('servicesPage.cta.or') }}</p>
          <q-btn
            unelevated
            color="primary"
            size="lg"
            :label="$t('servicesPage.cta.email_button')"
            icon="email"
            @click="contactMe"
            class="cta-button"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
// @ts-nocheck
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from 'components/ContactForm.vue'

export default defineComponent({
  name: 'ServicesPage',
  components: {
    ContactForm
  },

  setup() {
    const { tm } = useI18n()

    const services = computed(() => {
      const items = tm('servicesPage.items')
      return items
    })

    const processSteps = computed(() => {
      const steps = tm('servicesPage.process.steps')
      return steps
    })

    const contactMe = () => {
      window.location.href = 'mailto:chenpoyu1123@gmail.com?subject=技術服務諮詢&body=您好，我想了解更多關於技術服務的內容...'
    }

    return {
      services,
      processSteps,
      contactMe
    }
  }
})
</script>

<style lang="scss" scoped>
.services-page {
  .services-hero {
    background:
      linear-gradient(135deg, #0a1929 0%, #0a2540 50%, #1a3552 100%),
      repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201, 168, 96, 0.02) 30px, rgba(201, 168, 96, 0.02) 60px);
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
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
      animation: pulse 8s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }

    .page-title {
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      line-height: 1.3;
      letter-spacing: 0.02em;
      background: linear-gradient(135deg, #e8e6e3 0%, #c9a860 50%, #e8e6e3 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
      text-shadow: 0 0 40px rgba(201, 168, 96, 0.2);
      position: relative;

      @keyframes shimmer {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .page-subtitle {
      font-size: 1.35rem;
      line-height: 1.6;
      opacity: 0.9;
      letter-spacing: 0.005em;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .services-detail {
    padding: 5rem 0;
    background:
      linear-gradient(to bottom, #f8f7f5 0%, #f0ede9 100%),
      repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201, 168, 96, 0.015) 80px, rgba(201, 168, 96, 0.015) 160px);

    .service-detail-card {
      margin-bottom: 3rem;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(201, 168, 96, 0.15);
      border-radius: 16px;
      background: linear-gradient(135deg, #ffffff 0%, #fdfcfa 100%);
      box-shadow:
        0 2px 24px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(201, 168, 96, 0.3), rgba(201, 168, 96, 0.6), rgba(201, 168, 96, 0.3), transparent);
      }

      &:hover {
        transform: translateY(-6px);
        box-shadow:
          0 12px 40px rgba(0, 0, 0, 0.12),
          0 0 0 1px rgba(201, 168, 96, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 1);
        border-color: rgba(201, 168, 96, 0.3);
      }

      .service-icon-section {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }

      .service-detail-title {
        font-size: 2.2rem;
        font-weight: 400;
        margin-bottom: 1.3rem;
        line-height: 1.4;
        letter-spacing: 0.01em;
      }

      .service-detail-description {
        font-size: 1.15rem;
        line-height: 2;
        margin-bottom: 2.5rem;
        letter-spacing: 0.005em;
      }

      .service-offerings {
        .offerings-title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 1.3rem;
          letter-spacing: 0.01em;
        }

        .offering-card {
          height: 100%;
          transition: all 0.3s ease;
          border: 1px solid rgba(212, 175, 55, 0.15);
          background: linear-gradient(135deg, #ffffff 0%, #fefdfb 100%);
          padding: 0.3rem 0;

          &:hover {
            transform: translateY(-4px) scale(1.03);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow:
              0 8px 24px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(212, 175, 55, 0.2);
          }

          .offering-name {
            font-size: 1.12rem;
            font-weight: 500;
            letter-spacing: 0.005em;
          }

          .offering-description {
            font-size: 1rem;
            line-height: 1.8;
            margin: 0;
            letter-spacing: 0.005em;
          }
        }
      }

      .service-benefits {
        .benefits-title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 1.3rem;
          letter-spacing: 0.01em;
        }

        .benefits-list {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
            font-size: 1.05rem;
            line-height: 1.8;
            letter-spacing: 0.005em;

            .q-icon {
              margin-right: 0.5rem;
              margin-top: 2px;
            }

            span {
              flex: 1;
            }
          }
        }
      }

      .service-cases {
        .cases-title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 1.3rem;
          letter-spacing: 0.01em;
        }

        .cases-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .q-chip {
            max-width: 100%;
            white-space: normal;
            height: auto;
            padding: 8px 12px;
            overflow-wrap: break-word;
            word-wrap: break-word;

            :deep(.q-chip__content) {
              white-space: normal;
              overflow-wrap: break-word;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }

  .process-section {
    padding: 5rem 0;
    background: linear-gradient(to bottom, #ffffff 0%, #fafaf8 100%);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 4rem;
      line-height: 1.3;
      letter-spacing: 0.02em;
      color: #1a1a1a;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(201, 168, 96, 0.6), transparent);
      }
    }

    .process-timeline {
      max-width: 800px;
      margin: 0 auto;

      .process-step {
        display: flex;
        margin-bottom: 2rem;
        position: relative;

        &:not(:last-child):after {
          content: '';
          position: absolute;
          left: 35px;
          top: 70px;
          width: 1px;
          height: calc(100% + 2rem);
          background: linear-gradient(to bottom, rgba(201, 168, 96, 0.4), rgba(201, 168, 96, 0.15));
        }

        .step-number {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0a2540 0%, #1a3552 50%, #c9a860 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 300;
          flex-shrink: 0;
          z-index: 1;
          box-shadow:
            0 3px 16px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(201, 168, 96, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.08);
            box-shadow:
              0 6px 24px rgba(0, 0, 0, 0.2),
              0 0 0 3px rgba(201, 168, 96, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
        }

        .step-content {
          margin-left: 2rem;
          flex: 1;

          .step-title {
            font-size: 1.4rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
            line-height: 1.4;
            letter-spacing: 0.01em;
          }

          .step-description {
            font-size: 1.05rem;
            line-height: 1.9;
            letter-spacing: 0.005em;
          }
        }
      }
    }
  }

  .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f8f7f5 0%, #ffffff 50%, #f0ede9 100%);
    color: #1a1a1a;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(201, 168, 96, 0.08) 0%, transparent 50%);
      animation: glow 6s ease-in-out infinite;
    }    @keyframes glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }

    .cta-title {
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      line-height: 1.3;
      letter-spacing: 0.02em;
      color: #1a1a1a; // 淺色模式深色文字
    }

    .cta-description {
      font-size: 1.3rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      opacity: 0.9;
      letter-spacing: 0.005em;
      color: #333; // 淺色模式深色文字
    }

    .cta-button {
      font-size: 1.1rem;
      padding: 1rem 3rem;
      background: linear-gradient(135deg, #c9a860 0%, #d4b373 100%);
      color: #0d0d0d;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow:
        0 3px 16px rgba(201, 168, 96, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);

      &:hover {
        transform: translateY(-2px);
        box-shadow:
          0 6px 24px rgba(201, 168, 96, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.6);
      }
    }
  }

  // Dark Mode Styles
  body.body--dark & {
    .services-hero {
      background:
        linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1f2937 100%),
        repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201, 168, 96, 0.03) 30px, rgba(201, 168, 96, 0.03) 60px);
    }

    .services-detail {
      background:
        linear-gradient(to bottom, #0d1117 0%, #161b22 100%),
        repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201, 168, 96, 0.02) 80px, rgba(201, 168, 96, 0.02) 160px);

      // Make all service icon avatars more visible in dark mode
      .service-icon-section .q-avatar {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        filter: brightness(1.3) saturate(1.2);
      }

      .service-detail-card {
        background: linear-gradient(135deg, #1f2937 0%, #1a1f2e 100%);
        border-color: rgba(201, 168, 96, 0.2);
        box-shadow:
          0 2px 24px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);

        &:hover {
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(201, 168, 96, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .service-detail-title,
        .service-detail-description,
        .offerings-title,
        .benefits-title,
        .cases-title {
          color: #e8e6e3;
        }

        .offering-card {
          background: linear-gradient(135deg, #161b22 0%, #1a1f2e 100%);
          border-color: rgba(212, 175, 55, 0.2);

          &:hover {
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow:
              0 8px 24px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(212, 175, 55, 0.3);
          }

          .q-icon {
            color: #c9a860 !important;
          }

          .offering-name,
          .offering-description {
            color: #d1d5db;
          }
        }

        .benefits-list li span {
          color: #d1d5db;
        }

        .service-cases {
          .q-chip {
            // Enhance chip visibility in dark mode
            filter: brightness(1.25) saturate(1.3);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            font-weight: 500;
          }
        }
      }
    }

    .process-section {
      background: linear-gradient(to bottom, #0d1117 0%, #161b22 100%);

      .section-title {
        color: #e8e6e3;
      }

      .process-step {
        .step-title {
          color: #e8e6e3;
        }

        .step-description {
          color: #d1d5db;
        }
      }
    }

    .cta-section {
      background:
        linear-gradient(135deg, #0a0e1a 0%, #0f1419 50%, #161b22 100%),
        repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201, 168, 96, 0.04) 40px, rgba(201, 168, 96, 0.04) 80px);
      color: white;

      // 深色模式下的文字顏色
      .cta-title {
        color: #ffffff;
      }

      .cta-description {
        color: rgba(255, 255, 255, 0.85);
      }
    }
  }
}

// Contact Form Container
.contact-form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

.alternative-text {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.body--dark .alternative-text {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 0 10px;
  }
}
</style>
