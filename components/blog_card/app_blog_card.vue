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
                               class="blog_card_item_permalink" v-html="item.title">
                     </NuxtLink>
                 </div>
                 <div class="blog_card_item_author">
                   <p>{{translates.REVIEW_AUTHOR[config.LANG]}}: <span>{{item.author}}</span> {{item.date | post_data}}</p>    
                 </div>   
                 <div class="blog_card_item_excerpt">
                     {{item.excerpt}}
                 </div>
                 <div class="blog_card_item_btn_wrapper">
                     <NuxtLink no-prefetch :to="item.permalink" 
                               class="blog_card_item_btn">{{translates.DETAILED_OVERVIEW[config.LANG]}}
                     </NuxtLink>
                 </div>
             </div>
         </div>
         <div class="casino_table_btn_wrapper" v-if="posts.length > (numberPostOnQuery*postCurrentPage)" >
           <button class="btn_review" @click="postShowMore">{{translates.DOWNLOAD_MORE[config.LANG]}}</button>
         </div>
      </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_casino_loop",
        props: ['posts'],
        mixins: [translateMixin],
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
<style>
  .casino_table_btn_wrapper {
     display: flex;
     justify-content: center;
     padding-top:40px;
     padding-bottom: 30px;
    }
    .blog_card_wrapper {
        padding-top:25px;
        padding-bottom:25px;
    }
    .blog_card_item {
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;
    }
    .blog_card_item_left {
        width: 30%;
    }
    .blog_card_item_right {
       width: 70%;
    }
    .blog_card_item_img_wrapper {
        width: 320px;
        height: 190px;
    }
    .blog_card_item_img_wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .blog_card_item_permalink {
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 18px;
        line-height: 22px;
        text-decoration: none;
        color: var(--middle-black);
    }
    .blog_card_item_title {
        margin-bottom: 15px;
    }
    .blog_card_item_author {
        font-family: var(--font);
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 124%;
        text-decoration: none;
        color: var(--middle-black);
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    .blog_card_item_author span {
        color: var(--blue);
        display: inline-block;
        margin-right: 25px;
    }
    .blog_card_item_excerpt {
        height: 60px;
        overflow: hidden;
        font-family: var(--font);
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 175%;
    }
    .blog_card_item_btn {
        width: 201px;
        height: 46px;
        background: var(--green);
        border: 1px solid var(--white-opacity-max);
        box-sizing: border-box;
        box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        display: inline-block;
        text-align: center;
        font-family: var(--font);
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 46px;
        text-align: center;
        color: var(--white);
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        text-decoration: none;
        margin-top: 15px;
    }
     @media (min-width: 320px) and (max-width: 767px) {
         .blog_card_item {
             flex-wrap: wrap;
         }
         .blog_card_item_left {
             width: 100%;
         }
         .blog_card_item_right {
             margin-top: 20px;
             width: 100%;
         }
         .blog_card_item_img_wrapper {
             width: 100%;
         }
     }
</style>