<template>
  <q-page class="tech-architecture-page" :class="pageClasses">
    <section class="hero-section">
      <div class="container">
        <div class="hero-stage">
          <div class="hero-copy">
            <p class="hero-eyebrow">{{ $t('techarch.hero.eyebrow') }}</p>
            <div class="hero-badge-row">
              <span
                v-for="badge in heroBadges"
                :key="badge"
                class="hero-badge"
              >
                {{ badge }}
              </span>
            </div>
            <h1 class="page-title">
              <span
                v-for="line in heroTitleLines"
                :key="line"
                class="title-line"
              >
                {{ line }}
              </span>
            </h1>
            <p class="page-subtitle">{{ $t('techarch.hero.subtitle') }}</p>
            <p class="hero-description">{{ $t('techarch.hero.description') }}</p>
            <p class="hero-note">{{ $t('techarch.hero.note') }}</p>

            <div class="hero-proof-grid">
              <article
                v-for="item in heroProof"
                :key="item.title"
                class="hero-proof-card"
              >
                <p class="hero-proof-card__label">{{ item.title }}</p>
                <p class="hero-proof-card__text">{{ item.description }}</p>
              </article>
            </div>

            <div class="hero-actions">
              <q-btn
                unelevated
                color="accent"
                no-caps
                :label="$t('techarch.hero.primaryCta')"
                to="/work"
              />
              <q-btn
                outline
                color="primary"
                no-caps
                :label="$t('techarch.hero.secondaryCta')"
                to="/ai-workflow"
              />
            </div>
          </div>

          <div class="hero-domain-board">
            <article class="hero-domain-board__lead">
              <p class="hero-domain-board__eyebrow">{{ $t('techarch.hero.panelEyebrow') }}</p>
              <h2 class="hero-domain-board__title">{{ $t('techarch.hero.panelTitle') }}</h2>
              <p class="hero-domain-board__note">{{ $t('techarch.hero.panelNote') }}</p>
              <ul class="hero-domain-board__list">
                <li v-for="point in heroPanelPoints" :key="point">{{ point }}</li>
              </ul>
            </article>

            <div class="hero-domain-grid">
              <article
                v-for="(item, index) in cases"
                :key="`${item.key}-hero`"
                class="hero-case-chip"
              >
                <span class="hero-case-chip__index">{{ String(index + 1).padStart(2, '0') }}</span>
                <div class="hero-case-chip__body">
                  <p class="hero-case-chip__kicker">{{ item.kicker }}</p>
                  <h2 class="hero-case-chip__title">{{ item.title }}</h2>
                  <p class="hero-case-chip__fit">{{ item.heroFit }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="positioning-section section-shell">
      <div class="container">
        <div class="section-heading centered">
          <p class="section-eyebrow">{{ $t('techarch.positioning.eyebrow') }}</p>
          <h2 class="section-title section-title--positioning">
            <span
              v-for="line in positioningTitleLines"
              :key="line"
              class="title-line"
            >
              {{ line }}
            </span>
          </h2>
          <p class="section-subtitle">{{ $t('techarch.positioning.subtitle') }}</p>
        </div>

        <div class="positioning-grid">
          <article
            v-for="(item, index) in positioningItems"
            :key="item.title"
            class="positioning-card"
          >
            <span class="positioning-card__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="positioning-card__title">{{ item.title }}</h3>
            <p class="positioning-card__description">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="cases-section section-shell">
      <div class="container">
        <div class="section-heading centered">
          <p class="section-eyebrow">{{ $t('techarch.casesIntro.eyebrow') }}</p>
          <h2 class="section-title section-title--cases">
            <span
              v-for="line in casesIntroTitleLines"
              :key="line"
              class="title-line"
            >
              {{ line }}
            </span>
          </h2>
          <p class="section-subtitle">{{ $t('techarch.casesIntro.subtitle') }}</p>
        </div>

        <article
          v-for="(item, index) in cases"
          :key="item.key"
          class="case-card"
        >
          <div class="case-card__header">
            <div class="case-card__header-copy">
              <span class="case-card__kicker">{{ item.kicker }}</span>
              <h3 class="case-card__title">{{ item.title }}</h3>
              <p class="case-card__summary">{{ item.summary }}</p>
            </div>
            <div class="case-card__header-index">{{ String(index + 1).padStart(2, '0') }}</div>
          </div>

          <div class="case-card__diagram-panel">
            <div class="diagram-meta">
              <h4 class="diagram-meta__title">{{ item.diagramTitle }}</h4>
              <p class="diagram-meta__caption">{{ item.diagramCaption }}</p>
            </div>

            <div class="diagram-stage">
              <div class="diagram-canvas" v-html="renderedDiagrams[item.key] || ''"></div>
            </div>
          </div>

          <div class="case-card__details-grid">
            <div class="case-card__content-main">
              <div class="case-block">
                <h4 class="case-block__title">{{ item.contextTitle }}</h4>
                <p class="case-block__text">{{ item.context }}</p>
              </div>

              <div class="case-block">
                <h4 class="case-block__title">{{ item.roleTitle }}</h4>
                <p class="case-block__text">{{ item.role }}</p>
              </div>

              <div class="case-block">
                <h4 class="case-block__title">{{ item.stackTitle }}</h4>
                <div class="stack-chips">
                  <q-chip
                    v-for="stackItem in item.stack"
                    :key="stackItem"
                    outline
                    color="primary"
                    :label="stackItem"
                  />
                </div>
              </div>
            </div>

            <div class="case-card__content-side">
              <div class="case-lists-grid case-lists-grid--stacked">
                <div class="case-block">
                  <h4 class="case-block__title">{{ item.decisionsTitle }}</h4>
                  <ul class="case-list">
                    <li v-for="decision in item.decisions" :key="decision">
                      <q-icon name="north_east" size="16px" color="accent" />
                      <span>{{ decision }}</span>
                    </li>
                  </ul>
                </div>

                <div class="case-block">
                  <h4 class="case-block__title">{{ item.outcomesTitle }}</h4>
                  <ul class="case-list case-list--positive">
                    <li v-for="outcome in item.outcomes" :key="outcome">
                      <q-icon name="check_circle" size="16px" color="positive" />
                      <span>{{ outcome }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="capability-section section-shell">
      <div class="container">
        <div class="section-heading centered">
          <p class="section-eyebrow">{{ $t('techarch.capability.eyebrow') }}</p>
          <h2 class="section-title section-title--capability">
            <span
              v-for="line in capabilityTitleLines"
              :key="line"
              class="title-line"
            >
              {{ line }}
            </span>
          </h2>
          <p class="section-subtitle">{{ $t('techarch.capability.subtitle') }}</p>
        </div>

        <div class="capability-grid">
          <q-card
            v-for="item in capabilityItems"
            :key="item.title"
            flat
            class="capability-card"
          >
            <q-card-section>
              <h3 class="capability-card__title">{{ item.title }}</h3>
              <p class="capability-card__description">{{ item.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="closing-section">
      <div class="container closing-shell">
        <div class="closing-copy">
          <p class="section-eyebrow section-eyebrow--light">{{ $t('techarch.closing.eyebrow') }}</p>
          <h2 class="closing-title">{{ $t('techarch.closing.title') }}</h2>
          <p class="closing-description">{{ $t('techarch.closing.description') }}</p>
        </div>

        <div class="closing-actions">
          <q-btn
            unelevated
            color="accent"
            no-caps
            :label="$t('techarch.closing.primaryCta')"
            to="/work"
          />
          <q-btn
            outline
            color="white"
            no-caps
            :label="$t('techarch.closing.secondaryCta')"
            @click="sendEmail"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import mermaid from 'mermaid'

/**
 * @typedef {{ title: string, description: string }} ContentItem
 * @typedef {{
 *   kicker: string,
 *   title: string,
 *   heroFit: string,
 *   summary: string,
 *   contextTitle: string,
 *   context: string,
 *   roleTitle: string,
 *   role: string,
 *   decisionsTitle: string,
 *   decisions: string[],
 *   outcomesTitle: string,
 *   outcomes: string[],
 *   stackTitle: string,
 *   stack: string[],
 *   diagramTitle: string,
 *   diagramCaption: string
 * }} CaseContent
 * @typedef {CaseContent & { key: string, diagram: string }} CaseItem
 */

const caseOrder = ['iotPlatform', 'memberIdentity', 'commerceScale']

const caseDiagrams = {
  iotPlatform: `graph TB
    Device[Vehicle / IoT Device] --> Gateway[API Gateway]
    Gateway --> Api[Backend API]
    Api --> StepFn[AWS Step Functions]
    Api --> Redis[Redis]
    StepFn --> Redis
    StepFn --> Postgres[(PostgreSQL)]
    StepFn --> S3[(AWS S3)]
    Ops[Operation Console] --> Gateway
    Ops --> Postgres`,
  memberIdentity: `sequenceDiagram
    participant Brand as Brand App
    participant Gateway as API Gateway
    participant Redis as Redis
    participant Member as Member API
    participant DB as Member DB

    Brand->>Gateway: Access protected page
    Gateway->>Gateway: Validate JWT
    Gateway->>Redis: Check token / session state
    Redis-->>Gateway: Session state
    Gateway->>Member: Request member profile
    Member->>DB: Query member data
    DB-->>Member: Member identity and roles
    Member-->>Gateway: Member response
    Gateway-->>Brand: Authorized response`,
  commerceScale: `graph LR
    Client[Web / App Users] --> CDN[CDN]
    CDN --> Gateway[API Gateway]
    Gateway --> Api[Backend API]
    Api --> Redis[Redis]
    Api --> Primary[(PostgreSQL)]
    Api --> Job[Scheduled Job / Batch]
    Job --> Primary`
}

export default defineComponent({
  name: 'TechArchitecture',

  setup() {
    const $q = useQuasar()
    const { tm, locale } = useI18n()
    const renderedDiagrams = ref({})

    const normalizeLines = (value, fallback) => {
      if (Array.isArray(value) && value.length > 0) {
        return value
      }

      return [fallback]
    }

    const heroBadges = computed(() => /** @type {string[]} */ (tm('techarch.hero.badges')))
    const heroProof = computed(() => /** @type {{ title: string, description: string }[]} */ (tm('techarch.hero.proof')))
    const heroPanelPoints = computed(() => /** @type {string[]} */ (tm('techarch.hero.panelPoints')))
    const isEnglishLocale = computed(() => locale.value === 'en-us')
    const isChineseLocale = computed(() => locale.value === 'zh-tw')
    const pageClasses = computed(() => ({
      'tech-architecture-page--dark': $q.dark.isActive,
      'tech-architecture-page--en': isEnglishLocale.value,
      'tech-architecture-page--zh': isChineseLocale.value
    }))
    const heroTitleLines = computed(() => normalizeLines(tm('techarch.hero.titleLines'), tm('techarch.hero.title')))
    const positioningTitleLines = computed(() => normalizeLines(tm('techarch.positioning.titleLines'), tm('techarch.positioning.title')))
    const casesIntroTitleLines = computed(() => normalizeLines(tm('techarch.casesIntro.titleLines'), tm('techarch.casesIntro.title')))
    const capabilityTitleLines = computed(() => normalizeLines(tm('techarch.capability.titleLines'), tm('techarch.capability.title')))
    const positioningItems = computed(
      /** @returns {ContentItem[]} */
      () => /** @type {ContentItem[]} */ (tm('techarch.positioning.items'))
    )
    const capabilityItems = computed(
      /** @returns {ContentItem[]} */
      () => /** @type {ContentItem[]} */ (tm('techarch.capability.items'))
    )
    const cases = computed(
      /** @returns {CaseItem[]} */
      () => {
      const source = /** @type {Record<string, CaseContent>} */ (tm('techarch.cases'))

      return caseOrder.map((key) => ({
        key,
        diagram: caseDiagrams[key],
        ...source[key]
      }))
      }
    )

    const renderMermaid = async () => {
      const isDark = $q.dark.isActive

      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        deterministicIds: false,
        themeVariables: isDark
          ? {
              background: '#0f1c2c',
              primaryColor: '#15324d',
              primaryTextColor: '#f3ede4',
              primaryBorderColor: '#7f97b2',
              lineColor: '#d2dbe5',
              secondaryColor: '#1d2d40',
              tertiaryColor: '#132435',
              mainBkg: '#15324d',
              textColor: '#f3ede4',
              fontFamily: 'Manrope, sans-serif'
            }
          : {
              background: '#f5efe6',
              primaryColor: '#dce5ee',
              primaryTextColor: '#132235',
              primaryBorderColor: '#4f6780',
              lineColor: '#40586f',
              secondaryColor: '#eef3f8',
              tertiaryColor: '#f8fafc',
              mainBkg: '#dce5ee',
              textColor: '#132235',
              fontFamily: 'Manrope, sans-serif'
            },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis'
        },
        sequence: {
          diagramMarginX: 30,
          diagramMarginY: 12,
          actorMargin: 44,
          width: 180,
          height: 60,
          boxMargin: 8,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 28,
          mirrorActors: false,
          useMaxWidth: true
        }
      })

      const caseResults = await Promise.all(
        caseOrder.map(async (key) => {
          const result = await mermaid.render(`case-diagram-${key}-${isDark ? 'dark' : 'light'}`, caseDiagrams[key])
          return [key, result.svg]
        })
      )

      renderedDiagrams.value = Object.fromEntries(caseResults)
    }

    onMounted(() => {
      renderMermaid()
    })

    watch(
      () => $q.dark.isActive,
      () => {
        renderMermaid()
      }
    )

    const sendEmail = () => {
      window.location.href = 'mailto:chenpoyu1123@gmail.com?subject=架構案例合作諮詢'
    }

    return {
      $q,
      heroBadges,
      heroProof,
      heroTitleLines,
      heroPanelPoints,
      positioningTitleLines,
      casesIntroTitleLines,
      capabilityTitleLines,
      positioningItems,
      cases,
      capabilityItems,
      renderedDiagrams,
      pageClasses,
      sendEmail
    }
  }
})
</script>

<style lang="scss" scoped>
.tech-architecture-page {
  overflow-x: clip;
  background:
    radial-gradient(circle at top left, rgba(163, 138, 99, 0.08), transparent 22%),
    radial-gradient(circle at 84% 10%, rgba(54, 70, 90, 0.08), transparent 18%),
    linear-gradient(180deg, #edf1f4 0%, #e6ebf0 48%, #eef2f5 100%);
  color: var(--text-strong);
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 0;
}

.section-shell {
  padding: 3.9rem 0;
}

.hero-section {
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0 4rem;
  color: var(--brand-navy);
  background:
    linear-gradient(180deg, rgba(247, 241, 233, 0.98) 0%, rgba(230, 237, 243, 0.96) 100%);

  &::before {
    inset: 0;
    border-radius: 0;
    opacity: 1;
    filter: none;
    background-image:
      linear-gradient(rgba(19, 34, 53, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(19, 34, 53, 0.05) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(10px);
    opacity: 0.54;
  }

  &::after {
    width: 300px;
    height: 300px;
    top: -120px;
    right: -60px;
    background: rgba(168, 140, 97, 0.12);
  }
}

.hero-stage {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(380px, 1.06fr);
  gap: 1.9rem;
  align-items: center;
}

.hero-copy {
  display: grid;
  align-content: start;
  min-width: 0;
  padding-right: 0.4rem;
}

.hero-eyebrow,
.section-eyebrow {
  margin: 0 0 0.85rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 168, 96, 0.9);
}

.hero-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(19, 34, 53, 0.06);
  border: 1px solid rgba(19, 34, 53, 0.08);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--brand-navy);
}

.section-eyebrow--light {
  color: rgba(201, 168, 96, 0.92);
}

.page-title,
.section-title,
.case-card__title,
.closing-title {
  font-family: var(--display-font);
  word-break: keep-all;
}

.page-title {
  margin: 0;
  max-width: 8.8ch;
  font-size: clamp(2.15rem, 3.6vw, 3.2rem);
  line-height: 1.08;
  font-weight: 600;
  letter-spacing: 0.015em;
}

.title-line {
  display: block;
}

.page-subtitle {
  max-width: 31rem;
  margin: 1.1rem 0 0;
  font-size: 0.98rem;
  line-height: 1.82;
  color: rgba(19, 34, 53, 0.78);
}

.hero-description,
.hero-note,
.section-subtitle,
.positioning-card__description,
.case-card__summary,
.case-block__text,
.diagram-meta__caption,
.capability-card__description,
.closing-description {
  line-height: 1.9;
}

.hero-description {
  max-width: 30rem;
  margin: 1rem 0 0;
  font-size: 0.93rem;
  line-height: 1.85;
  color: rgba(19, 34, 53, 0.76);
}

.hero-note {
  max-width: 29rem;
  margin: 0.8rem 0 0;
  font-size: 0.9rem;
  line-height: 1.82;
  color: rgba(19, 34, 53, 0.62);
}

.hero-proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
  margin-top: 1.35rem;
}

