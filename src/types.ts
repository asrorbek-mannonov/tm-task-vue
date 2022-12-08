import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface ITodo {
  id: number
  title: string
  description: string
  completed: boolean
}
