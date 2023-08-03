
<template>
  <section class="reviews" v-if="value.length !== 0"  
           itemprop="review" 
           itemscope itemtype="http://schema.org/Review">
           <div itemprop="itemReviewed" 
                itemscope 
                itemtype="https://schema.org/Organization">
			    <meta itemprop="name" :content="title"/>
		   </div>
      <div class="container">
          <div class="reviews_title" itemprop="name">{{translates.PLAYER_REVIEWS_ABOUT_THE_CASINO[config.LANG]}} {{title}}</div>
          <div class="review_item" v-for="(item, index) in currentReviews" :key="index">
              <div class="review_item_title">
                  <span itemprop = 'author'>{{item.review_name}}</span>
                  <span itemprop = 'datePublished'>{{item.review_date}}</span>
              </div>
              <div class="review_item_rating">
                    <div class="casino_item_rating_box">
                        <div class="casino_item_rating_empty"></div>
                        <div class="casino_item_rating_full" v-bind:style="{ width: item.review_rating+'%'}"></div>
                    </div>
                    <div class="revie_item_box_value">
                        <span class="casino_item_ratin_value">{{item.review_rating|rating}}</span>/10
                    </div>
              </div>
              <div class="review_item_desc" itemprop='reviewBody'>
                  {{item.review_text}}
              </div>
          </div>
          <div class="reviews_show_more" v-if="value.length > (numberReviewOnQuery*reviewCurrentPage)">
              <span class="review_btn_show" @click="reviewShowMore">{{translates.SHOW_MORE[config.LANG]}}</span>
          </div>
      </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_reviews_amp",
        props: ['value', 'title'],
        mixins: [translateMixin],
        data(){
            return {
                numberReviewOnQuery: 4,
                reviewCurrentPage: 1
            }
        },
        computed: {
            currentReviews() {
               return this.value.slice(0, this.numberReviewOnQuery * this.reviewCurrentPage)
            }
        },
        methods: {
            reviewShowMore(){
                this.reviewCurrentPage += 1
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            }
        }
    }
</script>