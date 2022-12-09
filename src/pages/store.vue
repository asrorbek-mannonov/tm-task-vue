<script lang="ts" setup>
import { useProducts } from '~/store/products'

const store = useProducts()
const categoryId = ref<number | undefined>()
onMounted(() => {
  store.fetchCategories()
})

watch(categoryId, () => {
  store.fetchProducts({ category_id: categoryId.value })
}, { immediate: true })

const handlePageChange = (newPageValue: number) => {
  store.fetchProducts({ category_id: categoryId.value, page: newPageValue })
}
</script>

<template>
  <div flex items-center justify-between font-sans-lato py-4>
    <h2 font-bold text-32px leading-40px>
      Products
    </h2>
    <StoreCategories v-model="categoryId" />
  </div>
  <StoreProducts />
  <BasePagination :model-value="store.pagination.currentPage" :total-visible="7" :length="store.pagination.lastPage" my-4 @update:model-value="handlePageChange" />
</template>
