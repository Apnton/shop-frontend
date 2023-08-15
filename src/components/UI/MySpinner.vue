<script setup>

</script>

<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner
{
  display: inline-block;
  position: fixed;
  top: 30%;
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
  margin: auto;
  border: 10px solid rgba(0,0,0,.1);
  border-radius: 50%;
  border-top-color: #eee;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>
