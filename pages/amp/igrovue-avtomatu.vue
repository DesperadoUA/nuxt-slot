<template>
<div>
  <app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
  <main>
      <app_banner_amp />
      <app_h1_amp :value="data.body.h1" />
      <app_casino_loop_amp :posts="data.body.casino" />
      <app_content_amp :value="data.body.amp_content" />
      <app_blog_card_amp :posts="data.body.blog" v-if="data.body.blog.length" />
  </main>
  <app_footer_amp :options="data.options" />
</div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import DAL_Options from '~/DAL/options'
    import app_h1_amp from '~/components/h1/app-h1_amp'
    import app_content_amp from '~/components/content/app-content_amp'
    import app_casino_loop_amp from '~/components/casino_loop/app_casino_loop_amp'
    import app_banner_amp from '~/components/banner/app_banner_main_amp'
    import app_blog_card_amp from '~/components/blog_card/app_blog_card_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import config from '~/config/index.js'
export default {
    name: "igrovue-avtomatu",
    amp: 'hybrid',
    ampLayout: 'default.amp',
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_h1_amp, app_content_amp, app_casino_loop_amp, app_banner_amp, app_blog_card_amp, app_footer_amp, app_header_amp},
    async asyncData({store, route}) {
        const request = {
            type: 'page',
            url: 'igrovue-avtomatu'
        }
        const response = await DAL_Page.getData(request)
        const options = await DAL_Options.getOptions()
        const body = response.data  
        const data = body
        data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
        data.options = options.data
        return {data}
    },
    head() {
        return {
            title: this.data.body.meta_title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.data.body.meta_description
                },
                {
                    hid: 'classification',
                    name: 'classification',
                    content: this.data.body.meta.classification
                },
                {
                    hid: 'distribution',
                    name: 'distribution',
                    content: this.data.body.meta.distribution
                },
                {
                    hid: 'author',
                    name: 'author',
                    content: this.data.body.meta.author
                },
                {
                    hid: 'creator',
                    name: 'creator',
                    content: this.data.body.meta.creator
                },
                {
                    hid: 'copyright',
                    name: 'copyright',
                    content: this.data.body.meta.copyright
                },
                {
                    hid: 'publisher',
                    name: 'publisher',
                    content: this.data.body.meta.publisher
                },
                {
                    hid: 'geo.placename',
                    name: 'geo.placename',
                    content: this.data.body.meta.placename
                },
                {
                    hid: 'geo.position',
                    name: 'geo.position',
                    content: this.data.body.meta.position
                },
                {
                    hid: 'geo.region',
                    name: 'geo.region',
                    content: this.data.body.meta.region
                },
                {
                    hid: 'ICBM',
                    name: 'ICBM',
                    content: this.data.body.meta.ICBM
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: this.data.body.meta.robots
                },
               // og //
                {
                    hid: 'og:locale',
                    property: 'og:locale',
                    content: 'ru-UA'
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.data.body.meta_title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.data.body.meta_description
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: this.data.body.currentUrl,
                },
                {
                    hid: 'og:article:section',
                    property: 'og:article:section',
                    content: this.data.body.h1,
                },
                {
                    hid: 'og:article:published_time',
                    property: 'og:article:published_time',
                    content: this.data.body.date,
                },
                {
                    hid: 'og:article:modified_time',
                    property: 'og:article:modified_time',
                    content: this.data.body.date_modified,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.data.body.thumbnail,
                },
                // end og //
                // twitter //
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.data.body.meta_title,
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.data.body.meta_description,
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: this.data.body.thumbnail,
                },
                {
                    hid: 'twitter:url',
                    name: 'twitter:url',
                    content: this.data.body.currentUrl,
                },
                // end twitter //
            ],
            link: [
                { rel: 'canonical', href: this.data.body.currentUrl}
            ]
        }
    }
}
</script>

<style>

</style>
