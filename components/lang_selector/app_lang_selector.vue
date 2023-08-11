<template>
  <div class="lang_selector" v-if="posts.length">
    <div class="lang_selector_ttl" 
         :class="{open: open}" 
         @click="activate"
         v-html="title"
    ></div>
    <div class="lang_selector_wrapper"
        :class="{open: open}" 
    >
        <div class="lang_selector_item" 
        v-for="(item, index) in posts"
                  :key="index"
        >
        <a  :href="item.link" >
            {{item.title}}
        </a>
        </div>
    </div>
  </div>
</template>

<script>
import config from '~/config'
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_lang_selector",
        mixins: [translateMixin],
        props: ['posts'],
        data(){
            return {
                title: '',
                open: false,
                title: ''
            }
        },
         methods: {
            activate() {
                this.open = !this.open 
            }
        },
        mounted(){
            const adapterLang = {
                RU: 'ru',
                UA: 'uk'
            }
            this.title = config.LANG_TITLES[config.LANG][adapterLang[config.LANG]]
        }
    }
</script>

<style>
   .lang_selector {
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: var(--white);
        text-transform: uppercase;
        text-decoration: none;
        font-family: 'Open Sans Semi';
        position: relative;
        padding: 9px 16px;
        width: 315px;
        box-sizing: border-box;
        background: #333866;
        border-radius: 10px;
   }
   .lang_selector_item {
        background: #333866;
        padding: 9px 0px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
   }
   .lang_selector_item:last-child {
        border-bottom: none;
   }
    .lang_selector_item a {
        color: var(--white);
        text-decoration: none;
    }
   .lang_selector_wrapper {
        position: absolute;
        background: #333866;
        top:42px;
        left: 0px;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        display: none;
   }
   .lang_selector_ttl {
        cursor: pointer;
        padding-right: 50px;
   }
   .lang_selector_ttl::after {
        content: "";
        width: 24px;
        height: 24px;
        position: absolute;
        background: var(--white_arrow);
        top: 8px;
        right: 12px;
        transition: 0.7s;
   }
   .lang_selector_ttl.open::after {
        transform: rotate(180deg);
   }
   .lang_selector_wrapper.open {
    display: block;
   }
</style>