.hero-proof-card {
  padding: 0.85rem 0.8rem 0.9rem;
  border-radius: 18px;
  border: 1px solid rgba(20, 40, 61, 0.08);
  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(12px);
}

.hero-proof-card__label {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(201, 168, 96, 0.96);
}

.hero-proof-card__text {
  margin: 0.45rem 0 0;
  font-size: 0.85rem;
  line-height: 1.68;
  color: rgba(19, 34, 53, 0.72);
}

.hero-actions,
.closing-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.35rem;
}

.positioning-card,
.case-card,
.capability-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 48px rgba(16, 28, 43, 0.08);
}

.hero-domain-board__lead,
.hero-case-chip {
  border-radius: 28px;
  border: 1px solid rgba(20, 40, 61, 0.1);
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(14px);
}

.hero-domain-board {
  display: grid;
  gap: 0.8rem;
  padding-top: 0;
  min-width: 0;
}

.hero-domain-board__lead {
  padding: 1.2rem 1.2rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(242, 246, 249, 0.76));
}

.hero-domain-board__eyebrow {
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(201, 168, 96, 0.9);
}

.hero-domain-board__title {
  margin: 0.5rem 0 0;
  font-family: var(--body-font);
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.42;
  color: var(--brand-navy);
}

.hero-domain-board__note {
  margin: 0.55rem 0 0;
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(19, 34, 53, 0.72);
}

