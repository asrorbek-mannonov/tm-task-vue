import { defineStore } from 'pinia'
import type { ITodo } from '~/types'

interface IState {
  todos: ITodo[]
}

export const useTodo = defineStore('todo', {
  state: (): IState => ({
    todos: [],
  }),
  getters: {
    getTodos: state => state.todos,
    getCompletedTodos: state => state.todos.filter(todo => todo.completed),
    getTotal() { return this.getTodos.length },
    getCompletedCount() { return this.getCompletedTodos.length },
  },
  actions: {
    addTodo(todo: ITodo) {
      this.todos.unshift(todo)
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    toggleCompletion(id: number) {
      const todo = this.todos.find(t => t.id === id)
      if (todo)
        todo.completed = !todo.completed
    },
  },
  persist: true,
})
