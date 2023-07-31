<template>
  <section class="blog_card_wrapper">
      <div class="container">
         <div class="blog_card_item" v-for="item in currentPosts" :key="item.id">
             <div class="blog_card_item_left">
                 <div class="blog_card_item_img_wrapper">
                    <img :src="item.thumbnail" 
                         loading="lazy"
                         class="blog_card_item_thumbnail" 
                         width="320" 
                         height="190">
                 </div>
             </div>
             <div class="blog_card_item_right">
                 <div class="blog_card_item_title">
                     <NuxtLink no-prefetch :to="item.permalink" 
                               class="blog_card_item_permalink" 
                               v-html="item.title"
                    >
                     </NuxtLink>
                 </div>
                 <div class="blog_card_item_author">
                   <p>Автор обзора: <span>{{item.author}}</span> {{item.date | post_data}}</p>    
                 </div>   
                 <div class="blog_card_item_excerpt">
                     {{item.excerpt}}
                 </div>
                 <div class="blog_card_item_btn_wrapper">
                     <NuxtLink no-prefetch :to="item.permalink" 
                               class="blog_card_item_btn">Подробный обзор
                     </NuxtLink>
                 </div>
             </div>
         </div>
         <div class="casino_table_btn_wrapper" v-if="posts.length > (numberPostOnQuery*postCurrentPage)">
           <button class="btn_review" @click="postShowMore">Загрузить еще</button>
         </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_loop",
        props: ['posts'],
        data(){
            return {
                numberPostOnQuery: 8,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
                return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            post_data(item){
                return item.slice(0, -9)
            }
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>