.hero-domain-board__list {
  margin: 0.8rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  line-height: 1.72;
  color: rgba(19, 34, 53, 0.72);
}

.hero-domain-board__list li + li {
  margin-top: 0.5rem;
}

.diagram-canvas :deep(svg) {
  display: block;
  width: 100%;
  height: auto;
}

.hero-domain-grid {
  display: grid;
  gap: 0.85rem;
}

.hero-case-chip {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem;
  padding: 0.8rem 0.9rem;
}

.hero-case-chip__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: rgba(16, 28, 43, 0.08);
  color: var(--brand-navy);
  font-weight: 800;
}

.hero-case-chip__kicker {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: rgba(19, 34, 53, 0.48);
}

.hero-case-chip__title {
  margin: 0.28rem 0 0;
  font-family: var(--body-font);
  font-size: 0.93rem;
  font-weight: 700;
  line-height: 1.42;
  color: var(--brand-navy);
}

.hero-case-chip__fit {
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  line-height: 1.65;
  color: rgba(19, 34, 53, 0.68);
}

.positioning-section,
.cases-section,
.capability-section {
  position: relative;
  background: transparent;
}

.positioning-section::before,
.cases-section::before,
.capability-section::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.positioning-section::before {
  background: radial-gradient(circle at 50% 0%, rgba(163, 138, 99, 0.05), transparent 45%);
}

