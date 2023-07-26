
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: true,
          user: {
            url: '/api/users/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: '/user/login', // User will be redirected to this path if login is required
      logout: '/', // User will be redirected to this path if after logout, current route is protected
      home: '/' // User will be redirect to this path after login if accessed login page directly
    },
    rewriteRedirects: true,
  },

  serverMiddleware: [
    '~/api/index.js'
  ]
}
