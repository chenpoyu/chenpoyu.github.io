<template>
  <q-page ref="profilePageRef" class="profile-page" :class="{ 'profile-page--dark': $q.dark.isActive }">
    <div class="row profile-cover">
      <q-img
        src="~assets/learn.jpeg"
        :height="$q.screen.gt.sm ? '420px' : '320px'"
        native-context-menu
      >
        <div class="absolute-full profile-cover-overlay">
          <div class="container profile-cover-shell" data-reveal="up">
            <p class="profile-cover-eyebrow">{{ $t('profile.cover_eyebrow') }}</p>
            <h1 class="profile-cover-title">{{ $t('myname') }}</h1>
            <p class="profile-cover-text">{{ $t('profile.cover_summary') }}</p>
          </div>
        </div>
      </q-img>
    </div>

    <section class="profile-intro-section">
      <div class="container">
        <div :class="['row justify-center profile-intro', $q.screen.gt.sm ? 'items-center no-wrap' : 'profile-intro--mobile']" data-reveal="up" style="--reveal-delay: 80ms">
          <div :class="['col-auto text-center profile-intro-media', $q.screen.gt.sm ? 'q-mr-xl' : 'q-mb-md']">
            <q-avatar :size="$q.screen.gt.xs ? '240px' : '170px'" class="profile-avatar">
              <q-img src="~assets/poyu.jpg" />
            </q-avatar>
          </div>
          <div :class="['col profile-intro-copy', $q.screen.gt.sm ? 'text-left' : 'text-left']">
            <div class="profile-intro-kicker">{{ $t('profile.intro_eyebrow') }}</div>
            <div class="text-body1 description q-mt-md profile-intro-description">{{ $t('profile.description') }}</div>
            <div class="profile-quote q-mt-lg">
              <div class="profile-quote-text">{{ $t('profile.quote') }}</div>
              <div class="profile-quote-source">{{ $t('profile.quote_from') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="profile-stats-section q-pb-xl">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('profile.sections.stats.title') }}</h2>
          <p class="section-subtitle">{{ $t('profile.sections.stats.subtitle') }}</p>
        </div>

        <div class="profile-stats-grid">
          <article v-for="stat in profileStats" :key="stat.label" class="profile-stat-card">
            <q-icon :name="stat.icon" size="32px" :color="stat.color" />
            <div class="profile-stat-value">
              <CounterAnimation :value="stat.number" :suffix="stat.suffix" />
            </div>
            <div class="profile-stat-label">{{ $t(stat.label) }}</div>
          </article>
        </div>
      </div>
    </section>

    <section class="profile-values-section q-pb-xl">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('profile.sections.values.title') }}</h2>
          <p class="section-subtitle">{{ $t('profile.sections.values.subtitle') }}</p>
        </div>

        <div class="profile-values-grid">
          <q-card v-for="pillar in valuePillars" :key="pillar.title" flat class="profile-value-card">
            <q-card-section>
              <q-icon :name="pillar.icon" size="32px" :color="pillar.color" />
              <h3 class="profile-value-title">{{ $t(pillar.title) }}</h3>
              <p class="profile-value-description">{{ $t(pillar.description) }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- <div class="row">
      <q-img
        src="~assets/code.png"
        native-context-menu
        :height="$q.screen.gt.xs ? '400px' : '700px'"
      >
        <div class="absolute-full flex flex-center">
          <div
            v-for="data in list"
            :key="data.label"
            class="col-xs-12 col-sm-4 text-center q-mx-xl"
          >
            <q-avatar rounded size="150px">
              <q-icon :name="data.icon" />
            </q-avatar>
            <div class="text-h5 text-bold">{{ $t(data.label) }}</div>
          </div>
        </div>
      </q-img>
    </div>

    <div class="row flex flex-center q-mt-sm">
      <div :class="['q-my-xl q-mx-md', $q.dark.mode ? 'text-white' : 'text-black']">
        <div class="text-bold text-h5 text-center">{{ $t('profile.label3') }}</div>
      </div>
    </div>

    <div :class="['row q-py-xs justify-center q-px-sm']">
      <q-card
        v-for="data in cards"
        :key="data.label"
        bordered
        :class="['q-ma-sm bg-grey-9 text-white card']"
      >
        <q-card-section>
          <div class="text-h6 text-center">{{ $t(data.title) }}</div>
          <div class="text-subtitle2">{{ $t(data.subtitle) }}</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="description">
          {{ $t(data.message) }}
        </q-card-section>
      </q-card>
    </div> -->

    <!-- Projects Section -->
    <section class="projects-section q-py-xl">
      <div class="container">
        <h2 class="section-title">{{ $t('profile.sections.projects.title') }}</h2>
        <p class="section-subtitle">{{ $t('profile.sections.projects.subtitle') }}</p>

        <div class="projects-grid">
          <q-card
            v-for="(project, key) in projects"
            :key="key"
            class="project-card"
            flat
            bordered
          >
            <q-card-section>
              <div class="project-header">
                <h3 class="project-name">{{ $t(project.name) }}</h3>
                <q-chip
                  dense
                  color="primary"
                  text-color="white"
                  icon="bookmark"
                >
                  {{ $t(project.tags) }}
                </q-chip>
              </div>
              <p class="project-description">{{ $t(project.description) }}</p>
              <q-separator class="q-my-md" />
              <div class="project-highlights">
                <h4>{{ $t('profile.project_highlights_label') }}</h4>
                <ul>
                  <li v-for="(highlight, idx) in project.highlights" :key="idx">
                    <q-icon name="star" size="16px" color="amber" />
                    {{ $t(highlight) }}
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Skills Section with Progress Bars -->
    <section class="skills-section q-py-xl">
      <div class="container">
        <h2 class="section-title">{{ $t('profile.sections.skills.title') }}</h2>
        <p class="section-subtitle">{{ $t('profile.sections.skills.subtitle') }}</p>

        <q-tabs
          v-model="skillTab"
          dense
          class="skill-tabs"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab
            v-for="(category, idx) in skillCategories"
            :key="idx"
            :name="idx"
            :icon="category.icon"
            :label="$t(category.name)"
          />
        </q-tabs>

        <q-tab-panels v-model="skillTab" animated class="skill-panels">
          <q-tab-panel
            v-for="(category, idx) in skillCategories"
            :key="idx"
            :name="idx"
          >
            <div class="skills-list">
              <div
                v-for="skill in category.items"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <div class="skill-name-wrapper">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-description" v-if="skill.description">{{ skill.description }}</span>
                  </div>
                  <span class="skill-years">{{ skill.years }} {{ $t('tech.years_exp') }}</span>
                </div>
                <q-linear-progress
                  :value="skill.level / 100"
                  size="14px"
                  color="primary"
                  class="skill-progress"
                />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="experience-section q-py-xl">
      <div class="container">
        <h2 class="section-title">{{ $t('profile.sections.experience.title') }}</h2>
        <p class="section-subtitle">{{ $t('profile.sections.experience.subtitle') }}</p>

        <q-timeline color="primary" class="experience-timeline">
          <q-timeline-entry
            v-for="(exp, idx) in experience"
            :key="idx"
            :title="$t(exp.title)"
            :subtitle="$t(exp.year)"
            :icon="exp.icon"
            color="primary"
          >
            <div class="exp-content">
              <h4 class="exp-company">{{ $t(exp.company) }}</h4>
              <p class="exp-description">{{ $t(exp.description) }}</p>
              <div class="exp-achievements">
                <h5>{{ $t('profile.experience_achievements_label') }}</h5>
                <ul>
                  <li v-for="(achievement, aidx) in exp.achievements" :key="aidx">
                    {{ $t(achievement) }}
                  </li>
                </ul>
              </div>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </section>

    <!-- 原時間軸區塊已隱藏，改用新的專案、技能、經驗展示 -->
    <!--
    <div class="row flex flex-center q-mt-xl">
      <div :class="['q-my-xl q-mx-md']">
        <div :class="['text-bold text-h5 text-center site-text-shadow',
          $q.dark.mode ? 'text-white' : 'text-black'
        ]">
          {{ $t('profile.label2') }}
        </div>
        <div class="text-italic text-h6 text-right q-mt-lg">
          {{ $t('profile.label2_from') }}
        </div>
      </div>
    </div>

    <div :class="['row justify-center q-pb-xl', $q.screen.gt.xs ? 'q-pa-xl q-mx-xl' : 'q-mx-lg']">
      <q-timeline color="primary">
        <q-timeline-entry
          v-for="data in timelines"
          :key="data.label"
          :title="$t(data.title)"
          :subtitle="data.subtitle"
          :color="data.color"
          :icon="data.icon"
          :heading="data.heading"
        >
          {{ $t(data.message) }}
        </q-timeline-entry>
      </q-timeline>
    </div>
    -->
  </q-page>
