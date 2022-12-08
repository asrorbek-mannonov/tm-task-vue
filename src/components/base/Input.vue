<script lang="ts" setup>
interface Props {
  modelValue?: string
  title?: string
}

interface Emits {
  (e: 'update:model-value', val: string): void
}

withDefaults(defineProps<Props>(), {
  title: '',
  modelValue: '',
})

const emit = defineEmits<Emits>()
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:model-value', target.value)
}
</script>

<template>
  <div class="input">
    <label class="input__label">
      <span class="input__title">{{ title }}</span>
      <input :value="modelValue" v-bind="$attrs" class="input__field" @input="onInput">
    </label>
  </div>
</template>

<style lang='scss' scoped>
</style>
