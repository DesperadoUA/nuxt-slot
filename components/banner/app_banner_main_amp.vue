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
        name: "app_banner_amp",
        mixins: [translateMixin],
    }
</script>