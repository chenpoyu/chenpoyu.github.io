<template>
  <q-page class="">
    <div class="row">
      <q-img
        src="~assets/service.jpeg"
        height="300px"
        native-context-menu
      >
        <div :class="['absolute-full', 'flex', 'flex-center', $q.screen.gt.xs ? 'text-h4' : 'text-h5']">
          {{ $t('index.label') }}
        </div>
      </q-img>
    </div>
    <div class="row justify-center q-gutter-sm">
      <div
        v-for="(data, index) in portfolios"
        :key="index"
        class="portfolio-item q-pa-sm flex flex-center relative-position"
        v-intersection="onIntersection"
      >
        <transition name="q-transition--scale">
          <q-card v-if="data">
            <q-img src="~assets/profolio/711.png" height="200px" />

            <q-card-section>
              <div class="text-h6">{{ data.title }}</div>
            </q-card-section>
          </q-card>
        </transition>
      </div>
    </div>
    <!-- <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection> -->
    <!-- <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card> -->
  </q-page>
</template>

<script>
// 作品
// 我們
// 服務
const portfolios = [
  // { title: '711會員', img: '~assets/profolio/711.png' },
  // { title: '星巴克', img: '~assets/profolio/startbuck.png' },
  // { title: '閱讀APP', img: 'startbuck.png' },
  // { title: '外貿協會', img: 'TAITRA.png' },
  // { title: '生活大管家', img: '55688life.png' },
  // { title: '財稅系統', img: 'tax.png' },
];
export default {
  name: 'Index',
  data() {
    return {
      portfolios: portfolios,
    }
  },
  methods: {
    onIntersection (entry) {
      console.log(entry)
      const index = parseInt(entry.target.dataset.id, 10)
      setTimeout(() => {
        this.portfolios.splice(index, 1, entry.isIntersecting)
      }, 50)
    }
  }
}

// person intro
// skill
// 作品
</script>

<style lang="sass" scoped>
.portfolio-item
  height: 290px
  width: 290px
</style>