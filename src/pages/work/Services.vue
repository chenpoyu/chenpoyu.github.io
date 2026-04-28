<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page ref="servicesPageRef" class="services-page" :class="{ 'services-page--dark': $q.dark.isActive }">
    <section class="services-hero">
      <div class="container hero-shell">
        <div class="hero-copy" data-reveal="left">
          <p class="hero-eyebrow">{{ $t('servicesPage.hero.eyebrow') }}</p>

          <div class="hero-badge-row" aria-label="Service sections">
            <button
              v-for="(service, index) in services"
              :key="service.title"
              type="button"
              class="hero-badge"
              :class="{ 'is-active': activeServiceIndex === index }"
              :aria-current="activeServiceIndex === index ? 'true' : 'false'"
              @click="jumpToService(index)"
            >
              {{ service.title }}
            </button>
          </div>

          <h1 class="page-title">{{ $t('servicesPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('servicesPage.hero.subtitle') }}</p>
          <p class="hero-note">{{ $t('servicesPage.hero.note') }}</p>

          <div class="hero-actions">
            <q-btn
              unelevated
              color="accent"
              no-caps
              :label="$t('servicesPage.process.title')"
              @click="scrollToSection('process')"
            />
            <q-btn
              outline
              color="white"
              no-caps
              :label="$t('servicesPage.cta.email_button')"
              @click="scrollToSection('contact')"
            />
          </div>
        </div>

        <div class="hero-aside">
          <article class="hero-editorial" data-reveal="right" style="--reveal-delay: 80ms">
            <div class="hero-editorial__head">
              <span class="hero-editorial__eyebrow">{{ $t('servicesPage.positioning.title') }}</span>
              <h2 class="hero-editorial__title">{{ $t('servicesPage.positioning.title') }}</h2>
              <p class="hero-editorial__subtitle">{{ $t('servicesPage.positioning.subtitle') }}</p>
            </div>

            <div class="hero-editorial__grid">
              <article
                v-for="(item, index) in positioningItems"
                :key="item.title"
                class="hero-editorial__item"
              >
                <span class="hero-editorial__item-index">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </article>
            </div>
          </article>
        </div>
      </div>

    </section>

    <section class="services-detail">
      <div class="container services-stack">
        <article
          v-for="(service, index) in services"
          :id="`service-${index}`"
          :key="service.title"
          class="service-panel"
        >
          <q-card
            flat
            bordered
            class="service-panel__card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${110 + index * 90}ms` }"
          >
            <q-card-section>
              <div class="service-panel__heading">
                <div class="service-panel__heading-main">
                  <span class="service-panel__kicker">{{ String(index + 1).padStart(2, '0') }}</span>
                  <q-avatar size="68px" :color="service.color" text-color="white" class="service-panel__avatar">
                    <q-icon :name="service.icon" size="34px" />
                  </q-avatar>
                </div>

                <div class="service-panel__heading-copy">
                  <h3 class="service-panel__title">{{ service.title }}</h3>
                  <p class="service-panel__description">{{ service.description }}</p>
                </div>
              </div>

              <div class="service-panel__content-grid">
                <div class="service-offerings">
                  <div class="section-block__head">
                    <h4 class="section-block__title">{{ service.offeringsTitle }}</h4>
                  </div>

                  <div class="offerings-list">
                    <article
                      v-for="(offering, idx) in getOfferings(service.offerings)"
                      :key="offering.name || idx"
                      class="offering-item"
                      data-reveal="up"
                      :style="{ '--reveal-delay': `${180 + index * 70 + idx * 40}ms` }"
                    >
                      <div class="offering-item__head">
                        <span class="offering-item__icon-shell">
                          <q-icon :name="offering.icon" color="primary" size="18px" />
                        </span>
                        <span class="offering-item__name">{{ offering.name }}</span>
                      </div>
                      <p class="offering-item__description">{{ offering.description }}</p>
                    </article>
                  </div>
                </div>

                <div class="service-side-stack">
                  <div class="service-benefits section-block">
                    <div class="section-block__head">
                      <h4 class="section-block__title">{{ service.benefitsTitle }}</h4>
                    </div>

                    <ul class="benefits-list">
                      <li v-for="benefit in service.benefits" :key="benefit">
                        <span class="benefits-list__icon">
                          <q-icon name="check_circle" color="positive" size="18px" />
                        </span>
                        <span>{{ benefit }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="service-cases section-block" v-if="service.cases && service.cases.length">
                    <div class="section-block__head">
                      <h4 class="section-block__title">{{ service.casesTitle }}</h4>
                    </div>

                    <div class="cases-grid">
                      <q-chip
                        v-for="caseItem in service.cases"
                        :key="caseItem"
                        :color="service.color"
                        text-color="white"
                        icon="north_east"
                        class="cases-chip"
                      >
                        {{ caseItem }}
                      </q-chip>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </article>
      </div>
    </section>

    <section id="process" class="process-section">
      <div class="container process-shell">
        <div class="process-intro" data-reveal="left">
          <p class="process-intro__eyebrow">{{ $t('servicesPage.process.title') }}</p>
          <h2 class="section-title">{{ $t('servicesPage.process.title') }}</h2>
        </div>

        <div class="process-grid">
          <article
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="process-card"
            data-reveal="up"
            :style="{ '--reveal-delay': `${100 + index * 70}ms` }"
          >
            <div class="process-card__number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="process-card__body">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="cta-section">
      <div class="container cta-shell">
        <div class="cta-copy" data-reveal="left">
          <h2 class="cta-title">{{ $t('servicesPage.cta.title') }}</h2>
          <p class="cta-description">{{ $t('servicesPage.cta.description') }}</p>

          <div class="cta-actions">
            <p class="alternative-text">{{ $t('servicesPage.cta.or') }}</p>
            <q-btn
              unelevated
              color="accent"
              size="lg"
              no-caps
              :label="$t('servicesPage.cta.email_button')"
              icon="email"
              @click="contactMe"
              class="cta-button"
            />
          </div>
        </div>

        <div class="contact-form-container" data-reveal="up" style="--reveal-delay: 120ms">
          <ContactForm formspree-id="xnjbapdg" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
// @ts-nocheck
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import ContactForm from 'components/ContactForm.vue'
import { createRevealObserver } from 'src/utils/revealOnScroll'

export default defineComponent({
  name: 'ServicesPage',
  components: {
    ContactForm
  },
  methods: {
    getOfferings(offerings) {
      return Array.isArray(offerings) ? offerings.slice(0, 3) : []
    }
  },

  setup() {
    const $q = useQuasar()
    const { tm, locale } = useI18n()
    const servicesPageRef = ref(null)
    const activeServiceIndex = ref(0)
    let revealObserver = null
    let serviceSectionObserver = null

    const resetRevealObserver = () => {
      revealObserver?.disconnect()
      revealObserver = createRevealObserver()
      const root = servicesPageRef.value?.$el || servicesPageRef.value
      revealObserver.observe(root?.querySelectorAll('[data-reveal]'))
    }

    const resetServiceSectionObserver = () => {
      serviceSectionObserver?.disconnect()

      const serviceSections = Array.from(document.querySelectorAll('[id^="service-"]'))
      serviceSectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

          if (!visibleEntry) {
            return
          }

          const index = Number(String(visibleEntry.target.id).replace('service-', ''))
          if (!Number.isNaN(index)) {
            activeServiceIndex.value = index
          }
        },
        {
          threshold: [0.3, 0.45, 0.6],
          rootMargin: '-18% 0px -42% 0px'
        }
      )

      serviceSections.forEach((section) => serviceSectionObserver?.observe(section))
    }

    const services = computed(() => {
      /** @type {any[]} */
      const items = tm('servicesPage.items')

      return items.map((service) => ({
        title: service?.title || '',
        description: service?.description || '',
        icon: service?.icon || 'widgets',
        color: service?.color || 'primary',
        offeringsTitle: service?.offeringsTitle || '',
        benefitsTitle: service?.benefitsTitle || '',
        casesTitle: service?.casesTitle || '',
        offerings: (service?.offerings || []).map((offering) => ({
          name: offering?.name || '',
          icon: offering?.icon || 'widgets',
          description: offering?.description || ''
        })),
        benefits: [...(service?.benefits || [])],
        cases: [...(service?.cases || [])]
      }))
    })

    const processSteps = computed(() => {
      /** @type {any[]} */
      const steps = tm('servicesPage.process.steps')

      return steps.map((step) => ({
        title: step?.title || '',
        description: step?.description || ''
      }))
    })

    const positioningItems = computed(() => {
      /** @type {any[]} */
      const items = tm('servicesPage.positioning.items')

      return items.map((item) => ({
        title: item?.title || '',
        description: item?.description || ''
      }))
    })

    const scrollToSection = (id) => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const jumpToService = (index) => {
      activeServiceIndex.value = index
      scrollToSection(`service-${index}`)
    }

    const contactMe = () => {
      window.location.href = 'mailto:chenpoyu1123@gmail.com?subject=技術服務諮詢&body=您好，我想了解更多關於技術服務的內容...'
    }

    onMounted(async () => {
      await nextTick()
      resetRevealObserver()
      resetServiceSectionObserver()
    })

    watch(locale, async () => {
      await nextTick()
      resetRevealObserver()
      resetServiceSectionObserver()
    })

    watch(() => $q.dark.isActive, async () => {
      await nextTick()
      resetRevealObserver()
      resetServiceSectionObserver()
    })

    onBeforeUnmount(() => {
      revealObserver?.disconnect()
      serviceSectionObserver?.disconnect()
    })

    return {
      $q,
      servicesPageRef,
      activeServiceIndex,
      services,
      processSteps,
      positioningItems,
      scrollToSection,
      jumpToService,
      contactMe
    }
  }
})
</script>

<style lang="scss" scoped>
.services-page {
  background:
    radial-gradient(circle at top left, rgba(163, 138, 99, 0.08), transparent 22%),
    radial-gradient(circle at 84% 10%, rgba(54, 70, 90, 0.08), transparent 18%),
    linear-gradient(180deg, #edf1f4 0%, #e6ebf0 48%, #eef2f5 100%);
  color: var(--text-strong);
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.services-hero {
  position: relative;
  overflow: hidden;
  padding: 6.25rem 0 4rem;
  color: white;
  background:
    radial-gradient(circle at 18% 18%, rgba(163, 138, 99, 0.16), transparent 22%),
    radial-gradient(circle at top right, rgba(91, 108, 130, 0.14), transparent 24%),
    linear-gradient(135deg, rgba(12, 18, 28, 0.99) 0%, rgba(20, 30, 44, 0.97) 46%, rgba(13, 20, 31, 0.99) 100%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(10px);
    opacity: 0.58;
  }

  &::before {
    width: 260px;
    height: 260px;
    top: -80px;
    right: 6%;
    background: rgba(163, 138, 99, 0.18);
  }

  &::after {
    width: 340px;
    height: 340px;
    bottom: -180px;
    left: 2%;
    background: rgba(97, 114, 136, 0.12);
  }
}

.hero-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(340px, 1.04fr);
  gap: 1.75rem;
  align-items: start;
}

.hero-copy {
  padding-top: 0.4rem;
}

.hero-eyebrow,
.hero-editorial__eyebrow {
  margin: 0 0 0.85rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 168, 96, 0.9);
}

.hero-badge-row,
.cta-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.hero-badge,
.cta-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.07);
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero-badge {
  color: rgba(255, 255, 255, 0.84);
  cursor: pointer;
  transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.18);
    color: white;
  }

  &.is-active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%);
    border-color: rgba(255, 255, 255, 0.2);
    color: #f7f4ef;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 10px 22px rgba(0, 0, 0, 0.16);
  }
}

