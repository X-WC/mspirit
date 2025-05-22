<template>
  <section class="features-container">
    <div class="feature-grid-wrapper">
      <div
          v-for="item in features"
          :key="item.title"
          class="feature-card"
      >
        <div class="size-10">
          <img :src="item.url" :alt="item.title" />
        </div>
        <div class="font-semibold text-lg xl:text-xl text-[#2B9B81] pt-3.5 pb-2">
          {{ item.title }}
        </div>
        <div class="leading-[32px] text-[#323232] overflow-hidden text-ellipsis">
          {{ item.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  features: {
    title: string
    content: string
    url: string
  }[]
}>()
</script>

<style scoped>
.features-container {
  background: linear-gradient(180deg, #FFFFFF 0%, #9FE7D4 57%, #7BDEFC 100%);
  padding: 50px 16px 32px;
}

@media (min-width: 1280px) {
  .features-container {
    padding: 160px 128px 32px;
  }
}

.feature-grid-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

@media (min-width: 1280px) {
  .feature-grid-wrapper {
    grid-template-columns: repeat(4, 1fr); /* 固定四列 */
  }
}

.feature-card {
  background: #ffffffcc;
  border-radius: 0.5rem;
  padding: 1.25rem 1rem 0.5rem;
}
</style>
