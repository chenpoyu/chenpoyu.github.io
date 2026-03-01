export default {
  portfolioPage: {
    hero: {
      title: 'Portfolio',
      subtitle: 'A curated collection of interactive games, brand websites, and custom projects showcasing diverse technical skills'
    },

    sections: {
      educationalWebsites: {
        title: '🎓 Educational / Brain Training Websites',
        subtitle: 'Complete educational learning and brain training websites',
        items: [
          {
            title: 'Kids Playground (Age 2-6)',
            description: '9 interactive learning games for children aged 2-6, including color matching, animal puzzles, and number balloons. Features multi-student system, learning path map, and achievement badges.',
            tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'Web Speech API'],
            image: 'https://chenpoyu.github.io/games-kids-playground/og-image.png',
            url: 'https://chenpoyu.github.io/games-kids-playground/',
            status: 'live'
          },
          {
            title: 'SilverVibe — Senior Cognitive Training Platform',
            description: 'A frontend-only cognitive training game platform designed for seniors aged 70+. Features 16 brain games across memory, attention, logic, language, hand-eye coordination, and wellness. Includes passport-style UI, voice-assisted reading, invisible behavior tracking, and WCAG 2.1 AA accessibility compliance.',
            tags: ['React 19', 'Vite', 'SCSS', 'Web Speech API', 'Web Audio API', 'WCAG 2.1 AA'],
            image: 'https://chenpoyu.github.io/games-sliver-vibe/og-banner.svg',
            url: 'https://chenpoyu.github.io/games-sliver-vibe/',
            status: 'live'
          }
        ]
      },

      games: {
        title: '🎮 Game Portfolio',
        subtitle: 'Retro classics and special themed game projects',
        items: [
          {
            title: 'Mazu Festival Lucky Draw',
            description: 'An interactive lottery system combining Five Elements numerology with temple fair aesthetics. Features 4-round lottery, fortune readings, flame particle effects, and card flip animations.',
            tags: ['React 19', 'Vite', 'Framer Motion', 'SASS'],
            image: 'https://chenpoyu.github.io/games-lottery/og-image.png',
            url: 'https://chenpoyu.github.io/games-lottery/',
            status: 'live'
          },
          {
            title: 'Tank Battle',
            description: 'A web remake of the classic tank battle game with keyboard and mobile touch controls. Features responsive canvas, AI enemies, level system, and 8-bit sound effects.',
            tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'RWD'],
            image: 'https://chenpoyu.github.io/games-tank-battle/og-image.png',
            url: 'https://chenpoyu.github.io/games-tank-battle/',
            status: 'live'
          },
          {
            title: 'Retro Games Collection',
            description: 'A comprehensive gaming platform featuring classic web games including Memory Cards, Typing Speed Test, Snake, and more. Features game menu, leaderboards, and achievement system.',
            tags: ['React', 'Canvas', 'LocalStorage', 'RWD', 'Web Audio'],
            image: '',
            url: '',
            status: 'wip'
          }
        ]
      },

      customWebsites: {
        title: '🌐 Custom Brand Websites',
        subtitle: 'Professional websites tailored for individuals and businesses',
        items: [
          {
            title: 'Personal Brand Website (This Site)',
            description: 'The site you\'re browsing right now! Built with Quasar + Vue 3, featuring dark mode and i18n support.',
            tags: ['Vue 3', 'Quasar', 'i18n', 'Dark Mode'],
            image: 'https://chenpoyu.github.io/images/og-site.png',
            url: '/',
            status: 'live'
          },
          {
            title: 'Custom Personal Website',
            description: 'A refined personal brand website for freelancers, featuring portfolio showcase, service introduction, client testimonials, and contact forms. Supports responsive design and SEO optimization.',
            tags: ['Vue 3', 'Quasar', 'SCSS', 'RWD', 'SEO'],
            image: '',
            url: '',
            status: 'wip'
          },
          {
            title: 'Custom Business Website',
            description: 'A commercial website designed for educational institutions, offering course introduction, faculty display, online registration, and event information. Supports multi-language and CMS backend.',
            tags: ['Vue 3', 'Quasar', 'CMS', 'i18n', 'RWD'],
            image: '',
            url: '',
            status: 'wip'
          }
        ]
      }
    },

    status: {
      live: 'Live',
      coming: 'Coming Soon',
      wip: 'In Development'
    },

    cta: {
      visit: 'Visit',
      source: 'Source Code',
      comingSoon: 'Coming Soon'
    }
  }
}
