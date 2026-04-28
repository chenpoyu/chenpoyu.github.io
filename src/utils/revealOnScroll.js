function normalizeTargets(targets) {
  if (!targets) {
    return []
  }

  if (targets instanceof Element) {
    return [targets]
  }

  return Array.from(targets).filter((target) => target instanceof Element)
}

function shouldRevealImmediately(target, rootMargin) {
  if (typeof window === 'undefined') {
    return true
  }

  const bounds = target.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0

  if (bounds.bottom <= 0) {
    return true
  }

  const marginTokens = String(rootMargin || '0px 0px -12% 0px').split(/\s+/)
  const bottomMarginToken = marginTokens[2] || '0px'

  let bottomOffset = 0
  if (bottomMarginToken.endsWith('%')) {
    bottomOffset = (parseFloat(bottomMarginToken) / 100) * viewportHeight
  } else if (bottomMarginToken.endsWith('px')) {
    bottomOffset = parseFloat(bottomMarginToken)
  }

  return bounds.top <= viewportHeight + bottomOffset
}

export function createRevealObserver(options = {}) {
  const settings = {
    threshold: 0.16,
    rootMargin: '0px 0px -12% 0px',
    ...options
  }

  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return {
      observe(targets) {
        normalizeTargets(targets).forEach((target) => {
          target.classList.add('is-visible')
        })
      },
      disconnect() {}
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }

      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, settings)

  return {
    observe(targets) {
      normalizeTargets(targets).forEach((target) => {
        if (target.classList.contains('is-visible') || shouldRevealImmediately(target, settings.rootMargin)) {
          target.classList.add('is-visible')
          return
        }

        observer.observe(target)
      })
    },
    disconnect() {
      observer.disconnect()
    }
  }
}