</template>

<script>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import CounterAnimation from 'components/CounterAnimation.vue'
import { createRevealObserver } from 'src/utils/revealOnScroll'

const list = [
  {
    icon: 'fas fa-laptop-code',
    label: 'profile.develop'
  },
  {
    icon: 'fas fa-users',
    label: 'profile.leader'
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    label: 'profile.teach'
  }
];

const timelines = [
  {
    title: 'profile.timeline.title1',
    subtitle: '2009.09',
    color: '',
    icon: 'flag',
    message: 'profile.timeline.message1',
    heading: false,
  },
  {
    title: 'profile.timeline.title2',
    subtitle: '2012.01',
    color: '',
    icon: 'web',
    message: 'profile.timeline.message2',
    heading: false,
  },
  {
    title: 'profile.timeline.title3',
    subtitle: '2013.04',
    color: '',
    icon: 'auto_stories',
    message: 'profile.timeline.message3',
    heading: false,
  },
  {
    title: 'profile.timeline.title4',
    subtitle: '2018.10',
    color: '',
    icon: 'phone_iphone',
    message: 'profile.timeline.message4',
    heading: false,
  },
  {
    title: 'profile.timeline.title5',
    subtitle: '2019.01',
    color: '',
    icon: 'manage_accounts',
    message: 'profile.timeline.message5',
    heading: false,
  },
  {
    title: 'profile.timeline.title6',
    subtitle: '2020.06',
    color: '',
    icon: 'code',
    message: 'profile.timeline.message6',
    heading: false,
  },
  {
    title: 'profile.timeline.title7',
    subtitle: '2023.07',
    color: '',
    icon: 'paid',
    message: 'profile.timeline.message7',
    heading: false,
  },
  {
    title: 'profile.timeline.title8',
    subtitle: 'Now',
    color: '',
    icon: 'trending_up',
    message: 'profile.timeline.message8',
    heading: false,
  },
];

