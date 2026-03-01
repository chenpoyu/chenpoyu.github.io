<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page class="portfolio-page">
    <!-- Hero Section -->
    <section class="portfolio-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('portfolioPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('portfolioPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Portfolio Sections -->
    <section
      v-for="(section, sectionKey) in sections"
      :key="sectionKey"
      class="portfolio-section"
      :class="`section-${sectionKey}`"
    >
      <div class="container">
        <h2 class="section-title">{{ section.title }}</h2>
        <p class="section-subtitle">{{ section.subtitle }}</p>

        <div class="row q-col-gutter-lg">
          <div
            v-for="(item, idx) in section.items"
            :key="idx"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card class="portfolio-card" flat bordered>
              <!-- Thumbnail -->
              <div class="portfolio-card__thumbnail">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title"
                  class="portfolio-card__image"
                  loading="lazy"
                  @error="onImageError($event, sectionKey)"
                />
                <div v-else class="portfolio-card__placeholder">
                  <q-icon :name="getSectionIcon(sectionKey)" size="48px" />
                </div>
                <!-- Status Badge -->
                <q-badge
                  class="portfolio-card__status"
                  :color="getStatusColor(item.status)"
                  :label="$t(`portfolioPage.status.${item.status}`)"
                  floating
                />
              </div>

              <q-card-section>
                <div class="portfolio-card__title">{{ item.title }}</div>
                <p class="portfolio-card__description">{{ item.description }}</p>
              </q-card-section>

              <!-- Tags -->
              <q-card-section class="q-pt-none">
                <div class="portfolio-card__tags">
                  <q-badge
                    v-for="(tag, tagIdx) in item.tags"
                    :key="tagIdx"
                    outline
                    color="primary"
                    class="q-mr-xs q-mb-xs"
                    :label="tag"
                  />
                </div>
              </q-card-section>

              <!-- Actions -->
              <q-card-actions class="portfolio-card__actions">
                <template v-if="item.status === 'live'">
                  <q-btn
                    flat
                    color="primary"
                    icon="open_in_new"
                    :label="$t('portfolioPage.cta.visit')"
                    @click="openProject(item.url)"
                  />
                  <q-btn
                    v-if="item.sourceUrl"
                    flat
                    color="grey-7"
                    icon="code"
                    :label="$t('portfolioPage.cta.source')"
                    @click="openProject(item.sourceUrl)"
                  />
                </template>
                <template v-else>
                  <q-btn
                    flat
                    disable
                    color="grey-5"
                    icon="schedule"
                    :label="$t('portfolioPage.cta.comingSoon')"
                  />
                </template>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
