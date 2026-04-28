<template>
  <q-header class="app-header" :class="{ 'app-header--scrolled': isScrolled, 'app-header--dark': isDark, 'app-header--light': !isDark }" :style="headerStyle">
    <div class="app-header__backdrop" aria-hidden="true" />
    <q-toolbar class="app-header__toolbar">
      <div class="app-header__panel">
        <div class="app-header__brand-group">
          <q-btn
            v-if="!$q.screen.gt.xs"
            flat
            dense
            round
            icon="menu"
            class="app-header__menu-btn"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <button class="app-header__brand" type="button" @click="to('/', '_self')">
            <span class="app-header__brand-mark">PC</span>
            <span class="app-header__brand-copy">
              <span class="app-header__brand-role">{{ $t('header.brand_role') }}</span>
              <span class="app-header__brand-name">
                <span class="app-header__brand-name-primary">{{ $t('header.brand_name_primary') }}</span>
                <span class="app-header__brand-name-secondary">{{ $t('header.brand_name_secondary') }}</span>
              </span>
            </span>
          </button>
        </div>

        <q-tabs
          v-if="$q.screen.gt.xs"
          inline-label
          shrink
          indicator-color="transparent"
          class="app-header__tabs"
        >
          <template v-for="menu in menus" :key="menu.title">
            <q-route-tab
              v-if="!menu.to.startsWith('http')"
              :label="$t(menu.title)"
              :to="menu.to"
              no-caps
              exact
            />
            <q-tab
              v-else
              :label="$t(menu.title)"
              no-caps
              @click="to(menu.to, menu.open)"
            />
          </template>
        </q-tabs>

        <div v-if="$q.screen.gt.xs" class="app-header__actions">
          <div class="app-header__utility-rail">
            <q-btn
              flat
              dense
              round
              class="app-header__theme-button app-header__theme-button--solo"
              :icon="isDark ? 'dark_mode' : 'light_mode'"
              :aria-label="$t('header.theme')"
              @click="toggleTheme"
            />

            <span class="app-header__utility-divider" aria-hidden="true" />

            <div class="app-header__lang-switch" :aria-label="$t('header.language')" role="group">
              <q-btn
                flat
                dense
                no-caps
                class="app-header__lang-option"
                :class="{ 'app-header__lang-option--active': locale === 'zh-tw' }"
                label="中"
                @click="setLocale('zh-tw')"
              />
              <q-btn
                flat
                dense
                no-caps
                class="app-header__lang-option"
                :class="{ 'app-header__lang-option--active': locale === 'en-us' }"
                label="EN"
                @click="setLocale('en-us')"
              />
            </div>
          </div>
        </div>
      </div>

      <q-drawer
        v-model="leftDrawerOpen"
        :width="$q.screen.lt.sm ? 298 : 332"
        bordered
        overlay
        class="app-header__drawer"
      >
        <div class="drawer-shell">
          <div class="drawer-top">
            <div class="drawer-top__glow drawer-top__glow--a" aria-hidden="true" />
            <div class="drawer-top__glow drawer-top__glow--b" aria-hidden="true" />
            <div class="drawer-top__frame">
              <div class="drawer-top__identity">
                <q-avatar size="56px" class="drawer-top__img">
                  <img src="~assets/poyu.jpg">
                </q-avatar>
                <div class="drawer-top__copy">
                  <div class="drawer-top__role">{{ $t('header.brand_role') }}</div>
                  <div class="text-weight-bold drawer-top__text">{{ $t('myname') }}</div>
                </div>
              </div>

              <div class="drawer-top__controls">
                <q-btn
                  flat
                  dense
                  round
                  class="drawer-top__theme"
                  :icon="isDark ? 'dark_mode' : 'light_mode'"
                  :aria-label="$t('header.theme')"
                  @click="toggleTheme"
                />

                <div class="drawer-top__lang" :aria-label="$t('header.language')" role="group">
                  <q-btn
                    flat
                    dense
                    no-caps
                    class="drawer-top__lang-option"
                    :class="{ 'drawer-top__lang-option--active': locale === 'zh-tw' }"
                    label="中"
                    @click="setLocale('zh-tw')"
                  />
                  <q-btn
                    flat
                    dense
                    no-caps
                    class="drawer-top__lang-option"
                    :class="{ 'drawer-top__lang-option--active': locale === 'en-us' }"
                    label="EN"
                    @click="setLocale('en-us')"
                  />
                </div>
              </div>
            </div>
          </div>

        <q-tree
          :nodes="menus"
          node-key="title"
          default-expand-all
          no-connectors
          class="drawer-list"
        >
          <template v-slot:default-header="prop">
            <div class="row items-center no-wrap drawer-list__row" @click="navigateFromDrawer(prop.node.to, prop.node.open)">
              <span class="drawer-list__icon-wrap">
                <q-icon :name="prop.node.icon" class="drawer-list__icon" size="22px" />
              </span>
              <div class="drawer-list__text">
                <div class="text-weight-bold drawer-list__title">{{ $t(prop.node.title) }}</div>
                <div v-if="prop.node.caption" class="text-weight-light drawer-list__text__caption">
                  {{ $t(prop.node.caption) }}
                </div>
              </div>
            </div>
          </template>
        </q-tree>
        </div>
      </q-drawer>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useParamsStore } from 'stores/params'

