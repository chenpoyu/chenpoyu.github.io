<template>
  <q-page ref="homePageRef" class="home-page" :class="{ 'home-page--dark': $q.dark.isActive }">
    <section class="home-hero">
      <div class="container hero-layout">
        <div class="hero-copy" data-reveal="left">
          <p class="hero-eyebrow">{{ $t('hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ $t('hero.title') }}</h1>
          <h2 class="hero-subtitle">{{ $t('hero.subtitle') }}</h2>
          <p class="hero-description">{{ $t('hero.description') }}</p>
          <p class="hero-note">{{ $t('hero.note') }}</p>

          <div class="hero-actions">
            <q-btn
              unelevated
              color="accent"
              size="lg"
              no-caps
              :label="$t('hero.cta_primary')"
              @click="scrollToContact"
            />
            <q-btn
              outline
              color="white"
              size="lg"
              no-caps
              :label="$t('hero.cta_secondary')"
              to="/profile"
            />
          </div>
        </div>

        <div class="hero-stage" data-reveal="zoom" style="--reveal-delay: 120ms">
          <div class="hero-portrait-shell">
            <div class="hero-portrait-frame">
              <img
                src="~/assets/poyu.jpg"
                alt="Poyu Chen"
                class="hero-portrait"
              />
            </div>
          </div>

          <article class="hero-salon-card" data-reveal="right" style="--reveal-delay: 220ms">
            <span class="hero-salon-label">{{ $t('curation.badge') }}</span>
            <h3>{{ $t('curation.title') }}</h3>
            <p>{{ $t('curation.subtitle') }}</p>
          </article>

          <div class="hero-signals" data-reveal style="--reveal-delay: 280ms">
            <article
              v-for="(signal, index) in heroSignals"
              :key="signal.label"
              class="hero-signal"
              :style="{ '--reveal-delay': `${index * 70}ms` }"
            >
              <span class="hero-signal-value">{{ signal.value }}</span>
              <span class="hero-signal-label">{{ $t(signal.label) }}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="editorial-section">
      <div class="container editorial-layout">
        <div class="editorial-intro" data-reveal="left">
          <p class="section-eyebrow">{{ $t('curation.badge') }}</p>
          <h2 class="section-title">{{ $t('curation.title') }}</h2>
          <p class="section-subtitle">{{ $t('curation.subtitle') }}</p>
          <p class="editorial-note">{{ $t('curation.note') }}</p>
        </div>

        <div class="editorial-grid">
          <q-card
            v-for="(frame, index) in curationFrames"
            :key="frame.title"
            flat
            class="editorial-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${120 + index * 90}ms` }"
          >
            <q-card-section>
              <div class="editorial-card-top">
                <span class="editorial-card-icon-shell">
                  <q-icon :name="frame.icon" size="20px" :color="frame.color" />
                </span>
              </div>
              <h3 class="editorial-card-title">{{ $t(frame.title) }}</h3>
              <p class="editorial-card-text">{{ $t(frame.description) }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="domains-section">
      <div class="container">
        <div class="section-head section-head--domains centered" data-reveal="up">
          <p class="section-eyebrow">{{ $t('domains.badge') }}</p>
          <h2 class="section-title">
            <span v-for="line in getTitleLines('domainsTitle', 'domains.title')" :key="line" class="title-line">{{ line }}</span>
          </h2>
          <p class="section-subtitle">{{ $t('domains.subtitle') }}</p>
        </div>

        <div class="domains-grid">
          <article
            v-for="(domain, index) in domains"
            :key="domain.title"
            class="domain-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${100 + index * 90}ms` }"
          >
            <div class="domain-card-top">
              <q-icon :name="domain.icon" size="30px" :color="domain.color" />
              <span class="domain-card-index">{{ domain.index }}</span>
            </div>
            <h3 class="domain-card-title">{{ $t(domain.title) }}</h3>
            <p class="domain-card-text">{{ $t(domain.description) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-head section-head--services centered section-head--light" data-reveal="up">
          <p class="section-eyebrow">{{ $t('services.badge') }}</p>
          <h2 class="section-title">
            <span v-for="line in getTitleLines('servicesTitle', 'services.title')" :key="line" class="title-line">{{ line }}</span>
          </h2>
          <p class="section-subtitle">{{ $t('services.subtitle') }}</p>
        </div>

        <div class="services-grid">
          <q-card
            v-for="(service, index) in services"
            :key="service.title"
            flat
            class="service-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${100 + index * 90}ms` }"
          >
            <q-card-section>
              <div class="service-icon-shell">
                <q-icon :name="service.icon" size="34px" :color="service.color" />
              </div>
              <h3 class="service-title">{{ $t(service.title) }}</h3>
              <p class="service-description">{{ $t(service.description) }}</p>
              <ul class="service-features">
                <li v-for="feature in service.features" :key="feature">
                  <q-icon name="north_east" size="16px" color="accent" />
                  <span>{{ $t(feature) }}</span>
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="pathways-section">
      <div class="container">
        <div class="section-head section-head--pathways centered" data-reveal="up">
          <p class="section-eyebrow">{{ $t('pathways.badge') }}</p>
          <h2 class="section-title">
            <span v-for="line in getTitleLines('pathwaysTitle', 'pathways.title')" :key="line" class="title-line">{{ line }}</span>
          </h2>
          <p class="section-subtitle">{{ $t('pathways.subtitle') }}</p>
        </div>

        <div class="pathways-grid">
          <article
            v-for="(pathway, index) in pathways"
            :key="pathway.title"
            class="pathway-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${100 + index * 90}ms` }"
          >
            <div class="pathway-card-head">
              <q-icon :name="pathway.icon" size="28px" color="primary" />
              <span class="pathway-card-tag">{{ $t(pathway.tag) }}</span>
            </div>
            <h3 class="pathway-card-title">{{ $t(pathway.title) }}</h3>
            <p class="pathway-card-text">{{ $t(pathway.description) }}</p>
            <q-btn
              flat
              no-caps
              color="primary"
              :label="$t(pathway.button)"
              :to="pathway.to"
              class="pathway-card-action"
            />
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="container contact-layout">
        <div class="contact-copy" data-reveal="left">
          <p class="section-eyebrow section-eyebrow--light">{{ $t('contact.title') }}</p>
          <h2 class="contact-title">{{ $t('contact.subtitle') }}</h2>
          <p class="contact-text">{{ $t('contact_form.subtitle') }}</p>

          <div class="contact-actions">
            <q-btn
              unelevated
              color="accent"
              no-caps
              icon="email"
              :label="$t('contact.email')"
              @click="sendEmail"
            />
            <q-btn
              outline
              color="white"
              no-caps
              icon="fab fa-github"
              :label="$t('contact.github')"
              @click="openGitHub"
            />
          </div>
        </div>

        <div class="contact-form-shell" data-reveal="up" style="--reveal-delay: 120ms">
          <ContactForm formspree-id="xnjbapdg" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { personSchema, professionalServiceSchema, websiteSchema } from 'src/utils/structuredData'
import ContactForm from 'components/ContactForm.vue'
import { createRevealObserver } from 'src/utils/revealOnScroll'

export default defineComponent({
  name: 'HomePage',
  components: {
    ContactForm
  },

  setup() {
    const $q = useQuasar()
    const { locale, t } = useI18n()
    const structuredDataScripts = []
    const homePageRef = ref(null)
    let revealObserver = null

    const titleLineMap = {
      'zh-tw': {
        heroTitle: ['Poyu Chen', '陳柏妤'],
        heroSubtitle: ['把複雜產品、跨系統整合與團隊交付，', '整理成能持續成長的技術系統'],
        domainsTitle: ['我最能發揮價值的', '三種場景'],
        servicesTitle: ['我提供的合作方式'],
        pathwaysTitle: ['從三個角度快速判斷，', '我能如何幫上忙']
      },
      'en-us': {
        heroTitle: ['Poyu Chen'],
        heroSubtitle: ['Turning complex products, cross-system delivery, and technical uncertainty into clear, scalable execution'],
        domainsTitle: ['Three environments where', 'I create the most leverage'],
        servicesTitle: ['How I usually engage'],
        pathwaysTitle: ['Three quick ways to understand', 'how I can help']
      }
    }

    const currentTitleLines = computed(() => titleLineMap[locale.value] || titleLineMap['en-us'])

    const getTitleLines = (key, fallbackKey) => {
      const lines = currentTitleLines.value[key]
      return Array.isArray(lines) && lines.length ? lines : [t(fallbackKey)]
    }

    onMounted(async () => {
      ;[personSchema, professionalServiceSchema, websiteSchema].forEach((schema, index) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = `home-structured-data-${index}`
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)
        structuredDataScripts.push(script)
      })

      await nextTick()
      revealObserver = createRevealObserver()
      const root = homePageRef.value?.$el || homePageRef.value
      revealObserver.observe(root?.querySelectorAll('[data-reveal]'))
    })

    onBeforeUnmount(() => {
      revealObserver?.disconnect()
      structuredDataScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    })

    const heroSignals = [
      { value: '13+', label: 'stats.years' },
      { value: '40+', label: 'stats.team' },
      { value: '100+', label: 'stats.projects' }
    ]

    const curationFrames = [
      {
        icon: 'diamond',
        color: 'accent',
        title: 'curation.items.positioning.title',
        description: 'curation.items.positioning.description'
      },
      {
        icon: 'account_tree',
        color: 'primary',
        title: 'curation.items.systems.title',
        description: 'curation.items.systems.description'
      },
      {
        icon: 'workspace_premium',
        color: 'positive',
        title: 'curation.items.leadership.title',
        description: 'curation.items.leadership.description'
      }
    ]

    const domains = [
      {
        index: '01',
        icon: 'sensors',
        color: 'accent',
        title: 'domains.items.iot.title',
        description: 'domains.items.iot.description'
      },
      {
        index: '02',
        icon: 'shopping_bag',
        color: 'primary',
        title: 'domains.items.commerce.title',
        description: 'domains.items.commerce.description'
      },
      {
        index: '03',
        icon: 'manage_accounts',
        color: 'positive',
        title: 'domains.items.integration.title',
        description: 'domains.items.integration.description'
      }
    ]

    const services = [
      {
        icon: 'architecture',
        color: 'accent',
        title: 'services.items.architecture.title',
        description: 'services.items.architecture.description',
        features: [
          'services.items.architecture.features.0',
          'services.items.architecture.features.1',
          'services.items.architecture.features.2',
          'services.items.architecture.features.3'
        ]
      },
      {
        icon: 'code',
        color: 'info',
        title: 'services.items.consulting.title',
        description: 'services.items.consulting.description',
        features: [
          'services.items.consulting.features.0',
          'services.items.consulting.features.1',
          'services.items.consulting.features.2',
          'services.items.consulting.features.3'
        ]
      },
      {
        icon: 'groups_3',
        color: 'positive',
        title: 'services.items.team_building.title',
        description: 'services.items.team_building.description',
        features: [
          'services.items.team_building.features.0',
          'services.items.team_building.features.1',
          'services.items.team_building.features.2',
          'services.items.team_building.features.3'
        ]
      }
    ]

    const pathways = [
      {
        icon: 'person_outline',
        tag: 'pathways.items.about.tag',
        title: 'pathways.items.about.title',
        description: 'pathways.items.about.description',
        button: 'pathways.items.about.button',
        to: '/profile'
      },
      {
        icon: 'work_outline',
        tag: 'pathways.items.services.tag',
        title: 'pathways.items.services.title',
        description: 'pathways.items.services.description',
        button: 'pathways.items.services.button',
        to: '/work'
      },
      {
        icon: 'auto_awesome',
        tag: 'pathways.items.workflow.tag',
        title: 'pathways.items.workflow.title',
        description: 'pathways.items.workflow.description',
        button: 'pathways.items.workflow.button',
        to: '/ai-workflow'
      }
    ]

    const scrollToContact = () => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const sendEmail = () => {
      window.location.href = 'mailto:chenpoyu1123@gmail.com'
    }

    const openGitHub = () => {
      window.open('https://github.com/chenpoyu', '_blank', 'noopener,noreferrer')
    }

    return {
      $q,
      getTitleLines,
      homePageRef,
      heroSignals,
      curationFrames,
      domains,
      services,
      pathways,
      scrollToContact,
      sendEmail,
      openGitHub
    }
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  --home-page-bg: transparent;
  --home-page-glow:
    radial-gradient(circle at 14% 0%, rgba(163, 138, 99, 0.08), transparent 22%),
    radial-gradient(circle at 86% 14%, rgba(54, 70, 90, 0.08), transparent 18%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  --home-section-title: var(--brand-navy);
  --home-section-copy: rgba(23, 33, 43, 0.74);
  --home-section-copy-strong: rgba(23, 33, 43, 0.82);
  --home-section-meta: rgba(66, 80, 97, 0.48);
  --home-section-eyebrow: rgba(163, 138, 99, 0.88);
  --home-surface-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(243, 246, 249, 0.92) 100%);
  --home-surface-border: rgba(33, 49, 66, 0.08);
  --home-surface-shadow: 0 24px 55px rgba(16, 28, 43, 0.08);
  --home-action-color: var(--brand-navy);
  --home-action-color-hover: #34465b;
  position: relative;
  isolation: isolate;
  background: var(--home-page-bg);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background: var(--home-page-glow);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
}

.home-page--dark {
  --home-page-bg: transparent;
  --home-page-glow:
    radial-gradient(circle at 16% 0%, rgba(163, 138, 99, 0.1), transparent 24%),
    radial-gradient(circle at 88% 18%, rgba(104, 129, 155, 0.08), transparent 20%);
  --home-section-title: #f5efe6;
  --home-section-copy: rgba(243, 237, 228, 0.78);
  --home-section-copy-strong: rgba(243, 237, 228, 0.88);
  --home-section-meta: rgba(176, 153, 115, 0.58);
  --home-section-eyebrow: rgba(176, 153, 115, 0.86);
  --home-surface-bg: linear-gradient(180deg, rgba(12, 18, 27, 0.82) 0%, rgba(15, 24, 36, 0.92) 100%);
  --home-surface-border: rgba(176, 153, 115, 0.12);
  --home-surface-shadow: 0 20px 46px rgba(0, 0, 0, 0.24);
  --home-action-color: #c8d2de;
  --home-action-color-hover: #eef3f8;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.home-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background:
    radial-gradient(circle at 18% 18%, rgba(163, 138, 99, 0.14), transparent 22%),
    radial-gradient(circle at top right, rgba(91, 108, 130, 0.14), transparent 24%),
    linear-gradient(135deg, rgba(12, 18, 28, 0.99) 0%, rgba(20, 30, 44, 0.97) 46%, rgba(13, 20, 31, 0.99) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    opacity: 0.55;
  }

  &::before {
    top: -100px;
    right: 8%;
    width: 260px;
    height: 260px;
    background: rgba(163, 138, 99, 0.14);
    filter: blur(8px);
    animation: drift 12s ease-in-out infinite;
  }

  &::after {
    bottom: -120px;
    left: 5%;
    width: 320px;
    height: 320px;
    background: rgba(97, 114, 136, 0.12);
    filter: blur(10px);
    animation: drift 16s ease-in-out infinite reverse;
  }

}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
  color: white;
}

.title-line,
.subtitle-line {
  display: block;
}

.hero-eyebrow,
.section-eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--home-section-eyebrow);
}

.section-eyebrow--light {
  color: rgba(201, 168, 96, 0.92);
}

.hero-title,
.section-title,
.contact-title,
.editorial-card-title,
.domain-card-title,
.pathway-card-title,
.service-title,
.hero-salon-card h3 {
  font-family: var(--display-font);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero-title {
  margin: 0;
  font-size: clamp(3.5rem, 8vw, 6.2rem);
  line-height: 0.95;
  color: #f8f5ef;
}

.hero-subtitle {
  margin: 1.25rem 0 0;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
}

.hero-description,
.hero-note,
.section-subtitle,
.editorial-note,
.contact-text,
.editorial-card-text,
.domain-card-text,
.pathway-card-text,
.service-description {
  line-height: 1.9;
}

.hero-description {
  max-width: 620px;
  margin: 1.25rem 0 0;
  font-size: 1.02rem;
  color: rgba(255, 255, 255, 0.82);
}

.hero-note {
  max-width: 560px;
  margin: 1rem 0 0;
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.64);
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-stage {
  position: relative;
  isolation: isolate;
  min-height: clamp(520px, 52vw, 640px);
  padding: 1.5rem 0 2rem;
}

.hero-portrait-shell {
  position: absolute;
  inset: 48px 56px 92px 44px;
  border-radius: 34px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
}

.hero-portrait-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(201, 168, 96, 0.4);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(201, 168, 96, 0.12) 100%);
}

.hero-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 42% 14%;
  display: block;
  transform: scale(1.01);
}

.hero-salon-card,
.hero-signal {
  position: absolute;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18);
}

