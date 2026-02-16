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
    <div class="row justify-center q-gutter-sm q-my-lg">
      <div
        v-for="(data, index) in portfolios"
        :key="index"
        class="q-pa-sm flex flex-center relative-position"
      >
        <transition name="q-transition--scale">
          <q-card
            v-if="data"
            :class="['portfolio-item', data.link ? 'link' : '']"
            @click="openLink(data.link)">
            <img :src="`${data.img}`" height="300px"/>
            <!-- <q-card-section>
              <div class="text-h6">{{ data.title }}</div>
            </q-card-section> -->
          </q-card>
        </transition>
      </div>
    </div>
  </q-page>
</template>

<script>
// 作品
// 我們
// 服務
const portfolios = [
  {
    title: '車聯網系統',
    img: '/profolio/luxclub.png',
    link: 'https://www.luxgen-motor.com.tw/'
  },
  {
    title: '電子商城',
    img: '/profolio/nitori.png',
    link: 'https://www.nitori-net.tw'
  },
  {
    title: '健康器材',
    img: '/profolio/lifespan.jpg',
    link: 'https://www.lifespanfitness.com/pages/app'
  },
  {
    title: '閱讀APP',
    img: '/profolio/weread.png',
    link: 'https://appadvice.com/game/app/weread-e8-ae-80-e6-9b-b8-e7-b9-aa/1458277415'
  },
  {
    title: '充換電管理系統',
    img: '/profolio/cpc.jpg',
    link: 'https://www.fetnet.net/content/cbu/tw/lifecircle/tech/2022/12/scooter.html'
  },
  {
    title: '鳥擊防制',
    img: '/profolio/birdstrike.jpg',
    link: 'https://birdcontrol.caa.gov.tw/login'
  },
  {
    title: '榮安財金',
    img: '/profolio/zion.jpg',
    link: 'https://chenpoyu.github.io/demo/zion/#/'
  },
  {
    title: '國道邊坡全生命週期管理系統',
    img: '/profolio/slope.jpg',
    link: 'https://slopenew.freeway.gov.tw/slope'
  },
  {
    title: '國道隧道管理系統',
    img: '/profolio/tunnel.png',
    link: 'https://tunnel.freeway.gov.tw/'
  },
  {
    title: '公文交換系統',
    img: '/profolio/space.png',
    link: ''
  },
  {
    title: '711會員',
    img: '/profolio/711.png',
    link: 'https://group.openpoint.com.tw/cdn/index.html'
  },
  {
    title: '星巴克',
    img: '/profolio/startbuck.png',
    link: ''
  },
  {
    title: '外貿協會',
    img: '/profolio/TAITRA.png',
    link: 'https://www.taitra.org.tw/'
  },
  {
    title: '生活大管家',
    img: '/profolio/55688life.png',
    link: 'https://www.55688life.com.tw/'
  },
  {
    title: '財稅系統',
    img: '/profolio/tax.png',
    link: ''
  },
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
      const index = parseInt(entry.target.dataset.id, 10)
      setTimeout(() => {
        this.portfolios.splice(index, 1, entry.isIntersecting)
      }, 50)
    },
    openLink(link) {
      if (link) {
        window.open(link, '_blank');
      }
    }
  }
}

// person intro
// skill
// 作品
</script>

<style lang="scss" scoped>
.portfolio-item {
  height: 300px;
  width: 300px;
}
.link {
  cursor: pointer;
}
.left {
  background-position: 0% 50%;
}
</style>
