<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-avatar-container">
          <img
            src="~/assets/poyu.jpg"
            alt="Poyu Chen"
            class="hero-avatar"
          />
        </div>
        <h1 class="hero-title">{{ $t('hero.title') }}</h1>
        <h2 class="hero-subtitle">
          <span>{{ $t('hero.subtitle') }}</span>
        </h2>
        <p class="hero-description">{{ $t('hero.description') }}</p>
        <div class="hero-cta">
          <q-btn
            unelevated
            color="primary"
            size="lg"
            :label="$t('hero.cta_primary')"
            @click="scrollToContact"
            class="q-mr-md q-mb-md"
            icon="email"
          />
          <q-btn
            outline
            color="white"
            size="lg"
            :label="$t('hero.cta_secondary')"
            to="/profile"
            icon="person"
            class="q-mb-md"
          />
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">{{ $t('values.title') }}</h2>
        <div class="values-grid">
          <q-card
            v-for="(value, key) in values"
            :key="key"
            class="value-card"
            flat
            bordered
          >
            <q-card-section class="text-center">
              <q-icon :name="value.icon" size="72px" :color="value.color" />
              <h3 class="value-title">{{ $t(value.title) }}</h3>
              <p class="value-description">{{ $t(value.description) }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- CTA to Profile -->
    <section class="cta-profile-section">
      <div class="container text-center">
        <h3 class="cta-title">{{ $t('profile_cta.title') }}</h3>
        <p class="cta-description">{{ $t('profile_cta.description') }}</p>
        <q-btn
          unelevated
          color="primary"
          size="lg"
          :label="$t('profile_cta.button')"
          to="/profile"
          icon="account_circle"
          class="q-mt-md"
        />
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title text-white">{{ $t('services.title') }}</h2>
        <p class="section-subtitle text-white">{{ $t('services.subtitle') }}</p>
        <div class="services-grid">
          <q-card
            v-for="(service, key) in services"
            :key="key"
            class="service-card"
            flat
          >
            <q-card-section>
              <div class="service-header">
                <q-icon :name="service.icon" size="56px" :color="service.color" />
              </div>
              <h3 class="service-title">{{ $t(service.title) }}</h3>
              <p class="service-description">{{ $t(service.description) }}</p>
              <q-separator class="q-my-md" />
              <ul class="service-features">
                <li v-for="(feature, idx) in service.features" :key="idx">
                  <q-icon name="check_circle" size="18px" color="positive" />
                  {{ $t(feature) }}
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- CTA to Services Page -->
    <section class="cta-services-section">
      <div class="container text-center">
        <h3 class="cta-title">{{ $t('services_cta.title') }}</h3>
        <p class="cta-description">{{ $t('services_cta.description') }}</p>
        <q-btn
          unelevated
          color="accent"
          size="lg"
          :label="$t('services_cta.button')"
          to="/work"
          icon="work"
          class="q-mt-md"
        />
      </div>
    </section>

    <!-- Projects Section - Moved to Profile Page -->
    <!--
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>

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
                <h4>亮點 / Highlights:</h4>
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
    -->

    <!-- Skills Section with Progress Bars - Moved to Profile Page -->
    <!--
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

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
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-years">{{ skill.years }} {{ $t('tech.years_exp') }}</span>
                </div>
                <q-linear-progress
                  :value="skill.level / 100"
                  size="12px"
                  color="primary"
                  class="skill-progress"
                />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </section>
    -->

    <!-- Experience Timeline - Moved to Profile Page -->
    <!--
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <p class="section-subtitle">{{ $t('experience.subtitle') }}</p>

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
                <h5>主要成就 / Achievements:</h5>
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
    -->

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <h2 class="section-title">{{ $t('stats_section.title') }}</h2>
        <p class="section-subtitle">{{ $t('stats_section.subtitle') }}</p>
        <div class="stats-grid">
          <div v-for="(stat, key) in stats" :key="key" class="stat-item">
            <q-icon :name="stat.icon" size="56px" :color="stat.color" />
            <div class="stat-number">
              <CounterAnimation :value="stat.number" :suffix="stat.suffix || ''" />
            </div>
            <div class="stat-label">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA to Blog -->
    <section class="cta-blog-section">
      <div class="container text-center">
        <h3 class="cta-title">{{ $t('blog_cta.title') }}</h3>
        <p class="cta-description">{{ $t('blog_cta.description') }}</p>
        <q-btn
          unelevated
          color="secondary"
          size="lg"
          :label="$t('blog_cta.button')"
          @click="openBlog"
          icon="article"
          class="q-mt-md"
        />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title text-white text-center">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle text-white text-center q-mb-xl">{{ $t('contact.subtitle') }}</p>

        <!-- Contact Form -->
        <div class="contact-form-container">
          <ContactForm formspree-id="xnjbapdg" />
        </div>

        <!-- Alternative Contact Methods -->
        <div class="text-center q-mt-xl">
          <p class="text-white q-mb-md">{{ $t('contact.or') }}</p>
          <div class="contact-buttons">
            <q-btn
              unelevated
              color="white"
              text-color="dark"
              size="lg"
              icon="email"
              :label="$t('contact.email')"
              @click="sendEmail"
              class="q-ma-sm"
            />
            <q-btn
              unelevated
              color="white"
              text-color="dark"
              size="lg"
              icon="fab fa-github"
              :label="$t('contact.github')"
              @click="openGitHub"
              class="q-ma-sm"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { personSchema, professionalServiceSchema, websiteSchema } from 'src/utils/structuredData'
import CounterAnimation from 'components/CounterAnimation.vue'
import ContactForm from 'components/ContactForm.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    CounterAnimation,
    ContactForm
  },

  setup() {
    const skillTab = ref(0)

    // Add structured data for SEO
    onMounted(() => {
      // Add Person schema
      const personScript = document.createElement('script')
      personScript.type = 'application/ld+json'
      personScript.text = JSON.stringify(personSchema)
      document.head.appendChild(personScript)

      // Add Professional Service schema
      const serviceScript = document.createElement('script')
      serviceScript.type = 'application/ld+json'
      serviceScript.text = JSON.stringify(professionalServiceSchema)
      document.head.appendChild(serviceScript)

      // Add Website schema
      const websiteScript = document.createElement('script')
      websiteScript.type = 'application/ld+json'
      websiteScript.text = JSON.stringify(websiteSchema)
      document.head.appendChild(websiteScript)
    })

    const values = {
      architecture: {
        icon: 'rocket_launch',
        color: 'deep-orange',
        title: 'values.items.architecture.title',
        description: 'values.items.architecture.description'
      },
      problem_solving: {
        icon: 'verified',
        color: 'teal',
        title: 'values.items.problem_solving.title',
        description: 'values.items.problem_solving.description'
      },
      team_leadership: {
        icon: 'bolt',
        color: 'amber',
        title: 'values.items.team_leadership.title',
        description: 'values.items.team_leadership.description'
      },
      continuous_learning: {
        icon: 'trending_up',
        color: 'green',
        title: 'values.items.continuous_learning.title',
        description: 'values.items.continuous_learning.description'
      }
    }

    const services = {
      architecture: {
        icon: 'architecture',
        color: 'cyan',
        title: 'services.items.architecture.title',
        description: 'services.items.architecture.description',
        features: [
          'services.items.architecture.features.0',
          'services.items.architecture.features.1',
          'services.items.architecture.features.2',
          'services.items.architecture.features.3'
        ]
      },
      consulting: {
        icon: 'code',
        color: 'blue',
        title: 'services.items.consulting.title',
        description: 'services.items.consulting.description',
        features: [
          'services.items.consulting.features.0',
          'services.items.consulting.features.1',
          'services.items.consulting.features.2',
          'services.items.consulting.features.3'
        ]
      },
      team_building: {
        icon: 'groups',
        color: 'purple',
        title: 'services.items.team_building.title',
        description: 'services.items.team_building.description',
        features: [
          'services.items.team_building.features.0',
          'services.items.team_building.features.1',
          'services.items.team_building.features.2',
          'services.items.team_building.features.3'
        ]
      }
    }

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
      }
    }

    const skillCategories = [
      {
        name: 'skills.categories.0.name',
        icon: 'web',
        items: [
          { name: 'Vue.js', level: 90, years: 6 },
          { name: 'React', level: 90, years: 5 },
          { name: 'TypeScript', level: 80, years: 3 }
        ]
      },
      {
        name: 'skills.categories.1.name',
        icon: 'dns',
        items: [
          { name: 'Java/Spring', level: 95, years: 13 },
          { name: '.NET Core/C#', level: 90, years: 6 },
          { name: 'PHP/Laravel', level: 80, years: 8 }
        ]
      },
      {
        name: 'skills.categories.2.name',
        icon: 'phone_iphone',
        items: [
          { name: 'iOS/Swift', level: 70, years: 2 },
          { name: 'Flutter', level: 60, years: 2 }
        ]
      },
      {
        name: 'skills.categories.3.name',
        icon: 'storage',
        items: [
          { name: 'PostgreSQL', level: 95, years: 10 },
          { name: 'SQL Server', level: 95, years: 10 },
          { name: 'MySQL', level: 90, years: 12 },
          { name: 'Redis', level: 90, years: 10 }
        ]
      },
      {
        name: 'skills.categories.4.name',
        icon: 'cloud',
        items: [
          { name: 'AWS', level: 90, years: 5 },
          { name: 'Azure', level: 85, years: 3 },
          { name: 'Docker', level: 90, years: 3 }
        ]
      }
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

    const stats = {
      years: {
        icon: 'work_history',
        color: 'primary',
        number: 13,
        suffix: '+',
        label: 'stats.years'
      },
      projects: {
        icon: 'engineering',
        color: 'secondary',
        number: 100,
        suffix: '+',
        label: 'stats.projects'
      },
      team: {
        icon: 'groups',
        color: 'accent',
        number: 40,
        suffix: '+',
        label: 'stats.team'
      },
      technologies: {
        icon: 'code',
        color: 'positive',
        number: 20,
        suffix: '+',
        label: 'stats.technologies'
      }
    }

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
      window.open('https://github.com/chenpoyu', '_blank')
    }

    const openBlog = () => {
      window.location.href = 'https://chenpoyu.github.io/my-blog/'
    }

    return {
      skillTab,
      values,
      services,
      projects,
      skillCategories,
      experience,
      stats,
      scrollToContact,
      sendEmail,
      openGitHub,
      openBlog
    }
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  // Hero Section - 深海軍藍漸層
  .hero-section {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:
      linear-gradient(135deg, rgba(10, 25, 40, 0.98) 0%, rgba(10, 37, 64, 0.98) 50%, rgba(26, 53, 82, 0.98) 100%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a1929;stop-opacity:0.4"/><stop offset="100%" style="stop-color:%23c9a860;stop-opacity:0.1"/></linearGradient></defs><rect width="1200" height="600" fill="url(%23g)"/></svg>');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background:
        radial-gradient(circle at 30% 50%, rgba(201, 168, 96, 0.08) 0%, transparent 25%),
        radial-gradient(circle at 70% 50%, rgba(26, 26, 26, 0.05) 0%, transparent 25%),
        radial-gradient(circle at 50% 80%, rgba(201, 168, 96, 0.05) 0%, transparent 30%);
      animation: shimmer 20s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(10px, 10px) rotate(5deg); }
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      padding: 2rem 2rem 2.5rem;
      max-width: 1000px;

      .hero-avatar-container {
        width: 220px;
        max-height: 320px;
        margin: 0 auto 2rem;
        border-radius: 16px;
        overflow: hidden;
        border: 3px solid #c9a860;
        box-shadow:
          0 0 0 6px rgba(201, 168, 96, 0.15),
          0 16px 48px rgba(0, 0, 0, 0.5),
          0 0 30px rgba(201, 168, 96, 0.2);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          transform: scale(1.05);
          box-shadow:
            0 0 0 6px rgba(201, 168, 96, 0.25),
            0 24px 60px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(201, 168, 96, 0.3);
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }

      .hero-title {
        font-size: 4.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        letter-spacing: 0.02em;
        background: linear-gradient(135deg, #e8e6e3 0%, #f4f1ea 25%, #c9a860 50%, #d4b373 75%, #e8e6e3 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmerText 3s linear infinite;
        text-shadow: 0 0 40px rgba(201, 168, 96, 0.3);
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
        word-spacing: 0.15em;
        hyphens: none;

        @keyframes shimmerText {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @media (max-width: 600px) {
          font-size: 2.4rem;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @media (max-width: 400px) {
          font-size: 2rem;
        }
      }

      .hero-subtitle {
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 2rem;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: rgba(255, 255, 255, 0.95);
        white-space: pre-wrap;
        word-break: keep-all;

        @media (max-width: 600px) {
          font-size: 1.6rem;
        }
      }

      .hero-description {
        font-size: 1.4rem;
        line-height: 2;
        margin-bottom: 3rem;
        letter-spacing: 0.005em;
        color: rgba(255, 255, 255, 0.85);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 600px) {
          font-size: 1.15rem;
        }
      }

      .hero-cta {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    font-size: 3.2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 1.3;
    letter-spacing: 0.02em;
    color: #1a1a1a;

    @media (max-width: 600px) {
      font-size: 2.4rem;
    }
  }

  .section-subtitle {
    font-size: 1.45rem;
    text-align: center;
    margin-bottom: 3.5rem;
    opacity: 0.85;
    line-height: 1.8;
    letter-spacing: 0.005em;
  }

  // Values Section
  .values-section {
    padding: 5rem 0;
    background:
      linear-gradient(135deg, rgba(248, 247, 245, 0.95) 0%, rgba(240, 237, 233, 0.95) 100%),
      repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(201, 168, 96, 0.015) 50px, rgba(201, 168, 96, 0.015) 100px);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201, 168, 96, 0.2), transparent);
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
      max-width: 900px;
      margin: 0 auto;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .value-card {
        background: linear-gradient(135deg, #ffffff 0%, #fdfcfa 100%);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 16px;
        border: 1px solid rgba(201, 168, 96, 0.12);
        box-shadow:
          0 2px 16px rgba(0, 0, 0, 0.06),
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
          background: linear-gradient(90deg, transparent, rgba(201, 168, 96, 0.4), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        &:hover {
          transform: translateY(-10px);
          box-shadow:
            0 16px 40px rgba(0, 0, 0, 0.12),
            0 0 0 1px rgba(201, 168, 96, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          border-color: rgba(201, 168, 96, 0.25);

          &::before {
            opacity: 1;
          }
        }

        .value-title {
          font-size: 1.9rem;
          font-weight: 600;
          margin: 2rem 0 1.2rem;
          letter-spacing: 0.01em;
          color: #1a1a1a;
          line-height: 1.4;
        }

        .value-description {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #555;
          letter-spacing: 0.005em;
        }
      }
    }
  }

  // Services Section - 深海軍藍
  .services-section {
    padding: 5rem 0;
    background:
      linear-gradient(135deg, rgba(26, 58, 82, 0.98) 0%, rgba(26, 77, 109, 0.98) 50%, rgba(45, 95, 125, 0.98) 100%),
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:
        radial-gradient(circle at 20% 30%, rgba(201, 168, 96, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(212, 179, 115, 0.05) 0%, transparent 40%);
      animation: float 15s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, -20px); }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 2.5rem;

      .service-card {
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%);
        backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(201, 168, 96, 0.2);
        border-radius: 20px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        box-shadow:
          0 6px 24px rgba(0, 0, 0, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.15),
          0 0 0 1px rgba(201, 168, 96, 0.08);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(201, 168, 96, 0.4), rgba(212, 179, 115, 0.5), rgba(201, 168, 96, 0.4), transparent);
          opacity: 0.5;
        }

        &::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(201, 168, 96, 0.06) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        &:hover {
          transform: translateY(-8px);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.09) 100%);
          box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(201, 168, 96, 0.3),
            0 0 30px rgba(201, 168, 96, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          border-color: rgba(201, 168, 96, 0.4);

          &::after {
            opacity: 1;
          }
        }

        .service-header {
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.3rem;
          line-height: 1.4;
          letter-spacing: 0.01em;
          color: white;
        }

        .service-description {
          font-size: 1.2rem;
          line-height: 1.9;
          margin-bottom: 1.5rem;
          letter-spacing: 0.005em;
          color: rgba(255, 255, 255, 0.9);
        }

        .service-features {
          list-style: none;
          padding: 0;

          li {
            padding: 0.9rem 0;
            display: flex;
            align-items: flex-start;
            gap: 0.85rem;
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.12rem;
            line-height: 1.8;
            letter-spacing: 0.005em;
          }
        }
      }
    }
  }

  // Projects Section
  .projects-section {
    padding: 8rem 0;
    background: white;

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
        border: 2px solid #e0e0e0;

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: var(--q-primary);
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
          color: #1a1a2e;
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
            color: #4a3829;
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

  // Skills Section with Tabs
  .skills-section {
    padding: 8rem 0;
    background: linear-gradient(to bottom, #ede8e3 0%, #f5f3f0 100%);

    .skill-tabs {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      margin-bottom: 2rem;
    }

    .skill-panels {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .skills-list {
      display: grid;
      gap: 2rem;
    }

    .skill-item {
      .skill-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;

        .skill-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #4a3829;
        }

        .skill-years {
          font-size: 0.95rem;
          color: #666;
          background: #f5f5f5;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
        }
      }

      .skill-progress {
        border-radius: 6px;
      }
    }
  }

  // Experience Timeline
  .experience-section {
    padding: 8rem 0;
    background: white;

    .experience-timeline {
      max-width: 900px;
      margin: 0 auto;
      padding-top: 2rem;
    }

    .exp-content {
      .exp-company {
        font-size: 1.3rem;
        font-weight: 600;
        color: #1a4d6d;
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
          color: #4a3829;
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
              color: var(--q-primary);
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  // Stats Section - 淺色背景讓圖示更明顯
  .stats-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8f7f5 0%, #ffffff 100%);

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 3rem;

      .stat-item {
        text-align: center;
        padding: 2rem;
        background: rgba(201, 168, 96, 0.05);
        border-radius: 16px;
        border: 1px solid rgba(201, 168, 96, 0.15);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-8px);
          background: rgba(201, 168, 96, 0.1);
          border-color: rgba(201, 168, 96, 0.3);
        }

        .q-icon {
          color: #c9a860 !important;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 1rem 0;
        }

        .stat-label {
          font-size: 1.2rem;
          color: #555;
          font-weight: 500;
        }
      }
    }
  }

  // Contact Section
  .contact-section {
    padding: 8rem 0;
    background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);

    .contact-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 3rem;
    }
  }

  // CTA Sections
  .cta-profile-section,
  .cta-services-section,
  .cta-blog-section {
    padding: 4rem 0;

    .cta-title {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1a1a1a;
    }

    .cta-description {
      font-size: 1.2rem;
      color: #555;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .cta-profile-section {
    background: linear-gradient(135deg, #f8f7f5 0%, #ffffff 100%);
  }

  .cta-services-section {
    background: linear-gradient(135deg, #ffffff 0%, #f8f7f5 100%);
  }

  .cta-blog-section {
    background: linear-gradient(135deg, #f0ede9 0%, #f8f7f5 100%);
  }
}

// Dark mode support - Enhanced contrast and visibility
.body--dark {
  .home-page {
    .section-title {
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.9);
    }

    .values-section {
      background: linear-gradient(to bottom, #1a1410 0%, #2c2416 100%);

      .value-card {
        background: rgba(139, 111, 71, 0.12);
        border-color: rgba(201, 162, 109, 0.2);

        &:hover {
          background: rgba(139, 111, 71, 0.18);
          border-color: rgba(201, 162, 109, 0.3);
        }

        .value-title {
          color: #ffffff;
          font-weight: 700;
        }

        .value-description {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }

    .stats-section {
      background: linear-gradient(135deg, #1a1410 0%, #2c2416 100%);

      .stat-item {
        background: rgba(201, 168, 96, 0.1);
        border-color: rgba(201, 168, 96, 0.25);

        &:hover {
          background: rgba(201, 168, 96, 0.15);
          border-color: rgba(201, 168, 96, 0.4);
        }

        .stat-number {
          color: #ffffff;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }

    .stats-section {
      background: linear-gradient(135deg, #1a1410 0%, #2c2416 100%);

      .section-title {
        color: #ffffff;
      }

      .section-subtitle {
        color: rgba(255, 255, 255, 0.85);
      }

      .stat-item {
        background: rgba(201, 168, 96, 0.1);
        border-color: rgba(201, 168, 96, 0.25);

        &:hover {
          background: rgba(201, 168, 96, 0.15);
          border-color: rgba(201, 168, 96, 0.4);
        }

        .stat-number {
          color: #ffffff;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }

    .cta-profile-section,
    .cta-services-section,
    .cta-blog-section {
      .cta-title {
        color: #ffffff;
      }

      .cta-description {
        color: rgba(255, 255, 255, 0.85);
      }
    }

    .cta-profile-section {
      background: linear-gradient(135deg, #1a1410 0%, #2c2416 100%);
    }

    .cta-services-section {
      background: linear-gradient(135deg, #0d0d0d 0%, #1a1410 100%);
    }

    .cta-blog-section {
      background: linear-gradient(135deg, #2c2416 0%, #1a1410 100%);
    }

    .projects-section {
      background: #0f1e2d;

      .project-card {
        background: rgba(26, 77, 109, 0.15);
        border-color: rgba(45, 95, 125, 0.3);

        &:hover {
          background: rgba(26, 77, 109, 0.25);
          border-color: rgba(45, 95, 125, 0.5);
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
            color: #ffffff;
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

      .skill-tabs, .skill-panels {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
      }

      .skill-name {
        color: #ffffff !important;
        font-weight: 600;
      }

      .skill-years {
        background: rgba(255, 255, 255, 0.15) !important;
        color: rgba(255, 255, 255, 0.9) !important;
        font-weight: 500;
      }
    }

    .experience-section {
      background: #0f1e2d;

      .exp-company {
        color: #6a9ab5;
        font-weight: 700;
      }

      .exp-description {
        color: rgba(255, 255, 255, 0.9);
      }

      .exp-achievements {
        h5 {
          color: white;
        }

        li {
          color: rgba(255, 255, 255, 0.7);
        }
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

@media (max-width: 768px) {
  .contact-form-container {
    padding: 0 10px;
  }
}
</style>
