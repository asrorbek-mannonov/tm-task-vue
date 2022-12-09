<script lang="ts" setup>
import { useTodo } from '~/store/todo'
const store = useTodo()
</script>

<template>
  <div class="todo-list">
    <TodoCard v-for="todo in store.getTodos" :key="todo.id" :todo="todo" />
  </div>
  <TodoCreateForm />
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  border-top: 1px solid $red;
}
</style>
