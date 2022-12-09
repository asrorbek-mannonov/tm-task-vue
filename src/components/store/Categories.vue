<script lang='ts' setup>
interface Props {
  modelValue?: number
}

withDefaults(defineProps<Props>(), {
  modelValue: undefined,
})

const emit = defineEmits<Emit>()
const store = useProducts()

interface Emit {
  (e: 'update:model-value', val?: number): void
}
</script>

<template>
  <ul flex gap-x-30px>
    <li text-16px leading-24px cursor-pointer :class="{ 'font-bold': !modelValue }" @click="emit('update:model-value', undefined)">
      All
    </li>
    <li
      v-for="category in store.categories"
      :key="category.id"
      text-16px
      leading-24px
      cursor-pointer
      :class="{ 'font-bold': modelValue === category.id }"
      @click="emit('update:model-value', category.id)"
    >
      {{ category.title }}
    </li>
  </ul>
</template>
