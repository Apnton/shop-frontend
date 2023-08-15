<script setup>
import {onMounted} from 'vue'
import {useRoute} from "vue-router";
import {reactive, watch} from 'vue';
import {useSizeStore} from '@/store/SizeStore'
import {useColorStore} from '@/store/ColorStore'
import MySpinner from '@/components/UI/MySpinner'
import {useProductStore} from '@/store/ProductStore'
import {useCategoryStore} from '@/store/CategoryStore'
import CardItem from '@/components/Product/CardItem.vue';
import FilterList from '@/components/Filter/FilterList.vue'
import BannerBlock from '@/components/Product/BannerBlock.vue';

const route = useRoute()
const sizeStore = useSizeStore()
const colorStore = useColorStore()
const productStore = useProductStore()
const categoryStore = useCategoryStore()

const params = reactive({
  category_slug: route.params.slug,
  color_id: colorStore.selectedColor,
  size_id: sizeStore.selectedSize
})

const selectedColor = (id) => {
  params.color_id = id
  productStore.getProductsWithParams(params)
}

const selectedSize = (id) => {
  params.size_id = id
  productStore.getProductsWithParams(params)
}

watch(route, () => {
  params.category_slug = route.params.slug
  productStore.getProductsWithParams(params)
  categoryStore.getCategoryBySlug(params.category_slug)
})

onMounted(async () => {
  await productStore.getProductsWithParams(params)
  await categoryStore.getCategoryBySlug(params.category_slug)
  await sizeStore.getSizes()
  await colorStore.getColors()
})

</script>

<template>
  <div>
    <div class="banner-wrapper">
      <BannerBlock
          v-if="!categoryStore.isLouding && categoryStore.category?.image"
          :image="categoryStore.category.image"
          :title="categoryStore.category.caption">
      </BannerBlock>
      <MySpinner v-else/>
    </div>

    <div class="row">
      <div class="filter">
        <FilterList
            @selected="selectedSize"
            :items="sizeStore.sizes"
            :title="'Sizes'"
        />
        <FilterList
            @selected="selectedColor"
            :items="colorStore.colors"
            :title="'Colors'"
        />
      </div>
      <div class="card__list">
        <CardItem
            v-for="product in productStore.products"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>
.banner-wrapper {
  margin-bottom: 50px;
}

.row {
  display: flex;
  gap: 20px;
}

.filter {
  flex-basis: 20%;
}

.card__list {
  flex-basis: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}

@media (max-width: 991px) {
  .card__list {
    flex-basis: 75%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .filter {
    flex-basis: 25%;
  }

}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .card__list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

</style>
