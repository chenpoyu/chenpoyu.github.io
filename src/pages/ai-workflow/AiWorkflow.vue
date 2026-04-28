<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page class="ai-workflow-page" :class="[pageLocaleClass, pageThemeClass]">
    <section class="hero-section">
      <div class="container hero-shell">
        <div class="hero-copy" data-reveal="left">
          <p class="hero-section__eyebrow">{{ $t('aiWorkflowPage.hero.eyebrow') }}</p>
          <h1 class="hero-section__title">{{ $t('aiWorkflowPage.hero.title') }}</h1>
          <p class="hero-section__subtitle">{{ $t('aiWorkflowPage.hero.subtitle') }}</p>
          <p class="hero-section__description">{{ $t('aiWorkflowPage.hero.description') }}</p>

          <div class="hero-section__actions">
            <q-btn
              unelevated
              color="primary"
              no-caps
              :label="$t('aiWorkflowPage.hero.primaryCta')"
              @click="scrollToSection('workflow')"
            />
            <q-btn
              outline
              color="white"
              no-caps
              :label="$t('aiWorkflowPage.hero.secondaryCta')"
              @click="scrollToSection('portfolio')"
            />
          </div>

          <div class="hero-manifesto" data-reveal="up" style="--reveal-delay: 220ms">
            <p class="hero-manifesto__label">{{ $t('aiWorkflowPage.hero.signatureLabel') }}</p>
            <p class="hero-manifesto__text">{{ $t('aiWorkflowPage.hero.signatureText') }}</p>
          </div>
        </div>

        <aside class="hero-aside" data-reveal="right" style="--reveal-delay: 120ms">
          <div class="hero-aside__panel">
            <p class="hero-aside__label">{{ $t('aiWorkflowPage.hero.panelLabel') }}</p>
            <h2 class="hero-aside__title">{{ $t('aiWorkflowPage.hero.panelTitle') }}</h2>
            <p class="hero-aside__body">{{ $t('aiWorkflowPage.hero.panelBody') }}</p>
          </div>

          <div class="hero-signal-list">
            <article
              v-for="(item, index) in highlights"
              :key="index"
              class="hero-signal"
              data-reveal="up"
              :style="{ '--reveal-delay': `${180 + index * 60}ms` }"
            >
              <div class="hero-signal__value">{{ item.value }}</div>
              <div class="hero-signal__body">
                <div class="hero-signal__label">{{ item.label }}</div>
                <p class="hero-signal__caption">{{ item.caption }}</p>
              </div>
            </article>
          </div>
        </aside>
      </div>

    </section>

    <section class="story-section section-shell">
      <div class="container story-layout">
        <div class="section-heading story-intro" data-reveal="left">
          <p class="section-heading__eyebrow">{{ $t('aiWorkflowPage.story.eyebrow') }}</p>
          <h2 class="section-heading__title">{{ $t('aiWorkflowPage.story.title') }}</h2>
          <p class="section-heading__subtitle">{{ $t('aiWorkflowPage.story.subtitle') }}</p>
          <div class="story-intro__quote">
            <span class="story-intro__quote-mark">“</span>
            <p>{{ $t('aiWorkflowPage.story.quote') }}</p>
          </div>
        </div>

        <div class="story-grid">
          <article
            v-for="(chapter, index) in storyChapters"
            :key="chapter.title"
            class="story-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${index * 70}ms` }"
          >
            <div class="story-card__step">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="story-card__title">{{ chapter.title }}</h3>
            <p class="story-card__description">{{ chapter.description }}</p>
            <ul class="story-card__list">
              <li v-for="bullet in chapter.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="practice-section section-shell">
      <div class="container">
        <div class="section-heading practice-heading section-heading--wide" data-reveal="left">
          <p class="section-heading__eyebrow">{{ $t('aiWorkflowPage.practice.eyebrow') }}</p>
          <h2 class="section-heading__title">{{ $t('aiWorkflowPage.practice.title') }}</h2>
          <p class="section-heading__subtitle">{{ $t('aiWorkflowPage.practice.subtitle') }}</p>
        </div>

        <div class="practice-grid">
          <article
            v-for="(track, index) in practiceTracks"
            :key="track.title"
            class="practice-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${index * 90}ms` }"
          >
            <div class="practice-card__header">
              <p class="practice-card__eyebrow">{{ track.eyebrow }}</p>
              <h3 class="practice-card__title">{{ track.title }}</h3>
              <p class="practice-card__subtitle">{{ track.subtitle }}</p>
            </div>

            <div class="practice-card__stack">
              <article
                v-for="(phase, index) in track.phases"
                :key="`${track.title}-${phase.name}`"
                class="practice-phase"
              >
                <div class="practice-phase__index">{{ String(index + 1).padStart(2, '0') }}</div>
                <div class="practice-phase__body">
                  <div class="practice-phase__topline">
                    <h4 class="practice-phase__name">{{ phase.name }}</h4>
                    <p class="practice-phase__model">{{ phase.model }}</p>
                  </div>
                  <p class="practice-phase__detail">{{ phase.detail }}</p>
                </div>
              </article>
            </div>

            <div class="practice-card__closing">
              <p class="practice-card__closing-label">{{ $t('aiWorkflowPage.practice.closingLabel') }}</p>
              <p class="practice-card__closing-text">{{ track.closing }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="workflow" class="workflow-section section-shell">
      <div class="container">
        <div class="section-heading section-heading--wide" data-reveal="left">
          <p class="section-heading__eyebrow">{{ $t('aiWorkflowPage.workflow.eyebrow') }}</p>
          <h2 class="section-heading__title">{{ $t('aiWorkflowPage.workflow.title') }}</h2>
          <p class="section-heading__subtitle">{{ $t('aiWorkflowPage.workflow.subtitle') }}</p>
        </div>

        <div class="workflow-coda" data-reveal="up" style="--reveal-delay: 90ms">
          <p class="workflow-coda__label">{{ $t('aiWorkflowPage.workflow.codaLabel') }}</p>
          <p class="workflow-coda__text">{{ $t('aiWorkflowPage.workflow.codaText') }}</p>
        </div>

        <div class="workflow-flow">
          <article
            v-for="(step, index) in workflowSteps"
            :key="step.title"
            class="workflow-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${index * 70}ms` }"
          >
            <div class="workflow-card__index">{{ index + 1 }}</div>
            <h3 class="workflow-card__title">{{ step.title }}</h3>
            <p class="workflow-card__summary">{{ step.summary }}</p>

            <div class="workflow-card__meta">
              <span class="workflow-card__meta-label">{{ $t('aiWorkflowPage.labels.tools') }}</span>
              <p class="workflow-card__meta-value">{{ step.tools }}</p>
            </div>
            <div class="workflow-card__meta">
              <span class="workflow-card__meta-label">{{ $t('aiWorkflowPage.labels.outcome') }}</span>
              <p class="workflow-card__meta-value">{{ step.outcome }}</p>
            </div>
          </article>
        </div>

      </div>
    </section>

    <section class="principles-section section-shell">
      <div class="container">
        <div class="principles-layout">
          <div class="principles-column principles-column--intro" data-reveal="left">
            <div class="section-heading">
              <p class="section-heading__eyebrow">{{ $t('aiWorkflowPage.principles.eyebrow') }}</p>
              <h2 class="section-heading__title">{{ $t('aiWorkflowPage.principles.title') }}</h2>
              <p class="section-heading__subtitle">{{ $t('aiWorkflowPage.principles.subtitle') }}</p>
            </div>

            <div class="principles-feature" data-reveal="up" style="--reveal-delay: 80ms">
              <p class="principles-feature__label">{{ $t('aiWorkflowPage.principles.featureLabel') }}</p>
              <p class="principles-feature__text">{{ $t('aiWorkflowPage.principles.featureText') }}</p>
            </div>
          </div>

          <div class="principles-grid principles-grid--editorial">
          <q-card
            v-for="(principle, index) in principles"
            :key="principle.title"
            flat
            bordered
            class="principle-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${index * 70}ms` }"
          >
            <p class="principle-card__index">{{ String(index + 1).padStart(2, '0') }}</p>
            <h3 class="principle-card__title">{{ principle.title }}</h3>
            <p class="principle-card__description">{{ principle.description }}</p>
          </q-card>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="portfolio-section section-shell">
      <div class="container">
        <div class="section-heading section-heading--wide" data-reveal="left">
          <p class="section-heading__eyebrow">{{ $t('aiWorkflowPage.portfolio.eyebrow') }}</p>
          <h2 class="section-heading__title">{{ $t('aiWorkflowPage.portfolio.title') }}</h2>
          <p class="section-heading__subtitle">{{ $t('aiWorkflowPage.portfolio.subtitle') }}</p>
        </div>

        <section
          v-for="(section, sectionIndex) in portfolioSections"
          :key="section.key"
          class="project-group"
          :class="`project-group--${section.key}`"
          data-reveal="up"
          :style="{ '--reveal-delay': `${sectionIndex * 80}ms` }"
        >
          <div class="project-group__header">
            <h3 class="project-group__title">{{ section.title }}</h3>
            <p class="project-group__subtitle">{{ section.subtitle }}</p>
          </div>

          <div class="row q-col-gutter-xl">
            <div
              v-for="(item, index) in section.items"
              :key="`${section.key}-${index}`"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card class="project-card" flat bordered data-reveal="up" :style="{ '--reveal-delay': `${120 + index * 70}ms` }">
                <div class="project-card__thumbnail">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.title"
                    class="project-card__image"
                    loading="lazy"
                    @error="onImageError($event, section.key)"
                  />
                  <div v-else class="project-card__placeholder">
                    <q-icon :name="getSectionIcon(section.key)" size="48px" />
                  </div>
                  <q-badge
                    class="project-card__status"
                    :color="getStatusColor(item.status)"
                    :label="$t(`aiWorkflowPage.status.${item.status}`)"
                    floating
                  />
                  <div class="project-card__overlay" />
                </div>

                <q-card-section>
                  <div class="project-card__title">{{ item.title }}</div>
                  <p class="project-card__description">{{ item.description }}</p>
                </q-card-section>

                <q-card-section class="project-card__facts q-pt-none">
                  <span class="project-card__fact-label">{{ $t('aiWorkflowPage.labels.aiRole') }}</span>
                  <p class="project-card__fact-copy">{{ item.aiRole }}</p>

                  <span class="project-card__fact-label">{{ $t('aiWorkflowPage.labels.impact') }}</span>
                  <p class="project-card__fact-copy">{{ item.impact }}</p>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="project-card__tags">
                    <q-badge
                      v-for="tag in item.tags"
                      :key="tag"
                      outline
                      color="primary"
                      class="q-mr-xs q-mb-xs"
                      :label="tag"
                    />
                  </div>
                </q-card-section>

                <q-card-actions class="project-card__actions">
                  <template v-if="item.status === 'live' && item.url">
                    <q-btn
                      flat
                      color="primary"
                      icon="open_in_new"
                      :label="$t('aiWorkflowPage.cta.visit')"
                      @click="openProject(item.url)"
                    />
                    <q-btn
                      v-if="item.sourceUrl"
                      flat
                      color="grey-7"
                      icon="code"
                      :label="$t('aiWorkflowPage.cta.source')"
                      @click="openProject(item.sourceUrl)"
                    />
                  </template>
                  <template v-else>
                    <q-btn
                      flat
                      disable
                      color="grey-5"
                      icon="schedule"
                      :label="$t('aiWorkflowPage.cta.comingSoon')"
                    />
                  </template>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </section>
      </div>
    </section>
  </q-page>
</template>

<script>
import { createRevealObserver } from 'src/utils/revealOnScroll'

export default {
  name: 'AiWorkflowPage',

  data() {
    return {
      structuredDataScript: null,
      revealObserver: null,
      revealFallbackTimer: null,
    }
  },

  computed: {
    highlights() {
      return this.normalizeArray(this.$tm('aiWorkflowPage.highlights')).map((item) => ({
        value: this.toText(item.value),
        label: this.toText(item.label),
        caption: this.toText(item.caption)
      }))
    },

    storyChapters() {
      return this.normalizeArray(this.$tm('aiWorkflowPage.story.chapters')).map((chapter) => ({
        title: this.toText(chapter.title),
        description: this.toText(chapter.description),
        bullets: this.normalizeArray(chapter.bullets).map((bullet) => String(bullet))
      }))
    },

    workflowSteps() {
      return this.normalizeArray(this.$tm('aiWorkflowPage.workflow.steps')).map((step) => ({
        title: this.toText(step.title),
        summary: this.toText(step.summary),
        tools: this.toText(step.tools),
        outcome: this.toText(step.outcome)
      }))
    },

    practiceTracks() {
      return this.normalizeArray(this.$tm('aiWorkflowPage.practice.tracks')).map((track) => ({
        eyebrow: this.toText(track.eyebrow),
        title: this.toText(track.title),
        subtitle: this.toText(track.subtitle),
        closing: this.toText(track.closing),
        phases: this.normalizeArray(track.phases).map((phase) => ({
          name: this.toText(phase.name),
          model: this.toText(phase.model),
          detail: this.toText(phase.detail)
        }))
      }))
    },

    principles() {
      return this.normalizeArray(this.$tm('aiWorkflowPage.principles.items')).map((principle) => ({
        title: this.toText(principle.title),
        description: this.toText(principle.description)
      }))
    },

    portfolioSections() {
      return Object.entries(this.normalizeObject(this.$tm('aiWorkflowPage.portfolio.groups')))
        .map(([key, group]) => ({
          key,
          title: this.toText(group.title),
          subtitle: this.toText(group.subtitle),
          items: this.normalizeArray(group.items).map((item) => ({
            title: this.toText(item.title),
            description: this.toText(item.description),
            aiRole: this.toText(item.aiRole),
            impact: this.toText(item.impact),
            tags: this.normalizeArray(item.tags).map((tag) => String(tag)),
            image: this.toText(item.image),
            url: this.toText(item.url),
            status: this.toText(item.status) || 'wip',
            sourceUrl: this.toText(item.sourceUrl)
          }))
        }))
    },

    portfolioItems() {
      return this.portfolioSections.flatMap((section) => section.items)
    },

    pageLocaleClass() {
      return this.getCurrentLocale() === 'en-us'
        ? 'ai-workflow-page--en'
        : 'ai-workflow-page--zh'
    },

    pageThemeClass() {
      return this.$q?.dark?.isActive
        ? 'ai-workflow-page--dark'
        : 'ai-workflow-page--light'
    },
  },

  mounted() {
    this.injectStructuredData()
    this.initRevealObserver()
  },

  updated() {
    this.initRevealObserver()
  },

  beforeUnmount() {
    if (this.revealObserver) {
      this.revealObserver.disconnect()
      this.revealObserver = null
    }
    if (this.revealFallbackTimer) {
      window.clearTimeout(this.revealFallbackTimer)
      this.revealFallbackTimer = null
    }
    this.removeStructuredData()
  },

  methods: {
    normalizeArray(value) {
      return Array.isArray(value) ? value : []
    },

    normalizeObject(value) {
      return value && typeof value === 'object' ? value : {}
    },

    toText(value) {
      return typeof value === 'string' ? value : ''
    },

    getCurrentLocale() {
      const locale = this.$i18n?.locale
      if (typeof locale === 'string') {
        return locale
      }
      if (locale && typeof locale.value === 'string') {
        return locale.value
      }
      return 'zh-tw'
    },

    initRevealObserver() {
      this.$nextTick(() => {
        if (this.revealObserver) {
          this.revealObserver.disconnect()
        }

        if (this.revealFallbackTimer) {
          window.clearTimeout(this.revealFallbackTimer)
        }

        this.revealObserver = createRevealObserver()
        const targets = this.$el?.querySelectorAll('[data-reveal]') || []

        Array.from(targets).forEach((target) => {
          target.classList.add('reveal-ready')
        })

        this.revealObserver.observe(targets)

        // Fallback: never leave content hidden if intersection timing is missed.
        this.revealFallbackTimer = window.setTimeout(() => {
          Array.from(targets).forEach((target) => {
            target.classList.add('is-visible')
          })
        }, 700)
      })
    },

    injectStructuredData() {
      this.removeStructuredData()

      const workflowSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: this.$t('aiWorkflowPage.seo.collectionName'),
        description: this.$t('aiWorkflowPage.seo.description'),
        url: 'https://chenpoyu.github.io/#/ai-workflow',
        image: 'https://chenpoyu.github.io/images/portfolio/og-portfolio.png',
        author: {
          '@type': 'Person',
          name: 'Poyu Chen',
          alternateName: '陳柏妤',
          url: 'https://chenpoyu.github.io/'
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: this.portfolioItems.slice(0, 6).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            url: item.url || 'https://chenpoyu.github.io/#/ai-workflow'
          }))
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://chenpoyu.github.io/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: this.$t('aiWorkflowPage.seo.breadcrumbName'),
              item: 'https://chenpoyu.github.io/#/ai-workflow'
            }
          ]
        },
        inLanguage: this.getCurrentLocale() === 'zh-tw' ? 'zh-TW' : 'en-US'
      }

      const structuredDataScript = document.createElement('script')
      structuredDataScript.type = 'application/ld+json'
      structuredDataScript.textContent = JSON.stringify(workflowSchema)
      structuredDataScript.id = 'ai-workflow-structured-data'
      document.head.appendChild(structuredDataScript)
      this.structuredDataScript = structuredDataScript
    },

    removeStructuredData() {
      if (this.structuredDataScript && this.structuredDataScript.parentNode) {
        this.structuredDataScript.parentNode.removeChild(this.structuredDataScript)
      }
      this.structuredDataScript = null
    },

    getSectionIcon(key) {
      const iconMap = {
        educationalWebsites: 'school',
        games: 'sports_esports',
        customWebsites: 'language'
      }
      return iconMap[key] || 'auto_awesome'
    },

    getStatusColor(status) {
      const colorMap = {
        live: 'positive',
        coming: 'warning',
        wip: 'info'
      }
      return colorMap[status] || 'grey'
    },

    openProject(url) {
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    },

    onImageError(event, sectionKey) {
      const imageElement = event.target
      const parent = imageElement.parentElement
      imageElement.style.display = 'none'

      const placeholder = document.createElement('div')
      placeholder.className = 'project-card__placeholder'
      placeholder.innerHTML = `<span class="q-icon material-icons" style="font-size:48px">${this.getSectionIcon(sectionKey)}</span>`
      if (parent) {
        parent.insertBefore(placeholder, imageElement)
      }
    },

    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ai-workflow-page {
  color: var(--text-strong);
  --ai-page-bg:
    radial-gradient(circle at top left, rgba(163, 138, 99, 0.08), transparent 24%),
    radial-gradient(circle at top right, rgba(54, 70, 90, 0.08), transparent 20%),
    linear-gradient(180deg, #edf1f4 0%, #f8fafc 24%, #e7ecf1 100%);
  --ai-section-accent: #a38a63;
  --ai-title-color: #10243d;
  --ai-copy-color: rgba(15, 23, 42, 0.72);
  --ai-copy-strong: rgba(15, 23, 42, 0.84);
  --ai-card-bg: rgba(255, 255, 255, 0.88);
  --ai-card-border: rgba(15, 23, 42, 0.08);
  --ai-card-shadow: 0 20px 48px rgba(15, 23, 42, 0.06);
  --ai-card-shadow-strong: 0 28px 55px rgba(15, 23, 42, 0.1);
  --ai-quote-bg: linear-gradient(180deg, rgba(16, 28, 43, 0.98) 0%, rgba(33, 49, 66, 0.94) 100%);
  --ai-quote-text: #f8fafc;
  --ai-workflow-bg:
    radial-gradient(circle at top right, rgba(163, 138, 99, 0.1), transparent 24%),
    linear-gradient(180deg, rgba(226, 232, 240, 0.28) 0%, rgba(240, 244, 247, 0.92) 100%);
  --ai-line: linear-gradient(90deg, rgba(16, 36, 61, 0.12) 0%, rgba(163, 138, 99, 0.42) 50%, rgba(16, 36, 61, 0.12) 100%);
  --ai-index-bg: rgba(16, 36, 61, 0.08);
  --ai-thumbnail-bg: linear-gradient(135deg, #e2e8f0 0%, #d7dfe8 100%);
  background: var(--ai-page-bg);

  .container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
  }
}

:global(body.body--dark) .ai-workflow-page,
.ai-workflow-page.ai-workflow-page--dark {
  color: var(--text-strong);
  --ai-page-bg:
    radial-gradient(circle at top left, rgba(176, 153, 115, 0.1), transparent 26%),
    radial-gradient(circle at top right, rgba(104, 129, 155, 0.08), transparent 22%),
    linear-gradient(180deg, #07111d 0%, #0b1624 28%, #08111c 100%);
  --ai-section-accent: rgba(176, 153, 115, 0.9);
  --ai-title-color: #f5efe6;
  --ai-copy-color: rgba(243, 237, 228, 0.74);
  --ai-copy-strong: rgba(243, 237, 228, 0.86);
  --ai-card-bg: rgba(10, 20, 31, 0.84);
  --ai-card-border: rgba(131, 171, 211, 0.16);
  --ai-card-shadow: 0 20px 48px rgba(0, 0, 0, 0.24);
  --ai-card-shadow-strong: 0 28px 55px rgba(0, 0, 0, 0.34);
  --ai-quote-bg: linear-gradient(180deg, rgba(10, 24, 39, 0.98) 0%, rgba(18, 32, 48, 0.94) 100%);
  --ai-quote-text: #f8fafc;
  --ai-workflow-bg:
    radial-gradient(circle at top right, rgba(176, 153, 115, 0.1), transparent 24%),
    linear-gradient(180deg, rgba(10, 20, 31, 0.78) 0%, rgba(7, 17, 29, 0.96) 100%);
  --ai-line: linear-gradient(90deg, rgba(131, 171, 211, 0.08) 0%, rgba(176, 153, 115, 0.48) 50%, rgba(131, 171, 211, 0.22) 100%);
  --ai-index-bg: rgba(131, 171, 211, 0.12);
  --ai-thumbnail-bg: linear-gradient(135deg, #10243d 0%, #1f3854 100%);

  .practice-card {
    background: linear-gradient(180deg, rgba(15, 26, 39, 0.94) 0%, rgba(10, 20, 31, 0.9) 100%);
    border-color: rgba(131, 171, 211, 0.16);
    box-shadow: 0 22px 42px rgba(0, 0, 0, 0.24);
  }

  .practice-card__header {
    border-bottom-color: rgba(131, 171, 211, 0.12);
  }

  .practice-phase__body {
    background: rgba(19, 33, 49, 0.88);
    border-color: rgba(131, 171, 211, 0.14);
  }

  .workflow-card,
  .workflow-coda,
  .story-card,
  .principle-card,
  .project-card {
    background: linear-gradient(180deg, rgba(13, 24, 37, 0.94) 0%, rgba(10, 20, 31, 0.9) 100%);
    border-color: rgba(131, 171, 211, 0.16);
  }

  .project-card__actions {
    border-top: 1px solid rgba(131, 171, 211, 0.1);
  }

  .project-card__actions :deep(.q-btn) {
    color: rgba(243, 237, 228, 0.88);
  }

  .project-card__actions :deep(.q-btn.text-primary) {
    color: rgba(212, 179, 115, 0.96) !important;
  }

  .project-card__actions :deep(.q-btn--disabled) {
    opacity: 0.7 !important;
    color: rgba(243, 237, 228, 0.54) !important;
  }

  .project-card__tags :deep(.q-badge) {
    color: rgba(243, 237, 228, 0.78);
    border-color: rgba(131, 171, 211, 0.16);
  }
}

.section-shell {
  padding: 4.5rem 0;
}

.hero-section {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  color: #fff;
  background:
    linear-gradient(135deg, #07111b 0%, #10243d 48%, #1c2d3d 100%),
    repeating-linear-gradient(135deg, transparent, transparent 28px, rgba(255, 255, 255, 0.03) 28px, rgba(255, 255, 255, 0.03) 56px);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(18px);
    opacity: 0.45;
  }

  &::before {
    width: 280px;
    height: 280px;
    top: -90px;
    right: 10%;
    background: rgba(163, 138, 99, 0.18);
  }

  &::after {
    width: 240px;
    height: 240px;
    bottom: -120px;
    left: 8%;
    background: rgba(104, 129, 155, 0.16);
  }

  &__eyebrow {
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(191, 219, 254, 0.9);
  }

  &__title {
    max-width: 720px;
    margin: 0;
    font-size: clamp(2.9rem, 5vw, 5rem);
    line-height: 0.98;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  &__subtitle {
    max-width: 680px;
    margin: 1.2rem 0 0;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.88);
  }

  &__description {
    max-width: 620px;
    margin: 1rem 0 0;
    font-size: 1rem;
    line-height: 1.95;
    color: rgba(226, 232, 240, 0.92);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
}

.hero-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
  gap: 2.5rem;
  align-items: stretch;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding-top: 0.5rem;
}

.hero-aside {
  display: grid;
  gap: 1rem;
}

.hero-aside__panel {
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.14);
}

.hero-aside__label {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(191, 219, 254, 0.88);
}

.hero-aside__title {
  margin: 0.85rem 0 0;
  font-size: 1.35rem;
  line-height: 1.4;
  font-weight: 700;
  color: #fff;
}

.hero-aside__body {
  margin: 0.85rem 0 0;
  font-size: 0.96rem;
  line-height: 1.85;
  color: rgba(226, 232, 240, 0.88);
}

.hero-signal-list {
  display: grid;
  gap: 0.9rem;
}

.hero-signal {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1.15rem 1.25rem;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(7, 17, 27, 0.32);
  backdrop-filter: blur(10px);

  &__value {
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 700;
    color: #9ae6ff;
  }

  &__label {
    font-size: 0.98rem;
    font-weight: 700;
    color: #fff;
  }

  &__caption {
    margin: 0.35rem 0 0;
    font-size: 0.92rem;
    line-height: 1.75;
    color: rgba(226, 232, 240, 0.82);
  }
}

.hero-manifesto {
  position: relative;
  z-index: 1;
  margin-top: 1.8rem;
  padding: 1.35rem 1.45rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(7, 17, 27, 0.26);
  backdrop-filter: blur(12px);

  &__label {
    margin: 0;
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(191, 219, 254, 0.82);
  }

  &__text {
    max-width: 860px;
    margin: 0.8rem 0 0;
    font-size: clamp(1.15rem, 2vw, 1.5rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.92);
  }
}

.section-heading {
  max-width: 760px;
  margin-bottom: 0;

  &--wide {
    max-width: 1080px;
  }

  &__eyebrow {
    margin: 0 0 0.75rem;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__title {
    margin: 0;
    font-size: clamp(2rem, 3.2vw, 3rem);
    line-height: 1.15;
    font-weight: 800;
    color: var(--ai-title-color);
  }

  &__subtitle {
    margin: 1rem 0 0;
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ai-copy-color);
  }
}

.section-summary-card {
  padding: 1.35rem 1.45rem;
  border-radius: 28px;
  border: 1px solid var(--ai-card-border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.92) 100%);
  box-shadow: var(--ai-card-shadow);

  &__label {
    margin: 0;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__text {
    margin: 0.7rem 0 0;
    line-height: 1.8;
    color: var(--ai-copy-color);
  }
}

.story-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  gap: 2rem;
  align-items: start;
}

.story-intro {
  position: sticky;
  top: 92px;
  margin-bottom: 0;
}

.story-intro__quote {
  position: relative;
  margin-top: 1.5rem;
  padding: 1.4rem 1.5rem 1.3rem 2.9rem;
  border-radius: 24px;
  background: var(--ai-quote-bg);
  color: var(--ai-quote-text);
  box-shadow: var(--ai-card-shadow);

  p {
    margin: 0;
    line-height: 1.9;
  }
}

.story-intro__quote-mark {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.3);
}