.cases-section::before {
  background: radial-gradient(circle at 50% 100%, rgba(54, 70, 90, 0.04), transparent 42%);
}

.capability-section::before {
  background: radial-gradient(circle at 15% 20%, rgba(163, 138, 99, 0.04), transparent 30%);
}

.centered {
  max-width: 860px;
  margin: 0 auto 1.85rem;
  text-align: center;
}

.section-title {
  margin: 0;
  font-size: clamp(1.65rem, 2.8vw, 2.35rem);
  line-height: 1.22;
  color: var(--brand-navy);
}

.section-title--positioning {
  max-width: 14ch;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-title--cases {
  max-width: 13ch;
  margin-left: auto;
  margin-right: auto;
}

.section-title--capability {
  max-width: 12.5ch;
  margin-left: auto;
  margin-right: auto;
}

.section-subtitle {
  margin: 0.9rem auto 0;
  max-width: 46rem;
  font-size: 0.9rem;
  line-height: 1.82;
  color: rgba(22, 34, 49, 0.72);
}

.tech-architecture-page--zh {
  .section-title {
    font-size: clamp(1.42rem, 2.2vw, 1.9rem);
    line-height: 1.3;
    letter-spacing: 0.01em;
  }

  .section-title--positioning,
  .section-title--cases,
  .section-title--capability {
    max-width: none;
  }

  .section-subtitle {
    max-width: 42rem;
    font-size: 0.88rem;
  }
}

.tech-architecture-page--en {
  .page-title {
    max-width: 9.6ch;
    font-size: clamp(2rem, 3.1vw, 2.85rem);
    line-height: 1.1;
  }

  .page-subtitle,
  .hero-description,
  .hero-note {
    max-width: 33rem;
  }

  .section-title {
    font-size: clamp(1.5rem, 2.2vw, 1.95rem);
    line-height: 1.22;
  }

  .section-title--positioning,
  .section-title--cases,
  .section-title--capability {
    max-width: none;
  }

  .section-title .title-line {
    white-space: nowrap;
  }

  .section-subtitle {
    max-width: 42rem;
  }

  .centered {
    max-width: 980px;
  }
}

.positioning-grid,
.capability-grid {
  display: grid;
  gap: 1rem;
}

.positioning-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.capability-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.positioning-card,
.capability-card {
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(243, 246, 249, 0.88));
  border-color: rgba(33, 49, 66, 0.08);
}

