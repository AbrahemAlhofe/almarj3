console.log( process.cwd() )

const ContentUnit = require('./server/units/content.unit');

const Content = ContentUnit();

module.exports = {
  telemetry: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cairo-pioneers-reference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
      { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5" },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
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
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    '@nuxtjs/axios',
    // https://github.com/storyblok/storyblok-nuxt
    ['storyblok-nuxt', {
      accessToken: process.env.STORYBLOK_AUTH_TOKEN
    }],
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org
    ['nuxt-i18n', {
      baseUrl : process.env.BASE_URL,
      seo : true,
      strategy : 'prefix',
      locales : [
        { code: 'ar', iso: 'ar-EG', dir: 'rtl', name : 'عربي' }
      ],
      defaultLocale : 'ar',
      vueI18nLoader: true
    }],
    // https://github.com/nuxt-community/sitemap-module#readme
    ['@nuxtjs/sitemap', {
      hostname: process.env.BASE_URL,
      i18n: true,
      async routes () {
        const articles = await Content.getArticles()
        return articles.map( article => ({
          url: `/docs/${article.full_slug}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: article.published_at
        }))
      }
    }]
  ],

  axios : {
    baseURL: process.env.BASE_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // https://nuxtjs.org/docs/2.x/directory-structure/middleware
  router: {},

  reference: {
    homePage : 'get-started/intro'
  }
}
