<template>
  <section class="casino_top">
      <div class="container">
          <div class="casino_top_wrapper">
              <div class="casino_top_left">
                 <div class="casino_top_thumbnail">
                     <amp-img :src="value.thumbnail" 
                     class="casino_top_img" 
                     width="200" 
                     height="100" ></amp-img>
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
                    <a class="btn_ref" :href="getRef(value)" >{{translates.GO_TO[config.LANG]}}</a>
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
                        <div class="casino_top_desc">{{translates.ACCEPTS_PLAYERS[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                            <div class="casino_top_currency_item"  
                                v-for="(item, index) in value.currency" 
                                :key="index"> 
                                <amp-img :src="item" width="30" height="30" ></amp-img>
                            </div>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.valuta !== ''">
                        <div class="casino_top_desc">{{translates.CURRENCIES[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           {{value.valuta}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_payments.length !== 0">
                        <div class="casino_top_desc">{{translates.PAYMENT_METHODS[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list">
                               <li v-for="(item, index) in value.relative_payments" 
                                :key="index" >
                                <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" v-html="item.title"></NuxtLink>
                                </li>
                           </ul>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_pay_out.length !== 0">
                        <div class="casino_top_desc">{{translates.PAYMENT_OUT_METHODS[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list ">
                               <li v-for="(item, index) in value.relative_pay_out" 
                                :key="index" class="green" >
                                <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" v-html="item.title"></NuxtLink>
                                </li>
                           </ul>
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.min_deposit !== ''">
                        <div class="casino_top_desc">{{translates.MINIMUM_DEPOSIT[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           {{value.min_deposit}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.min_payout !== ''">
                        <div class="casino_top_desc">{{translates.MINIMUM_PAYMENT[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           {{value.min_payout}}
                        </div>
                  </div>
                  <div class="casino_top_desc_row" v-if="value.relative_vendors.length !== 0">
                        <div class="casino_top_desc">{{translates.PLATFORMS[config.LANG]}}:</div>
                        <div class="casino_top_desc_value">
                           <ul class="casino_top_list">
                               <li v-for="(item, index) in value.relative_vendors" 
                                :key="index" >
                                <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" v-html="item.title"></NuxtLink>
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
import translateMixin from '~/mixins/translate.js'
import getRef from '~/mixins/getRef.js'
   export default {
        name: "app_casino_top_amp",
        props: ['value'],
        mixins: [translateMixin, getRef],
        data(){
            return {
                
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            }
        }
    }
</script>