.story-grid,
.principles-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.practice-section {
  position: relative;
}

.practice-heading {
  max-width: 1040px;
  margin-bottom: 2rem;
}

.practice-heading .section-heading__title {
  max-width: 1040px;
}

.practice-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.practice-card {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 1.7rem;
  border-radius: 30px;
  border: 1px solid var(--ai-card-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.86) 100%),
    var(--ai-card-bg);
  box-shadow: var(--ai-card-shadow);
}

.practice-card__header {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--ai-card-border);
}

.practice-card__eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ai-section-accent);
}

.practice-card__title {
  margin: 0.7rem 0 0;
  font-size: 1.45rem;
  line-height: 1.35;
  font-weight: 800;
  color: var(--ai-title-color);
}

.practice-card__subtitle {
  margin: 0.75rem 0 0;
  line-height: 1.8;
  color: var(--ai-copy-color);
}

.practice-card__stack {
  display: grid;
  gap: 1rem;
}

.practice-phase {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.practice-phase__index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, #10243d 0%, #0f766e 100%);
  color: #fff;
  font-size: 0.98rem;
  font-weight: 800;
}

.practice-phase__body {
  padding: 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.practice-phase__topline {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.6rem;
}

.practice-phase__name {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: var(--ai-title-color);
}

.practice-phase__model {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--ai-section-accent);
}

