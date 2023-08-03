<template>
  <section class="breadcrumb_wrapper">
      <div class="container">
          <ul class="breadcrumb_list" itemscope="" itemtype="https://schema.org/BreadcrumbList">
              <li class="breadcrumb_item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                  <NuxtLink no-prefetch to="/" 
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
        name: "app_breadcrumb",
        props: ['value'],
        mixins: [translateMixin]
    }
</script>
<style> 
    .breadcrumb_wrapper {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .breadcrumb_item {
        display: inline-block;
        font-family: var(--font-semi);
        font-style: normal;
        font-size: 14px;
        text-transform: uppercase;
    }
    .breadcrumb_item a {
        color: var(--blue);
        text-decoration: none;
    }
</style>