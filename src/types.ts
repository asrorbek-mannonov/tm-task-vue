import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface ITodo {
  id: number
  title: string
  description: string
  completed: boolean
}

export interface ICategory {
  id: number
  title: string
}

export interface IProduct {
  id: number
  title: string
  price: number
  category: ICategory
  description: string
  image: string
  rate: number
  count: number
}

export interface IPageMeta {
  currentPage: number
  perPage: number
  total: number
  lastPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export interface PaginatedResponse<T> {
  data: T[]
  meta: IPageMeta
}

export interface IFilterOptions {
  category_id?: number
  search: string
  page: number
}
