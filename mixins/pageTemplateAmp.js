import translateMixin from '~/mixins/translate'
import app_header_amp from '~/components/header/app-header_amp'
import app_footer_amp from '~/components/footer/app-footer_amp'
import ContentAmp from '~/components/content/app-content_amp'
export default {
	amp: 'hybrid',
	ampLayout: 'default.amp',
	mixins: [translateMixin],
	components: {
		app_header_amp,
		app_footer_amp,
		ContentAmp
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
					content: this.data.body.currentUrl
				},
				{
					hid: 'og:article:section',
					property: 'og:article:section',
					content: this.data.body.h1
				},
				{
					hid: 'og:article:published_time',
					property: 'og:article:published_time',
					content: this.data.body.date
				},
				{
					hid: 'og:article:modified_time',
					property: 'og:article:modified_time',
					content: this.data.body.date_modified
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.data.body.thumbnail
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary'
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.data.body.meta_title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.data.body.meta_description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.data.body.thumbnail
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: this.data.body.currentUrl
				}
			],
			link: [{ rel: 'canonical', href: this.data.body.currentUrl }]
		}
	}
}
