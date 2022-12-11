<script lang="ts" setup>
import type { IProduct } from '~/types'

interface Props {
  product: IProduct
}

defineProps<Props>()
</script>

<template>
  <div border border-1 rounded-15px p-19px flex flex-col justify-between max-h-400px font-sans-quicksand>
    <div flex items-center justify-center max-h-200px px-8 flex-1>
      <img :src="product.image" alt="product" max-h-full max-w-full>
    </div>
    <div>
      <span text-12px leading-18px color-gray mb-4px>{{ product.category.title }}</span>
      <h4 text-14px leading-20px font-bold>
        {{ product.title }}
      </h4>
      <StoreProductRating :rate="product.rate" :count="product.count" />
      <div flex justify-between items-center mt-10px>
        <p font-bold md:text-20px color-green-7 text-16px>
          ${{ product.price }}
        </p>
        <button btn>
          Add +
        </button>
      </div>
    </div>
  </div>
</template>