export default {
  name: 'AppHeader',
  setup() {
    const $q = useQuasar()
    const router = useRouter()
    const paramsStore = useParamsStore()
    const { locale } = useI18n()

    const leftDrawerOpen = ref(false)
    const isDark = ref($q.dark.isActive)
    const isScrolled = ref(false)
    const scrollProgress = ref(0)

    const menus = computed(() => paramsStore.getMenus)

    const headerStyle = computed(() => {
      const progress = scrollProgress.value

      return {
        '--header-toolbar-padding-y': `${4 - progress * 1}px`,
        '--header-toolbar-padding-x': `${14 - progress * 2}px`,
        '--header-toolbar-padding-bottom': `${0}px`,
        '--header-toolbar-max-width': `${1280 - progress * 24}px`,
        '--header-panel-padding-y': `${10 - progress * 1}px`,
        '--header-panel-padding-x': `${0}px`,
        '--header-panel-radius': '0px',
        '--header-panel-max-width': '100%',
        '--header-panel-blur': `${0 + progress * 2}px`,
        '--header-panel-saturate': `${128 + progress * 30}%`,
        '--header-panel-gap': `${18 - progress * 4}px`,
        '--header-panel-offset': '0px',
        '--header-brand-gap': `${12 - progress * 3}px`,
        '--header-brand-mark-size': `${42 - progress * 4}px`,
        '--header-brand-mark-radius': `${12 - progress * 2}px`,
        '--header-brand-role-opacity': `${1 - progress * 0.84}`,
        '--header-brand-role-shift': `${progress * -8}px`,
        '--header-brand-secondary-opacity': `${0.64 - progress * 0.28}`,
        '--header-tab-height': `${40 - progress * 4}px`,
        '--header-control-height': `${42 - progress * 6}px`,
        '--header-theme-button-height': `${36 - progress * 4}px`,
        '--header-backdrop-blur': `${6 + progress * 14}px`,
        '--header-top-backdrop-opacity': `${0.34 + progress * 0.36}`,
        '--header-top-control-opacity': `${0.28 + progress * 0.34}`,
        '--header-top-active-opacity': `${0.18 + progress * 0.18}`
      }
    })

    watch(isDark, (val) => {
      $q.dark.set(val)
    })

    const updateScrolledState = () => {
      const clampedScroll = Math.min(window.scrollY, 160)
      scrollProgress.value = clampedScroll / 160
      isScrolled.value = clampedScroll > 18
    }

    onMounted(() => {
      updateScrolledState()
      window.addEventListener('scroll', updateScrolledState, { passive: true })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateScrolledState)
    })

    const setTheme = (value) => {
      isDark.value = value
    }

    const toggleTheme = () => {
      isDark.value = !isDark.value
    }

    const setLocale = (value) => {
      locale.value = value
    }

    const to = (link, open) => {
      if (link.indexOf('http') > -1 || link.indexOf('mailto') > -1) {
        if (open === '_self') {
          window.location.href = link
        } else {
          window.open(link, open)
        }
      } else {
        router.replace(link)
      }
    }

    const navigateFromDrawer = (link, open) => {
      leftDrawerOpen.value = false
      to(link, open)
    }

    return {
      headerStyle,
      isScrolled,
      isDark,
      leftDrawerOpen,
      locale,
      menus,
      navigateFromDrawer,
      setLocale,
      setTheme,
      toggleTheme,
      to
    }
  }
}
</script>

