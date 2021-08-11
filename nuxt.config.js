import DAL_Pages from '../client/DAL/static_pages'
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-slot',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'script', src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js' }
    ]
  },
  serverMiddleware: [
    '~/serverMiddleware/redirects',
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            browsers: ["IE 11", "last 2 version"]
          }
        ]
      ]
    }
  },
  sitemap: {
    exclude: [
      '/blog',
      '/bonuses',
      '/igrovue-avtomatu'
    ],
    routes: async () => {
      const sitemapData = {
        type: 'sitemap',
        url: ''
      }
      const {data} = await DAL_Pages.getData(sitemapData)
      const staticPages = data.static_page
      const casinoPosts = data.casino
      const blogPosts = data.blog
      const vendorsPosts = data.vendors
      const paymentsPosts = data.payments
      return staticPages.concat(casinoPosts, blogPosts, paymentsPosts, vendorsPosts)
    }
  }  
}
