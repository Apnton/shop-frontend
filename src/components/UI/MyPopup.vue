<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: () => false
  }
})

const emit = defineEmits(['visible'])

const hidePopup = () => {
  emit('visible', false)
}
</script>

<template>
  <div class="popup" v-if="props.visible">
    <div @click="hidePopup" class="popup__overlay">
      <div @click.stop class="popup__content">
        <button @click="hidePopup" class="popup__close">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-x">
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

.popup__overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.popup__content {
  position: relative;
  width: 100%;
  max-width: 768px;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--bs-white);
  overflow: hidden;
}

.popup__close {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 15px;
  right: 15px;
  width: 33px;
  height: 33px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--bs-white);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);
  transition: linear 0.1s;
}

.popup__close:hover {
  transform: scale(1.2);
}

@media (max-width: 480px) {
  .popup__content {
    padding: 50px 20px 20px 20px;

  }

  .popup__close
  {
    top: 10px;
    right: 10px;
  }
}
</style>
