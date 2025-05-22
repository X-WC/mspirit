<template>
  <div class="product-content">
    <!-- 背景光影层 -->
    <div
        class="absolute top-[40%] left-[15%] w-[65%] h-[5%] bg-[#7DD6BD] opacity-67 blur-[15px]"
    ></div>

    <!-- 产品图 -->
    <div :class="[imageWrapperClass]">
      <img :src="image" :alt="alt" class="w-full"/>
    </div>

    <!-- 名称 -->
    <div class="product-name">{{ name }}</div>

    <!-- 按钮 -->
    <NuxtLink :to="link">
      <button class="button bg-[#39D1AA]">了解更多</button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  image: string
  alt: string
  link: string
  imageWrapperClass: string
}>()
</script>

<style scoped>
.product-content {
  position: relative;
  width: min(346px, 90%);
  background: #FFFFFF;
  box-shadow: 0 0.375rem 0.375rem 0.0625rem rgba(0, 0, 0, 0.16);
  border-radius: 1.125rem;
  margin-top: 7rem;
  text-align: center;
  padding-bottom: 2.5rem;
}

.product-name {
  padding-top: 13rem;
  padding-bottom: 1.125rem;
  font-weight: 600;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: #14293B;
  line-height: 1.4;
}
</style>
