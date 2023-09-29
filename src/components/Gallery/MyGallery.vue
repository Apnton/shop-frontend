<script setup>
import {defineProps, ref} from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const indexImage = ref(0)

const changeImage = (id) => {
  indexImage.value = props.images.findIndex(image => image.id === id)
}

</script>

<template>
  <div class="gallery" v-if="props.images.length">
    <div class="gallery__main-wrap">
      <img class="gallery__main-image" :src="props.images[indexImage].path" alt="Image">
    </div>

    <div class="gallery__images">
      <div
          v-for="image in props.images"
          :class="['gallery__image-wrap',
          {'gallery__image--active':image.id === props.images[indexImage].id}]"
          @click="changeImage(image.id)"
          :key="image.id"
      >
        <img class="gallery__image" :src="image.path" alt="Image">
      </div>
    </div>

  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery__main-wrap {
  position: relative;
  aspect-ratio: 1/1;
}

.gallery__main-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.gallery__images {
  display: flex;
  gap: 20px;
}

.gallery__image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-basis: 25%;
  aspect-ratio: 1/1;
}

.gallery__image {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2px;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;
}

.gallery__image--active:before {
  content: '';
  padding: 2px;
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 12px;
}

@media (max-width: 640px) {
  .gallery__images {
    display: none;
  }
}
</style>
