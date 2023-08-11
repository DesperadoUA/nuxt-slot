<template>
<div>
    <app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
  <main>
    <app_banner_amp      :value="data.body.h1" />
    <app_breadcrumb_amp  :value="data.body.title" />
    <app_casino_top_amp  :value="data.body" />
    <app_bonuses_amp     :value="data.body.event" />
    <app_how_to_amp      :value="data.body.how_to" />
    <app_video_amp       :video_src="data.body.video_iframe" />
    <app_content_amp     :value="data.body.amp_content" />
    <app_faq_amp         :value="data.body.faq"
                     :title="data.body.faq_title"
                     />
    <app_reviews_amp 
        v-if="data.body.reviews.length"
        :value="data.body.reviews" 
        :title="data.body.title" 
        post_type="casino" 
        :post_url="data.body.routeParamsId"
    />
    <app_form_review_amp :id="data.body.id" />      
    <app_slick_button_amp :referal="{ref:data.body.ref}" />
  </main>
  <app_footer_amp :options="data.options" />
</div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import DAL_Options from '~/DAL/options'
    import app_banner_amp from '~/components/banner/app_banner_casino_amp'
    import app_breadcrumb_amp from '~/components/breadcrumb/app_breadcrumb_amp'
    import app_casino_top_amp from '~/components/casino_top/app_casino_top_amp'
    import app_bonuses_amp from '~/components/bonuses/app_bonuses_amp'
    import app_how_to_amp from '~/components/how_to/app_how_to_amp'
    import app_content_amp from '~/components/content/app-content_amp'
    import app_faq_amp from '~/components/faq/app_faq_amp'
    import app_reviews_amp from '~/components/reviews/app_reviews_amp'
    import app_form_review_amp from '~/components/form_review/app_form_review_amp'
    import app_video_amp from '~/components/video/app_video_amp'
    import app_slick_button_amp from '~/components/slick_button/app_slick_button_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import config from '~/config'
    import { getErrorPageObj } from '~/utils'
    import headMixin from '~/mixins/head.js'
    export default {
        name: "app_single_casino",
        mixins: [headMixin],
        amp: 'hybrid',
        ampLayout: 'default.amp',
        components: {app_banner_amp, app_content_amp, app_breadcrumb_amp, app_casino_top_amp, app_header_amp, app_footer_amp,
        app_reviews_amp, app_form_review_amp, app_faq_amp, app_video_amp, app_slick_button_amp, app_bonuses_amp, app_how_to_amp},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error, store}) {
            const request = {
                type: 'casino',
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
               const event = []
               data.body.faq.forEach(element => {
                faq.push({
                    status: 'close',
                    answer: element.answer,
                    question: element.question
                })
               })
               data.body.event.forEach(element => {
                    let ref = []
                    if(element.event_ref.length === 0) ref = data.body.ref
                    else {
                        element.event_ref.forEach(element => {
                            ref.push({
                                casino_ref: element.event_ref.length === 0 ? data.body.ref : element.event_ref
                            })
                        });
                    }

                    event.push({
                        status: 'close',
                        title: element.event_title,
                        description: element.event_description,
                        start: element.event_start,
                        end: element.event_end,
                        name: element.event_name,
                        site: element.event_site,
                        ref: ref,
                        thumbnail: data.body.thumbnail
                    })
               })

               data.body.faq = faq
               data.body.event = event
               data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
               data.options = options.data
               data.body.routeParamsId = route.params.id
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