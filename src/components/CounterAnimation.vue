<template>
  <span class="counter-animation">{{ displayValue }}</span>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'CounterAnimation',
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    duration: {
      type: Number,
      default: 2000 // 2 seconds
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const displayValue = ref('0')
    const hasAnimated = ref(false)

    const animateValue = (start, end, duration) => {
      // 如果已經動畫過，直接顯示最終值
      if (hasAnimated.value) {
        const numericValue = typeof end === 'string'
          ? parseInt(end.replace(/\D/g, ''))
          : end
        displayValue.value = numericValue.toString() + props.suffix
        return
      }

      // 解析數字部分（處理 "13+", "100+" 等格式）
      const numericValue = typeof end === 'string'
        ? parseInt(end.replace(/\D/g, ''))
        : end

      if (isNaN(numericValue)) {
        displayValue.value = end.toString()
        return
      }

      const startTime = performance.now()
      const endTime = startTime + duration

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // 使用 easeOutCubic 緩動函數
        const easeProgress = 1 - Math.pow(1 - progress, 3)

        const current = Math.floor(easeProgress * numericValue)
        displayValue.value = current.toString() + props.suffix

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          displayValue.value = numericValue.toString() + props.suffix
          hasAnimated.value = true
        }
      }

      requestAnimationFrame(animate)
    }

    const observeElement = () => {
      // 使用 Intersection Observer 偵測元素是否進入視窗
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.value) {
              animateValue(0, props.value, props.duration)
              observer.disconnect() // 只觸發一次
            }
          })
        },
        {
          threshold: 0.5 // 元素 50% 進入視窗時觸發
        }
      )

      // 在 nextTick 後觀察父元素
      setTimeout(() => {
        const element = document.querySelector('.counter-animation')
        if (element && element.parentElement) {
          observer.observe(element.parentElement)
        }
      }, 100)
    }

    onMounted(() => {
      observeElement()
    })

    watch(() => props.value, (newValue) => {
      if (!hasAnimated.value) {
        animateValue(0, newValue, props.duration)
      }
    })

    return {
      displayValue
    }
  }
}
</script>

<style scoped>
.counter-animation {
  font-weight: 700;
  display: inline-block;
  min-width: 1ch; /* 防止數字跳動 */
}
</style>
