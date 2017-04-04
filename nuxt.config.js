module.exports = {
  env: {
    runningPort: process.env.PORT || 3000
  },
  cache: true,
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    postcss: [
      require('cssnano')(),
      require('autoprefixer')(),
      require('lost')(),
      require('postcss-custom-media')(
        {
          '--phone': '(min-width: 544px)',
          '--tablet': '(min-width: 768px)',
          '--desktop': '(min-width: 992px)',
          '--large-desktop': '(min-width: 1200px)'
        }
      ),
      require('postcss-css-reset')()
    ],
    vendor: [
      'isomorphic-fetch',
      'apollo-client',
      'graphql-tag',
      'axios',
      'vue-sticky'
    ]
  },
  plugins: [
    '~plugins/apolloClient',
    '~plugins/i18n'
  ],
  head: {
    title: 'Nuxt + Apollo + GraphCMS + i18n',
    meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:600,400,300,200' }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  loading: {
    color: '#0cb699'
  },
  css: [
    // '~assets/css/reset.css'
    /*
    { src: 'bootstrap/scss/bootstrap-reboot.scss', lang: 'scss' },
    { src: 'bootstrap/scss/bootstrap-grid.scss', lang: 'scss' }
    */
  ]
}
