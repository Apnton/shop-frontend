<script setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['show'])
const showPopup = (slug) => {
  emit('show', slug)
}
</script>

<template>
  <div class="card">
    <div class="card__img-wrap">
      <img class="card__img" :src="props.product.thumbnails" alt="Image"/>
      <div class="card__icon-buttons" @click.prevent>
        <IconButton @click="showPopup(props.product.slug)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
          </svg>
        </IconButton>
        <IconButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/>
          </svg>
        </IconButton>
      </div>

    </div>
    <div class="card__title">{{ props.product.title }}</div>
    <p class="card__category">{{ props.product.category.title }}</p>
    <div class="card__price">{{ props.product.price }}</div>
  </div>
</template>

<style scoped>

.card {
  padding: 12px;
  border: 1px solid var(--bs-gray-300);
  border-radius: 12px;
  cursor: pointer;
}

.card__img-wrap {
  position: relative;
  aspect-ratio: 1/1;
  margin-bottom: 16px;
}

.card__img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 8px;
}

.card__icon-buttons {
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  visibility: hidden;
}

.card:hover .card__icon-buttons {
  visibility: visible;

}

.card__title {
  font-weight: 500;
  line-height: 1.6;
}

.card__category {
  margin-bottom: 16px;
  font-size: 1.4rem;
}

.card__price {
  font-weight: 500;
}
</style>
