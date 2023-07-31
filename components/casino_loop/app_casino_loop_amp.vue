<template>
  <section class="content casino_table_wrapper">
      <div class="container">
          <div class="casino_item" v-for="item in currentPosts" :key="item.id">
              <div class="casino_item_thumbnail">
                  <a :href="getRef(item)">
                    <amp-img :src="item.thumbnail" width="200" height="100"></amp-img>
                  </a>
                  <amp-img :src="item.marker" class="casino_item_marker" width="38" height="38"></amp-img>
                  <div class="casino_item_licensed" v-if="item.licensed.length !== 0">
                      <amp-img :src="licensed" v-for="licensed in item.licensed" :key="licensed" width="45" height="45"
                       ></amp-img>
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
                    <a class="btn_ref" :href="getRef(item)">Перейти</a>
                    <NuxtLink class="btn_review" no-prefetch :to="item.permalink" >Обзор</NuxtLink>
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
import {getRef} from '~/utils/'
    export default {
        name: "app_casino_loop_amp",
        props: ['posts'],
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
            getRef(item) {
                return getRef(item)
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>
<style>
.casino_table_wrapper {
    border: 1px solid red;
}
</style>