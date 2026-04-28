export default {
  techarch: {
    hero: {
      eyebrow: 'Architecture Cases',
      title: 'The systems that cannot afford to break usually need the clearest intervention',
      titleLines: ['Systems that cannot afford to break', 'usually need the clearest intervention'],
      subtitle: 'Identity integration, retail operations, and connected-service platforms are the kinds of systems this work most often supports.',
      description: 'The challenge is usually not the technology alone. It is blurred boundaries, unstable data flow, and delivery pressure arriving at the same time.',
      note: 'The three domains below show where this kind of intervention tends to matter most.',
      badges: ['Architecture Advisory', 'System Integration', 'Delivery-Critical Design'],
      proof: [
        {
          title: 'When I Step In',
          description: 'Usually when integration starts to jam or launch pressure is rising faster than the structure can support.'
        },
        {
          title: 'What I Focus On',
          description: 'System responsibility, data flow, integration shape, and the paths that carry the most risk.'
        },
        {
          title: 'What Should Change',
          description: 'Not just the diagram, but the platform itself becoming easier to run, extend, and keep shipping on.'
        }
      ],
      panelEyebrow: 'Core Work Scope',
      panelTitle: 'Three platform types where this work shows up most often',
      panelNote: 'Start with the domain, then look at the kind of structure and risk that usually needs to be tightened first.',
      panelPoints: ['Reset system boundaries and ownership clearly', 'Stabilize data flow, integration shape, and high-risk paths first', 'Turn architecture judgment into an execution plan the team can actually follow'],
      primaryCta: 'See Services',
      secondaryCta: 'View AI Workflow'
    },
    positioning: {
      eyebrow: 'When Teams Usually Call Me In',
      title: 'When teams need this kind of intervention',
      titleLines: ['When teams need', 'this kind of intervention'],
      subtitle: 'Usually not at the start, but when the system is already tangled, risky, or too important to keep patching around.',
      items: [
        {
          title: 'The system works, but every change is getting harder',
          description: 'Services, data flow, and responsibility already exist, but each new feature adds more confusion and the team stops knowing where to make the right change.'
        },
        {
          title: 'Cross-team or cross-system integration is starting to jam',
          description: 'Once identity, commerce, device, or operations flow start to depend on each other, the problem is no longer one API. It becomes a structure problem.'
        },
        {
          title: 'Launch or scale is close, but the structure is still unstable',
          description: 'At that point the work is not adding more features. It is reducing risk on key paths and tightening system boundaries before growth makes the cost worse.'
        }
      ]
    },
    casesIntro: {
      eyebrow: 'Case Studies',
      title: 'Three system domains where this work matters most',
      titleLines: ['Three system domains', 'where this work matters most'],
      subtitle: 'See the structure first, then the key issues, design choices, and outcomes.'
    },
    cases: {
      iotPlatform: {
        kicker: 'Automotive / Connected Service',
        title: 'Connected Vehicle Event Processing And Remote Service Platform',
        heroFit: 'A strong fit for systems built around device events, alerts, realtime state, and historical data.',
        summary: 'The hard part is not data intake. It is separating event flow, rules, notifications, and storage clearly enough to operate long term.',
        contextTitle: 'Typical Situation',
        context: 'When device state, alerts, history, and operations are mixed together, the platform usually gets harder to debug and extend over time.',
        roleTitle: 'Primary Focus',
        role: 'The work centered on clarifying event flow, service boundaries, storage strategy, and how operations should connect to the platform.',
        decisionsTitle: 'Key Design Decisions',
        decisions: [
          'Separated device intake, API handling, orchestration, and storage into different responsibility layers',
          'Used AWS Step Functions for multi-step flows instead of embedding the whole process in one API service',
          'Used Redis, PostgreSQL, and S3 for realtime state, operational data, and historical data respectively'
        ],
        outcomesTitle: 'What Changed',
        outcomes: [
          'Event paths became easier to reason about, reducing debugging and rule-adjustment cost',
          'New device types and notification rules could be added without rewriting the entire flow',
          'Both operations and engineering could understand system status through the same data model'
        ],
        stackTitle: 'Key Modules',
        stack: ['API Gateway', 'Backend API', 'AWS Step Functions', 'Redis', 'PostgreSQL', 'AWS S3'],
        diagramTitle: 'System Structure',
        diagramCaption: 'The goal is to separate API handling, orchestration, realtime state, and historical storage so every problem does not collapse into one layer.'
      },
      memberIdentity: {
        kicker: 'Identity / Membership Platform',
        title: 'Multi-brand Membership Center And SSO Integration Platform',
        heroFit: 'A strong fit for cross-brand accounts, token flow, permissions, and centralized membership logic.',
        summary: 'The hard part is not the login screen. It is making API Gateway, JWT validation, Redis-backed state, and member data work together cleanly.',
        contextTitle: 'Typical Situation',
        context: 'Once member data fragments, permissions drift, and token flow gets messy, both user experience and governance start to break down.',
        roleTitle: 'Primary Focus',
        role: 'The work centered on Gateway JWT validation, Redis-backed validation state, member data direction, and the cross-brand integration model.',
        decisionsTitle: 'Key Design Decisions',
        decisions: [
          'Separated Gateway JWT validation from backend member-data handling so authorization logic did not scatter',
          'Used Redis to support validation state and reduce repeated processing on every request',
          'Built cross-brand login on one validation model instead of patching sync logic inside each app'
        ],
        outcomesTitle: 'What Changed',
        outcomes: [
          'Login experience became more consistent across brands and integration cost dropped',
          'New brands and services could be added on top of the same governance model',
          'Both business and engineering could better understand member data, permissions, and login paths'
        ],
        stackTitle: 'Key Modules',
        stack: ['API Gateway', 'JWT Validation', 'Redis', 'Member API', 'Member DB', 'Cross-brand Integration'],
        diagramTitle: 'System Structure',
        diagramCaption: 'Gateway validation, Redis-backed state, and member data access need clear boundaries or integration debt builds quickly.'
      },
      commerceScale: {
        kicker: 'Retail Commerce / Operations',
        title: 'Retail Commerce Operations And Order Support Platform',
        heroFit: 'A strong fit for order flow, membership, inventory, campaigns, and traffic-heavy operations.',
        summary: 'The key is not splitting everything into more services. It is clarifying how Gateway, Redis, API, and scheduled jobs work together first.',
        contextTitle: 'Typical Situation',
        context: 'When orders, catalog, members, and campaigns all hit at once, unclear data paths quickly turn performance issues into delivery issues.',
        roleTitle: 'Primary Focus',
        role: 'The work centered on deciding what should stay in realtime API flow, what should be cached in Redis, what should move to jobs, and where service boundaries should sit.',
        decisionsTitle: 'Key Design Decisions',
        decisions: [
          'Separated Gateway, API, Redis, and scheduled-job responsibility so every concern did not pile into one layer',
          'Introduced Redis caching for heavy read paths to reduce pressure on PostgreSQL',
          'Moved delayed or batch work into jobs so core order flow stayed responsive'
        ],
        outcomesTitle: 'What Changed',
        outcomes: [
          'Traffic peaks could be handled without putting equal pressure on every part of the platform',
          'New campaigns, modules, and service changes became easier to integrate into the existing system',
          'Performance work became structural optimization instead of repeated emergency patching'
        ],
        stackTitle: 'Key Modules',
        stack: ['CDN', 'API Gateway', 'Backend API', 'Redis', 'PostgreSQL', 'Scheduled Job'],
        diagramTitle: 'System Structure',
        diagramCaption: 'Separating realtime API work, Redis caching, and scheduled jobs is what makes growth manageable.'
      }
    },
    capability: {
      eyebrow: 'Technical Judgment',
      title: 'Technical decisions that need direct intervention',
      titleLines: ['Technical decisions', 'that need direct intervention'],
      subtitle: 'This is not a tool list. These are the parts of a complex system that most often block delivery when nobody makes the call clearly enough.',
      items: [
        {
          title: 'System boundaries and responsibility design',
          description: 'Knowing what should stay together and what should be separated has a direct effect on future extensibility and maintenance cost.'
        },
        {
          title: 'Cross-system data flow and integration governance',
          description: 'This is not just about connecting APIs. It is about designing source, timing, permissions, and failure handling into something traceable.'
        },
        {
          title: 'Stability judgment on high-risk paths',
          description: 'For identity, transaction, device, and traffic-heavy routes, I focus early on where failure is most likely and what needs protection first.'
        },
        {
          title: 'Turning architecture into an executable plan for the team',
          description: 'I care not only about the direction, but also about whether engineers can keep building on it and operations can keep understanding it.'
        }
      ]
    },
    closing: {
      eyebrow: 'Next Step',
      title: 'When the problem is system complexity, the gap is usually not just engineering capacity',
      description: 'What is often missing is a technical role that can clarify boundaries, integration logic, risk priority, and delivery rhythm together. That is usually the missing piece.',
      primaryCta: 'See Services',
      secondaryCta: 'Contact Me'
    }
  }
}
