<template>
  <div>
    <h1>Main page</h1>
    <ul>
      <li v-for="item in users">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: "main-page",
    data: () => {
        return {
            users:[]
        }
    },
    async asyncData(){
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = result.data
        return {users}
    },
    head() {
        return {
            title: 'Test title for main page',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Test description for main page'
                }
            ]
        }
    }
}
</script>

<style>

</style>
