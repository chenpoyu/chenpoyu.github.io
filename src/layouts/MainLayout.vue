<template>
  <q-layout view="hHh LpR lFr">
    <AppHeader />
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
      <div class="row footer">
        {{ $t('footer') }}
      </div>
    </q-page-container>
    <AjaxBar />
  </q-layout>
</template>

<script>
import AppHeader from 'layouts/Header.vue'
import AjaxBar from 'components/AjaxBar.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AjaxBar,
  },
}
</script>
