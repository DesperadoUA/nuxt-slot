<template>
  <section class="content">
      <div class="container top_content_wrapper" v-if="value.thumbnail!=''">
            <div class="top_content_left">
                <amp-img :src='value.thumbnail' 
                     width="200" 
                     height="100"
                ></amp-img>
                <div class="top_content_title" v-html="value.title"></div>
            </div>
            <div class="top_content_right" v-html="value.amp_content"></div>
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