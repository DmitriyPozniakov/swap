export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "pl",
        file: "pl.json",
        name: "Polski",
      },
    ],
    defaultLocale: "pl",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
      fallbackLocale: "pl",
    },
    compilation: {
      strictMessage: false,
    },
  },
  ssr: false,
});
