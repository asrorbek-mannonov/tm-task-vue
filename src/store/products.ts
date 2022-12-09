import { defineStore } from 'pinia'
import type { ICategory, IPageMeta, IProduct, PaginatedResponse } from '~/types'
import http from '~/utils/http'

interface IState {
  products: IProduct[]
  categories: ICategory[]
  pagination: IPageMeta
  loading: boolean
}

export const useProducts = defineStore('products', {
  state: (): IState => ({
    products: [],
    categories: [],
    loading: false,
    pagination: {
      currentPage: 1,
      perPage: 10,
      total: 0,
      lastPage: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    },
  }),
  actions: {
    async fetchProducts({ category_id, page }: { category_id?: number; page?: number }) {
      if (this.loading)
        return
      this.loading = true
      try {
        const { data: productsResponse } = await http.get<PaginatedResponse<IProduct>>('/products', {
          params: {
            category_id,
            page,
          },
        })
        this.products = productsResponse.data
        this.pagination = productsResponse.meta
        return productsResponse
      }
      catch (e) {
        return Promise.reject(e)
      }
      finally {
        this.loading = false
      }
    },
    async fetchCategories() {
      try {
        const { data: categories } = await http.get<ICategory[]>('/categories')
        this.categories = categories
        return categories
      }
      catch (e) {
        return Promise.reject(e)
      }
    },
  },
})
