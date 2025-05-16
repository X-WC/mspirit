<script setup lang="ts">
import {getImageUrl} from "~/utils/images";

const items = [
  getImageUrl('solution-1.png'),
]
</script>

<template>
  <div class="prod-container mt-10 px-4 xl:px-20 flex flex-col xl:flex-row">
    <section class="flex-1/2">
      <h1 class="font-semibold text-3xl xl:text-5xl m-0">Customized Service</h1>
      <h2 class="font-semibold text-2xl xl:text-4xl m-0 mb-4 md:mb-8">定制化服务</h2>
      <div class="h-[300px] md:h-[424px] pb-9 overflow-scroll hide-scrollbar">
        <div class="bg-white rounded-xl px-3 py-3">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            企业健康福利
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">员工健康管理：</span>企业为员工提供定期的无创健康检查服务，降低员工健康风险（如高血压、心脏病风险等），帮助员工保持良好身心，建立以健康为底层驱动力的整体公司氛围，提高工作效率，和员工体验。
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl px-3 py-3 mt-5">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            保险行业
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">风险评估与定价：</span>保险公司利用"镜灵"技术进行健康风险预测（如心血管疾病风险、糖尿病风险等），为客户提供个性化的保险定价和服务。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">健康管理增值服务：</span>为投保人提供健康监测和管理工具，提高客户满意度，降低赔付成本。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">快速健康评估：</span>通过简便的面部扫描技术，保险公司可快速完成健康数据采集，简化投保流程。
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl px-3 py-3 mt-5">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            药店
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">个性化健康产品推荐：</span>通过健康评分和代谢风险分析，为用户推荐最适合的健康产品，如营养补充剂，减重产品,减脂，降低脂肪肝，保护心脏等。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">引流和会员管理：</span>通过引进产品吸引客户进店，提供健康检测服务，增加客户粘性，更好的为客户推荐合适的产品。
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl px-3 py-3 mt-5">
          <div class="text-[#2B9B81] font-semibold text-lg md:text-xl mb-2">
            健身与体育
          </div>
          <div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">运动健康监测：</span>在健身房或家中，用户可以通过"镜灵"技术检测运动中的心率、血压等指标，优化运动强度和计划。
            </div>
            <div class="text-[#323232] text-sm md:text-base"><span class="text-black font-semibold">健身计划个性化：</span>基于用户的代谢风险和身体健康数据，制定更科学、有效的健身和体重管理方案，形成一个正循环。
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