.positioning-card {
  padding: 1.2rem;
}

.positioning-card__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: rgba(16, 28, 43, 0.06);
  color: var(--brand-navy);
  font-weight: 700;
}

.positioning-card__title,
.capability-card__title {
  margin: 0.8rem 0 0;
  font-family: var(--body-font);
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.45;
  color: var(--brand-navy);
}

.positioning-card__description,
.capability-card__description {
  margin: 0.65rem 0 0;
  font-size: 0.9rem;
  line-height: 1.78;
  color: rgba(22, 34, 49, 0.72);
}

.capability-card :deep(.q-card__section) {
  padding: 1.2rem;
}

.case-card {
  padding: 1.7rem;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(243, 246, 249, 0.95));
  border-color: rgba(33, 49, 66, 0.08);
}

.case-card + .case-card {
  margin-top: 1.4rem;
}

.case-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(33, 49, 66, 0.08);
}

.case-card__header-copy {
  min-width: 0;
}

.case-card__kicker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(16, 28, 43, 0.06);
  color: rgba(22, 34, 49, 0.7);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.case-card__title {
  margin: 0.9rem 0 0;
  font-size: clamp(1.65rem, 3vw, 2.3rem);
  line-height: 1.18;
  color: var(--brand-navy);
}

.case-card__summary {
  max-width: 48rem;
  margin: 0.75rem 0 0;
  color: rgba(22, 34, 49, 0.72);
}

