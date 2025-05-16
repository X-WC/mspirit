<script setup lang="ts">
import Carousel2 from "~/components/Carousel2.vue";
import { getImageUrl } from '../../utils/images'

const items = [
  getImageUrl('aio-4.png'),
  getImageUrl('aio-1.png'),
  getImageUrl('aio-2.png'),
  getImageUrl('aio-3.png'),
]
</script>

<template>
  <div class="prod-container mt-10 px-4 xl:px-20 flex flex-col xl:flex-row xl:gap-6">
    <section class="flex-1/2">
      <h1 class="font-semibold text-3xl xl:text-5xl m-0">MSIPIRIT AIO</h1>
      <h2 class="font-semibold text-2xl xl:text-4xl m-0">AIO 一体机</h2>
      <p class="mt-4 xl:mt-8 mb-4 xl:mb-8 align-multiple-lines-of-text">MSPIRIT MSA25镜灵一体机是一款采用面部识别数据和AI算法的健康管理设备。旨在通过简单、无接触、无创的方式帮助用户监控健康状况。为个人用户、企业和健康机构提供健康检测与管理服务。镜灵通过深度学习和大数据分析，为用户提供健康评分、趋势分析和建议，帮助他们实现未来健康的管理。
      </p>
      <div class="h-[300px] xl:h-[424px] pb-9 overflow-scroll hide-scrollbar">
        <div class="bg-white rounded-xl px-3 py-3">
          <div class="text-[#2B9B81] font-semibold text-lg xl:text-xl mb-2">
            超清镜面显示，还原真实动作细节
          </div>
          <div>
            <div class="text-[#323232] text-sm xl:text-base"><span class="text-black font-semibold">镜面屏技术：</span>搭载MV215FHB-N30显示面板，亮度高达1000cd/m²(镜面屏版本)，强光环境下画面依旧清晰。
            </div>
            <div class="text-[#323232] text-sm xl:text-base"><span class="text-black font-semibold">4K级画质：</span>1920x1080全高清分辨率，支持16:9显示比例，动态课程无拖影(响应时间14ms)。
            </div>
            <div class="text-[#323232] text-sm xl:text-base"><span class="text-black font-semibold">广视角与防眩光：</span>178°可视角度，搭配Haze
              25%防眩光涂层与3H硬度表面，触控流畅且耐刮擦。
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl px-3 py-3 mt-5">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            产品优势
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">全天候稳定运行：</span>宽温工作范围（0-50°C），IP65防护等级机身，防尘防泼溅。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">安全认证：</span>通过国家3C认证，防爆屏设计，儿童与宠物家庭可安心使用。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">极简安装：</span>壁挂/立式两用，3+2cm超薄机身，适配1m²空间。
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl px-3 py-3 mt-5">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            产品优势
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">非接触方式：</span>"镜灵"实现了全球首个非接触式的血压测量方式
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">AI科技介入：</span>测量和风险预测并存
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">极少耗时：</span>30°"秒脸部扫描获得多种健康指标，而在健康中心可能需要花费至少2个小时（7200秒）
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">极低成本：</span>与高昂的身体健康检测费用相比，"镜灵"的价格极其低廉
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">多维度检测：</span>最多100项健康检测指标30秒内获得结果
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">健康趋势追踪：</span>定制化报告监控健康趋势
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">数据安全：</span>架构数据安全体系，减少客户对隐私及数据泄露的风险
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">多场景应用：</span>在场景中提供员工和客户安全，健康，高效和便捷，增加归属和粘性，从而提高用户体验
            </div>
          </div>
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

.u-carousel {
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 1.05;
}

.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

@media (max-width: 768px) {
  .prod-container {
    gap: 2rem;
  }
}
</style>

