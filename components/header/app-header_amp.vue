<template>
  <header>
    <div class="container header_container">
      <NuxtLink no-prefetch to="/" >
        <img :src="options.logo" 
             class="logo" 
             width="107" 
             height="34"
             >
      </NuxtLink>
      <div class="menu">
           <button class="btn header_btn">Казино Украины</button>
           <div class="dropdown_menu">
             <nav class="menu_box">
               <ul>
                 <li class="menu_box_item" 
                     v-for="(item, index) in options.menu_link" 
                     :key="index">
                    <NuxtLink no-prefetch :to="item.permalink" >
                        {{item.title}}
                    </NuxtLink>
                 </li>
               </ul>
             </nav>
           </div>
      </div>
    </div>
  </header>
</template>
<script>
    export default {
        name: "app-header_amp",
        data(){
            return {
                options: {}
            }
        },
        async mounted(){
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options
        }
    }
</script>

<style>
    header{
      position: absolute;
      top:0px;
      left:0px;
      width: 100%;
      box-sizing: border-box;
    }
  .header_container {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .header_btn {
    font-family: var(--font);
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 40px;
    box-sizing: border-box;
    background: transparent;
    border: none;
    border-radius: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 200px;
    color: var(--white);
    text-decoration: none;
    box-sizing: border-box;
    transition: 0.7s;
    cursor: pointer;
  }
  
  .menu {
      position: relative;
      padding-bottom: 25px;
    }
    .menu:hover .header_btn {
      background: var(--white-opacity-max);
      border-radius: 40px;
    }
    .menu:hover .dropdown_menu {
        display: block;
    }
    .dropdown_menu:hover {
      display: block;
    }
    .menu_box {
       height: 430px;
       overflow-y: scroll;
    } 
    .menu_box_item {
      padding: 5px 25px;
    }
    .menu_box_item a {
      text-decoration: none;
      font-family: var(--font);
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: var(--light-black);
    }
    .menu_box_item:hover {
      background: var(--gray);
    }
    .menu_box_item:hover a {
      color: #005C98;
    }
    .dropdown_menu {
      padding: 20px 10px 20px 0px;
      display: none;
      position: absolute;
      bottom:-450px;
      left:-10px;
      height: 470px;
      width: 220px;
      overflow:hidden;
      background: var(--white-opacity);
      border: 1px solid var(--gray);
      box-sizing: border-box;
      box-shadow: 0px 2px 10px rgba(77, 92, 129, 0.25);
      border-radius: 8px;
    }
    ::-webkit-scrollbar {
      width:2px;
    }
    ::-webkit-scrollbar-thumb {
      border-width:1px 1px 1px 2px;
      border-color:#777;
      background-color:#9FA7B4;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color:#9FA7B4;
    }
    ::-webkit-scrollbar-track-piece {
       background-color:#2a3950
    }
    @media (min-width: 320px) and (max-width: 767px) {
      .menu {
        transform: translateX(10px);
      } 
      .dropdown_menu {
        left:-20px;
      }
    }
</style>