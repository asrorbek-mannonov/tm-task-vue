<script setup lang="ts">
import { useProducts } from '~/store/products'
const store = useProducts()
</script>

<template>
  <div grid sm:grid-cols-3 gap-24px mt-53px lg:grid-cols-4>
    <StoreProductCard v-for="product in store.products" :key="product.id" :product="product" />
  </div>
</template>
