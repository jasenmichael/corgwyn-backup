export default {
  target: 'static',
  head: {
    title: 'CORGWYN REHABILITATION SANCTUARY',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A self sustaining Corgwyn Rehabilitation Sanctuary (CRS)' }
    ],
    // link: [
    //   { rel: 'icon', type: 'image/png', href: '/icon-32x32.png', sizes:'32x32' },
    //   { rel: 'icon', type: 'image/png', href: '/icon-192x192.png', sizes:'192x192' }
    // ]
  },
  css: [],
  plugins: [
    { src: './plugins/smooth-scroll', mode: 'client' }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/image'
  ],
  image: {
    sizes: [200, 350, 600]
  },
  pwa: {
    manifest: {
      theme_color: '#2F7AC0'
  }
  },
  build: {}
}
