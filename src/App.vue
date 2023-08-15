<script setup>
  import MyNavbar from '@/components/Navbar/MyNavbar.vue'
  import MyFooter from '@/components/Footer/MyFooter.vue'

</script>

<template>
  <div class="wrapper">
    <MyNavbar/>
    <div class="wrapper-content">
      <section class="section">
        <div class="container">
           <router-view></router-view>
        </div>
      </section>
    </div>
    <MyFooter/>
  </div>
</template>

<style>
@import './assets/styles/main.css';
</style>