.hero-salon-card {
  top: 1.25rem;
  right: -0.75rem;
  z-index: 2;
  width: min(232px, 36%);
  padding: 1.3rem 1.35rem;
  color: white;

  h3 {
    margin: 0.85rem 0 0;
    font-size: 1.45rem;
    line-height: 1.3;
  }

  p {
    margin: 0.7rem 0 0;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.76);
  }
}

.hero-salon-label {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(176, 153, 115, 0.88);
}

.hero-signal {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.15rem;
  color: white;
  z-index: 2;
}

.hero-signals {
  display: contents;
}

.hero-signal:nth-child(1) {
  left: 0;
  bottom: 125px;
}

.hero-signal:nth-child(2) {
  right: 18px;
  bottom: 54px;
}

.hero-signal:nth-child(3) {
  left: 120px;
  bottom: 0;
}

.hero-signal-value {
  font-size: 1.55rem;
  font-weight: 800;
  color: #f8f5ef;
}

.hero-signal-label {
  font-size: 0.88rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
}

.editorial-section,
.domains-section,
.pathways-section,
.services-section,
.contact-section {
  position: relative;
  padding: 5rem 0;
  overflow: clip;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  > .container {
    position: relative;
    z-index: 1;
  }
}

.editorial-section {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(239, 243, 246, 0.74) 100%);
}