.page-title,
.hero-snapshot__title,
.service-panel__rail-title,
.service-panel__title,
.section-title,
.cta-title,
.offering-name {
  font-family: var(--display-font);
}

.page-title {
  margin: 1.15rem 0 0;
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #f6f4ef 0%, #a38a63 48%, #f6f4ef 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3.2s linear infinite;
}

.page-subtitle {
  max-width: 32rem;
  margin: 1.15rem 0 0;
  font-size: 1.12rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
}

.hero-note {
  max-width: 34rem;
  margin: 1rem 0 0;
  font-size: 0.98rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.64);
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.hero-aside {
  display: block;
}

.hero-editorial {
  min-height: 100%;
  padding: 1.35rem;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(16px);
  box-shadow: 0 28px 58px rgba(0, 0, 0, 0.18);
}

.hero-editorial__head {
  max-width: 48rem;
}

.hero-editorial__title {
  margin: 0;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  line-height: 1.25;
  color: #f7f4ef;
}

.hero-editorial__subtitle {
  margin: 0.8rem 0 0;
  font-size: 0.98rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.72);
}

.hero-editorial__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.15rem;
}

.hero-editorial__item {
  padding: 1rem 1rem 1.05rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);

  h3 {
    margin: 0.7rem 0 0;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
  }

  p {
    margin: 0.55rem 0 0;
    font-size: 0.9rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.7);
  }
}