const cards = [
  {
    title: 'profile.card.title1',
    subtitle: 'profile.card.subtitle1',
    message: 'profile.card.message1',
  },
  {
    title: 'profile.card.title2',
    subtitle: 'profile.card.subtitle2',
    message: 'profile.card.message2',
  },
  {
    title: 'profile.card.title3',
    subtitle: 'profile.card.subtitle3',
    message: 'profile.card.message3',
  },
  {
    title: 'profile.card.title4',
    subtitle: 'profile.card.subtitle4',
    message: 'profile.card.message4',
  },
];

const projects = {
  luxgen: {
    name: 'projects.luxgen.name',
    description: 'projects.luxgen.description',
    tags: 'projects.luxgen.tags',
    highlights: [
      'projects.luxgen.highlights.0',
      'projects.luxgen.highlights.1',
      'projects.luxgen.highlights.2',
      'projects.luxgen.highlights.3'
    ]
  },
  parking: {
    name: 'projects.parking.name',
    description: 'projects.parking.description',
    tags: 'projects.parking.tags',
    highlights: [
      'projects.parking.highlights.0',
      'projects.parking.highlights.1',
      'projects.parking.highlights.2',
      'projects.parking.highlights.3'
    ]
  },
  nitori: {
    name: 'projects.nitori.name',
    description: 'projects.nitori.description',
    tags: 'projects.nitori.tags',
    highlights: [
      'projects.nitori.highlights.0',
      'projects.nitori.highlights.1',
      'projects.nitori.highlights.2',
      'projects.nitori.highlights.3'
    ]
  },
  charging: {
    name: 'projects.charging.name',
    description: 'projects.charging.description',
    tags: 'projects.charging.tags',
    highlights: [
      'projects.charging.highlights.0',
      'projects.charging.highlights.1',
      'projects.charging.highlights.2',
      'projects.charging.highlights.3'
    ]
  },
  seven: {
    name: 'projects.seven.name',
    description: 'projects.seven.description',
    tags: 'projects.seven.tags',
    highlights: [
      'projects.seven.highlights.0',
      'projects.seven.highlights.1',
      'projects.seven.highlights.2',
      'projects.seven.highlights.3'
    ]
  },
  unimember: {
    name: 'projects.unimember.name',
    description: 'projects.unimember.description',
    tags: 'projects.unimember.tags',
    highlights: [
      'projects.unimember.highlights.0',
      'projects.unimember.highlights.1',
      'projects.unimember.highlights.2',
      'projects.unimember.highlights.3'
    ]
  },
  government: {
    name: 'projects.government.name',
    description: 'projects.government.description',
    tags: 'projects.government.tags',
    highlights: [
      'projects.government.highlights.0',
      'projects.government.highlights.1',
      'projects.government.highlights.2',
      'projects.government.highlights.3'
    ]
  },
  military: {
    name: 'projects.military.name',
    description: 'projects.military.description',
    tags: 'projects.military.tags',
    highlights: [
      'projects.military.highlights.0',
      'projects.military.highlights.1',
      'projects.military.highlights.2',
      'projects.military.highlights.3'
    ]
  }
}

