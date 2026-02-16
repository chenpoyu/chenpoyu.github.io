<template>
  <q-ajax-bar
    ref="bar"
    position="bottom"
    color="info"
    size="10px"
    skip-hijack
  />
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useParamsStore } from 'stores/params'

export default {
  name: 'AjaxBar',
  setup() {
    const paramsStore = useParamsStore()
    const bar = ref(null)

    const isLoading = computed(() => paramsStore.getLoading)

    watch(isLoading, (newVal) => {
      if (newVal) {
        bar.value?.start()
      } else {
        bar.value?.stop()
      }
    })

    return {
      bar
    }
  }
}
</script>