<style lang="sass" scoped>
.app-header
  background: transparent
  box-shadow: none
  --header-toolbar-padding-y: 4px
  --header-toolbar-padding-x: 14px
  --header-toolbar-padding-bottom: 0px
  --header-toolbar-max-width: 1280px
  --header-panel-padding-y: 10px
  --header-panel-padding-x: 0px
  --header-panel-radius: 0px
  --header-panel-max-width: 100%
  --header-panel-blur: 0px
  --header-panel-saturate: 128%
  --header-panel-gap: 18px
  --header-panel-offset: 0px
  --header-brand-gap: 12px
  --header-brand-mark-size: 46px
  --header-brand-mark-radius: 15px
  --header-brand-role-opacity: 1
  --header-brand-role-shift: 0px
  --header-brand-secondary-opacity: 0.64
  --header-tab-height: 40px
  --header-control-height: 42px
  --header-theme-button-height: 36px
  --header-backdrop-blur: 10px
  --header-top-backdrop-opacity: 0.34
  --header-top-control-opacity: 0.28
  --header-top-active-opacity: 0.18
  --header-frost-bg: var(--header-panel-bg)
  --header-frost-bg-scrolled: var(--header-panel-bg-scrolled)
  --header-frost-border: var(--header-panel-border)
  --header-frost-highlight: var(--header-highlight)
  --header-frost-shadow: none
  --header-frost-shadow-strong: none
  --header-cool-line: var(--header-accent)

  &__backdrop
    position: absolute
    left: 50%
    top: 0
    width: min(calc(100vw - 32px), var(--header-toolbar-max-width))
    height: 100%
    transform: translateX(-50%)
    background: linear-gradient(180deg, rgba(245, 248, 251, var(--header-top-backdrop-opacity)) 0%, rgba(241, 245, 248, calc(var(--header-top-backdrop-opacity) * 0.52)) 42%, rgba(241, 245, 248, 0) 100%)
    border-bottom: 0
    box-shadow: none
    backdrop-filter: blur(calc(var(--header-backdrop-blur) * 0.7)) saturate(128%)
    -webkit-backdrop-filter: blur(calc(var(--header-backdrop-blur) * 0.7)) saturate(128%)
    mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.95) 4%, rgba(0, 0, 0, 0.95) 96%, transparent 100%)
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.95) 4%, rgba(0, 0, 0, 0.95) 96%, transparent 100%)
    pointer-events: none
    transition: width 0.32s ease, background 0.32s ease, box-shadow 0.32s ease, backdrop-filter 0.32s ease

    &::before
      content: ''
      position: absolute
      inset: 0
      background: radial-gradient(circle at 14% -8%, rgba(163, 138, 99, calc(var(--header-top-backdrop-opacity) * 0.16)), transparent 24%), radial-gradient(circle at 84% -2%, rgba(36, 53, 74, calc(var(--header-top-backdrop-opacity) * 0.1)), transparent 18%)

    &::after
      content: ''
      position: absolute
      left: 0
      right: 0
      bottom: 0
      display: none

  &__toolbar
    position: relative
    z-index: 1
    min-height: auto
    width: 100%
    max-width: var(--header-toolbar-max-width)
    margin: 0 auto
    transition: max-width 0.32s ease, padding 0.32s ease

  &__panel
    position: relative
    display: flex
    align-items: center
    gap: var(--header-panel-gap)
    width: 100%
    max-width: var(--header-panel-max-width)
    margin: 0 auto
    padding: var(--header-panel-padding-y) var(--header-panel-padding-x)
    border: 0
    border-radius: 0
    background: var(--header-panel-bg)
    border: 0
    border-radius: var(--header-panel-radius)
    box-shadow: var(--header-frost-shadow)
    backdrop-filter: none
    -webkit-backdrop-filter: none
    overflow: visible
    transform: translateY(var(--header-panel-offset))
    transition: padding 0.32s ease, transform 0.32s ease, max-width 0.32s ease, gap 0.32s ease

  &--scrolled .app-header__panel
    background: transparent
    box-shadow: var(--header-frost-shadow-strong)

  &__brand-group
    position: relative
    z-index: 1
    display: flex
    align-items: center
    gap: var(--header-brand-gap)
    min-width: 0
    transition: gap 0.32s ease

  &__brand
    display: flex
    align-items: center
    gap: var(--header-brand-gap)
    min-width: 0
    padding: 0
    color: var(--header-text-primary)
    background: transparent
    border: 0
    cursor: pointer
    text-shadow: none
    transition: gap 0.32s ease

  &__brand-mark
    display: inline-flex
    align-items: center
    justify-content: center
    position: relative
    width: var(--header-brand-mark-size)
    height: var(--header-brand-mark-size)
    border: 1px solid var(--header-mark-border)
    border-radius: var(--header-brand-mark-radius)
    background: var(--header-mark-bg)
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1)
    color: var(--header-mark-text)
    font-size: 0.92rem
    font-weight: 800
    letter-spacing: 0.18em
    text-indent: 0.18em
    transition: width 0.32s ease, height 0.32s ease, border-radius 0.32s ease

    &::after
      content: ''
      position: absolute
      inset: 7px
      border: 1px solid var(--header-panel-border)
      border-radius: 10px

  &__brand-copy
    display: flex
    flex-direction: column
    min-width: 0

  &__brand-role
    color: var(--header-text-meta)
    font-size: 0.64rem
    font-weight: 700
    letter-spacing: 0.24em
    text-transform: uppercase
    white-space: nowrap
    opacity: var(--header-brand-role-opacity)
    transform: translateY(var(--header-brand-role-shift))
    transition: opacity 0.28s ease, transform 0.28s ease

  &__brand-name
    display: flex
    align-items: baseline
    gap: 8px
    min-width: 0
    margin-top: 1px

  &__brand-name-primary
    font-family: var(--display-font)
    font-size: clamp(1.06rem, 1.28vw, 1.28rem)
    font-weight: 700
    letter-spacing: 0.08em
    white-space: nowrap

  &__brand-name-secondary
    color: var(--header-text-secondary)
    font-size: 0.78rem
    font-weight: 600
    letter-spacing: 0.14em
    white-space: nowrap
    opacity: var(--header-brand-secondary-opacity)
    transition: opacity 0.28s ease

  &__tabs
    position: relative
    z-index: 1
    flex: 1 1 auto
    justify-content: center
    min-width: 0
    padding: 0 12px
    border-left: 0
    border-right: 0
    background: transparent

    :deep(.q-tabs__content)
      gap: 2px

    :deep(.q-tab)
      min-height: var(--header-tab-height)
      padding: 0 14px
      border-radius: 999px
      color: var(--header-text-secondary)
      transition: color 0.28s ease, background 0.28s ease, min-height 0.28s ease, box-shadow 0.28s ease

    :deep(.q-tab__label)
      font-size: 0.9rem
      font-weight: 600
      letter-spacing: 0.08em
      text-transform: none

    :deep(.q-tab:hover)
      color: var(--header-text-primary)
      background: color-mix(in srgb, var(--header-control-hover) calc(var(--header-top-control-opacity) * 100%), transparent)

    :deep(.q-tab--active)
      color: var(--header-text-primary)
      background: color-mix(in srgb, var(--header-control-active) calc(var(--header-top-active-opacity) * 100%), transparent)
      box-shadow: none

    :deep(.q-tab__indicator)
      height: 2px
      background: var(--header-line-glow)
      border-radius: 999px

  &__actions
    position: relative
    z-index: 1
    display: flex
    align-items: center
    justify-content: flex-end
    gap: 8px
    margin-left: auto

  &__utility-rail
    display: inline-flex
    align-items: center
    gap: 8px
    padding: 2px
    border-radius: 999px
    border: 0
    background: transparent
    box-shadow: none
    backdrop-filter: none
    -webkit-backdrop-filter: none
    opacity: var(--header-top-control-opacity)
    transition: opacity 0.28s ease

  &__utility-divider
    width: 1px
    height: 18px
    background: rgba(82, 95, 114, 0.12)

  &__theme-button
    min-height: var(--header-theme-button-height)
    min-width: var(--header-theme-button-height)
    padding: 0
    border-radius: 999px
    color: var(--header-text-secondary)
    transition: background 0.28s ease, color 0.28s ease, border-color 0.28s ease, min-height 0.28s ease

    &--active
      color: var(--header-text-primary)
      background: var(--header-control-active)
      box-shadow: inset 0 0 0 1px var(--header-frost-border)

    &--solo
      color: var(--header-text-primary)
      background: color-mix(in srgb, white calc(var(--header-top-control-opacity) * 36%), transparent)
      box-shadow: none

  &__lang-switch
    display: inline-flex
    align-items: center
    gap: 2px
    min-height: calc(var(--header-control-height) - 8px)
    padding: 2px
    border-radius: 999px
    background: color-mix(in srgb, white calc(var(--header-top-control-opacity) * 28%), transparent)
    box-shadow: none

  &__lang-option
    min-height: 30px
    min-width: 38px
    padding: 0 10px
    border-radius: 999px
    color: var(--header-text-secondary)
    font-size: 0.74rem
    font-weight: 700
    letter-spacing: 0.16em
    transition: background 0.24s ease, color 0.24s ease

    &--active
      color: var(--header-text-primary)
      background: color-mix(in srgb, var(--header-control-active) calc(var(--header-top-active-opacity) * 100%), transparent)
      box-shadow: none

  &--scrolled
    --header-top-control-opacity: 0.7
    --header-top-active-opacity: 0.38

  &__menu-btn
    color: var(--header-text-primary)
    background: var(--header-control-bg)
    border: 1px solid var(--header-frost-border)
    box-shadow: 0 10px 24px rgba(18, 28, 40, 0.06)
    backdrop-filter: blur(10px)
    -webkit-backdrop-filter: blur(10px)
    transition: background 0.28s ease, border-color 0.28s ease

  &__drawer
    :deep(.q-drawer)
      background: transparent
      box-shadow: 18px 0 42px rgba(7, 17, 28, 0.22)

