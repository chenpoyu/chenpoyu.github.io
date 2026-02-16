<template>
  <q-item clickable v-close-popup @click="onItemClick">
    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Language',
  props: {
    title: {
      type: String,
      required: true
    },

    short: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { locale } = useI18n()

    const onItemClick = () => {
      locale.value = props.short
    }

    return {
      onItemClick
    }
  }
}
</script>
