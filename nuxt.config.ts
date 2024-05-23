// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true, // use router-view

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
});