const skillCategories = [
  {
    name: 'skills.categories.0.name',
    icon: 'architecture',
    itemKeys: [0, 1, 2, 3, 4] // UML, 需求分析, 架構設計, API設計, 資料庫設計
  },
  {
    name: 'skills.categories.1.name',
    icon: 'devices',
    itemKeys: [5, 6, 7, 8] // Vue.js, React, iOS/Swift, Flutter
  },
  {
    name: 'skills.categories.2.name',
    icon: 'dns',
    itemKeys: [9, 10, 11, 12, 13] // Java, .NET, PHP, Microservices, Message Queue
  },
  {
    name: 'skills.categories.3.name',
    icon: 'storage',
    itemKeys: [14, 15, 16] // PostgreSQL, SQL Server, Redis
  },
  {
    name: 'skills.categories.4.name',
    icon: 'cloud',
    itemKeys: [17, 18, 19, 20] // AWS, Azure, Docker, CI/CD
  }
]

const skillLevelsAndYears = [
  { level: 90, years: 8 },   // 0: UML/系統建模
  { level: 80, years: 4 },   // 1: 需求分析
  { level: 90, years: 6 },   // 2: 架構設計
  { level: 95, years: 10 },  // 3: API 設計
  { level: 95, years: 10 },  // 4: 資料庫設計
  { level: 80, years: 6 },   // 5: Vue.js
  { level: 85, years: 5 },   // 6: React
  { level: 70, years: 2 },   // 7: iOS/Swift
  { level: 65, years: 2 },   // 8: Flutter
  { level: 95, years: 13 },  // 9: Java/Spring Boot
  { level: 95, years: 6 },   // 10: .NET Core/C#
  { level: 80, years: 8 },   // 11: PHP/Laravel
  { level: 90, years: 8 },   // 12: Microservices
  { level: 85, years: 8 },   // 13: Message Queue
  { level: 95, years: 10 },  // 14: PostgreSQL
  { level: 95, years: 10 },  // 15: SQL Server
  { level: 90, years: 10 },  // 16: Redis
  { level: 90, years: 5 },   // 17: AWS
  { level: 85, years: 3 },   // 18: Azure
  { level: 90, years: 6 },   // 19: Docker
  { level: 90, years: 7 }    // 20: CI/CD
]

