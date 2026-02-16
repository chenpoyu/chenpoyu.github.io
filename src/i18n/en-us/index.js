import home from './home'
import services from './services'
import techarch from './techarch'

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  ajax: {
    error: {
      404: 'No Data',
      500: 'System Error',
      network: 'Network error. Please reconnect and refresh page.',
    }
  },

  myname: 'Poyu Chen 陳柏妤',
  footer: 'Copyright © 2026 Poyu Chen. All rights reserved.',

  menu: {
    home: 'Home',
    profile: 'About',
    work: 'Services',
    techarch: 'Technical Experience',
    blog: 'Blog',
  },

  dark_mode: 'Dark Mode',

  ...home,

  lang: {
    title: 'lang',
    zh_tw: '繁體中文',
    en_us: 'English',
  },

  index: {
    label: 'It’s not the customer’s job to know what they want.',
    // Innovation distinguishes between a leader and a follower. 創新是決定能成為領導者或跟隨者的區別。
    // Quality is more important than quantity. One home run is better than two doubles.質重於量，兩支二壘安打永遠比不上一支全壘打。意思是，“與其敲出兩支長打，不如敲一支確定能得分的全壘打。”
    // Design is not just what it looks like and feels like. Design is how it works. 設計不只是外表和感覺，設計是產品如何運作。
    // People don’t want to just buy personal computers anymore. They want to know what they can do with them, and we’re going to show people exactly that.大家不再只是想買個人電腦而已。他們想要知道可以用電腦做什麼，而我們要展示給他們的正是這個。
    // It’s not the customer’s job to know what they want. 知道自己要什麼，並不是顧客的工作。
  },

  tech: {
    years_exp: 'years exp.'
  },

  skills: {
    title: 'Technical Skills',
    subtitle: 'Full-stack technology accumulated through years of practical experience',
    categories: [
      { name: 'System Architecture & Design' },
      { name: 'Frontend & Mobile Development' },
      { name: 'Backend Development' },
      { name: 'Database Technology' },
      { name: 'Cloud & DevOps' }
    ],
    items: [
      {
        name: 'UML/System Modeling',
        description: 'Use Case, Class Diagram, Sequence Diagram, Activity Diagram'
      },
      {
        name: 'Requirements Analysis',
        description: 'Stakeholder Interviews, Requirements Documentation'
      },
      {
        name: 'Architecture Design',
        description: 'Microservices, DDD'
      },
      {
        name: 'API Design',
        description: 'RESTful, gRPC, API Gateway'
      },
      {
        name: 'Database Design',
        description: 'ER Model, Normalization, Performance Optimization'
      },
      {
        name: 'Vue.js',
        description: 'SPA/CSR, Composition API, Vite'
      },
      {
        name: 'React',
        description: 'SPA/CSR, Hooks, Redux'
      },
      {
        name: 'iOS/Swift',
        description: 'SwiftUI, UIKit'
      },
      {
        name: 'Flutter',
        description: 'Widget, State Management, Provider'
      },
      {
        name: 'Java/Spring Boot',
        description: 'Spring Cloud, JPA, Security'
      },
      {
        name: '.NET Core/C#',
        description: 'ASP.NET Core, Entity Framework, LINQ'
      },
      {
        name: 'PHP/Laravel',
        description: 'Eloquent ORM, Artisan, Queue'
      },
      {
        name: 'Microservices',
        description: 'Service Decomposition, API Gateway, Distributed Architecture'
      },
      {
        name: 'Message Queue',
        description: 'RabbitMQ, Redis Stream'
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced Queries, Performance Tuning, Partitioning'
      },
      {
        name: 'SQL Server',
        description: 'T-SQL, SSRS, SSIS, Always On'
      },
      {
        name: 'Redis',
        description: 'Cache Strategy, Pub/Sub, Cluster'
      },
      {
        name: 'AWS',
        description: 'EC2, S3, RDS, Lambda, CloudFormation'
      },
      {
        name: 'Azure',
        description: 'App Service, SQL Database, DevOps, Functions'
      },
      {
        name: 'Docker',
        description: 'Multi-stage Build, Compose, Registry'
      },
      {
        name: 'CI/CD',
        description: 'Jenkins, GitLab CI, GitHub Actions'
      }
    ]
  },

  projects: {
    title: 'Key Project Experience',
    subtitle: 'Deep involvement in large-scale system development and architecture design',
    luxgen: {
      name: 'LUXGEN Vehicle Networking Platform',
      description: 'Designed and developed a large-scale IoV system integrating real-time vehicle data, user management, and cloud services, supporting tens of thousands of concurrent vehicle connections.',
      tags: 'IoV / IoT',
      highlights: [
        'Architecture Design: Microservices architecture using Spring Cloud & API Gateway',
        'Real-time Communication: WebSocket for vehicle-platform data transmission',
        'High Concurrency: Redis Cluster + RabbitMQ handling massive data',
        'Cloud Deployment: AWS architecture including ELB, Auto Scaling, RDS'
      ]
    },
    parking: {
      name: 'Smart Parking Management System',
      description: 'Developed comprehensive parking lot management solution integrating license plate recognition, payment systems, and real-time space monitoring.',
      tags: 'Smart City',
      highlights: [
        'Image Recognition: Integrated AI license plate recognition system',
        'Payment Integration: Connected multiple third-party payment platforms',
        'Real-time Monitoring: WebSocket + Redis Pub/Sub for live space updates',
        'APP Development: Dual-platform iOS (Swift) and Android development'
      ]
    },
    nitori: {
      name: 'NITORI E-commerce System',
      description: 'Large-scale retail e-commerce platform supporting high-traffic order processing and inventory management.',
      tags: 'E-commerce',
      highlights: [
        'High Availability: Distributed system design supporting high-concurrency orders',
        'Inventory Management: Real-time inventory sync preventing overselling',
        'Performance Optimization: Redis caching strategy reducing page load by 60%',
        'Data Analysis: ELK Stack for log analysis and business reports'
      ]
    },
    charging: {
      name: 'EV Charging Station Management Platform',
      description: 'Developed charging station operation management system covering equipment monitoring, member management, and billing.',
      tags: 'Green Energy / IoT',
      highlights: [
        'IoT Integration: OCPP protocol integration with charging equipment',
        'Billing System: Flexible pricing rule engine supporting multiple rate plans',
        'Monitoring Dashboard: Grafana + Prometheus for real-time station monitoring',
        'Mobile App: React Native cross-platform APP development'
      ]
    },
    seven: {
      name: '7-ELEVEN Logistics Distribution System',
      description: 'Large-scale convenience store logistics management system integrating orders, warehousing, and route optimization.',
      tags: 'Logistics',
      highlights: [
        'Route Optimization: Algorithm-optimized delivery routes reducing costs by 25%',
        'Real-time Tracking: GPS integration with live delivery status updates',
        'WMS Integration: Warehouse management system and PDA device integration',
        'Big Data Analysis: Predictive models optimizing inventory allocation'
      ]
    },
    unimember: {
      name: 'Uni-President Group Member Integration Platform',
      description: 'Cross-brand member system integration enabling single account access to multiple sub-brand services.',
      tags: 'Member System',
      highlights: [
        'SSO Single Sign-On: OAuth 2.0 for cross-platform authentication',
        'Points System: Distributed points transaction and redemption mechanism',
        'Member Profiling: Big data analysis for precise marketing models',
        'Security Protection: Security enhancement passing ISO 27001 audit'
      ]
    },
    government: {
      name: 'Government System Projects',
      description: 'Government system development and maintenance for Ministry of National Defense, Highway Bureau, ensuring system stability and security compliance',
      tags: 'Government • Security • Document System',
      highlights: [
        'MND Military-Civilian Network Document Exchange System',
        'Highway Bureau Slope & Tunnel Management System',
        'Compliance with Government Security Standards',
        'Stable Operation & Continuous Maintenance'
      ]
    },
    military: {
      name: 'Military Information Systems',
      description: 'Electronic signature form system for Information & Electronic Warfare Command, handling military internal document processes and permission management',
      tags: 'Military • E-Signature • Access Control',
      highlights: [
        'I&EW Command E-Signature Form System',
        'Multi-Level Permission Management',
        'Military Security Compliance',
        'Offline & Online Dual Mode Support'
      ]
    }
  },

  experience: {
    title: 'Work Experience',
    subtitle: '13 years of technical career, from engineer to technical manager',
    timeline: [
      {
        year: 'Aug 2022 - Present',
        title: 'Technical Manager (Director of Software Project Division)',
        company: 'Weyi Technology Co., Ltd.',
        description: 'Serve as Director of Software Project Division, managing 4 departments (Accounting, IoT, Membership, HR/Payroll) with up to 32 team members',
        achievements: [
          'Responsible for software project development including government bids and customized projects',
          'Established technical standards and development processes, defined public development frameworks',
          'Continuously understand execution unit work, provide experience sharing and tool implementation',
          'Help colleagues improve productivity and optimize workflows'
        ]
      },
      {
        year: '2019 - Nov 2025',
        title: 'Technical Manager (Director of Project Department)',
        company: 'Yesee Enterprise Co., Ltd.',
        description: 'Led technical department managing project development teams with up to 40 members',
        achievements: [
          'Handled government bids, customized software projects, and staff augmentation services',
          'Established company technical standards: public development frameworks, documentation specs, project workflows',
          'Led development of IoT systems, vehicle networking systems, and e-commerce platforms',
          'Designed system architecture for high-concurrency and high-traffic scenarios'
        ]
      },
      {
        year: 'Apr 2016 - 2019',
        title: 'Senior Engineer',
        company: 'Yesee Enterprise Co., Ltd.',
        description: 'Responsible for Java system architecture development and maintenance, participated in core projects like vehicle networking and e-commerce',
        achievements: [
          'Led Luxgen vehicle networking system architecture development',
          'Optimized system performance for high-concurrency scenarios',
          'Utilized Spring, Hibernate, MyBatis and other technologies',
          'Accumulated system architecture design and technology selection experience'
        ]
      },
      {
        year: 'Apr 2013 - Apr 2016',
        title: 'Technical Consultant (Java Engineer)',
        company: 'Hongyang Technology Co., Ltd.',
        description: 'Staff augmentation dispatched to Acer for system development and maintenance',
        achievements: [
          'Participated in National Taxation Bureau local tax system reconstruction - land value increment tax services',
          '55688 Life Butler system construction',
          'Taiwan External Trade Development Council internal system maintenance',
          'Used Java, Struts2, Spring, Oracle and other technologies'
        ]
      }
    ]
  },

  profile: {
    label: 'Core Strengths: 13 Years Full-Stack Experience & 40+ Team Management',
    description: 'Graduated from National Chung Hsing University with a degree in Management Information Systems, bringing over 13 years of in-depth experience in software development and technical management. Started career as a Java engineer and progressed to Director of Software Projects, possessing complete perspective from frontline coding to high-level technical decision-making.\n\nProficient in Java (Spring) and .NET Core dual ecosystems, skilled in Vue.js/React, PostgreSQL, and cloud architecture (AWS/Azure). Have designed and maintained high-concurrency, high-traffic systems (IoT, vehicle networking) multiple times, ensuring system stability in complex scenarios.\n\nIn leading teams of 32 to 40 members, focus not only on progress management but also on "evaluating optimal solutions". Can quickly dive into unfamiliar projects, grasp core issues, provide professional judgment to resolve technical obstacles, and ensure precise resource allocation.',
    develop: 'Technical Development',
    leader: 'Team Leadership',
    teach: 'Knowledge Sharing',
    label2: "I'm convinced that about half of what separates successful entrepreneurs from non-successful ones is pure perseverance.",
    label2_from: '-- Steve Jobs',
    timeline: {
      title1: 'My first programming language - Java',
      message1: 'Studying in the Department of Management Information System started the road of programming. In the beginning courses, I wrote many small programs with enthusiasmthey and also developed the membership system, shopping cart, booking system by JSP Servlet. It makes an opportunity to enter the information industry in the future.',
      title2: 'Start of web engineer - PHP',
      message2: 'Industry-university cooperation for graduation topic, using PHP, MySQL, HTML, Javascript, JQuery, HTML, Css to develop competition registration and lottery system. With this, I have a better understanding of PHP, and I also used Laravel with XAMPP to develop the bookstore system Web API for APP operation after working.',
      title3: 'Variety of skills training. Framework、Database、Server、OS',
      message3: 'The first year of entering the information industry is the technical training room. Learning Spring, Struts, Ajax, Hibernate, MyBatis, Crontab, Oracle, SQLServer, PostgreSQL, PL/SQL, Windows Server, Linux, Ubuntu... Through different cases, I have been exposed to different technologies, improved experience and ability, and also learned different domain knowledge. This has given me a lot of help now.',
      title4: 'Keep up with the APP trend - Swift',
      message4: 'After gaining some experience in the information industry, I hope I will continue to improve, so I taught myself Swift 4 to develop iOS apps. During the practice, I implemented multiple apps according to my needs. Therefore, these works actively strive for the opportunity to implement the company’s APP project. Three or four APPs have been developed and put on the shelves successively.',
      title5: "Get out of your comfort zone! I'm not programming anymore!",
      message5: "Development, maintenance, web pages, mobile phones, design, analysis... After all the processes, roles, and situations in the project have been experienced. I finally got the opportunity to challenge the management leadership field. It's not that you don't write programs from now on, but you need to suitable for use. Teach members in accordance with their aptitude, lead engineers to complete projects, give directions and suggestions, share experience and assist in career planning, and then begin to lead the supervisors, who will lead the lower-level colleagues to carry out the work.",
      title6: 'Lead by example. VueJs、.Net Core',
      message6: 'After I started to lead the project team, I gradually became disconnected from the technology. When faced with problems or manpower shortage, there would sometimes I could not help. This made me face myself up again. I began to release more space and authority of the management work, so that colleagues have more opportunities. Extra time to projects and specialized research technologies, including C#, .NET Core, VueJs, Ruby on Rails, NodeJs, Golang, AWS, Azure, CDN, ELK... Maybe it’s not very specialized, but it adds. Only after extensive knowledge and understanding of the pros and cons can give directions.',
      title7: 'Transform professionally and make more contributions',
      message7: 'By integrating more new technologies, i can choose the best direction for team development, allowing the team to provide more professional services and solutions. And then improve personal value and department and company interests.',
      title8: 'My future is not a dream!',
      message8: 'The information industry is as deep as the sea and as wide as the sky. Only by continuous diligence can we gain a foothold. We hope that in the future we will still keep up with the pace of technology and use information technology to enhance our lives and increase entertainment and convenience.',
    },
    label3: 'True mastery of any skill takes a lifetime.',
    card: {
      title1: 'Code',
      subtitle1: '',
      message1: '- Java [10+ years exp.] \n- .NET(C#) [5 year exp.] \n- PHP [2 year exp.] \n- Swift [2 years exp.] \n- VueJs[3 year exp.] \n- ReactJs[2 year exp.] \n- SQL / PLSQL / T-SQL \n- HTML \n- CSS \n- Javascript / Jquery',
      title2: 'Framework',
      subtitle2: '',
      message2: '- Spring MVC [10+ years exp.] \n- Spring Boot [4+ years exp.] \n- Hibernate [5+ years exp.] \n- MyBatis \n- ASP.NET Core [5+ years exp.]\n- Entity Framework \n- Struts \n- .NET Framework \n- Laravel ',
      title3: 'Database',
      subtitle3: '',
      message3: '- PostgreSQL [5+ years exp.] \n- SQL Server [3+ years exp.]\n- Oracle [3+ years exp.] \n- MySQL [2+ years exp.] \n- Redis [3+ year exp.]\n- ElastiCache [1 year exp.]',
      title4: 'Other',
      subtitle4: '',
      message4: '- Docker \n- AWS \n- Linux\n- Cocoapod \n- Git \n- SVN\n- RESTful API \n- WebService ',
    }
  },

  ...services,
  ...techarch
}
