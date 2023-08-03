<template>
  <section class="breadcrumb_wrapper">
      <div class="container">
          <ul class="breadcrumb_list" itemscope="" itemtype="https://schema.org/BreadcrumbList">
              <li class="breadcrumb_item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                  <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}/`" 
                            itemtype="https://schema.org/Thing"
                            itemscope=""
                            itemprop="item"
                            id="homePage"
                  ><span itemprop="name">{{translates.ONLINE_CASINO_IN_UKRAINE[config.LANG]}}</span></NuxtLink> /
                  <meta itemprop="position" content="1">
              </li>
              <li class="breadcrumb_item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                  <span itemtype="https://schema.org/Thing"
                        itemscope=""
                        itemprop="item"
                        id="single"
                        >
                           <span itemprop="name">{{value}}</span>
                  </span>
                  <meta itemprop="position" content="2">
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_breadcrumb_amp",
        props: ['value'],
        mixins: [translateMixin]
    }
</script>