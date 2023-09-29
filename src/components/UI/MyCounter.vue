<script setup>
import {ref} from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {

  if (count.value === 0) {
    return
  }
  count.value--
}

</script>

<template>
 <div class="counter">
   <button :disabled="count === 0" @click="decrement" class="counter__decrement">-</button>
   <div class="counter__value">{{ count }}</div>
   <button @click="increment" class="counter__increment">+</button>
 </div>
</template>

<style scoped>
  .counter {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .counter__increment,
  .counter__decrement {
    width: 30px;
    height: 30px;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    border: 1px solid var(--bs-gray-500);
    border-radius: 50%;
  }

  .counter__value {
    font-weight: bold;
  }
</style>
