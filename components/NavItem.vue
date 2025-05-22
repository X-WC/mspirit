<!-- components/NavItem.vue -->
<script setup lang="ts">
defineProps<{
  navItem: {
    name: string
    path: string
    children?: { name: string; path: string; query?: Record<string, string> }[]
  }
  showSubMenu: string | null
  onMouseEnter: (path: string) => void
  onMouseLeave: () => void
}>()
</script>

<template>
  <div
      class="relative"
      @mouseenter="onMouseEnter(navItem.path)"
      @mouseleave="onMouseLeave"
  >
    <NuxtLink :to="navItem.path">
      <div
          :class="[
          'px-4 py-1 hover:text-[#2B9B81] hover:font-semibold hover:bg-[#F4F4F4] hover:rounded-2xl',
          {
            'text-[#2B9B81] font-semibold bg-[#F4F4F4] rounded-2xl':showSubMenu === navItem.path
          }
        ]"
      >
        {{ navItem.name }}
      </div>
    </NuxtLink>

    <transition name="fade-slide" mode="out-in">
      <div
          v-if="showSubMenu === navItem.path && navItem.children?.length"
          class="childMenuTriangle absolute top-full -left-3 text-center bg-white shadow-lg rounded-xl py-2 min-w-[120px] z-20"
      >
        <NuxtLink
            v-for="child in navItem.children"
            :key="child.path + child.query?.type"
            :to="{ path: child.path, query: child.query }"
            class="block px-4 py-2"
        >
          <span class="text-nowrap hover:text-[#2B9B81] hover:border-b hover:border-b-[#2B9B81]">
            {{ child.name }}
          </span>
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.childMenuTriangle::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