.practice-phase__detail {
  margin: 0.6rem 0 0;
  line-height: 1.8;
  color: var(--ai-copy-color);
}

.practice-card__closing {
  margin-top: auto;
  padding: 1.2rem 1.25rem;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(16, 36, 61, 0.96) 0%, rgba(27, 59, 94, 0.92) 100%);
  color: #fff;
}

.practice-card__closing-label {
  margin: 0;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(191, 219, 254, 0.84);
}

.practice-card__closing-text {
  margin: 0.65rem 0 0;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.9);
}

.story-card,
.principle-card {
  height: 100%;
  padding: 1.5rem;
  border: 1px solid var(--ai-card-border);
  border-radius: 24px;
  background: var(--ai-card-bg);
  box-shadow: var(--ai-card-shadow);
}

.story-card {
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 6px;
    background: linear-gradient(180deg, #10243d 0%, #0f766e 100%);
  }

  &__step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 18px;
    background: linear-gradient(135deg, #10243d 0%, #0f766e 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
  }

  &__title {
    margin: 1rem 0 0;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--ai-title-color);
  }

  &__description {
    margin: 0.75rem 0 0;
    line-height: 1.8;
    color: var(--ai-copy-color);
  }

  &__list {
    margin: 1rem 0 0;
    padding-left: 1.2rem;
    color: var(--ai-copy-strong);

    li + li {
      margin-top: 0.55rem;
    }
  }
}