// @ts-nocheck
import { defineComponent, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PortfolioPage',

  setup() {
    const { tm, locale } = useI18n()

    const sections = computed(() => {
      const s = tm('portfolioPage.sections')
      return s
    })

    // Portfolio Structured Data (JSON-LD)
    let structuredDataScript = null
    onMounted(() => {
      const portfolioSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: locale.value === 'zh-tw'
          ? '作品集 - Poyu Chen 陳柏妤'
          : 'Portfolio - Poyu Chen',
        description: locale.value === 'zh-tw'
          ? '精選互動小遊戲、教育益智網站與客製化品牌官網，涵蓋 React、Vue 3、Canvas、Web Audio 等多元技術。'
          : 'A curated collection of interactive games, educational websites, and custom brand websites showcasing diverse technical skills.',
        url: 'https://chenpoyu.github.io/#/portfolio',
        image: 'https://chenpoyu.github.io/images/portfolio/og-portfolio.png',
        author: {
          '@type': 'Person',
          name: 'Poyu Chen',
          alternateName: '陳柏妤',
          url: 'https://chenpoyu.github.io/'
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: locale.value === 'zh-tw' ? '2-6歲兒童遊樂園' : 'Kids Playground (Age 2-6)',
              url: 'https://chenpoyu.github.io/games-kids-playground/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: locale.value === 'zh-tw' ? '丙午年媽祖開壇抽獎' : 'Mazu Festival Lucky Draw',
              url: 'https://chenpoyu.github.io/games-lottery/'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: locale.value === 'zh-tw' ? '坦克大戰' : 'Tank Battle',
              url: 'https://chenpoyu.github.io/games-tank-battle/'
            }
          ]
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
              name: locale.value === 'zh-tw' ? '作品集' : 'Portfolio',
              item: 'https://chenpoyu.github.io/#/portfolio'
            }
          ]
        }
      }

      structuredDataScript = document.createElement('script')
      structuredDataScript.type = 'application/ld+json'
      structuredDataScript.textContent = JSON.stringify(portfolioSchema)
      structuredDataScript.id = 'portfolio-structured-data'
      document.head.appendChild(structuredDataScript)
    })

    onUnmounted(() => {
      if (structuredDataScript && structuredDataScript.parentNode) {
        structuredDataScript.parentNode.removeChild(structuredDataScript)
      }
    })

    const getSectionIcon = (key) => {
      const iconMap = {
        educationalWebsites: 'school',
        games: 'sports_esports',
        customWebsites: 'language'
      }
      return iconMap[key] || 'folder'
    }

    const getStatusColor = (status) => {
      const colorMap = {
        live: 'positive',
        coming: 'warning',
        wip: 'info'
      }
      return colorMap[status] || 'grey'
    }

    const openProject = (url) => {
      if (url && url !== '') {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }

    const onImageError = (event, sectionKey) => {
      // On image load failure, replace with placeholder
      const el = event.target
      const parent = el.parentElement
      el.style.display = 'none'
      const placeholder = document.createElement('div')
      placeholder.className = 'portfolio-card__placeholder'
      const iconMap = {
        educationalWebsites: 'school',
        games: 'sports_esports',
        customWebsites: 'language'
      }
      placeholder.innerHTML = `<span class="q-icon material-icons" style="font-size:48px">${iconMap[sectionKey] || 'folder'}</span>`
      parent.insertBefore(placeholder, el)
    }

    return {
      sections,
      getSectionIcon,
      getStatusColor,
      openProject,
      onImageError
    }
  }
})
</script>

<style lang="scss" scoped>
.portfolio-page {

  .portfolio-hero {
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
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .page-subtitle {
      font-size: 1.2rem;
      opacity: 0.85;
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
  }

  .portfolio-section {
    padding: 4rem 0;

    &:nth-child(odd) {
      background: rgba(0, 0, 0, 0.02);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--font-color-primary);
    }

    .section-subtitle {
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 2rem;
      color: var(--font-color-primary);
    }
  }

  .portfolio-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 12px;
    overflow: hidden;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    &__thumbnail {
      position: relative;
      height: 180px;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover &__image {
      transform: scale(1.05);
    }

    &__placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: rgba(255, 255, 255, 0.6);
    }

    .section-educationalWebsites &__placeholder {
      background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
    }

    .section-games &__placeholder {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .section-customWebsites &__placeholder {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }

    &__status {
      top: 12px;
      right: 12px;
      font-size: 0.75rem;
      padding: 4px 10px;
    }

    &__title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--font-color-primary);
    }

    &__description {
      font-size: 0.9rem;
      opacity: 0.75;
      line-height: 1.6;
      color: var(--font-color-primary);
      flex-grow: 1;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    &__actions {
      margin-top: auto;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
  }
}

// Section-specific gradient overrides
.section-educationalWebsites .portfolio-card__placeholder {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
}

.section-games .portfolio-card__placeholder {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.section-customWebsites .portfolio-card__placeholder {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

// Responsive
@media (max-width: 599px) {
  .portfolio-page {
    .portfolio-hero {
      padding: 4rem 1.5rem 3rem;

      .page-title {
        font-size: 2rem;
      }

      .page-subtitle {
        font-size: 1rem;
      }
    }

    .portfolio-section {
      padding: 2.5rem 0;

      .section-title {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
