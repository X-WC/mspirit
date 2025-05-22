<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader/>
    <main class="flex-grow">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<style scoped>

</style>
