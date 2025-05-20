<script setup lang="ts">
import {getImageUrl} from '../utils/images'
import {useRoute, onBeforeRouteUpdate} from 'vue-router'

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
    <div class="px-4 xl:px-32 pt-6 xl:pt-10 pb-8 xl:pb-14 bg-no-repeat bg-cover bg-center"
         :style="`background-image: url(${bg})`">
      <h1 class="font-semibold text-3xl xl:text-5xl m-0">MARKET INSIGHT</h1>
      <h2 class="font-semibold text-2xl xl:text-4xl m-0">行业洞察</h2>
      <div class="w-40 xl:w-52 mt-6 xl:mt-8">
        <Tabs :tabs="tabs" :selected="selected" @update:selected="selected = $event"/>
      </div>
    </div>
    <!-- 技术细节 -->
    <template v-if="selected === 0">
      <div class="flex flex-col xl:flex-row gap-6 xl:gap-12 px-4 xl:px-32 py-7 items-start">
        <!-- 左侧：标题 + 图片 -->
        <div class="flex flex-col items-center xl:items-start w-full xl:w-[40%]">
          <div>
            <h2 class="text-2xl xl:text-4xl font-bold text-[#104A7C]">涉及市场范围</h2>
            <p class="text-[#D9D9D9] text-lg xl:text-xl mt-1">Market Coverage</p>
          </div>
          <div class="mt-6 relative w-full">
            <img src="/images/market-coverage.png" alt="market" class="w-full object-contain"/>
          </div>
        </div>

        <!-- 右侧：市场分类 -->
        <div class="mt-10 xl:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-6 w-full xl:w-[60%]">
          <!-- 市场卡片 -->
          <div v-for="item in marketList" :key="item.title" class="flex gap-3 items-start">
            <img :src="item.icon" alt="" class="mt-1 w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"/>
            <div class="mt-4 w-full">
              <h3 class="text-xl xl:text-2xl font-bold text-[#323232] border-b border-b-[#D9D9D9]">{{ item.title }}</h3>
              <ul class="text-sm text-[#323232] mt-1 leading-relaxed space-y-1 h-24 columns-1 xl:columns-2 overflow-hidden whitespace-nowrap">
                <li class="leading-[32px]" v-for="line in item.content" :key="line">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section style="background: linear-gradient( 179deg, #9FE7D4 57%, #7BDEFC 100%);"
               class="pt-8 pb-3 px-4 xl:pl-32 xl:pr-4">
        <div class="">
          <!-- 标题 -->
          <div class="mb-8 xl:mb-12">
            <h2 class="text-2xl xl:text-4xl font-semibold text-[#104A7C]">优势</h2>
            <p class="text-xl xl:text-2xl text-white mt-2">ADVANTAGE</p>
          </div>
          <!--  滑动卡片区域  -->
          <carousel/>
        </div>
      </section>
      <section class="relative py-8 xl:py-12 px-4 xl:px-32">
        <div class="bg-white flex flex-col">
          <!-- 标题 -->
          <div>
            <h1 class="text-2xl xl:text-4xl font-semibold text-[#104A7C]">机会</h1>
            <p class="text-[#D9D9D9] text-xl xl:text-2xl mt-2">Opportunity</p>
          </div>
          <!-- 圆形图片和描述 -->
          <div class="flex flex-wrap xl:flex-row items-end justify-between gap-6 xl:gap-8 relative z-10 mt-6 xl:mt-0">
            <!-- 圆1 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-1.png" alt="img1" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                社会福利制度对
                <br>
                全名健康的巨大投入
              </div>
            </div>
            <!-- 圆2 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-2.png" alt="img2" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                不可逆的AI趋势
              </div>
            </div>
            <!-- 圆3 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-3.png" alt="img3" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                个体对健康
                <br>
                关注的提高
              </div>
            </div>
            <!-- 圆4 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-4.png" alt="img4" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                老龄化社会的
                <br>
                健康需求
              </div>
            </div>
            <!-- 圆5 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-5.png" alt="img5" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                个性化健康
                <br>
                管理的需求
              </div>
            </div>
            <!-- 圆6 -->
            <div class="flex flex-col items-center w-[50%] xl:w-[12%]">
              <div class="rounded-full overflow-hidden flex items-center justify-center">
                <img src="/images/market-opportunity-6.png" alt="img6" class="object-cover w-full h-full"/>
              </div>
              <div class="text-center text-[#104A7C] font-bold text-sm xl:text-base mt-2">
                企业对员工福利
                <br>
                和健康关注度的增加
              </div>
            </div>
          </div>
        </div>
        <!-- 右上角心形背景 -->
        <div class="absolute right-0 top-[20%] z-5 w-40 xl:w-80 hidden xl:block">
          <img src="/images/market-opportunity-bg.png" alt="" class="w-full">
        </div>
        <div style="margin-top: -70px" class="w-full h-[90px] bg-[#F9F9F9]"></div>
      </section>
    </template>
    <!-- 健康指标 -->
    <template v-else-if="selected === 1">
      <div class="bg-[#F9FAFB] pt-8 xl:pb-24 px-4 xl:px-32 flex flex-col gap-8 xl:gap-12">
        <!-- 卡片1 -->
        <div
            class="bg-white rounded-2xl shadow-lg flex flex-col xl:flex-row items-center py-6 xl:py-11 px-4 xl:px-20 gap-6 xl:gap-8">
          <!-- 左侧内容 -->
          <div class="flex-1 border-r-gray-400 border-r pr-4 xl:pr-8">
            <h2 class="text-2xl xl:text-3xl font-bold mb-1">NTT Data</h2>
            <div class="w-12 xl:w-16 h-2 bg-[#39D1AA] mb-4"></div>
            <p class="text-gray-700 text-sm xl:text-base leading-relaxed align-multiple-lines-of-text">NTT Health Data
              Bank 生命体征测量服务使用安装在智能手机或平板电脑上的“生命体征测量应用程序”。该应用程序分析设备摄像头拍摄的
              30秒面部视频数据，并计算血压、脉搏、压力水平和其他生命体征的估计值。无需特殊设备，仅使用智能手机或其他日常使用的设备即可测量心理和身体健康状况，这将扩大利用健康数据的计划的可能性。这些计划包括个人日常健康管理、公司员工压力护理以及使用和应用健康数据的业务。需要注意的是，该服务不是医疗设备，不适用于诊断、治疗或预防疾病等医疗目的。
              个人日常健康管理：个人可以在其智能手机上下载生命体征测量应用程序，使用智能手机摄像头拍摄面部视频，以确定健康生命体征的估计值。用户可以使用应用程序中显示的生命体征测量值和图表来确定其健康状况并查看其健康历史。
              公司员工压力护理：公司可以使用员工的生命体征测量值以及通过 Health Data Bank
              数据库管理的其他信息（如压力检查和脉搏调查）来识别高压力个体。将这些信息与工作职责的变化和其他改进措施联系起来，可以让公司迅速找到并响应需要压力护理的员工。</p>
          </div>
          <!-- 右侧图片 -->
          <div class="flex-shrink-0 flex items-center justify-center w-full xl:w-48">
            <img src="/images/market-insight-1.png" alt="NTT Data" class="max-h-16 xl:max-h-20 object-contain"/>
          </div>
        </div>
        <!-- 卡片2 -->
        <div
            class="bg-white rounded-2xl shadow-lg flex flex-col xl:flex-row items-center py-6 xl:py-11 px-4 xl:px-20 gap-6 xl:gap-8">
          <!-- 左侧图片 -->
          <div class="flex-shrink-0 flex items-center justify-center w-full xl:w-48">
            <img src="/images/market-insight-2.png" alt="Sanitas" class="max-h-24 xl:max-h-32 object-contain"/>
          </div>
          <!-- 右侧内容 -->
          <div class="flex-1 border-l-gray-400 border-l pl-4 xl:pl-8">
            <h2 class="text-2xl xl:text-3xl font-bold mb-1">Sanitas</h2>
            <div class="w-12 xl:w-16 h-2 bg-[#39D1AA] mb-4"></div>
            <p class="text-gray-700 text-sm xl:text-base leading-relaxed align-multiple-lines-of-text">
              在西班牙，第二大医疗保险公司Sanitas合作，推动数字健康领域的创新。2020年10月5日，Sanitas推出了BluaU应用程序。该应用允许用户通过30秒的视频自拍，测量心率、呼吸频率和血压等生命体征。测量结果可与医疗专业人员共享，辅助其评估和决策。此外，用户可通过BluaU的在线视频咨询服务，直接与Sanitas网络中的超过3,000名、涵盖35个专业领域的医疗行业专业人员联系。</p>
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
