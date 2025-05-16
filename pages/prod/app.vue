<script setup lang="ts">
import Carousel2 from "~/components/Carousel2.vue";
import {getImageUrl} from "~/utils/images";

const items = [
  getImageUrl('app-1.png'),
  getImageUrl('app-2.png'),
  getImageUrl('app-3.png'),
  getImageUrl('app-4.png'),
  getImageUrl('app-5.png'),
]
</script>

<template>
  <div class="prod-container mt-10 px-4 xl:px-20 py-10 xl:py-20 flex flex-col xl:flex-row xl:justify-around">
    <section class="flex-1/2">
      <h1 class="mt-4 xl:mt-10 font-semibold text-3xl xl:text-5xl m-0">MSIPIRIT Mobile App</h1>
      <h2 class="font-semibold text-2xl xl:text-4xl m-0">手机 App</h2>
      <div class="mt-6 xl:mt-12">
        <div class="font-semibold color-[#104A7C] text-lg xl:text-xl leading-7 mb-4">
          便携性:随时随地
        </div>
        <div class="font-semibold color-[#104A7C] text-lg xl:text-xl leading-7 mb-4">
          初期成本及更新成本低
        </div>
        <div class="font-semibold color-[#104A7C] text-lg md:text-xl leading-7 mb-4">
          易于界面友好，个性化设置"维护
        </div>
        <div class="font-semibold color-[#104A7C] text-lg md:text-xl leading-7 mb-4">
          实时通知，社交属性
        </div>
        <div class="font-semibold color-[#104A7C] text-lg md:text-xl leading-7 mb-4">
          普及率高，易推广
        </div>
        <div class="font-semibold color-[#104A7C] text-lg md:text-xl leading-7">
          低耗能
        </div>
      </div>
    </section>
    <section class="flex-1/2 flex items-center justify-center mt-8 md:mt-0">
      <div class="carousel-container w-full">
        <carousel2 :items="items"/>
      </div>
    </section>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .prod-container {
    gap: 2rem;
  }
}
</style>

