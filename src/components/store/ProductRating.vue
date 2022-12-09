<script lang="ts" setup>
interface Props {
  rate: number
  count: number
}
const props = defineProps<Props>()
const stars = computed(() => {
  const roundedRate = Math.round(props.rate)
  return Array(5).fill(null).map((_, index) => roundedRate > index)
})
</script>

<template>
  <div flex gap-x-1 items-center>
    <StoreProductStar v-for="(star, index) in stars" :key="index" :color="star ? '#FDC040' : '#CDCDCD'" />
    <span text-12px leading-18px color-gray-500 ml-2>
      {{ rate }} ({{ count }})
    </span>
  </div>
</template>
