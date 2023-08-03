<template>
  <section class="video-wrapper" v-if='video_src !== ""'>
            <div class="container">
                <div class="video_frame">
                    <amp-youtube :data-videoid="video_src.replace('https://www.youtube.com/embed/', '')" layout="responsive" width="480" height="270">
                        <div fallback>
                            <p>Failed to load the video</p>
                        </div>
                    </amp-youtube>
                </div>
            </div>
  </section>
</template>

<script>
    export default {
        name: "app_video_amp",
        props:['video_src'],
    }
</script>