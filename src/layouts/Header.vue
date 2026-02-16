<template>
  <q-header elevated>
    <q-toolbar>
      <template v-if="!$q.screen.gt.xs">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-drawer
          v-model="leftDrawerOpen"
          bordered
        >
          <!-- <q-scroll-area class="drawer-list"> -->
            <q-tree
              :nodes="menus"
              node-key="title"
              default-expand-all
              no-connectors
              class="drawer-list"
            >
              <template v-slot:default-header="prop">
                <div class="row items-center drawer-list__row" @click="to(prop.node.to, prop.node.open)">
                  <q-icon :name="prop.node.icon" class="q-mr-sm" size="24px"/>
                  <div class="drawer-list__text">
                    <div class="text-weight-bold">{{ $t(prop.node.title) }}</div>
                    <div v-if="prop.node.caption" class="text-weight-light drawer-list__text__caption">
                      {{ $t(prop.node.caption) }}
                    </div>
                  </div>
                </div>
              </template>
            </q-tree>
          <!-- </q-scroll-area> -->

          <q-img class="absolute-top drawer-top" src="~assets/code.png">
            <div class="absolute-bottom bg-dimmed">
              <q-avatar size="84px" class="q-mb-sm drawer-top__img">
                <img src="~assets/poyu.jpg">
              </q-avatar>
              <div class="text-weight-bold drawer-top__text"> {{ $t('myname') }} </div>
            </div>
          </q-img>
        </q-drawer>
      </template>
      <template v-else>
        <q-toolbar-title>
          {{ $t('myname') }}
        </q-toolbar-title>

        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs
          v-if="$q.screen.gt.xs"
          v-model="tab"
          inline-label
          shrink
          narrow-indicator
        >
          <template v-for="menu in menus">
            <q-route-tab
              v-if="!menu.to.startsWith('http')"
              :key="'route-' + menu.title"
              :name="menu.title"
              :label="$t(menu.title)"
              :to="menu.to"
            />
            <q-tab
              v-else
              :key="'tab-' + menu.title"
              :name="menu.title"
              :label="$t(menu.title)"
              @click="to(menu.to, menu.open)"
            />
          </template>
        </q-tabs>
      </template>

      <q-space />

      <q-toggle
        v-model="isDark"
        unchecked-icon="fas fa-moon"
        checked-icon="far fa-sun"
        color="primary"
        keep-color
        size="md"
      />

      <q-btn icon="language">
        <q-menu :offset="[0, 10]">
          <q-list>
            <Language
              v-for="lang in languages"
              :key="lang.title"
              v-bind="lang"
            />
          </q-list>
        </q-menu>
      </q-btn>

    </q-toolbar>
  </q-header>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useParamsStore } from 'stores/params'
import Language from 'components/Language.vue'

export default {
  name: 'AppHeader',
  components: {
    Language,
  },
  setup() {
    const $q = useQuasar()
    const router = useRouter()
    const paramsStore = useParamsStore()

    const leftDrawerOpen = ref(false)
    const tab = ref('')
    const isDark = ref($q.dark.isActive)

    const languages = computed(() => paramsStore.getLanguages)
    const menus = computed(() => paramsStore.getMenus)

    watch(isDark, (val) => {
      $q.dark.set(val)
    })

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

    return {
      leftDrawerOpen,
      languages,
      menus,
      tab,
      isDark,
      to
    }
  }
}
</script>

<style lang="sass" scoped>
.drawer-list
  height: calc(100% - 170px)
  margin-top: 180px
  border-right: 1px solid #ddd

  &__row
    margin-top: 5px

  &__text
    padding-left: 10px

    &__caption
      font-size: 0.5rem


.drawer-top
  height: 170px

  &__img
    img
      width: 100%
      height: 100%
      object-fit: contain

  &__text
    font-size: 1.5rem

</style>
