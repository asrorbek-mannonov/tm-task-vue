<script lang='ts' setup>
import { Icon } from '@iconify/vue'
import { useTodo } from '~/store/todo'
import type { ITodo } from '~/types'
const store = useTodo()

const defaultTodo = (): ITodo => ({
  id: Date.now(),
  title: '',
  description: '',
  completed: false,
})

const newTodo = ref<ITodo>({
  ...defaultTodo(),
})
const isFieldsVisible = ref<boolean>(false)

const handleCreateTodo = () => {
  store.addTodo({ ...newTodo.value })
  newTodo.value = defaultTodo()
}

const isSubmittable = computed(() => {
  return !(newTodo.value.title && newTodo.value.description)
})

const handleReset = () => {
  newTodo.value = defaultTodo()
  isFieldsVisible.value = false
}
</script>

<template>
  <div class="form-wrapper">
    <BaseButton v-if="!isFieldsVisible" outlined @click="isFieldsVisible = true">
      <Icon icon="carbon:add-alt" class="inline-block" />
      Create
    </BaseButton>
    <form v-else class="todo-form" @submit.prevent="handleCreateTodo">
      <div class="todo-form__fields">
        <input v-model="newTodo.title" placeholder="Title">
        <textarea v-model="newTodo.description" placeholder="Description" />
      </div>
      <div class="todo-form__actions">
        <BaseButton type="submit" :disabled="isSubmittable">
          Add
        </BaseButton>
        <BaseButton outlined type="reset" @click="handleReset">
          Cancel
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  margin-left: 39px;
}

.todo-form {
  &__fields {
    display: flex;
    flex-direction: column;
    background: $light-gray;
    border-radius: 12px;
    border: 2px solid $gray;
    input, textarea {
      outline: none;
      appearance: none;
      color: $black;
      &::placeholder {
        color: $dark-gray;
      }
    }
    input {
      border-bottom: 2px solid $gray;
      padding: 9px 17px;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
    }
    textarea {
      padding: 5px 17px;
      font-size: 20px;
      line-height: 23px;
    }
  }
  &__actions {
    margin-top: 24px;
    button + button {
      margin-left: 10px;
    }
  }
}
</style>