.case-card__header-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: rgba(16, 28, 43, 0.06);
  color: var(--brand-navy);
  font-size: 1rem;
  font-weight: 800;
  flex-shrink: 0;
}

.case-card__diagram-panel {
  margin-top: 1.4rem;
  padding: 1rem;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(12, 26, 39, 0.98), rgba(18, 34, 50, 0.94));
}

.diagram-stage {
  padding-top: 1rem;
}

.diagram-canvas {
  min-height: 360px;
  padding: 1rem;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(247, 241, 233, 0.98), rgba(230, 237, 243, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
}

.case-card__details-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
  gap: 1.4rem;
  margin-top: 1.4rem;
}

.case-card__content-main,
.case-card__content-side {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.case-block {
  padding: 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.66);
  border: 1px solid rgba(33, 49, 66, 0.06);
}

.case-block__title,
.diagram-meta__title {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: rgba(22, 34, 49, 0.78);
}

.case-block__text,
.diagram-meta__caption {
  margin: 0.65rem 0 0;
  font-size: 0.98rem;
  color: rgba(22, 34, 49, 0.72);
}

.case-lists-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.case-lists-grid--stacked {
  grid-template-columns: 1fr;
}

.case-list {
  list-style: none;
  margin: 0.7rem 0 0;
  padding: 0;
}

