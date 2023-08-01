<template>
  <section class="main_banner">
            <div class="container banner_container">
                <p class="banner_title">{{translates.MAIN_BANNER_TEXT[config.LANG]}}</p>
            </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_banner",
        mixins: [translateMixin],
    }
</script>

<style>
    .main_banner {
        background-size: cover;
        height: 430px;
    }
    .main_banner .banner_container {
        text-align: center;
        padding-bottom: 130px;
        padding-top: 150px;
        max-width: 850px;
    }
    .banner_title {
      font-family: var(--font-bold);
      font-style: normal;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
      color: var(--white);
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }
    @media (min-width: 767px) {
        .main_banner {
            background: var(--banner);
            background-size: cover;
        }
    }
     @media (min-width: 320px) and (max-width: 767px) {
         .main_banner {
            background: var(--mob_banner);
            background-size: cover;
            height:460px;
        }
         .banner_title {
            min-height: 350px;
        }
        .main_banner .banner_container {
            max-width: 100%;
        }
        .banner_title {
            font-size: 30px;
            line-height: 35px;
        }
    }
</style>