.domains-section {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(180deg, rgba(238, 242, 246, 0.88) 0%, rgba(255, 255, 255, 0.06) 100%);
}

.pathways-section {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(180deg, rgba(163, 138, 99, 0.04) 0%, rgba(235, 240, 244, 0.64) 100%);
}

.editorial-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: 2.5rem;
  align-items: start;
}

.section-title {
  margin: 0;
  font-size: clamp(2rem, 4.4vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: 0.015em;
  color: var(--home-section-title);
}

.section-subtitle {
  margin: 1rem 0 0;
  max-width: 34rem;
  font-size: 0.98rem;
  color: var(--home-section-copy);
}

.editorial-note {
  margin-top: 1.25rem;
  max-width: 32rem;
  font-size: 0.98rem;
  color: var(--home-section-copy);
}

.editorial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
}

.editorial-card,
.domain-card,
.pathway-card,
.service-card {
  border: 1px solid var(--home-surface-border);
  background: var(--home-surface-bg);
  backdrop-filter: blur(10px);
  box-shadow: var(--home-surface-shadow);
  transition: transform 0.42s ease, box-shadow 0.42s ease, border-color 0.42s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(16, 28, 43, 0.12);
    border-color: rgba(163, 138, 99, 0.18);
  }
}

.editorial-card {
  border-radius: 26px;

  :deep(.q-card__section) {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 1.4rem 1.4rem 1.5rem;
  }
}