.hero-editorial__item-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.82rem;
  font-weight: 700;
}

.service-panel__heading,
.offering-item__head,
.process-card {
  display: flex;
  align-items: flex-start;
}

.service-panel__kicker,
.process-card__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.95rem;
  font-weight: 700;
}
.services-detail,
.process-section,
.cta-section {
  position: relative;
  overflow: hidden;
}

.services-detail {
  padding: 4.5rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(238, 242, 246, 0.82) 100%);
}

.services-stack {
  display: grid;
  gap: 1.5rem;
}

.service-panel__card,
.service-panel__card,
.process-card {
  border: 1px solid rgba(33, 49, 66, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(243, 246, 249, 0.94) 100%);
  box-shadow: 0 18px 42px rgba(16, 28, 43, 0.06);
}

.service-panel__avatar {
  box-shadow: 0 14px 34px rgba(16, 28, 43, 0.16);
}

.service-panel__description,
.step-description,
.offering-description,
.benefits-list li,
.alternative-text,
.cta-description {
  line-height: 1.85;
}

.service-panel__card {
  border-radius: 32px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(163, 138, 99, 0.26), transparent);
  }

  :deep(.q-card__section) {
    padding: 1.55rem;
  }
}

.service-panel__heading {
  gap: 1.25rem;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(33, 49, 66, 0.08);
}

