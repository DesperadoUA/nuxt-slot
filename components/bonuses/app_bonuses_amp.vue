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
           <meta itemprop="eventStatus" content="https://schema.org/EventScheduled">
           <meta itemprop="eventAttendanceMode" content="https://schema.org/OnlineEventAttendanceMode">
           <span itemprop="organizer" itemscope="" itemtype="https://schema.org/Organization">
             <meta itemprop="name" content="onlinecasino.kyiv.ua">
		         <meta itemprop="url" content="onlinecasino.kyiv.ua">
           </span>
           <span itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
              <meta itemprop="Price" content="0">
              <meta itemprop="priceCurrency" content="грн/долл.">
              <meta itemprop="url" :content="item.site">
              <link itemprop="availability" href="https://schema.org/InStock">
              <meta itemprop="validFrom" content="2021-08-10 08:00:00+03:00">
            </span>
         </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_bonuses_loop_amp",
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