<template>
  <aside class="sidebar">
      <div class="sidebar_item">Автор обзора: <span>{{author}}</span></div>
      <div class="sidebar_item">Дата публикации: {{date | dateSlice}}</div>
  </aside>
</template>
<script>
    export default {
        name: "app_sidebar_amp",
        props: ['author', 'date'],
        data(){
            return {
                
            }
        },
        filters: {
            dateSlice(item) {
                return item.slice(0, 10)
            }
        }
    }
</script>