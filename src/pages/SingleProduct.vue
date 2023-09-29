<script setup>
import {onMounted} from 'vue';
import {useRoute} from 'vue-router'
import {useProductStore} from '@/store/ProductStore'
import MyGallery from '@/components/Gallery/MyGallery'
import ProductSize from '@/components/Product/ProductSize'
import ProductColor from '@/components/Product/ProductColor'

const route = useRoute();
const productStore = useProductStore()

const addToCart = (product) => {
  console.log(product);
}

onMounted(async () => {
  await productStore.getProductBySlug(route.params.slug)
})

</script>

<template>
  <div class="row">

    <div class="col">
      <MyGallery :images="productStore.product.images"/>
    </div>
    <div class="col">
      <h1 class="title">{{ productStore.product.title }}</h1>
      <div class="price">{{ productStore.product.price }}</div>
      <ProductSize :sizes="productStore.product.sizes"/>
      <ProductColor :group="productStore.group"/>
      <div class="counter__row">
        <MyCounter/>
      </div>

      <MyButton @click="addToCart(productStore.product)">Add to Cart</MyButton>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 30px;
}

.col {
  flex-basis: 50%;
}

.title {
  margin-bottom: 20px;
}

.price {
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: 2.4rem;
  font-weight: 500;

  border-bottom: 1px solid var(--bs-gray-300);
}

.counter__row {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

</style>
