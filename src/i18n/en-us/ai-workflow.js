export default {
  aiWorkflowPage: {
    hero: {
      eyebrow: 'Vibe Coding + SDD',
      title: 'AI Across Portfolio Builds and System Refresh Work',
      subtitle: 'Different models sit in different parts of the workflow. Portfolio builds need speed to take shape. System refresh work needs stability to land well.',
      description: 'The flow starts with SDD so the spec, scenarios, data structure, and acceptance conditions are clear before moving into vibe coding. In portfolio work, Claude Code Opus handles architecture, page planning, and build rhythm before GPT takes over implementation. In client system refresh work, GPT inventories and plans first, Claude Code Sonnet refactors, and GPT returns for review and verification.',
      panelLabel: 'How I Work',
      panelTitle: 'I do not hand the work to AI. I assign AI to the right part of the work.',
      panelBody: 'Each model handles the part that matches its strength, but specification, tradeoffs, tone, and final responsibility are not outsourced. That is what keeps the result authored.',
      signatureLabel: 'What I Care About',
      signatureText: 'The real differentiator is not the model name. It is whether the spec, rhythm, and final judgment are still retained.',
      primaryCta: 'View Workflow',
      secondaryCta: 'See Projects'
    },

    highlights: [
      {
        value: 'Vibe Coding + SDD',
        label: 'Starting Point',
        caption: 'Write the spec first, then open up exploration. Do not start by letting AI guess.'
      },
      {
        value: 'Claude Opus → GPT',
        label: 'Portfolio Flow',
        caption: 'Architecture and page planning first, implementation and polish right after.'
      },
      {
        value: 'GPT → Sonnet → GPT',
        label: 'Refresh Flow',
        caption: 'Inventory first, refactor second, verification last.'
      },
      {
        value: 'Builds + Client Work',
        label: 'Real Context',
        caption: 'The same method is already running across personal builds and client-facing modernization work.'
      }
    ],

    story: {
      eyebrow: 'How I Work',
      title: 'AI is not the contractor. It is one part of the workflow.',
      subtitle: 'The point is not how much AI is involved. The point is knowing what each round should expand and what still needs to be converged by human judgment.',
      quote: 'Models can speed up the path toward an answer. Turning that answer into real product quality still depends on human judgment.',
      chapters: [
        {
          title: 'I turn the brief into specification before the models touch it',
          description: 'Users, page goals, data structure, constraints, and acceptance checks are defined first. That is the SDD layer. It gives every later round a real target instead of vague intent.',
          bullets: [
            'Break user flow, section hierarchy, and interaction logic into usable chunks',
            'Lock business boundaries, data limits, and technical constraints early',
            'Package tone, visual direction, and naming into reusable context'
          ]
        },
        {
          title: 'Then I move into vibe coding and push the work into something visible',
          description: 'Once the context is solid, vibe coding becomes useful instead of messy. It moves layouts, sections, interactions, and component scaffolding out of the blank-page stage quickly.',
          bullets: [
            'Generate first-pass layouts, section directions, and component structure',
            'Test interaction ideas, visual pacing, and naming options fast',
            'Get the work into a state that can be opened, tested, and discussed'
          ]
        },
        {
          title: 'After the first pass, I come back and clean up the architecture',
          description: 'Generated output is not treated as finished. The real work is in naming, state flow, component boundaries, i18n, SEO, readability, and deciding what should be rewritten or removed.',
          bullets: [
            'Refactor information architecture, component responsibility, and data flow',
            'Close gaps in RWD, accessibility, performance, and search semantics',
            'Delete or rewrite generated parts that sound smart but do not hold up'
          ]
        },
        {
          title: 'The last mile is turning speed into delivery quality, not debt',
          description: 'The last step is usually not more prompting. It is checking whether the thing opens well, behaves well, hands off cleanly, and stays maintainable after release.',
          bullets: [
            'Run manual QA across real device and viewport conditions',
            'Finish metadata, structured data, browser, and deployment details',
            'Keep the implementation extensible instead of one-off'
          ]
        }
      ]
    },

    practice: {
      eyebrow: 'Two Tracks',
      title: 'The same AI stack does not serve portfolio builds and system refresh work in the same way',
      subtitle: 'Not every task should go to the same model. Different problem types need different model positions. These are the two most common tracks.',
      closingLabel: 'What I Want To Preserve',
      tracks: [
        {
          eyebrow: 'Portfolio Build',
          title: 'Portfolio work keeps AI inside a build-forward rhythm',
          subtitle: 'This is usually from-zero product work. The structure needs to be clear first so experimentation, visual tone, and pacing can survive the build-out.',
          phases: [
            {
              name: 'Write the spec and scene first',
              model: 'SDD / Human-defined boundaries',
              detail: 'Page goals, use cases, data structure, design tone, and acceptance checks are written down first so later rounds always have something concrete to align against.'
            },
            {
              name: 'Architecture and planning',
              model: 'Claude Code Opus',
              detail: 'Claude Code Opus organizes information architecture, splits sections, thinks through component boundaries, and sequences the build. It is good at turning a loose idea into a workable blueprint.'
            },
            {
              name: 'Feature implementation and build-out',
              model: 'GPT',
              detail: 'Once the structure is clear, GPT keeps building features, interactions, styling, and implementation detail forward. At that point it feels closer to pair programming than one-shot generation.'
            }
          ],
          closing: 'What matters most on this track is not raw speed. It is keeping the work fast without losing the feel of something actually authored.'
        },
        {
          eyebrow: 'System Refresh',
          title: 'System refresh work starts with inventory, moves through refactor, and ends with verification',
          subtitle: 'Refresh work is not the same as creating a clean new page. I need to understand what the old system really looks like, where the risk sits, what can be saved, and what should not be touched blindly.',
          phases: [
            {
              name: 'Inventory and planning first',
              model: 'GPT',
              detail: 'GPT inventories modules, data flow, coupling points, risk areas, and migration order so the messy current state becomes a concrete plan.'
            },
            {
              name: 'Refactor and restructure',
              model: 'Claude Code Sonnet',
              detail: 'Once the inventory is clear, Claude Code Sonnet pushes through the refactor stage, especially when old code needs to be untangled and responsibility needs to be split back into maintainable structure.'
            },
            {
              name: 'Review and verify',
              model: 'GPT',
              detail: 'At the end, GPT returns to review logic, catch omissions, compare risks, and help build a verification checklist so the refresh is not only cleaner, but actually safer.'
            }
          ],
          closing: 'The biggest risk in refresh work is changing a lot without making the system more stable. That is why I deliberately keep the last round for verification.'
        }
      ]
    },

    workflow: {
      eyebrow: 'Daily Rhythm',
      title: 'No matter the track, the underlying rhythm stays similar',
      subtitle: 'The model split changes, but the underlying pace stays consistent: define, expand, converge, then verify.',
      codaLabel: 'Why this rhythm holds up',
      codaText: 'The goal is not AI in every step. The goal is to use AI where it adds leverage. That is what keeps the work less generic and more grounded.',
      steps: [
        {
          title: 'Set the spec first',
          summary: 'Define the request, audience, scenarios, data, and limits first. Without that step, most prompts only scale ambiguity.',
          tools: 'SDD, requirement breakdown, IA notes, acceptance checks',
          outcome: 'A development baseline I can keep checking against'
        },
        {
          title: 'Let the right model open the path',
          summary: 'For portfolio work that means architecture and page planning. For refresh work it means inventory and refactor sequencing. I want the direction clear before I rush implementation.',
          tools: 'Claude Code Opus, GPT, Claude Code Sonnet',
          outcome: 'A vague problem becomes a buildable direction'
        },
        {
          title: 'Build forward and tighten as I go',
          summary: 'Use GPT to keep pushing features, styles, interactions, and fixes forward, but never in a fire-and-forget way. Keep checking whether the structure is drifting.',
          tools: 'GPT, diffs, error context, step-by-step verification',
          outcome: 'Faster implementation without dropping maintainability'
        },
        {
          title: 'Refactor, rewrite, and pull the tone back in',
          summary: 'This is where naming is tightened, components are split, copy is rewritten, and pacing is reshaped so the result feels finished instead of generated.',
          tools: 'Refactor work, naming cleanup, copy convergence, i18n, SEO',
          outcome: 'A result that feels authored rather than assembled'
        },
        {
          title: 'Review and release-check',
          summary: 'Finish RWD, metadata, structured data, browser validation, and delivery checks so the work is not only presentable, but actually ready to hand off.',
          tools: 'Manual QA, GPT review, SEO checks, deployment validation',
          outcome: 'Model-assisted speed becomes real delivery quality'
        }
      ]
    },

    principles: {
      eyebrow: 'Ground Rules',
      title: 'A few rules cannot be loosened',
      subtitle: 'Without these, AI just scales ambiguity earlier and faster.',
      featureLabel: 'The core reminder',
      featureText: 'Models can join many rounds, but they do not get the steering wheel. Final tone, tradeoffs, and responsibility still stay on the human side.',
      items: [
        {
          title: 'Expand first, converge second',
          description: 'Let AI widen the option space first, but do not accept the first answer as the final one.'
        },
        {
          title: 'The prompt is not magic. The spec is the core.',
          description: 'Useful prompting comes from requirement structure, context packaging, and acceptance criteria, not wording tricks.'
        },
        {
          title: 'Every output must be testable',
          description: 'Copy, flows, and code all need to be reviewable, comparable, and fixable. Otherwise the workflow only stacks hallucination.'
        },
        {
          title: 'Style, business context, and responsibility cannot be outsourced',
          description: 'AI can suggest, but what stays, what goes, and what becomes painful to maintain later still needs human judgment.'
        }
      ]
    },

    portfolio: {
      eyebrow: 'Selected Work',
      title: 'Selected Projects',
      subtitle: 'Implementation cases across education, interactive games, and brand websites.',
      noteLabel: 'How to read this section',
      noteText: 'Think of these projects as working notes across different problem types. Education products, games, and brand sites all use AI differently, but each one still had to become something openable, usable, and shippable.',
      groups: {
        educationalWebsites: {
          title: 'Education and Cognitive Training Products',
          subtitle: 'These projects need lots of content variation, interaction rhythm, and careful guidance. AI can help expand the content surface, but the learning experience still needs to be pulled back into one coherent product.',
          items: [
            {
              title: 'Kids Playground (Age 2-6)',
              description: 'A suite of 9 interactive learning games for young children, including color matching, animal cards, number balloons, and achievement mechanics.',
              aiRole: 'AI helped break down rules, expand level copy, explore voice interaction ideas, and widen UI directions, then the flow, pacing, and guidance were pulled back into one learning experience.',
              impact: 'A few isolated game ideas became a more complete educational product with clearer progression and repeatable use.',
              tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'Web Speech API'],
              image: 'https://chenpoyu.github.io/games-kids-playground/og-image.png',
              url: 'https://chenpoyu.github.io/games-kids-playground/',
              status: 'live'
            },
            {
              title: 'SilverVibe — Senior Cognitive Training Platform',
              description: 'A cognitive training platform for older adults featuring 16 games, voice support, and accessibility-conscious interaction patterns.',
              aiRole: 'AI helped expand game directions, prompt language, and draft copy, then readability, pacing, and accessibility were tuned back around senior users.',
              impact: 'The project could move faster without sacrificing usability in a space where interaction burden matters a lot.',
              tags: ['React 19', 'Vite', 'SCSS', 'Web Speech API', 'Web Audio API', 'WCAG 2.1 AA'],
              image: 'https://chenpoyu.github.io/games-sliver-vibe/og-banner.svg',
              url: 'https://chenpoyu.github.io/games-sliver-vibe/',
              status: 'live'
            }
          ]
        },
        games: {
          title: 'Interactive Games and Theme Projects',
          subtitle: 'Games are a good place to test vibe coding speed, but the thing that still decides whether the work lands is pacing, feedback, and control feel.',
          items: [
            {
              title: 'Mazu Festival Lucky Draw',
              description: 'An interactive lucky draw experience blending numerology, temple fair aesthetics, card flipping, and animated visual atmosphere.',
              aiRole: 'AI helped explore narrative tone, draw copy, and visual mood directions quickly, then the ritual feel, pacing, and interaction flow were aligned by hand.',
              impact: 'The result became a more memorable themed experience instead of a standard lucky draw page.',
              tags: ['React 19', 'Vite', 'Framer Motion', 'SASS'],
              image: 'https://chenpoyu.github.io/games-lottery/og-image.png',
              url: 'https://chenpoyu.github.io/games-lottery/',
              status: 'live'
            },
            {
              title: 'Tank Battle',
              description: 'A browser remake of a classic tank game with keyboard and touch controls, AI enemies, levels, and 8-bit feedback.',
              aiRole: 'AI helped with level rhythm ideation, control hints, and technical direction, then collisions, responsiveness, controls, and game feel were handled directly.',
              impact: 'It moved from concept to replayable browser game faster without giving up the parts that make it feel right.',
              tags: ['React 19', 'Vite', 'Canvas', 'Web Audio API', 'RWD'],
              image: 'https://chenpoyu.github.io/games-tank-battle/og-image.png',
              url: 'https://chenpoyu.github.io/games-tank-battle/',
              status: 'live'
            },
            {
              title: 'Retro Games Collection',
              description: 'A platform concept that brings several classic web games together with unified entry points, rankings, and achievement structure.',
              aiRole: 'AI is helping frame information architecture, game list strategy, and content scaffolding while the product direction is still being narrowed.',
              impact: 'It turns scattered ideas into something that can grow as a product instead of staying a one-off collection page.',
              tags: ['React', 'Canvas', 'LocalStorage', 'RWD', 'Web Audio'],
              image: '',
              url: '',
              status: 'wip'
            }
          ]
        },
        customWebsites: {
          title: 'Brand Websites and Business Pages',
          subtitle: 'Brand work makes the AI-human split very obvious. AI can speed up sitemap thinking, section structure, and copy variants, but tone and business pacing still need deliberate direction.',
          items: [
            {
              title: 'Personal Brand Website (This Site)',
              description: 'My personal site built with Quasar + Vue 3, combining bilingual content, dark mode, SEO, and technical storytelling.',
              aiRole: 'AI helped expand layout directions, bilingual drafts, and section structure, then the content was rewired until it sounded closer to the actual working method.',
              impact: 'The site became more than a resume extension. It now explains the method, perspective, and delivery approach more clearly.',
              tags: ['Vue 3', 'Quasar', 'i18n', 'Dark Mode'],
              image: 'https://chenpoyu.github.io/images/og-site.png',
              url: '/',
              status: 'live'
            },
            {
              title: 'Custom Personal Website',
              description: 'A direction for freelancer-focused brand websites covering service framing, portfolio content, testimonials, and conversion flow.',
              aiRole: 'AI is used to generate structure, copy skeletons, and SEO angles first, then the messaging is reshaped around a specific target audience.',
              impact: 'Proposal-stage exploration moves faster and clients can review stronger concepts earlier.',
              tags: ['Vue 3', 'Quasar', 'SCSS', 'RWD', 'SEO'],
              image: '',
              url: '',
              status: 'wip'
            },
            {
              title: 'Custom Business Website',
              description: 'A business website direction for education teams and SMEs that combines service information, product framing, and conversion-oriented pages.',
              aiRole: 'AI is used to widen sitemaps, modules, and copy blocks first, then the structure is narrowed into a real commercial user journey.',
              impact: 'It shortens the distance between stakeholder interviews and a proposal that already feels product-shaped.',
              tags: ['Vue 3', 'Quasar', 'CMS', 'i18n', 'RWD'],
              image: '',
              url: '',
              status: 'wip'
            }
          ]
        }
      }
    },

    seo: {
      collectionName: 'AI Workflow - Poyu Chen',
      description: 'A narrative page about how AI is used across portfolio builds and system refresh work, including vibe coding, SDD, model role-splitting, and real project examples.',
      breadcrumbName: 'AI Workflow'
    },

    labels: {
      aiRole: 'How AI Was Used',
      impact: 'Delivery Value',
      tools: 'Collaboration Inputs',
      outcome: 'Output of the Step'
    },

    status: {
      live: 'Live',
      coming: 'Planned',
      wip: 'Iterating'
    },

    cta: {
      visit: 'Open Project',
      source: 'Source Code',
      comingSoon: 'Coming Soon'
    }
  }
}
