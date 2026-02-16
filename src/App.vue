<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { personSchema, professionalServiceSchema } from './utils/structuredData'

export default {
  name: 'App',

  mounted() {
    // Inject structured data for SEO
    this.injectStructuredData()
  },

  methods: {
    injectStructuredData() {
      // Person Schema
      const personScript = document.createElement('script')
      personScript.type = 'application/ld+json'
      personScript.text = JSON.stringify(personSchema)
      document.head.appendChild(personScript)

      // Professional Service Schema
      const serviceScript = document.createElement('script')
      serviceScript.type = 'application/ld+json'
      serviceScript.text = JSON.stringify(professionalServiceSchema)
      document.head.appendChild(serviceScript)
    }
  }
}
</script>
