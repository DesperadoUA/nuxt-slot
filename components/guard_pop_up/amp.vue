<template>
      <div class="guard_wrapper" :data-url="url">
            <div class="guard_title">{{translates.GUARD_POP_UP_TITLE[config.LANG]}}</div>
            <div class="guard_actions">
              <NuxtLink :to="`/cookies?url=${url}`" class="btn guard_btn_yes">{{ translates.YES[config.LANG] }}</NuxtLink>
              <button class="btn guard_btn_no">{{ translates.NO[config.LANG] }}</button>
            </div>
      </div>
</template>
<script>
import translateMixin from '~/mixins/translate.js'
export default {
  name: 'guard_pop_up_amp',
  mixins: [translateMixin],
  data() {
    return {
      show: true
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    },
  }
}
</script>
