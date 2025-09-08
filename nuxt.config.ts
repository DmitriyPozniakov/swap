// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n"],

  i18n: {
    
    langDir: "locales/",
    locales: [
      { code: "en", file: "en.json" },
      { code: "pl", file: "pl.json" },
    ],
    
  },
  ssr: false, 
});
