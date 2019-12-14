
export default {
  mode: 'universal',
  server: {
    port: 3100, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Didact+Gothic|PT+Sans|Staatliches&display=swap' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js' },
      { src: '/js/uikit-icons.min.js' },
    ]
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['uikit/dist/css/uikit.css','@/assets/css/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
 
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    ['vue-currency-filter/nuxt', {
      symbol: '$',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true
    }],
    'nuxt-vuex-localstorage',
  ],
  serverMiddleware: [
    '~/api/index.js',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://say.sexpositive.cl/'
  },
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "https://say.sexpositive.cl/graphql"
      }
    }
  },
  markdownit: {  
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  styleResources: {
    scss: [
    '@/assets/css/vars.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
