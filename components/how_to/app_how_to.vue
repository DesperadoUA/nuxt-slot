<template>
  <section class="how_to_wrapper" v-if="value.length !== 0" >
      <div class="container content">
         <div class="how_to_item" v-for="(item, i) in value" :key="i" itemscope itemtype="https://schema.org/HowTo">
             <h2 v-html="item.how_to_step_title" itemprop="name"></h2>
             <div v-html="item.how_to_step_description" itemprop="description"></div>
             <p>{{translates.REQUIRED_TIME[config.LANG]}}: <span itemprop="totalTime" 
                :content="item.how_to_step_time_cod" :data-content="item.how_to_step_time_cod">
                {{item.how_to_step_time_front}}
                </span>
            </p>
           <div class="how_to_item_cover">
             <h2>{{translates.YOU_WILL_NEED[config.LANG]}}:</h2>
             <ul v-if="item.how_to_step_tools.length !== 0">
                 <li v-for="(item_tools, j) in item.how_to_step_tools" :key="j" 
                  itemprop="tool" itemscope itemtype="https://schema.org/HowToTool"
                 >
                     <a :href="item_tools.how_to_step_tools_url" itemprop="url">
                         <span itemprop="name">{{item_tools.how_to_step_tools_name}}</span>
                     </a>
                 </li>
             </ul>
           </div>
           <div class="how_to_item_cover">
             <h2>{{translates.REFERENCE_INFORMATION[config.LANG]}}:</h2>
             <ul v-if="item.how_to_step_links.length !== 0">
                 <li v-for="(item_links, m) in item.how_to_step_links" :key="m" 
                 itemprop="supply" itemscope itemtype="http://schema.org/HowToSupply"
                 >
                     <a :href="item_links.how_to_step_links_url" itemprop="url">
                         <span itemprop="name">{{item_links.how_to_step_links_name}}</span>
                     </a>
                 </li>
             </ul>
           </div>
             <div class="how_to_item_wrapper" v-for="(item_step, z) in item.how_to_step_item" 
                  :key="z"
                  itemprop="step" itemscope itemtype="https://schema.org/HowToStep"
                  >
                <div class="how_to_item_left">
                    <img :src="item_step.how_to_step_item_thumbnail" class="how_to_item_thumbnail"
                    itemprop="image" loading="lazy" 
                    >
                </div>
                <div class="how_to_item_right">
                    <h3 v-html="item_step.how_to_step_item_title" itemprop="name"></h3>
                    <div v-html="item_step.how_to_step_item_description"  itemprop="text"></div>
                </div>
             </div>
         </div>
      </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_how_to",
        props: ['value'],
        mixins: [translateMixin],
    }
</script>
<style>
 .how_to_item_wrapper {
     padding: 20px 0px;
 }
 .how_to_item_wrapper {
     display: flex;
   border: 1px solid var(--blue);
   border-radius: 4px;
   margin-bottom: 20px;
   background: var(--blue-gradient);
 } 
 .how_to_item_left {
    margin: 0px;
    padding: 0px 15px;
    font-family: var(--font-regular);
    width: 30%;
 }
 .how_to_item_right {
    margin: 0px;
    padding: 20px;
    font-family: var(--font-regular);
    width: 70%;
 }
 .how_to_item_right h3 {
   text-align: left;
 }
 .how_to_item_cover {
   border: 1px solid var(--blue);
   border-radius: 4px;
   margin-bottom: 20px;
   padding: 15px;
   background: var(--blue-gradient);
 }
 .how_to_item_cover h2 {
   text-align: left;
 }

 @media (min-width: 320px) and (max-width: 767px) {
     .how_to_item_left, .how_to_item_right {
         width: 100%;
     }
     .how_to_item_left {
         text-align: center;
     }
    .how_to_item_wrapper {
        flex-wrap: wrap;
    }
  }
</style>