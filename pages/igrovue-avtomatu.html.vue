<template>
  <section>
    <div class="container">
      <h1>{{h1}}</h1>
      <ul>
        <li v-for="item in comments">{{item.name}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "igrovue-avtomatu.html",
        data(){
            return {
                h1: 'Полный список онлайн казино с игровыми автоматами для игроков из Украины',
                comments: []
            }
        },
        async asyncData(){
            const result = await axios.get('https://jsonplaceholder.typicode.com/comments')
            const comments = result.data
            return {comments}
        },
        head() {
            return {
                title: 'Test title for avtomats',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Test description for avtomats'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>