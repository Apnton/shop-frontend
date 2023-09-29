<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  sizes: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="size">
    <div class="size__label">Size:</div>
    <div v-for="size in props.sizes"
         :key="size.id"
         class="size__mark">
      {{ size.title }}
    </div>
  </div>
</template>

<style scoped>

.size {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

}

.size__label {
  font-size: 1.8rem;
  font-weight: 500;
}
</style>
