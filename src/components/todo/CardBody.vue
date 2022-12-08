<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import type { ITodo } from '~/types'

interface Props {
  todo: ITodo
}

const props = defineProps<Props>()

const store = useTodo()
const handleDelete = () => {
  store.deleteTodo(props.todo.id)
}
</script>

<template>
  <div class="todo-card__body">
    <h3 class="todo-card__title">
      {{ todo.title }}
    </h3>
    <p class="todo-card__description">
      {{ todo.description }}
    </p>
    <BaseButton round class="todo-card__action" outlined @click="handleDelete">
      <Icon icon="carbon:trash-can" />
    </BaseButton>
  </div>
</template>
