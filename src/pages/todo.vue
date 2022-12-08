<script lang="ts" setup>
import { useTodo } from '~/store/todo'
const store = useTodo()
</script>

<template>
  <h1 class="title">
    Todo App
  </h1>
  <p class="subtitle">
    {{ store.getCompletedCount }}/{{ store.getTotal }} completed
  </p>
  <TodoList />
</template>

<style scoped lang='scss'>
.title {
  color: $red;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 22px;
}
.subtitle {
 color: $black;
 font-size: 24px;
 line-height: 28px;
 margin-bottom: 22px;
}
</style>
