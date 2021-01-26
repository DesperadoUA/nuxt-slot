<template>
  <header>
    <div class="container header_container">
      <NuxtLink no-prefetch to="/" >
        <img src="http://nuxt-slot/client/img/logo.png" class="logo">
      </NuxtLink>
      <NuxtLink no-prefetch to="/igrovue-avtomatu.html" >Онлайн казино</NuxtLink>
    </div>
  </header>
</template>

<script>
    export default {
        name: "app-header",
        data(){
            return {

            }
        }
    }
</script>

<style>
  .header_container {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
</style>