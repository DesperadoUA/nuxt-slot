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
                    <amp-img :src="item_step.how_to_step_item_thumbnail" class="how_to_item_thumbnail"
                    itemprop="image" width="340" height="340" 
                    ></amp-img>
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
        name: "app_how_to_amp",
        props: ['value'],
        mixins: [translateMixin],
    }
</script>