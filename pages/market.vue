<script setup lang="ts">
import {getImageUrl} from '../utils/images'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
const tabs = [
  {title: '潜在行业介绍'},
  {title: '用户案例'},
]

const marketList = [
  {
    title: '医疗级市场',
    icon: getImageUrl('market-coverage-1.png'),
    content: ['医生和护士', '医院和诊所', '远程医疗平台', '养老护理结构', '体检机构']
  },
  {
    title: '政府公共卫生市场',
    icon: getImageUrl('market-coverage-4.png'),
    content: ['公共卫生部门', '社区服务', '社会福利结构', '智慧城市']
  },
  {
    title: '消费者市场',
    icon: getImageUrl('market-coverage-2.png'),
    content: ['个人消费者', '慢性病患者', '健身爱好者–健身房', '老年人健康']
  },
  {
    title: '特殊人群市场',
    icon: getImageUrl('market-coverage-5.png'),
    content: ['残障人士', '社会福利结构', '心理健康机构']
  },
  {
    title: '企业级市场',
    icon: getImageUrl('market-coverage-3.png'),
    content: ['关注员工福利企业', '保险公司', '交通运输公司', '消费零售店企业', '药店']
  }
]
const bg = getImageUrl('market-bg.png')

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
    <div class="px-4 md:pl-28 pt-6 md:pt-10 pb-8 md:pb-14 bg-no-repeat bg-cover bg-center"
         :style="`background-image: url(${bg})`">
      <h1 class="font-semibold text-3xl md:text-5xl m-0">MARKET INSIGHT</h1>
      <h2 class="font-semibold text-2xl md:text-4xl m-0">行业洞察</h2>
      <div class="w-40 md:w-52 mt-6 md:mt-8">
        <Tabs :tabs="tabs" :selected="selected" @update:selected="selected = $event"/>
      </div>
    </div>
    <!-- 技术细节 -->
    <template v-if="selected === 0">
      <div class="flex flex-col lg:flex-row gap-6 md:gap-12 px-4 md:px-32 py-7 items-start">
        <!-- 左侧：标题 + 图片 -->
        <div class="flex flex-col items-center lg:items-start w-full lg:w-[40%]">
          <div>
            <h2 class="text-2xl md:text-4xl font-bold text-[#104A7C]">涉及市场范围</h2>
            <p class="text-[#D9D9D9] text-lg md:text-xl mt-1">Market Coverage</p>
          </div>
          <div class="mt-6 relative w-full">
            <img src="/images/market-coverage.png" alt="market" class="w-full object-contain"/>
          </div>
        </div>

        <!-- 右侧：市场分类 -->
        <div class="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full lg:w-[60%]">
          <!-- 市场卡片 -->
          <div v-for="item in marketList" :key="item.title" class="flex gap-3 items-start">
            <img :src="item.icon" alt="" class="mt-1 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"/>
            <div class="mt-4 w-full">
              <h3 class="text-xl md:text-2xl font-bold text-[#323232] border-b border-b-[#D9D9D9]">{{ item.title }}</h3>
              <ul class="text-sm text-[#323232] mt-1 leading-relaxed space-y-1 h-24 columns-1 md:columns-2 overflow-hidden whitespace-nowrap">
                <li v-for="line in item.content" :key="line">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section style="background: linear-gradient( 179deg, #9FE7D4 57%, #7BDEFC 100%);" class="pt-8 md:pt-12 pb-3 px-4 md:pl-32 md:pr-4">
        <div class="">
          <!-- 标题 -->
          <div class="mb-8 md:mb-12">
            <h2 class="text-2xl md:text-4xl font-semibold text-[#104A7C]">优势</h2>
            <p class="text-xl md:text-2xl text-white mt-2">ADVANTAGE</p>
          </div>
          <!--  滑动卡片区域  -->
          <carousel/>
        </div>
      </section>
      <section class="relative py-8 md:py-12 px-4 md:px-28">
        <div class="bg-white flex flex-col">
          <!-- 标题 -->
          <div>
            <h1 class="text-2xl md:text-4xl font-semibold text-[#104A7C]">机会</h1>
            <p class="text-[#D9D9D9] text-xl md:text-2xl mt-2">Opportunity</p>
          </div>
          <!-- 圆形图片和描述 -->
          <div class="flex flex-wrap md:flex-row items-end justify-around gap-6 md:gap-8 relative z-10 mt-6 md:mt-0">
            <!-- 圆1 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-1.png" alt="img1" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                社会福利制度对
                <br>
                全名健康的巨大投入
              </div>
            </div>
            <!-- 圆2 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-2.png" alt="img2" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                不可逆的AI趋势
              </div>
            </div>
            <!-- 圆3 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-3.png" alt="img3" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                个体对健康
                <br>
                关注的提高
              </div>
            </div>
            <!-- 圆4 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-4.png" alt="img4" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                老龄化社会的
                <br>
                健康需求
              </div>
            </div>
            <!-- 圆5 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-5.png" alt="img5" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                个性化健康
                <br>
                管理的需求
              </div>
            </div>
            <!-- 圆6 -->
            <div class="flex flex-col items-center w-[50%] md:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-6.png" alt="img6" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm md:text-base mt-2">
                企业对员工福利
                <br>
                和健康关注度的增加
              </div>
            </div>
          </div>
        </div>
        <!-- 右上角心形背景 -->
        <div class="absolute right-0 top-[20%] z-5 w-40 md:w-80 hidden md:block">
          <img src="/images/market-opportunity-bg.png" alt="" class="w-full">
        </div>
        <div style="margin-top: -70px" class="w-full h-[90px] bg-[#F9F9F9]"></div>
      </section>
    </template>
    <!-- 健康指标 -->
    <template v-else-if="selected === 1">
      <div class="bg-[#F9FAFB] pt-8 md:pt-12 pb-12 md:pb-24 px-4 md:px-36 flex flex-col gap-8 md:gap-12">
        <!-- 卡片1 -->
        <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center py-6 md:py-11 px-4 md:px-20 gap-6 md:gap-8">
          <!-- 左侧内容 -->
          <div class="flex-1 border-r-gray-400 border-r pr-4 md:pr-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-1">NTT Data</h2>
            <div class="w-12 md:w-16 h-2 bg-[#39D1AA] mb-4"></div>
            <p class="text-gray-700 text-sm md:text-base leading-relaxed align-multiple-lines-of-text">
              在西班牙，第二大医疗保险公司Sanitas合作，推动数字健康领域的创新。2020年10月5日，Sanitas推出了BluaU应用程序。该应用允许用户通过30秒的视频自拍，测量心率、呼吸频率和血压等生命体征。测量结果可与医疗专业人员共享，辅助其评估和决策。此外，用户可通过BluaU的在线视频咨询服务，直接与Sanitas网络中的超过3,000名、涵盖35个专业领域的医疗行业专业人员联系。
            </p>
          </div>
          <!-- 右侧图片 -->
          <div class="flex-shrink-0 flex items-center justify-center w-full md:w-48">
            <img src="/images/market-insight-1.png" alt="NTT Data" class="max-h-16 md:max-h-20 object-contain"/>
          </div>
        </div>
        <!-- 卡片2 -->
        <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center py-6 md:py-11 px-4 md:px-20 gap-6 md:gap-8">
          <!-- 左侧图片 -->
          <div class="flex-shrink-0 flex items-center justify-center w-full md:w-48">
            <img src="/images/market-insight-2.png" alt="Sanitas" class="max-h-24 md:max-h-32 object-contain"/>
          </div>
          <!-- 右侧内容 -->
          <div class="flex-1 border-l-gray-400 border-l pl-4 md:pl-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-1">Sanitas</h2>
            <div class="w-12 md:w-16 h-2 bg-[#39D1AA] mb-4"></div>
            <p class="text-gray-700 text-sm md:text-base leading-relaxed align-multiple-lines-of-text">
              在西班牙，第二大医疗保险公司Sanitas合作，推动数字健康领域的创新。2020年10月5日，Sanitas推出了BluaU应用程序。该应用允许用户通过30秒的视频自拍，测量心率、呼吸频率和血压等生命体征。测量结果可与医疗专业人员共享，辅助其评估和决策。此外，用户可通过BluaU的在线视频咨询服务，直接与Sanitas网络中的超过3,000名、涵盖35个专业领域的医疗行业专业人员联系。
            </p>
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
