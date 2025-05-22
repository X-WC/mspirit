<script setup lang="ts">
const navItems = [
  {
    name: '首页',
    path: '/',
    children: []
  },
  {
    name: '产品介绍',
    path: '/product',
    children: []
  },
  {
    name: '核心技术',
    path: '/teco',
    children: [
      {name: '技术细节', path: '/teco', query: {type: '0'}},
      {name: '健康指标', path: '/teco', query: {type: '1'}}
    ],
  },
  {
    name: '行业洞察',
    path: '/market',
    children: [
      {name: '潜在行业介绍', path: '/market', query: {type: '0'}},
      {name: '用户案例', path: '/market', query: {type: '1'}}
    ]
  },
  {
    name: '公司简介',
    path: '/about',
    children: []
  }
]

const showSubMenu = ref<string | null>(null)
const isMobileMenuOpen = ref(false)

const handleMouseEnter = (path: string) => {
  showSubMenu.value = path
}
const handleMouseLeave = () => {
  showSubMenu.value = null
}
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center h-16 xl:px-32 md:px-16 sm:px-5 py-3.5">
      <NuxtLink to="/">
        <img class="w-36" src="/public/images/nav-logo.svg" alt="logo">
      </NuxtLink>

      <!-- 桌面端导航 -->
      <DesktopNav
          :nav-items="navItems"
          :show-sub-menu="showSubMenu"
          :on-mouse-enter="handleMouseEnter"
          :on-mouse-leave="handleMouseLeave"
      />

      <!-- 移动端汉堡菜单 -->
      <button class="xl:hidden p-2" @click="toggleMobileMenu">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span class="w-full h-0.5 bg-[#14293B]" :class="{ 'rotate-45 translate-y-2.5': isMobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-[#14293B]" :class="{ 'opacity-0 scale-x-0': isMobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-[#14293B]" :class="{ '-rotate-45 -translate-y-2.5': isMobileMenuOpen }"></span>
        </div>
      </button>
    </div>

    <!-- 移动端导航 -->
    <MobileNav
        :nav-items="navItems"
        :is-open="isMobileMenuOpen"
        :on-close="closeMobileMenu"
    />
  </header>
</template>
