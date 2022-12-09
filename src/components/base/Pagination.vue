<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
  modelValue: number
  length: number
  totalVisible: number
}

interface Emit {
  (e: 'update:modelValue', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const buttons = computed(() => {
  if (props.length <= props.totalVisible) {
    return Array(props.length)
      .fill(null)
      .map((_, i) => i + 1)
  }

  if (props.modelValue < props.totalVisible - 1) {
    return Array(props.totalVisible - 1)
      .fill(null)
      .map((_, i) => i + 1)
      .concat(0, props.length)
  }

  if (props.modelValue > props.length - props.totalVisible + 2) {
    return [
      1,
      0,
      ...Array(props.totalVisible - 1)
        .fill(null)
        .map((_, i) => props.length - props.totalVisible + 2 + i),
    ]
  }

  const totalVisible
    = props.totalVisible % 2 ? props.totalVisible : props.totalVisible - 1

  return [
    1,
    0,
    ...Array(totalVisible - 2)
      .fill(null)
      .map((_, i) => props.modelValue - Math.floor(totalVisible / 2) + i + 1),
    0,
    props.length,
  ]
})

const handlePrev = () => {
  if (props.modelValue > 0)
    emit('update:modelValue', props.modelValue - 1)
}

const handleNext = () => {
  if (props.modelValue < props.length)
    emit('update:modelValue', props.modelValue + 1)
}

const handleClick = (button: number) => {
  if (button)
    emit('update:modelValue', button)
}
</script>

<template>
  <div flex gap-x-2>
    <button :disabled="props.modelValue === 1" btn @click="handlePrev">
      &lt;
    </button>
    <button
      v-for="(button, index) in buttons"
      :key="index"
      btn
      :disabled="!button"
      :class="{ active: button === modelValue && button }"
      @click="handleClick(button)"
    >
      {{ button || '...' }}
    </button>
    <button :disabled="props.modelValue === props.length" btn @click="handleNext">
      &gt;
    </button>
  </div>
</template>

<style lang="scss" scoped>
button.active {
  @apply bg-green-500 text-white;
}
</style>