.service-panel__heading-main {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex: 0 0 auto;
}

.service-panel__heading-copy {
  min-width: 0;
}

.service-panel__kicker {
  color: var(--text-strong);
  background: rgba(16, 28, 43, 0.06);
}

.service-panel__title {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  line-height: 1.08;
}

.service-panel__description {
  margin: 0.55rem 0 0;
  max-width: 42rem;
  font-size: 1rem;
  color: var(--text-muted);
}

.service-panel__content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 1.2rem;
  margin-top: 1.35rem;
}

.section-block,
.service-offerings {
  display: block;
}

.section-block__head {
  margin-bottom: 0.75rem;
}

.section-block__title {
  margin: 0;
  font-size: 0.94rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.offerings-list,
.process-grid {
  display: grid;
  gap: 1rem;
}

.offerings-list {
  gap: 0.7rem;
}

.offering-item {
  padding: 0.9rem 0;
  border-bottom: 1px solid rgba(33, 49, 66, 0.08);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateX(4px);
    border-color: rgba(163, 138, 99, 0.22);
  }
}

.offering-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.offering-item__head {
  gap: 0.75rem;
}

.offering-item__icon-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(16, 28, 43, 0.06);
  flex: 0 0 36px;
}

.offering-item__name {
  font-family: var(--display-font);
  font-size: 1.02rem;
  line-height: 1.3;
  color: var(--text-strong);
}

.offering-item__description {
  margin: 0.45rem 0 0 3rem;
  font-size: 0.94rem;
  color: var(--text-muted);
}

.service-side-stack {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.service-benefits,
.service-cases {
  padding: 1rem 1.05rem 1.1rem;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.68), rgba(246, 248, 250, 0.8));
  border: 1px solid rgba(33, 49, 66, 0.07);
}

.benefits-list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
  }

  li + li {
    margin-top: 0.85rem;
  }
}

.benefits-list__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  margin-top: 0.15rem;
}

.cases-grid,
.process-intro__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.cases-chip {
  max-width: 100%;
  height: auto;
  min-height: 34px;
  padding: 0.35rem 0.4rem;

  :deep(.q-chip__content) {
    white-space: normal;
    overflow-wrap: anywhere;
    line-height: 1.55;
  }
}

.process-section {
  padding: 4.5rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(239, 243, 246, 0.74) 100%);
}

.process-shell {
  display: grid;
  grid-template-columns: minmax(260px, 0.34fr) minmax(0, 0.66fr);
  gap: 1.5rem;
  align-items: start;
}

.process-intro {
  position: sticky;
  top: 96px;
}

.process-intro__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brand-gold);
}

.section-title {
  margin: 0;
  font-size: clamp(2rem, 3.8vw, 3rem);
  line-height: 1.12;
  font-weight: 600;
}

.process-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.process-card {
  gap: 1rem;
  padding: 1.2rem 1.2rem 1.25rem;
  border-radius: 24px;
}

.process-card__number {
  color: var(--text-strong);
  background: rgba(16, 28, 43, 0.06);
  flex: 0 0 42px;
}

.process-card__body {
  flex: 1;
}

.step-title {
  margin: 0;
  font-size: 1.12rem;
  line-height: 1.4;
  font-weight: 700;
}

.step-description {
  margin: 0.55rem 0 0;
  color: var(--text-muted);
}

.cta-section {
  padding: 5rem 0 5.5rem;
  color: white;
  background:
    radial-gradient(circle at bottom right, rgba(163, 138, 99, 0.14), transparent 24%),
    linear-gradient(135deg, rgba(13, 20, 31, 0.99) 0%, rgba(20, 29, 41, 0.99) 100%);
}

