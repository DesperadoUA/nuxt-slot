<template>
<div>
  <app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
  <main>
    <app_banner_amp :value="data.body.h1" />
    <app_breadcrumb_amp :value="data.body.title" />
    <app_top_content_amp :value="data.body" /> 
    <app_casino_loop_amp :posts="data.body.casino" />   
    <app_faq_amp :value="data.body.faq" :title="data.body.faq_title" />          
  </main>
   <app_footer_amp :options="data.options" />
</div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import DAL_Options from '~/DAL/options'
    import app_banner_amp from '~/components/banner/app_banner_casino_amp'
    import app_breadcrumb_amp from '~/components/breadcrumb/app_breadcrumb_amp'
    import app_casino_loop_amp from '~/components/casino_loop/app_casino_loop_amp'
    import app_top_content_amp from '~/components/top_content/app_top_content_amp'
    import app_faq_amp from '~/components/faq/app_faq_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import config from '~/config/index.js'
    import { getErrorPageObj } from '~/utils/index.js'
    export default {
        name: "app_single_vendor_amp",
        amp: 'hybrid',
        ampLayout: 'default.amp',
        components: {app_banner_amp, app_top_content_amp, app_breadcrumb_amp, app_casino_loop_amp, app_faq_amp, app_header_amp, app_footer_amp},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, req, error}) {
             const request = {
                type: 'vendor',
                url: route.params.id
            }
            const response = await DAL_Page.getData(request)
            if(response.data.status === '404') {
               error(getErrorPageObj())
           } 
           else {
               const options = await DAL_Options.getOptions()
               const body = response.data  
               const data = body
               data.body = data.body
               const faq = []
               data.body.faq.forEach(element => {
                 faq.push({
                    status: 'close',
                    answer: element.answer,
                    question: element.question
                })
            });
               data.body.faq = faq
               data.body.currentUrl = config.BASE_URL + route.path
               data.options = options.data
               return {data}
            }
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
                    content: 'article'
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

<style scoped>

</style>