.drawer-shell
  height: 100%
  display: flex
  flex-direction: column
  overflow: hidden
  background: var(--drawer-shell-bg, linear-gradient(180deg, rgba(251, 249, 245, 0.97) 0%, rgba(245, 243, 239, 0.99) 100%))

.drawer-list
  flex: 1 1 auto
  margin-top: 0
  padding: 16px 14px 28px
  border-right: 0

  &__row
    width: 100%
    margin-top: 6px
    padding: 13px 10px
    border-radius: 16px
    color: var(--drawer-text-primary, rgba(18, 30, 44, 0.94))
    transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease

    &:hover
      background: var(--drawer-row-hover, rgba(201, 168, 96, 0.08))
      transform: translateX(3px)
      box-shadow: inset 0 0 0 1px var(--drawer-row-outline, rgba(201, 168, 96, 0.12))

  &__icon-wrap
    display: inline-flex
    align-items: center
    justify-content: center
    width: 34px
    height: 34px
    margin-right: 10px
    border-radius: 12px
    background: transparent

  &__icon
    color: var(--drawer-text-primary, #162231)

  &__title
    font-size: 1rem
    font-weight: 700
    letter-spacing: 0.01em

  &__text
    min-width: 0

    :deep(*)
      color: inherit

    &__caption
      margin-top: 3px
      color: var(--drawer-text-secondary, rgba(64, 76, 93, 0.64))
      font-size: 0.62rem
      letter-spacing: 0.06em


.drawer-top
  position: relative
  flex: 0 0 auto
  padding: 18px 14px 12px

  &__frame
    position: relative
    display: grid
    gap: 18px
    padding: 18px 16px 16px
    border-radius: 28px
    background: var(--drawer-top-bg, linear-gradient(180deg, rgba(18, 29, 43, 0.92), rgba(14, 22, 34, 0.98)))
    border: 1px solid var(--drawer-top-border, rgba(255, 255, 255, 0.08))
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.16)
    overflow: hidden

  &__glow
    position: absolute
    border-radius: 999px
    filter: blur(18px)
    pointer-events: none

    &--a
      top: 6px
      left: -8px
      width: 88px
      height: 88px
      background: rgba(163, 138, 99, 0.16)

    &--b
      right: 8px
      top: 18px
      width: 110px
      height: 64px
      background: rgba(120, 152, 184, 0.12)

  &__identity
    display: flex
    align-items: center
    gap: 12px

  &__copy
    min-width: 0

  &__controls
    display: flex
    align-items: center
    justify-content: flex-end
    gap: 8px

  &__role
    margin-bottom: 5px
    color: var(--drawer-text-muted, rgba(255, 244, 228, 0.72))
    font-size: 0.62rem
    font-weight: 700
    letter-spacing: 0.22em
    text-transform: uppercase

  &__img
    flex: 0 0 auto
    border: 1px solid rgba(255, 255, 255, 0.18)
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18)

    img
      width: 100%
      height: 100%
      object-fit: cover

  &__text
    color: var(--drawer-text-hero, rgba(255, 251, 244, 0.96))
    font-size: 1.28rem
    line-height: 1.06
    letter-spacing: 0.01em

  &__theme
    width: 34px
    height: 34px
    border-radius: 999px
    color: var(--drawer-text-hero, rgba(255, 247, 232, 0.92))
    background: var(--drawer-control-bg, rgba(255, 255, 255, 0.08))
    backdrop-filter: blur(14px)
    -webkit-backdrop-filter: blur(14px)

  &__lang
    display: inline-flex
    align-items: center
    gap: 2px
    padding: 2px
    border-radius: 999px
    background: var(--drawer-control-bg, rgba(255, 255, 255, 0.08))
    backdrop-filter: blur(14px)
    -webkit-backdrop-filter: blur(14px)

  &__lang-option
    min-width: 32px
    min-height: 30px
    border-radius: 999px
    color: var(--drawer-text-muted, rgba(255, 247, 232, 0.7))
    font-size: 0.7rem
    font-weight: 700
    letter-spacing: 0.16em

    &--active
      color: var(--drawer-text-hero, rgba(255, 251, 244, 0.96))
      background: var(--drawer-control-active, rgba(255, 255, 255, 0.14))

