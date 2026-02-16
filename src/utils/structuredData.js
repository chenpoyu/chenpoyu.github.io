// Structured Data (JSON-LD) for SEO
// This file exports schema.org structured data for better search engine understanding

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Poyu Chen',
  alternateName: '陳柏妤',
  jobTitle: 'Senior Full-Stack Architect / Technical Team Leader',
  description: '13+ years of development experience, specializing in Vehicle Networking/IoT, E-commerce Platforms, and SSO architecture',
  email: 'chenpoyu1123@gmail.com',
  url: 'https://chenpoyu.github.io/',
  sameAs: [
    'https://github.com/chenpoyu',
    'https://www.cakeresume.com/s--fkE0VpVyvPEpE4luBEqmjw--/poyu.chen'
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    '.NET Core',
    'Vue.js',
    'React',
    'PHP',
    'Laravel',
    'System Architecture',
    'Microservices',
    'IoT',
    'Vehicle Networking',
    'E-commerce',
    'SSO',
    'Team Leadership'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'National Chung Hsing University',
    department: 'Department of Information Management'
  }
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Poyu Chen Technical Consulting Services',
  description: 'Professional technical consulting services including system architecture design, full-stack development, and team management',
  provider: {
    '@type': 'Person',
    name: 'Poyu Chen'
  },
  areaServed: 'Taiwan',
  serviceType: [
    'System Architecture Design',
    'Full-Stack Development',
    'Technical Consulting',
    'Team Management',
    'IoT Solutions',
    'E-commerce Development'
  ]
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Poyu Chen Portfolio',
  alternateName: '陳柏妤作品集',
  url: 'https://chenpoyu.github.io/',
  description: 'Professional portfolio showcasing 13+ years of full-stack development and technical leadership experience',
  author: {
    '@type': 'Person',
    name: 'Poyu Chen'
  },
  inLanguage: ['zh-TW', 'en-US']
}

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})
