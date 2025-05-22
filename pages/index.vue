<script setup lang="ts">

</script>

<template>
  <div>
    <!-- 首页视频区域 -->
    <div class="relative">
      <!-- 简介（大屏） -->
      <section class="absolute z-10 top-[15%] left-[4rem] w-[50%] xl:top-1/3 xl:left-[8rem] xl:w-[30%]">
        <div>
          <img src="/images/home-main-text.png" alt="Mspirit" class="w-full">
        </div>
        <p class="max-w-[450px] mt-6 align-multiple-lines-of-text text-[#1D1C1C] hidden xl:block xl:text-lg">健康指的是心理、社会、情感、身体和精神多方面的安康。未来健康由数字化转型驱动，AI赋能，通过互通数据和安全平台实现，为健康带来变革，Mspirit-中文产品名：镜灵，应时而生。</p>
      </section>

      <!-- 特点图 -->
      <section class="absolute z-10 bottom-[15%] right-[4rem] w-[50%] xl:top-2/3 xl:right-[8rem] xl:w-[30%]">
        <div>
          <img src="/images/home-main-text-2.png" alt="科技创造美好生活 实现未来健康" class="w-full">
        </div>
      </section>

      <!-- 背景视频（大屏） -->
      <div class="w-full overflow-hidden pointer-events-none inset-0 z-0 hidden xl:block xl:min-h-[500px]">
        <video
            class="w-full transform scale-110 origin-center"
            autoplay
            muted
            loop
            poster="/images/heart-home-bg.png"
        >
          <source src="/images/heart.mp4" type="video/mp4"/>
        </video>
      </div>

      <!-- 背景视频（移动） -->
      <div class="w-full overflow-hidden pointer-events-none inset-0 z-0 block xl:hidden">
        <video
            class="w-full transform scale-110 origin-center"
            autoplay
            muted
            loop
            poster="/images/heart-home-m.png"
        >
          <source src="/images/heart-m.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>

    <!-- 简介（移动端） -->
    <div class="block px-2 xl:hidden">
      <p class="align-multiple-lines-of-text text-[#1D1C1C] xl:text-lg">健康指的是心理、社会、情感、身体和精神多方面的安康。未来健康由数字化转型驱动，AI赋能，通过互通数据和安全平台实现，为健康带来变革，Mspirit-中文产品名：镜灵，应时而生。</p>
    </div>

    <!-- 技术实现 -->
    <section class="flex flex-col xl:flex-row items-center justify-between px-4 xl:pl-32 xl:pr-36 mb-12 bg-[#FDFEFF]">
      <div class="w-full xl:w-3/5">
        <img class="w-full" src="/images/home-teco.png" alt="teco">
      </div>
      <div class="text-[#323232] mt-8 xl:w-[414px] xl:mt-0">
        <div class="font-semibold text-2xl xl:text-4xl">核心技术</div>
        <p class="my-4 align-multiple-lines-of-text text-sm xl:mb-10 xl:text-base">核心技术（TOI）（Transdermal Optical Imaging Technology）是TOI技术利用了一些先进的光电容积描记法（PPG）技术，通过分析面部视频中的血流信号来预测健康数据（如血压）。简单来说，TOI的工作原理可以分为以下几个关键步骤：</p>
        <NuxtLink to="/teco">
          <button class="button bg-[#14293B]">了解更多</button>
        </NuxtLink>
      </div>
    </section>

    <!-- 产品一览 -->
    <section
        class="px-4 xl:px-32 pt-10 pb-28"
        style="background: linear-gradient(180deg, #FFFFFF 0%, #9FE7D4 57%, #7BDEFC 100%);"
    >
      <h2 class="font-semibold text-2xl xl:text-4xl text-[#323232] text-center">
        产品一览
      </h2>

      <div class="relative flex flex-wrap justify-center gap-4 xl:gap-8">
        <ProductCard
            name="AIO 一体机"
            image="/images/product-aio.png"
            alt="AIO 一体机"
            link="/prod/aio"
            imageWrapperClass="w-[40%] absolute inset-x-0 top-[-20%] left-[30%]"
        />

        <ProductCard
            name="手机 APP"
            image="/images/product-app.png"
            alt="手机 APP"
            link="/prod/app"
            imageWrapperClass="w-[35%] absolute inset-x-0 top-[-20%] left-[32%]"
        />

        <ProductCard
            name="场景解决方案"
            image="/images/product-solution.png"
            alt="场景解决方案"
            link="/prod/solution"
            imageWrapperClass="w-[80%] absolute inset-x-0 top-[-20%] left-[10%]"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