.app-header--light
  --drawer-shell-bg: linear-gradient(180deg, rgba(251, 249, 245, 0.98) 0%, rgba(244, 242, 238, 0.99) 100%)
  --drawer-top-bg: linear-gradient(135deg, rgba(20, 31, 47, 0.98) 0%, rgba(14, 22, 34, 0.98) 100%)
  --drawer-top-border: rgba(255, 255, 255, 0.08)
  --drawer-control-bg: rgba(255, 255, 255, 0.09)
  --drawer-control-active: rgba(255, 255, 255, 0.16)
  --drawer-text-primary: rgba(18, 30, 44, 0.94)
  --drawer-text-secondary: rgba(64, 76, 93, 0.64)
  --drawer-text-hero: rgba(255, 251, 244, 0.96)
  --drawer-text-muted: rgba(255, 244, 228, 0.72)
  --drawer-row-hover: rgba(201, 168, 96, 0.08)
  --drawer-row-outline: rgba(201, 168, 96, 0.12)

  .drawer-shell
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32)

.app-header--dark
  --drawer-shell-bg: linear-gradient(180deg, rgba(8, 16, 25, 0.99) 0%, rgba(9, 18, 28, 1) 100%)
  --drawer-top-bg: linear-gradient(135deg, rgba(16, 28, 43, 0.98) 0%, rgba(10, 18, 29, 0.98) 100%)
  --drawer-top-border: rgba(131, 171, 211, 0.12)
  --drawer-control-bg: rgba(255, 255, 255, 0.06)
  --drawer-control-active: rgba(255, 255, 255, 0.11)
  --drawer-text-primary: rgba(243, 237, 228, 0.94)
  --drawer-text-secondary: rgba(243, 237, 228, 0.52)
  --drawer-text-hero: rgba(243, 237, 228, 0.96)
  --drawer-text-muted: rgba(243, 237, 228, 0.62)
  --drawer-row-hover: rgba(255, 255, 255, 0.04)
  --drawer-row-outline: rgba(131, 171, 211, 0.12)

  .app-header__drawer
    :deep(.q-drawer)
      box-shadow: 18px 0 42px rgba(0, 0, 0, 0.42)

