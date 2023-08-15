<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});
</script>

<template>
    <div class="card">
      <div class="card__img-wrap">
        <img class="card__img" :src="props.product.thumbnails" alt="Image"/>
      </div>
      <div class="card__title">{{ props.product.title }}</div>
      <p class="card__category">{{ props.product.category.title }}</p>
      <div class="card__price">{{ props.product.price }}</div>
    </div>
</template>

<style scoped>

.card
{
  padding: 12px;
  border: 1px solid var(--bs-gray-300);
  border-radius: 12px;
}

.card__img-wrap
{
  position: relative;
  aspect-ratio: 1/1;
  margin-bottom: 16px;
}

.card__img
{
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 8px;
}

.card__title
{
  font-weight: 500;
  line-height: 1.6;
}

.card__category
{
  margin-bottom: 16px;
  font-size: 1.4rem;
}

.card__price
{
  font-weight: 500;
}
</style>
