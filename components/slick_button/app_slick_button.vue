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
import {refActivate} from '~/utils/'
    export default {
        name: "app_slick_button",
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
                refActivate(this.referal)
            },
            goHome() {
                this.$router.push('/')
            }
        }

    }
</script>

<style>
.slick_button_part_left {
    width: 50%;
    height: 100%;
    position: absolute;
    top:0px;
    left:0px;
    z-index: 2;
}
.slick_button_part_right {
    width: 50%;
    height: 100%;
    position: absolute;
    top:0px;
    right:0px;
    z-index: 2;
}
    .slick_button {
        height: 70px;
        z-index: 10;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to right, var(--blue) 50%, var(--green) 50%);
        cursor: pointer;
    }
    .slick_button a, .slick_button {
        color: var(--white);
        text-decoration: none;
        font-family: var(--font);
        font-weight: bold;
    }
    .slick_button_container {
       display: flex;
       align-items: center;
       height: 100%;
    }
    .slick_button_left {
        width: 50%;
    }
    .slick_button_right {
        width: 50%;
        text-align: right;
        cursor: pointer;
    }
    .left_arrow {
        margin-right: 10px;
    }
    .right_arrow {
        margin-left: 10px;
        transform: rotate(180deg);
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .slick_button_part_left {
            width: 100%;
            height: 50%;
        }
        .slick_button_part_right {
            width: 100%;
            height: 50%;
            top: 50%;
        }
        .slick_button {
            box-sizing: border-box;
            background: transparent;
            height: 80px;
        }
        .slick_button_container {
            flex-wrap: wrap;
            max-width: 100%;
        }
        .slick_button_left, .slick_button_right {
            width: 100%;
            text-align: center;
        }
        .slick_button_left {
            background: var(--blue);
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .slick_button_right {
            background: var(--green);
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
