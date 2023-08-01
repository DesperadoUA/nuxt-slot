<template>
  <section class="content casino_table_wrapper">
      <div class="container">
          <div class="casino_item" v-for="item in currentPosts" :key="item.id">
              <div class="casino_item_thumbnail">
                  <img :src="item.thumbnail" loading="lazy" width="200" height="100" @click="refActivate(item)" />
                  <img :src="item.marker" class="casino_item_marker" width="38" height="38" />
                  <div class="casino_item_licensed" v-if="item.licensed.length !== 0">
                      <img :src="licensed" v-for="licensed in item.licensed" :key="licensed"
                      loading="lazy" width="45" height="45"
                       />
                  </div>
              </div>
              <div class="casino_item_rating casino_item_column ">
                  <div>
                    <div class="casino_item_title">{{item.title}}</div>
                    <div class="casino_item_subtitle">{{item.sub_title}}</div>
                    <div class="casino_item_rating_wrapper">
                        <div class="casino_item_rating_container">
                            <div class="casino_item_rating_box">
                                <div class="casino_item_rating_empty"></div>
                                <div class="casino_item_rating_full" v-bind:style="{ width: item.rating+'%'}"></div>
                            </div>
                            <div>
                                <span class="casino_item_ratin_value">{{item.rating | rating}}</span>/10
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="casino_item_packet casino_item_column ">
                  <div v-if="item.bonuses.length != 0" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[0].bonuses_title}}</div>
                    <div class="casino_item_sub_title_packet">{{item.bonuses[0].bonuses_value}}</div>
                    <div class="casino_item_title_packet">{{item.bonuses[0].bonuses_sub_title}}</div>
                  </div>
              </div>
              <div class="casino_item_weiger casino_item_column ">
                  <div v-if="item.bonuses.length >= 2" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[1].bonuses_title}}</div>
                    <div class="casino_item_sub_title_packet">{{item.bonuses[1].bonuses_value}}</div>
                    <div class="casino_item_title_packet">{{item.bonuses[1].bonuses_sub_title}}</div>
                  </div>
              </div>
              <div class="casino_item_buttons casino_item_column ">
                  <div class="casino_item_buttons_box">
                    <button class="btn_ref" @click="refActivate(item)">{{translates.GO_TO[config.LANG]}}</button>
                    <NuxtLink class="btn_review" no-prefetch :to="item.permalink" >{{translates.REVIEW[config.LANG]}}</NuxtLink>
                  </div>
              </div>
          </div>  
          <div class="casino_table_btn_wrapper" v-if="posts.length > (numberPostOnQuery*postCurrentPage)">
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
                numberPostOnQuery: 20,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
               return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            }
        },
        methods: {
            refActivate(item) {
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                } 
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style scoped>

.casino_item_licensed {
    position: absolute;
    right: 0px;
    bottom: 0px;
}
.content .casino_item_licensed img {
    margin: 0px 5px;
}
.btn_ref {
    width: 180px;
    height: 46px;
    background: var(--green);
    border: 1px solid var(--white-opacity-max);
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    line-height: 46px;
    margin-bottom: 15px;
    cursor: pointer;
}

.casino_item_ratin_value {
    font-family: var(--font-bold);
    font-style: normal;
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
 .casino_table_wrapper {
     padding: 30px 0px;
     background: var(--blue-gradient);
 }
 .casino_item {
     background: var(--white);
     border: 1px solid var(--gray);
     box-sizing: border-box;
     box-shadow: 0px 2px 10px rgba(77, 92, 129, 0.25);
     border-radius: 15px;
     margin-top: 10px;
     margin-bottom: 10px;
     display: flex;
 }

 .casino_item_thumbnail {
     position: relative;
     width: 23%;
     text-align: center;
    border-right:1px solid #E5E5E5;
    box-sizing: border-box;
    cursor: pointer;
 }
 .casino_item_marker {
     position:absolute;
     top:-17px;
     left:3px;
 }
 .casino_item_rating {
     width:20%;
     box-sizing: border-box;
     min-width: 20%;
 }
 .casino_item_packet {
     width: 21%;
      min-width: 21%;
     box-sizing: border-box;
 }
 .casino_item_packet_item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 222px;
    min-height: 112px;
    box-sizing: border-box;
    background: var(--white);
    box-sizing: border-box;
    
 }
 .casino_item_weiger {
     width: 21%;
      min-width: 21%;
     box-sizing: border-box;
 }
 .casino_item_buttons {
     width: 15%;
 }
 .casino_item_buttons_box {
     display: flex;
     justify-content: flex-end;
     flex-wrap: wrap;
 }
 .casino_item_column {
     padding: 15px 25px;
     display: flex;
     align-items: center;
     flex-wrap: wrap;
 }
 .casino_item_title {
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    color: var(--middle-black);
    width: 100%;
    margin-bottom: 10px;
 }
.casino_item_title_packet
 {
    width: 100%;
    font-family: var(--font-semi);
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--light-black);
    text-align: center;
 }
 .casino_item_subtitle, .casino_item_sub_title_packet {
     width: 100%;
     font-family: var(--font);
    font-style: light;
 }
 .casino_item_sub_title_packet {
     text-transform: uppercase;
      font-weight: bold;
      text-align: center;
 }
 .casino_item_rating_wrapper {
    margin-top: 10px;
    width: 203px;
    height: 35px;
    background:var(--middle-gray);
    border-radius: 18.5px;
 }
 .casino_item_thumbnail img {
          margin-top: 20px;
         margin-bottom: 20px;
     }
 @media (min-width: 320px) and (max-width: 767px) {
     .casino_item_packet_item {
         width: 90%;
     }
     .btn_ref {
         max-width: 50%;
         margin-bottom: 0px;
     }
     .casino_item {
         flex-wrap: wrap;
     }
     .casino_item_thumbnail {
         width: 100%;
         text-align: center;
     }
     .casino_item_column {
         width: 100%;
         justify-content: center;
         text-align: center;
         padding: 10px 10px;
     }
     .casino_item_buttons_box {
         justify-content: space-between;
         width: 100%;
     }
     .casino_item_buttons  {
        padding: 3px;
     }
     .casino_item_buttons_box a {
         width: 50%;
         margin-bottom: 0px;
     }
     .casino_item_buttons_box .btn_ref {
         border-top-right-radius: 0px;
         border-bottom-right-radius: 0px;
         border-right: 1px solid var(--white);
     }
     .casino_item_buttons_box .btn_review {
         border-top-left-radius: 0px;
         border-bottom-left-radius: 0px;
         border-left: 1px solid var(--white);
     }
 }
</style>