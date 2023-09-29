<script setup>
import {defineProps} from 'vue'
import CardItem from '@/components/Product/CardItem.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="cards">
    <template v-for="product in props.products" :key="product.id">
      <router-link :to="`/product/${product.slug}`">
        <CardItem :product="product"/>
      </router-link>
    </template>

  </div>
</template>

<style scoped>

.cards__title {
  margin-bottom: 50px;
}

</style>
