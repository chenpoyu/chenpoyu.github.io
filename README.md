# Poyu Chen - Professional Portfolio & Technical Consulting

[![Vue 3](https://img.shields.io/badge/Vue-3.4-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Quasar 2](https://img.shields.io/badge/Quasar-2.14-1976D2?style=flat-square&logo=quasar)](https://quasar.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

> A professional portfolio and technical consulting services website showcasing 13+ years of full-stack development experience and technical leadership.

English | [繁體中文](./README.zh-TW.md)

## 🎯 Project Overview

This is a modern, responsive web application built to demonstrate professional technical expertise and provide comprehensive information about technical consulting services. The site features:

- **Professional Landing Page**: Showcasing core values and technical capabilities
- **Service Portfolio**: Detailed information about consulting services offered
- **Technical Skills**: Comprehensive display of technology stack and expertise
- **Career Journey**: Timeline of professional growth and achievements
- **Technical Experience**: Showcase of architecture design patterns and system implementations

## 🚀 Key Features

### Professional Presentation
- Clean, modern UI with smooth animations
- Responsive design optimized for all devices
- Dark mode support for better user experience
- Multi-language support (Chinese / English)

### Interactive Features
- **Animated Counters**: Scroll-triggered number animations showcasing 13+ years experience, 100+ projects, 40+ team size, and 20+ technologies
- **Contact Form**: Formspree-integrated contact form with validation and success notifications
- **Smooth Scrolling**: Enhanced user experience with smooth navigation between sections

### Technical Experience
- Microservices architecture design
- IoT system architecture
- SSO single sign-on implementation
- High concurrency system design

### Performance & Best Practices
- Vite-based build system for lightning-fast development
- Code splitting and lazy loading for optimal performance
- SEO-friendly meta tags and structured data
- Progressive Web App (PWA) capabilities

## 🛠️ Tech Stack

### Core Framework
- **Vue 3** (v3.4.19) - Progressive JavaScript framework with Composition API
- **Quasar Framework** (v2.14.5) - High-performance Material Design component library
- **Vue Router** (v4.2.5) - Official routing solution
- **Pinia** (v2.1.7) - State management (Vuex successor)
- **Vue I18n** (v9.9.1) - Internationalization plugin

### Build Tools
- **Vite** (v5.1.3) - Next generation frontend tooling
- **@quasar/app-vite** (v1.8.4) - Quasar CLI with Vite integration
- **ESLint** (v8.56.0) - Code quality and consistency
- **Prettier** (v3.2.5) - Code formatting

### API & Data
- **Axios** (v1.6.7) - HTTP client for API requests
- **Mermaid** (v10.9.5) - Diagram and flowchart generation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 18.18.0
- **npm**: >= 9.0.0 or **Yarn**: >= 1.22.0
- **Quasar CLI**: `npm install -g @quasar/cli`

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/chenpoyu/chenpoyu.github.io.git
cd chenpoyu.github.io
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
quasar dev
```

The application will be available at `http://localhost:5000` (default port)

## 📦 Build & Deployment

### Production Build
```bash
npm run build
# or
quasar build
```

The production-ready files will be in the `dist/spa` directory.

### Build for Different Platforms
```bash
# PWA (Progressive Web App)
quasar build -m pwa

# SSR (Server-Side Rendering)
quasar build -m ssr

# Electron (Desktop App)
quasar build -m electron

# Capacitor (Mobile App)
quasar build -m capacitor -T ios
quasar build -m capacitor -T android
```

## 🏗️ Project Structure

```
chenpoyu.github.io/
├── public/              # Static assets
│   ├── icons/          # App icons and favicons
│   ├── robots.txt      # Search engine crawler rules
│   └── sitemap.xml     # Site structure for SEO
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── boot/           # Boot files (app initialization)
│   │   ├── axios.js    # Axios configuration
│   │   └── i18n.js     # Internationalization setup
│   ├── components/     # Reusable Vue components
│   │   ├── AjaxBar.vue
│   │   └── Language.vue
│   ├── css/            # Global styles
│   │   ├── app.scss    # Main stylesheet
│   │   └── quasar.variables.scss
│   ├── i18n/           # Translation files
│   │   ├── index.js
│   │   ├── en-us/      # English translations
│   │   └── zh-tw/      # Traditional Chinese translations
│   ├── layouts/        # Page layouts
│   │   ├── Header.vue
│   │   └── MainLayout.vue
│   ├── pages/          # Page components
│   │   ├── Home.vue    # Landing page
│   │   ├── TechArchitecture.vue  # Technical experience showcase
│   │   ├── Error404.vue
│   │   ├── portfolio/  # Portfolio page
│   │   │   └── Portfolio.vue
│   │   ├── profile/    # About/profile page
│   │   │   ├── Index.vue
│   │   │   └── Profile.vue
│   │   └── work/       # Services page
│   │       ├── Index.vue
│   │       └── Services.vue
│   ├── router/         # Vue Router configuration
│   │   ├── index.js
│   │   └── routes.js
│   ├── stores/         # Pinia stores (state management)
│   │   ├── index.js
│   │   ├── params.js   # Global parameters
│   │   └── store-flag.d.ts
│   ├── utils/          # Utility functions
│   │   └── structuredData.js  # SEO structured data
│   ├── App.vue         # Root component
│   └── index.template.html
├── index.html          # Entry HTML file
├── jsconfig.json       # JavaScript/TypeScript config
├── package.json        # Project dependencies
├── quasar.config.js    # Quasar framework configuration
└── README.md          # This file
```

## 🎨 Key Components

### Home Page (`src/pages/Home.vue`)
- Hero section with professional introduction
- Core values showcase
- Service offerings with detailed features
- Technology stack display with experience levels
- Professional statistics
- Contact section with multiple channels

### About Page (`src/pages/profile/Profile.vue`)
- Detailed career timeline
- Technical skills breakdown
- Major project showcase (LUXGEN, NITORI, 7-ELEVEN, etc.)
- Professional achievements
- Core competencies

### Services Page (`src/pages/work/Services.vue`)
- Comprehensive service offerings
- System architecture design details
- Development services
- Team management and training
- Detailed process workflow
- Case studies and client examples
- Contact call-to-action

### Technical Experience (`src/pages/TechArchitecture.vue`)
- Microservices architecture design with Azure services
- IoT architecture using AWS Lambda and Step Functions
- SSO single sign-on implementation patterns
- High concurrency system design with CDN and caching
- Interactive Mermaid diagrams for architecture visualization

### Portfolio (`src/pages/portfolio/Portfolio.vue`)
- Educational websites: Kids Playground (age 2-6), Senior Brain Training
- Game projects: Mazu Festival Lucky Draw, Tank Battle, Retro Games Collection
- Custom brand websites: Personal and business website templates
- Dynamic OG image thumbnails loaded from each project's meta tags
- JSON-LD structured data for enhanced search engine visibility

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
# Application Configuration
VUE_APP_TITLE=Poyu Chen - Technical Consulting
VUE_APP_DESCRIPTION=Professional technical consulting and software architecture services
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance Optimization

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and routes loaded on demand
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: Service worker for offline capabilities
- **Bundle Analysis**: Use `quasar build --analyze` to inspect bundle size

## 🧪 Development Guidelines

### Code Style
```bash
# Run linter
npm run lint

# Auto-format code
npm run format
```

### Commit Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add new service section
fix: resolve mobile menu issue
docs: update README with API details
style: format code with prettier
refactor: restructure store modules
perf: optimize image loading
test: add unit tests for components
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Poyu Chen (陳柏妤)**

- Professional Role: Technical Manager | Solution Architect | Technical Consultant
- Experience: 13+ years in full-stack development and team leadership
- Email: chenpoyu1123@gmail.com
- Location: Taipei, Taiwan

### Key Project Experience

**Vehicle Network / IoT Systems:**
- Luxgen Connected Car Platform (High-concurrency real-time communication)
- Luxgen EV Charging Station System (Plug & Charge, OCPI protocol)
- CPC IoT Energy Management System
- Tainan Smart Parking System (20K+ sensors)

**E-commerce Platforms:**
- Nitori E-commerce Platform (Japanese home furnishing brand)
- Cosmed EC 3.0 Platform (Beauty & healthcare e-commerce)

**SSO & Member Integration:**
- President Chain Store Group Member Integration System (Multi-brand SSO)

## 🙏 Acknowledgments

- **Quasar Framework** - For providing an excellent Vue.js framework
- **Vue.js Community** - For continuous support and innovation
- **Mermaid** - For providing powerful diagram generation tools
- **Material Design** - For design principles and guidelines

## 📞 Contact & Support

For technical consulting inquiries or collaboration opportunities:

- **Email**: chenpoyu1123@gmail.com
- **GitHub**: https://github.com/chenpoyu

## 🔍 SEO Optimization

This website is fully optimized for search engines:
- ✅ Comprehensive meta tags (keywords, description, author)
- ✅ Open Graph with 1200×630 social sharing image (`summary_large_image`)
- ✅ Twitter Card support with large image preview
- ✅ Dynamic SEO updates on route changes (title, description, og:image, canonical)
- ✅ Sitemap.xml and robots.txt
- ✅ Structured Data (JSON-LD) for Person, Service, Website, and CollectionPage schemas
- ✅ Portfolio page with per-project OG image thumbnails
- ✅ Semantic HTML with proper lang attributes
- ✅ Canonical URLs to prevent duplicate content

---

**Built with ❤️ using Vue 3 and Quasar Framework**

*Last Updated: February 2026*
