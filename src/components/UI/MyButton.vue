<script setup>

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  min-width: 140px;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  background-color: var(--bs-black);
  color: var(--bs-white);
  cursor: pointer;
  transition: opacity linear 0.3s;
}

button:hover {
  opacity: 0.7;
}

@media (max-width: 480px) {
  .button {
    width: 100%;
    padding: 16px;
  }
}
</style>