.editorial-card-top {
  display: flex;
  align-items: center;
  min-height: 2.25rem;
}

.editorial-card-icon-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 2.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.52);
  box-shadow: inset 0 0 0 1px rgba(30, 44, 60, 0.06);

  :deep(.q-icon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1;
  }
}

.editorial-card-title,
.domain-card-title,
.pathway-card-title,
.service-title {
  margin: 0.95rem 0 0;
  font-size: 1.22rem;
  line-height: 1.42;
  color: var(--home-section-title);
  text-wrap: balance;
}

.editorial-card-text,
.domain-card-text,
.pathway-card-text,
.service-description {
  margin: 0.75rem 0 0;
  font-size: 0.96rem;
  color: var(--home-section-copy);
}

.section-head.centered {
  max-width: 900px;
  margin: 0 auto 2.5rem;
  text-align: center;

  .section-title {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }

  .section-subtitle {
    max-width: 46rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.section-head--domains {
  .section-title {
    max-width: 12ch;
  }
}

.section-head--services {
  .section-title {
    max-width: 7ch;
  }

  .section-subtitle {
    max-width: 52rem;
  }
}

.section-head--pathways {
  .section-title {
    max-width: 15ch;
  }

  .section-subtitle {
    max-width: 50rem;
  }
}

.domains-grid,
.pathways-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.domain-card,
.pathway-card {
  border-radius: 28px;
  padding: 1.5rem;
}

.domain-card-top,
.pathway-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.domain-card-index,
.pathway-card-tag {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--home-section-meta);
}

.services-section {
  background:
    radial-gradient(circle at top, rgba(163, 138, 99, 0.14), transparent 24%),
    linear-gradient(135deg, rgba(13, 20, 31, 0.99) 0%, rgba(18, 28, 41, 1) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &::before {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 24%);
  }
}

.section-head--light {
  .section-title,
  .section-subtitle {
    color: white;
  }

  .section-subtitle {
    color: rgba(255, 255, 255, 0.72);
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.service-card {
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(19, 30, 43, 0.36) 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: white;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.2);
}

.service-icon-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
}

.service-title {
  color: #f7f4ef;
}

.service-description {
  color: rgba(255, 255, 255, 0.74);
}

.service-features {
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.55rem 0;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
  }
}

