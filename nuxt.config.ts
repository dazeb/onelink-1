export default ({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],

  build: {
      transpile: ["@headlessui/vue"],
  },

  colorMode: {
      classSuffix: '',
  },

  compatibilityDate: '2024-09-11',

  devtools: {
    enabled: true,
  },
});
