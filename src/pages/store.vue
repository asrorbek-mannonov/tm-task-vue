<script lang="ts" setup>
import { useProducts } from '~/store/products'
import type { IFilterOptions } from '~/types'

const store = useProducts()
const filterOptions = useLocalStorage<IFilterOptions>('store-filter-options', {
  category_id: undefined,
  search: '',
  page: store.pagination.currentPage,
})

onMounted(() => {
  store.fetchCategories()
})

watch(() => filterOptions, (val) => {
  store.fetchProducts(val.value)
}, { immediate: true, deep: true })

const handleSearchChange = (val: string) => {
  if (filterOptions.value.search !== val)
    filterOptions.value.page = 1
  filterOptions.value.search = val
}
</script>

<template>
  <div flex items-center justify-between font-sans-lato py-4>
    <h2 font-bold text-32px leading-40px>
      Products ({{ store.pagination.total }})
    </h2>
    <StoreCategories v-model="filterOptions.category_id" />
  </div>
  <input
    type="text"
    border
    border-green
    px-4
    py-2
    outline-none
    focus:border-green-600
    placeholder="Search ..."
    :value="filterOptions.search"
    @keyup.esc="handleSearchChange('')"
    @keyup.enter="handleSearchChange(($event.target as HTMLInputElement).value)"
  >
  <StoreProducts />
  <BasePagination v-model="filterOptions.page" :total-visible="7" :length="store.pagination.lastPage" my-4 />
</template>