const experience = [
  {
    title: 'experience.timeline.0.title',
    year: 'experience.timeline.0.year',
    company: 'experience.timeline.0.company',
    description: 'experience.timeline.0.description',
    icon: 'engineering',
    achievements: [
      'experience.timeline.0.achievements.0',
      'experience.timeline.0.achievements.1',
      'experience.timeline.0.achievements.2'
    ]
  },
  {
    title: 'experience.timeline.1.title',
    year: 'experience.timeline.1.year',
    company: 'experience.timeline.1.company',
    description: 'experience.timeline.1.description',
    icon: 'workspace_premium',
    achievements: [
      'experience.timeline.1.achievements.0',
      'experience.timeline.1.achievements.1',
      'experience.timeline.1.achievements.2'
    ]
  },
  {
    title: 'experience.timeline.2.title',
    year: 'experience.timeline.2.year',
    company: 'experience.timeline.2.company',
    description: 'experience.timeline.2.description',
    icon: 'groups',
    achievements: [
      'experience.timeline.2.achievements.0',
      'experience.timeline.2.achievements.1',
      'experience.timeline.2.achievements.2'
    ]
  },
  {
    title: 'experience.timeline.3.title',
    year: 'experience.timeline.3.year',
    company: 'experience.timeline.3.company',
    description: 'experience.timeline.3.description',
    icon: 'code',
    achievements: [
      'experience.timeline.3.achievements.0',
      'experience.timeline.3.achievements.1',
      'experience.timeline.3.achievements.2'
    ]
  }
]

export default {
  name: 'Index',
  components: {
    CounterAnimation
  },
  setup() {
    const $q = useQuasar()
    const { tm } = useI18n()
    const skillTab = ref(0)
    const profilePageRef = ref(null)
    let revealObserver = null

    onMounted(async () => {
      await nextTick()
      revealObserver = createRevealObserver()
      const root = profilePageRef.value?.$el || profilePageRef.value
      revealObserver.observe(root?.querySelectorAll('[data-reveal]'))
    })

    onBeforeUnmount(() => {
      revealObserver?.disconnect()
    })

    const skillCategoriesWithItems = computed(() => {
      const skillItems = tm('skills.items')
      return skillCategories.map(category => ({
        ...category,
        items: category.itemKeys.map(key => ({
          name: skillItems[key].name,
          description: skillItems[key].description,
          level: skillLevelsAndYears[key].level,
          years: skillLevelsAndYears[key].years
        }))
      }))
    })

    const profileStats = [
      { icon: 'work_history', color: 'primary', number: 13, suffix: '+', label: 'stats.years' },
      { icon: 'engineering', color: 'accent', number: 100, suffix: '+', label: 'stats.projects' },
      { icon: 'groups', color: 'positive', number: 40, suffix: '+', label: 'stats.team' },
      { icon: 'code', color: 'info', number: 20, suffix: '+', label: 'stats.technologies' }
    ]

    const valuePillars = [
      {
        icon: 'rocket_launch',
        color: 'accent',
        title: 'profile.pillars.architecture.title',
        description: 'profile.pillars.architecture.description'
      },
      {
        icon: 'verified',
        color: 'positive',
        title: 'profile.pillars.problem_solving.title',
        description: 'profile.pillars.problem_solving.description'
      },
      {
        icon: 'bolt',
        color: 'warning',
        title: 'profile.pillars.team_leadership.title',
        description: 'profile.pillars.team_leadership.description'
      },
      {
        icon: 'trending_up',
        color: 'info',
        title: 'profile.pillars.continuous_learning.title',
        description: 'profile.pillars.continuous_learning.description'
      }
    ]

    return {
      $q,
      profilePageRef,
      list,
      timelines,
      cards,
      projects,
      skillCategories: skillCategoriesWithItems,
      experience,
      skillTab,
      profileStats,
      valuePillars
    }
  },
  computed: {
    getSize() {
      let size = 270;
      if (this.$q.screen.sm) {
        size = 180;
      }
      return `${size}px`;
    },
  }
}
</script>

<style lang="scss" scoped>
.profile-page {
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(163, 138, 99, 0.08), transparent 26%),
    radial-gradient(circle at top left, rgba(54, 70, 90, 0.06), transparent 24%),
    linear-gradient(180deg, #edf1f4 0%, #f4f6f8 28%, #e7ecf1 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
}

.profile-cover {
  .q-img {
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
    overflow: hidden;
  }
}

.profile-cover-overlay {
  display: flex;
  align-items: flex-end;
  background: linear-gradient(135deg, rgba(12, 18, 28, 0.82) 0%, rgba(21, 32, 46, 0.72) 45%, rgba(14, 22, 34, 0.88) 100%);
}