.cta-shell {
  display: grid;
  grid-template-columns: minmax(0, 0.84fr) minmax(320px, 1.16fr);
  gap: 1.6rem;
  align-items: start;
}

.cta-copy {
  padding-top: 0.35rem;
}

.cta-title {
  margin: 1.2rem 0 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.12;
  font-weight: 600;
  color: #f7f4ef;
}

.cta-description {
  max-width: 32rem;
  margin: 1rem 0 0;
  font-size: 1.02rem;
  color: rgba(255, 255, 255, 0.78);
}

.alternative-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.64);
}

.contact-form-container {
  max-width: 760px;
  padding: 1.1rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(16px);
}

.cta-button {
  color: #0d1117;
  box-shadow: 0 16px 36px rgba(163, 138, 99, 0.26);
}

.services-page--dark {
  background:
    radial-gradient(circle at top left, rgba(176, 153, 115, 0.1), transparent 22%),
    radial-gradient(circle at 84% 10%, rgba(104, 129, 155, 0.08), transparent 18%),
    linear-gradient(180deg, #07111d 0%, #0b1624 48%, #08111c 100%);

  .services-detail,
  .process-section {
    background: transparent;
  }

  .service-panel__rail-card,
  .service-panel__card,
  .process-card {
    border-color: rgba(131, 171, 211, 0.14);
    background: linear-gradient(180deg, rgba(10, 20, 31, 0.84) 0%, rgba(14, 24, 36, 0.94) 100%);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.24);
  }

  .service-benefits,
  .service-cases {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(131, 171, 211, 0.1);
  }

  .service-panel__heading {
    border-bottom-color: rgba(131, 171, 211, 0.1);
  }

  .offering-item {
    border-bottom-color: rgba(131, 171, 211, 0.12);
  }

  .offering-item:hover {
    border-bottom-color: rgba(212, 179, 115, 0.28);
  }

  .hero-editorial,
  .hero-editorial__item {
    border-color: rgba(255, 255, 255, 0.1);
  }

  .service-panel__rail-title,
  .service-panel__title,
  .section-title,
  .step-title,
  .offering-item__name {
    color: #f5efe6;
  }

  .service-panel__description,
  .step-description,
  .offering-item__description,
  .benefits-list li,
  .service-panel__kicker,
  .process-card__number {
    color: rgba(243, 237, 228, 0.76);
  }

  .hero-badge {
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(243, 237, 228, 0.8);
  }

  .hero-badge:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f5efe6;
  }

  .hero-badge.is-active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.08) 100%);
    border-color: rgba(212, 179, 115, 0.22);
    color: #f5efe6;
  }

  .service-panel__kicker,
  .process-card__number,
  .offering-item__icon-shell {
    background: rgba(255, 255, 255, 0.06);
  }

  .offering-item__name {
    color: #f5efe6;
  }

  .offering-item__description {
    color: rgba(243, 237, 228, 0.7);
  }

  .section-block__title,
  .process-intro__eyebrow,
  .hero-eyebrow,
  .hero-editorial__eyebrow {
    color: rgba(176, 153, 115, 0.88);
  }

  .cases-chip {
    border-color: rgba(176, 153, 115, 0.14);
  }
}

@keyframes shimmer {
  0% {
    background-position: 0% center;
  }

  100% {
    background-position: 200% center;
  }
}

@media (max-width: 1180px) {
  .hero-shell,
  .process-shell,
  .cta-shell,
  .service-panel__content-grid {
    grid-template-columns: 1fr;
  }

  .process-intro {
    position: static;
  }

  .hero-editorial__grid,
  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .container {
    width: min(100% - 24px, 1200px);
  }

  .services-hero,
  .services-detail,
  .process-section,
  .cta-section {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .page-title {
    font-size: clamp(2.3rem, 11vw, 3.6rem);
  }

  .page-subtitle,
  .cta-description {
    font-size: 1rem;
  }

  .hero-editorial__grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions :deep(.q-btn),
  .cta-actions :deep(.q-btn) {
    width: 100%;
  }

  .hero-badge-row,
  .cta-tag-list,
  .cases-grid,
  .process-intro__tags {
    gap: 0.55rem;
  }

  .service-panel__heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .service-panel__heading-main {
    width: 100%;
  }

  .offering-item__description {
    margin-left: 0;
  }

  .service-panel__title {
    font-size: 1.65rem;
  }
}
</style>
