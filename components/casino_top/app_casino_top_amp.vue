<template>
  <section class="casino_top">
      <div class="container">
          <div class="casino_top_wrapper">
              <div class="casino_top_left">
                 <div class="casino_top_thumbnail">
                     <img :src="value.thumbnail" 
                     loading="lazy"
                     class="casino_top_img" 
                     width="200" 
                     height="100"/>
                 </div>
                 <div class="casino_top_title">
                     {{value.title}}
                 </div>
                 <div class="casino_top_sub_title">
                     {{value.sub_title}}
                 </div>
                 <div class="casino_item_rating_wrapper casino_top_rating">
                        <div class="casino_item_rating_container">
                            <div class="casino_item_rating_box">
                                <div class="casino_item_rating_empty"></div>
                                <div class="casino_item_rating_full" v-bind:style="{ width: value.rating+'%'}"></div>
                            </div>
                            <div>
                                <span class="casino_item_ratin_value">{{value.rating | rating}}</span>/10
                            </div>
                        </div>
                 </div>
                 <div class="casino_item_buttons_box casino_top_btn_wrapper">
                    <button class="btn_ref" @click="refActivate(value.ref)" >Перейти</button>
                 </div>
              </div>
              <div class="casino_top_right">
                  <div class="casino_top_bonuses" v-if="value.bonuses.length !== 0">
                      <div class="casino_top_bonus_item" v-for="bonus in value.bonuses" :key="bonus.id">
                          <div class="casino_top_bonus_item_title">
                              {{bonus.bonuses_title}}
                          </div>
                          <div class="casino_top_bonus_item_value">
                              {{bonus.bonuses_value}}
                          </div>
                          <div class="casino_top_bonus_item_sub_title">
                              {{bonus.bonuses_sub_title}}
                          </div>
                      </div>
                  </div>
                  <div class="casino_top_currency casino_top_desc_row" v-if="value.currency.length !== 0">
                        <div class="casino_top_desc">Принимает игроков:</div>
                        <div class="casino_top_desc_value">
                            <div class="casino_top_currency_item"  
                                v-for="(item, index) in value.currency" 
                                :key="index"> 
                                <img :src="item" width="30" height="30" />
                            </div>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.valuta !== ''">
                        <div class="casino_top_desc">Валюты:</div>
                        <div class="casino_top_desc_value">
                           {{value.valuta}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_payments.length !== 0">
                        <div class="casino_top_desc">Методы оплаты:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list">
                               <li v-for="(item, index) in value.relative_payments" 
                                :key="index" >
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                                </li>
                           </ul>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_pay_out.length !== 0">
                        <div class="casino_top_desc">Методы выплат:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list ">
                               <li v-for="(item, index) in value.relative_pay_out" 
                                :key="index" class="green" >
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                                </li>
                           </ul>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.min_deposit !== ''">
                        <div class="casino_top_desc">Минимальный депозит:</div>
                        <div class="casino_top_desc_value">
                           {{value.min_deposit}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.min_payout !== ''">
                        <div class="casino_top_desc">Минимальная выплата:</div>
                        <div class="casino_top_desc_value">
                           {{value.min_payout}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_vendors.length !== 0">
                        <div class="casino_top_desc">Платформы:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list">
                               <li v-for="(item, index) in value.relative_vendors" 
                                :key="index" >
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                                </li>
                           </ul>
                        </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_top_amp",
        props: ['value'],
        data(){
            return {
                
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            }
        },
        methods: {
            refActivate(ref) {
               if(ref.length !== 0) {
                    const min = 0
                    const max = ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(ref[random].casino_ref, '_blank')
                } 
            }
        }
    }
</script>