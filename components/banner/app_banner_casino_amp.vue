<template>
  <section class="main_banner">
            <div class="container banner_container">
                <h1 class="banner_title">{{value}}</h1>
            </div>
  </section>
</template>

<script>
    export default {
        name: "app_banner_casino_amp",
        props:['value'],
        data(){
            return {
            }
        },
    }
</script>