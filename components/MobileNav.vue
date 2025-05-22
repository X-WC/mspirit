<!-- components/MobileNav.vue -->
<script setup lang="ts">
defineProps<{
  navItems: {
    name: string
    path: string
    children?: { name: string; path: string; query?: Record<string, string> }[]
  }[]
  isOpen: boolean
  onClose: () => void
}>()
</script>

<template>
  <transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-50 xl:hidden"
    >
      <div class="p-2">
        <div class="flex justify-between items-center mb-6">
          <NuxtLink to="/" @click="onClose">
            <NuxtImg
              src="/public/images/nav-logo.svg"
              alt="logo"
              loading="lazy"
              format="webp"
              quality="80"
              :modifiers="{
                width: 144,
                height: 40
              }"
              class="w-36"
            />
          </NuxtLink>
          <button class="p-2" @click="onClose">
            <div class="relative w-6 h-6">
              <span
                  class="absolute left-0 top-1/2 w-full h-0.5 bg-[#14293B] transform -translate-y-1/2 rotate-45"></span>
              <span
                  class="absolute left-0 top-1/2 w-full h-0.5 bg-[#14293B] transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>
        </div>

        <div class="flex flex-col gap-4">
          <template v-for="navItem in navItems" :key="navItem.path">
            <NuxtLink
                :to="navItem.path"
                class="block py-2 text-lg font-medium"
                @click="onClose"
            >
              {{ navItem.name }}
            </NuxtLink>

            <div v-if="navItem.children?.length" class="pl-4 mt-2 space-y-2">
              <NuxtLink
                  v-for="child in navItem.children"
                  :key="child.path + child.query?.type"
                  :to="{ path: child.path, query: child.query }"
                  class="block py-1 text-base text-gray-600"
                  @click="onClose"
              >
                {{ child.name }}
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
