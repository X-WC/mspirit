<template>
  <div>
    <!-- Swiper Carousel -->
    <Swiper
        :modules="[Pagination, Navigation, FreeMode]"
        slides-per-view="auto"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 }
        }"
        :pagination="showPagination ? { el: '.swiper-pagination', clickable: true } : false"
        :free-mode="true"
        grabCursor
        class="pb-8 relative"
    >
      <SwiperSlide
          v-for="item in advantages"
          :key="item.index"
          class="bg-white rounded-2xl shadow-md px-6 py-4"
      >
        <div class="flex justify-between items-start">
          <img :src="item.icon" class="w-[54px] h-[54px]"/>
        </div>
        <p class="text-2xl leading-10 font-bold text-[#2E2E2E] mt-3">{{ item.number }}/</p>
        <h3 class="text-2xl leading-10 font-bold text-[#2E2E2E] mt-1">{{ item.title }}</h3>
        <p class="leading-[32px] text-[#323232] mt-2 whitespace-pre-line">
          {{ item.desc }}
        </p>
      </SwiperSlide>
      <!-- Pagination -->
      <div v-if="showPagination" class="swiper-pagination mt-4 !relative"></div>
    </Swiper>
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Navigation, FreeMode} from 'swiper/modules'
import {getImageUrl} from "~/utils/images.js";

const props = defineProps({
  showPagination: {
    type: Boolean,
    default: true
  }
})

const advantages = [
  {
    index: 1,
    icon: getImageUrl('market-advantage-1.png'),
    number: '01',
    title: '多指标合一',
    desc: `多达30多项身体检测和预测指标；
    而市场产品类似产品只能实现部分测量`
  },
  {
    index: 2,
    icon: getImageUrl('market-advantage-2.png'),
    number: '02',
    title: '多延展性',
    desc: `指标同步在不断的添加和更新中（精神健康等）`
  },
  {
    index: 3,
    icon: getImageUrl('market-advantage-3.png'),
    number: '03',
    title: '操作简单易用',
    desc: `操作简单易用，30 秒内，提供结果，数据处理效率远超同类产品`
  },
  {
    index: 4,
    icon: getImageUrl('market-advantage-4.png'),
    number: '04',
    title: '多设备切换',
    desc: `多设备间切换：一体机，手机，网页，一个账号多平台切换，不受设备限制，真正实现随时随地`
  }, {
    index: 5,
    icon: getImageUrl('market-advantage-5.png'),
    number: '05',
    title: '定制化解决方案',
    desc: `针对特定场景（如基层医疗、企业健康管理）提供定制化解决方案。`
  }, {
    index: 6,
    icon: getImageUrl('market-advantage-6.png'),
    number: '06',
    title: '整合能力',
    desc: `提供端到端的解决方案，包括硬件设备、软件平台和数据服务`
  }, {
    index: 7,
    icon: getImageUrl('market-advantage-7.png'),
    number: '07',
    title: '本地化部署与云服务',
    desc: `提供灵活的部署方式，满足客户对数据安全和隐私的需求。`
  }
]
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #FFFFFF;
  opacity: 1;
}

:deep(.swiper-pagination) {
  text-align: left;
}

:deep(.swiper-wrapper) {
  height: 289px;
  width: 350px;
}
</style>
