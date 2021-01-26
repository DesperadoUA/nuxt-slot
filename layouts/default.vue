<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
    import Header from '../components/header/app-header'
    import Footer from '../components/footer/app-footer'
    export default {
        name: "app-main",
        components: {Header, Footer},
    }
</script>
<style>

</style>
