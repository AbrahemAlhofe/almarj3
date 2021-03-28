module.exports = {
  telemetry: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cairo-pioneers-reference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css/normalize.css',
    '@/assets/fonts/Cairo/load.css',
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/i18n.js',
    '@/plugins/socket.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://github.com/nuxt-community/svg-module#readme
    '@nuxtjs/svg',
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix : true
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://github.com/storyblok/storyblok-nuxt
    ['storyblok-nuxt', {
      accessToken: process.env.STORYBLOK_AUTH_TOKEN
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org
    ['nuxt-i18n', {
      baseUrl : 'https://cpr.heroku.com',
      seo : true,
      strategy : 'prefix',
      locales : [
        { code: 'ar', iso: 'ar-EG', dir: 'rtl', name : 'عربي' }
      ],
      defaultLocale : 'ar',
      vueI18nLoader: true
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // https://nuxtjs.org/docs/2.x/directory-structure/middleware
  router: {},

  reference: {
    homePage : 'get-started/intro'
  }
}
