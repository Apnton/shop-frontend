<script setup>
import {defineProps, defineEmits} from 'vue'
import {useColorStore} from '@/store/ColorStore'
import {useProductStore} from '@/store/ProductStore'
import MyGallery from '@/components/Gallery/MyGallery'
import ProductSize from '@/components/Product/ProductSize'
import ProductColor from '@/components/Product/ProductColor'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  group: {
    type: Array,
    required: true
  },
  visible: {
    type: Boolean,
    required: true,
    default: () => false
  }

})
const productStore = useProductStore()
const colorStore = useColorStore()
const emit = defineEmits(['visible'])

const hidePopup = () => {
  emit('visible', false)
}

const selectedColor = () => {
  productStore.product = props.group.find(item => item.color.id === colorStore.selectedColor)
}

</script>

<template>
  <MyPopup :visible="props.visible" @visible="hidePopup">
    <div class="popup-row">
      <div class="popup__gallery">
        <MyGallery :images="props.product.images"/>
      </div>
      <div class="popup__info">
        <h1 class="title">{{ props.product.title }}</h1>
        <div class="price">{{ props.product.price }}</div>
        <ProductSize :sizes="props.product.sizes"/>
        <ProductColor @click="selectedColor" :group="props.group"/>
        <MyButton>Add to Cart</MyButton>
      </div>
    </div>
  </MyPopup>
</template>

<style scoped>
.popup-row {
  display: flex;
  gap: 20px;
}

.popup__gallery {
  flex-basis: 40%;
}

.popup__info {
  flex-basis: 60%;
}

.title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.price {
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: 2.4rem;
  font-weight: 500;

  border-bottom: 1px solid var(--bs-gray-300);
}

@media (max-width: 480px) {
  .popup-row {
    flex-direction: column;
  }

}

</style>
