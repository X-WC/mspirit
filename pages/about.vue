<script setup lang="ts">
import {getImageUrl} from '../utils/images'

const aboutBusinessImgs = [
  getImageUrl('about-1-1.png'),
  getImageUrl('about-1-2.png'),
  getImageUrl('about-1-3.png'),
  getImageUrl('about-1-4.png'),
  getImageUrl('about-1-5.png'),
]

const bg1Url = getImageUrl('about-bg-1.png')
const bg2Url = getImageUrl('about-bg-2.png')
</script>

<template>
  <div class="bg-[#F9FAFB]">
    <!-- 顶部标题区域 -->
    <section class="px-5 sm:px-10 xl:px-16 xl:px-32 pt-10 pb-14 bg-no-repeat bg-cover bg-center"
             :style="`background-image: url(${bg1Url})`">
      <h1 class="font-semibold text-3xl sm:text-4xl xl:text-5xl m-0">ABOUT COMPANY</h1>
      <h2 class="font-semibold text-2xl sm:text-3xl xl:text-4xl m-0">公司简介</h2>
    </section>

    <!-- 简介部分 -->
    <section
        class="bg-no-repeat bg-cover bg-center pt-12 xl:pt-20 xl:pt-24 px-5 sm:px-10 xl:px-32 min-h-[400px] sm:min-h-[500px] xl:min-h-[573px]"
        :style="`background-image: url(${bg2Url})`">
      <h1 class="font-medium text-2xl sm:text-3xl xl:text-4xl text-[#104A7C] leading-tight sm:leading-[2.5rem] xl:leading-[3.5rem] mb-4 sm:mb-6 xl:mb-8">
        "观健智能"是一家<br class="hidden sm:block">致力于人工智能健康领域的公司。
      </h1>
      <p class="text-lg sm:text-xl text-[#14293B] leading-7 sm:leading-8 align-multiple-lines-of-text">
        公司通过 App 和软件集成，实现平台互联互通，<br class="hidden sm:block">
        为客户提供全面的健康服务并推动技术方案的实际应用。
      </p>
    </section>

    <!-- 业务范围 -->
    <section
        class="mx-5 sm:mx-10 xl:mx-16 xl:mx-32 -mt-20 sm:-mt-24 xl:-mt-28 xl:-mt-36 rounded-3xl bg-white text-center py-8 sm:py-12 xl:py-16">
      <h2 class="text-2xl sm:text-3xl font-semibold text-[#104A7C] mb-4 sm:mb-6 xl:mb-8">我们的业务范围</h2>
      <p class="leading-[32px] text-[#14293B] px-4 sm:px-8 xl:px-12">
        我们的业务范围涵盖多个领域，包括保险、健康、远程医疗、老年护理、员工健康以及运营安全等。<br class="hidden sm:block">
        我们致力于构建一个开放、安全且多互通的数据平台，推进数字化健康转型，拥抱未来健康。
      </p>
      <div class="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 xl:gap-8">
        <img
            v-for="item in aboutBusinessImgs"
            :key="item"
            :src="item"
            :alt="`业务图示 ${item}`"
            class="w-1/2 sm:w-1/3 xl:w-1/4 xl:w-1/6 p-2"
        />
      </div>
    </section>

    <!-- 技术与愿景 -->
    <section class="xl:px-32 px-4 sm:px-8 pt-8">
      <!-- AI技术 -->
      <div class="flex flex-col xl:flex-row xl:justify-around items-center gap-8 xl:gap-16 mb-16 xl:mb-24">
        <img src="/images/about-2.png" alt="AI 技术图片" class="w-full xl:w-[402px] mb-4"/>
        <div>
          <h2 class="section-title">AI技术</h2>
          <p class="section-text max-w-[460px] align-multiple-lines-of-text">"30秒扫描技术"是多位专家基于 AI 和大数据算法，耗时多年的研究成果。 该技术能够精准测量身体、心理、甚至亚临床疾病风险指标，并实现了全球首个非接触式的血压测量方式。
          </p>
        </div>
      </div>

      <!-- 公司愿景 -->
      <div class="flex flex-col xl:flex-row xl:justify-around items-center gap-8 xl:gap-16 mb-16 xl:mb-32">
        <div>
          <h2 class="section-title">公司愿景</h2>
          <p class="section-text max-w-[460px] align-multiple-lines-of-text">为了推动人类未来健康事业的发展，这一成果将被推广至全球， "观健智能"将在中国引入 AI 健康技术，并计划通过与多个行业和企业的合作，构建多个应用场景，促使 AI 健康技术广泛融入日常生活和工作，从而惠及大众。</p>
        </div>
        <img src="/images/about-3.png" alt="公司愿景图" class="w-full md:w-[405px] mb-4"/>
      </div>

      <!-- 引用标语 -->
      <div
          class="pb-16 md:pb-32 text-center font-semibold text-3xl sm:text-4xl md:text-5xl text-[#2B9B81] leading-[3rem] sm:leading-[4rem] md:leading-[6rem]">
        <span class="text-sp-font">“</span>
        科技创造美好生活，实现未来健康
        <span class="text-sp-font">”</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-sp-font {
  color: #FFFFFF;
  -webkit-text-stroke: 1px #2B9B81;
}

.section-title {
  @apply text-2xl sm:text-3xl font-semibold text-[#104A7C] mb-4 sm:mb-6 md:mb-8;
}

.section-text {
  @apply text-sm text-[#14293B] leading-[32px];
}
</style>