@media (max-width: 1023px)
  .app-header
    &__toolbar
      max-width: 100%
      padding: 0px

    &__panel
      gap: 12px
      padding: 10px 8px

    &__brand-role
      display: none

    &__brand-name
      gap: 6px

    &__brand-name-primary
      font-size: 0.98rem

    &__brand-name-secondary
      font-size: 0.72rem

    &__actions
      gap: 8px

    &__theme-button
      min-width: 40px
      padding: 0 10px

    &__lang-option
      min-width: 34px
      padding: 0 8px

@media (max-width: 599px)
  .app-header
    &__panel
      align-items: center
      padding: 8px 2px

    &__brand-copy
      max-width: 124px

    &__brand-name
      flex-direction: column
      align-items: flex-start
      gap: 0

    &__brand-name-secondary
      letter-spacing: 0.06em

    &__actions
      gap: 6px

    &__theme-button
      min-width: 36px
      min-height: 36px
      padding: 0 8px

    &__utility-rail
      gap: 4px
      padding: 4px

    &__utility-divider
      height: 14px

    &__lang-option
      min-width: 30px
      min-height: 28px
      padding: 0 6px

  .drawer-top
    padding: 14px 10px 10px

    &__text
      font-size: 1.14rem

    &__identity
      gap: 10px

    &__controls
      gap: 6px

    &__frame
      padding: 14px 12px 12px

    &__theme
      width: 32px
      height: 32px

    &__lang-option
      min-width: 30px
      min-height: 28px

  .drawer-list
    padding: 12px 8px 20px

    &__row
      padding: 9px 10px

    &__icon-wrap
      width: 36px
      height: 36px
      margin-right: 8px

    &__title
      font-size: 0.94rem

</style>
