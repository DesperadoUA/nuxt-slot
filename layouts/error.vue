<template>
  <div>
    <app_banner :value="data.body.h1"></app_banner>
    <section>
        <div class="container blog_section home_link">
            <NuxtLink to="/">Home page</NuxtLink>
        </div>
    </section>
  </div>
</template>

<script>
  import app_banner from '../components/banner/app_banner_casino'
  export default {
    props: ['error'],
    data: () => {
            return {
               data: {
                   body: {
                       h1: '404 Page not found'
                   }
               },
            }
        },
    components: {app_banner},
    layout: 'error'
  }
</script>
<style scoped>
.home_link {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    text-transform: uppercase;
    min-height: 30vh;
}
.home_link a {
    text-decoration: none;
    font-family: var(--font-bold);
    color: var(--black);
    font-size: 35px;
}
</style>