<script setup>
// eslint-disable-next-line no-unused-vars
import {onMounted} from 'vue';
import {useProductStore} from '@/store/ProductStore';
import MainTitle from '@/components/UI/MainTitle.vue';
import CardList from '@/components/Product/CardList.vue';
import BannerBlock from '@/components/Product/BannerBlock.vue';


const productStore = useProductStore();
onMounted(async () => {
  await productStore.getProducts()

});

const banner = 'https://res.cloudinary.com/dzkt3vssb/image/upload/v1687805842/ayni13dt7ogetx5ynqev.png';
const title = 'Explore The Special Collection!';
</script>

<template>
  <div class="banner-wrapper">
    <BannerBlock
        :image="banner"
        :title="title"
    />
  </div>
  <div>

    <MainTitle>
      Featured Products
    </MainTitle>

    <div class="products">
      <CardList class="card__list" :products="productStore.products"/>
    </div>
  </div>
</template>

<style scoped>
.card__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}

@media (max-width: 1200px) {
  .card__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 991px) {
  .card__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .card__list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
