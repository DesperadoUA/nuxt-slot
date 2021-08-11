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
          <div class="reviews_title" itemprop="name">Отзывы игроков о казино {{title}}</div>
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
              <span class="review_btn_show" @click="reviewShowMore">Показать еще</span>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_reviews",
        props: ['value', 'title'],
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
<style> 
.casino_item_ratin_value {
    font-family: var(--font);
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    color: var(--middle-black);
}
.casino_item_rating_full {
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    background: var(--star_full);
}
.casino_item_rating_empty {
    height: 100%;
    width: 100%;
    background: var(--star_empty);
}
.casino_item_rating_container {
    display: flex;
    padding: 2px 10px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}
.casino_item_rating_box {
    width: 120px;
    height: 24px;
    position: relative;
}
    .review_btn_show {
        font-family: var(--font);
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 175%;
        color: var(--blue);
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .reviews_show_more {
        text-align: center;
        padding: 20px 0px;
        width: 915px;
    }
    .review_item_desc {
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 175%;
      color: var(--middle-black);
    }
   .review_item_rating {
       display: flex;
       width: 168px;
       justify-content: space-between;
       margin-bottom: 10px;
   }
   .revie_item_box_value {
       transform:translateY(-2px);
   }
   .review_item_title {
       display: flex;
       justify-content: space-between;
       margin-bottom: 15px;
   }
   .review_item_title span:nth-child(1) {
       font-family: var(--font);
       font-style: normal;
       font-weight: bold;
       font-size: 18px;
       color: var(--middle-black);
   }
   .review_item_title span:nth-child(2) {
       font-family: var(--font);
       font-weight: normal;
       font-size: 12px;
       color: var(--middle-black);
   }
   .review_item {
       width: 915px;
       background: var(--white-gradient);
       border: 1px solid var(--gray);
       box-sizing: border-box;
       box-shadow: 0px 2px 10px rgba(77, 92, 129, 0.25);
       border-radius: 15px;
       padding: 30px;
       margin-top: 10px;
       margin-bottom: 10px;
   }
   .reviews {
       padding: 25px 0px;
   }
   .reviews_title {
       font-family: var(--font);
       font-style: normal;
       font-weight: bold;
       font-size: 18px;
       line-height: 25px;
       color: var(--middle-black);
       margin-bottom: 25px;
   }
</style>