.profile-cover-shell {
  width: 100%;
  padding: 0 2rem 2.75rem;
  max-width: 900px;
}

.profile-cover-eyebrow,
.profile-quote-source {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 168, 96, 0.95);
  color: rgba(163, 138, 99, 0.9);
}

.profile-cover-title,
.profile-intro-name,
.profile-value-title,
.section-title,
.project-name,
.exp-company {
  font-family: var(--display-font);
  letter-spacing: 0.02em;
}

.profile-cover-title {
  margin: 0.75rem 0 0;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  line-height: 1.04;
  color: #f8f5ef;
}

.profile-cover-text {
  max-width: 760px;
  margin: 1rem 0 0;
  font-size: 1.05rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
}

.profile-intro-section {
  position: relative;
  margin-top: -64px;
  z-index: 3;
  padding: 0 0 1.5rem;
}

.profile-intro {
  margin: 0;
  padding: clamp(1.4rem, 3vw, 2.4rem);
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(241, 245, 248, 0.92));
  border: 1px solid rgba(33, 49, 66, 0.08);
  box-shadow: 0 28px 60px rgba(16, 28, 43, 0.1);
  backdrop-filter: blur(12px);
}

.profile-avatar {
  border: 2px solid rgba(163, 138, 99, 0.4);
  box-shadow: 0 20px 45px rgba(16, 28, 43, 0.16);
}

.profile-intro-copy {
  min-width: 0;
}

.profile-intro-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(82, 95, 114, 0.72);
}

.profile-intro-description {
  color: rgba(23, 33, 43, 0.76);
}

.profile-quote {
  padding: 1.25rem 1.35rem;
  border-left: 3px solid rgba(163, 138, 99, 0.7);
  background: rgba(255, 255, 255, 0.66);
  border-radius: 18px;
  box-shadow: 0 14px 30px rgba(16, 28, 43, 0.06);
}

.profile-quote-text {
  font-size: 1.02rem;
  line-height: 1.9;
  color: rgba(23, 33, 43, 0.8);
}

.profile-quote-source {
  margin-top: 0.8rem;
  color: rgba(10, 37, 64, 0.58);
}

.section-header {
  max-width: 760px;
  margin: 0 auto 2rem;
  text-align: center;
}

.profile-stats-grid,
.profile-values-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.profile-stat-card,
.profile-value-card {
  border-radius: 24px;
  border: 1px solid rgba(33, 49, 66, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(241, 245, 248, 0.9));
  box-shadow: 0 18px 40px rgba(16, 28, 43, 0.06);
}

.profile-stat-card {
  padding: 1.5rem;
}

.profile-stat-value {
  margin-top: 0.9rem;
  font-size: 2rem;
  font-weight: 800;
  color: var(--brand-navy);
}

.profile-stat-label {
  margin-top: 0.45rem;
  color: rgba(23, 33, 43, 0.68);
}

.profile-value-title {
  margin: 1rem 0 0;
  font-size: 1.28rem;
  color: var(--brand-navy);
}

.profile-value-description {
  margin: 0.75rem 0 0;
  line-height: 1.85;
  color: rgba(23, 33, 43, 0.72);
}

.description {
  white-space: pre-line;
}
.card {
  width: 25%;
  min-width: 220px;
  max-width: 250px;

  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
    min-width: none;
    max-width: none;
  }
}

// Container
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Titles
.section-title {
  font-size: 3.2rem;
  font-weight: 500;
  color: #0a2540;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.8;
  font-weight: 300;
}

// Projects Section
.projects-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(239, 243, 246, 0.76));

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .project-card {
      border-radius: 16px;
      transition: all 0.3s ease;
      border: 1px solid rgba(33, 49, 66, 0.08);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(243, 246, 249, 0.92));

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        border-color: rgba(163, 138, 99, 0.28);
      }

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .project-name {
        font-size: 1.6rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0;
      }

      .project-description {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #555;
        margin-bottom: 1.5rem;
      }

      .project-highlights {
        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0a2540;
          margin-bottom: 0.75rem;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: #666;
            font-size: 1rem;
          }
        }
      }
    }
  }
}

