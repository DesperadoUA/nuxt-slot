<template>
  <section class="content">
      <div class="container" v-html="value">
      </div>
  </section>
</template>

<script>
    export default {
        name: "app-content_amp",
        props: ['value'],
        data(){
            return {
                
            }
        }
    }
</script>
