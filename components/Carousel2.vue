<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Navigation} from 'swiper/modules'

const props = defineProps({
  items: {
    type: Array as () => string[],
    default: () => []
  }
})
</script>

<template>
  <Swiper
      class="w-full md:max-w-[540px]"
      :navigation="true"
      :modules="[Pagination, Navigation]"
      :pagination="props.items.length > 1 ? { el: '.swiper-pagination', clickable: true } : false"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }"
  >
    <SwiperSlide v-for="(item, index) in props.items" :key="index" class="flex items-center justify-center">
      <img :src="item" alt="" class="w-full h-auto object-contain max-h-[350px] md:max-h-[432px] md:max-w-[454px]">
    </SwiperSlide>
  </Swiper>
  <!-- Pagination -->
  <div v-if="props.items.length > 1" class="swiper-pagination mt-4 !relative"></div>
</template>

<style scoped>
:deep(.swiper) {
  height: auto;
  min-height: 350px;
}

@media (min-width: 640px) {
  :deep(.swiper) {
    min-height: 500px;
  }
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #FFFFFF;
  opacity: 1;
}

:deep(.swiper-slide) {
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 640px) {
  :deep(.swiper-slide) {
    padding: 0 3rem;
  }

  :deep(.swiper-pagination-bullet) {
    width: 14px;
    height: 14px;
  }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 30px;
  height: 30px;
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

@media (min-width: 640px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 40px;
    height: 40px;
    background-size: 42px 42px;
  }
}

:deep(.swiper-button-prev) {
  background-image: url('/images/arrow-l.svg');
  left: 0;
}

:deep(.swiper-button-next) {
  background-image: url('/images/arrow-r.svg');
  right: 0;
}

/* 隐藏默认的箭头 */
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  content: '';
}

/* 调整导航按钮在移动端的位置和样式 */
@media (max-width: 639px) {
  :deep(.swiper-button-prev) {
    left: 0;
  }

  :deep(.swiper-button-next) {
    right: 0;
  }

  :deep(.swiper-button-disabled) {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
}
</style>
