<script setup>
import {onMounted} from 'vue'
import {RouterLink} from 'vue-router';
import {useCategoryStore} from '@/store/CategoryStore';

const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.getCategories();
})

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo">
          <router-link :to="'/'">Shop</router-link>
        </div>
        <nav class="nav">
          <router-link
              v-for="category  in categoryStore.categories"
              :key="category.id"
              :to="`/category/${category.slug}`"
              class="nav__link">
            {{ category.title }}
          </router-link>
        </nav>
        <div class="header__cart">
          <div class="header__cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"/>
            </svg>
          </div>
          <div class="header__cart-quantity">0</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  position: fixed;
  height: 64px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}

.nav,
.header__inner {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav__link {
  display: block;
  margin-left: 10px;
  padding: 10px;
  font-size: 14px;
  opacity: 0.7;
}

.nav__link:hover {
  opacity: 1;
  transition: ease-in-out 0.3s;
}

.router-link-active {
  opacity: 1;
}

.header__cart {
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 4px 8px;
  margin-left: auto;
  cursor: pointer;
  border-radius: 20px;
  background-color: #000000;
}

.header__cart-icon {
  display: inline-block;
  width: 23px;
  height: 24px;
  color: #ffffff;
}

.header__cart-quantity {
  color: #ffffff;
}

</style>
