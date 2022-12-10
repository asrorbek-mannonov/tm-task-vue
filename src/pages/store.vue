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

watch(() => filterOptions.value.category_id, () => {
  filterOptions.value.page = 1
})
</script>

<template>
  <div
    md="flex flex-row"
    items-center
    justify-between
    font-sans-lato
    py-4
    flex-col
  >
    <h2
      font-bold
      text-32px
      leading-40px
      md:text-left
      text-center
    >
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
    md:w-auto
    w-full
    focus:border-green-600
    placeholder="Search ..."
    :value="filterOptions.search"
    @keyup.esc="handleSearchChange('')"
    @keyup.enter="handleSearchChange(($event.target as HTMLInputElement).value)"
  >
  <StoreProducts />
  <div
    flex
    md:justify-start
    justify-center
  >
    <BasePagination
      v-model="filterOptions.page"
      :total-visible="7"
      :length="store.pagination.lastPage"
      my-4
    />
  </div>
</template>