.case-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: rgba(22, 34, 49, 0.76);
}

.case-list li + li {
  margin-top: 0.75rem;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.8rem;
}

.diagram-meta {
  display: grid;
  gap: 0.4rem;
  padding: 0 0.1rem;
}

.diagram-meta__title {
  color: rgba(245, 239, 230, 0.62);
}

.diagram-meta__caption {
  margin: 0;
  max-width: 36rem;
  color: rgba(245, 239, 230, 0.72);
}

.capability-card {
  height: 100%;
}

.closing-section {
  padding: 4rem 0 4.8rem;
  color: white;
  background:
    radial-gradient(circle at bottom right, rgba(163, 138, 99, 0.14), transparent 25%),
    linear-gradient(135deg, rgba(14, 20, 31, 0.98) 0%, rgba(20, 29, 41, 0.99) 100%);
}

.closing-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
}

.closing-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.18;
  color: #f8f5ef;
}

.closing-description {
  max-width: 38rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.72);
}

.tech-architecture-page--dark {
  background:
    radial-gradient(circle at top left, rgba(176, 153, 115, 0.1), transparent 22%),
    radial-gradient(circle at 84% 10%, rgba(104, 129, 155, 0.08), transparent 18%),
    linear-gradient(180deg, #07111d 0%, #0b1624 48%, #08111c 100%);

  .positioning-section,
  .cases-section,
  .capability-section {
    background: transparent;
  }

  .section-title,
  .positioning-card__title,
  .capability-card__title,
  .case-card__title {
    color: #f5efe6;
  }

  .section-subtitle,
  .positioning-card__description,
  .capability-card__description,
  .case-card__summary,
  .case-block__text,
  .diagram-meta__caption,
  .case-list li {
    color: rgba(243, 237, 228, 0.74);
  }

  .positioning-card,
  .case-card,
  .capability-card,
  .case-block,
  .diagram-canvas,
  .hero-case-chip {
    background: linear-gradient(180deg, rgba(10, 20, 31, 0.84), rgba(14, 24, 36, 0.94));
    border-color: rgba(131, 171, 211, 0.12);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.24);
  }

  .hero-section {
    color: #f3ede4;
    background: linear-gradient(180deg, rgba(10, 20, 31, 0.98), rgba(8, 17, 28, 0.98));

    &::before {
      background-image:
        linear-gradient(rgba(243, 237, 228, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(243, 237, 228, 0.05) 1px, transparent 1px);
    }
  }

  .page-subtitle,
  .hero-description,
  .hero-note,
  .hero-proof-card__text,
  .hero-domain-board__note,
  .hero-case-chip__kicker,
  .hero-case-chip__fit {
    color: rgba(243, 237, 228, 0.72);
  }

  .hero-domain-board__title {
    color: #f3ede4;
  }

  .hero-badge,
  .hero-domain-board__lead,
  .hero-case-chip {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(131, 171, 211, 0.12);
    color: #f3ede4;
  }

  .hero-domain-board__list {
    color: rgba(243, 237, 228, 0.72);
  }

  .hero-proof-card,
  .hero-domain-board__lead,
  .hero-case-chip {
    background: linear-gradient(180deg, rgba(16, 28, 43, 0.82), rgba(18, 32, 47, 0.92));
    border-color: rgba(131, 171, 211, 0.12);
  }

  .hero-proof-card__label {
    color: rgba(201, 168, 96, 0.96);
  }

  .hero-signal__value,
  .hero-signal__label,
  .hero-case-chip__title,
  .hero-case-chip__index {
    color: #f3ede4;
  }
  .hero-case-chip__index {
    background: rgba(255, 255, 255, 0.06);
  }

  .diagram-canvas {
    background: linear-gradient(180deg, rgba(11, 23, 36, 0.82), rgba(16, 31, 47, 0.94));
  }

  .case-card__header {
    border-color: rgba(131, 171, 211, 0.12);
  }

  .positioning-card__index,
  .case-card__header-index,
  .case-card__kicker {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(243, 237, 228, 0.78);
  }

  .case-block__title,
  .diagram-meta__title {
    color: rgba(243, 237, 228, 0.46);
  }
}

@media (max-width: 1180px) {
  .hero-stage,
  .case-card__details-grid {
    grid-template-columns: 1fr;
  }

  .page-title,
  .page-subtitle,
  .hero-description,
  .hero-note {
    max-width: none;
  }

  .closing-shell {
    flex-direction: column;
    align-items: flex-start;
  }

  .positioning-grid,
  .capability-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 12px);
  }

  .section-shell,
  .closing-section {
    padding: 3.5rem 0;
  }

  .hero-section {
    padding: 3.6rem 0 3rem;
  }

  .hero-stage {
    gap: 1.2rem;
  }

  .positioning-grid,
  .capability-grid,
  .case-lists-grid,
  .hero-proof-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    max-width: 100%;
    font-size: clamp(2.1rem, 10vw, 3.1rem);
  }

  .section-title,
  .section-title--positioning,
  .section-title--cases,
  .section-title--capability {
    max-width: 100%;
  }

  .tech-architecture-page--zh,
  .tech-architecture-page--en {
    .section-title {
      font-size: clamp(1.45rem, 7vw, 2rem);
    }
  }

  .tech-architecture-page--en {
    .section-title .title-line {
      white-space: normal;
    }
  }

  .hero-blueprint,
  .diagram-canvas {
    min-height: auto;
    padding: 0.6rem;
  }

  .hero-actions,
  .closing-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .hero-actions :deep(.q-btn),
  .closing-actions :deep(.q-btn) {
    width: 100%;
  }

  .case-card {
    padding: 1.05rem;
    border-radius: 24px;
  }

  .case-card__header {
    flex-direction: column;
  }

  .case-card__diagram-panel {
    padding: 0.8rem;
    border-radius: 22px;
  }

  .case-block {
    padding: 0.9rem;
    border-radius: 18px;
  }

  .hero-domain-board__lead,
  .hero-case-chip,
  .positioning-card,
  .capability-card {
    border-radius: 22px;
  }
}

@media (max-width: 560px) {
  .container {
    width: calc(100% - 8px);
  }

  .hero-section,
  .section-shell,
  .closing-section {
    padding-left: 0;
    padding-right: 0;
  }

  .hero-badge-row {
    gap: 0.45rem;
  }

  .hero-badge,
  .case-card__kicker {
    min-height: 28px;
    padding: 0.22rem 0.68rem;
    font-size: 0.72rem;
  }

  .page-title {
    font-size: clamp(1.8rem, 9.4vw, 2.4rem);
  }

  .page-subtitle,
  .hero-description,
  .hero-note,
  .section-subtitle,
  .case-block__text,
  .case-card__summary {
    font-size: 0.92rem;
    line-height: 1.72;
  }

  .case-card {
    padding: 0.92rem;
    border-radius: 20px;
  }

  .case-card__diagram-panel {
    padding: 0.7rem;
    border-radius: 18px;
  }

  .diagram-canvas {
    padding: 0.45rem;
    border-radius: 16px;
  }

  .case-card__header-index {
    width: 44px;
    height: 44px;
    border-radius: 14px;
  }
}
</style>