.pathway-card-action {
  margin-top: 1rem;
  padding-left: 0;
  color: var(--home-action-color);

  :deep(.q-btn__content) {
    color: inherit;
  }

  &:hover {
    color: var(--home-action-color-hover);
  }
}

.contact-section {
  padding-bottom: 6rem;
  background:
    radial-gradient(circle at bottom right, rgba(163, 138, 99, 0.14), transparent 25%),
    linear-gradient(135deg, rgba(14, 20, 31, 0.98) 0%, rgba(20, 29, 41, 0.99) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &::before {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 22%);
  }
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 2rem;
  align-items: start;
}

.contact-copy {
  color: white;
  padding-top: 1rem;
}

.contact-title {
  margin: 0.5rem 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.18;
  color: #f8f5ef;
}

.contact-text {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-form-shell {
  padding: 1.25rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(16px);
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, 18px, 0);
  }
}

.home-page--dark {
  .editorial-card :deep(.text-primary),
  .domain-card :deep(.text-primary),
  .pathway-card :deep(.text-primary) {
    color: #8fd3ff !important;
  }

  .editorial-card :deep(.text-accent),
  .domain-card :deep(.text-accent),
  .pathway-card :deep(.text-accent) {
    color: #d4b373 !important;
  }

  .editorial-card :deep(.text-positive),
  .domain-card :deep(.text-positive),
  .pathway-card :deep(.text-positive) {
    color: #84d7b0 !important;
  }
}

