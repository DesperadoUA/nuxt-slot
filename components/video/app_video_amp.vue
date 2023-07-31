<template>
  <section class="video-wrapper" v-if='video_src !== ""'>
            <div class="container">
                <div class="video_bunner" v-if='status === "off"'>
                    <img :src="banner_src" 
                         loading="lazy"
                         @click="initialVideo"/>
                </div>
                <div class="video_frame" v-else>
                    <iframe width="744" height="419" 
                            :src="video_src" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
  </section>
</template>

<script>
    export default {
        name: "app_video_amp",
        props:['banner_src', 'video_src'],
        data() {
            return {
                status: 'off'
            }
        },
        methods: {
            initialVideo(){
                this.status = 'on'
            }
        }
    }
</script>