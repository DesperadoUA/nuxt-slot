<template>
  <section class="slick_button">
      <a class="slick_button_part_left" href='/amp/' ></a>
      <a class="slick_button_part_right" :href="getRef(referal)"></a>
      <div class="container slick_button_container">
        <div class="slick_button_left">
            <amp-img src='/img/arrow.png' class="slick_button_arrow left_arrow" width="8" height='12' />
            <NuxtLink no-prefetch to="/amp/" >{{translates.CHOOSE_CASINO[config.LANG]}}</NuxtLink>
        </div>
        <div class="slick_button_right">
            {{translates.GO_TO[config.LANG]}}
            <amp-img src='/img/arrow.png' class="slick_button_arrow right_arrow" width="8" height='12' />
        </div>
      </div>
  </section>
</template>

<script>
import {getRef} from '~/utils'
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_slick_button_amp",
        props:['referal'],
        mixins: [translateMixin],
        methods: {
            getRef(item) {
                return getRef(item);
            }
        }
    }
</script>