<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="filter__item">{{ props.item.title}}</div>
</template>

<style scoped>
.filter__item
{
  min-width: 40px;
  padding: 8px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--bs-gray-300);
  border-radius: 8px;
  transition: opacity 0.3s;
}

.filter__item:hover
{
  opacity: 0.7;

}
</style>
