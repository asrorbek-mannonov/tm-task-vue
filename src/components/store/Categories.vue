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
  <ul md="flex flex-row" gap-x-30px flex-col>
    <li md:text-left text-center text-16px leading-24px cursor-pointer :class="{ 'font-bold': !modelValue }" @click="emit('update:model-value', undefined)">
      All
    </li>
    <li
      v-for="category in store.categories"
      :key="category.id"
      text-16px
      leading-24px
      cursor-pointer
      md:text-left
      text-center
      :class="{ 'font-bold': modelValue === category.id }"
      @click="emit('update:model-value', category.id)"
    >
      {{ category.title }}
    </li>
  </ul>
</template>
