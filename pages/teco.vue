<script setup lang="ts">
import {getImageUrl} from '../utils/images'

const bg1Url = `${getImageUrl('teco-bg-1.png')}`;
const bg2Url = `${getImageUrl('teco-bg-2.png')}`;
const bgHealth1Url = `${getImageUrl('teco-health-l-1.png')}`;
const bgHealth2Url = `${getImageUrl('teco-health-l-2.png')}`;
const bgHealth3Url = `${getImageUrl('teco-health-l-3.png')}`;
const bgHealthR1Url = `${getImageUrl('teco-health-r-1.png')}`;
const bgHealthR2Url = `${getImageUrl('teco-health-r-2.png')}`;
const bgHealthR3Url = `${getImageUrl('teco-health-r-3.png')}`;

import {useRoute, onBeforeRouteUpdate} from 'vue-router'

const tabs = [
  {title: '技术细节'},
  {title: '健康指标'},
]

const selected = ref(0)

// 获取路由参数type selected赋值为type值
const route = useRoute()

watchEffect(() => {
  const type = route.query.type
  if (type !== undefined) {
    const num = Number(type)
    if (!isNaN(num)) {
      selected.value = num
    }
  } else {
    selected.value = 0
  }
})

onBeforeRouteUpdate((to) => {
  const type = to.query.type
  if (type !== undefined) {
    const num = Number(type)
    if (!isNaN(num)) {
      selected.value = num
    }
  } else {
    selected.value = 0
  }
})
</script>

