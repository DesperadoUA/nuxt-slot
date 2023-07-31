<template>
  <section class="content">
      <div class="container top_content_wrapper" v-if="value.thumbnail!=''">
            <div class="top_content_left">
                <img :src='value.thumbnail' 
                     loading="lazy"
                     width="200" 
                     height="100"
                />
                <div class="top_content_title" v-html="value.title"></div>
            </div>
            <div class="top_content_right" v-html="value.content"></div>
      </div>
      <div class="container" v-else v-html="value.content">
      </div>
  </section>
</template>

<script>
    export default {
        name: "app-top-content_amp",
        props: ['value'],
        data(){
            return {
                
            }
        }
    }
</script>