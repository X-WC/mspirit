<template>
  <div class="marquee-container" ref="container">
    <div class="marquee-content" ref="content">
      <div class="marquee-item" ref="item">{{ props.content }}</div>
      <div class="marquee-item">{{ props.content }}</div>
      <div class="marquee-item">{{ props.content }}</div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'

const props = defineProps({
  content: String,
  speed: { // px per second
    type: Number,
    default: 100
  }
})

const container = ref(null)
const content = ref(null)
const item = ref(null)

let animationFrame = null
let startTime = null
let offsetX = 0
let paused = false

const loop = (timestamp) => {
  if (paused) {
    animationFrame = requestAnimationFrame(loop)
    return
  }

  if (!startTime) startTime = timestamp
  const delta = timestamp - startTime
  startTime = timestamp

  offsetX -= props.speed * (delta / 1000)

  if (item.value && -offsetX >= item.value.offsetWidth + 100) {
    offsetX += item.value.offsetWidth + 100
  }

  if (content.value) {
    content.value.style.transform = `translateX(${offsetX}px)`
  }

  animationFrame = requestAnimationFrame(loop)
}

onMounted(() => {
  requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-size: 3.4375rem;
  color: rgba(57, 209, 170, 0.4);
}

.marquee-content {
  display: flex;
  will-change: transform;
}

.marquee-item {
  flex-shrink: 0;
  padding-right: 100px;
  white-space: nowrap;
}

@media screen and (max-width: 1440px) {
  .marquee-container {
    height: 3.75rem;
    font-size: 2.625rem;
    line-height: 3.75rem;
  }
}
</style>