<template>
  <div>
    <div class="px-4 xl:pl-28 pt-6 xl:pt-10 pb-8 xl:pb-14 bg-no-repeat bg-cover bg-center"
         :style="`background-image: url(${bg1Url})`">
      <h1 class="font-semibold text-3xl xl:text-5xl m-0">TECHNOLOGY</h1>
      <h2 class="font-semibold text-2xl xl:text-4xl m-0">核心技术</h2>
      <div class="w-40 xl:w-52 mt-6 xl:mt-8">
        <Tabs :tabs="tabs" :selected="selected" @update:selected="selected = $event"/>
      </div>
    </div>
    <!-- 技术细节 -->
    <template v-if="selected === 0">
      <div style="min-height: 463px;"
           :style="`background-image: url(${bg2Url})`"
           class="text-white flex flex-col xl:flex-row justify-around gap-6 xl:gap-12 px-4 xl:px-32 py-8 xl:py-0 items-center bg-no-repeat bg-cover bg-center">
        <div class="w-full xl:w-auto xl:max-w-[400px] xl:max-w-[753px]">
          <img src="/images/teco-main-bg2.png" alt="" class="object-contain h-full w-full xl:w-[704px]"/>
        </div>
        <div class="flex-1">
          <div class="font-semibold text-4xl xl:text-6xl mb-4">技术细节</div>
          <div class="align-multiple-lines-of-text w-full xl:w-4/5">核心技术（TOI）（ Transdermal Optical Imaging
            Technology）是TOI技术利用了一些先进的光电容积描记法（PPG）技术，通过分析面部视频中的血流信号来预测健康数据（如血压）。简单来说，TOI的工作原理可以分为以下几个关键步骤：
          </div>
        </div>
      </div>
      <div class="flex flex-col xl:flex-row justify-around items-center px-4 xl:px-32 gap-6 xl:gap-10 py-8 xl:py-0"
           style="min-height: 400px;">
        <div class="flex-1/2 w-full xl:w-auto">
          <div class="mb-5" style="width: 65px;height: 49px;">
            <img src="/images/teco-1.png" alt="01">
          </div>
          <span class="text-[#323232] text-xl xl:text-2xl font-medium p-1"
                style="background:linear-gradient( 180deg, #FFFFFF 0%, #89E2CA 100%);">分析面部视频中的血流信号</span>
          <p class="align-multiple-lines-of-text mt-3">TOI技术首先通过智能手机录制用户的面部视频。视频中的每一帧图像会被分解成三个颜色通道（红色、绿色、蓝色），每个颜色通道都被细分为多个"位平面"——这些位平面是用来捕捉和处理面部的微小血流变化。 </p>
        </div>
        <div class="flex-1/2 w-full xl:w-auto">
          <img src="/images/teco-main-1.png" alt="" class="w-full h-full object-contain">
        </div>
      </div>
      <div
          class="flex flex-col xl:flex-row justify-around items-center px-4 xl:px-32 gap-6 xl:gap-10 py-8 xl:py-0 bg-[#F9FAFB]"
          style="min-height: 400px;">
        <div class="flex-1/2 w-full xl:w-auto order-2 xl:order-1">
          <img src="/images/teco-main-2.png" alt="" class="w-full h-full object-contain">
        </div>
        <div class="flex-1/2 w-full xl:w-auto order-1 xl:order-2">
          <div class="mb-4" style="width: 65px;height: 49px;">
            <img src="/images/teco-2.png" alt="02">
          </div>
          <span class="text-[#323232] text-xl xl:text-2xl font-medium p-1"
                style="background:linear-gradient( 180deg, #FFFFFF 0%, #89E2CA 100%);">提取血液信号</span>
          <p class="align-multiple-lines-of-text mt-3">在处理这些图像时，TOI技术专注于提取富含血红蛋白的信号，这是因为血红蛋白会随着血流变化而改变颜色（例如，随着心脏跳动，血液在血管中的流动会产生微小的颜色变化）。同时，TOI技术丢弃了与肤色相关的信号（如富含黑色素的信号），以减少噪音的干扰。</p>
        </div>
      </div>
      <div class="flex flex-col xl:flex-row justify-around items-center px-4 xl:px-32 gap-6 xl:gap-10 py-8 xl:py-0"
           style="min-height: 400px;">
        <div class="flex-1/2 w-full xl:w-auto">
          <div class="mb-3" style="width: 65px;height: 49px;">
            <img src="/images/teco-3.png" alt="03">
          </div>
          <span class="text-[#323232] text-xl xl:text-2xl font-medium p-1"
                style="background:linear-gradient( 180deg, #FFFFFF 0%, #89E2CA 100%);">信号合成与生成血流图像</span>
          <p class="align-multiple-lines-of-text mt-3">从每一帧视频的多个位平面中提取到的血红蛋白信号会被重新组合，形成一个"血红蛋白浓度图"，这个图显示了面部不同部位的血液流动变化。然后，所有这些图像按照视频的时间顺序串联起来，生成一个动态视频，展示整个面部的血流振荡情况。</p>
        </div>
        <div class="flex-1/2 w-full xl:w-auto">
          <img src="/images/teco-main-3.png" alt="" class="w-full h-full object-contain">
        </div>
      </div>
      <div
          class="flex flex-col xl:flex-row justify-around items-center px-4 xl:px-32 gap-6 xl:gap-10 py-8 xl:py-0 bg-[#F9FAFB] mb-10"
          style="min-height: 400px;">
        <div class="flex-1/2 w-full xl:w-auto order-2 xl:order-1">
          <img src="/images/teco-main-4.png" alt="" class="w-full h-full object-contain">
        </div>
        <div class="flex-1/2 w-full xl:w-auto order-1 xl:order-2">
          <div class="mb-3" style="width: 65px;height: 49px;">
            <img src="/images/teco-4.png" alt="02">
          </div>
          <span class="text-[#323232] text-xl xl:text-2xl font-medium p-1"
                style="background:linear-gradient( 180deg, #FFFFFF 0%, #89E2CA 100%);">高效、精准的信号提取</span>
          <p class="align-multiple-lines-of-text mt-3">通过这种独特的处理方法，TOI技术能够提取出强劲的血流信号，同时最小化背景噪音和肤色变化的干扰。由于该方法能精确地识别和分析面部的血流变化，它能够提供高质量、低噪声的健康数据。</p>
        </div>
      </div>
    </template>
    <!-- 健康指标 -->
    <template v-else-if="selected === 1">
      <div class="flex flex-col xl:flex-row justify-between py-8 xl:py-14 gap-8 xl:gap-12 px-4 xl:px-32">
        <!-- 左侧：健康检测 -->
        <div class="flex-1 space-y-6">
          <div>
            <h2 class="text-2xl xl:text-3xl font-bold text-[#104A7C]">健康检测</h2>
            <h3 class="text-lg xl:text-xl text-gray-400">HEALTH CHECK</h3>
          </div>
          <!-- 左侧卡片：健康检测 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 mt-6 xl:mt-8 items-stretch">
            <!-- 左列 -->
            <div class="space-y-4 xl:space-y-6">
              <!-- 卡片 1：生命体征 -->
              <div :style="`background-image: url(${bgHealth1Url})`"
                   class="rounded-2xl p-4 shadow bg-no-repeat bg-cover bg-center">
                <p class="font-bold text-[#2B4F81] mb-2">生命体征</p>
                <ul class="leading-[32px] text-sm text-[#333] leading-6">
                  <li>脉搏率</li>
                  <li>心率不齐计数</li>
                  <li>呼吸频率</li>
                  <li>收缩压</li>
                  <li>舒张压</li>
                </ul>
              </div>

              <!-- 卡片 3：生理 + 精神 -->
              <div :style="`background-image: url(${bgHealth2Url})`"
                   class="rounded-2xl p-4 shadow bg-no-repeat bg-cover bg-center">
                <p class="font-bold text-[#2B4F81] mb-2">生理</p>
                <ul class="leading-[32px] text-sm text-[#333] leading-6">
                  <li>心率变异性</li>
                  <li>心脏负荷</li>
                  <li>血管容量</li>
                </ul>
                <p class="font-bold text-[#2B4F81] mt-4">精神</p>
                <ul class="leading-[32px] text-sm text-[#333] leading-6">
                  <li>精神压力指数</li>
                </ul>
              </div>
            </div>

            <!-- 右列 -->
            <div class="h-full">
              <!-- 卡片 2：身体 -->
              <div :style="`background-image: url(${bgHealth3Url})`"
                   class="rounded-2xl p-4 shadow h-full bg-no-repeat bg-cover bg-center">
                <p class="font-bold text-[#2B4F81] mb-2">身体</p>
                <ul class="leading-[32px] text-sm text-[#333] leading-6">
                  <li>体重指数</li>
                  <li>面部皮肤年龄</li>
                  <li>腰围和身高比</li>
                  <li>体形指数</li>
                  <li>估计身高</li>
                  <li>预测体重</li>
                  <li>腰围</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧：AI风险检测 -->
        <div class="flex-1 space-y-6 xl:space-y-8 mt-8 xl:mt-0">
          <div>
            <h2 class="text-2xl xl:text-3xl font-bold text-[#104A7C]">AI风险检测</h2>
            <h3 class="text-lg xl:text-xl text-gray-400">AI RISK ASSESSMENT</h3>
          </div>

          <!-- 上方主图 + 代谢风险 -->
          <div :style="`background-image: url(${bgHealthR1Url})`"
               class="rounded-2xl p-4 shadow flex flex-col xl:flex-row gap-4 bg-no-repeat bg-cover bg-center">
            <div class="flex-1">
              <h4 class="font-bold text-[#104A7C] mb-2">代谢风险</h4>
              <ul class="leading-[32px] text-[#323232] space-y-1 text-sm">
                <li>高血压风险</li>
                <li>2型糖尿病风险</li>
                <li>高胆固醇血症风险</li>
                <li>高甘油三酯血症风险</li>
                <li>脂肪肝疾病风险</li>
                <li>总体代谢健康风险</li>
              </ul>
            </div>
          </div>

          <!-- 下方小卡片 2x2 -->
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6">
            <div style="height: 163px;"
                 :style="`background-image: url(${bgHealthR2Url})`"
                 class="rounded-2xl p-4 shadow bg-no-repeat bg-cover bg-center">
              <h4 class="font-bold text-[#104A7C] mb-2">血液生物指标物</h4>
              <ul class="leading-[32px] text-[#323232] space-y-1 text-sm">
                <li>糖化血红蛋白风险</li>
                <li>空腹血糖风险</li>
              </ul>
            </div>

            <div style="height: 163px;"
                 :style="`background-image: url(${bgHealthR3Url})`"
                 class="rounded-2xl p-4 shadow bg-no-repeat bg-cover bg-center">
              <h4 class="font-bold text-[#104A7C] mb-2">一般风险</h4>
              <ul class="leading-[32px] text-[#323232] space-y-1 text-sm">
                <li>心血管疾病风险</li>
                <li>心脏病发作风险</li>
                <li>中风风险</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .align-multiple-lines-of-text {
    font-size: 0.875rem;
    line-height: 1.5;
  }
}
</style>
