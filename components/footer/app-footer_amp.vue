<template>
  <footer v-if="changeOptions !== null">
    <nav class="footer_menu" v-if="options.footer_menu.length !== 0">
      <div class="container">
        <ul>
          <li class="footer_menu_item" 
              v-for="(item, index) in options.footer_menu" 
                    :key="index">
                      <NuxtLink no-prefetch :to="item.permalink" >
                          {{item.title}}
                      </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="footer_partners">
      <div class="container footer_partners_wrapper">
        <div class="footer_partners_left">
           <a href="//www.dmca.com/Protection/Status.aspx?ID=0254cf77-c76d-4013-b771-c48ab480360e" 
                title="DMCA.com Protection Status" class="dmca-badge"> 
                <img src="https://media.onlinecasino.kyiv.ua/wp-content/uploads/2021/04/dmca_40px.png?ID=0254cf77-c76d-4013-b771-c48ab480360e"  
                alt="DMCA.com Protection Status" 
                loading="lazy" />
          </a>
          <a v-for="(item, index) in options.partners" 
             :key="index" 
             :href="item.partners_link" 
             target="_blank"
             class='partners_link'
             >
            <img loading="lazy"
                 :src='item.partners_img'            
             />
          </a>
        </div>
        <div class="footer_partners_right">
           <a v-for="(item, index) in options.social" 
             :key="index" 
             :href="item.social_link" 
             target="_blank"
             class='partners_link social_link'
             >
            <img loading="lazy"
                 :src='item.social_img'            
             />
          </a>
        </div>
      </div>
    </div>
    <div class="container footer_container">
      <div class="footer_text">
        {{options.footer_text}}
        <img v-if="options.security_logo" 
             :src="options.security_logo"  
             class="security_logo dmca-badge" 
             width="120" 
             height="25"
             loading="lazy"
             title="DMCA.com Protection Status"
             />
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "app-footer_amp",
        data(){
            return {
               options: null
            }
        },
        computed: {
          changeOptions(){
            this.options = this.$store.getters['options/getOptions']
            return this.options
          }
        }
    }
</script>