<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  name: "app_cookies",
  mounted() {
    const params = new URLSearchParams(document.location.search)
    const cookie = params.get("cookie")
    const url = params.get("url")
    console.log(cookie, url)
  }
}
</script>
