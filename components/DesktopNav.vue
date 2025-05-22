<!-- components/DesktopNav.vue -->
<script setup lang="ts">
defineProps<{
  navItems: {
    name: string
    path: string
    children?: { name: string; path: string; query?: Record<string, string> }[]
  }[]
  showSubMenu: string | null
  onMouseEnter: (path: string) => void
  onMouseLeave: () => void
}>()
</script>

<template>
  <div class="hidden xl:flex gap-4 items-center">
    <NavItem
        v-for="navItem in navItems"
        :key="navItem.path"
        :nav-item="navItem"
        :show-sub-menu="showSubMenu"
        :on-mouse-enter="onMouseEnter"
        :on-mouse-leave="onMouseLeave"
    />
  </div>
</template>
