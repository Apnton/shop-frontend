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
      <CardItem
          v-for="product in props.products"
          :product="product"
          :key="product.id"
      />
  </div>
</template>

<style scoped>

  .cards__title
  {
    margin-bottom: 50px;
  }

  .card__list
  {
    display: grid;
    column-gap: 16px;
    row-gap: 16px;

  }

</style>
