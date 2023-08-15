<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});


</script>

<template>
  <div class="banner" :style="{ backgroundImage: `url(${props.image})`}">
    <h2 class="banner__title">{{ props.title }}</h2>
  </div>
</template>

<style scoped>
.banner
{
  min-height: 676px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 20px;
}

.banner__title
{
  max-width: 676px;

  font-family: inherit;
  font-weight: 700;
  font-size: 58px;
  color: black;
  text-align: center;
}
</style>