.workflow-section {
  position: relative;
  overflow: hidden;
  background: var(--ai-workflow-bg);
}

.workflow-flow {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1.4rem;
}

.workflow-card {
  position: relative;
  z-index: 1;
  grid-column: span 4;
  padding: 1.5rem;
  border-radius: 28px;
  background: var(--ai-card-bg);
  border: 1px solid var(--ai-card-border);
  box-shadow: var(--ai-card-shadow);

  &__index {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ai-index-bg);
    color: var(--ai-title-color);
    font-weight: 800;
  }

  &__title {
    margin: 1rem 0 0;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--ai-title-color);
  }

  &__summary {
    margin: 0.75rem 0 0;
    font-size: 0.94rem;
    line-height: 1.75;
    color: var(--ai-copy-color);
  }

  &__meta {
    margin-top: 1rem;
  }

  &__meta-label {
    display: block;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__meta-value {
    margin: 0.35rem 0 0;
    font-size: 0.92rem;
    line-height: 1.7;
    color: var(--ai-title-color);
  }
}

.workflow-card:nth-child(4) {
  grid-column: 1 / span 6;
}

.workflow-card:nth-child(5) {
  grid-column: 7 / span 6;
}

.workflow-coda {
  max-width: 100%;
  margin-top: 1.5rem;
  padding: 1.4rem 1.6rem;
  border-radius: 24px;
  border: 1px solid var(--ai-card-border);
  background: var(--ai-card-bg);
  backdrop-filter: blur(10px);

  &__label {
    margin: 0;
    font-size: 0.76rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__text {
    margin: 0.7rem 0 0;
    line-height: 1.85;
    color: var(--ai-copy-color);
  }
}

[data-reveal] {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

[data-reveal].reveal-ready {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

[data-reveal='left'].reveal-ready {
  transform: translate3d(-28px, 0, 0);
}

[data-reveal='right'].reveal-ready {
  transform: translate3d(28px, 0, 0);
}

[data-reveal='up'].reveal-ready {
  transform: translate3d(0, 28px, 0);
}

[data-reveal].reveal-ready.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.principles-feature {
  margin-top: 1.5rem;
  padding: 1.5rem 1.7rem;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(16, 36, 61, 0.98) 0%, rgba(29, 78, 216, 0.94) 100%);
  color: #fff;
  box-shadow: 0 24px 48px rgba(29, 78, 216, 0.14);

  &__label {
    margin: 0;
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(191, 219, 254, 0.86);
  }

  &__text {
    max-width: 820px;
    margin: 0.8rem 0 0;
    font-size: 1.1rem;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.92);
  }
}

.principle-card {
  position: relative;

  &__index {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__title {
    margin: 0.7rem 0 0;
    font-size: 1.08rem;
    font-weight: 800;
    color: var(--ai-title-color);
  }

  &__description {
    margin: 0.85rem 0 0;
    line-height: 1.8;
    color: var(--ai-copy-color);
  }
}

.principles-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
  gap: 1.6rem;
  align-items: start;
}

.principles-column--intro {
  position: sticky;
  top: 92px;
}

.principles-grid--editorial {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-group + .project-group {
  margin-top: 3.5rem;
}

.project-group {
  &__header {
    max-width: 860px;
    margin-bottom: 1.8rem;
    padding-left: 1rem;
    border-left: 4px solid var(--ai-section-accent);
  }

  &__title {
    margin: 0;
    font-size: 1.45rem;
    font-weight: 800;
    color: var(--ai-title-color);
  }

  &__subtitle {
    margin: 0.7rem 0 0;
    line-height: 1.8;
    color: var(--ai-copy-color);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  border-color: var(--ai-card-border);
  background: var(--ai-card-bg);
  box-shadow: var(--ai-card-shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--ai-card-shadow-strong);
  }

  &__thumbnail {
    position: relative;
    height: 230px;
    overflow: hidden;
    background: var(--ai-thumbnail-bg);
  }

  &__overlay {
    position: absolute;
    inset: auto 0 0;
    height: 55%;
    background: linear-gradient(180deg, transparent 0%, rgba(7, 17, 27, 0.38) 100%);
    pointer-events: none;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover &__image {
    transform: scale(1.04);
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.74);
    background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
  }

  &__status {
    top: 14px;
    right: 14px;
    padding: 4px 10px;
    font-size: 0.75rem;
  }

  &__title {
    font-size: 1.16rem;
    font-weight: 800;
    color: var(--ai-title-color);
    line-height: 1.45;
  }

  &__description {
    margin: 0.7rem 0 0;
    line-height: 1.75;
    color: var(--ai-copy-color);
  }

  &__facts {
    margin-top: auto;
    padding-top: 0.25rem;
  }

  &__fact-label {
    display: block;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ai-section-accent);
  }

  &__fact-copy {
    margin: 0.35rem 0 0.95rem;
    line-height: 1.75;
    color: var(--ai-copy-color);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
  }

  &__actions {
    margin-top: auto;
    padding: 0.5rem 1rem 1rem;
  }
}

.ai-workflow-page--en {
  .container {
    width: min(1240px, calc(100% - 40px));
  }

  .hero-section__title {
    max-width: 860px;
    font-size: clamp(2.5rem, 4.3vw, 4.35rem);
    line-height: 1.02;
  }

  .hero-section__subtitle,
  .hero-section__description,
  .hero-manifesto__text,
  .section-heading__subtitle,
  .practice-card__subtitle,
  .workflow-card__summary,
  .principle-card__description,
  .project-card__description,
  .project-group__subtitle {
    line-height: 1.72;
  }

  .section-heading__title {
    max-width: 980px;
    font-size: clamp(1.9rem, 2.7vw, 2.7rem);
    line-height: 1.18;
  }

  .story-card__title,
  .practice-card__title,
  .workflow-card__title,
  .principle-card__title,
  .project-group__title,
  .project-card__title {
    line-height: 1.35;
  }

  .practice-heading,
  .section-heading--wide {
    max-width: 1120px;
  }

  .practice-card__title {
    font-size: 1.28rem;
  }

  .practice-phase__topline {
    align-items: flex-start;
  }

  .practice-phase__model {
    max-width: 100%;
    line-height: 1.5;
  }

  .workflow-card__title {
    font-size: 1rem;
  }

  .workflow-card__meta-value,
  .project-card__fact-copy {
    line-height: 1.64;
  }

  .principles-grid--editorial {
    grid-template-columns: 1fr;
  }

  .project-group__header {
    max-width: 980px;
  }
}

.project-group--educationalWebsites .project-card__placeholder {
  background: linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%);
}

