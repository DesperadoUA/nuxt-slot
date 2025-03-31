<template>

</template>
<script>
import { GUARD_COOKIE_STORAGE_KEY } from '@/constants.js'
export default {
    name: 'cookies-page_amp',
    layout: 'cookies',
    mounted() {
        let params = new URLSearchParams(document.location.search);
        let url = params.get("url");
        document.cookie = `${GUARD_COOKIE_STORAGE_KEY}`
        location.href = url
    }
}
</script>
