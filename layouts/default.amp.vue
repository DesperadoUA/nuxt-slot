<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
    export default {
        name: "app_main_amp",
        middleware: ['getHeaders'],
    }
</script>