.project-group--games .project-card__placeholder {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
}

.project-group--customWebsites .project-card__placeholder {
  background: linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%);
}

@media (max-width: 1279px) {
  .hero-shell {
    grid-template-columns: 1fr;
  }

  .workflow-flow {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .workflow-card,
  .workflow-card:nth-child(4),
  .workflow-card:nth-child(5) {
    grid-column: span 3;
  }

  .ai-workflow-page--en {
    .principles-grid--editorial {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}

@media (max-width: 1023px) {
  .story-layout {
    grid-template-columns: 1fr;
  }

  .principles-layout {
    grid-template-columns: 1fr;
  }

  .practice-grid,
  .highlight-grid,
  .story-grid,
  .principles-grid,
  .workflow-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .story-intro {
    position: static;
  }

  .principles-column--intro {
    position: static;
  }

  .workflow-card,
  .workflow-card:nth-child(4),
  .workflow-card:nth-child(5) {
    grid-column: span 3;
  }

  .ai-workflow-page--en {
    .container {
      width: min(100% - 28px, 1180px);
    }

    .principles-grid--editorial {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 767px) {
  .section-shell {
    padding: 3.25rem 0;
  }

  .hero-section {
    padding: 5rem 0 3.5rem;
  }

  .hero-section__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .practice-grid,
  .story-grid,
  .principles-grid,
  .workflow-flow {
    grid-template-columns: 1fr;
  }

  .workflow-card,
  .workflow-card:nth-child(4),
  .workflow-card:nth-child(5) {
    grid-column: auto;
  }

  .practice-phase {
    grid-template-columns: 1fr;
  }

  .practice-phase__index {
    width: 52px;
    height: 52px;
  }

  .hero-signal {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }

  .hero-manifesto__text,
  .principles-feature__text {
    font-size: 1rem;
  }

  .ai-workflow-page .container {
    width: min(100% - 24px, 1180px);
  }

  .project-card__thumbnail {
    height: 190px;
  }
}
</style>
