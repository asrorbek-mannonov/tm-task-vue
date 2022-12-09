<script lang="ts" setup>
interface Props {
  outlined?: boolean
  size?: 'xs' | 'sm' | 'md' | 'ld'
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  round?: boolean
}

withDefaults(defineProps<Props>(), {
  outlined: false,
  size: 'md',
  disabled: false,
  type: 'button',
  round: false,
})
</script>

<template>
  <button class="button" :class="[{ 'button--outlined': outlined }, `button--${size}`, { 'button--round': round }]" :disabled="disabled" :type="type">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  outline: none;
  background-color: $primary;
  color: $white;
  border-style: solid;
  border-width: 1px;
  border-color: $primary;
  text-align: center;
  transition: all .3s ease;
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
    background-color: $light-gray;
    border-color: $gray;
    color: $dark-gray;
  }

  &:hover:not(:disabled) {
    background-color: $white;
    color: $primary;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  &--outlined {
    color: $primary;
    background-color: $white;
    &:hover {
      background-color: $primary;
      color: $white;
    }
  }

  &--md {
    border-radius: 8px;
    font-size: 18px;
    line-height: 22px;
    padding: 6px 40px;
  }

  &--sm, &--xs {
    border-radius: 5px;
  }

  &--sm {
    font-size: 16px;
    line-height: 18px;
    padding: 5px 36px;
  }

  &--xs {
    font-size: 14px;
    line-height: 16px;
    padding: 5px 32px;
  }

  &--round {
    width: 30px;
    height: 30px;
    padding: 3px 5px;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
