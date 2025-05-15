<script setup lang="ts">

</script>

<template>
  <div>
    <!--  首页视频  -->
    <div class="relative">
      <!-- 跑马灯 -->
      <section class="absolute top-0 md:top-[3%] w-full">
        <ScrollText class="scroll-text text-font" content="MSPIRIT MSPIRIT MSPIRIT"
                    :speed="60"></ScrollText>
      </section>
      <!-- 简介 -->
      <section class="absolute top-[15%] left-[5%] w-[50%] md:top-1/3 md:left-[10%] md:w-[30%]">
        <div>
          <img src="/images/home-main-text.png" alt="Mspirit" class="w-full">
        </div>
        <p class="hidden md:block align-multiple-lines-of-text mt-6 text-[#1D1C1C] text-base md:text-lg">
          健康指的是心理、社会、情感、身体和精神多方面的安康。
          <br>
          未来健康由数字化转型驱动，AI赋能，通过互通数据和安全
          <br>
          平台实现，为健康带来变革，Mspirit-中文产品名:镜灵，应
          <br>
          时而生。</p>
      </section>
      <!-- 特点 -->
      <section class="absolute bottom-[15%] right-[5%] w-[50%] md:top-2/3 md:right-[15%] md:w-[30%]">
        <div>
          <img src="/images/home-main-text-2.png" alt="科技创造美好生活 实现未来健康" class="w-full">
        </div>
      </section>
      <video class="hidden md:block md:w-full" autoplay poster="/images/heart-home-bg.png" muted loop
             src="/images/heart.mp4"></video>
      <video class="block md:hidden w-full" autoplay poster="/images/heart-home-m.png" muted loop
             src="/images/heart-m.mp4"></video>
    </div>
    <div class="block px-2 md:hidden">
      <p class="align-multiple-lines-of-text text-[#1D1C1C] text-base md:text-lg">健康指的是心理、社会、情感、身体和精神多方面的安康。未来健康由数字化转型驱动，AI赋能，通过互通数据和安全平台实现，为健康带来变革，Mspirit-中文产品名：镜灵，应时而生。</p>
    </div>
    <!--  技术实现  -->
    <section class="flex flex-col md:flex-row items-center justify-around px-4 md:px-32 mb-12 bg-[#FDFEFF]">
      <div class="w-full md:w-3/5">
        <img class="w-full" src="/images/home-teco.png" alt="teco">
      </div>
      <div class="text-[#323232] mt-8 md:mt-0">
        <div class="font-semibold text-2xl md:text-4xl">核心技术</div>
        <div class="mt-4 mb-10 align-multiple-lines-of-text text-sm md:text-base">核心技术（TOI）（ Transdermal Optical
          Imaging
          <br>Technology）是TOI技术利用了一些先进的光电容积描记
          <br>法（PPG）技术，通过分析面部视频中的血流信号来预测
          <br>健康数据（如血压）。简单来说，TOI的工作原理可以分为
          <br>以下几个关键步骤：
        </div>
        <NuxtLink to="/teco">
          <button class="button bg-[#14293B]">了解更多</button>
        </NuxtLink>
      </div>
    </section>
    <!--  产品一览  -->
    <section class="px-4 md:px-32 pt-10 pb-28"
             style="background: linear-gradient( 180deg, #FFFFFF 0%, #9FE7D4 57%, #7BDEFC 100%);">
      <h2 class="font-semibold text-2xl md:text-4xl text-[#323232] text-center">
        产品一览
      </h2>
      <div class="relative flex flex-wrap justify-center gap-4 md:gap-8">
        <div class="product-content">
          <div class="absolute top-[40%] left-[15%] w-[65%] h-[5%] bg-[#7DD6BD] opacity-67 blur-[15px]"></div>
          <div class="w-[40%] absolute inset-x-0 top-[-20%] left-[30%]">
            <img src="/images/product-aio.png" alt="AIO 一体机" class="w-full">
          </div>
          <div class="product-name">
            AIO 一体机
          </div>
          <NuxtLink to="/prod/aio">
            <button class="button bg-[#39D1AA]">了解更多</button>
          </NuxtLink>
        </div>
        <div class="product-content">
          <div class="absolute top-[40%] left-[15%] w-[65%] h-[5%] bg-[#7DD6BD] opacity-67 blur-[15px]"></div>
          <div class="w-[35%] absolute inset-x-0 top-[-20%] left-[32%]">
            <img src="/images/product-app.png" alt="手机 APP" class="w-full">
          </div>
          <div class="product-name">
            手机 APP
          </div>
          <NuxtLink to="/prod/app">
            <button class="button bg-[#39D1AA]">了解更多</button>
          </NuxtLink>
        </div>
        <div class="product-content">
          <div class="absolute top-[40%] left-[15%] w-[65%] h-[5%] bg-[#7DD6BD] opacity-67 blur-[15px]"></div>
          <div class="w-[80%] absolute inset-x-0 top-[-20%] left-[10%]">
            <img src="/images/product-solution.png" alt="定制化服务" class="w-full">
          </div>
          <div class="product-name">
            定制化服务
          </div>
          <NuxtLink to="/prod/solution">
            <button class="button bg-[#39D1AA]">了解更多</button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-font {
  font-family: Source Han Sans CN;
}

.scroll-text {
  font-weight: 800;
  color: transparent;
  text-align: left;
  -webkit-text-stroke: 2px #FFF;
}

:deep(.marquee-item) {
  padding-right: 1.25rem;
}

.product-content {
  position: relative;
  width: min(346px, 90%);
  background: #FFFFFF;
  box-shadow: 0 0.375rem 0.375rem 0.0625rem rgba(0, 0, 0, 0.16);
  border-radius: 1.125rem;
  margin-top: 7rem;
  text-align: center;
  padding-bottom: 2.5rem;
}

.product-name {
  padding-top: 13rem;
  padding-bottom: 1.125rem;
  font-weight: 600;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: #14293B;
  line-height: 1.4;
}

@media screen and (max-width: 480px) {
  .scroll-text {
    font-weight: 600;
    -webkit-text-stroke: 1px #FFF;
  }

  :deep(.marquee-container) {
    font-size: 2rem;
  }

  :deep(.marquee-item) {
    padding-right: .5rem;
  }
}
</style>
