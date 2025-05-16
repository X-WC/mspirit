<script setup lang="ts">
import {getImageUrl} from '../utils/images'

const featureList = [{
  title: '非接触方式',
  content: '“镜灵”实现了全球首个非接触式的血压测量方式',
  url: getImageUrl('icon-stop.png'),
}, {
  title: 'AI 科技介入',
  content: '测量和风险预测并存',
  url: getImageUrl('icon-ai.png'),
}, {
  title: '极少耗时',
  content: '30秒脸部扫描 获得多种健康指标',
  url: getImageUrl('icon-time.png'),
}, {
  title: '极低成本',
  content: '与身体健康检测费用相比，“镜灵”的价格极其低廉',
  url: getImageUrl('icon-tb.png'),
}, {
  title: '随时随地',
  content: '提供了全场景服务，线下一体屏，线上APP，随时随地健康检',
  url: getImageUrl('icon-app.png'),
}, {
  title: '多维度检测',
  content: '最多100项健康检测指标，30秒内获得结果',
  url: getImageUrl('icon-xh.png'),
}, {
  title: '数据安全',
  content: '架构数据安全体系，减少客户对隐私及数据泄露的风险',
  url: getImageUrl('icon-safe.png'),
}, {
  title: '多场景应用',
  content: '保障数据安全，结合SaaS服务，为企业客户提供各行业定制化服务',
  url: getImageUrl('icon-df.png'),
}]
</script>

<template>
  <div>
    <!--  产品介绍  -->
    <section class="relative z-10">
      <div class="flex flex-col xl:flex-row justify-around px-4 xl:px-32 mt-9 gap-9">
        <div class="flex-1/2">
          <h1 class="font-semibold text-3xl xl:text-5xl m-0">PRODUCT INTRODUCTION</h1>
          <h2 class="font-semibold text-2xl xl:text-4xl m-0">产品介绍</h2>
          <p class="mt-8 xl:mt-16 h-auto md:min-h-[185px] md:overflow-hidden xl:h-44 align-multiple-lines-of-text">Mspirit（中文产品名：镜灵）是一款采用面部识别技术和AI算法"运用NuraLogix
            技术"的健康管理产品，旨在通过简单、无接触、无创的方式帮助用户监控健康状况。仅需30秒，"镜灵"利用透皮光学成像技术检测面部和监测血流。AI
            算法结合这些数据提供可多大100多个健康参数。"镜灵"在提供包括血压，体重指数，心率变异性，脉搏，呼吸频率，皮肤年龄等健康信息同时，还能提供糖尿病，心血管疾病，中风，
            高血压，脂肪肝等风险评估，以及精神压力和抑郁风险评估。
          </p>
        </div>
        <div class="mt-4 xl:mt-1 flex-auto">
          <img class="w-full xl:min-w-[560px]" src="/images/product-biometrics.png" alt="">
        </div>
      </div>
    </section>
    <!--  特点介绍  -->
    <section class="-mt-20 xl:-mt-40 z-0 features-container">
      <!--   滚动文字  -->
      <div class="mt-10 xl:mt-20">
        <ScrollText content="PRODUCT  INTRODUCTION" :speed="60" />
      </div>
      <div class="flex flex-wrap justify-center gap-4 pt-4 pb-8 px-4 xl:px-[6%]">
        <div v-for="item in featureList" :key="item.title"
          class="w-full sm:w-[48%] xl:w-[24%] bg-[#ffffffcc] rounded-lg px-4 pt-5 pb-2">
          <div class="size-10">
            <img :src="item.url" :alt="item.title">
          </div>
          <div class="font-semibold text-lg xl:text-xl text-[#2B9B81] pt-3.5 pb-2">
            {{ item.title }}
          </div>
          <div class="leading-[32px] text-[#323232] overflow-hidden text-ellipsis">
            {{ item.content }}
          </div>
        </div>
      </div>
    </section>
    <!--  产品一览  -->
    <section class="px-4 xl:px-32 pt-10 pb-28 bg-[#F9FAFB]">
      <h2 class="font-semibold text-3xl xl:text-4xl text-[#323232] text-center">
        产品一览
      </h2>
      <div class="relative flex flex-wrap justify-center gap-4 xl:gap-8">
        <div class="product-content w-full sm:w-[346px]">
          <div class="absolute top-[156px] left-[60px]"
            style="width: 226px;height: 20px;background: #7DD6BD;opacity: 0.67;filter: blur(15.839799880981445px);">
          </div>
          <div style="width: 148px" class="absolute inset-x-0 top-[-71px] left-[99px]">
            <img src="/images/product-aio.png" alt="AIO 一体机">
          </div>
          <div class="product-name">
            AIO 一体机
          </div>
          <NuxtLink to="/prod/aio"><button class="button bg-[#39D1AA]">了解更多</button></NuxtLink>
        </div>
        <div class="product-content w-full sm:w-[346px]">
          <div class="absolute top-[156px] left-[60px]"
            style="width: 226px;height: 20px;background: #7DD6BD;opacity: 0.67;filter: blur(15.839799880981445px);">
          </div>
          <div style="width: 121px;" class="absolute inset-x-0 top-[-71px] left-[112.5px]">
            <img src="/images/product-app.png" alt="手机 APP">
          </div>
          <div style="padding-top: calc(247px - 71px + 31px);" class="product-name">
            手机 APP
          </div>
          <NuxtLink to="/prod/app"><button class="button bg-[#39D1AA]">了解更多</button></NuxtLink>
        </div>
        <div class="product-content w-full sm:w-[346px]">
          <div class="absolute top-[156px] left-[60px]"
            style="width: 226px;height: 20px;background: #7DD6BD;opacity: 0.67;filter: blur(15.839799880981445px);">
          </div>
          <div style="width: 272px;" class="absolute inset-x-0 top-[-71px] left-[37px]">
            <img src="/images/product-solution.png" alt="定制化服务">
          </div>
          <div class="product-name">
            定制化服务
          </div>
          <NuxtLink to="/prod/solution"><button class="button bg-[#39D1AA]">了解更多</button></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features-container {
  background: linear-gradient(180deg, #FFFFFF 0%, #9FE7D4 57%, #7BDEFC 100%);
}

.product-content {
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 6px 6px 1px rgba(0, 0, 0, 0.16);
  border-radius: 18px;
  margin-top: 113px;
  text-align: center;
  padding-bottom: 40px;
}

.product-name {
  padding-top: calc(247px - 71px + 31px);
  padding-bottom: 18px;
  font-weight: 600;
  font-size: 24px;
  color: #14293B;
  line-height: 40px;
}

@media (max-width: 640px) {
  .product-name {
    font-size: 20px;
  }

  .product-content {
    margin-top: 80px;
  }
}

@media (max-width: 985px) {
  .product-introduction {
    align-items: center;
  }
}
</style>
