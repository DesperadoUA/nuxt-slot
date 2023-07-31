<template>
  <section class="slick_button">
      <div class="slick_button_part_left" @click="goHome()"></div>
      <div class="slick_button_part_right" @click="refActivate()"></div>
      <div class="container slick_button_container">
        <div class="slick_button_left">
            <img src='/img/arrow.png' class="slick_button_arrow left_arrow" loading="lazy" width="8" height='12'>
            <NuxtLink no-prefetch :to="'/'" >
                        {{title_1}}
            </NuxtLink>
        </div>
        <div class="slick_button_right">
                        {{title_2}}
            <img src='/img/arrow.png' class="slick_button_arrow right_arrow" loading="lazy" width="8" height='12'>
        </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_slick_button_amp",
        props:['referal'],
        data() {
            return {
               title_1: 'Выбрать казино',
               title_2: 'Перейти'
            }
        },
        filters: {
            refValidate(value) {
               return value === '' ? '/' : value 
            }
        },
        methods: {
            refActivate() {
                if(this.referal.length !== 0) {
                    const min = 0
                    const max = this.referal.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(this.referal[random].casino_ref, '_blank')
                } 
            },
            goHome() {
                this.$router.push('/')
            }
        }

    }
</script>