.home-page--dark {
  .editorial-section,
  .domains-section,
  .pathways-section,
  .services-section,
  .contact-section {
    border-top-color: rgba(255, 255, 255, 0.06);
  }

  .editorial-section {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(11, 22, 36, 0.16) 100%);
  }

  .domains-section {
    background: linear-gradient(180deg, rgba(11, 22, 36, 0.18) 0%, rgba(255, 255, 255, 0.01) 100%);
  }

  .pathways-section {
    background: linear-gradient(180deg, rgba(176, 153, 115, 0.04) 0%, rgba(11, 22, 36, 0.14) 100%);
  }

  .editorial-card,
  .domain-card,
  .pathway-card,
  .service-card {
    &:hover {
      box-shadow: 0 28px 64px rgba(0, 0, 0, 0.26);
      border-color: rgba(176, 153, 115, 0.18);
    }
  }
}

@media (max-width: 1180px) {
  .hero-layout,
  .editorial-layout,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .editorial-grid,
  .domains-grid,
  .services-grid,
  .pathways-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-stage {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
  }

  .hero-portrait-shell {
    inset: 64px 56px 92px 44px;
  }

  .section-subtitle,
  .editorial-note {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .home-hero,
  .editorial-section,
  .domains-section,
  .services-section,
  .pathways-section,
  .contact-section {
    padding: 3.5rem 0;
  }

  .home-hero {
    padding-top: 5rem;
  }

  .hero-stage {
    display: grid;
    gap: 1rem;
    min-height: auto;
    padding: 0.5rem 0 0;
  }

  .hero-stage,
  .hero-portrait-shell,
  .hero-signals,
  .hero-signal {
    position: static !important;
    inset: auto !important;
    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;
  }

  .hero-portrait-shell {
    position: relative;
    inset: auto;
    width: min(100%, 420px);
    aspect-ratio: 4 / 5;
    margin: 0 auto;
  }

  .hero-salon-card {
    display: none;
  }

  .hero-signals {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    width: min(100%, 420px);
    margin: 0 auto;
  }

  .hero-signal {
    min-width: 0;
    padding: 0.9rem 0.85rem;
    border-radius: 20px;
    z-index: auto;
  }

  .editorial-grid,
  .domains-grid,
  .services-grid,
  .pathways-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .contact-copy {
    text-align: left;
  }

  .section-head.centered {
    margin-bottom: 2rem;

    .section-title {
      max-width: none;
    }

    .section-subtitle {
      max-width: 34rem;
    }
  }

  .section-head--services {
    .section-title {
      max-width: 7ch;
    }
  }

  .section-head--pathways {
    .section-title {
      max-width: 13ch;
    }
  }

  .hero-actions,
  .contact-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(100% - 24px, 100% - 24px);
  }

  .home-hero {
    padding-top: 4.75rem;
  }

  .hero-title {
    font-size: clamp(2.9rem, 18vw, 4.3rem);
  }

  .section-title {
    font-size: clamp(1.75rem, 10vw, 2.5rem);
    line-height: 1.14;
  }

  .hero-signals {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-salon-card,
  .hero-portrait-shell,
  .hero-signals {
    width: 100%;
  }

  .hero-signal:last-child {
    grid-column: 1 / -1;
  }

  .hero-signal-value {
    font-size: 1.35rem;
  }

  .hero-signal-label {
    font-size: 0.8rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
  }

  .hero-description,
  .hero-note {
    font-size: 0.95rem;
  }

  .hero-actions,
  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions :deep(.q-btn),
  .contact-actions :deep(.q-btn) {
    width: 100%;
  }

  .section-head.centered {
    .section-title {
      max-width: 100%;
    }

    .section-subtitle {
      max-width: 100%;
      font-size: 0.94rem;
      line-height: 1.8;
    }
  }

  .section-head--services,
  .section-head--pathways,
  .section-head--domains {
    .title-line + .title-line {
      margin-top: 0.08em;
    }
  }

  .editorial-card,
  .domain-card,
  .pathway-card,
  .service-card {
    border-radius: 24px;
  }

  .domain-card,
  .pathway-card {
    padding: 1.25rem;
  }
}
</style>
