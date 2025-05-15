<template>
  <div class="flex space-x-8">
    <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="$emit('update:selected', index)"
        :class="[
        'text-base font-medium transition-all duration-200 whitespace-nowrap',
        selected === index
          ? 'text-[#323232] border-b border-[#2B9B81]'
          : 'text-[#8E8E8E] border-b border-transparent hover:text-[#323232]'
      ]"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  selected: {
    type: Number,
    required: true
  }
})

defineEmits(['update:selected'])
</script>
