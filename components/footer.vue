<template>
  <footer class="bg-[#14293B] text-white">
    <div class="container mx-auto px-4 py-7">
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-8 pb-8 border-b border-b-[#E0D9D91A]">
        <!-- logo -->
        <div class="w-32">
          <img src="/images/footer-logo.png" alt="logo">
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-xl font-bold mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-[#E8E8E8] hover:text-white">
                首页
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/product" class="text-[#E8E8E8] hover:text-white">
                产品介绍
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/teco" class="text-[#E8E8E8] hover:text-white">
                核心技术
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="text-[#E8E8E8] hover:text-white">
                行业洞察
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-[#E8E8E8] hover:text-white">
                公司简介
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div>
          <h3 class="text-xl font-bold mb-4">联系我们</h3>
          <ul class="space-y-2 text-[#E8E8E8]">
            <li><i></i>地址：上海市普陀区云岭东路89号</li>
            <li><i></i>邮箱：contact_m@msprite.com</li>
          </ul>
        </div>

        <!-- 关注我们 -->
        <div>
          <h3 class="text-xl font-bold mb-4">关注我们</h3>
         <div class="w-[60px] flex flex-col items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
             <path fill="#e5e7eb"
                   d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"/>
             <path fill="#e5e7eb"
                   d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"/>
           </svg>
           <img class="w-[60px] h-[63px]" src="/images/wechat-qrcode.png" alt="wechat">
         </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-800 mt-4 text-center text-[#E8E8E8]">
        <p>© {{ new Date().getFullYear() }} MSPIRIT Copyright </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
