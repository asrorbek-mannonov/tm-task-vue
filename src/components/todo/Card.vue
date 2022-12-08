<script lang="ts" setup>
import type { ITodo } from '~/types'
import { useTodo } from '~/store/todo'

interface Props {
  todo: ITodo
}

const props = defineProps<Props>()
const store = useTodo()

const handleToggleStatus = () => {
  store.toggleCompletion(props.todo.id)
}
</script>

<template>
  <div class="todo-card">
    <TodoCardStatus :completed="todo.completed" @click="handleToggleStatus" />
    <TodoCardBody :todo="todo" />
  </div>
</template>

<style lang="scss">
.todo-card {
  display: flex;
  column-gap: 14px;

  &__body {
    border: 1px solid $gray;
    padding: 8px 19px;
    border-radius: 8px;
    position: relative;
    width: 100%;
  }

  &__status {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: $gray;
    margin-top: 10px;
  }

  &__title {
    color: black;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 9px;
  }

  &__description {
    color: $dark-gray;
    font-size: 22px;
    line-height: 26px;
  }

  &__action {
    position: absolute;
    right: 30px;
    top: 16px;
  }
}
</style>
