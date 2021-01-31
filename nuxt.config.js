export default {
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
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix : true
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
    // https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial
    ['storyblok-nuxt', {
      accessToken: '8zzel9cVTzGIcmMNO4uaOQtt',
      cacheProvider: 'memory',
      // optional https://www.storyblok.com/docs/Guides/storyblok-latest-js#storyblokinitconfig
      customParent: 'cairo-pioneers-reference'
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // I18n-nuxt module configuration ()
  i18n : {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