// Skills Section
.skills-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(234, 239, 244, 0.84) 0%, rgba(246, 248, 250, 0.44) 100%);

  .skill-tabs {
    background: rgba(255, 255, 255, 0.82);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(16, 28, 43, 0.06);
    margin-bottom: 2rem;
  }

  .skill-panels {
    background: rgba(255, 255, 255, 0.82);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(16, 28, 43, 0.06);
  }

  .skills-list {
    display: grid;
    gap: 2.5rem;
  }

  .skill-item {
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(163, 138, 99, 0.03) 0%, rgba(54, 70, 90, 0.06) 100%);
    border-radius: 12px;
    border: 1px solid rgba(163, 138, 99, 0.12);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(16, 28, 43, 0.08);
      border-color: rgba(163, 138, 99, 0.24);
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      gap: 1rem;

      .skill-name-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .skill-name {
        font-size: 1.35rem;
        font-weight: 600;
        color: #0a2540;
        letter-spacing: 0.01em;
      }

      .skill-description {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.6;
        font-weight: 400;
      }

      .skill-years {
        font-size: 0.9rem;
        color: #0a2540;
        background: rgba(201, 168, 96, 0.15);
        padding: 0.4rem 1rem;
        border-radius: 16px;
        font-weight: 600;
        white-space: nowrap;
        border: 1px solid rgba(201, 168, 96, 0.25);
      }
    }

    .skill-progress {
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(201, 168, 96, 0.15);
    }
  }
}

