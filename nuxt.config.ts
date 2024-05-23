// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "@pinia/nuxt"],
  nitro: {
    compressPublicAssets: true,
  },
});
