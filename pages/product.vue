<script setup lang="ts">
import {getImageUrl} from '../utils/images'
import FeatureGrid from '~/components/FeatureGrid.vue'

const featureList = [
  {
    title: '非接触方式',
    content: '“镜灵”实现了全球首个非接触式的血压测量方式',
    url: getImageUrl('icon-stop.png')
  },
  {
    title: 'AI 科技介入',
    content: '测量和风险预测并存',
    url: getImageUrl('icon-ai.png')
  },
  {
    title: '极少耗时',
    content: '30秒脸部扫描 获得多种健康指标',
    url: getImageUrl('icon-time.png')
  },
  {
    title: '极低成本',
    content: '与身体健康检测费用相比，“镜灵”的价格极其低廉',
    url: getImageUrl('icon-tb.png')
  },
  {
    title: '随时随地',
    content: '提供了全场景服务，线下一体屏，线上APP，随时随地健康检',
    url: getImageUrl('icon-app.png')
  },
  {
    title: '多维度检测',
    content: '最多100项健康检测指标，30秒内获得结果',
    url: getImageUrl('icon-xh.png')
  },
  {
    title: '数据安全',
    content: '架构数据安全体系，减少客户对隐私及数据泄露的风险',
    url: getImageUrl('icon-safe.png')
  },
  {
    title: '多场景应用',
    content: '保障数据安全，结合SaaS服务，为企业客户提供各行业定制化服务',
    url: getImageUrl('icon-df.png')
  }
]
</script>

<template>
  <div>
    <!-- 产品介绍 -->
    <section class="relative z-10">
      <div class="flex flex-col xl:flex-row justify-around px-4 xl:px-32 mt-9 gap-9">
        <div class="flex-1/2">
          <h1 class="font-semibold text-3xl xl:text-5xl m-0 text-nowrap">PRODUCT INTRODUCTION</h1>
          <h2 class="font-semibold text-2xl xl:text-4xl m-0">产品介绍</h2>
          <p class="mt-8 xl:mt-16 h-auto md:min-h-[185px] md:overflow-hidden xl:h-44 align-multiple-lines-of-text">
            Mspirit（中文产品名：镜灵）是一款采用面部识别技术和 AI 算法 "运用 NuraLogix 技术" 的健康管理产品，
            旨在通过简单、无接触、无创的方式帮助用户监控健康状况。仅需 30 秒，"镜灵" 利用透皮光学成像技术检测面部和监测血流。
            AI 算法结合这些数据提供可多达 100 多个健康参数，包括血压、BMI、心率变异性等，还能提供糖尿病、心血管疾病等风险评估。
          </p>
        </div>
        <div class="mt-4 xl:mt-1 flex-auto">
          <img class="w-full xl:min-w-[560px]" src="/images/product-biometrics.png" alt="">
        </div>
      </div>
    </section>

    <!-- 特点介绍 -->
    <FeatureGrid class="-mt-40" :features="featureList"/>

    <!-- 产品一览 -->
    <section class="px-4 xl:px-32 pt-10 pb-28">
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

.product-image {
  position: absolute;
  top: -71px;
  inset-inline-start: 0;
  right: 0;
  margin-inline: auto;
}

.blur-glow {
  position: absolute;
  top: 156px;
  left: 60px;
  width: 226px;
  height: 20px;
  background: #7DD6BD;
  opacity: 0.67;
  filter: blur(16px);
}

@media (max-width: 640px) {
  .product-name {
    font-size: 20px;
  }

  .product-content {
    margin-top: 80px;
  }
}
</style>
