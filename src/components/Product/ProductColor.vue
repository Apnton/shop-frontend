<script setup>
import {defineProps} from 'vue'
import {useColorStore} from '@/store/ColorStore'

const props = defineProps({
  group: {
    type: Array,
    required: true,
    default: () => []
  }
})

const colorStore = useColorStore()

const selectedColor = (id) => {
  colorStore.selectedColor = id
}
</script>

<template>
  <div class="color">
    <div class="color__label">Color</div>
    <div
        @click="selectedColor(group.color.id)"
        v-for="group in props.group"
        :key="group.id"
        :style="`background-color: #${group.color.color}`"
        :class="['color__mark', {'color__mark--active': group.color.id === colorStore.selectedColor}]">
    </div>
  </div>
</template>

<style scoped>

.color {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.color {
  margin-bottom: 30px;
}

.color__label {
  font-size: 1.8rem;
  font-weight: 500;
}

.color__mark {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--bs-black);
  transition: opacity linear 0.1s;
}

.color__mark:hover {
  opacity: 0.7;
}

.color__mark--active {
  border: 2px solid var(--bs-black);
  opacity: 0.7;
}
</style>
