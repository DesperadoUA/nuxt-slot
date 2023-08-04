<template>
<div>
   <amp-script layout="container" src="/amp-script.js" class="sample">
  <button id="hello-url">Say hello!</button>
</amp-script>
</div>
</template>
<script>
export default {
    name: "test",
    amp: 'hybrid',
    ampLayout: 'default.amp',
    data: () => {
        return {
            data: {
            },
        }
    }
}
</script>