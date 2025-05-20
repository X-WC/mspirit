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
      { name: '技术细节', path: '/teco', query: { type: '0' } },
      { name: '健康指标', path: '/teco', query: { type: '1' } }
    ],
  },
  {
    name: '行业洞察',
    path: '/market',
    children: [
      { name: '潜在行业介绍', path: '/market', query: { type: '0' } },
      { name: '用户案例', path: '/market', query: { type: '1' } }
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
      <div class="hidden xl:flex gap-4 items-center">
        <div
          v-for="navItem in navItems"
          :key="navItem.path"
          class="relative"
          @mouseenter="handleMouseEnter(navItem.path)"
          @mouseleave="handleMouseLeave"
        >
          <NuxtLink
            :to="navItem.path"
          >
            <div :class="{
              'text-[#2B9B81]': showSubMenu === navItem.path,
              'font-semibold': showSubMenu === navItem.path,
              'bg-[#F4F4F4]': showSubMenu === navItem.path,
              'rounded-2xl': showSubMenu === navItem.path,
              }"
              class="px-4 py-1 hover:text-[#2B9B81] hover:font-semibold hover:bg-[#F4F4F4] hover:rounded-2xl"
            >
              {{ navItem.name }}</div>
          </NuxtLink>
          <!-- 二级导航 -->
          <div
            v-if="showSubMenu === navItem.path && navItem.children?.length"
            class="childMenuTriangle absolute top-full -left-3 text-center bg-white shadow-lg rounded-xl py-2 min-w-[120px] z-20"
          >
            <NuxtLink
              v-for="child in navItem.children"
              :key="child.path"
              :to="{ path: child.path, query: child.query }"
              class="block px-4 py-2"
            >
              <span class="text-nowrap hover:text-[#2B9B81] hover:border-b hover:border-b-[#2B9B81]"> {{ child.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- 移动端汉堡菜单按钮 -->
      <button
        class="xl:hidden p-2"
        @click="toggleMobileMenu"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span class="w-full h-0.5 bg-[#14293B] transform origin-center transition-all duration-300 ease-in-out" :class="{ 'rotate-45 translate-y-2.5': isMobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-[#14293B] transform transition-all duration-300 ease-in-out" :class="{ 'opacity-0 scale-x-0': isMobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-[#14293B] transform origin-center transition-all duration-300 ease-in-out" :class="{ '-rotate-45 -translate-y-2.5': isMobileMenuOpen }"></span>
        </div>
      </button>
    </div>

    <!-- 移动端导航菜单 -->
    <div
      v-show="isMobileMenuOpen"
      class="fixed inset-0 bg-white z-50 xl:hidden"
    >
      <div class="p-2">
        <div class="flex justify-between items-center mb-6">
          <NuxtLink to="/" @click="closeMobileMenu">
            <img class="w-36" src="/public/images/nav-logo.svg" alt="logo">
          </NuxtLink>
          <button
            class="p-2"
            @click="closeMobileMenu"
          >
            <div class="relative w-6 h-6">
              <span class="absolute left-0 top-1/2 w-full h-0.5 bg-[#14293B] transform -translate-y-1/2 rotate-45"></span>
              <span class="absolute left-0 top-1/2 w-full h-0.5 bg-[#14293B] transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="navItem in navItems" :key="navItem.path">
            <NuxtLink
              :to="navItem.path"
              class="block py-2 text-lg font-medium"
              @click="closeMobileMenu"
            >
              {{ navItem.name }}
            </NuxtLink>
            <!-- 移动端二级导航 -->
            <div v-if="navItem.children?.length" class="pl-4 mt-2 space-y-2">
              <NuxtLink
                v-for="child in navItem.children"
                :key="child.path"
                :to="{ path: child.path, query: child.query }"
                class="block py-1 text-base text-gray-600"
                @click="closeMobileMenu"
              >
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header {
  color: #14293B;
}

/* 添加过渡动画 */
.absolute {
  transition: all 0.3s ease;
}

.childMenuTriangle::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
}
</style>
