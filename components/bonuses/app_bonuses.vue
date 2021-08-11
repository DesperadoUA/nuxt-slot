<template>
  <section class="bonus_card_wrapper" v-if="value.length !== 0" >
      <div class="container">
         <div class="bonus_card_ttl">Бонусы казино</div>
         <div class="bonus_item" v-for="(item, i) in value" :key="i" itemscope itemtype="http://schema.org/Event">
             <div class="bonus_item_thumbnail">
                  <img
                       itemprop="image"
                       :src="item.thumbnail" 
                       loading="lazy" width="200" height="100" 
                  />
              </div>
              <div class="bonus_item_action">
                  <div class="bonus_item_ttl" v-html="item.title" itemprop="name"></div>
                  <div class="bonus_item_time">
                      с <span itemprop="startDate" :datetime="item.start">{{item.start}}</span> до 
                      <span itemprop="endDate" :datetime="item.end">{{item.end}}</span>
                  </div>
                  <div class="bonus_item_button_wrapper">
                      <button class="bonus_item_button" @click="refActivate(item)">Получить</button>
                      <button 
                      class="bonus_item_button"
                        @click="activate(item)"  
                      >
                          Описание
                          <span :class="{event_close: true, rotate_arrow: item.status === 'open'}" ></span>
                      </button>
                  </div>
              </div>
              <div class="bonus_item_author" itemprop="performer" itemscope itemtype="http://schema.org/Person">
                  <span itemprop="name">Автор: {{item.name}}</span>
              </div>
              <div :class="{bonus_item_description: true, show: item.status === 'open'}">
                  <p v-html="item.description" itemprop="description"></p>
              </div>
              <div style="display:none" itemprop="location" itemscope itemtype="http://schema.org/VirtualLocation" >
	              Сайт: <span itemprop="url">{{item.site}}</span>
	          </div>
         </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_bonuses_loop",
        props: ['value'],
        methods: {
            refActivate(item) {
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                } 
            },
            activate(item) {
                item.status === 'close' ? item.status = 'open' : item.status = 'close'
            }
        }
    }
</script>
<style>
 .event_close {
     width: 12px;
    height: 6px;
    position: absolute;
    background: var(--faq_close);
    top: 20px;
    right: 15px;
    transition: 0.7s;
 }
 .rotate_arrow {
     transform: rotate(90deg);
 }
  .bonus_card_ttl {
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    color: var(--middle-black);
    margin-bottom: 20px;
  }
  .bonus_item {
     background: var(--white);
     border: 1px solid var(--gray);
     box-sizing: border-box;
     box-shadow: 0px 2px 10px rgba(77, 92, 129, 0.25);
     border-radius: 15px;
     margin-top: 10px;
     margin-bottom: 10px;
     display: flex;
     flex-wrap: wrap;
  }
  .bonus_item_thumbnail {
     position: relative;
     width: 23%;
     align-items: center;
     justify-content: center;
     display: flex;
     border-right:1px solid #E5E5E5;
     box-sizing: border-box;
     cursor: pointer;
  }
  .bonus_item_action {
        width: 63%;
        padding: 10px 35px;
        box-sizing: border-box;
  }
  .bonus_item_ttl {
      font-family: var(--font-bold);
      font-size: 22px;
      margin-bottom: 5px;
  }
  .bonus_item_time {
       font-family: var(--font-semi);
      font-size: 15px;
      margin-bottom: 5px;
  }
  .bonus_item_author {
      width: 14%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 10px 15px;
      box-sizing: border-box;
      font-family: var(--font-semi);
      font-size: 15px;
  }
 .bonus_card_wrapper {
     padding: 20px 0px;
 }
 .bonus_item_button {
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      width: 250px;
      height: 46px;
      font-family: var(--font-semi);
      font-size: 15px;
      cursor: pointer;
      position: relative;
 }
 .bonus_item_button:nth-child(1) {
     color: var(--white);
     background: var(--green);
     margin-right: 15px;
 } 
 .bonus_item_button:nth-child(2) {
     border: 1px solid var(--gray);
 }
 .bonus_item_button_wrapper {
     padding-top: 10px;
 }
 .bonus_item_description {
     background: var(--light-blue);
     padding: 24px;
     border: 1px solid #D6DEEA;
     box-sizing: border-box;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
     font-family: var(--font);
     display: none;
     width: 100%;
 }
 .show {
     display: block;
 }
 @media (min-width: 320px) and (max-width: 767px) {
     .bonus_item_ttl, .bonus_item_time {
         text-align: center;
     } 
     .bonus_item_thumbnail, .bonus_item_action, .bonus_item_author {
         width: 100%;
     }
     .bonus_item_action {
         padding: 10px;
     }
     .bonus_item_button {
         width: 48%;
     }
      .bonus_item_button:nth-child(1){
          margin-right: 0px;
      }
      .bonus_item_button_wrapper {
          display: flex;
          justify-content: space-between;
      }
 }
</style>