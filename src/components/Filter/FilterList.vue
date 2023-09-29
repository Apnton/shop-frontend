<script setup>
import {ref} from 'vue'
import {defineProps, defineEmits} from 'vue';
import FilterItem from '@/components/Filter/FilterItem'

const props = defineProps({
  items: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selected'])
const selectedItem = ref(null)

const selected = (id) => {

  if (id === selectedItem.value) {
    selectedItem.value = null
    emit('selected', null)
  } else {
    selectedItem.value = id
    emit('selected', id)
  }

}

</script>

<template>
  <div class="filter__list">
    <h3 class="filter__title">{{ props.title }}</h3>
    <div class="filter__items">
      <FilterItem
          @click="selected(item.id)"
          :class="{'filter__item--active': item.id === selectedItem}"
          v-for="item in props.items"
          :key="item.id"
          :item="item"
      />
    </div>
  </div>
</template>

<style scoped>
.filter__title {
  font-weight: 500;
  margin-bottom: 16px;
}

.filter__items {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--bs-gray-300);
}

.filter__item--active {
  color: var(--bs-white);
  background-color: var(--bs-black);
}

</style>
