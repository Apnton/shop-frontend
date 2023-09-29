<script setup>

</script>

<template>
  <button class="icon-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.icon-button {
  display: block;
  width: 35px;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  color: var(--bs-black);
  background-color: var(--bs-gray-100);
  transition: linear 0.1s;
}

.icon-button:hover
{
  transform: scale(1.1);
}

</style>
