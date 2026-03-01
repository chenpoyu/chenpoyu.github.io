import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.config.js instead!
    // quasar.config.js -> build -> vueRouterMode
    // quasar.config.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // SEO: Update document title and meta tags on route change
  Router.beforeEach((to, from, next) => {
    // Update document title
    if (to.meta && to.meta.title) {
      document.title = to.meta.title
    }

    // Update meta description
    if (to.meta && to.meta.description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', to.meta.description)
      }
    }

    // Update meta keywords
    if (to.meta && to.meta.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', to.meta.keywords)
      }
    }

    // Update Open Graph tags
    if (to.meta && to.meta.title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', to.meta.title)
      }
    }

    if (to.meta && to.meta.description) {
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', to.meta.description)
      }
    }

    // Update Open Graph image
    if (to.meta && to.meta.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) {
        ogImage.setAttribute('content', to.meta.ogImage)
      }
      let ogImageWidth = document.querySelector('meta[property="og:image:width"]')
      if (ogImageWidth && to.meta.ogImageWidth) {
        ogImageWidth.setAttribute('content', to.meta.ogImageWidth)
      }
      let ogImageHeight = document.querySelector('meta[property="og:image:height"]')
      if (ogImageHeight && to.meta.ogImageHeight) {
        ogImageHeight.setAttribute('content', to.meta.ogImageHeight)
      }
      let twitterImage = document.querySelector('meta[name="twitter:image"]')
      if (twitterImage) {
        twitterImage.setAttribute('content', to.meta.ogImage)
      }
    }

    // Update canonical URL
    if (to.meta && to.meta.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', to.meta.canonical)
      }
    }

    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://chenpoyu.github.io/#' + to.path)
    }

    next()
  })

  return Router
})
