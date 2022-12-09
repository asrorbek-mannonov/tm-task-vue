<script setup lang="ts">
import { useProducts } from '~/store/products'
const store = useProducts()
</script>

<template>
  <div grid grid-cols-4 gap-24px mt-53px>
    <StoreProductCard v-for="product in store.products" :key="product.id" :product="product" />
  </div>
</template>