// Experience Section
.experience-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(239, 243, 246, 0.68));

  .experience-timeline {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .exp-content {
    .exp-company {
      font-size: 1.3rem;
      font-weight: 600;
      color: #0a2540;
      margin-bottom: 0.75rem;
    }

    .exp-description {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #555;
      margin-bottom: 1.5rem;
    }

    .exp-achievements {
      h5 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #0a2540;
        margin-bottom: 0.75rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 0.5rem 0 0.5rem 1.5rem;
          position: relative;
          color: #666;
          line-height: 1.6;

          &::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: #c9a860;
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media (max-width: 1180px) {
  .profile-stats-grid,
  .profile-values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .profile-cover {
    .q-img {
      border-bottom-left-radius: 22px;
      border-bottom-right-radius: 22px;
    }
  }

  .profile-cover-overlay {
    align-items: flex-end;
    padding-bottom: 0.5rem;
    background: linear-gradient(180deg, rgba(10, 17, 27, 0.52) 0%, rgba(10, 17, 27, 0.62) 48%, rgba(10, 17, 27, 0.78) 100%);
  }

  .profile-cover-shell {
    max-width: calc(100% - 16px);
    margin: 0 auto;
    padding: 0.95rem 0.95rem 1rem;
    border-radius: 22px;
    background: linear-gradient(180deg, rgba(8, 16, 25, 0.2), rgba(8, 16, 25, 0.48));
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
  }

  .profile-intro-section {
    margin-top: -168px;
    padding-bottom: 1rem;
  }

  .profile-intro {
    padding: 1.15rem 1rem 1.2rem;
    border-radius: 22px;
  }

  .profile-intro--mobile {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1rem;
  }

  .profile-intro-media {
    width: 100%;
    margin-bottom: 0;
    text-align: left;
  }

  .profile-intro-copy {
    width: 100%;
  }

  .profile-quote {
    margin-top: 1rem;
    padding: 1rem 1rem;
  }

  .profile-stats-grid,
  .profile-values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .profile-cover {
    .q-img {
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }

  .profile-cover-title {
    max-width: 7ch;
    margin-top: 0.55rem;
    font-size: clamp(1.86rem, 9.8vw, 2.5rem);
    line-height: 1.08;
  }

  .profile-cover-text {
    margin-top: 0.8rem;
    max-width: 18rem;
    font-size: 0.9rem;
    line-height: 1.68;
  }

  .profile-cover-eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.14em;
  }

  .profile-intro {
    padding: 0.95rem 0.9rem 1.05rem;
  }

  .profile-avatar {
    box-shadow: 0 14px 28px rgba(16, 28, 43, 0.12);
  }

  .profile-intro-description,
  .profile-quote-text {
    font-size: 0.96rem;
    line-height: 1.74;
  }
}

// Dark Mode Styles
.profile-page--dark {
  background:
    radial-gradient(circle at top right, rgba(176, 153, 115, 0.1), transparent 24%),
    radial-gradient(circle at top left, rgba(104, 129, 155, 0.08), transparent 22%),
    linear-gradient(180deg, #07111d 0%, #0b1624 28%, #08111c 100%);

  .profile-intro,
  .profile-stat-card,
  .profile-value-card {
    background: linear-gradient(180deg, rgba(12, 18, 27, 0.84), rgba(15, 24, 36, 0.92));
    border-color: rgba(176, 153, 115, 0.12);
    box-shadow: 0 24px 52px rgba(0, 0, 0, 0.22);
  }

  .projects-section,
  .skills-section,
  .experience-section {
    background: transparent;
  }

  .profile-intro-kicker,
  .profile-quote-source,
  .profile-stat-label,
  .profile-value-description {
    color: rgba(243, 237, 228, 0.72);
  }

  .profile-intro-description,
  .profile-quote-text,
  .profile-stat-value,
  .profile-value-title {
    color: #f5efe6;
  }

  .profile-quote {
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  }

  .section-title {
    color: #ffffff;
  }

  .section-subtitle {
    color: rgba(255, 255, 255, 0.85);
  }

  .projects-section {
    background: #0f1e2d;

    .project-card {
      background: rgba(201, 168, 96, 0.08);
      border-color: rgba(201, 168, 96, 0.2);

      &:hover {
        background: rgba(201, 168, 96, 0.15);
        border-color: rgba(201, 168, 96, 0.4);
      }

      .project-name {
        color: #ffffff;
        font-weight: 700;
      }

      .project-description {
        color: rgba(255, 255, 255, 0.9);
      }

      .project-highlights {
        h4 {
          color: #d4b373;
          font-weight: 600;
        }

        ul li {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }
  }

  .skills-section {
    background: linear-gradient(to bottom, #2c2416 0%, #1a1410 100%);

    .skill-tabs {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);

      // Make tabs more visible in dark mode
      :deep(.q-tab) {
        color: rgba(255, 255, 255, 0.6) !important;
        font-weight: 500;

        &:hover {
          color: rgba(255, 255, 255, 0.9) !important;
          background: rgba(201, 168, 96, 0.15);
        }
      }

      :deep(.q-tab--active) {
        color: #ffffff !important;
        background: rgba(201, 168, 96, 0.25);
        font-weight: 600;
      }

      :deep(.q-tab__indicator) {
        background: #d4b373 !important;
        height: 3px;
      }
    }

    .skill-panels {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .skill-item {
      background: linear-gradient(135deg, rgba(212, 179, 115, 0.08) 0%, rgba(212, 179, 115, 0.15) 100%);
      border-color: rgba(212, 179, 115, 0.25);

      &:hover {
        background: linear-gradient(135deg, rgba(212, 179, 115, 0.12) 0%, rgba(212, 179, 115, 0.2) 100%);
        border-color: rgba(212, 179, 115, 0.4);
        box-shadow: 0 8px 24px rgba(212, 179, 115, 0.25);
      }

      .skill-name {
        color: #ffffff !important;
        font-weight: 600;
      }

      .skill-description {
        color: rgba(255, 255, 255, 0.75) !important;
      }

      .skill-years {
        background: rgba(212, 179, 115, 0.25) !important;
        color: #ffffff !important;
        font-weight: 600;
        border-color: rgba(212, 179, 115, 0.4);
      }

      .skill-progress {
        box-shadow: 0 2px 8px rgba(212, 179, 115, 0.25);
      }
    }
  }

  .experience-section {
    background: #0f1e2d;

    .exp-company {
      color: #d4b373;
      font-weight: 700;
    }

    .exp-description {
      color: rgba(255, 255, 255, 0.9);
    }

    .exp-achievements {
      h5 {
        color: white;
        font-weight: 600;
      }

      ul li {
        color: rgba(255, 255, 255, 0.85);

        &::before {
          color: #d4b373;
        }
      }
    }
  }
}
</style>

